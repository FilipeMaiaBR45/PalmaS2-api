import { Injectable, HttpException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import e from 'express';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    let createdUser: CreateUserDto = {
      email: '',
      password: '',
    };

    try {
      createdUser = await this.prisma.user.create({ data });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (e.code === 'P2002') {
          console.log(e);
        }
      }
      throw new HttpException(
        'There is a unique constraint violation, a new user cannot be created with this email',
        400,
      );
    }

    return {
      ...createdUser,
      password: undefined,
    };
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
  async findByEmailUser(email: string) {
    const data = await this.prisma.user.findUnique({
      where: { email },
      select: {
        email: true,
      },
    });

    if (data == null) {
      throw new HttpException('sem user', 400);
    } else {
      return data;
    }

    console.log(data);
  }
}

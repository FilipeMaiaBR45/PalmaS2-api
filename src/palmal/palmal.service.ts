import { Injectable } from '@nestjs/common';
import { CreatePalmalDto } from './dto/create-palmal.dto';
import { UpdatePalmalDto } from './dto/update-palmal.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Palmal } from './entities/palmal.entity';

@Injectable()
export class PalmalService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePalmalDto): Promise<Palmal> {
    const createdPalmal = await this.prisma.palmal.create({ data });

    return createdPalmal;
  }

  findAll() {
    return `This action returns all palmal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} palmal`;
  }

  update(id: number, updatePalmalDto: UpdatePalmalDto) {
    return `This action updates a #${id} palmal`;
  }

  remove(id: number) {
    return `This action removes a #${id} palmal`;
  }
}

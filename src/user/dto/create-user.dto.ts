import { Prisma } from '@prisma/client';
import { IsEmail, IsNumber, IsString } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto implements User {
  id?: number;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  palmais?: Prisma.PalmalUncheckedCreateNestedManyWithoutUserInput;
}

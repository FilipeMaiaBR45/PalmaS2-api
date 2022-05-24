import { Prisma } from '@prisma/client';
import { User } from '../entities/user.entity';

export class CreateUserDto implements User {
  id?: number | bigint;
  email: string;
  password: string;
  palmais?: Prisma.PalmalUncheckedCreateNestedManyWithoutUserInput;
}

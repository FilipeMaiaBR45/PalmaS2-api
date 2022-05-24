import { Prisma } from '@prisma/client';
export class User implements Prisma.UserUncheckedCreateInput {
  id?: number | bigint;
  email: string;
  password: string;
  palmais?: Prisma.PalmalUncheckedCreateNestedManyWithoutUserInput;
}

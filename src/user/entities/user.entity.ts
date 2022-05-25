import { Prisma } from '@prisma/client';
export class User implements Prisma.UserUncheckedCreateInput {
  id?: bigint;
  email: string;
  password: string;
  palmais?: Prisma.PalmalUncheckedCreateNestedManyWithoutUserInput;
}

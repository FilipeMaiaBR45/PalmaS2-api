import { Prisma } from '@prisma/client';
export class Palmal implements Prisma.PalmalUncheckedCreateInput {
  id?: number;
  variedade: string;
  area: number;
  tradicional: boolean;
  dataCadastro: string;
  lastUpdate: string;
  reboleiras?: Prisma.ReboleiraUncheckedCreateNestedManyWithoutPalmalInput;
  userId?: number;
}

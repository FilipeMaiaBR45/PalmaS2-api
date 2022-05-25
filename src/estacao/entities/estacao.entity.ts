import { Prisma } from '@prisma/client';
export class Estacao implements Prisma.EstacaoUncheckedCreateInput {
  id?: number;
  status: string;
  dataCadastro: string;
  proximaAvaliacao: string;
  deleted?: string;
  isObservationOpen: boolean;
  lastUpdate: string;
  reboleiraId?: number;
  Raquetes?: Prisma.RaqueteUncheckedCreateNestedManyWithoutEstacaoInput;
}

import { Prisma } from '@prisma/client';
export class Reboleira implements Prisma.ReboleiraUncheckedCreateInput {
  id?: number;
  iteracao: string;
  dataCadastro: string | Date;
  proximaAvaliacao?: string;
  deleted?: string;
  avaliado: boolean;
  lastUpdate: string;
  estacaoes?: Prisma.EstacaoUncheckedCreateNestedManyWithoutReboleiraInput;
  palmalId?: number;
}

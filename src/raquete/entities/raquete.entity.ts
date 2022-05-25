import { Prisma } from '@prisma/client';
export class Raquete implements Prisma.RaqueteUncheckedCreateInput {
  id?: number;
  posicao: string;
  dataDacastro: string;
  aparencia: string;
  agenteControleBiologico: boolean;
  agenteControleQuimico: boolean;
  avaliado: boolean;
  corte?: string;
  dataObservacao?: string;
  exported: boolean;
  nextVersion: number | bigint;
  estacaoId?: number;
}

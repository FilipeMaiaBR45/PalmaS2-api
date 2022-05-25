import { Prisma } from '@prisma/client';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { Estacao } from '../entities/estacao.entity';

export class CreateEstacaoDto implements Estacao {
  id?: number;
  @IsString()
  status: string;
  @IsString()
  dataCadastro: string;
  @IsString()
  proximaAvaliacao: string;
  @IsString()
  deleted?: string;
  @IsBoolean()
  isObservationOpen: boolean;
  @IsString()
  lastUpdate: string;
  @IsNumber()
  reboleiraId?: number;
  Raquetes?: Prisma.RaqueteUncheckedCreateNestedManyWithoutEstacaoInput;
}

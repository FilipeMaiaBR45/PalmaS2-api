import { Prisma } from '@prisma/client';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { Reboleira } from '../entities/reboleira.entity';

export class CreateReboleiraDto implements Reboleira {
  id?: number;
  @IsString()
  iteracao: string;
  @IsString()
  dataCadastro: string;
  @IsString()
  proximaAvaliacao?: string;
  @IsString()
  deleted?: string;
  @IsBoolean()
  avaliado: boolean;
  @IsString()
  lastUpdate: string;
  estacaoes?: Prisma.EstacaoUncheckedCreateNestedManyWithoutReboleiraInput;
  @IsNumber()
  palmalId?: number;
}

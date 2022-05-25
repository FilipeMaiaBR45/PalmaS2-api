import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { Raquete } from '../entities/raquete.entity';

export class CreateRaqueteDto implements Raquete {
  id?: number;
  @IsString()
  posicao: string;
  @IsString()
  dataDacastro: string;
  @IsString()
  aparencia: string;
  @IsBoolean()
  agenteControleBiologico: boolean;
  @IsBoolean()
  agenteControleQuimico: boolean;
  @IsBoolean()
  avaliado: boolean;
  @IsString()
  corte?: string;
  @IsString()
  dataObservacao?: string;
  @IsBoolean()
  exported: boolean;
  @IsNumber()
  nextVersion: number;
  @IsNumber()
  estacaoId?: number;
}

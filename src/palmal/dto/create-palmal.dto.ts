import { Prisma } from '@prisma/client';
import { Palmal } from '../entities/palmal.entity';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreatePalmalDto implements Palmal {
  id?: number;
  @IsString()
  variedade: string;
  @IsNumber()
  area: number;
  @IsBoolean()
  tradicional: boolean;
  @IsString()
  dataCadastro: string;
  @IsString()
  lastUpdate: string;
  reboleiras?: Prisma.ReboleiraUncheckedCreateNestedManyWithoutPalmalInput;
  @IsNumber()
  userId?: number;
}

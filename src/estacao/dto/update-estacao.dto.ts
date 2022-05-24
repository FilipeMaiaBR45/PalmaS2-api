import { PartialType } from '@nestjs/mapped-types';
import { CreateEstacaoDto } from './create-estacao.dto';

export class UpdateEstacaoDto extends PartialType(CreateEstacaoDto) {}

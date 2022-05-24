import { PartialType } from '@nestjs/mapped-types';
import { CreateReboleiraDto } from './create-reboleira.dto';

export class UpdateReboleiraDto extends PartialType(CreateReboleiraDto) {}

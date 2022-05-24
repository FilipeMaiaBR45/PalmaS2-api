import { PartialType } from '@nestjs/mapped-types';
import { CreatePalmalDto } from './create-palmal.dto';

export class UpdatePalmalDto extends PartialType(CreatePalmalDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateRaqueteDto } from './create-raquete.dto';

export class UpdateRaqueteDto extends PartialType(CreateRaqueteDto) {}

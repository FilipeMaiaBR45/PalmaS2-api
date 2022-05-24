import { Injectable } from '@nestjs/common';
import { CreateRaqueteDto } from './dto/create-raquete.dto';
import { UpdateRaqueteDto } from './dto/update-raquete.dto';

@Injectable()
export class RaqueteService {
  create(createRaqueteDto: CreateRaqueteDto) {
    return 'This action adds a new raquete';
  }

  findAll() {
    return `This action returns all raquete`;
  }

  findOne(id: number) {
    return `This action returns a #${id} raquete`;
  }

  update(id: number, updateRaqueteDto: UpdateRaqueteDto) {
    return `This action updates a #${id} raquete`;
  }

  remove(id: number) {
    return `This action removes a #${id} raquete`;
  }
}

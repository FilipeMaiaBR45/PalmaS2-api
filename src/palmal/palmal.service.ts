import { Injectable } from '@nestjs/common';
import { CreatePalmalDto } from './dto/create-palmal.dto';
import { UpdatePalmalDto } from './dto/update-palmal.dto';

@Injectable()
export class PalmalService {
  create(createPalmalDto: CreatePalmalDto) {
    return 'This action adds a new palmal';
  }

  findAll() {
    return `This action returns all palmal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} palmal`;
  }

  update(id: number, updatePalmalDto: UpdatePalmalDto) {
    return `This action updates a #${id} palmal`;
  }

  remove(id: number) {
    return `This action removes a #${id} palmal`;
  }
}

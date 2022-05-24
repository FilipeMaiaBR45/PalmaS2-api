import { Injectable } from '@nestjs/common';
import { CreateReboleiraDto } from './dto/create-reboleira.dto';
import { UpdateReboleiraDto } from './dto/update-reboleira.dto';

@Injectable()
export class ReboleiraService {
  create(createReboleiraDto: CreateReboleiraDto) {
    return 'This action adds a new reboleira';
  }

  findAll() {
    return `This action returns all reboleira`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reboleira`;
  }

  update(id: number, updateReboleiraDto: UpdateReboleiraDto) {
    return `This action updates a #${id} reboleira`;
  }

  remove(id: number) {
    return `This action removes a #${id} reboleira`;
  }
}

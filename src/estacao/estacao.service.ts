import { Injectable } from '@nestjs/common';
import { CreateEstacaoDto } from './dto/create-estacao.dto';
import { UpdateEstacaoDto } from './dto/update-estacao.dto';

@Injectable()
export class EstacaoService {
  create(createEstacaoDto: CreateEstacaoDto) {
    return 'This action adds a new estacao';
  }

  findAll() {
    return `This action returns all estacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estacao`;
  }

  update(id: number, updateEstacaoDto: UpdateEstacaoDto) {
    return `This action updates a #${id} estacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} estacao`;
  }
}

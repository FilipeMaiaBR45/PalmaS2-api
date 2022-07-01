import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEstacaoDto } from './dto/create-estacao.dto';
import { UpdateEstacaoDto } from './dto/update-estacao.dto';

@Injectable()
export class EstacaoService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateEstacaoDto) {
    const createdEstacao = await this.prisma.estacao.create({ data });

    return createdEstacao;
  }

  async findAll() {
    return this.prisma.estacao.findMany();
  }

  async findOne(id: number) {
    return this.prisma.estacao.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateEstacaoDto) {
    const updatedEstacao = await this.prisma.estacao.update({
      where: { id },
      data,
    });
    return updatedEstacao;
  }

  async remove(id: number) {
    return this.prisma.estacao.delete({ where: { id } });
  }
}

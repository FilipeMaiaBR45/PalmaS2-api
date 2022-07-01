import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReboleiraDto } from './dto/create-reboleira.dto';
import { UpdateReboleiraDto } from './dto/update-reboleira.dto';

@Injectable()
export class ReboleiraService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateReboleiraDto) {
    const createdReboleira = await this.prisma.reboleira.create({ data });

    return createdReboleira;
  }

  async findAll() {
    return this.prisma.reboleira.findMany();
  }

  async findOne(id: number) {
    return this.prisma.reboleira.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateReboleiraDto) {
    const updatedReboleira = this.prisma.reboleira.update({
      where: { id },
      data,
    });
    return updatedReboleira;
  }

  async remove(id: number) {
    return this.prisma.reboleira.delete({ where: { id } });
  }
}

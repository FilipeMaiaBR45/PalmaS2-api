import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRaqueteDto } from './dto/create-raquete.dto';
import { UpdateRaqueteDto } from './dto/update-raquete.dto';

@Injectable()
export class RaqueteService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateRaqueteDto) {
    const createdRaquete = await this.prisma.raquete.create({ data });
    return createdRaquete;
  }

  async findAll() {
    return this.prisma.raquete.findMany();
  }

  async findOne(id: number) {
    return this.prisma.raquete.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateRaqueteDto) {
    const updatedRaquete = await this.prisma.raquete.update({
      where: { id },
      data,
    });
    return updatedRaquete;
  }

  async remove(id: number) {
    return this.prisma.raquete.delete({ where: { id } });
  }
}

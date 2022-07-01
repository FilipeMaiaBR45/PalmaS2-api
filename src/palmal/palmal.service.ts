import { Injectable } from '@nestjs/common';
import { CreatePalmalDto } from './dto/create-palmal.dto';
import { UpdatePalmalDto } from './dto/update-palmal.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Palmal } from './entities/palmal.entity';

@Injectable()
export class PalmalService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePalmalDto): Promise<Palmal> {
    const createdPalmal = await this.prisma.palmal.create({ data });

    return createdPalmal;
  }

  async findAll() {
    return this.prisma.palmal.findMany();
  }

  async findOne(id: number) {
    return this.prisma.palmal.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdatePalmalDto) {
    const updatedPalmal = await this.prisma.palmal.update({
      where: { id },
      data,
    });
    return updatedPalmal;
  }

  async remove(id: number) {
    return this.prisma.palmal.delete({ where: { id } });
  }
}

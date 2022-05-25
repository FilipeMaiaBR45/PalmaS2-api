import { Module } from '@nestjs/common';
import { PalmalService } from './palmal.service';
import { PalmalController } from './palmal.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [PalmalController],
  providers: [PalmalService, PrismaService],
  exports: [PalmalService],
})
export class PalmalModule {}

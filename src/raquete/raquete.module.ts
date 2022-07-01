import { Module } from '@nestjs/common';
import { RaqueteService } from './raquete.service';
import { RaqueteController } from './raquete.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RaqueteController],
  providers: [RaqueteService, PrismaService],
})
export class RaqueteModule {}

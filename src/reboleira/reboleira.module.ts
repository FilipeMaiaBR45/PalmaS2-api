import { Module } from '@nestjs/common';
import { ReboleiraService } from './reboleira.service';
import { ReboleiraController } from './reboleira.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ReboleiraController],
  providers: [ReboleiraService, PrismaService],
})
export class ReboleiraModule {}

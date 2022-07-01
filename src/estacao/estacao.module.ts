import { Module } from '@nestjs/common';
import { EstacaoService } from './estacao.service';
import { EstacaoController } from './estacao.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EstacaoController],
  providers: [EstacaoService, PrismaService],
})
export class EstacaoModule {}

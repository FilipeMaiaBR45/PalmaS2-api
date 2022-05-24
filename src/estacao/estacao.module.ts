import { Module } from '@nestjs/common';
import { EstacaoService } from './estacao.service';
import { EstacaoController } from './estacao.controller';

@Module({
  controllers: [EstacaoController],
  providers: [EstacaoService]
})
export class EstacaoModule {}

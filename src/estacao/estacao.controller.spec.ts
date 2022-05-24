import { Test, TestingModule } from '@nestjs/testing';
import { EstacaoController } from './estacao.controller';
import { EstacaoService } from './estacao.service';

describe('EstacaoController', () => {
  let controller: EstacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstacaoController],
      providers: [EstacaoService],
    }).compile();

    controller = module.get<EstacaoController>(EstacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

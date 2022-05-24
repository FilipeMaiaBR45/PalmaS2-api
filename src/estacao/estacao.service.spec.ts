import { Test, TestingModule } from '@nestjs/testing';
import { EstacaoService } from './estacao.service';

describe('EstacaoService', () => {
  let service: EstacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstacaoService],
    }).compile();

    service = module.get<EstacaoService>(EstacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

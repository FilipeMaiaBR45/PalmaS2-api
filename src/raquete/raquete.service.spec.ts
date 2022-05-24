import { Test, TestingModule } from '@nestjs/testing';
import { RaqueteService } from './raquete.service';

describe('RaqueteService', () => {
  let service: RaqueteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaqueteService],
    }).compile();

    service = module.get<RaqueteService>(RaqueteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

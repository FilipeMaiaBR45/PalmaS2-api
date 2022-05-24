import { Test, TestingModule } from '@nestjs/testing';
import { PalmalService } from './palmal.service';

describe('PalmalService', () => {
  let service: PalmalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PalmalService],
    }).compile();

    service = module.get<PalmalService>(PalmalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ReboleiraService } from './reboleira.service';

describe('ReboleiraService', () => {
  let service: ReboleiraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReboleiraService],
    }).compile();

    service = module.get<ReboleiraService>(ReboleiraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

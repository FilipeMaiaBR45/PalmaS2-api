import { Test, TestingModule } from '@nestjs/testing';
import { ReboleiraController } from './reboleira.controller';
import { ReboleiraService } from './reboleira.service';

describe('ReboleiraController', () => {
  let controller: ReboleiraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReboleiraController],
      providers: [ReboleiraService],
    }).compile();

    controller = module.get<ReboleiraController>(ReboleiraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

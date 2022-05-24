import { Test, TestingModule } from '@nestjs/testing';
import { PalmalController } from './palmal.controller';
import { PalmalService } from './palmal.service';

describe('PalmalController', () => {
  let controller: PalmalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PalmalController],
      providers: [PalmalService],
    }).compile();

    controller = module.get<PalmalController>(PalmalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

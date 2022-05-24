import { Test, TestingModule } from '@nestjs/testing';
import { RaqueteController } from './raquete.controller';
import { RaqueteService } from './raquete.service';

describe('RaqueteController', () => {
  let controller: RaqueteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaqueteController],
      providers: [RaqueteService],
    }).compile();

    controller = module.get<RaqueteController>(RaqueteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

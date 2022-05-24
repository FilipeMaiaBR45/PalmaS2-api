import { Module } from '@nestjs/common';
import { RaqueteService } from './raquete.service';
import { RaqueteController } from './raquete.controller';

@Module({
  controllers: [RaqueteController],
  providers: [RaqueteService]
})
export class RaqueteModule {}

import { Module } from '@nestjs/common';
import { PalmalService } from './palmal.service';
import { PalmalController } from './palmal.controller';

@Module({
  controllers: [PalmalController],
  providers: [PalmalService]
})
export class PalmalModule {}

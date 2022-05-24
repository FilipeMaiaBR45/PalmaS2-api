import { Module } from '@nestjs/common';
import { ReboleiraService } from './reboleira.service';
import { ReboleiraController } from './reboleira.controller';

@Module({
  controllers: [ReboleiraController],
  providers: [ReboleiraService]
})
export class ReboleiraModule {}

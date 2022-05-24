import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReboleiraService } from './reboleira.service';
import { CreateReboleiraDto } from './dto/create-reboleira.dto';
import { UpdateReboleiraDto } from './dto/update-reboleira.dto';

@Controller('reboleira')
export class ReboleiraController {
  constructor(private readonly reboleiraService: ReboleiraService) {}

  @Post()
  create(@Body() createReboleiraDto: CreateReboleiraDto) {
    return this.reboleiraService.create(createReboleiraDto);
  }

  @Get()
  findAll() {
    return this.reboleiraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reboleiraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReboleiraDto: UpdateReboleiraDto) {
    return this.reboleiraService.update(+id, updateReboleiraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reboleiraService.remove(+id);
  }
}

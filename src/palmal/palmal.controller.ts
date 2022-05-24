import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PalmalService } from './palmal.service';
import { CreatePalmalDto } from './dto/create-palmal.dto';
import { UpdatePalmalDto } from './dto/update-palmal.dto';

@Controller('palmal')
export class PalmalController {
  constructor(private readonly palmalService: PalmalService) {}

  @Post()
  create(@Body() createPalmalDto: CreatePalmalDto) {
    return this.palmalService.create(createPalmalDto);
  }

  @Get()
  findAll() {
    return this.palmalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.palmalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePalmalDto: UpdatePalmalDto) {
    return this.palmalService.update(+id, updatePalmalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.palmalService.remove(+id);
  }
}

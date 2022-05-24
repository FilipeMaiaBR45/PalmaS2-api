import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RaqueteService } from './raquete.service';
import { CreateRaqueteDto } from './dto/create-raquete.dto';
import { UpdateRaqueteDto } from './dto/update-raquete.dto';

@Controller('raquete')
export class RaqueteController {
  constructor(private readonly raqueteService: RaqueteService) {}

  @Post()
  create(@Body() createRaqueteDto: CreateRaqueteDto) {
    return this.raqueteService.create(createRaqueteDto);
  }

  @Get()
  findAll() {
    return this.raqueteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.raqueteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRaqueteDto: UpdateRaqueteDto) {
    return this.raqueteService.update(+id, updateRaqueteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.raqueteService.remove(+id);
  }
}

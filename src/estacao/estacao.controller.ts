import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstacaoService } from './estacao.service';
import { CreateEstacaoDto } from './dto/create-estacao.dto';
import { UpdateEstacaoDto } from './dto/update-estacao.dto';

@Controller('estacao')
export class EstacaoController {
  constructor(private readonly estacaoService: EstacaoService) {}

  @Post()
  create(@Body() createEstacaoDto: CreateEstacaoDto) {
    return this.estacaoService.create(createEstacaoDto);
  }

  @Get()
  findAll() {
    return this.estacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estacaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstacaoDto: UpdateEstacaoDto) {
    return this.estacaoService.update(+id, updateEstacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estacaoService.remove(+id);
  }
}

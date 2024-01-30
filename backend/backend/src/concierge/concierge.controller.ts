import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConciergeService } from './concierge.service';
import { CreateConciergeDto } from './dto/create-concierge.dto';
import { UpdateConciergeDto } from './dto/update-concierge.dto';

@Controller('concierge')
export class ConciergeController {
  constructor(private readonly conciergeService: ConciergeService) {}

  @Post()
  create(@Body() createConciergeDto: CreateConciergeDto) {
    return this.conciergeService.create(createConciergeDto);
  }

  @Get()
  findAll() {
    return this.conciergeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conciergeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConciergeDto: UpdateConciergeDto) {
    return this.conciergeService.update(+id, updateConciergeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conciergeService.remove(+id);
  }
}

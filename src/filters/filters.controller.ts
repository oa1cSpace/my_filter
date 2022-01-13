import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFilterDto } from './dto/create-filter.dto';
import { FiltersService } from './filters.service';

@ApiTags('Filters')
@Controller('filters')
export class FiltersController {

  constructor(private filterService: FiltersService) {}

  @Post()
  create(@Body() dto: CreateFilterDto) {
    return this.filterService.createFilter(dto)
  }

  @Get('/:type')
  getByType(@Param('type') type: string) {
    return this.filterService.getFilterByType(type);
  }
}

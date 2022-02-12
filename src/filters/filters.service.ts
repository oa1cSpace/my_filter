import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFilterDto } from './dto/create-filter.dto';
import { Filter } from './filter.model';

@Injectable()
export class FiltersService {

  constructor(@InjectModel(Filter) private filterRepository: typeof Filter) {}

  async createFilter(dto: CreateFilterDto) {
    return await this.filterRepository.create(dto);
  }

  async getFilterByType(type: string) {
    return await this.filterRepository.findOne({where: {type}});
  }
}

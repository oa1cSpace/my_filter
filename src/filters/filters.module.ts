import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import { Filter } from './filter.model';
import { FiltersService } from './filters.service';
import { FiltersController } from './filters.controller';
import { UserFilters } from './user-filters.model';

@Module({
  providers: [FiltersService],
  controllers: [FiltersController],
  imports: [
    SequelizeModule.forFeature([Filter, User, UserFilters])
  ]
})
export class FiltersModule {}

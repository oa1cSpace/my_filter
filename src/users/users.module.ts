import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Filter } from '../filters/filter.model';
import { UserFilters } from '../filters/user-filters.model';
import { User } from './user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Filter, UserFilters])
  ]
})
export class UsersModule {}

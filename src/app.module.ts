import { Module } from '@nestjs/common';
// const config = require('config');
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Filter } from './filters/filter.model';
import { UserFilters } from './filters/user-filters.model';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { FiltersModule } from './filters/filters.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';

// const POSTGRES_HOST = config.get('postgres_host');
// const POSTGRES_PORT = config.get('postgres_port');
// const POSTGRES_USER = config.get('postgres_user');
// const POSTGRES_PASSWORD = config.get('postgres_password');
// const POSTGRES_DB = config.get('postgres_db');

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${ process.env.NODE_ENV }.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      // host: POSTGRES_HOST,
      // port: POSTGRES_PORT,
      // username: POSTGRES_USER,
      // password: POSTGRES_PASSWORD,
      // database: POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Filter, UserFilters, Role, UserRoles],
      autoLoadModels: true,
    }),
    UsersModule,
    FiltersModule,
    RolesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}

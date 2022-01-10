import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Filter } from '../filters/filter.model';
import { UserFilters } from '../filters/user-filters.model';

interface userCreationAttributes {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, userCreationAttributes> {
  @ApiProperty({example: '1', description: 'user ID'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: 'user@mail.com', description: 'email'})
  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @ApiProperty({example: 'P@$$w0Rd', description: 'password'})
  @Column({ type: DataType.STRING })
  password: string;

  //** Tables 'users' and 'filters' have relation many to many.
  // (One user has many filters, and the same type of filter can be used by many users)
  // */
  @BelongsToMany(() => Filter, () => UserFilters)
  filters: Filter[];
}

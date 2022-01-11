import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { User } from '../users/users.model';
import { UserFilters } from './user-filters.model';

interface filterCreationAttributes {
  type: string;
  description: string;
}

@Table({ tableName: 'filters' })
export class Filter extends Model<Filter, filterCreationAttributes> {
  @ApiProperty({ example: '1', description: 'filter ID' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'membrane', description: 'Unique filter type' })
  @Column({ type: DataType.STRING, unique: true })
  type: string;

  @ApiProperty({ example: 'AMI M-T1812A50', description: 'мембрана обратного осмоса' })
  @Column({ type: DataType.STRING })
  description: string;

  //** Tables 'users' and 'filters' have relation many to many.
  // (One user has many filters, and the same type of filter can be used by many users)
  // */
  @BelongsToMany(() => User, () => UserFilters)
  users: User[];
}

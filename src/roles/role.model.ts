import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { UserRoles } from './user-roles.model';

interface roleCreationAttributes {
  value: string;
  description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, roleCreationAttributes> {
  @ApiProperty({example: '1', description: 'user ID'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: 'admin', description: 'Unique user role'})
  @Column({ type: DataType.STRING, unique: true })
  value: string;

  @ApiProperty({example: 'Administrator', description: 'Role description'})
  @Column({ type: DataType.STRING })
  description: string;

  //** Tables 'users' and 'roles' have relation many to many. */
  @BelongsToMany(() => User, () => UserRoles)
  filters: User[];
}

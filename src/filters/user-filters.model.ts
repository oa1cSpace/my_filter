import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Filter } from './filter.model';

@Table({tableName: 'user_filters', createdAt: false, updatedAt: false})
export class UserFilters extends Model<UserFilters> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Filter)
  @Column({ type: DataType.INTEGER })
  filter_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number;

}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'user', description: 'role type' })
  @IsString({ message: 'Should be a string' })
  readonly value: string;

  @ApiProperty({ example: '1', description: 'user ID' })
  @IsString({ message: 'Should be a string' })
  readonly user_id: number;
}

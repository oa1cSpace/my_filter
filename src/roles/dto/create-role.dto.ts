import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({example: 'admin', description: 'Unique user role'})
  @IsString({message: 'Value should be a string'})
  readonly value: string;

  @ApiProperty({example: 'Administrator', description: 'Role description'})
  @IsString({message: 'Description should be a string'})
  readonly description: string;
}

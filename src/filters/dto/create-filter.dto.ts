import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFilterDto {
  @ApiProperty({ example: 'membrane', description: 'Unique filter type' })
  @IsString({ message: 'Should be a string' })
  readonly type: string;

  @ApiProperty({ example: 'AMI M-T1812A50', description: 'мембрана обратного осмоса' })
  @IsString({ message: 'Should be a string' })
  readonly description: string;
}

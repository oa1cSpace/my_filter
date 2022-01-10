import { ApiProperty } from '@nestjs/swagger';

export class CreateFilterDto {
  @ApiProperty({example: 'membrane', description: 'Unique filter type'})
  readonly type: string;

  @ApiProperty({example: 'AMI M-T1812A50', description: 'мембрана обратного осмоса'})
  readonly description: string;
}

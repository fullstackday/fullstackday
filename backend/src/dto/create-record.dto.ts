import { ApiProperty } from '@nestjs/swagger';

export class CreateRecordDto {
  @ApiProperty({
    example: 1613286000000,
    description: 'The start date and time of the record',
  })
  readonly start: number;

  @ApiProperty({
    example: 1613293200000,
    description: 'The end date and time of the record',
  })
  readonly end: number;

  @ApiProperty({
    example: 'Breakfast',
    description: 'The name of the project',
  })
  readonly project: string;

  @ApiProperty({
    example: 'Coffee and toast',
    description: 'Additional Information',
  })
  readonly comment?: string;
}

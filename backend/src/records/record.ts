import { ApiProperty } from '@nestjs/swagger';

export class Record {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the record',
  })
  id: string;

  @ApiProperty({
    example: 1613286000000,
    description: 'The start date and time of the record',
  })
  start: number;

  @ApiProperty({
    example: 1613293200000,
    description: 'The end date and time of the record',
  })
  end: number;

  @ApiProperty({
    example: 'Breakfast',
    description: 'The name of the project',
  })
  project: string;

  @ApiProperty({
    example: 'Coffee and toast',
    description: 'Additional Information',
  })
  comment?: string;
}

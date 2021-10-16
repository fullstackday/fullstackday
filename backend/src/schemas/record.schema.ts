import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type RecordDocument = Record & Document;

@Schema()
export class Record {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  @ApiProperty({
    example: '123abcd',
    description: 'Unique ObjectId',
  })
  _id: string;

  @Prop()
  @ApiProperty({
    example: 1613286000000,
    description: 'The start date and time of the record',
  })
  start: number;

  @Prop()
  @ApiProperty({
    example: 1613293200000,
    description: 'The end date and time of the record',
  })
  end: number;

  @Prop()
  @ApiProperty({
    example: 'Breakfast',
    description: 'The name of the project',
  })
  project: string;

  @Prop()
  @ApiProperty({
    example: 'Coffee and toast',
    description: 'Additional Information',
  })
  comment?: string;
}

export const RecordSchema = SchemaFactory.createForClass(Record);

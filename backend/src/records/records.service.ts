import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'bson';
import { Model } from 'mongoose';
import { CreateRecordDto } from '../dto/create-record.dto';
import { Record, RecordDocument } from '../schemas/record.schema';

@Injectable()
export class RecordsService {
  constructor(
    @InjectModel(Record.name)
    private readonly recordModel: Model<RecordDocument>,
  ) {}

  getAllRecords(): Promise<Record[]> {
    return this.recordModel.find().exec();
  }
  getOneRecord(id: string): Promise<Record> {
    return this.recordModel.findById(id).exec();
  }
  createNewRecord(record: CreateRecordDto): Promise<Record> {
    const newRecord = new this.recordModel({ ...record, _id: new ObjectId() });
    return newRecord.save();
  }
  async updateRecord(id: string, record: Record): Promise<Record> {
    await this.recordModel.updateOne({ _id: id }, record);
    return record;
  }
  async removeRecord(id: string): Promise<void> {
    await this.recordModel.deleteOne({ _id: id });
  }
}

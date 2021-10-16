import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRecordDto } from '../dto/create-record.dto';
import { Record } from '../schemas/record.schema';
import { RecordsService } from './records.service';

@ApiTags('timetracker')
@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all records' })
  @ApiResponse({
    status: 200,
    description: 'Get all available records',
    type: Record,
    isArray: true,
  })
  getAllRecords() {
    return this.recordsService.getAllRecords();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one records' })
  @ApiResponse({
    status: 200,
    description: 'Get one record by id',
    type: Record,
  })
  getOneRecord(@Param('id') id: string) {
    return this.recordsService.getOneRecord(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new record' })
  @ApiResponse({
    status: 201,
    description: 'Create a new record',
    type: Record,
  })
  createNewRecord(@Body() newRecord: CreateRecordDto) {
    return this.recordsService.createNewRecord(newRecord);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a record' })
  @ApiResponse({
    status: 200,
    description: 'Update a record',
    type: Record,
  })
  updateRecord(@Param('id') id: string, @Body() updatedRecord: Record) {
    return this.recordsService.updateRecord(id, updatedRecord);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Remove a record' })
  @ApiResponse({
    status: 204,
    description: 'Remove a record',
  })
  removeRecord(@Param('id') id: string) {
    return this.recordsService.removeRecord(id);
  }
}

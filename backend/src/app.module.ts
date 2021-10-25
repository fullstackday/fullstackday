import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordsModule } from './records/records.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RecordsModule,
    MongooseModule.forRoot('mongodb://mongo/timetracker'),
    // MongooseModule.forRoot('mongodb://mongo/timetracker'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { RecordsModule } from './records/records.module';

@Module({
  imports: [RecordsModule]
})
export class AppModule {}

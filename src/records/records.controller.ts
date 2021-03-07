import { Controller, Get, Post } from '@nestjs/common';
import { IRecord } from './records.model';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
    constructor(private _recordsService: RecordsService) {}
    
    @Get()
    public getAllRecords(): Array<IRecord> {
        return this._recordsService.getAllRecords();
    }

    @Post()
    public createRecord(): IRecord {
        return this._recordsService.createRecord();
    }
}

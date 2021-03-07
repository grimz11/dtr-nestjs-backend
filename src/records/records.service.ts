import { Injectable } from '@nestjs/common';
import { ERecordState, IRecord } from './records.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RecordsService {
    private _records: Array<IRecord> = [];

    public getAllRecords(): Array<IRecord> {
        return this._records;
    }

    public createRecord(payload?: IRecord): IRecord {
        const record: IRecord = {
            id: uuidv4(),
            hoursRendered : 'payload.hoursRendered',
            currentlWorking: true,
            state : ERecordState.PUBLISHED
        }
        this._records.push(record);
        return record;
    }
}

export interface IRecord {
    id: string;
    timeOut?: Date;
    hoursRendered: string;
    currentlWorking: boolean;
    state: ERecordState;
    userId?: string;
    created_at?: Date;
    updated_at?: Date;
    published_at?: Date;
}

export enum ERecordState {
    PUBLISHED = 'Published',
    DRAFT = 'Draft'
}
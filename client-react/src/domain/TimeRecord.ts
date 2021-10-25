export interface TimeRecordRaw {
  _id: string;
  start: number;
  end: number;
  project: string;
  comment?: string;
}

export interface TimeRecord {
  _id: string;
  start: Date;
  end: Date;
  project: string;
  comment?: string;
}

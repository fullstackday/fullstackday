export class CreateRecordDto {
  readonly start: number;
  readonly end: number;
  readonly project: string;
  readonly comment?: string;
}

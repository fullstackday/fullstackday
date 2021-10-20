export interface WorkItem {
    _id?: string;
    start: number;
    end: number;
    project: string;
    comment?: string;
}

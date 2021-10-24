import { useQuery } from "react-query";
import { TimeRecord, TimeRecordRaw } from "../domain/TimeRecord";

export const useGetAllRecords = () => {
  const { data, isLoading } = useQuery<TimeRecord[]>("records", async () => {
    const response = await fetch("http://localhost:3000/records");
    const records: TimeRecordRaw[] = await response.json();

    return records.map((record) => ({
      ...record,
      start: new Date(record.start),
      end: new Date(record.end),
    }));
  });

  return { data, isLoading };
};

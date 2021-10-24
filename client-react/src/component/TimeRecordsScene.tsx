import React from "react";
import { TimeRecordsTable } from "./TimeRecordsTable";
import { AddRecordModal } from "./AddRecordModal";
import { useGetAllRecords } from "../hook/useGetAllRecords";

interface Props {}

export const TimeRecordsScene: React.FunctionComponent<Props> = () => {
  const { data, isLoading } = useGetAllRecords();

  if (isLoading || !data) {
    return <div>Loading…</div>;
  }

  return (
    <>
      <AddRecordModal />
      <TimeRecordsTable timeRecords={data} />
    </>
  );
};

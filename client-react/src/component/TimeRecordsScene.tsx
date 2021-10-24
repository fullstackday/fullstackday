import React from "react";
import { TimeRecordsTable } from "./TimeRecordsTable";
import { AddRecordModal } from "./AddRecordModal";
import { useGetAllRecords } from "../hook/useGetAllRecords";
import { useDeleteRecord } from "../hook/useDeleteRecord";
import { LinearProgress } from "@mui/material";

interface Props {}

export const TimeRecordsScene: React.FunctionComponent<Props> = () => {
  const { data, isLoading } = useGetAllRecords();
  const { deleteRecord, isLoading: isLoadingDelete } = useDeleteRecord();
  if (!data) {
    return <div>Loading…</div>;
  }

  return (
    <>
      {(isLoading || isLoadingDelete) && <LinearProgress />}
      <AddRecordModal />
      <TimeRecordsTable timeRecords={data} onDeleteRecord={deleteRecord} />
    </>
  );
};

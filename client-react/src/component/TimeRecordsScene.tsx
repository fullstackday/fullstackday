import React, { useState } from "react";
import { TimeRecordsTable } from "./TimeRecordsTable";
import { AddRecordButton } from "./AddRecordButton";
import { useGetAllRecords } from "../hook/useGetAllRecords";
import { useDeleteRecord } from "../hook/useDeleteRecord";
import { LinearProgress } from "@mui/material";
import { TimeRecordFormModal } from "./TimeRecordFormModal";
import { TimeRecord } from "../domain/TimeRecord";
import { useUpdateRecord } from "../hook/useUpdateRecord";

interface Props {}

export const TimeRecordsScene: React.FunctionComponent<Props> = () => {
  const [editRecord, setEditRecord] = useState<TimeRecord | undefined>();
  const { data, isLoading } = useGetAllRecords();
  const { deleteRecord, isLoading: isLoadingDelete } = useDeleteRecord();
  const { updateRecord, isLoading: isLoadingUpdate } = useUpdateRecord({
    onSuccess: () => setEditRecord(undefined),
  });

  if (!data) {
    return <div>Loading…</div>;
  }

  return (
    <>
      {(isLoading || isLoadingDelete) && <LinearProgress />}
      <AddRecordButton />

      {editRecord && (
        <TimeRecordFormModal
          open={true}
          isLoading={isLoadingUpdate}
          onSubmit={(formValues) =>
            updateRecord({ record: editRecord, formValues })
          }
          onClose={() => setEditRecord(undefined)}
          record={editRecord}
        />
      )}
      <TimeRecordsTable
        timeRecords={data}
        onDeleteRecord={deleteRecord}
        onEditRecord={(record) => setEditRecord(record)}
      />
    </>
  );
};

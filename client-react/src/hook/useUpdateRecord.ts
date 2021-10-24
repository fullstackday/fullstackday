import { useMutation, useQueryClient } from "react-query";
import { AddRecordFormValues } from "../component/AddRecordForm";
import { TimeRecord, TimeRecordRaw } from "../domain/TimeRecord";

export const useUpdateRecord = (
  { onSuccess: onSuccessCallback } = { onSuccess: () => {} }
) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    async ({
      formValues,
      record,
    }: {
      formValues: AddRecordFormValues;
      record: TimeRecord;
    }) => {
      const backendData: Omit<TimeRecordRaw, "_id"> = {
        ...formValues,
        start: formValues.start.getTime(),
        end: formValues.end.getTime(),
      };

      await fetch(`http://localhost:3000/records/${record._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(backendData),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("records");
        onSuccessCallback();
      },
    }
  );

  return { updateRecord: mutate, isLoading };
};

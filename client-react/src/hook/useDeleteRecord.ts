import { useMutation, useQueryClient } from "react-query";
import { AddRecordFormValues } from "../component/AddRecordForm";
import { TimeRecordRaw } from "../domain/TimeRecord";

export const useAddRecord = (
  { onSuccess: onSuccessCallback } = { onSuccess: () => {} }
) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    async (formValues: AddRecordFormValues) => {
      const backendData: Omit<TimeRecordRaw, "_id"> = {
        ...formValues,
        start: formValues.start.getTime(),
        end: formValues.end.getTime(),
      };

      await fetch("http://localhost:3000/records", {
        method: "POST",
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

  return { deleteRecord: mutate, isLoading };
};

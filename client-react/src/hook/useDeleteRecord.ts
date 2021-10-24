import { useMutation, useQueryClient } from "react-query";
import { TimeRecord } from "../domain/TimeRecord";

export const useDeleteRecord = (
  { onSuccess: onSuccessCallback } = { onSuccess: () => {} }
) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    async (record: TimeRecord) => {
      await fetch(`http://localhost:3000/records/${record._id}`, {
        method: "DELETE",
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

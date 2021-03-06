import React from "react";
import Button from "@mui/material/Button";
import { useAddRecord } from "../hook/useAddRecord";
import { TimeRecordFormModal } from "./TimeRecordFormModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
};

interface Props {}

export const AddRecordButton: React.FunctionComponent<Props> = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { isLoading, addRecord } = useAddRecord({
    onSuccess: () => {
      handleClose();
    },
  });

  return (
    <>
      <Button onClick={handleOpen}>Track Work</Button>
      <TimeRecordFormModal
        open={open}
        isLoading={isLoading}
        onSubmit={addRecord}
        onClose={handleClose}
      />
    </>
  );
};

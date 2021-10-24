import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AddRecordForm } from "./AddRecordForm";
import { LinearProgress } from "@mui/material";
import { useAddRecord } from "../hook/useAddRecord";

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

export const AddRecordModal: React.FunctionComponent<Props> = () => {
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Box sx={style}>
            <Box sx={{ p: 4 }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Create a new Record
              </Typography>
              <AddRecordForm onSubmit={addRecord} isLoading={isLoading} />
            </Box>
            {isLoading && <LinearProgress />}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

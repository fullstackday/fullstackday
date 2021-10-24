import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AddRecordForm, AddRecordFormValues } from "./AddRecordForm";
import { LinearProgress } from "@mui/material";
import { TimeRecord } from "../domain/TimeRecord";

interface Props {
  open: boolean;
  isLoading: boolean;
  onSubmit: (record: AddRecordFormValues) => void;
  onClose: () => void;
  record?: TimeRecord;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
};

export const TimeRecordFormModal: React.FunctionComponent<Props> = ({
  onClose,
  open,
  isLoading,
  onSubmit,
  record,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box>
        <Box sx={style}>
          <Box sx={{ p: 4 }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create a new Record
            </Typography>
            <AddRecordForm
              onSubmit={onSubmit}
              isLoading={isLoading}
              record={record}
            />
          </Box>
          {isLoading && <LinearProgress />}
        </Box>
      </Box>
    </Modal>
  );
};

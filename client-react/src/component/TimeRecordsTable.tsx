import React from "react";
import { TimeRecord } from "../domain/TimeRecord";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

interface Props {
  timeRecords: TimeRecord[];
  onDeleteRecord: (record: TimeRecord) => void;
}

export const TimeRecordsTable: React.FunctionComponent<Props> = ({
  timeRecords,
  onDeleteRecord,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell align="right">Start</TableCell>
            <TableCell align="right">End</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timeRecords.map((timeRecord) => (
            <TableRow
              key={timeRecord._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {timeRecord.project}
              </TableCell>
              <TableCell align="right">
                {timeRecord.start.toLocaleString()}
              </TableCell>
              <TableCell align="right">
                {timeRecord.end.toLocaleString()}
              </TableCell>
              <TableCell>
                <Button onClick={() => onDeleteRecord(timeRecord)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

import React from "react";
import { Button, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { TextInput } from "./Input/TextInput";
import { DateTimeInput } from "./Input/DateTimeInput";
import { TimeRecord } from "../domain/TimeRecord";

interface Props {
  onSubmit: (values: Omit<TimeRecord, "_id">) => void;
  isLoading: boolean;
  record?: TimeRecord;
}

interface FormValues {
  date: string;
  start: string;
  end: string;
  project: string;
  comment?: string;
}

const recordToFormValues = (record: TimeRecord): FormValues => ({
  ...record,
  date: ymdString(record.start),
  start: record.start.toLocaleTimeString(),
  end: record.end.toLocaleTimeString(),
});

const formValuesToRecord = (values: FormValues): Omit<TimeRecord, "_id"> => ({
  ...values,
  start: new Date(values.date + "T" + values.start),
  end: new Date(values.date + "T" + values.end),
});

const ymdString = (date: Date): string =>
  date.getFullYear() +
  "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + date.getDate()).slice(-2);

export const AddRecordForm: React.FunctionComponent<Props> = ({
  onSubmit,
  isLoading,
  record,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: record
      ? recordToFormValues(record)
      : {
          project: "",
          comment: "",
          date: ymdString(new Date()),
          start: new Date().toLocaleTimeString(),
          end: "",
        },
  });

  return (
    <Container
      component="form"
      onSubmit={handleSubmit((values) => {
        onSubmit(formValuesToRecord(values));
      })}
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& .MuiTextField-root": {
          margin: "8px 0",
        },
      }}
    >
      <TextInput
        control={control}
        name="project"
        label="Project"
        rules={{ required: true }}
      />

      <TextInput
        control={control}
        name="date"
        type="date"
        label="Date"
        rules={{ required: true }}
      />
      <TextInput
        control={control}
        name="start"
        type="time"
        label="Start"
        rules={{ required: true }}
      />
      <TextInput
        control={control}
        name="end"
        type="time"
        label="End"
        rules={{ required: true }}
      />

      <TextInput
        control={control}
        name="comment"
        label="Comment"
        rules={{ required: false }}
      />

      <Button type="submit" disabled={!isValid || isLoading}>
        Create
      </Button>
    </Container>
  );
};

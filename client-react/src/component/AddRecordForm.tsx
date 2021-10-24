import React from "react";
import { Button, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { TextInput } from "./Input/TextInput";
import { DateTimeInput } from "./Input/DateTimeInput";
import { TimeRecord } from "../domain/TimeRecord";

export type AddRecordFormValues = Omit<TimeRecord, "_id">;

interface Props {
  onSubmit: (values: AddRecordFormValues) => void;
  isLoading: boolean;
}

export const AddRecordForm: React.FunctionComponent<Props> = ({
  onSubmit,
  isLoading,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  console.log(errors);

  return (
    <Container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextInput
        control={control}
        name="project"
        label="Project"
        rules={{ required: true }}
      />

      <DateTimeInput
        control={control}
        name="start"
        label="Start"
        rules={{ required: true }}
      />
      <DateTimeInput
        control={control}
        name="end"
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

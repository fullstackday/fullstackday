import React from "react";
import { Control, Controller, UseControllerProps } from "react-hook-form";
import { DateTimePicker } from "@mui/lab";
import { TextField } from "@mui/material";

interface Props {
  control: Control;
  name: string;
  label: string;
  rules?: UseControllerProps["rules"];
}

export const DateTimeInput: React.FunctionComponent<Props> = ({
  control,
  name,
  label,
  rules,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      rules={rules}
      render={({ field, fieldState }) => (
        <DateTimePicker
          renderInput={(props) => (
            <TextField {...props} error={fieldState.invalid} fullWidth />
          )}
          label={label}
          {...field}
        />
      )}
    />
  );
};

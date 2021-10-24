import React from "react";
import { Control, Controller, UseControllerProps } from "react-hook-form";
import { TextField } from "@mui/material";

interface Props {
  control: Control;
  name: string;
  label: string;
  rules?: UseControllerProps["rules"];
}

export const TextInput: React.FunctionComponent<Props> = ({
  control,
  label,
  name,
  rules,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          label={label}
          {...field}
          error={fieldState.invalid}
          fullWidth
        />
      )}
    />
  );
};

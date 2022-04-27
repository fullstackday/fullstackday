import React from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { DateTimePicker } from "@mui/lab";
import { TextField } from "@mui/material";

interface Props<TFieldValues, TName> {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
  rules?: UseControllerProps["rules"];
}

export const DateTimeInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  name,
  label,
  rules,
}: Props<TFieldValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null as any}
      rules={rules}
      render={({ field, fieldState }) => (
        <DateTimePicker
          renderInput={(props) => (
            <TextField
              {...props}
              error={fieldState.invalid}
              fullWidth
              aria-label={label}
            />
          )}
          label={label}
          {...field}
        />
      )}
    />
  );
};

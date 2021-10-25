import React from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { TextField } from "@mui/material";

interface Props<TFieldValues, TName> {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
  rules?: UseControllerProps["rules"];
}

export const TextInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  control,
  label,
  name,
  rules,
}: Props<TFieldValues, TName>) => {
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

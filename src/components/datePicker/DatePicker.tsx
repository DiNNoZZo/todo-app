import { IComponent } from '@/types/global.types';
import React, { FC } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';

interface IDatePicker<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TFieldName>,
    IComponent {
  textColor?: string;
  label?: string;
  error?: string;
}

const DatePicker = <
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  error,
  label,
  textColor,
  className,
  name,
  control,
}: IDatePicker<TFieldValues, TFieldName>) => {
  return (
    <label className={`flex flex-col transition ${textColor}`}>
      {label && <span>{label}</span>}
      {error && <span>{error}</span>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactDatePicker
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            className={`px-2 w-full border border-gray-300 rounded-md ${className}`}
          />
        )}
      />
    </label>
  );
};

export default DatePicker;
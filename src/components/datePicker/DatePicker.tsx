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
  errorMess?: string;
}

const DatePicker = <
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  errorMess,
  label,
  textColor,
  className,
  name,
  control,
}: IDatePicker<TFieldValues, TFieldName>) => {
  return (
    <label className={`flex flex-col transition ${textColor}`}>
      {label && <span>{label}</span>}
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
      {errorMess && <span className="text-red-500">{errorMess}</span>}
    </label>
  );
};

export default DatePicker;

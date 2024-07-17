import React, { FC } from 'react';
import Button from '../button/Button';
import Select from '../select/Select';
import Input from '../input/Input';
import { categoriyOptions, priorityOptions } from '@/constants/index.constants';
import DatePicker from '../datePicker/DatePicker';
import { useFormContext } from 'react-hook-form';
import { TTodoSchema } from '@/validation/todo.validation';

interface IAddTodoForm {
  handleModalToggle: () => void;
  handleRecordSave: () => Promise<void>;
  handleClearForm: () => void;
}

const AddTodoForm: FC<IAddTodoForm> = ({
  handleModalToggle,
  handleRecordSave,
  handleClearForm,
}) => {
  const { register, control } = useFormContext<TTodoSchema>();

  return (
    <>
      <div className="space-y-5">
        <Input
          {...register('description')}
          textColor="text-text-light"
          label="Description"
        />
        <Select
          {...register('priority')}
          textColor="text-text-light"
          options={priorityOptions}
          label="Priority"
        />
        <Select
          {...register('category')}
          textColor="text-text-light"
          options={categoriyOptions}
          label="Category"
        />
        <Input
          {...register('note')}
          textColor="text-text-light"
          label="Notes"
        />
        <Input
          {...register('assignedTo')}
          textColor="text-text-light"
          label="Assigned to"
        />
        <DatePicker control={control} label="Due Date" name="dueDate" />
      </div>
      <div className="flex space-x-5 mt-5">
        <Button
          onClick={handleRecordSave}
          bgColor="bg-green-600 hover:bg-green-400"
          textColor="text-text-dark"
          className="flex-1"
        >
          Save
        </Button>
        <Button onClick={handleClearForm} className="flex-1">Clear</Button>
        <Button
          onClick={handleModalToggle}
          bgColor="bg-red-600 hover:bg-red-400"
          textColor="text-text-dark"
          className="flex-1"
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default AddTodoForm;

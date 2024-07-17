import { TTodoSchema } from '@/validation/todo.validation';

export const dateTimeDisplayFormat = 'dd.MM.yyyy HH:mm';

export const priorityOptions = [
  { value: 'low', label: 'low' },
  { value: 'medium', label: 'medium' },
  { value: 'high', label: 'high' },
];

export const categoriyOptions = [
  { value: 'personal', label: 'personal' },
  { value: 'work', label: 'work' },
  { value: 'health', label: 'health' },
  { value: 'gym', label: 'gym' },
  { value: 'shopping', label: 'shopping' },
];

export const defaultValuesTodo: TTodoSchema = {
  assignedTo: '',
  category: '',
  complete: false,
  description: '',
  note: '',
  priority: '',
  dueDate: '',
};

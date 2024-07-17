import { IFilters } from '@/api/todoApi';
import { format, isValid } from 'date-fns';
import { sk } from 'date-fns/locale/sk';

export const formatDate = (
  date: Date | string | null | undefined,
  dateFormat?: string
) => {
  let dateValue = date && new Date(date);

  if (dateValue && isValid(dateValue)) {
    return format(dateValue, dateFormat || 'dd.MM.yyyy', {
      locale: sk,
    });
  }
  return undefined;
};

export const buildFilterParams = (filters: IFilters) => {
  const params = new URLSearchParams();

  if (typeof filters.complete === 'boolean') {
    params.append('complete', `${filters.complete}`);
  }

  if (filters.assignedTo) {
    params.append('assignedTo', filters.assignedTo);
  }

  if (filters.category) {
    params.append('category', filters.category);
  }

  if (filters.priority) {
    params.append('priority', filters.priority);
  }

  return params;
};
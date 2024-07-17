export type TPriority = 'low' | 'medium' | 'high';
export type TCategory = 'personal' | 'work' | 'health' | 'gym' | 'shopping';

export interface ITodo {
  id: string;
  description: string;
  complete: boolean;
  dueDate: Date;
  priority: TPriority;
  category: TCategory;
  createdDate: Date;
  updatedDate: Date;
  note: string;
  assignedTo?: string;
}

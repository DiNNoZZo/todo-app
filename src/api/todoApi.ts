import axios from '@/config/axios';
import { buildFilterParams } from '@/lib/helpers';
import { ITodo } from '@/types/todo.types';
import { TTodoSchema } from '@/validation/todo.validation';

export const apiUrl = new URL(
  'https://6694c1f54bd61d8314c87a4a.mockapi.io/api/v1/todos'
);

interface ISaveTodoItem {
  todoItem: Partial<TTodoSchema>;
  id?: string;
}

export interface IFilters {
  complete?: boolean;
  assignedTo?: string;
  category?: string;
  priority?: string;
}

export const getTodoList = async (filters?: IFilters) => {
  try {
    const searchParams = filters && buildFilterParams(filters);
    const data: Array<ITodo> = await axios.get(
      `${apiUrl}${filters ? `?${searchParams}` : ''}`
    );

    if (data) return data;
    else undefined;
  } catch (error) {}
};

export const getTodoById = async (id: string) => {
  try {
    if (!id) return;

    const todo: ITodo = await axios.get(`${apiUrl}/${id}`);

    if (todo) return todo;
    else undefined;
  } catch (error) {}
};

export const addNewTodoItem = async ({ todoItem }: ISaveTodoItem) => {
  try {
    const newTodo = await axios.post(`${apiUrl}`, todoItem);

    if (newTodo) return newTodo;
    else undefined;
  } catch (error) {}
};

export const editTodoItem = async ({ todoItem, id }: ISaveTodoItem) => {
  try {
    const updateTodo = await axios.put(`${apiUrl}/${id}`, todoItem);

    if (updateTodo) return updateTodo;
    else undefined;
  } catch (error) {}
};

export const deleteTotoItem = async (id: string) => {
  try {
    const deleteTodo: ITodo = await axios.delete(`${apiUrl}/${id}`);

    if (deleteTodo?.id) return deleteTodo.id;
    else undefined;
  } catch (error) {}
};

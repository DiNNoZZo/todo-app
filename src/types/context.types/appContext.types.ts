import { IFilters } from '@/api/todoApi';
import { ITodo } from '../todo.types';

export interface IAppState {
  editTodoId: string;
  todoList: Array<ITodo>;
  darkMode: boolean;
  openFilter: boolean;
  openModal: boolean;
  filters?: IFilters;
}

export interface IAppDataCtxState {
  appState: IAppState;
}

export interface IAppApiCtxState {
  updateAppState: TUpdateAppState;
  refetchTodoList: TRefetchTodoList;
}

export type TRefetchTodoList = () => Promise<void | undefined>;
export type TUpdateAppState = (state: Partial<IAppState>) => void;

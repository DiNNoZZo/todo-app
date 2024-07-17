import {
  IAppApiCtxState,
  IAppDataCtxState,
  IAppState,
} from '@/types/context.types/appContext.types';

const appStateInitial: IAppState = {
  editTodoId: '0',
  todoList: [],
  darkMode: false,
  openFilter: false,
  openModal: false,
};

export const appDataInitial: IAppDataCtxState = {
  appState: appStateInitial,
};

export const appApiInitial: IAppApiCtxState = {
  updateAppState: () => {},
  refetchTodoList: async() => undefined,
};
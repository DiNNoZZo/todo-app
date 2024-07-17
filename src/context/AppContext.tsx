'use client';

import { getTodoList } from '@/api/todoApi';
import {
  appApiInitial,
  appDataInitial,
} from '@/constants/appContext.constants';
import {
  IAppApiCtxState,
  IAppDataCtxState,
  IAppState,
} from '@/types/context.types/appContext.types';
import { IComponent } from '@/types/global.types';
import {
  FC,
  ReactNode,
  createContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from 'react';

export const AppDataContext = createContext<IAppDataCtxState>(appDataInitial);
export const AppApiContext = createContext<IAppApiCtxState>(appApiInitial);

const AppProvider: FC<IComponent<ReactNode>> = ({ children }): JSX.Element => {
  const [appState, setAppState] = useState<IAppState>({
    ...appDataInitial.appState,
  });

  const updateAppState = useCallback((state: Partial<IAppState>) => {
    setAppState((prevState) => ({
      ...prevState,
      ...state,
    }));
  }, []);

  const saveTodoList = useCallback(async () => {
    const data = (await getTodoList(appState?.filters)) || [];

    updateAppState({ todoList: data });
  }, [updateAppState, appState?.filters]);

  useEffect(() => {
    saveTodoList();
  }, [saveTodoList]);

  const API = useMemo(
    () => ({
      updateAppState,
      refetchTodoList: saveTodoList,
    }),
    [updateAppState, saveTodoList]
  );

  return (
    <AppDataContext.Provider value={{ appState }}>
      <AppApiContext.Provider value={API}>{children}</AppApiContext.Provider>
    </AppDataContext.Provider>
  );
};

export default AppProvider;

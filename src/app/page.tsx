'use client';

import React, { useContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AppApiContext, AppDataContext } from '@/context/AppContext';
import Button from '@/components/button/Button';
import TodoItem from '@/components/todoItem/TodoItem';
import Modal from '@/components/modal/Modal';
import AddTodoForm from '@/components/addTodoForm/AddTodoForm';
import TodoFilter from '@/components/filter/TodoFilter';
import { defaultValuesTodo } from '@/constants/index.constants';
import { TTodoSchema, todoSchema } from '@/validation/todo.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { TMode } from '@/types/global.types';
import {
  addNewTodoItem,
  apiUrl,
  deleteTotoItem,
  editTodoItem,
  getTodoById,
} from '@/api/todoApi';

const Home: React.FC = () => {
  const {
    appState: { todoList, openModal, editTodoId },
  } = useContext(AppDataContext);
  const { updateAppState, refetchTodoList } = useContext(AppApiContext);

  const [mode, setMode] = useState<TMode>('Add');

  const formMethods = useForm<TTodoSchema>({
    resolver: zodResolver(todoSchema),
  });
  const { handleSubmit, trigger, getValues, setValue, reset } = formMethods;

  const handleRecordSave = async () => {
    mode === 'Add' && setValue('complete', false);

    handleSubmit(() => {})();
    const isValid = await trigger();
    if (!isValid) return;

    const res =
      mode === 'Add'
        ? await addNewTodoItem({ todoItem: getValues() })
        : await editTodoItem({ todoItem: getValues(), id: editTodoId });

    if (res) await refetchTodoList();

    handleOpenModalToggle();
  };

  const handleRemoveTodo = async (id: string) => {
    if (!id) return;

    const res = await deleteTotoItem(id);

    if (res) await refetchTodoList();
  };

  const handleToggleComplete = async (id: string, complete: boolean) => {
    if (!id) return;

    const res = await editTodoItem({ todoItem: { complete }, id });

    if (res) await refetchTodoList();
  };

  const handleEditTodo = async (id: string) => {
    const currTodo = await getTodoById(id);

    reset(currTodo);
    mode === 'Add' && setMode('Edit');
    handleOpenModalToggle(id);
  };

  const addNewTodo = () => {
    mode === 'Edit' && setMode('Add');
    handleClearForm();
    handleOpenModalToggle();
  };

  const handleClearForm = () => {
    reset(defaultValuesTodo);
  };

  const handleOpenModalToggle = (editTodoId: string = '0') => {
    updateAppState({ openModal: !openModal, editTodoId });
  };

  return (
    <div className="min-h-screen p-8 flex flex-col">
      <h1 className="self-center text-2xl text-text-light dark:text-text-dark transition font-bold text-center mb-8">
        To-Do List
      </h1>

      <div className="self-center space-y-5 lg:w-[32rem] md:w-[29rem] w-[25rem]">
        <div>
          <Button
            onClick={addNewTodo}
            className="w-full"
            textColor="text-text-dark dark:text-text-light"
            bgColor="bg-background-dark dark:bg-background-light hover:bg-sky-600 dark:hover:bg-gray-300"
          >
            Add new todo
          </Button>
        </div>

        <TodoFilter />

        <div className="bg-white dark:bg-slate-300 p-4 rounded-md shadow-md">
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={handleRemoveTodo}
              toggleComplete={handleToggleComplete}
              editTodo={handleEditTodo}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={openModal}
        onClose={handleOpenModalToggle}
        header={mode === 'Add' ? 'Add new todo' : 'Editing todo'}
      >
        <FormProvider {...formMethods}>
          <AddTodoForm
            handleClearForm={handleClearForm}
            handleModalToggle={handleOpenModalToggle}
            handleRecordSave={handleRecordSave}
          />
        </FormProvider>
      </Modal>
    </div>
  );
};

export default Home;

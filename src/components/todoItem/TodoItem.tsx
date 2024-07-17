import { ITodo } from '@/types/todo.types';
import React from 'react';

import Pencil from '../../../public/pencil.svg';
import Trash from '../../../public/trash.svg';
import Checkbox from '../../../public/checkbox.svg';
import CheckboxChecked from '../../../public/checkbox-check.svg';

interface ITodoItem {
  todo: ITodo;
  removeTodo: (id: string) => void;
  toggleComplete: (id: string, complete: boolean) => void;
  editTodo: (id: string) => void;
}

const TodoItem: React.FC<ITodoItem> = ({
  todo,
  removeTodo,
  toggleComplete,
  editTodo,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-300 border-b border-gray-200 space-x-5">
      <div>
        <h3
          className={`text-lg text-text-light ${
            todo.complete ? 'line-through' : ''
          }`}
        >
          {todo.description}
        </h3>
        <p className="text-sm text-text-light">
          Due: {new Date(todo.dueDate).toLocaleDateString('sk')}
        </p>
        <p className="text-sm text-text-light">Priority: {todo.priority}</p>
        <p className="text-sm text-text-light">Category: {todo.category}</p>
        <p className="text-sm text-text-light">Assigned to: {todo.assignedTo}</p>
        {todo.note && (
          <p className="text-sm text-text-light">Note: {todo.note}</p>
        )}
      </div>
      <div className="flex space-x-5">
        <button onClick={() => toggleComplete(todo.id, !todo.complete)}>
          {todo.complete ? (
            <CheckboxChecked width={20} height={20} className='text-green-500' />
          ) : (
            <Checkbox width={20} height={20} />
          )}
        </button>
        <button
          onClick={() => editTodo(todo.id)}
          className="text-orange-500"
        >
          <Pencil width={20} height={20} />
        </button>
        <button
          onClick={() => removeTodo(todo.id)}
          className="text-red-500"
        >
          <Trash width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

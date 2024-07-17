'use client';

import React, { useContext } from 'react';
import H3 from '../heading/H3';
import Select from '../select/Select';

import Arrow from '../../../public/arrow-up.svg';
import { AppApiContext, AppDataContext } from '@/context/AppContext';
import { categoriyOptions, priorityOptions } from '@/constants/index.constants';
import Input from '../input/Input';
import Button from '../button/Button';

const TodoFilter = () => {
  const {
    appState: { openFilter, filters },
  } = useContext(AppDataContext);
  const { updateAppState } = useContext(AppApiContext);

  const handleOpenFilterToggle = () => {
    updateAppState({ openFilter: !openFilter });
  };

  return (
    <>
      <div className="flex max-w-2xl space-x-5">
        <Button
          className="flex-1"
          onClick={() =>
            updateAppState({
              filters: undefined,
            })
          }
        >
          All
        </Button>
        <Button
          onClick={() =>
            updateAppState({
              filters: { complete: true },
            })
          }
          className="flex-1"
          margin="mx-5"
        >
          Done
        </Button>
        <Button
          onClick={() =>
            updateAppState({
              filters: { complete: false },
            })
          }
          className="flex-1"
        >
          Todo
        </Button>
      </div>
      <div className="flex flex-col bg-white dark:bg-slate-300 rounded-md shadow-md p-5">
        <div
          className="flex items-center justify-center"
          onClick={handleOpenFilterToggle}
        >
          <H3>Filter</H3>
          <div className={`text-text-light ${openFilter ? '' : 'rotate-180'}`}>
            <Arrow width={20} height={20} />
          </div>
        </div>

        {openFilter && (
          <div className="flex lg:space-x-5 lg:flex-row flex-col mt-5">
            <div className="flex flex-col lg:w-1/3 w-full">
              <Select
                textColor="text-text-light"
                label="Priority"
                options={priorityOptions}
                value={filters?.priority || ''}
                onChange={(e) =>
                  updateAppState({
                    filters: { ...filters, priority: e.currentTarget.value },
                  })
                }
              />
            </div>
            <div className="flex flex-col lg:w-1/3 w-full">
              <Select
                textColor="text-text-light"
                label="Category"
                options={categoriyOptions}
                value={filters?.category || ''}
                onChange={(e) =>
                  updateAppState({
                    filters: { ...filters, category: e.currentTarget.value },
                  })
                }
              />
            </div>
            <div className="flex flex-col lg:w-1/3 w-full">
              <Input
                textColor="text-text-light"
                label="Assignet to"
                value={filters?.assignedTo || ''}
                onChange={(e) =>
                  updateAppState({
                    filters: { ...filters, assignedTo: e.currentTarget.value },
                  })
                }
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoFilter;

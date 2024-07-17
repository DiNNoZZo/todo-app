'use client'

import { IComponent } from '@/types/global.types';
import React, { FC, useContext, useEffect } from 'react';
import Button from '../button/Button';

import Sun from '../../../public/sun.svg';
import Moon from '../../../public/moon.svg';
import { AppApiContext, AppDataContext } from '@/context/AppContext';

const DarkModeToggle: FC<IComponent> = ({ className }) => {
  const {
    appState: { darkMode },
  } = useContext(AppDataContext);
  const { updateAppState } = useContext(AppApiContext);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    if (!darkMode) document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className={className}>
      <Button
        margin=""
        padding="py-1 px-2"
        onClick={() => updateAppState({ darkMode: !darkMode })}
      >
        {darkMode ? (
          <Moon width={20} height={20} />
        ) : (
          <Sun width={20} height={20} />
        )}
      </Button>
    </div>
  );
};

export default DarkModeToggle;

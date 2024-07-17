import { IComponent } from '@/types/global.types';
import React, { FC } from 'react';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import H1 from '../heading/H1';

const Header: FC<IComponent> = ({ className }) => {
  return (
    <div className={className}>
      <div className='ml-5 text-text-light dark:text-text-dark transition flex items-center'><H1>To-Do App</H1></div>
      <div className='mr-5 flex items-center'>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Header;

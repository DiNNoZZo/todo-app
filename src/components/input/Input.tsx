import React, { FC, forwardRef } from 'react';
import { IComponent } from '@/types/global.types';

interface IInput extends IComponent, React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: string;
  textColor?: string;
  type?: string;
}

// Použitie forwardRef na pripojenie ref z react-hook-form
const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
  (
    {
      error,
      className = '',
      label,
      textColor = 'text-text-light dark:text-text-dark',
      type = 'text',
      ...rest
    },
    ref
  ) => {
    return (
      <label className={`flex flex-col transition ${textColor} ${className}`}>
        {label && <span>{label}</span>}
        <input
          type={type}
          ref={ref}
          {...rest}
          className={`px-2 border border-gray-300 rounded-md transition ${textColor}`}
        />
        {error && <span className="text-red-500">{error}</span>}
      </label>
    );
  }
);

Input.displayName = 'Input';

export default Input;

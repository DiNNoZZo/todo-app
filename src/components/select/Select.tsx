import { IComponent } from '@/types/global.types';
import React, { FC, forwardRef } from 'react';

interface ISelect extends IComponent, React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<{ value: string; label: string }>;
  className?: string;
  label?: string;
  error?: string;
  textColor?: string;
}

const Select: FC<ISelect> = forwardRef<HTMLSelectElement, ISelect>(
  (
    {
      error,
      options,
      className = '',
      label,
      textColor = 'text-text-light dark:text-text-dark',
      ...rest
    },
    ref
  ) => {
    return (
      <label className={`flex flex-col transition ${textColor}`}>
        {label && <span>{label}</span>}
        <select
          ref={ref}
          {...rest}
          
          className={`px-2 py-[1.3px] border border-gray-300 rounded-md transition ${className} ${textColor}`}
        >
          <option value="">select option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className="text-red-500">{error}</span>}
      </label>
    );
  }
);

Select.displayName = 'Select';

export default Select;

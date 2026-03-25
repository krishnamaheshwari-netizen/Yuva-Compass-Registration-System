import React, { forwardRef } from 'react';
interface SelectOption {
  value: string;
  label: string;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helpText?: string;
  options: SelectOption[] | string[];
  fullWidth?: boolean;
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
  {
    label,
    error,
    helpText,
    options,
    fullWidth = true,
    className = '',
    ...props
  },
  ref) =>
  {
    const widthClass = fullWidth ? 'w-full' : '';
    const errorClass = error ?
    'border-red-500 focus:ring-red-500 focus:border-red-500' :
    'border-gray-300 focus:ring-[#16A34A] focus:border-[#16A34A]';
    return (
      <div className={`${widthClass} flex flex-col gap-1.5`}>
        {label &&
        <label className="text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        }
        <select
          ref={ref}
          className={`block w-full rounded-md shadow-sm sm:text-sm min-h-[40px] md:min-h-[36px] px-3 py-2 border bg-white transition-colors ${errorClass} ${className}`}
          {...props}>
          
          <option
            value=""
            disabled
            selected={!props.value && !props.defaultValue}>
            
            {props.placeholder || 'Select an option'}
          </option>
          {options.map((opt, idx) => {
            const value = typeof opt === 'string' ? opt : opt.value;
            const label = typeof opt === 'string' ? opt : opt.label;
            return (
              <option key={idx} value={value}>
                {label}
              </option>);

          })}
        </select>
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
        {helpText && !error &&
        <p className="text-sm text-gray-500 mt-1">{helpText}</p>
        }
      </div>);

  }
);
Select.displayName = 'Select';
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
    'border-[#e03636] focus:border-[#e03636]' :
    'border-[#c7c7c7] focus:border-[#0289f7]';
    return (
      <div className={`${widthClass} flex flex-col`}>
        {label &&
        <label className="text-[12px] font-semibold text-[#525252] mb-1.5">
            {label}
            {props.required && <span className="text-[#e03636] ml-1">*</span>}
          </label>
        }
        <select
          ref={ref}
          className={`block w-full rounded-lg text-[14px] h-7 px-3 border bg-[#f3f3f3] transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errorClass} ${className}`}
          style={{
            fontWeight: 420
          }}
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
        {error && <p className="text-[12px] text-[#e03636] mt-1">{error}</p>}
        {helpText && !error &&
        <p className="text-[12px] text-[#7c7c7c] mt-1">{helpText}</p>
        }
      </div>);

  }
);
Select.displayName = 'Select';
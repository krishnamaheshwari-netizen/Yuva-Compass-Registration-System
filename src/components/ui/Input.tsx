import React, { forwardRef } from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  fullWidth?: boolean;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
  { label, error, helpText, fullWidth = true, className = '', ...props },
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
        <input
          ref={ref}
          className={`block w-full rounded-lg text-[14px] h-7 px-3 py-1.5 border bg-[#f3f3f3] transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${errorClass} ${className}`}
          style={{
            fontWeight: 420
          }}
          {...props} />
        
        {error && <p className="text-[12px] text-[#e03636] mt-1">{error}</p>}
        {helpText && !error &&
        <p className="text-[12px] text-[#7c7c7c] mt-1">{helpText}</p>
        }
      </div>);

  }
);
Input.displayName = 'Input';
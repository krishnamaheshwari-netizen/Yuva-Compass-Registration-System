import React from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
interface FrappeFieldProps {
  label: string;
  type:
  'Data' |
  'Select' |
  'Date' |
  'Int' |
  'Currency' |
  'Link' |
  'Text' |
  'MultiCheck' |
  'Table MultiSelect';
  options?:
  string[] |
  {
    value: string;
    label: string;
  }[];
  mandatory?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  helpText?: string;
  value?: any;
  onChange?: (val: any) => void;
  error?: string;
  className?: string;
  inputType?: string;
}
export function FrappeField({
  label,
  type,
  options = [],
  mandatory = false,
  readOnly = false,
  placeholder,
  helpText,
  value,
  onChange,
  error,
  className = '',
  inputType = 'text'
}: FrappeFieldProps) {
  const labelElement =
  <label className="text-[12px] font-semibold text-[#525252] mb-1.5 block">
      {label}
      {mandatory && <span className="text-[#e03636] ml-1">*</span>}
    </label>;

  const commonProps = {
    disabled: readOnly,
    required: mandatory,
    placeholder,
    className: `${readOnly ? 'bg-gray-50 text-gray-500 cursor-not-allowed' : ''}`,
    value,
    onChange: (e: any) => onChange?.(e.target.value)
  };
  return (
    <div className={`flex flex-col ${className}`}>
      {type !== 'MultiCheck' && labelElement}

      {(type === 'Data' ||
      type === 'Int' ||
      type === 'Currency' ||
      type === 'Link') &&
      <Input
        type={type === 'Int' ? 'number' : inputType}
        error={error}
        helpText={helpText}
        {...commonProps} />

      }

      {type === 'Date' &&
      <Input type="date" error={error} helpText={helpText} {...commonProps} />
      }

      {type === 'Select' &&
      <Select
        options={options}
        error={error}
        helpText={helpText}
        {...commonProps} />

      }

      {type === 'Text' &&
      <textarea
        className={`block w-full rounded-lg text-[14px] px-3 py-2 border bg-[#f3f3f3] transition-colors focus:outline-none ${error ? 'border-[#e03636] focus:border-[#e03636]' : 'border-[#c7c7c7] focus:border-[#0289f7]'} ${commonProps.className}`}
        rows={3}
        style={{
          fontWeight: 420
        }}
        {...commonProps} />

      }

      {type === 'Table MultiSelect' &&
      <div className="relative">
          <Select
          options={options}
          error={error}
          helpText={helpText || 'Select multiple options'}
          {...commonProps}
          multiple
          className={`h-24 ${commonProps.className}`} />
        
          <div className="absolute top-2 right-2 text-xs text-gray-400 pointer-events-none">
            Hold Ctrl/Cmd to select multiple
          </div>
        </div>
      }
    </div>);

}
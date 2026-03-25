import React from 'react';
import { Check } from 'lucide-react';
export interface MultiSelectOption {
  value: string;
  label?: string;
  maps_to_cohort?: string;
  color?: string;
}
interface MultiSelectProps {
  options: MultiSelectOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  maxSelections?: number;
  minSelections?: number;
  className?: string;
}
export function MultiSelect({
  options,
  selectedValues,
  onChange,
  maxSelections,
  minSelections = 0,
  className = ''
}: MultiSelectProps) {
  const toggleOption = (value: string) => {
    if (selectedValues.includes(value)) {
      // Don't unselect if we're at the minimum
      if (selectedValues.length <= minSelections) return;
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      // Don't select if we're at the maximum
      if (maxSelections && selectedValues.length >= maxSelections) return;
      onChange([...selectedValues, value]);
    }
  };
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {options.map((option) => {
        const isSelected = selectedValues.includes(option.value);
        const isDisabled =
        !isSelected && maxSelections && selectedValues.length >= maxSelections;
        return (
          <div
            key={option.value}
            onClick={() => !isDisabled && toggleOption(option.value)}
            className={`
              relative flex items-start p-4 border rounded-xl cursor-pointer transition-all duration-200
              ${isSelected ? 'border-[#16A34A] bg-green-50/30 shadow-sm' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}
              ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}>
            
            <div className="flex items-center h-5">
              <div
                className={`
                w-5 h-5 rounded border flex items-center justify-center transition-colors
                ${isSelected ? 'bg-[#16A34A] border-[#16A34A]' : 'border-gray-300 bg-white'}
              `}>
                
                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              </div>
            </div>
            <div className="ml-3 flex flex-col">
              <span
                className={`text-sm font-medium ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                
                {option.label || option.value}
              </span>
              {option.maps_to_cohort &&
              <span
                className="mt-1 inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full w-fit"
                style={{
                  backgroundColor: `${option.color}15`,
                  color: option.color
                }}>
                
                  → {option.maps_to_cohort}
                </span>
              }
            </div>
          </div>);

      })}
    </div>);

}
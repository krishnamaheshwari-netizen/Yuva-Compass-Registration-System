import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
interface FrappeSectionProps {
  title: string;
  children: React.ReactNode;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  columns?: 1 | 2 | 3;
  className?: string;
}
export function FrappeSection({
  title,
  children,
  collapsible = false,
  defaultExpanded = true,
  columns = 2,
  className = ''
}: FrappeSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3'
  };
  return (
    <div className={`mb-8 ${className}`}>
      <div
        className={`flex items-center justify-between py-3 border-b border-gray-200 mb-4 ${collapsible ? 'cursor-pointer hover:bg-gray-50 px-2 -mx-2 rounded' : ''}`}
        onClick={() => collapsible && setIsExpanded(!isExpanded)}>
        
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {collapsible &&
        <button type="button" className="text-gray-500 focus:outline-none">
            {isExpanded ?
          <ChevronUp className="w-5 h-5" /> :

          <ChevronDown className="w-5 h-5" />
          }
          </button>
        }
      </div>

      {isExpanded &&
      <div className={`grid gap-6 ${gridCols[columns]}`}>{children}</div>
      }
    </div>);

}
interface FrappeFormProps {
  children: React.ReactNode;
  className?: string;
}
export function FrappeForm({ children, className = '' }: FrappeFormProps) {
  return (
    <div
      className={`bg-white rounded-[12px] shadow-sm border border-gray-200 p-6 ${className}`}>
      
      {children}
    </div>);

}
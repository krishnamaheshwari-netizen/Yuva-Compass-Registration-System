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
    <div
      className={`mb-6 bg-white rounded-[10px] border border-[#ededed] ${className}`}>
      
      <div
        className={`flex items-center justify-between px-4 py-3 ${collapsible ? 'cursor-pointer' : ''}`}
        onClick={() => collapsible && setIsExpanded(!isExpanded)}>
        
        <h3
          className="text-[16px] font-bold text-[#171717]"
          style={{
            letterSpacing: '0.015em'
          }}>
          
          {title}
        </h3>
        {collapsible &&
        <button type="button" className="text-[#525252] focus:outline-none">
            {isExpanded ?
          <ChevronUp className="w-4 h-4" /> :

          <ChevronDown className="w-4 h-4" />
          }
          </button>
        }
      </div>

      {isExpanded &&
      <div className={`grid gap-4 px-4 pb-4 ${gridCols[columns]}`}>
          {children}
        </div>
      }
    </div>);

}
interface FrappeFormProps {
  children: React.ReactNode;
  className?: string;
}
export function FrappeForm({ children, className = '' }: FrappeFormProps) {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
}
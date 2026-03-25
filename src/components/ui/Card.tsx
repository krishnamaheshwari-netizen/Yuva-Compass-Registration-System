import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}
export function Card({
  children,
  className = '',
  hoverable = false,
  ...props
}: CardProps) {
  const hoverStyles = hoverable ?
  'transition-all duration-150 hover:-translate-y-[1px] hover:shadow-md cursor-pointer' :
  '';
  return (
    <div
      className={`bg-white rounded-[12px] shadow-sm border border-gray-200 ${hoverStyles} ${className}`}
      {...props}>
      
      {children}
    </div>);

}
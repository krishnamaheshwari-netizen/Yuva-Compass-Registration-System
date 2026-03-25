import React from 'react';
import { Loader2 } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary:
    'bg-[#16A34A] text-white hover:bg-[#15803D] focus:ring-[#16A34A]/30 shadow-[inset_0_1px_rgba(255,255,255,0.15),0_1px_1px_rgba(0,0,0,0.075)]',
    secondary:
    'bg-[#f3f3f3] text-[#383838] border border-[#e2e2e2] hover:bg-[#e2e2e2] focus:ring-[#16A34A]/20',
    ghost:
    'bg-transparent text-[#525252] hover:bg-[#f3f3f3] focus:ring-[#16A34A]/20',
    danger:
    'bg-[#e03636] text-white hover:bg-[#cc2929] focus:ring-[#e03636]/30 shadow-[inset_0_1px_rgba(255,255,255,0.15),0_1px_1px_rgba(0,0,0,0.075)]',
    success:
    'bg-[#16A34A] text-white hover:bg-[#15803D] focus:ring-[#16A34A]/30 shadow-[inset_0_1px_rgba(255,255,255,0.15),0_1px_1px_rgba(0,0,0,0.075)]'
  };
  const sizes = {
    sm: 'px-3 py-1 text-[13px] h-7',
    md: 'px-4 py-1.5 text-[13px] h-7',
    lg: 'px-5 py-2 text-[14px] h-9'
  };
  const widthClass = fullWidth ? 'w-full' : '';
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}>
      
      {isLoading && <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin" />}
      {children}
    </button>);

}
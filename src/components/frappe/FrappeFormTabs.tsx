import React from 'react';
interface FrappeFormTabsProps {
  steps: Array<{
    id: number;
    label: string;
  }>;
  currentStep: number;
  onStepClick: (id: number) => void;
}
export function FrappeFormTabs({
  steps,
  currentStep,
  onStepClick
}: FrappeFormTabsProps) {
  return (
    <div className="flex border-b border-[#ededed] mb-6 bg-white px-4">
      {steps.map((step) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;
        return (
          <button
            key={step.id}
            onClick={() => onStepClick(step.id)}
            className={`px-4 py-3 text-[14px] font-medium border-b-2 transition-colors whitespace-nowrap
              ${isActive ? 'border-[#171717] text-[#171717]' : isCompleted ? 'border-transparent text-[#16A34A] hover:text-[#15803D]' : 'border-transparent text-[#7c7c7c] hover:text-[#525252]'}`}
            style={{
              fontWeight: isActive ? 600 : 420
            }}>
            
            {isCompleted && <span className="mr-1">✓</span>}
            {step.id}. {step.label}
          </button>);

      })}
    </div>);

}
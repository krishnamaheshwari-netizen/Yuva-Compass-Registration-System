import React from 'react';
import { Check } from 'lucide-react';
interface Step {
  id: number;
  label: string;
}
interface WizardProgressProps {
  steps: Step[];
  currentStep: number;
}
export function WizardProgress({ steps, currentStep }: WizardProgressProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between relative">
        {/* Background line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-[#d1d8dd] z-0"></div>
        {/* Progress line */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-[#2490ef] z-0 transition-all duration-300"
          style={{
            width: `${(currentStep - 1) / (steps.length - 1) * 100}%`
          }}>
        </div>

        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          return (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center">
              
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-medium transition-all duration-300 border-2
                  ${isCompleted ? 'bg-[#2490ef] border-[#2490ef] text-white' : isCurrent ? 'bg-white border-[#2490ef] text-[#2490ef]' : 'bg-white border-[#d1d8dd] text-[#6c7680]'}`}>
                
                {isCompleted ? <Check className="w-4 h-4" /> : step.id}
              </div>
              <span
                className={`mt-2 text-[12px] font-medium absolute top-full w-32 text-center -ml-12 ${isCurrent ? 'text-[#36414c]' : 'text-[#6c7680]'}`}>
                
                {step.label}
              </span>
            </div>);

        })}
      </div>
    </div>);

}
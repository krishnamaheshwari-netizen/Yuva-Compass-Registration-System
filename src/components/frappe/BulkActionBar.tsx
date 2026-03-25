import React from 'react';
import { X } from 'lucide-react';
interface BulkActionBarProps {
  selectedCount: number;
  onClear: () => void;
  actions: React.ReactNode;
}
export function BulkActionBar({
  selectedCount,
  onClear,
  actions
}: BulkActionBarProps) {
  if (selectedCount === 0) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 lg:left-64 h-16 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 flex items-center justify-between px-6 animate-in slide-in-from-bottom-2">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-900 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">
          {selectedCount} selected
        </span>
        <button
          onClick={onClear}
          className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 transition-colors">
          
          <X className="w-4 h-4" /> Clear selection
        </button>
      </div>
      <div className="flex items-center gap-3">{actions}</div>
    </div>);

}
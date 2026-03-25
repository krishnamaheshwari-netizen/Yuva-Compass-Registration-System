import React, { Fragment } from 'react';
import { ChevronRight, Plus, Filter, Download, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';
interface FrappeToolbarProps {
  title: string;
  breadcrumbs?: {
    label: string;
    path?: string;
  }[];
  primaryAction?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  secondaryActions?: React.ReactNode;
}
export function FrappeToolbar({
  title,
  breadcrumbs,
  primaryAction,
  secondaryActions
}: FrappeToolbarProps) {
  return (
    <div className="bg-white border-b border-frappe-border px-6 py-4">
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 &&
      <div className="flex items-center gap-2 text-xs text-frappe-text-muted mb-2">
          {breadcrumbs.map((crumb, idx) =>
        <Fragment key={idx}>
              {idx > 0 && <ChevronRight className="w-3 h-3" />}
              <span
            className={
            idx === breadcrumbs.length - 1 ?
            'text-frappe-text font-medium' :
            'hover:text-primary cursor-pointer'
            }>
            
                {crumb.label}
              </span>
            </Fragment>
        )}
        </div>
      }

      {/* Title and Actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-frappe-text">{title}</h1>
        <div className="flex items-center gap-3">
          {secondaryActions}
          {primaryAction &&
          <Button onClick={primaryAction.onClick} className="shadow-sm">
              {primaryAction.icon || <Plus className="w-4 h-4 mr-2" />}
              {primaryAction.label}
            </Button>
          }
        </div>
      </div>
    </div>);

}
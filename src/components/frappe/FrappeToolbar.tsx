import React, { Fragment } from 'react';
import {
  Home,
  Search,
  Bell,
  HelpCircle,
  MoreVertical,
  RefreshCw } from
'lucide-react';
import { Button } from '../ui/Button';
interface FrappeToolbarProps {
  title: string;
  breadcrumbs?: {
    label: string;
    path?: string;
  }[];
  subtitle?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  secondaryActions?: React.ReactNode;
  showFilters?: boolean;
}
export function FrappeToolbar({
  title,
  breadcrumbs,
  subtitle,
  primaryAction,
  secondaryActions,
  showFilters
}: FrappeToolbarProps) {
  return (
    <div className="bg-white border-b border-[#ededed]">
      {/* Top Navbar - 48px */}
      <div className="h-12 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[14px] text-[#525252]">
          <button className="text-[#525252] hover:text-[#383838]">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
              
            </svg>
          </button>
          <span className="text-[#7c7c7c]">/</span>
          {breadcrumbs &&
          breadcrumbs.map((crumb, idx) =>
          <Fragment key={idx}>
                <span
              className={
              idx === breadcrumbs.length - 1 ?
              'text-[#525252] font-medium' :
              'hover:text-[#383838] cursor-pointer'
              }>
              
                  {crumb.label}
                </span>
                {idx < breadcrumbs.length - 1 &&
            <span className="text-[#7c7c7c]">/</span>
            }
              </Fragment>
          )}
        </div>
        <div className="flex items-center gap-3">
          {secondaryActions}
          <button className="text-[#525252] hover:text-[#383838] transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <button className="text-[#525252] hover:text-[#383838] transition-colors">
            <HelpCircle className="w-4 h-4" />
          </button>
          <button className="text-[#525252] hover:text-[#383838] transition-colors">
            <RefreshCw className="w-4 h-4" />
          </button>
          <button className="text-[#525252] hover:text-[#383838] transition-colors relative">
            <Bell className="w-4 h-4" />
          </button>
          <button className="text-[#525252] hover:text-[#383838] transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>
          {primaryAction &&
          <Button onClick={primaryAction.onClick} size="sm">
              {primaryAction.icon}
              {primaryAction.label}
            </Button>
          }
        </div>
      </div>
    </div>);

}
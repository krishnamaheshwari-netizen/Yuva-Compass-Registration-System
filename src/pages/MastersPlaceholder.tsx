import React from 'react';
import { FrappeToolbar } from '../components/frappe/FrappeToolbar';
interface MastersPlaceholderProps {
  title: string;
}
export function MastersPlaceholder({ title }: MastersPlaceholderProps) {
  return (
    <div className="min-h-screen">
      <FrappeToolbar
        title={title}
        breadcrumbs={[
        {
          label: 'Home'
        },
        {
          label: 'Masters'
        },
        {
          label: title
        }]
        } />
      
      <div className="flex items-center justify-center h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-[#999999] text-2xl">⚙</span>
          </div>
          <h3 className="text-[16px] font-bold text-[#171717] mb-1">
            {title} Master
          </h3>
          <p
            className="text-[13px] text-[#525252]"
            style={{
              fontWeight: 420
            }}>
            
            This is a standard Frappe List View. Data is managed through
            Frappe's doctype interface.
          </p>
        </div>
      </div>
    </div>);

}
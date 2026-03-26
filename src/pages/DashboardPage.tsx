import React from 'react';
import { FrappeToolbar } from '../components/frappe/FrappeToolbar';
export function DashboardPage() {
  return (
    <div className="min-h-screen">
      <FrappeToolbar
        title="Dashboard"
        breadcrumbs={[
        {
          label: 'Home'
        }]
        } />
      
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-[#f3f3f3] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-[#999999] text-3xl">📊</span>
          </div>
          <h2 className="text-[18px] font-bold text-[#171717] mb-2">
            Dashboard Under Development
          </h2>
          <p
            className="text-[14px] text-[#525252] mb-6"
            style={{
              fontWeight: 420
            }}>
            
            The Hub Coordinator dashboard with KPI cards, candidate pipeline,
            and pathway distribution is being built. It will be available in the
            next release.
          </p>
          <p
            className="text-[13px] text-[#7c7c7c]"
            style={{
              fontWeight: 420
            }}>
            
            Use the sidebar to navigate to Leads, Candidates, or Registration.
          </p>
        </div>
      </div>
    </div>);

}
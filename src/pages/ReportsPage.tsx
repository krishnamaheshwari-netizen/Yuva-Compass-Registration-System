import React from 'react';
import { FrappeToolbar } from '../components/frappe/FrappeToolbar';
export function ReportsPage() {
  return (
    <div className="min-h-screen">
      <FrappeToolbar
        title="Reports"
        breadcrumbs={[
        {
          label: 'Home'
        },
        {
          label: 'Reports'
        }]
        } />
      
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-[#f3f3f3] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-[#999999] text-3xl">📈</span>
          </div>
          <h2 className="text-[18px] font-bold text-[#171717] mb-2">
            Reports Under Development
          </h2>
          <p
            className="text-[14px] text-[#525252] mb-6"
            style={{
              fontWeight: 420
            }}>
            
            Analytics and reporting dashboards for candidate tracking, pathway
            outcomes, and hub performance are being built.
          </p>
          <p
            className="text-[13px] text-[#7c7c7c]"
            style={{
              fontWeight: 420
            }}>
            
            This section will include candidate journey reports, conversion
            metrics, and programme impact analysis.
          </p>
        </div>
      </div>
    </div>);

}
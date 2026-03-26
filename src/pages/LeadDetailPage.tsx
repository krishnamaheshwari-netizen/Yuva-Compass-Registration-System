import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FrappeToolbar } from '../components/frappe/FrappeToolbar';
import { Button } from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';
export function LeadDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <FrappeToolbar
        title={`Lead #${id}`}
        breadcrumbs={[
        {
          label: 'Home'
        },
        {
          label: 'Leads'
        },
        {
          label: `Lead #${id}`
        }]
        }
        secondaryActions={
        <Button
          variant="secondary"
          size="sm"
          onClick={() => navigate('/leads')}>
          
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Leads
          </Button>
        } />
      
      <div className="flex items-center justify-center h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-[#999999] text-2xl">👤</span>
          </div>
          <h3 className="text-[16px] font-bold text-[#171717] mb-1">
            Lead Detail View
          </h3>
          <p
            className="text-[13px] text-[#525252]"
            style={{
              fontWeight: 420
            }}>
            
            This is a standard Frappe Form View showing lead details and
            conversion options.
          </p>
        </div>
      </div>
    </div>);

}
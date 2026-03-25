import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { FrappeForm, FrappeSection } from '../components/frappe/FrappeForm';
import { FrappeField } from '../components/frappe/FrappeField';
import { FrappeToolbar } from '../components/frappe/FrappeToolbar';
import { useNavigate } from 'react-router-dom';
import { Save } from 'lucide-react';
export function SaarthiLeadCapturePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    village: '',
    source: 'Saarthi Visit',
    gatewayStatus: '',
    notes: ''
  });
  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = () => {
    // Save lead logic here
    alert('Lead captured successfully!');
    navigate('/leads');
  };
  return (
    <div className="min-h-screen">
      <FrappeToolbar
        title="New Lead"
        breadcrumbs={[
        {
          label: 'Home'
        },
        {
          label: 'Leads'
        },
        {
          label: 'New Lead'
        }]
        }
        secondaryActions={
        <Button
          variant="secondary"
          size="sm"
          onClick={() => navigate('/leads')}>
          
            Cancel
          </Button>
        } />
      

      <div className="p-6">
        <FrappeForm>
          <FrappeSection title="Lead Information" columns={2}>
            <FrappeField
              label="Full Name"
              type="Data"
              value={formData.fullName}
              onChange={(v) => handleInputChange('fullName', v)}
              mandatory
              placeholder="Enter full name" />
            
            <FrappeField
              label="Mobile Number"
              type="Data"
              inputType="tel"
              value={formData.mobile}
              onChange={(v) => handleInputChange('mobile', v)}
              mandatory
              placeholder="10 digits" />
            
            <FrappeField
              label="Village"
              type="Data"
              value={formData.village}
              onChange={(v) => handleInputChange('village', v)}
              mandatory
              placeholder="Village name" />
            
            <FrappeField
              label="Source"
              type="Select"
              options={[
              'Saarthi Visit',
              'Community Camp',
              'Referral',
              'WhatsApp',
              'Other']
              }
              value={formData.source}
              onChange={(v) => handleInputChange('source', v)}
              mandatory />
            
            <FrappeField
              label="Gateway Status"
              type="Select"
              options={['Student', 'Employed', 'Self-Employed', 'Not Engaged']}
              value={formData.gatewayStatus}
              onChange={(v) => handleInputChange('gatewayStatus', v)}
              mandatory
              helpText="Current occupation/education status" />
            
            <div className="col-span-2">
              <FrappeField
                label="Notes"
                type="Text"
                value={formData.notes}
                onChange={(v) => handleInputChange('notes', v)}
                placeholder="Any additional information..." />
              
            </div>
          </FrappeSection>

          <div className="mt-6 pt-6 border-t border-[#ededed] flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate('/leads')}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              <Save className="w-4 h-4 mr-2" />
              Save Lead
            </Button>
          </div>
        </FrappeForm>
      </div>
    </div>);

}
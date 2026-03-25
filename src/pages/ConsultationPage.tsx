import React from 'react';
import { Button } from '../components/ui/Button';
import { FrappeForm, FrappeSection } from '../components/frappe/FrappeForm';
import { FrappeField } from '../components/frappe/FrappeField';
import { AlertTriangle } from 'lucide-react';
export function ConsultationPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Consultation Session
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Capture counsellor notes and recommendations
        </p>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-md flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
        <div>
          <h3 className="text-sm font-medium text-amber-800">
            Counsellor Attention Recommended
          </h3>
          <p className="text-sm text-amber-700 mt-1">
            This candidate selected 'Not Engaged' as their current status. They
            have not been auto-routed to a pathway.
          </p>
        </div>
      </div>

      <FrappeForm>
        <FrappeSection title="Session Details" columns={2}>
          <FrappeField
            label="Candidate"
            type="Data"
            value="Amit Singh (YC-1042)"
            readOnly
            mandatory />
          
          <FrappeField
            label="Date"
            type="Date"
            value={new Date().toISOString().split('T')[0]}
            mandatory />
          
          <FrappeField
            label="Counselor Name"
            type="Data"
            value="Dr. Meena R."
            readOnly
            mandatory />
          
          <FrappeField
            label="Counseled"
            type="Select"
            options={['Yes', 'No']}
            value="Yes"
            mandatory />
          

          <div className="col-span-full">
            <FrappeField
              label="Notes"
              type="Text"
              placeholder="Notes from consultation session..." />
            
          </div>

          <div className="col-span-full">
            <FrappeField
              label="Pathway Recommendation"
              type="Select"
              options={[
              'Employability',
              'Entrepreneurship',
              'Career Discovery',
              'Needs Further Discussion']
              } />
            
          </div>
        </FrappeSection>

        <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
          <Button variant="secondary">Cancel</Button>
          <Button>Save Session</Button>
        </div>
      </FrappeForm>
    </div>);

}
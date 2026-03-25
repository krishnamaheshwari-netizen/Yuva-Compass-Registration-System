import React from 'react';
import { Button } from '../components/ui/Button';
import { FrappeForm, FrappeSection } from '../components/frappe/FrappeForm';
import { FrappeField } from '../components/frappe/FrappeField';
import { QrCode, Send, Download } from 'lucide-react';
export function InvoicingPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Invoice Generation</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage payments for Full Service tier candidates
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FrappeForm>
            <FrappeSection title="Invoice Details" columns={2}>
              <FrappeField
                label="Invoice Number"
                type="Data"
                value="YC-INV-2026-042"
                readOnly />
              
              <FrappeField
                label="Candidate"
                type="Data"
                value="Rajesh Kumar"
                readOnly
                mandatory />
              
              <FrappeField
                label="Pathway"
                type="Data"
                value="Employment"
                readOnly />
              
              <FrappeField
                label="Cohort"
                type="Data"
                value="Starter (P1)"
                readOnly />
              
              <FrappeField
                label="Service Tier"
                type="Select"
                options={['Full Service (Paid)', 'Limited Service (Free)']}
                value="Full Service (Paid)"
                mandatory />
              
              <FrappeField
                label="Amount"
                type="Currency"
                value="1500"
                mandatory />
              
              <FrappeField
                label="Payment Status"
                type="Select"
                options={['Pending', 'Paid', 'Failed', 'Refunded']}
                value="Pending" />
              
              <FrappeField label="Payment Date" type="Date" />
            </FrappeSection>

            <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
              <Button variant="secondary">Mark as Paid</Button>
              <Button>Save Invoice</Button>
            </div>
          </FrappeForm>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-[12px] shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center">
            <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border border-gray-200">
              <QrCode className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Payment QR Code</h3>
            <p className="text-sm text-gray-500 mb-6">
              Scan to pay ₹1,500 via UPI
            </p>

            <div className="w-full space-y-3">
              <Button fullWidth variant="secondary" className="justify-center">
                <Send className="w-4 h-4 mr-2" /> Send Payment Link
              </Button>
              <Button fullWidth variant="secondary" className="justify-center">
                <Download className="w-4 h-4 mr-2" /> Download Receipt
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}
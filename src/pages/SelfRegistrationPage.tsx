import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Modal } from '../components/ui/Modal';
import { MapPin, CheckCircle2 } from 'lucide-react';
export function SelfRegistrationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [status, setStatus] = useState('');
  const [tempStatus, setTempStatus] = useState('');
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTempStatus(e.target.value);
    setShowConfirmModal(true);
  };
  const confirmStatus = () => {
    setStatus(tempStatus);
    setShowConfirmModal(false);
  };
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-[#16A34A]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            You're registered!
          </h2>
          <p className="text-gray-600 mb-6">
            Your Lead ID is:{' '}
            <span className="font-mono font-bold text-gray-900">
              YC-LEAD-1042
            </span>
          </p>

          <div className="bg-blue-50 p-4 rounded-xl mb-8 text-left">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm text-blue-900 font-medium">
                  Visit your nearest hub in Phanda to complete full
                  registration.
                </p>
                <a
                  href="#"
                  className="text-sm text-blue-600 underline mt-1 inline-block">
                  
                  View on Map
                </a>
              </div>
            </div>
          </div>

          <Button fullWidth variant="secondary">
            Share this with a friend
          </Button>
        </div>
      </div>);

  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#16A34A] rounded flex items-center justify-center text-white font-bold">
            Y
          </div>
          <span className="font-bold text-gray-900">Yuva Compass</span>
        </div>
        <button className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
          A / अ
        </button>
      </div>

      <div className="p-4 max-w-md mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome!</h1>
          <p className="text-gray-600">Register to begin your journey.</p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 flex items-start gap-3">
          <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-blue-900">
              Auto-detected Location
            </p>
            <p className="text-sm text-blue-700">
              Block: Phanda, District: Bhopal
            </p>
          </div>
        </div>

        <form
          className="space-y-5 bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubmitted(true);
          }}>
          
          <Input
            label="1.1 Your Full Name"
            placeholder="Enter your full name (in English)"
            required
            className="text-base h-12" // Larger touch targets
          />

          <Select
            label="1.2 District"
            options={['Bhopal']}
            value="Bhopal"
            disabled
            className="text-base h-12 bg-gray-50" />
          

          <Select
            label="1.3 Block"
            options={['Phanda']}
            value="Phanda"
            disabled
            className="text-base h-12 bg-gray-50" />
          

          <Input
            label="1.4 Mobile Number"
            type="tel"
            placeholder="10-digit mobile number"
            required
            maxLength={10}
            className="text-base h-12" />
          

          <div className="pt-2 border-t border-gray-100">
            <Select
              label="1.5 What is your current status?"
              options={[
              'Student',
              'Employed',
              'Trade / Self-Employed',
              'Not Engaged']
              }
              value={status}
              onChange={handleStatusChange}
              required
              className="text-base h-12"
              helpText="This helps us connect you with the right programme." />
            
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              fullWidth
              size="lg"
              className="text-lg h-14 rounded-xl">
              
              Start Registration →
            </Button>
            <div className="text-center mt-4">
              <button
                type="button"
                className="text-sm text-gray-500 font-medium">
                
                Save as Draft
              </button>
            </div>
          </div>
        </form>
      </div>

      <Modal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        title="Confirm Your Status">
        
        <div className="space-y-4">
          <p className="text-gray-600">
            You selected:{' '}
            <span className="font-bold text-gray-900">{tempStatus}</span>. This
            will determine which programme track you are enrolled in. Are you
            sure?
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <Button fullWidth size="lg" onClick={confirmStatus}>
              Yes, Confirm
            </Button>
            <Button
              fullWidth
              size="lg"
              variant="secondary"
              onClick={() => setShowConfirmModal(false)}>
              
              Change Selection
            </Button>
          </div>
        </div>
      </Modal>
    </div>);

}
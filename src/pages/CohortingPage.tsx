import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { StatusPill } from '../components/frappe/StatusPill';
import { BulkActionBar } from '../components/frappe/BulkActionBar';
import { Modal } from '../components/ui/Modal';
import { FrappeField } from '../components/frappe/FrappeField';
export function CohortingPage() {
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const candidates = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    mobile: '9876543210',
    gateway: 'Employed',
    cue: 'Starter',
    pathway: 'Employment'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    mobile: '8765432109',
    gateway: 'Student',
    cue: 'Undecided Learner',
    pathway: 'Higher Education'
  },
  {
    id: 3,
    name: 'Amit Singh',
    mobile: '7654321098',
    gateway: 'Not Engaged',
    cue: 'Needs Counselling',
    pathway: 'Pending'
  },
  {
    id: 4,
    name: 'Neha Verma',
    mobile: '6543210987',
    gateway: 'Self-Employed',
    cue: 'Explorer',
    pathway: 'Entrepreneurship'
  }];

  const toggleCandidate = (id: number) => {
    setSelectedCandidates((prev) =>
    prev.includes(id) ? prev.filter((cId) => cId !== id) : [...prev, id]
    );
  };
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Cohorting & Pathway Assignment
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Assign candidates based on system cues
          </p>
        </div>
      </div>

      <Card className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12"></th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Candidate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gateway
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cohorting Cue
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pathway
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {candidates.map((candidate) =>
            <tr key={candidate.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-[#16A34A] focus:ring-[#16A34A]"
                  checked={selectedCandidates.includes(candidate.id)}
                  onChange={() => toggleCandidate(candidate.id)} />
                
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {candidate.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {candidate.mobile}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {candidate.gateway}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusPill status={candidate.cue} type="cohorting" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {candidate.pathway}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>

      <BulkActionBar
        selectedCount={selectedCandidates.length}
        onClear={() => setSelectedCandidates([])}
        actions={
        <Button onClick={() => setShowModal(true)}>Assign to Cohort</Button>
        } />
      

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Assign to Pathway Cohort">
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-sm">
            <span className="text-gray-500">Candidates: </span>
            <span className="font-medium">
              Rajesh Kumar (+{selectedCandidates.length - 1} more)
            </span>
          </div>

          <div className="bg-green-50 border border-green-200 p-3 rounded-md flex items-center gap-2">
            <span className="text-green-800 font-medium">
              System Suggestion:
            </span>
            <StatusPill status="Starter" type="cohorting" />
          </div>

          <FrappeField
            label="Select Cohort"
            type="Select"
            options={[
            '★ Starter (P1) — suggested',
            'Grower (P1)',
            'Advancer (P1)',
            'Explorer (P2)',
            'Seeker (P2)',
            'Builder (P2)']
            }
            mandatory />
          

          <FrappeField
            label="Override Reason"
            type="Text"
            placeholder="Enter reason for override..."
            helpText="Required if selected ≠ suggested" />
          

          <FrappeField
            label="Service Tier"
            type="Select"
            options={['Full Service (Paid)', 'Limited Service (Free)']}
            mandatory />
          

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowModal(false)}>
              Assign & Continue
            </Button>
          </div>
        </div>
      </Modal>
    </div>);

}
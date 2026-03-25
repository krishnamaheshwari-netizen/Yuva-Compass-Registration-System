import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FrappeToolbar } from '../components/frappe/FrappeToolbar';
import { StatusPill } from '../components/frappe/StatusPill';
import { BulkActionBar } from '../components/frappe/BulkActionBar';
import { Search, Filter, Download, Plus, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function CandidatesPage() {
  const navigate = useNavigate();
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const candidates = [
  {
    id: 1,
    name: 'Rahul Sharma',
    mobile: '9876543210',
    stage: 'Pathway Active',
    pathway: 'Employment',
    hub: 'Phanda Hub',
    registeredOn: '15 Mar 2026'
  },
  {
    id: 2,
    name: 'Priya Singh',
    mobile: '8765432109',
    stage: 'Foundation',
    pathway: 'Career Discovery',
    hub: 'Phanda Hub',
    registeredOn: '14 Mar 2026'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    mobile: '7654321098',
    stage: 'Consultation',
    pathway: 'Entrepreneurship',
    hub: 'Sehore Hub',
    registeredOn: '13 Mar 2026'
  },
  {
    id: 4,
    name: 'Neha Verma',
    mobile: '6543210987',
    stage: 'Registered',
    pathway: 'Employment',
    hub: 'Phanda Hub',
    registeredOn: '12 Mar 2026'
  },
  {
    id: 5,
    name: 'Rajesh Kumar',
    mobile: '9988776655',
    stage: 'Pathway Active',
    pathway: 'Entrepreneurship',
    hub: 'Sehore Hub',
    registeredOn: '11 Mar 2026'
  }];

  const toggleCandidate = (id: number) => {
    setSelectedCandidates((prev) =>
    prev.includes(id) ? prev.filter((cId) => cId !== id) : [...prev, id]
    );
  };
  const toggleAll = () => {
    if (selectedCandidates.length === candidates.length) {
      setSelectedCandidates([]);
    } else {
      setSelectedCandidates(candidates.map((c) => c.id));
    }
  };
  return (
    <div className="min-h-screen">
      <FrappeToolbar
        title="Candidates"
        breadcrumbs={[
        {
          label: 'Home'
        },
        {
          label: 'Candidates'
        }]
        }
        primaryAction={{
          label: 'New Registration',
          onClick: () => navigate('/candidates/new'),
          icon: <Plus className="w-4 h-4 mr-2" />
        }}
        secondaryActions={
        <>
            <Button variant="secondary" size="sm">
              <Download className="w-4 h-4 mr-2" /> Export
            </Button>
            <Button variant="secondary" size="sm">
              <Filter className="w-4 h-4 mr-2" /> Filters
            </Button>
          </>
        } />
      

      <div className="p-6">
        {/* Search and Filters */}
        <Card className="p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-frappe-text-muted w-4 h-4" />
              <input
                type="text"
                placeholder="Search by name, mobile, or ID..."
                className="w-full pl-10 pr-4 py-2 border border-frappe-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
              
            </div>
            <select className="px-4 py-2 border border-frappe-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-sm">
              <option>All Stages</option>
              <option>Registered</option>
              <option>Foundation</option>
              <option>Pathway Active</option>
            </select>
            <select className="px-4 py-2 border border-frappe-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-sm">
              <option>All Pathways</option>
              <option>Employment</option>
              <option>Entrepreneurship</option>
              <option>Career Discovery</option>
            </select>
          </div>
        </Card>

        {/* Candidates Table */}
        <Card className="overflow-hidden">
          <table className="min-w-full divide-y divide-frappe-border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left w-12">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-frappe-border text-primary focus:ring-primary"
                    checked={selectedCandidates.length === candidates.length}
                    onChange={toggleAll} />
                  
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-frappe-text-muted uppercase tracking-wider">
                  Candidate
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-frappe-text-muted uppercase tracking-wider">
                  Mobile
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-frappe-text-muted uppercase tracking-wider">
                  Stage
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-frappe-text-muted uppercase tracking-wider">
                  Pathway
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-frappe-text-muted uppercase tracking-wider">
                  Hub
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-frappe-text-muted uppercase tracking-wider">
                  Registered
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-frappe-text-muted uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-frappe-border">
              {candidates.map((candidate) =>
              <tr
                key={candidate.id}
                className="hover:bg-gray-50 transition-colors">
                
                  <td className="px-6 py-4">
                    <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-frappe-border text-primary focus:ring-primary"
                    checked={selectedCandidates.includes(candidate.id)}
                    onChange={() => toggleCandidate(candidate.id)} />
                  
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-frappe-text">
                      {candidate.name}
                    </div>
                    <div className="text-xs text-frappe-text-muted">
                      YC-{candidate.id.toString().padStart(4, '0')}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-frappe-text">
                    {candidate.mobile}
                  </td>
                  <td className="px-6 py-4">
                    <StatusPill status={candidate.stage} type="candidate" />
                  </td>
                  <td className="px-6 py-4 text-sm text-frappe-text">
                    {candidate.pathway}
                  </td>
                  <td className="px-6 py-4 text-sm text-frappe-text-muted">
                    {candidate.hub}
                  </td>
                  <td className="px-6 py-4 text-sm text-frappe-text-muted">
                    {candidate.registeredOn}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center gap-1">
                      <Eye className="w-4 h-4" /> View
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Card>
      </div>

      <BulkActionBar
        selectedCount={selectedCandidates.length}
        onClear={() => setSelectedCandidates([])}
        actions={
        <>
            <Button size="sm" variant="secondary">
              Assign to Batch
            </Button>
            <Button size="sm" variant="secondary">
              Assign to Cohort
            </Button>
            <Button size="sm">Export Selected</Button>
          </>
        } />
      
    </div>);

}
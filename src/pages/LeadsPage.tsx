import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { FrappeToolbar } from '../components/frappe/FrappeToolbar';
import { StatusPill } from '../components/frappe/StatusPill';
import { Search, Filter, Plus } from 'lucide-react';
export function LeadsPage() {
  const navigate = useNavigate();
  const [selectedLeads, setSelectedLeads] = useState<number[]>([]);
  const leads = [
  {
    id: 1,
    name: 'Amit Kumar',
    mobile: '9876543210',
    status: 'New',
    source: 'Saarthi Visit',
    hub: 'Phanda Hub',
    daysAgo: 2,
    gateway: 'Student'
  },
  {
    id: 2,
    name: 'Priya Singh',
    mobile: '8765432109',
    status: 'Contacted',
    source: 'Community Camp',
    hub: 'Phanda Hub',
    daysAgo: 8,
    gateway: 'Employed'
  },
  {
    id: 3,
    name: 'Rahul Verma',
    mobile: '7654321098',
    status: 'Scheduled',
    source: 'Referral',
    hub: 'Sehore Hub',
    daysAgo: 5,
    gateway: 'Self-Employed'
  },
  {
    id: 4,
    name: 'Neha Sharma',
    mobile: '6543210987',
    status: 'Dropped',
    source: 'WhatsApp',
    hub: 'Phanda Hub',
    daysAgo: 16,
    gateway: 'Not Engaged'
  },
  {
    id: 5,
    name: 'Vikram Patel',
    mobile: '9988776655',
    status: 'Converted',
    source: 'Saarthi Visit',
    hub: 'Sehore Hub',
    daysAgo: 3,
    gateway: 'Student'
  }];

  const toggleLead = (id: number) => {
    setSelectedLeads((prev) =>
    prev.includes(id) ? prev.filter((lId) => lId !== id) : [...prev, id]
    );
  };
  const getDaysColor = (days: number) => {
    if (days <= 7) return 'bg-green-100 text-green-800';
    if (days <= 14) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };
  return (
    <div className="min-h-screen">
      <FrappeToolbar
        title={
        selectedLeads.length > 0 ?
        `${selectedLeads.length} of ${leads.length} selected` :
        'Leads'
        }
        breadcrumbs={
        selectedLeads.length > 0 ?
        undefined :
        [
        {
          label: 'Home'
        },
        {
          label: 'Leads'
        }]

        }
        primaryAction={
        selectedLeads.length > 0 ?
        undefined :
        {
          label: '+ New Lead',
          onClick: () => navigate('/leads/new'),
          icon: <Plus className="w-4 h-4 mr-2" />
        }
        }
        secondaryActions={
        selectedLeads.length > 0 ?
        <>
              <Button variant="secondary" size="sm" onClick={() => {}}>
                Mark as Contacted
              </Button>
              <Button variant="secondary" size="sm" onClick={() => {}}>
                Assign Saarthi
              </Button>
              <Button size="sm" onClick={() => {}}>
                Convert to Registration
              </Button>
            </> :

        <Button variant="secondary" size="sm">
              <Filter className="w-4 h-4 mr-2" /> Filters
            </Button>

        } />
      

      <div className="p-6">
        {/* Search */}
        <Card className="p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-frappe-text-muted w-4 h-4" />
            <input
              type="text"
              placeholder="Search leads by name or mobile..."
              className="w-full pl-10 pr-4 py-2 border border-frappe-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-sm" />
            
          </div>
        </Card>

        {/* Leads Table */}
        <Card className="overflow-hidden">
          <table className="min-w-full divide-y divide-frappe-border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left w-12">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-frappe-border text-primary focus:ring-primary"
                    checked={selectedLeads.length === leads.length}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedLeads(leads.map((l) => l.id));
                      } else {
                        setSelectedLeads([]);
                      }
                    }} />
                  
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-frappe-text-muted uppercase tracking-wider">
                  Lead
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-frappe-text-muted uppercase tracking-wider">
                  Mobile
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-frappe-text-muted uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-frappe-text-muted uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-frappe-text-muted uppercase tracking-wider">
                  Gateway
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-frappe-text-muted uppercase tracking-wider">
                  Days
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-frappe-border">
              {leads.map((lead) =>
              <tr
                key={lead.id}
                className="hover:bg-gray-50 transition-colors">
                
                  <td className="px-6 py-4">
                    <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-frappe-border text-primary focus:ring-primary"
                    checked={selectedLeads.includes(lead.id)}
                    onChange={() => toggleLead(lead.id)} />
                  
                  </td>
                  <td className="px-6 py-4">
                    <div
                    className="text-sm font-medium text-frappe-text hover:text-[#0289f7] cursor-pointer"
                    style={{
                      fontWeight: 500
                    }}
                    onClick={() => navigate(`/leads/${lead.id}`)}>
                    
                      {lead.name}
                    </div>
                    <div className="text-xs text-frappe-text-muted">
                      {lead.hub}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-frappe-text">
                    {lead.mobile}
                  </td>
                  <td className="px-6 py-4">
                    <StatusPill status={lead.status} type="lead" />
                  </td>
                  <td className="px-6 py-4 text-sm text-frappe-text-muted">
                    {lead.source}
                  </td>
                  <td className="px-6 py-4 text-sm text-frappe-text">
                    {lead.gateway}
                  </td>
                  <td className="px-6 py-4">
                    <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${getDaysColor(lead.daysAgo)}`}>
                    
                      {lead.daysAgo}d ago
                    </span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </div>);

}
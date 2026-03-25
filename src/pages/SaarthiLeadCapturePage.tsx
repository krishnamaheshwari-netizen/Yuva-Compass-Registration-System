import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { StatusPill } from '../components/frappe/StatusPill';
import { BulkActionBar } from '../components/frappe/BulkActionBar';
import {
  Plus,
  Search,
  Filter,
  Phone,
  MessageCircle,
  UserPlus } from
'lucide-react';
export function SaarthiLeadCapturePage() {
  const [selectedLeads, setSelectedLeads] = useState<number[]>([]);
  const leads = [
  {
    id: 1,
    name: 'Amit Kumar',
    mobile: '9876543210',
    status: 'New',
    days: 2
  },
  {
    id: 2,
    name: 'Priya Singh',
    mobile: '8765432109',
    status: 'Contacted',
    days: 8
  },
  {
    id: 3,
    name: 'Rahul Verma',
    mobile: '7654321098',
    status: 'Scheduled',
    days: 5
  },
  {
    id: 4,
    name: 'Neha Sharma',
    mobile: '6543210987',
    status: 'Dropped',
    days: 16
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
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-lg font-bold text-gray-900">Lead Capture</h1>
        <Button
          size="sm"
          className="rounded-full w-8 h-8 p-0 flex items-center justify-center">
          
          <Plus className="w-5 h-5" />
        </Button>
      </div>

      <div className="p-4">
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search leads..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-[#16A34A] focus:border-[#16A34A]" />
            
          </div>
          <Button variant="secondary" className="px-3">
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-3">
          {leads.map((lead) =>
          <Card key={lead.id} className="p-4 flex items-start gap-3">
              <div className="pt-1">
                <input
                type="checkbox"
                className="w-5 h-5 rounded border-gray-300 text-[#16A34A] focus:ring-[#16A34A]"
                checked={selectedLeads.includes(lead.id)}
                onChange={() => toggleLead(lead.id)} />
              
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-base font-semibold text-gray-900 truncate">
                    {lead.name}
                  </h3>
                  <StatusPill status={lead.status} type="lead" />
                </div>
                <p className="text-sm text-gray-500 mb-2">{lead.mobile}</p>
                <div className="flex items-center gap-2">
                  <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${getDaysColor(lead.days)}`}>
                  
                    {lead.days} days ago
                  </span>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>

      <BulkActionBar
        selectedCount={selectedLeads.length}
        onClear={() => setSelectedLeads([])}
        actions={
        <div className="flex gap-2">
            <Button size="sm" variant="secondary" className="px-2">
              <Phone className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="secondary" className="px-2">
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Button size="sm" className="whitespace-nowrap">
              Convert
            </Button>
          </div>
        } />
      
    </div>);

}
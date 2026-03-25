import React from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { StatusPill } from '../components/frappe/StatusPill';
import { Plus, Users, Calendar } from 'lucide-react';
export function BatchManagementPage() {
  const batches = [
  {
    id: 'BPL_001',
    name: 'Phanda_Bhopal_MP_001',
    trainer: 'Vikram S.',
    start: '10 Mar 2026',
    end: '24 Mar 2026',
    count: 15,
    max: 15,
    status: 'In Progress'
  },
  {
    id: 'BPL_002',
    name: 'Phanda_Bhopal_MP_002',
    trainer: 'Anita K.',
    start: '25 Mar 2026',
    end: '08 Apr 2026',
    count: 12,
    max: 15,
    status: 'Not Started'
  },
  {
    id: 'BPL_000',
    name: 'Phanda_Bhopal_MP_000',
    trainer: 'Vikram S.',
    start: '15 Feb 2026',
    end: '01 Mar 2026',
    count: 14,
    max: 15,
    status: 'Completed'
  }];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Foundation Batches
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage bootcamp batches and attendance
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" /> New Batch
        </Button>
      </div>

      <Card className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Batch Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trainer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dates
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Candidates
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {batches.map((batch) =>
            <tr key={batch.id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {batch.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    Foundation Bootcamp
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {batch.trainer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-900">
                    <Calendar className="w-4 h-4 mr-1.5 text-gray-400" />
                    {batch.start}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1.5 text-gray-400" />
                    <span
                    className={`text-sm font-medium ${batch.count === batch.max ? 'text-red-600' : 'text-gray-900'}`}>
                    
                      {batch.count}/{batch.max}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusPill status={batch.status} type="batch" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>);

}
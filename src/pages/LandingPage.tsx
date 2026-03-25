import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import {
  Users,
  Smartphone,
  Monitor,
  FileText,
  Briefcase,
  BookOpen,
  CreditCard } from
'lucide-react';
export function LandingPage() {
  const flows = [
  {
    id: 1,
    title: 'Candidate Self-Registration',
    description:
    'Mobile-first QR landing page for candidates to self-register.',
    icon: Smartphone,
    path: '/self-register',
    role: 'Candidate',
    device: 'Mobile (375px)'
  },
  {
    id: 2,
    title: 'Saarthi Lead Capture',
    description:
    'Mobile interface for Saarthis to capture and manage leads in the field.',
    icon: Users,
    path: '/saarthi-leads',
    role: 'Saarthi',
    device: 'Mobile (375px)'
  },
  {
    id: 3,
    title: 'Registration Wizard',
    description:
    'PRIMARY FOCUS: 3-step wizard with conditional routing for Hub Coordinators.',
    icon: Monitor,
    path: '/registration-wizard',
    role: 'Hub Coordinator',
    device: 'Desktop (1440px)',
    highlight: true
  },
  {
    id: 4,
    title: 'Batch Management',
    description:
    'Create and manage foundation bootcamp batches and attendance.',
    icon: BookOpen,
    path: '/batches',
    role: 'Hub Coordinator',
    device: 'Desktop (1440px)'
  },
  {
    id: 5,
    title: 'Cohorting & Pathway',
    description: 'Assign candidates to pathways based on system suggestions.',
    icon: Briefcase,
    path: '/cohorting',
    role: 'Hub Coordinator',
    device: 'Desktop (1440px)'
  },
  {
    id: 6,
    title: 'Consultation',
    description:
    'Capture notes and recommendations from candidate consultations.',
    icon: FileText,
    path: '/consultation',
    role: 'Counsellor',
    device: 'Desktop (1440px)'
  },
  {
    id: 7,
    title: 'Invoicing',
    description:
    'Generate invoices and payment links for paid service tiers.',
    icon: CreditCard,
    path: '/invoicing',
    role: 'Hub Coordinator',
    device: 'Desktop (1440px)'
  }];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Yuva Compass Wireframes
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hi-Fi interactive prototype for validation of fields, conditional
          logic, and user flows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flows.map((flow) =>
        <Link key={flow.id} to={flow.path} className="block group">
            <Card
            hoverable
            className={`h-full flex flex-col ${flow.highlight ? 'ring-2 ring-[#16A34A] shadow-md' : ''}`}>
            
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${flow.highlight ? 'bg-green-100 text-[#16A34A]' : 'bg-gray-100 text-gray-600'}`}>
                  
                    <flow.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Flow {flow.id}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#16A34A] transition-colors">
                  {flow.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 flex-1">
                  {flow.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Role:</span>
                    <span className="font-medium text-gray-900">
                      {flow.role}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Target Device:</span>
                    <span className="font-medium text-gray-900">
                      {flow.device}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        )}
      </div>
    </div>);

}
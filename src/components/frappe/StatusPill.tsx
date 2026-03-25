import React from 'react';
import { AlertTriangle } from 'lucide-react';
interface StatusPillProps {
  status: string;
  type?: 'lead' | 'candidate' | 'batch' | 'payment' | 'cohorting';
  className?: string;
}
export function StatusPill({
  status,
  type = 'candidate',
  className = ''
}: StatusPillProps) {
  // Color mappings based on the BRD specification
  const colorMap: Record<
    string,
    Record<
      string,
      {
        bg: string;
        text: string;
        icon?: boolean;
      }>> =

  {
    lead: {
      New: {
        bg: '#DBEAFE',
        text: '#1D4ED8'
      },
      Contacted: {
        bg: '#FEF3C7',
        text: '#D97706'
      },
      Scheduled: {
        bg: '#EDE9FE',
        text: '#7C3AED'
      },
      Converted: {
        bg: '#DCFCE7',
        text: '#16A34A'
      },
      Dropped: {
        bg: '#FEE2E2',
        text: '#DC2626'
      }
    },
    candidate: {
      'Pre-Reg': {
        bg: '#F3F4F6',
        text: '#6B7280'
      },
      Registered: {
        bg: '#DBEAFE',
        text: '#1D4ED8'
      },
      Foundation: {
        bg: '#FEF3C7',
        text: '#D97706'
      },
      Assessment: {
        bg: '#EDE9FE',
        text: '#7C3AED'
      },
      Consultation: {
        bg: '#CFFAFE',
        text: '#0891B2'
      },
      'Pathway Active': {
        bg: '#DCFCE7',
        text: '#16A34A'
      },
      'Outcome Achieved': {
        bg: '#D1FAE5',
        text: '#059669'
      },
      Dropped: {
        bg: '#FEE2E2',
        text: '#DC2626'
      }
    },
    batch: {
      'Not Started': {
        bg: '#F3F4F6',
        text: '#6B7280'
      },
      'In Progress': {
        bg: '#DBEAFE',
        text: '#1D4ED8'
      },
      Completed: {
        bg: '#DCFCE7',
        text: '#16A34A'
      }
    },
    payment: {
      Pending: {
        bg: '#FEF3C7',
        text: '#D97706'
      },
      Paid: {
        bg: '#DCFCE7',
        text: '#16A34A'
      },
      Failed: {
        bg: '#FEE2E2',
        text: '#DC2626'
      },
      Refunded: {
        bg: '#F3F4F6',
        text: '#6B7280'
      }
    },
    cohorting: {
      Starter: {
        bg: '#DCFCE7',
        text: '#16A34A'
      },
      Grower: {
        bg: '#CFFAFE',
        text: '#0891B2'
      },
      Advancer: {
        bg: '#EDE9FE',
        text: '#7C3AED'
      },
      Explorer: {
        bg: '#FEF3C7',
        text: '#D97706'
      },
      Seeker: {
        bg: '#F3F4F6',
        text: '#6B7280'
      },
      Builder: {
        bg: '#FEE2E2',
        text: '#DC2626'
      },
      'Undecided Learner': {
        bg: '#DBEAFE',
        text: '#1D4ED8'
      },
      'Confused Undergrad': {
        bg: '#FCE7F3',
        text: '#BE185D'
      },
      'Purposeful Pursuer': {
        bg: '#D1FAE5',
        text: '#059669'
      },
      'Needs Counselling': {
        bg: '#FEE2E2',
        text: '#DC2626',
        icon: true
      }
    }
  };
  // Find the exact match or default to a gray pill
  const style = colorMap[type]?.[status] || {
    bg: '#F3F4F6',
    text: '#6B7280'
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${className}`}
      style={{
        backgroundColor: style.bg,
        color: style.text
      }}>
      
      {style.icon && <AlertTriangle className="w-3 h-3 mr-1" />}
      {status}
    </span>);

}
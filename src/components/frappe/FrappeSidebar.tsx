import React from 'react';
import {
  Home,
  Users,
  BookOpen,
  Briefcase,
  FileText,
  DollarSign,
  BarChart3,
  Settings } from
'lucide-react';
import { Link, useLocation } from 'react-router-dom';
export function FrappeSidebar() {
  const location = useLocation();
  const navItems = [
  {
    icon: Home,
    label: 'Dashboard',
    path: '/'
  },
  {
    icon: Users,
    label: 'Candidates',
    path: '/candidates'
  },
  {
    icon: Users,
    label: 'Leads',
    path: '/leads'
  },
  {
    icon: BookOpen,
    label: 'Batches',
    path: '/batches'
  },
  {
    icon: Briefcase,
    label: 'Cohorting',
    path: '/cohorting'
  },
  {
    icon: FileText,
    label: 'Consultations',
    path: '/consultations'
  },
  {
    icon: DollarSign,
    label: 'Invoices',
    path: '/invoices'
  },
  {
    icon: BarChart3,
    label: 'Reports',
    path: '/reports'
  }];

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-[#2e3338] flex flex-col z-50 shadow-lg">
      {/* Header */}
      <div className="h-14 flex items-center px-4 border-b border-[#3a4149]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-white font-bold text-lg">Y</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm leading-tight">
              Yuva Compass
            </span>
            <span className="text-[#8d99a6] text-[10px] leading-tight">
              Youth Development Portal
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all
                  ${isActive ? 'bg-primary text-white shadow-sm' : 'text-[#d1d8dd] hover:bg-[#3a4149] hover:text-white'}`}>
                
                <item.icon className="w-[18px] h-[18px]" />
                {item.label}
              </Link>);

          })}
        </nav>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-[#3a4149]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-semibold text-sm">HC</span>
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-white text-sm font-medium truncate">
              Nilesh Deshmukh
            </span>
            <span className="text-[#8d99a6] text-xs truncate">
              Hub Coordinator
            </span>
          </div>
          <button className="text-[#8d99a6] hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>);

}
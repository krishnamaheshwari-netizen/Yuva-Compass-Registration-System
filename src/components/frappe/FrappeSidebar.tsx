import React, { useState } from 'react';
import { Search, ChevronRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
export function FrappeSidebar() {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([
  'home',
  'people',
  'programmes']
  );
  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
    prev.includes(section) ?
    prev.filter((s) => s !== section) :
    [...prev, section]
    );
  };
  const sections = [
  {
    id: 'home',
    label: 'Home',
    items: [
    {
      label: 'Dashboard',
      path: '/'
    }]

  },
  {
    id: 'people',
    label: 'People',
    items: [
    {
      label: 'Leads',
      path: '/leads'
    },
    {
      label: 'Candidates',
      path: '/candidates'
    },
    {
      label: 'Registration',
      path: '/candidates/new'
    }]

  },
  {
    id: 'programmes',
    label: 'Programmes',
    items: [
    {
      label: 'Foundation Batches',
      path: '/batches'
    },
    {
      label: 'Consultations',
      path: '/consultations'
    },
    {
      label: 'Cohorting',
      path: '/cohorting'
    }]

  }];

  return (
    <aside className="fixed top-0 left-0 h-full w-[220px] bg-[#f8f8f8] border-r border-[#ededed] flex flex-col z-50">
      {/* Logo Section */}
      <div className="h-12 flex items-center px-3 border-b border-[#ededed]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#16A34A] rounded flex items-center justify-center text-white text-xs font-bold">
            YC
          </div>
          <div className="flex flex-col">
            <span className="text-[#171717] font-semibold text-sm leading-tight">
              Yuva Compass
            </span>
            <span className="text-[#7c7c7c] text-[10px] leading-tight">
              Youth Development
            </span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-2 py-2 border-b border-[#ededed]">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[#7c7c7c]" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-7 pr-2 py-1 text-[13px] bg-[#f3f3f3] border-none rounded-lg focus:outline-none focus:ring-1 focus:ring-[#16A34A]" />
          
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto py-2">
        {sections.map((section) => {
          const isExpanded = expandedSections.includes(section.id);
          return (
            <div key={section.id} className="mb-1">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between px-3 py-1.5 text-[11px] font-semibold text-[#7c7c7c] uppercase tracking-wider hover:bg-[#f3f3f3]">
                
                {section.label}
                {isExpanded ?
                <ChevronDown className="w-3 h-3" /> :

                <ChevronRight className="w-3 h-3" />
                }
              </button>
              {isExpanded &&
              <nav className="px-2 space-y-0.5 mt-0.5">
                  {section.items.map((item) => {
                  const isActive =
                  location.pathname === item.path ||
                  item.path !== '/' &&
                  location.pathname.startsWith(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-3 py-2 rounded-lg text-[14px] font-[420] transition-all
                          ${isActive ? 'bg-[#f3f3f3] text-[#16A34A]' : 'text-[#525252] hover:bg-[#f3f3f3]'}`}>
                      
                        {item.label}
                      </Link>);

                })}
                </nav>
              }
            </div>);

        })}
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#ededed]">
        <button className="w-full px-3 py-2 text-[13px] text-[#525252] hover:bg-[#f3f3f3] text-left">
          Collapse
        </button>
        <div className="px-3 py-2 flex items-center gap-2 border-t border-[#ededed]">
          <div className="w-7 h-7 rounded-full bg-[#16A34A] flex items-center justify-center text-white text-[11px] font-semibold">
            ND
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] text-[#383838] font-medium truncate">
              Nilesh Deshmukh
            </div>
            <div className="text-[12px] text-[#7c7c7c] truncate">
              nilesh@trif.org
            </div>
          </div>
        </div>
      </div>
    </aside>);

}
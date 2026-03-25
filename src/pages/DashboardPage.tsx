import React from 'react';
import { Card } from '../components/ui/Card';
import { FrappeToolbar } from '../components/frappe/FrappeToolbar';
import {
  Users,
  UserCheck,
  BookOpen,
  TrendingUp,
  ArrowUp,
  ArrowDown } from
'lucide-react';
export function DashboardPage() {
  const stats = [
  {
    label: 'Total Candidates',
    value: '1,247',
    change: '+12%',
    trend: 'up',
    icon: Users,
    color: 'bg-blue-500'
  },
  {
    label: 'Active in Pathways',
    value: '892',
    change: '+8%',
    trend: 'up',
    icon: UserCheck,
    color: 'bg-green-500'
  },
  {
    label: 'Foundation Batches',
    value: '24',
    change: '+3',
    trend: 'up',
    icon: BookOpen,
    color: 'bg-purple-500'
  },
  {
    label: 'Placement Rate',
    value: '67%',
    change: '-2%',
    trend: 'down',
    icon: TrendingUp,
    color: 'bg-orange-500'
  }];

  const recentActivity = [
  {
    type: 'registration',
    candidate: 'Rahul Sharma',
    action: 'completed registration',
    time: '5 minutes ago'
  },
  {
    type: 'batch',
    candidate: 'Batch BPL_001',
    action: 'attendance marked (14/15)',
    time: '1 hour ago'
  },
  {
    type: 'consultation',
    candidate: 'Priya Singh',
    action: 'consultation completed',
    time: '2 hours ago'
  },
  {
    type: 'payment',
    candidate: 'Amit Kumar',
    action: 'payment received ₹1,500',
    time: '3 hours ago'
  }];

  return (
    <div className="min-h-screen">
      <FrappeToolbar
        title="Dashboard"
        breadcrumbs={[
        {
          label: 'Home'
        }]
        } />
      

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6">
          {stats.map((stat, idx) =>
          <Card key={idx} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div
                className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div
                className={`flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                
                  {stat.trend === 'up' ?
                <ArrowUp className="w-4 h-4" /> :

                <ArrowDown className="w-4 h-4" />
                }
                  {stat.change}
                </div>
              </div>
              <div className="text-3xl font-bold text-frappe-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-frappe-text-muted">{stat.label}</div>
            </Card>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-frappe-text mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) =>
              <div
                key={idx}
                className="flex items-start gap-3 pb-4 border-b border-frappe-border last:border-0 last:pb-0">
                
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-frappe-text">
                      <span className="font-medium">{activity.candidate}</span>{' '}
                      {activity.action}
                    </p>
                    <p className="text-xs text-frappe-text-muted mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-frappe-text mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-4 border-2 border-frappe-border rounded-lg hover:border-primary hover:bg-primary-light transition-all text-left">
                <Users className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm font-medium text-frappe-text">
                  New Registration
                </div>
              </button>
              <button className="p-4 border-2 border-frappe-border rounded-lg hover:border-primary hover:bg-primary-light transition-all text-left">
                <BookOpen className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm font-medium text-frappe-text">
                  Create Batch
                </div>
              </button>
              <button className="p-4 border-2 border-frappe-border rounded-lg hover:border-primary hover:bg-primary-light transition-all text-left">
                <UserCheck className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm font-medium text-frappe-text">
                  Assign Cohort
                </div>
              </button>
              <button className="p-4 border-2 border-frappe-border rounded-lg hover:border-primary hover:bg-primary-light transition-all text-left">
                <TrendingUp className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm font-medium text-frappe-text">
                  View Reports
                </div>
              </button>
            </div>
          </Card>
        </div>

        {/* Pathway Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-frappe-text mb-4">
            Pathway Distribution
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-1">412</div>
              <div className="text-sm text-frappe-text-muted">
                Employment (P1)
              </div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-1">287</div>
              <div className="text-sm text-frappe-text-muted">
                Entrepreneurship (P2)
              </div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-1">193</div>
              <div className="text-sm text-frappe-text-muted">
                Career Discovery (P3)
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>);

}
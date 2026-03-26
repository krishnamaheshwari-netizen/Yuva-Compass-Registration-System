import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FrappeSidebar } from './components/frappe/FrappeSidebar';
import { DashboardPage } from './pages/DashboardPage';
import { CandidatesPage } from './pages/CandidatesPage';
import { LeadsPage } from './pages/LeadsPage';
import { RegistrationWizardPage } from './pages/RegistrationWizardPage';
import { SaarthiLeadCapturePage } from './pages/SaarthiLeadCapturePage';
import { SelfRegistrationPage } from './pages/SelfRegistrationPage';
import { BatchManagementPage } from './pages/BatchManagementPage';
import { CohortingPage } from './pages/CohortingPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { InvoicingPage } from './pages/InvoicingPage';
import { MastersPlaceholder } from './pages/MastersPlaceholder';
import { ReportsPage } from './pages/ReportsPage';
import { LeadDetailPage } from './pages/LeadDetailPage';
export function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-white">
        <FrappeSidebar />

        <main className="flex-1 ml-[220px]">
          <Routes>
            <Route path="/" element={<DashboardPage />} />

            {/* Masters */}
            <Route
              path="/masters/hubs"
              element={<MastersPlaceholder title="Hubs" />} />
            
            <Route
              path="/masters/states"
              element={<MastersPlaceholder title="States" />} />
            
            <Route
              path="/masters/districts"
              element={<MastersPlaceholder title="Districts" />} />
            
            <Route
              path="/masters/blocks"
              element={<MastersPlaceholder title="Blocks" />} />
            
            <Route
              path="/masters/gp"
              element={<MastersPlaceholder title="Gram Panchayats" />} />
            
            <Route
              path="/masters/villages"
              element={<MastersPlaceholder title="Villages" />} />
            
            <Route
              path="/masters/sectors"
              element={<MastersPlaceholder title="Sectors" />} />
            

            {/* People */}
            <Route path="/candidates" element={<CandidatesPage />} />
            <Route
              path="/candidates/new"
              element={<RegistrationWizardPage />} />
            
            <Route path="/leads" element={<LeadsPage />} />
            <Route path="/leads/new" element={<SaarthiLeadCapturePage />} />
            <Route path="/leads/:id" element={<LeadDetailPage />} />

            {/* Programmes */}
            <Route path="/batches" element={<BatchManagementPage />} />
            <Route path="/cohorting" element={<CohortingPage />} />
            <Route path="/consultations" element={<ConsultationPage />} />

            {/* Finance */}
            <Route path="/invoices" element={<InvoicingPage />} />

            {/* Reports */}
            <Route path="/reports" element={<ReportsPage />} />

            {/* Other */}
            <Route path="/self-register" element={<SelfRegistrationPage />} />
          </Routes>
        </main>
      </div>
    </Router>);

}
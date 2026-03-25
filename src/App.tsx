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
export function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-white">
        <FrappeSidebar />

        <main className="flex-1 ml-[220px]">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/candidates" element={<CandidatesPage />} />
            <Route
              path="/candidates/new"
              element={<RegistrationWizardPage />} />
            
            <Route path="/leads" element={<LeadsPage />} />
            <Route path="/leads/new" element={<SaarthiLeadCapturePage />} />
            <Route path="/batches" element={<BatchManagementPage />} />
            <Route path="/cohorting" element={<CohortingPage />} />
            <Route path="/consultations" element={<ConsultationPage />} />
            <Route path="/invoices" element={<InvoicingPage />} />
            <Route path="/self-register" element={<SelfRegistrationPage />} />
          </Routes>
        </main>
      </div>
    </Router>);

}
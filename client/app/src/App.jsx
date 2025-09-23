import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import OtpVerificationPage from './pages/OtpVerificationPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

// About IAAII Pages
import MissionPage from './pages/MissionPage';
import VisionPage from './pages/VisionPage';
import StrategicGoalsPage from './pages/StrategicGoalsPage';
import PurposeGoalsPage from './pages/PurposeGoalsPage';
import GlobalRolePage from './pages/GlobalRolePage';
import CodeOfEthicsPage from './pages/CodeOfEthicsPage';
import AboutCollegePage from './pages/AboutCollegePage';

// Publications Pages
import PublicationsPage from './pages/PublicationsPage';
import AboutJournalPage from './pages/AboutJournalPage';
import EditorialBoardPage from './pages/EditorialBoardPage';
import SubmissionGuidelinesPage from './pages/SubmissionGuidelinesPage';
import IssuesPage from './pages/IssuesPage';

// Membership Pages
import MembersPage from './pages/MembersPage';
import RegionsPage from './pages/RegionsPage';
import CorrespondingPage from './pages/CorrespondingPage';
import CareersPage from './pages/CareersPage';

// Resources Pages
import DisclaimerPage from './pages/DisclaimerPage';
import PurposeOfWebsitePage from './pages/PurposeOfWebsitePage';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/otp-verification" element={<OtpVerificationPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            
            {/* About IAAII Routes */}
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/strategic-goals" element={<StrategicGoalsPage />} />
            <Route path="/purpose-goals" element={<PurposeGoalsPage />} />
            <Route path="/global-role" element={<GlobalRolePage />} />
            <Route path="/code-of-ethics" element={<CodeOfEthicsPage />} />
            <Route path="/about-college" element={<AboutCollegePage />} />
            
            {/* Publications Routes */}
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/about-journal" element={<AboutJournalPage />} />
            <Route path="/editorial-board" element={<EditorialBoardPage />} />
            <Route path="/submission-guidelines" element={<SubmissionGuidelinesPage />} />
            <Route path="/issues" element={<IssuesPage />} />
            
            {/* Membership Routes */}
            <Route path="/members" element={<MembersPage />} />
            <Route path="/regions" element={<RegionsPage />} />
            <Route path="/corresponding" element={<CorrespondingPage />} />
            <Route path="/careers" element={<CareersPage />} />
            
            {/* Resources Routes */}
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/purpose-of-website" element={<PurposeOfWebsitePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App; 
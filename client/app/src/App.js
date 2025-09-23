import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { motion } from 'framer-motion';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import OtpVerificationPage from './pages/OtpVerificationPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import MissionPage from './pages/MissionPage';
import PublicationsPage from './pages/PublicationsPage';
import VisionPage from './pages/VisionPage';
import StrategicGoalsPage from './pages/StrategicGoalsPage';
import PurposeGoalsPage from './pages/PurposeGoalsPage';
import GlobalRolePage from './pages/GlobalRolePage';
import CodeOfEthicsPage from './pages/CodeOfEthicsPage';
import AboutCollegePage from './pages/AboutCollegePage';
import AboutJournalPage from './pages/AboutJournalPage';
import EditorialBoardPage from './pages/EditorialBoardPage';
import SubmissionGuidelinesPage from './pages/SubmissionGuidelinesPage';
import IssuesPage from './pages/IssuesPage';
import MembersPage from './pages/MembersPage';
import MembershipApplicationPage from './pages/MembershipApplicationPage';


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
            <Route 
              path="/forgot-password" 
              element={
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <ForgotPasswordPage />
                </motion.div>
              } 
            />
            <Route 
              path="/otp-verification" 
              element={
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <OtpVerificationPage />
                </motion.div>
              } 
            />
            <Route 
              path="/reset-password" 
              element={
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <ResetPasswordPage />
                </motion.div>
              } 
            />
            {/* Add more routes as needed */}   
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/publications" element={<PublicationsPage/>} />
            <Route path="/vision" element={<VisionPage/>} />
            <Route path="/strategic-goals" element={<StrategicGoalsPage/>} />
            <Route path="/purpose-goals" element={<PurposeGoalsPage/>} />
            <Route path="/global-role" element={<GlobalRolePage/>} />
            <Route path="/code-of-ethics" element={<CodeOfEthicsPage/>} />
            <Route path="/about-college" element={<AboutCollegePage/>} />
            <Route path="/about-journal" element={<AboutJournalPage/>} />
            <Route path="/editorial-board" element={<EditorialBoardPage/>} />
            <Route path="/submission-guidelines" element={<SubmissionGuidelinesPage/>} />
            <Route path="/issues" element={<IssuesPage/>} />
            <Route path="/members" element={<MembersPage/>} />
            <Route path="/membership-application" element={<MembershipApplicationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

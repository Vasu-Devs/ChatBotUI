import React, { useState } from 'react';
import LandingPage from '../pages/LandingPage';
import App from '../App';
import AdminUploadApp from '../AdminUpload';

const AppRouter = () => {
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'chat', 'admin'
  
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };
  
  const handleBackToHome = () => {
    setCurrentPage('landing');
  };
  
  switch (currentPage) {
    case 'chat':
      return <App onBackToHome={handleBackToHome} />;
    case 'admin':
      return <AdminUploadApp onBackToHome={handleBackToHome} />;
    default:
      return <LandingPage onNavigate={handleNavigate} />;
  }
};

export default AppRouter;
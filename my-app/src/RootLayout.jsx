import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import AppRouter from './components/AppRouter';
import './index.css';

/**
 * Root Layout Component
 * Clean structure inspired by Next.js layout pattern
 * Provides theme context and renders main application
 */
const RootLayout = ({ children }) => {
  return (
    <div className="antialiased">
      <ThemeProvider>
        {children || <AppRouter />}
      </ThemeProvider>
    </div>
  );
};

export default RootLayout;
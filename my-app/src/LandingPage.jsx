import React, { useState } from 'react';
import { 
  MessageSquare, 
  Shield, 
  GraduationCap, 
  ChevronRight,
  Sun,
  Moon,
  Users,
  Database,
  BookOpen,
  Upload
} from 'lucide-react';
import App from './App';
import AdminUploadApp from './AdminUpload';

// Theme Context
const ThemeContext = React.createContext();

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  
  const toggleTheme = () => setIsDark(!isDark);
  
  const theme = {
    isDark,
    toggleTheme,
    colors: isDark ? {
      bg: 'bg-neutral-900',
      bgSecondary: 'bg-neutral-800',
      bgTertiary: 'bg-neutral-700',
      bgHover: 'bg-neutral-700',
      border: 'border-neutral-600',
      text: 'text-neutral-200',
      textSecondary: 'text-neutral-300',
      textMuted: 'text-neutral-400',
      button: 'bg-neutral-800 hover:bg-neutral-700',
      accent: 'text-blue-400',
      accentBg: 'bg-blue-600 hover:bg-blue-700',
      accentSecondary: 'text-orange-400',
      accentSecondaryBg: 'bg-orange-600 hover:bg-orange-700',
      cardHover: 'hover:bg-neutral-750',
      textPrimary: 'text-neutral-100',
    } : {
      bg: 'bg-gray-50',
      bgSecondary: 'bg-white',
      bgTertiary: 'bg-gray-100',
      bgHover: 'bg-gray-100',
      border: 'border-gray-300',
      text: 'text-gray-900',
      textSecondary: 'text-gray-700',
      textMuted: 'text-gray-500',
      button: 'bg-gray-100 hover:bg-gray-200',
      accent: 'text-blue-600',
      accentBg: 'bg-blue-600 hover:bg-blue-700',
      accentSecondary: 'text-orange-600',
      accentSecondaryBg: 'bg-orange-600 hover:bg-orange-700',
      cardHover: 'hover:bg-gray-50',
      textPrimary: 'text-gray-900',
    }
  };
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Theme Toggle Component
const ThemeToggle = () => {
  const { isDark, toggleTheme, colors } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-colors ${colors.bgTertiary} hover:${colors.bgHover}`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-blue-600" />}
    </button>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: IconComponent, title, description, features, buttonText, onClick, isPrimary = false }) => {
  const { colors } = useTheme();
  
  return (
    <div className={`${colors.bgSecondary} border ${colors.border} rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:${colors.bgHover} hover:shadow-xl`}>
      <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
        {/* Icon */}
        <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${isPrimary ? 'bg-blue-600' : 'bg-orange-600'}`}>
          <IconComponent size={28} className="text-white" />
        </div>
        
        {/* Title */}
        <h2 className={`text-xl sm:text-2xl font-bold ${colors.textPrimary}`}>
          {title}
        </h2>
        
        {/* Description */}
        <p className={`${colors.textSecondary} leading-relaxed text-sm sm:text-base`}>
          {description}
        </p>
        
        {/* Features List */}
        <div className="space-y-2 sm:space-y-3 w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`w-2 h-2 rounded-full ${isPrimary ? 'bg-blue-500' : 'bg-orange-500'} mt-1.5 sm:mt-2 flex-shrink-0`}></div>
              <span className={`text-xs sm:text-sm ${colors.textMuted} text-left`}>{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Action Button */}
        <button
          onClick={onClick}
          className={`
            w-full flex items-center justify-center gap-3 py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-white transition-all duration-200 active:scale-95
            ${isPrimary ? colors.accentBg : colors.accentSecondaryBg}
            hover:scale-105 hover:shadow-lg
          `}
        >
          {buttonText}
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

// Stats Component
const StatCard = ({ icon: IconComponent, number, label }) => {
  const { colors } = useTheme();
  
  return (
    <div className={`${colors.bgSecondary} border ${colors.border} rounded-xl p-4 sm:p-6 text-center transition-colors hover:${colors.bgHover}`}>
      <div className="flex flex-col items-center space-y-2 sm:space-y-3">
        <IconComponent size={20} className={colors.accent} />
        <div className={`text-xl sm:text-2xl font-bold ${colors.textPrimary}`}>{number}</div>
        <div className={`text-xs sm:text-sm ${colors.textMuted}`}>{label}</div>
      </div>
    </div>
  );
};

// Main Landing Page
const LandingPage = ({ onNavigate }) => {
  const { colors } = useTheme();
  
  const chatFeatures = [
    "Interactive AI-powered conversations",
    "Academic policy and procedure queries", 
    "Real-time responses with source citations",
    "Multi-department knowledge base",
    "Voice input capabilities",
    "Chat history and bookmarks"
  ];
  
  const adminFeatures = [
    "Secure PDF document upload",
    "Drag & drop file interface",
    "Automatic text processing & chunking",
    "Real-time upload progress",
    "Knowledge base management",
    "Document validation & error handling"
  ];
  
  return (
    <div className={`min-h-screen ${colors.bg} transition-colors duration-300`}>
      {/* Header */}
      <header className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-orange-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-32 w-24 h-24 bg-purple-500 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="flex justify-between items-center p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <GraduationCap size={22} className="text-white" />
              </div>
              <div>
                <h1 className={`text-lg sm:text-xl font-bold ${colors.textPrimary}`}>
                  College Assistant
                </h1>
                <p className={`text-xs ${colors.textMuted}`}>
                  AI-Powered Academic Support
                </p>
              </div>
            </div>
            <ThemeToggle />
          </nav>
          
          {/* Hero Section */}
          <div className="text-center py-12 sm:py-20 px-4 sm:px-6">
            <h1 className={`text-3xl sm:text-5xl md:text-6xl font-bold ${colors.textPrimary} mb-4 sm:mb-6`}>
              Welcome to
              <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent block mt-2">
                College Assistant
              </span>
            </h1>
            <p className={`text-base sm:text-xl ${colors.textSecondary} max-w-2xl mx-auto leading-relaxed px-4`}>
              Your intelligent companion for academic policies, procedures, and administrative tasks. 
              Choose your portal below to get started.
            </p>
          </div>
        </div>
      </header>
      
      {/* Stats Section */}
      <div className="px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <StatCard icon={MessageSquare} number="24/7" label="AI Support" />
            <StatCard icon={BookOpen} number="8+" label="Departments" />
            <StatCard icon={Database} number="1000+" label="Documents" />
          </div>
        </div>
      </div>
      
      {/* Main Content Cards */}
      <div className="px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Student Chat Portal */}
            <FeatureCard
              icon={MessageSquare}
              title="Student Chat Portal"
              description="Get instant answers to your academic questions through our intelligent AI assistant. Access policies, procedures, and get personalized guidance for your educational journey."
              features={chatFeatures}
              buttonText="Start Chatting"
              onClick={() => onNavigate('chat')}
              isPrimary={true}
            />
            
            {/* Admin Dashboard */}
            <FeatureCard
              icon={Shield}
              title="Admin Dashboard"
              description="Manage and upload institutional documents to enhance the knowledge base. Secure administrative portal for content management and system administration."
              features={adminFeatures}
              buttonText="Admin Access"
              onClick={() => onNavigate('admin')}
              isPrimary={false}
            />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className={`border-t ${colors.border} py-6 sm:py-8`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className={`${colors.textMuted} text-xs sm:text-sm`}>
            College Assistant - Powered by AI • Built for Academic Excellence
          </p>
          <p className={`${colors.textMuted} text-xs mt-2`}>
            Always verify important information with official college resources
          </p>
        </div>
      </footer>
    </div>
  );
};

// Main App Router
const MainApp = () => {
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

// App with Theme Provider
const AppWithRouter = () => (
  <ThemeProvider>
    <MainApp />
  </ThemeProvider>
);

export default AppWithRouter;
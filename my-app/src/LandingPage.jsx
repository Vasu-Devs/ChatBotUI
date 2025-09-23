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
      bg: 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900',
      bgSecondary: 'bg-gradient-to-r from-violet-800/80 to-purple-800/80 backdrop-blur-lg',
      bgTertiary: 'bg-gradient-to-r from-cyan-800/60 to-blue-800/60 backdrop-blur-md',
      bgHover: 'hover:bg-gradient-to-r hover:from-pink-700/70 hover:to-red-700/70',
      border: 'border-cyan-400/50 shadow-lg shadow-cyan-400/20',
      text: 'text-white',
      textSecondary: 'text-cyan-100',
      textMuted: 'text-purple-200',
      button: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/30',
      accent: 'text-yellow-300',
      accentBg: 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 shadow-xl shadow-pink-500/40',
      accentSecondary: 'text-orange-300',
      accentSecondaryBg: 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 shadow-xl shadow-orange-500/40',
      cardHover: 'hover:bg-gradient-to-r hover:from-indigo-700/80 hover:to-purple-700/80 hover:shadow-2xl hover:shadow-purple-500/30',
      textPrimary: 'text-white',
    } : {
      bg: 'bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100',
      bgSecondary: 'bg-gradient-to-r from-white/90 to-purple-50/90 backdrop-blur-lg shadow-xl shadow-purple-200/50',
      bgTertiary: 'bg-gradient-to-r from-cyan-50/80 to-blue-50/80 backdrop-blur-md',
      bgHover: 'hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100',
      border: 'border-pink-300/60 shadow-lg shadow-pink-300/20',
      text: 'text-gray-800',
      textSecondary: 'text-purple-700',
      textMuted: 'text-indigo-600',
      button: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/30',
      accent: 'text-purple-600',
      accentBg: 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 shadow-xl shadow-pink-500/40',
      accentSecondary: 'text-orange-600',
      accentSecondaryBg: 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 shadow-xl shadow-orange-500/40',
      cardHover: 'hover:bg-gradient-to-r hover:from-purple-100/80 hover:to-pink-100/80 hover:shadow-2xl hover:shadow-purple-300/40',
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
      className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${colors.bgTertiary} hover:${colors.bgHover} shadow-lg hover:shadow-xl`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-400 animate-pulse" />
      ) : (
        <Moon size={20} className="text-indigo-600 animate-bounce" />
      )}
    </button>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, features, buttonText, onClick, isPrimary = false }) => {
  const { colors } = useTheme();
  
  return (
    <div className={`${colors.bgSecondary} border-2 ${colors.border} rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 ${colors.cardHover} hover:rotate-1`}>
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Colorful Icon with Animation */}
        <div className={`relative p-6 rounded-3xl transition-all duration-300 transform hover:rotate-12 hover:scale-110 ${
          isPrimary 
            ? 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 shadow-xl shadow-pink-500/50' 
            : 'bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 shadow-xl shadow-blue-500/50'
        }`}>
          <Icon size={32} className="text-white animate-pulse" />
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-white/20 animate-ping opacity-20"></div>
        </div>
        
        {/* Colorful Title */}
        <h2 className={`text-2xl font-bold bg-gradient-to-r ${
          isPrimary 
            ? 'from-pink-600 to-purple-600' 
            : 'from-cyan-600 to-blue-600'
        } bg-clip-text text-transparent animate-pulse`}>
          {title}
        </h2>
        
        {/* Enhanced Description */}
        <p className={`${colors.textSecondary} leading-relaxed text-base font-medium`}>
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
const StatCard = ({ icon: Icon, number, label, colorIndex }) => {
  const { colors } = useTheme();
  const colorVariants = [
    'bg-gradient-to-br from-pink-500 to-rose-500 shadow-pink-500/30',
    'bg-gradient-to-br from-cyan-500 to-blue-500 shadow-cyan-500/30',
    'bg-gradient-to-br from-emerald-500 to-teal-500 shadow-emerald-500/30',
    'bg-gradient-to-br from-purple-500 to-indigo-500 shadow-purple-500/30',
    'bg-gradient-to-br from-orange-500 to-red-500 shadow-orange-500/30'
  ];
  
  return (
    <div className={`${colors.bgSecondary} border-2 ${colors.border} rounded-2xl p-6 text-center transition-all duration-500 transform hover:scale-110 ${colors.cardHover} hover:rotate-3`}>
      <div className="flex flex-col items-center space-y-4">
        <div className={`p-4 rounded-full ${colorVariants[colorIndex % colorVariants.length]} shadow-xl animate-bounce`}>
          <Icon size={24} className="text-white" />
        </div>
        <div className={`text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse`}>{number}</div>
        <div className={`text-sm font-semibold ${colors.textMuted} uppercase tracking-wide`}>{label}</div>
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
    <div className={`min-h-screen ${colors.bg} transition-all duration-500 relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-cyan-500/40 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 bg-purple-500/25 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-28 h-28 bg-yellow-500/35 rounded-full blur-xl animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-emerald-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-20 left-1/3 w-20 h-20 bg-red-500/40 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-10 left-1/4 w-44 h-44 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      {/* Header */}
      <header className="relative z-10 overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.1),transparent_50%)] animate-ping"></div>
        </div>
        
        <div className="relative z-10">
          {/* Colorful Navigation */}
          <nav className="flex justify-between items-center p-6">
            <div className="flex items-center gap-4">
              <div className="relative p-3 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-2xl shadow-xl shadow-purple-500/50 animate-pulse">
                <GraduationCap size={28} className="text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping"></div>
              </div>
              <div>
                <h1 className={`text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse`}>
                  College Assistant
                </h1>
                <p className={`text-sm font-semibold ${colors.textMuted} animate-bounce`}>
                  🎓 AI-Powered Academic Support 🚀
                </p>
              </div>
            </div>
            <ThemeToggle />
          </nav>
          
          {/* Colorful Hero Section */}
          <div className="text-center py-20 px-6 relative">
            {/* Extra colorful background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5 animate-pulse"></div>
            
            <div className="relative z-10">
              <h1 className={`text-6xl font-bold mb-8 leading-tight`}>
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                  🌟 Welcome to 🌟
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-bounce">
                  College Assistant
                </span>
                <br />
                <span className="text-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                  ✨ AI-Powered Magic ✨
                </span>
              </h1>
              <div className="relative">
                <p className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto leading-relaxed font-medium`}>
                  🚀 Your intelligent companion for academic policies, procedures, and administrative tasks. 
                  <br />
                  🎯 Choose your colorful portal below to get started on an amazing journey! 🌈
                </p>
                {/* Floating emojis */}
                <div className="absolute -top-4 -left-4 text-4xl animate-bounce">🎓</div>
                <div className="absolute -top-2 -right-8 text-3xl animate-pulse">📚</div>
                <div className="absolute -bottom-4 left-8 text-3xl animate-spin">⭐</div>
                <div className="absolute -bottom-2 -right-4 text-4xl animate-bounce">🌟</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Colorful Stats Section */}
      <div className="px-6 mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-green-500/10 to-blue-500/10 animate-pulse rounded-3xl"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            🎉 Amazing Stats 🎉
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <StatCard icon={MessageSquare} number="24/7" label="🤖 AI Support" colorIndex={0} />
            <StatCard icon={BookOpen} number="8+" label="🏛️ Departments" colorIndex={1} />
            <StatCard icon={Database} number="1000+" label="📄 Documents" colorIndex={2} />
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
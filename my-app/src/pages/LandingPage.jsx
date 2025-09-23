import React from 'react';
import { 
  MessageSquare, 
  Shield, 
  GraduationCap, 
  Users,
  Database,
  BookOpen
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme.js';
import ThemeToggle from '../components/ThemeToggle';
import FeatureCard from '../components/FeatureCard';

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

// Main Landing Page Component
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

export default LandingPage;
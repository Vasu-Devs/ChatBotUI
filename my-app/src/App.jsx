import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  Search, 
  History, 
  ChevronDown, 
  Menu, 
  X, 
  Send, 
  Mic,
  Plus,
  BookOpen,
  User,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';

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
      // Dark mode - ChatGPT style grays
      bg: 'bg-zinc-900',
      bgSecondary: 'bg-zinc-950',
      bgTertiary: 'bg-zinc-800',
      bgHover: 'bg-zinc-700',
      bgInput: 'bg-zinc-800',
      border: 'border-zinc-700',
      text: 'text-white',
      textSecondary: 'text-zinc-400',
      textMuted: 'text-zinc-500',
      userBubble: 'bg-zinc-600',
      botBubble: 'bg-zinc-800',
      button: 'bg-zinc-800 hover:bg-zinc-700',
      buttonPrimary: 'bg-emerald-600 hover:bg-emerald-700',
      accent: 'bg-emerald-600'
    } : {
      // Light mode
      bg: 'bg-white',
      bgSecondary: 'bg-gray-50',
      bgTertiary: 'bg-gray-100',
      bgHover: 'bg-gray-200',
      bgInput: 'bg-white',
      border: 'border-gray-200',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textMuted: 'text-gray-500',
      userBubble: 'bg-blue-500',
      botBubble: 'bg-gray-100',
      button: 'bg-white hover:bg-gray-50 border border-gray-200',
      buttonPrimary: 'bg-blue-500 hover:bg-blue-600',
      accent: 'bg-blue-500'
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
      className={`p-2 rounded-lg transition-colors ${colors.button}`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

// Sidebar Components
const SidebarButton = ({ icon: Icon, children, onClick, className = "" }) => {
  const { colors } = useTheme();
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${colors.bgHover} ${className}`}
    >
      <Icon size={18} />
      <span className="text-sm">{children}</span>
    </button>
  );
};

const ChatHistoryItem = ({ chat, onClick }) => {
  const { colors } = useTheme();
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-lg hover:${colors.bgHover} transition-colors text-sm ${colors.textSecondary} truncate`}
    >
      {chat}
    </button>
  );
};

const UserSection = ({ userName, userType, onSettingsClick }) => {
  const { colors } = useTheme();
  return (
    <div className={`p-3 border-t ${colors.border}`}>
      <div className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:${colors.bgHover} transition-colors cursor-pointer`}>
        <div className={`w-8 h-8 ${colors.accent} rounded-full flex items-center justify-center`}>
          <User size={16} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{userName}</p>
          <p className={`text-xs ${colors.textMuted}`}>{userType}</p>
        </div>
        <button 
          onClick={onSettingsClick}
          className={`px-3 py-1 rounded-md text-xs transition-colors ${colors.button}`}
        >
          Settings
        </button>
      </div>
    </div>
  );
};

const Sidebar = ({ 
  isCollapsed, 
  chatHistory, 
  onNewChat, 
  onSearchChats, 
  onPolicyLibrary, 
  onHistory,
  onChatSelect,
  onSettingsClick 
}) => {
  const { colors } = useTheme();
  
  return (
    <div className={`${isCollapsed ? 'w-0' : 'w-64'} transition-all duration-300 ${colors.bgSecondary} border-r ${colors.border} flex flex-col`}>
      <div className={`${isCollapsed ? 'hidden' : 'block'} flex-1 flex flex-col`}>
        {/* Sidebar Header */}
        <div className={`p-3 border-b ${colors.border}`}>
          <SidebarButton icon={Plus} onClick={onNewChat} className="font-medium">
            New chat
          </SidebarButton>
        </div>

        {/* Sidebar Menu */}
        <div className="flex-1 px-3 py-4 space-y-2">
          <SidebarButton icon={Search} onClick={onSearchChats}>
            Search chats
          </SidebarButton>
          
          <SidebarButton icon={BookOpen} onClick={onPolicyLibrary}>
            Policy Library
          </SidebarButton>

          <SidebarButton icon={History} onClick={onHistory}>
            History
          </SidebarButton>
        </div>

        {/* Chat History */}
        <div className="flex-1 px-3 space-y-1 overflow-y-auto">
          <h3 className={`text-xs font-medium ${colors.textMuted} uppercase tracking-wide mb-2`}>
            Recent Chats
          </h3>
          {chatHistory.map((chat, index) => (
            <ChatHistoryItem
              key={index}
              chat={chat}
              onClick={() => onChatSelect(chat)}
            />
          ))}
        </div>

        {/* User Section */}
        <UserSection
          userName="Student Portal"
          userType="Free Access"
          onSettingsClick={onSettingsClick}
        />
      </div>
    </div>
  );
};

// Header Components
const SchoolSelector = ({ selectedSchool, schools, isOpen, onToggle, onSelect }) => {
  const { colors } = useTheme();
  
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${colors.button}`}
      >
        <BookOpen size={18} />
        <span className="text-sm font-medium">{selectedSchool}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className={`absolute top-full left-0 mt-1 w-72 ${colors.bgTertiary} border ${colors.border} rounded-lg shadow-xl z-50`}>
          <div className="p-2">
            {schools.map((school) => (
              <button
                key={school}
                onClick={() => onSelect(school)}
                className={`w-full text-left px-3 py-2 rounded-md hover:${colors.bgHover} transition-colors text-sm`}
              >
                {school}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = ({ 
  sidebarCollapsed, 
  onToggleSidebar, 
  selectedSchool, 
  schools, 
  schoolDropdownOpen, 
  onToggleSchoolDropdown, 
  onSelectSchool 
}) => {
  const { colors } = useTheme();
  
  return (
    <div className={`h-14 border-b ${colors.border} flex items-center px-4 justify-between`}>
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className={`p-2 rounded-lg transition-colors hover:${colors.bgHover}`}
        >
          {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
        
        <SchoolSelector
          selectedSchool={selectedSchool}
          schools={schools}
          isOpen={schoolDropdownOpen}
          onToggle={onToggleSchoolDropdown}
          onSelect={onSelectSchool}
        />
      </div>

      <div className="flex items-center gap-3">
        <div className={`text-sm ${colors.textSecondary}`}>
          College Assistant
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

// Chat Components
const MessageBubble = ({ message, isUser }) => {
  const { colors } = useTheme();
  
  return (
    <div className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className={`w-8 h-8 ${colors.accent} rounded-full flex items-center justify-center flex-shrink-0`}>
          <BookOpen size={16} className="text-white" />
        </div>
      )}
      <div className={`max-w-3xl ${isUser ? colors.userBubble : colors.botBubble} rounded-2xl px-4 py-3`}>
        <p className={`text-sm whitespace-pre-wrap ${isUser ? 'text-white' : ''}`}>{message.text}</p>
        <p className={`text-xs ${isUser ? 'text-zinc-200' : colors.textMuted} mt-1`}>{message.timestamp}</p>
      </div>
      {isUser && (
        <div className={`w-8 h-8 ${colors.userBubble} rounded-full flex items-center justify-center flex-shrink-0`}>
          <User size={16} className="text-white" />
        </div>
      )}
    </div>
  );
};

const TypingIndicator = () => {
  const { colors } = useTheme();
  
  return (
    <div className="flex gap-4 justify-start">
      <div className={`w-8 h-8 ${colors.accent} rounded-full flex items-center justify-center flex-shrink-0`}>
        <BookOpen size={16} className="text-white" />
      </div>
      <div className={`${colors.botBubble} rounded-2xl px-4 py-3`}>
        <div className="flex gap-1">
          <div className={`w-2 h-2 ${colors.textMuted.replace('text-', 'bg-')} rounded-full animate-bounce`}></div>
          <div className={`w-2 h-2 ${colors.textMuted.replace('text-', 'bg-')} rounded-full animate-bounce`} style={{animationDelay: '0.1s'}}></div>
          <div className={`w-2 h-2 ${colors.textMuted.replace('text-', 'bg-')} rounded-full animate-bounce`} style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
};

const SuggestionCard = ({ suggestion, onClick }) => {
  const { colors } = useTheme();
  
  return (
    <button
      onClick={() => onClick(suggestion)}
      className={`p-3 rounded-lg text-sm text-left transition-colors ${colors.button}`}
    >
      {suggestion}
    </button>
  );
};

const WelcomeScreen = ({ selectedSchool, onSuggestionClick }) => {
  const { colors } = useTheme();
  const suggestions = [
    'What are the graduation requirements?',
    'How do I register for courses?',
    'What\'s the academic calendar?',
    'Financial aid application process'
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <BookOpen size={48} className={`mx-auto mb-6 ${colors.textMuted}`} />
        <h2 className={`text-3xl font-semibold mb-4 ${colors.text}`}>How can I help with college policies?</h2>
        <p className={`${colors.textSecondary} mb-8`}>
          Ask me about academic policies, procedures, requirements, or any college-related questions for {selectedSchool}.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {suggestions.map((suggestion, index) => (
            <SuggestionCard
              key={index}
              suggestion={suggestion}
              onClick={onSuggestionClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ChatArea = ({ messages, isTyping, selectedSchool, onSuggestionClick }) => (
  <div className="flex-1 overflow-y-auto">
    {messages.length === 0 ? (
      <WelcomeScreen 
        selectedSchool={selectedSchool} 
        onSuggestionClick={onSuggestionClick}
      />
    ) : (
      <div className="px-4 py-6 space-y-6">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg}
            isUser={msg.sender === 'user'}
          />
        ))}
        
        {isTyping && <TypingIndicator />}
      </div>
    )}
  </div>
);

// Input Components
const MessageInput = ({ 
  message, 
  onChange, 
  onKeyPress, 
  onSend, 
  textareaRef,
  disabled = false 
}) => {
  const { colors } = useTheme();
  
  return (
    <div className={`border-t ${colors.border} p-4`}>
      <div className="max-w-3xl mx-auto">
        <div className={`flex items-end gap-3 ${colors.bgInput} ${colors.border} border rounded-2xl px-4 py-2`}>
          <textarea
            ref={textareaRef}
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}
            placeholder="Ask about college policies..."
            className={`flex-1 bg-transparent resize-none outline-none ${colors.text} placeholder:${colors.textMuted} max-h-32`}
            rows={1}
            disabled={disabled}
          />
          <div className="flex gap-2 pb-1">
            <button className={`p-2 rounded-lg transition-colors hover:${colors.bgHover}`}>
              <Mic size={18} className={colors.textMuted.replace('text-', 'text-')} />
            </button>
            <button
              onClick={onSend}
              disabled={!message.trim() || disabled}
              className={`p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${colors.buttonPrimary}`}
            >
              <Send size={18} className="text-white" />
            </button>
          </div>
        </div>
        <p className={`text-xs ${colors.textMuted} text-center mt-2`}>
          College Assistant can make mistakes. Verify important information with official college resources.
        </p>
      </div>
    </div>
  );
};

// Main Component
const CollegeChatGPT = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState('Computer Science Department');
  const [schoolDropdownOpen, setSchoolDropdownOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const textareaRef = useRef(null);

  const schools = [
    'Computer Science Department',
    'Business School',
    'Engineering College',
    'Arts & Sciences',
    'Medical School',
    'Law School',
    'Education Department',
    'Psychology Department'
  ];

  const chatHistory = [
    'Academic calendar policies',
    'Graduation requirements query',
    'Course registration help',
    'Financial aid guidelines',
    'Student conduct policies',
    'Library access rules',
    'Dormitory policies',
    'Internship requirements'
  ];

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    const userMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);
    
    // TODO: Replace with actual FastAPI call
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: `I understand you're asking about "${message}" regarding ${selectedSchool}. I'll help you find the relevant college policies and information. This would typically connect to your FastAPI backend to fetch the appropriate response based on the selected department.`,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSelectSchool = (school) => {
    setSelectedSchool(school);
    setSchoolDropdownOpen(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setMessage(suggestion);
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [message]);

  // Sidebar handlers
  const sidebarHandlers = {
    onNewChat: () => {
      setMessages([]);
      setMessage('');
    },
    onSearchChats: () => console.log('Search chats'),
    onPolicyLibrary: () => console.log('Policy library'),
    onHistory: () => console.log('History'),
    onChatSelect: (chat) => console.log('Selected chat:', chat),
    onSettingsClick: () => console.log('Settings clicked')
  };

  const { colors } = useTheme();

  return (
    <div className={`flex h-screen ${colors.bg} ${colors.text}`}>
      <Sidebar
        isCollapsed={sidebarCollapsed}
        chatHistory={chatHistory}
        {...sidebarHandlers}
      />

      <div className="flex-1 flex flex-col">
        <Header
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          selectedSchool={selectedSchool}
          schools={schools}
          schoolDropdownOpen={schoolDropdownOpen}
          onToggleSchoolDropdown={() => setSchoolDropdownOpen(!schoolDropdownOpen)}
          onSelectSchool={handleSelectSchool}
        />

        <ChatArea
          messages={messages}
          isTyping={isTyping}
          selectedSchool={selectedSchool}
          onSuggestionClick={handleSuggestionClick}
        />

        <MessageInput
          message={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          onSend={handleSendMessage}
          textareaRef={textareaRef}
          disabled={isTyping}
        />
      </div>
    </div>
  );
};

// Main App with Theme Provider
const App = () => (
  <ThemeProvider>
    <CollegeChatGPT />
  </ThemeProvider>
);

export default App;
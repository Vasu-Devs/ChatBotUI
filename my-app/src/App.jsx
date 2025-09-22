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
  Moon,
  Waves,
  Radio,
  GraduationCap,
  PanelLeftClose,
  Copy,
  Check
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
      // Dark mode - Lighter main background, darker sidebar with blended buttons
      bg: 'bg-neutral-800',
      bgSecondary: 'bg-neutral-900',
      bgTertiary: 'bg-neutral-700',
      bgHover: 'bg-neutral-700',
      bgInput: 'bg-neutral-800',
      border: 'border-neutral-600',
      text: 'text-neutral-200',
      textSecondary: 'text-neutral-300',
      textMuted: 'text-neutral-400',
      userBubble: 'bg-neutral-700',
      userBubbleText: 'text-white',
      userBubbleTextMuted: 'text-neutral-200',
      botBubble: 'bg-neutral-700',
      botIcon: 'bg-neutral-700',
      botIconText: 'text-white',
      button: 'bg-neutral-800 hover:bg-neutral-700',
      buttonPrimary: 'bg-neutral-700 hover:bg-neutral-600',
      suggestionCard: 'bg-neutral-700 hover:bg-neutral-600',
      accent: 'bg-neutral-700'
    } : {
      // Light mode - Clean neutral theme, no colors
      bg: 'bg-white',
      bgSecondary: 'bg-neutral-100',
      bgTertiary: 'bg-neutral-50',
      bgHover: 'bg-neutral-100',
      bgInput: 'bg-white',
      border: 'border-neutral-200',
      text: 'text-neutral-700',
      textSecondary: 'text-neutral-600',
      textMuted: 'text-neutral-500',
      userBubble: 'bg-neutral-200',
      userBubbleText: 'text-neutral-800',
      userBubbleTextMuted: 'text-neutral-600',
      botBubble: 'bg-neutral-100',
      botIcon: 'bg-neutral-300',
      botIconText: 'text-neutral-600',
      button: 'bg-neutral-50 hover:bg-neutral-100',
      buttonPrimary: 'bg-neutral-600 hover:bg-neutral-700',
      suggestionCard: 'bg-neutral-50 hover:bg-neutral-100',
      accent: 'bg-neutral-600'
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
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

// Sidebar Components
const SidebarButton = ({ icon: Icon, children, onClick, className = "", isCollapsed = false }) => {
  const { colors, isDark } = useTheme();
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center ${isCollapsed ? 'justify-center px-3 py-3 rounded-2xl' : 'gap-4 px-4 py-3 rounded-2xl'} transition-all duration-300 ${isDark && !isCollapsed ? 'bg-neutral-800' : ''} hover:${colors.bgHover} hover:scale-105 ${colors.textSecondary} ${className}`}
      title={isCollapsed ? children : undefined}
    >
      <Icon size={18} />
      {!isCollapsed && <span className="text-sm font-medium">{children}</span>}
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

const UserSection = ({ userName, userType, onSettingsClick, isCollapsed = false }) => {
  const { colors } = useTheme();
  return (
    <div className={`p-4`}>
      <div className={`flex items-center ${isCollapsed ? 'justify-center px-0 py-2' : 'gap-4 px-4 py-3 rounded-2xl hover:scale-105'} transition-all duration-300 cursor-pointer ${isCollapsed ? '' : `hover:${colors.bgHover}`}`}>
        <div className={`${isCollapsed ? 'w-9 h-9' : 'w-9 h-9'} ${colors.accent} rounded-full flex items-center justify-center`} style={{borderRadius: '50%'}}>
          <User size={isCollapsed ? 18 : 18} className="text-white" />
        </div>
        {!isCollapsed && (
          <>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">{userName}</p>
              <p className={`text-xs ${colors.textMuted}`}>{userType}</p>
            </div>
            <button 
              onClick={onSettingsClick}
              className={`p-2 rounded-xl transition-all duration-300 hover:scale-105 ${colors.button}`}
            >
              <Settings size={18} />
            </button>
          </>
        )}
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
  onSettingsClick,
  onToggleSidebar,
  sidebarCollapsed
}) => {
  const { colors, isDark } = useTheme();
  
  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 ${colors.bgSecondary} flex flex-col group`}>
      {/* College Logo and Collapse Button */}
      <div className="p-3">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          <div className="relative">
            <button
              onClick={onToggleSidebar}
              className={`${isCollapsed ? `p-3 rounded-2xl ${colors.bg}` : 'p-2.5 rounded-xl'} transition-all duration-300 ${isCollapsed ? '' : colors.bgTertiary} flex items-center justify-center hover:${colors.bgHover}`}
            >
              <GraduationCap size={20} className={colors.textSecondary} />
            </button>
            
            {/* Hover collapse icon for collapsed state */}
            {isCollapsed && (
              <button
                onClick={onToggleSidebar}
                className={`absolute inset-0 p-3 rounded-2xl ${colors.bg} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:${colors.bgHover}`}
              >
                <PanelLeftClose size={16} className={colors.textSecondary} />
              </button>
            )}
          </div>
          
          {!isCollapsed && (
            <button
              onClick={onToggleSidebar}
              className={`p-2.5 rounded-xl transition-colors hover:${colors.bgHover}`}
            >
              <PanelLeftClose size={18} className={colors.textSecondary} />
            </button>
          )}
        </div>
        
        {/* Line below - always show but style differently */}
        <div className={`mt-4 ${isCollapsed ? `border-b ${colors.border} opacity-50` : `border-b ${colors.border} opacity-30`}`}></div>
      </div>

      {/* Sidebar Menu */}
      <div className={`flex-1 ${isCollapsed ? 'px-3' : 'px-4'} py-2 space-y-3`}>
        <SidebarButton 
          icon={Plus} 
          onClick={onNewChat} 
          className="font-medium"
          isCollapsed={isCollapsed}
        >
          {!isCollapsed && "New chat"}
        </SidebarButton>
        
        <SidebarButton 
          icon={Search} 
          onClick={onSearchChats}
          isCollapsed={isCollapsed}
        >
          {!isCollapsed && "Search chats"}
        </SidebarButton>
        
        <SidebarButton 
          icon={BookOpen} 
          onClick={onPolicyLibrary}
          isCollapsed={isCollapsed}
        >
          {!isCollapsed && "Policy Library"}
        </SidebarButton>

        <SidebarButton 
          icon={History} 
          onClick={onHistory}
          isCollapsed={isCollapsed}
        >
          {!isCollapsed && "History"}
        </SidebarButton>
      </div>

      {/* Chat History - Only show when expanded */}
      {!isCollapsed && (
        <div className={`flex-1 px-3 space-y-1 overflow-y-auto scrollbar-custom ${isDark ? 'scrollbar-dark' : 'scrollbar-light'}`}>
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
      )}

      {/* Line above user section */}
      <div className={`mt-4 mx-3 ${isCollapsed ? `border-t ${colors.border} opacity-50` : `border-t ${colors.border} opacity-30`}`}></div>

      {/* User Section */}
      <UserSection
        userName="Student Portal"
        userType="Free Access"
        onSettingsClick={onSettingsClick}
        isCollapsed={isCollapsed}
      />
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
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${colors.bgTertiary} hover:${colors.bgHover}`}
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
  selectedSchool, 
  schools, 
  schoolDropdownOpen, 
  onToggleSchoolDropdown, 
  onSelectSchool
}) => {
  const { colors } = useTheme();
  
  return (
    <div className="p-3">
      <div className="flex items-center justify-between min-h-[40px]">
        <div className="flex items-center gap-4 ml-3">
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
      
      {/* Line below - matches sidebar line styling exactly */}
      <div className={`mt-4 border-b ${colors.border} opacity-30`}></div>
    </div>
  );
};

// Chat Components
const MessageBubble = ({ message, isUser }) => {
  const { colors } = useTheme();
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.text);
      setIsCopied(true);
      // Reset after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  return (
    <div className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className={`w-8 h-8 ${colors.botIcon} rounded-full flex items-center justify-center flex-shrink-0`}>
          <BookOpen size={16} className={colors.botIconText} />
        </div>
      )}
      <div className="flex flex-col max-w-2xl">
        <div className={`${isUser ? colors.userBubble : colors.botBubble} rounded-2xl px-4 py-3`}>
          <p className={`text-sm whitespace-pre-wrap ${isUser ? colors.userBubbleText : colors.text}`}>{message.text}</p>
        </div>
        {!isUser && (
          <button
            onClick={handleCopy}
            className={`self-end mt-2 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all duration-200 hover:brightness-125 ${isCopied ? 'text-green-500' : colors.textMuted}`}
          >
            {isCopied ? <Check size={12} /> : <Copy size={12} />}
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        )}
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
      <div className={`w-8 h-8 ${colors.botIcon} rounded-full flex items-center justify-center flex-shrink-0`}>
        <BookOpen size={16} className={colors.botIconText} />
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
      className={`p-3 rounded-lg text-sm text-left transition-colors ${colors.suggestionCard}`}
    >
      {suggestion}
    </button>
  );
};

const WelcomeScreen = ({ selectedSchool, onSuggestionClick }) => {
  const { colors } = useTheme();
  const suggestions = [];

  return (
    <div className="h-full flex flex-col px-4 pt-16">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center max-w-md mb-8">
          <BookOpen size={48} className={`mx-auto mb-6 ${colors.textMuted}`} />
          <h2 className={`text-3xl font-semibold mb-4 ${colors.text}`}>How can I help you?</h2>
          <p className={`${colors.textSecondary} mb-8`}>
            Ask me about academic policies, procedures, requirements, or any college-related questions for {selectedSchool}.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
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
      
      {/* Reduced space to bring input closer */}
      <div className="h-4"></div>
    </div>
  );
};

const ChatArea = ({ messages, isTyping, selectedSchool, onSuggestionClick }) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`flex-1 overflow-y-auto scrollbar-custom ${isDark ? 'scrollbar-dark' : 'scrollbar-light'}`}>
      {messages.length === 0 ? (
      <WelcomeScreen 
        selectedSchool={selectedSchool} 
        onSuggestionClick={onSuggestionClick}
      />
    ) : (
      <div className="px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              message={msg}
              isUser={msg.sender === 'user'}
            />
          ))}
          
          {isTyping && <TypingIndicator />}
        </div>
      </div>
    )}
    </div>
  );
};

// Input Components

// Input Components
const MessageInput = ({ 
  message, 
  onChange, 
  onKeyPress, 
  onSend, 
  textareaRef,
  disabled = false,
  onVoiceMode,
  onSimpleVoiceMode,
  isWelcomeScreen = false
}) => {
  const { colors, isDark } = useTheme();
  const [hasExpanded, setHasExpanded] = useState(false);

  const handleFirstInteraction = () => {
    if (!hasExpanded && isWelcomeScreen) {
      setHasExpanded(true);
    }
  };

  return (
    <div className={`transition-all duration-500 ${
      isWelcomeScreen && !hasExpanded 
        ? 'p-4 pb-32' 
        : 'p-4'
    }`}
    style={{
      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    }}>
      <div className={`mx-auto transition-all duration-500 ${
        isWelcomeScreen && !hasExpanded 
          ? 'max-w-md' 
          : 'max-w-3xl'
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}>
        <div
          className={`flex items-center gap-3 ${colors.bgInput} ${colors.border} border rounded-3xl px-4 py-2 transition-all duration-500`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => {
              onChange(e);
              handleFirstInteraction();
            }}
            onKeyPress={onKeyPress}
            onFocus={handleFirstInteraction}
            onClick={handleFirstInteraction}
            placeholder="Ask about college policies..."
            className={`
              flex-1 
              bg-transparent 
              resize-none 
              outline-none 
              ${colors.text} 
              placeholder:${colors.textMuted} 
              max-h-32 
              py-2 
              overflow-y-auto 
              scrollbar-custom ${isDark ? 'scrollbar-dark' : 'scrollbar-light'}
            `}
            rows={1}
            disabled={disabled}
          />

          <div className="flex gap-2">
            <button
              className={`p-2 rounded-lg transition-colors hover:${colors.bgHover}`}
              onClick={() => console.log('Microphone clicked')}
            >
              <Mic size={18} className={colors.textMuted.replace('text-', 'text-')} />
            </button>

            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:${colors.bgHover}`}
              onClick={() => onSimpleVoiceMode(true)}
            >
              <Radio size={18} className={colors.textMuted.replace('text-', 'text-')} />
            </button>

            <button
              onClick={onSend}
              disabled={!message.trim() || disabled}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:${colors.buttonPrimary}`}
            >
              <Send size={18} className={colors.textSecondary} />
            </button>
          </div>
        </div>

        <p className={`text-xs ${colors.textMuted} text-center mt-6`}>
          College Assistant can make mistakes. Verify important information with official college resources.
        </p>
      </div>
    </div>
  );
};

const VoiceModeOverlay = ({ onSend, onCancel, simpleMode = false }) => {
  const { colors } = useTheme();
  const [isListening, setIsListening] = useState(false);
  const [voiceText, setVoiceText] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) return;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setVoiceText(transcript);
    };

    recognition.onend = () => setIsListening(false);

    recognition.start();
    setIsListening(true);
    recognitionRef.current = recognition;

    return () => recognition.stop();
  }, []);

  return (
    <div className={`absolute inset-0 ${colors.bg} flex flex-col items-center justify-center z-50`}>
      <div className="flex flex-col items-center gap-6">
        <div className={`w-24 h-24 rounded-full flex items-center justify-center ${isListening ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}>
          <Mic size={32} className="text-white" />
        </div>
        <p className={`${colors.text} text-center`}>Speak now...</p>
        <p className={`${colors.textMuted} text-sm`}>{voiceText}</p>
        <div className="flex gap-4">
          {simpleMode ? (
            <button
              className={`px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors`}
              onClick={onCancel}
            >
              Hang Up
            </button>
          ) : (
            <>
              <button
                className={`px-4 py-2 rounded-lg ${colors.buttonPrimary}`}
                onClick={() => { onSend(voiceText); setVoiceText(''); }}
              >
                Send
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${colors.button}`}
                onClick={onCancel}
              >
                Cancel
              </button>
            </>
          )}
        </div>
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
  const [voiceMode, setVoiceMode] = useState(false);
  const [simpleVoiceMode, setSimpleVoiceMode] = useState(false);
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

  const handleSendMessage = async (inputMessage) => {
    const msgText = inputMessage ?? message;
    if (!msgText.trim()) return;
    
    const userMessage = {
      id: Date.now(),
      text: msgText,
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
        text: `I understand you're asking about "${msgText}" regarding ${selectedSchool}. I'll help you find the relevant college policies and information. This would typically connect to your FastAPI backend to fetch the appropriate response based on the selected department.`,
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
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
        sidebarCollapsed={sidebarCollapsed}
        {...sidebarHandlers}
      />

      <div className="flex-1 flex flex-col">
        <Header
          selectedSchool={selectedSchool}
          schools={schools}
          schoolDropdownOpen={schoolDropdownOpen}
          onToggleSchoolDropdown={() => setSchoolDropdownOpen(!schoolDropdownOpen)}
          onSelectSchool={handleSelectSchool}
        />

        {voiceMode && (
          <VoiceModeOverlay
            onSend={(msg) => {
              handleSendMessage(msg); // treat like normal chat
              setVoiceMode(false);
            }}
            onCancel={() => setVoiceMode(false)}
          />
        )}

        {simpleVoiceMode && (
          <VoiceModeOverlay
            onSend={() => {}} // No send functionality in simple mode
            onCancel={() => setSimpleVoiceMode(false)}
            simpleMode={true}
          />
        )}

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
          onVoiceMode={setVoiceMode}
          onSimpleVoiceMode={setSimpleVoiceMode}
          isWelcomeScreen={messages.length === 0}
        />
        
        {/* Sticky Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-transparent pointer-events-none">
          <p className={`text-xs ${colors.textMuted} text-center py-3 px-4`}>
            College Assistant can make mistakes. Verify important information with official college resources.
          </p>
        </div>
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
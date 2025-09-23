import React, { useState } from 'react';
import { 
  Upload,
  Shield,
  Database,
  FileCheck,
  FileText,
  AlertCircle,
  Loader2,
  Check,
  X,
  ArrowLeft,
  Sun,
  Moon,
  MessageSquare, 
  Search, 
  History, 
  ChevronDown, 
  Send, 
  Mic,
  Plus,
  BookOpen,
  User,
  Settings,
  Radio,
  GraduationCap,
  PanelLeftClose,
  Copy,
  BarChart3,
  TrendingUp,
  Menu,
  Calendar,
  Clock,
  Eye,
  Download,
  Activity,
  Users,
  FileBarChart
} from 'lucide-react';
import { useTheme } from './hooks/useTheme.js';



// Theme Toggle Component
const ThemeToggle = () => {
  const { isDark, toggleTheme, colors } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`p-2.5 rounded-full transition-all duration-200 hover:${colors.bgHover} hover:scale-105`}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
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
  onToggleSidebar,
  onBackToHome
}) => {
  const { colors } = useTheme();
  
  return (
    <div className={`fixed left-0 top-0 h-full ${isCollapsed ? 'z-50' : 'z-[60]'} ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 ${colors.bgSecondary} flex flex-col group`}>
      {/* College Logo and Collapse Button */}
      <div className="p-3">
        <div className={`flex items-center ${isCollapsed ? 'justify-start' : 'justify-between'}`}>
          <div className="relative">
            <button
              onClick={onToggleSidebar}
              className={`${isCollapsed ? `p-3 rounded-xl` : 'p-2.5 rounded-xl'} transition-all duration-300 ${isCollapsed ? `hover:${colors.bgHover}` : colors.bgTertiary} flex items-center justify-center ${!isCollapsed ? `hover:${colors.bgHover}` : ''}`}
            >
              <GraduationCap size={20} className={colors.textSecondary} />
            </button>
            
            {/* Hover collapse icon for collapsed state */}
            {isCollapsed && (
              <button
                onClick={onToggleSidebar}
                className={`absolute inset-0 p-3 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:${colors.bgHover}`}
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
        <div className={`${isCollapsed ? 'mt-2' : 'mt-4'} ${isCollapsed ? `border-b ${colors.border} opacity-50` : `border-b ${colors.border} opacity-30`}`}></div>
      </div>

      {/* Sidebar Menu */}
      <div className={`flex-1 ${isCollapsed ? 'px-3' : 'px-4'} py-2 space-y-3`}>        
        <SidebarButton 
          icon={Upload} 
          onClick={() => {}}
          isCollapsed={isCollapsed}
        >
          {!isCollapsed && "Upload Documents"}
        </SidebarButton>
        
        <SidebarButton 
          icon={Database} 
          onClick={() => {}}
          isCollapsed={isCollapsed}
        >
          {!isCollapsed && "Manage Files"}
        </SidebarButton>

        <SidebarButton 
          icon={Settings} 
          onClick={() => {}}
          isCollapsed={isCollapsed}
        >
          {!isCollapsed && "Admin Settings"}
        </SidebarButton>
      </div>

      {/* Line above user section */}
      <div className={`mt-4 mx-3 ${isCollapsed ? `border-t ${colors.border} opacity-50` : `border-t ${colors.border} opacity-30`}`}></div>

      {/* User Section */}
      <UserSection
        userName="Admin Portal"
        userType="Administrator"
        onSettingsClick={() => {}}
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
  onSelectSchool,
  sidebarCollapsed,
  onBackToHome
}) => {
  const { colors } = useTheme();
  
  return (
    <div className={`py-3 pr-6 ${sidebarCollapsed ? 'pl-3' : 'pl-6'} ${colors.bg} relative`}>
      {/* Header shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-blue-500/[0.01] via-transparent to-transparent pointer-events-none"></div>
      
      <div className="flex items-center justify-between min-h-[40px] max-w-full relative z-10">
        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            onClick={onBackToHome}
            className={`p-2 rounded-lg hover:${colors.bgHover} transition-colors flex items-center justify-center`}
            title="Back to Home"
          >
            <ArrowLeft size={18} className={colors.textSecondary} />
          </button>
          <SchoolSelector
            selectedSchool={selectedSchool}
            schools={schools}
            isOpen={schoolDropdownOpen}
            onToggle={onToggleSchoolDropdown}
            onSelect={onSelectSchool}
          />
        </div>

        <div className="flex items-center gap-3 flex-shrink-0 mr-12">
          <div className={`text-sm ${colors.textSecondary}`}>
            Admin Dashboard
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

const FileDropZone = ({ onFileSelect, isDragOver, onDragOver, onDragLeave, onDrop, selectedFile }) => {
  const { colors } = useTheme();
  
  return (
    <div
      className={`
        relative border-2 border-dashed rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-200 cursor-pointer
        ${isDragOver ? 'border-blue-500 bg-blue-900/20' : colors.border + ' ' + colors.bgTertiary}
        ${selectedFile ? 'border-solid border-green-500' : ''}
        hover:${colors.bgHover}
      `}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={() => document.getElementById('admin-file-input').click()}
    >
      <input
        id="admin-file-input"
        type="file"
        accept=".pdf"
        onChange={onFileSelect}
        className="hidden"
      />
      
      <div className="text-center space-y-3 sm:space-y-4">
        {selectedFile ? (
          <>
            <div className={`inline-flex p-2 sm:p-3 rounded-full bg-green-100 dark:bg-green-900/20`}>
              <FileCheck size={24} className="text-green-600 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h3 className={`text-base sm:text-lg font-medium ${colors.text}`}>File Selected</h3>
              <p className={`text-sm ${colors.textSecondary} truncate`}>{selectedFile.name}</p>
              <p className={`text-xs sm:text-sm ${colors.textMuted}`}>
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </>
        ) : (
          <>
            <div className={`inline-flex p-3 rounded-full ${colors.bgTertiary}`}>
              <Upload size={32} className={colors.textSecondary} />
            </div>
            <div>
              <h3 className={`text-lg font-medium ${colors.text}`}>
                Drop your PDF file here
              </h3>
              <p className={`${colors.textMuted}`}>
                or click to browse files
              </p>
              <p className={`text-sm ${colors.textMuted} mt-2`}>
                Supports PDF files up to 50MB
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ProgressBar = ({ progress, isVisible }) => {
  const { colors } = useTheme();
  
  if (!isVisible) return null;
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className={`text-sm font-medium ${colors.textSecondary}`}>Upload Progress</span>
        <span className={`text-sm ${colors.textMuted}`}>{progress}%</span>
      </div>
      <div className={`w-full ${colors.bgTertiary} rounded-full h-2.5`}>
        <div 
          className="bg-gray-600 h-2.5 rounded-full transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

const StatusAlert = ({ type, message, numChunks }) => {
  const { colors } = useTheme();
  
  const getAlertStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700';
      case 'error':
        return 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-700';
      case 'warning':
        return 'bg-yellow-50 text-yellow-800 border border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-700';
      default:
        return colors.bgTertiary;
    }
  };
  
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <Check size={20} className="text-green-600" />;
      case 'error':
        return <X size={20} className="text-red-600" />;
      case 'warning':
        return <AlertCircle size={20} className="text-yellow-600" />;
      default:
        return null;
    }
  };
  
  return (
    <div className={`rounded-xl p-4 ${getAlertStyles()}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {getIcon()}
        </div>
        <div className="flex-1">
          <p className="font-medium">{message}</p>
          {numChunks !== null && (
            <div className="mt-2 flex items-center gap-2">
              <Database size={16} />
              <span className="text-sm">
                Successfully processed into {numChunks} chunks
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AdminUpload = ({ onBackToHome }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [numChunks, setNumChunks] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [selectedSchool, setSelectedSchool] = useState('Computer Science Department');
  const [schoolDropdownOpen, setSchoolDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { colors } = useTheme();

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

  const handleSelectSchool = (school) => {
    setSelectedSchool(school);
    setSchoolDropdownOpen(false);
  };

  const validateFile = (selectedFile) => {
    if (!selectedFile) {
      return { isValid: false, error: "No file selected" };
    }
    
    // Check file type
    if (selectedFile.type !== 'application/pdf') {
      return { isValid: false, error: "Only PDF files are supported" };
    }
    
    // Check file size (50MB limit)
    const maxSize = 50 * 1024 * 1024; // 50MB in bytes
    if (selectedFile.size > maxSize) {
      return { isValid: false, error: `File size exceeds 50MB limit. Current size: ${(selectedFile.size / 1024 / 1024).toFixed(2)}MB` };
    }
    
    // Check minimum size (1KB)
    const minSize = 1024; // 1KB
    if (selectedFile.size < minSize) {
      return { isValid: false, error: "File is too small. Minimum size: 1KB" };
    }
    
    return { isValid: true };
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const validation = validateFile(selectedFile);
    
    if (validation.isValid) {
      setFile(selectedFile);
      setMessage("");
      setMessageType("");
      setNumChunks(null);
    } else {
      setFile(null);
      setMessage(validation.error);
      setMessageType("error");
      e.target.value = ''; // Clear the input
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedFile = e.dataTransfer.files[0];
    const validation = validateFile(droppedFile);
    
    if (validation.isValid) {
      setFile(droppedFile);
      setMessage("");
      setMessageType("");
      setNumChunks(null);
    } else {
      setFile(null);
      setMessage(validation.error);
      setMessageType("error");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a PDF file first");
      setMessageType("error");
      return;
    }

    // Final validation before upload
    const validation = validateFile(file);
    if (!validation.isValid) {
      setMessage(validation.error);
      setMessageType("error");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      setMessage("Uploading document...");
      setMessageType("");
      setUploadProgress(10);

      // Check if backend is reachable first
      try {
        await fetch("http://127.0.0.1:8000/health", { 
          method: "GET",
          signal: AbortSignal.timeout(5000) // 5 second timeout
        });
        setUploadProgress(30);
      } catch {
        throw new Error("Backend server is not reachable. Please ensure the server is running on http://127.0.0.1:8000");
      }

      setMessage("Processing document...");
      setUploadProgress(50);

      const response = await fetch("http://127.0.0.1:8000/upload_pdf", {
        method: "POST",
        body: formData,
        signal: AbortSignal.timeout(30000) // 30 second timeout for upload
      });

      setUploadProgress(80);

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.detail || errorData.message || errorMessage;
        } catch {
          // If not JSON, use the text response
          errorMessage = errorText || errorMessage;
        }
        
        throw new Error(errorMessage);
      }

      const result = await response.json();
      setUploadProgress(100);
      
      setMessage(result.message || "PDF uploaded and processed successfully!");
      setMessageType("success");
      setNumChunks(result.num_chunks);
      
      // Clear the file after successful upload
      setTimeout(() => {
        setFile(null);
        setUploadProgress(0);
        document.getElementById('admin-file-input').value = '';
      }, 3000);
      
    } catch (err) {
      console.error('Upload error:', err);
      
      let userMessage = "Upload failed: ";
      if (err.name === 'TimeoutError') {
        userMessage += "Request timed out. The file might be too large or the server is slow.";
      } else if (err.message.includes('fetch')) {
        userMessage += "Cannot connect to server. Please check if the backend is running.";
      } else {
        userMessage += err.message;
      }
      
      setMessage(userMessage);
      setMessageType("error");
      setUploadProgress(0);
    } finally {
      setUploading(false);
    }
  };

  const clearFile = () => {
    setFile(null);
    setMessage("");
    setNumChunks(null);
    document.getElementById('admin-file-input').value = '';
  };

  // Close mobile menu on escape key
  React.useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className={`relative h-screen overflow-hidden ${colors.bg} ${colors.text}`}>
      {/* Subtle shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/[0.01] via-transparent to-transparent pointer-events-none"></div>
      
      {/* Mobile Top Navigation with Hamburger Menu - visible only on mobile */}
      <div className={`md:hidden ${colors.bgSecondary} border-b ${colors.border} fixed top-0 left-0 right-0 z-50 shadow-sm`}>
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left: Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg hover:${colors.bgHover} transition-colors active:scale-95`}
          >
            <Menu size={24} className={colors.textSecondary} />
          </button>

          {/* Center: Brand */}
          <div className="flex items-center gap-3">
            <GraduationCap size={22} className={colors.accent} />
            <span className={`font-bold text-base ${colors.text}`}>Admin Dashboard</span>
          </div>

          {/* Right: Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Hamburger Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Slide-out Menu */}
          <div className={`md:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] ${colors.bgSecondary} border-r ${colors.border} z-50 transform transition-all duration-300 ease-in-out shadow-2xl ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Menu Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <GraduationCap size={22} className={colors.accent} />
                <span className={`font-bold text-base ${colors.text}`}>Menu</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`p-1 rounded-lg hover:${colors.bgHover} transition-colors`}
              >
                <X size={20} className={colors.textSecondary} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col h-full pt-4">
              {/* Navigation Items */}
              <div className="flex-1 px-4 space-y-2">
                <button
                  onClick={() => {
                    onBackToHome();
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:${colors.bgHover} transition-colors text-left`}
                >
                  <ArrowLeft size={20} className={colors.textSecondary} />
                  <span className={`font-medium ${colors.text}`}>Back to Chat</span>
                </button>

                <div className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${colors.bgHover} text-left`}>
                  <Upload size={20} className={colors.accent} />
                  <span className={`font-medium ${colors.text}`}>Upload Documents</span>
                </div>

                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:${colors.bgHover} transition-colors text-left`}
                >
                  <Database size={20} className={colors.textSecondary} />
                  <span className={`font-medium ${colors.text}`}>File Manager</span>
                </button>

                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:${colors.bgHover} transition-colors text-left`}
                >
                  <BarChart3 size={20} className={colors.textSecondary} />
                  <span className={`font-medium ${colors.text}`}>Analytics Dashboard</span>
                </button>

                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:${colors.bgHover} transition-colors text-left`}
                >
                  <User size={20} className={colors.textSecondary} />
                  <span className={`font-medium ${colors.text}`}>User Management</span>
                </button>

                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:${colors.bgHover} transition-colors text-left`}
                >
                  <Settings size={20} className={colors.textSecondary} />
                  <span className={`font-medium ${colors.text}`}>Settings</span>
                </button>
              </div>

              {/* Menu Footer */}
              <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
                <div className={`text-xs ${colors.textMuted} text-center`}>
                  Admin Dashboard v1.0
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Desktop Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar
          isCollapsed={sidebarCollapsed}
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          onBackToHome={onBackToHome}
        />
      </div>

      <div className={`w-full h-full flex flex-col ${!sidebarCollapsed ? 'md:ml-64' : 'md:ml-16'} transition-all duration-300`}>
        {/* Desktop Header - hidden on mobile */}
        <div className="hidden md:block sticky top-0 z-50 backdrop-blur-3xl">
          <Header
            selectedSchool={selectedSchool}
            schools={schools}
            schoolDropdownOpen={schoolDropdownOpen}
            onToggleSchoolDropdown={() => setSchoolDropdownOpen(!schoolDropdownOpen)}
            onSelectSchool={handleSelectSchool}
            sidebarCollapsed={sidebarCollapsed}
            onBackToHome={onBackToHome}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <main className="p-3 sm:p-4 md:p-6 pt-20 md:pt-6">
            <div className="max-w-4xl mx-auto">
              <div className={`${colors.bgSecondary} rounded-xl sm:rounded-2xl shadow-xl border ${colors.border} p-3 sm:p-6 md:p-8`}>
            {/* Upload Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6 md:mb-8">
              <FileText size={20} className={`${colors.textSecondary} flex-shrink-0 sm:w-6 sm:h-6`} />
              <div className="min-w-0">
                <h2 className={`text-lg sm:text-xl md:text-2xl font-bold ${colors.text}`}>
                  PDF Document Upload
                </h2>
                <p className={`text-xs sm:text-sm ${colors.textMuted} mt-1`}>
                  Upload PDF documents to enhance the knowledge base
                </p>
              </div>
            </div>

            {/* Upload Area */}
            <div className="space-y-4 sm:space-y-6">
              <FileDropZone
                onFileSelect={handleFileChange}
                isDragOver={isDragOver}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                selectedFile={file}
              />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleUpload}
                  disabled={!file || uploading}
                  className={`
                    flex-1 flex items-center justify-center gap-2 py-3 md:py-4 px-4 md:px-6 rounded-xl font-semibold text-white transition-all duration-200 text-sm md:text-base
                    ${!file || uploading 
                      ? 'bg-zinc-700 cursor-not-allowed' 
                      : 'bg-gray-700 hover:bg-gray-800 hover:scale-105'
                    }
                  `}
                >
                  {uploading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span className="hidden sm:inline">Processing Document...</span>
                      <span className="sm:hidden">Processing...</span>
                    </>
                  ) : (
                    <>
                      <Upload size={18} />
                      <span className="hidden sm:inline">Upload to Knowledge Base</span>
                      <span className="sm:hidden">Upload PDF</span>
                    </>
                  )}
                </button>

                {file && !uploading && (
                  <button
                    onClick={clearFile}
                    className={`px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold ${colors.button} ${colors.textSecondary} transition-all duration-200 hover:scale-105 text-sm md:text-base`}
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Progress Bar */}
              <ProgressBar progress={uploadProgress} isVisible={uploading} />

              {/* Status Messages */}
              {message && (
                <StatusAlert
                  type={messageType}
                  message={message}
                  numChunks={numChunks}
                />
              )}
            </div>
          </div>

            {/* Guidelines Section */}
            <div className={`mt-6 md:mt-8 ${colors.bgSecondary} rounded-xl p-4 md:p-6 border ${colors.border}`}>
            <h3 className={`text-base md:text-lg font-semibold ${colors.text} mb-4 flex items-center gap-2`}>
              <Shield size={18} md:size={20} />
              Upload Guidelines & Best Practices
            </h3>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 ${colors.textMuted} text-sm`}>
              <div className="space-y-3">
                <h4 className={`font-medium ${colors.textSecondary}`}>File Requirements</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0"></div>
                    <span>PDF format only (up to 50MB)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0"></div>
                    <span>Text-based documents work best</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0"></div>
                    <span>Avoid password-protected files</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className={`font-medium ${colors.textSecondary}`}>Processing Info</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0"></div>
                    <span>Documents are automatically chunked for optimal retrieval</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0"></div>
                    <span>Processing time varies by document size</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0"></div>
                    <span>Files are immediately available after processing</span>
                  </div>
                </div>
              </div>
            </div>
              </div>

            {/* Separator */}
            <div className="my-8">
              <div className={`border-t ${colors.border} opacity-30`}></div>
            </div>

            {/* Dashboard Section - Separated */}
            <div className={`${colors.bgSecondary} rounded-xl sm:rounded-2xl shadow-xl border ${colors.border} p-6 md:p-8`}>
              <div className="mb-6">
                <h2 className={`text-2xl md:text-3xl font-bold ${colors.textPrimary} mb-2 flex items-center gap-3`}>
                  <BarChart3 size={28} className={colors.accent} />
                  Analytics Dashboard
                </h2>
                <p className={`${colors.textSecondary}`}>Real-time query insights and system performance metrics</p>
              </div>
              
              <div className="space-y-6">
              {/* Dashboard Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <BarChart3 size={24} className={colors.textSecondary} />
                  <div>
                    <h3 className={`text-xl font-bold ${colors.text}`}>Dashboard Analytics</h3>
                    <p className={`text-sm ${colors.textMuted}`}>Real-time insights and system metrics</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className={colors.textSecondary} />
                  <span className={`text-sm ${colors.textMuted}`}>Last updated: {new Date().toLocaleDateString()}</span>
                </div>
              </div>

              {/* Query Analytics Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Query Performance Metrics */}
                <div className={`${colors.bgSecondary} rounded-xl p-6 border ${colors.border}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`text-lg font-semibold ${colors.text}`}>Query Performance</h4>
                    <Activity size={20} className={colors.textSecondary} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colors.text} mb-1`}>2,847</div>
                      <div className={`text-sm ${colors.textMuted}`}>Total Queries</div>
                      <div className="text-green-500 text-xs font-medium">+18% today</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colors.text} mb-1`}>89.2%</div>
                      <div className={`text-sm ${colors.textMuted}`}>Success Rate</div>
                      <div className="text-green-500 text-xs font-medium">+2.3% avg</div>
                    </div>
                  </div>
                  
                  {/* Success Rate Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className={colors.textMuted}>Successful Queries</span>
                      <span className={colors.textMuted}>2,539 / 2,847</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-300" style={{width: '89.2%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Most Relevant Queries */}
                <div className={`${colors.bgSecondary} rounded-xl p-6 border ${colors.border}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`text-lg font-semibold ${colors.text}`}>Top Performing Queries</h4>
                    <BarChart3 size={20} className={colors.textSecondary} />
                  </div>
                  <div className="space-y-4">
                    {[
                      { query: "AI development best practices", relevance: 95, count: 342, trend: "+15%" },
                      { query: "React component optimization", relevance: 92, count: 287, trend: "+8%" },
                      { query: "Database indexing strategies", relevance: 89, count: 201, trend: "+12%" },
                      { query: "API authentication methods", relevance: 86, count: 156, trend: "+5%" },
                      { query: "Machine learning pipelines", relevance: 83, count: 134, trend: "+22%" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2">
                        <div className="flex-1 min-w-0 pr-4">
                          <div className={`text-sm font-medium ${colors.text} truncate mb-1`}>{item.query}</div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                              <div 
                                className="bg-gradient-to-r from-blue-400 to-purple-500 h-1.5 rounded-full transition-all duration-500" 
                                style={{width: `${item.relevance}%`}}
                              ></div>
                            </div>
                            <span className={`text-xs ${colors.textMuted} min-w-8`}>{item.relevance}%</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-semibold ${colors.text}`}>{item.count}</div>
                          <div className="text-xs text-green-500">{item.trend}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Query Trends Chart */}
              <div className={`${colors.bgSecondary} rounded-xl p-6 border ${colors.border} mb-6`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className={`text-lg font-semibold ${colors.text}`}>Query Activity (Last 7 Days)</h4>
                  <TrendingUp size={20} className={colors.textSecondary} />
                </div>
                <div className="grid grid-cols-7 gap-2 h-32">
                  {[
                    { day: 'Mon', successful: 340, failed: 45, height: 85 },
                    { day: 'Tue', successful: 425, failed: 32, height: 95 },
                    { day: 'Wed', successful: 380, failed: 28, height: 78 },
                    { day: 'Thu', successful: 510, failed: 41, height: 100 },
                    { day: 'Fri', successful: 445, failed: 35, height: 87 },
                    { day: 'Sat', successful: 290, failed: 22, height: 65 },
                    { day: 'Sun', successful: 356, failed: 38, height: 72 }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="flex-1 flex flex-col-reverse items-center w-full mb-2">
                        <div 
                          className="w-full bg-gradient-to-t from-green-400 to-green-500 rounded-t transition-all duration-300 hover:from-green-500 hover:to-green-600 cursor-pointer"
                          style={{height: `${item.height}%`}}
                          title={`Successful: ${item.successful}`}
                        ></div>
                        <div 
                          className="w-full bg-gradient-to-t from-red-400 to-red-500 transition-all duration-300 hover:from-red-500 hover:to-red-600 cursor-pointer"
                          style={{height: `${(item.failed / (item.successful + item.failed)) * 20}%`}}
                          title={`Failed: ${item.failed}`}
                        ></div>
                      </div>
                      <span className={`text-xs ${colors.textMuted} font-medium`}>{item.day}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded"></div>
                    <span className={`text-sm ${colors.textMuted}`}>Successful</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-500 rounded"></div>
                    <span className={`text-sm ${colors.textMuted}`}>Failed</span>
                  </div>
                </div>
              </div>

              {/* System Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={`${colors.bgSecondary} rounded-xl p-4 border ${colors.border}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${colors.textMuted}`}>Total Documents</p>
                      <p className={`text-2xl font-bold ${colors.text}`}>1,247</p>
                      <p className={`text-xs ${colors.textMuted} flex items-center gap-1 mt-1`}>
                        <TrendingUp size={12} className="text-green-500" />
                        +12% from last week
                      </p>
                    </div>
                    <FileText size={24} className={colors.textSecondary} />
                  </div>
                </div>

                <div className={`${colors.bgSecondary} rounded-xl p-4 border ${colors.border}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${colors.textMuted}`}>Processing Queue</p>
                      <p className={`text-2xl font-bold ${colors.text}`}>23</p>
                      <p className={`text-xs ${colors.textMuted} flex items-center gap-1 mt-1`}>
                        <Clock size={12} className="text-orange-500" />
                        Avg. 2.3min per doc
                      </p>
                    </div>
                    <Loader2 size={24} className={`${colors.textSecondary} animate-spin`} />
                  </div>
                </div>

                <div className={`${colors.bgSecondary} rounded-xl p-4 border ${colors.border}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${colors.textMuted}`}>Daily Views</p>
                      <p className={`text-2xl font-bold ${colors.text}`}>5,892</p>
                      <p className={`text-xs ${colors.textMuted} flex items-center gap-1 mt-1`}>
                        <Eye size={12} className="text-blue-500" />
                        Peak at 2:30 PM
                      </p>
                    </div>
                    <Activity size={24} className={colors.textSecondary} />
                  </div>
                </div>

                <div className={`${colors.bgSecondary} rounded-xl p-4 border ${colors.border}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${colors.textMuted}`}>Active Users</p>
                      <p className={`text-2xl font-bold ${colors.text}`}>342</p>
                      <p className={`text-xs ${colors.textMuted} flex items-center gap-1 mt-1`}>
                        <Users size={12} className="text-purple-500" />
                        87% return users
                      </p>
                    </div>
                    <Users size={24} className={colors.textSecondary} />
                  </div>
                </div>
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Upload Activity Chart */}
                <div className={`${colors.bgSecondary} rounded-xl p-6 border ${colors.border}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`font-semibold ${colors.text}`}>Upload Activity</h4>
                    <FileBarChart size={20} className={colors.textSecondary} />
                  </div>
                  <div className="space-y-3">
                    {[
                      { day: 'Monday', uploads: 45, bar: 90 },
                      { day: 'Tuesday', uploads: 38, bar: 76 },
                      { day: 'Wednesday', uploads: 52, bar: 100 },
                      { day: 'Thursday', uploads: 41, bar: 82 },
                      { day: 'Friday', uploads: 47, bar: 94 },
                      { day: 'Saturday', uploads: 28, bar: 56 },
                      { day: 'Sunday', uploads: 19, bar: 38 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className={`text-sm w-20 ${colors.textMuted}`}>{item.day}</span>
                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-500" 
                            style={{ width: `${item.bar}%` }}
                          ></div>
                        </div>
                        <span className={`text-sm w-8 text-right ${colors.text}`}>{item.uploads}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className={`${colors.bgSecondary} rounded-xl p-6 border ${colors.border}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`font-semibold ${colors.text}`}>Recent Activity</h4>
                    <History size={20} className={colors.textSecondary} />
                  </div>
                  <div className="space-y-4">
                    {[
                      { action: 'Document uploaded', file: 'research_paper.pdf', time: '2 minutes ago', status: 'success' },
                      { action: 'Processing completed', file: 'annual_report.pdf', time: '5 minutes ago', status: 'success' },
                      { action: 'Upload started', file: 'meeting_notes.pdf', time: '8 minutes ago', status: 'processing' },
                      { action: 'Document indexed', file: 'policy_document.pdf', time: '12 minutes ago', status: 'success' },
                      { action: 'Error occurred', file: 'corrupted_file.pdf', time: '15 minutes ago', status: 'error' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-opacity-50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          activity.status === 'success' ? 'bg-green-500' :
                          activity.status === 'processing' ? 'bg-orange-500 animate-pulse' :
                          'bg-red-500'
                        }`}></div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm ${colors.text}`}>{activity.action}</p>
                          <p className={`text-xs ${colors.textMuted} truncate`}>{activity.file}</p>
                        </div>
                        <span className={`text-xs ${colors.textMuted} whitespace-nowrap`}>{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* System Health Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Storage Usage */}
                <div className={`${colors.bgSecondary} rounded-xl p-6 border ${colors.border}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`font-semibold ${colors.text}`}>Storage Usage</h4>
                    <Database size={20} className={colors.textSecondary} />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm ${colors.textMuted}`}>Documents</span>
                        <span className={`text-sm ${colors.text}`}>45.2 GB / 100 GB</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm ${colors.textMuted}`}>Index Data</span>
                        <span className={`text-sm ${colors.text}`}>12.8 GB / 25 GB</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '51%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-sm ${colors.textMuted}`}>Cache</span>
                        <span className={`text-sm ${colors.text}`}>3.4 GB / 10 GB</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '34%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className={`${colors.bgSecondary} rounded-xl p-6 border ${colors.border}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`font-semibold ${colors.text}`}>Performance</h4>
                    <TrendingUp size={20} className={colors.textSecondary} />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${colors.textMuted}`}>Query Response</span>
                      <span className={`text-sm font-medium text-green-600`}>1.2s avg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${colors.textMuted}`}>Upload Speed</span>
                      <span className={`text-sm font-medium text-blue-600`}>15.7 MB/s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${colors.textMuted}`}>Processing Rate</span>
                      <span className={`text-sm font-medium text-purple-600`}>98.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${colors.textMuted}`}>Error Rate</span>
                      <span className={`text-sm font-medium text-orange-600`}>0.03%</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className={`${colors.bgSecondary} rounded-xl p-6 border ${colors.border}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`font-semibold ${colors.text}`}>Quick Actions</h4>
                    <Settings size={20} className={colors.textSecondary} />
                  </div>
                  <div className="space-y-3">
                    <button className={`w-full flex items-center gap-3 p-3 rounded-lg ${colors.bgTertiary} hover:${colors.bgHover} transition-colors text-left`}>
                      <Download size={16} className={colors.textSecondary} />
                      <span className={`text-sm ${colors.text}`}>Export Analytics</span>
                    </button>
                    <button className={`w-full flex items-center gap-3 p-3 rounded-lg ${colors.bgTertiary} hover:${colors.bgHover} transition-colors text-left`}>
                      <Database size={16} className={colors.textSecondary} />
                      <span className={`text-sm ${colors.text}`}>Backup Database</span>
                    </button>
                    <button className={`w-full flex items-center gap-3 p-3 rounded-lg ${colors.bgTertiary} hover:${colors.bgHover} transition-colors text-left`}>
                      <Shield size={16} className={colors.textSecondary} />
                      <span className={`text-sm ${colors.text}`}>Security Scan</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

// Main App Component 
const AdminUploadApp = ({ onBackToHome }) => (
  <AdminUpload onBackToHome={onBackToHome} />
);

export default AdminUploadApp;
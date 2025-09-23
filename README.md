# College Assistant - Multi-Portal Platform

A comprehensive college assistant platform with multiple interfaces built with React, Vite, and Tailwind CSS. This application features a modern landing page, ChatGPT-like chat interface, and a sophisticated admin dashboard for institutional document management.

## 🌟 Platform Overview

### � Landing Page Portal
- **Dual-Portal Design**: Clean interface showcasing both student and admin access points
- **Feature Showcase**: Interactive cards highlighting platform capabilities
- **Statistics Dashboard**: Real-time platform usage metrics display
- **Responsive Layout**: Mobile-first design with adaptive components
- **Consistent Branding**: Professional college assistant branding throughout

### 💬 Student Chat Interface
- **ChatGPT-Style Design**: Modern conversational interface with message bubbles
- **Department Integration**: Multi-department support with context-aware responses
- **Real-time Interaction**: Instant messaging with typing indicators
- **Chat History**: Persistent conversation tracking and management
- **Voice Capabilities**: Voice input integration for accessibility

### 🛡️ Admin Dashboard
- **Document Upload System**: Drag-and-drop PDF upload with real-time processing
- **Analytics Dashboard**: Comprehensive query analytics and performance metrics
- **File Management**: Document validation, processing, and knowledge base integration
- **System Monitoring**: Real-time system health and storage usage monitoring
- **Responsive Admin UI**: Mobile-friendly administrative interface

## ✨ Key Features

### 🎨 User Interface & Experience
- **Unified Theme System**: Consistent dark/light mode across all portals
- **Responsive Design**: Seamless experience on desktop, tablet, and mobile
- **Component Architecture**: Modular, reusable components with clean separation
- **Smooth Animations**: Professional transitions and hover effects
- **Accessibility**: WCAG-compliant design with keyboard navigation support

### 🏫 College-Specific Functionality
- **Multi-Department Support**: 8+ college departments with specialized content
- **Policy Integration**: Instant access to institutional policies and procedures
- **Academic Context**: Education-focused AI responses and suggestions
- **Administrative Tools**: Complete document lifecycle management
- **Knowledge Base**: RAG-powered intelligent document retrieval

### 🛠️ Technical Excellence
- **Modern React Architecture**: React 19+ with hooks and context API
- **Theme Context System**: Centralized theme management with persistence
- **Route Management**: Clean navigation between portals
- **Performance Optimized**: Lazy loading and optimized bundle sizes
- **API Ready**: Structured for backend integration with FastAPI

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vasu-Devs/ChatBotUi.git
   cd ChatBotUi/Frontend/my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Development Workflow

For development in the modular component structure:

```bash
# Navigate to the main app directory
cd Frontend/my-app

# Install dependencies (if not already done)
npm install

# Start development with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📁 Project Architecture

```
Frontend/
├── my-app/                           # Main React application
│   ├── public/
│   │   └── vite.svg                  # Vite logo
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg             # React logo
│   │   ├── components/               # Reusable UI components
│   │   │   ├── AppRouter.jsx         # Navigation routing logic
│   │   │   ├── CollegeChatGPT.jsx    # Main chat interface
│   │   │   ├── FeatureCard.jsx       # Landing page feature cards
│   │   │   ├── Header.jsx            # Chat interface header
│   │   │   ├── MessageInput.jsx      # Chat input component
│   │   │   ├── Sidebar.jsx           # Chat navigation sidebar
│   │   │   ├── ThemeToggle.jsx       # Dark/light mode toggle
│   │   │   └── VoiceModeOverlay.jsx  # Voice input interface
│   │   ├── contexts/                 # React Context providers
│   │   │   ├── context.js            # Legacy context (deprecated)
│   │   │   └── ThemeContext.jsx      # Theme management context
│   │   ├── hooks/                    # Custom React hooks
│   │   │   └── useTheme.js           # Theme context hook
│   │   ├── pages/                    # Page-level components
│   │   │   └── LandingPage.jsx       # Landing page portal
│   │   ├── AdminUpload.jsx           # Admin dashboard & upload system
│   │   ├── App.jsx                   # Chat application wrapper
│   │   ├── App.css                   # Global styles and animations
│   │   ├── LandingPage.jsx           # Legacy landing page (unused)
│   │   ├── main.jsx                  # Application entry point
│   │   ├── RootLayout.jsx            # Root layout with theme provider
│   │   └── index.css                 # Tailwind CSS imports
│   ├── eslint.config.js              # ESLint configuration
│   ├── index.html                    # HTML template
│   ├── package.json                  # Project dependencies
│   ├── postcss.config.js             # PostCSS configuration
│   ├── tailwind.config.js            # Tailwind CSS configuration
│   └── vite.config.js                # Vite build configuration
├── package.json                      # Frontend workspace configuration
└── README.md                         # Project documentation
```

## 🏗️ Application Architecture

### Core Application Structure

- **`RootLayout.jsx`**: Root component providing theme context and application structure
- **`AppRouter.jsx`**: Central navigation routing between Landing, Chat, and Admin portals
- **`ThemeContext.jsx`**: Centralized theme management with dark/light mode support

### Portal Components

#### 🏠 Landing Page (`src/pages/LandingPage.jsx`)
- **Modern Landing Interface**: Dual-portal design for student and admin access
- **Feature Showcase Cards**: Interactive cards highlighting platform capabilities  
- **Statistics Display**: Real-time platform metrics and usage statistics
- **Responsive Navigation**: Mobile-first design with adaptive layouts
- **Theme Integration**: Consistent styling across all landing page elements

#### 💬 Chat Portal (`src/App.jsx`)
- **`CollegeChatGPT.jsx`**: Complete chat interface with state management
- **`Header.jsx`**: Department selector and navigation controls
- **`Sidebar.jsx`**: Collapsible navigation with chat history
- **`MessageInput.jsx`**: Smart input with auto-resize and keyboard shortcuts
- **`VoiceModeOverlay.jsx`**: Voice input capabilities for accessibility

#### 🛡️ Admin Portal (`src/AdminUpload.jsx`)
- **Comprehensive Dashboard**: 1200+ lines of sophisticated admin interface
- **Document Upload System**: Drag-and-drop PDF processing with validation
- **Analytics Dashboard**: Query performance metrics and system monitoring
- **File Management**: Knowledge base document lifecycle management
- **Responsive Admin UI**: Mobile-friendly administrative controls

### Shared Components (`src/components/`)

- **`FeatureCard.jsx`**: Reusable cards for landing page feature display
- **`ThemeToggle.jsx`**: Consistent dark/light mode toggle across all portals
- **Navigation Components**: Sidebar, header, and routing components
- **Chat Components**: Message display, input handling, and voice integration

### Context & Hooks (`src/contexts/`, `src/hooks/`)

- **`ThemeContext.jsx`**: Centralized theme state management
- **`useTheme.js`**: Custom hook for accessing theme context
- **Consistent Theme System**: Neutral color palette with professional styling

## 🎯 Available Departments

The application supports multiple college departments:

- Computer Science Department
- Business School  
- Engineering College
- Arts & Sciences
- Medical School
- Law School
- Education Department
- Psychology Department

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.6
- **Styling**: Tailwind CSS 3.4.10
- **Icons**: Lucide React 0.544.0
- **Linting**: ESLint 9.35.0

## 🎨 Unified Theme System

The platform features a sophisticated, consistent theme system across all portals:

### Design Philosophy
- **Professional Neutral Palette**: Clean, modern colors suitable for academic environments
- **Consistent Theming**: Identical color schemes across Landing, Chat, and Admin portals
- **Accessibility First**: WCAG-compliant contrast ratios and focus indicators

### Dark Mode (Default)
- **Primary Background**: `bg-neutral-900` - Deep, professional dark background
- **Secondary Background**: `bg-neutral-800` - Sidebar and card backgrounds
- **Tertiary Background**: `bg-neutral-700` - Input fields and elevated elements
- **Text Hierarchy**: White primary, `neutral-300` secondary, `neutral-400` muted
- **Accent Colors**: `blue-400` primary, `orange-400` secondary accents
- **Interactive Elements**: Consistent hover states with `neutral-700/600` backgrounds

### Light Mode
- **Primary Background**: `bg-gray-50` - Clean, minimal light background
- **Secondary Background**: `bg-white` - Card and sidebar backgrounds
- **Tertiary Background**: `bg-gray-100` - Input fields and elevated elements
- **Text Hierarchy**: `gray-900` primary, `gray-700` secondary, `gray-500` muted
- **Accent Colors**: `blue-600` primary, `orange-600` secondary accents
- **Interactive Elements**: Subtle hover states with `gray-100/200` backgrounds

### Cross-Portal Consistency
- **Shared Theme Context**: Single theme provider for entire application
- **Component Harmony**: All UI components use identical color variables
- **Smooth Transitions**: Seamless theme switching across all interfaces
- **Professional Branding**: Consistent visual language throughout platform

## 🔄 Backend Integration Architecture

The platform is designed for seamless integration with backend services:

### Current Integration Points

#### Chat Interface (Mock Implementation)
```javascript
// In CollegeChatGPT.jsx - handleSendMessage
// Currently uses mock responses with realistic delays
const mockResponse = "This is a mock response for development.";
```

#### Admin Dashboard (Ready for Backend)
```javascript
// In AdminUpload.jsx - handleUpload
const response = await fetch("http://127.0.0.1:8000/upload_pdf", {
  method: "POST",
  body: formData,
  // Real backend endpoint integration ready
});
```

### Production Backend Integration

#### Chat Portal API Structure
```javascript
// Chat message processing
POST /api/chat
{
  "message": "user query",
  "department": "selected_school", 
  "chat_history": [...],
  "user_context": {...}
}
```

#### Admin Portal API Endpoints
```javascript
// Document upload and processing
POST /api/upload_pdf          // PDF document upload
GET  /api/analytics          // Dashboard analytics
GET  /api/documents          // Document management
POST /api/process_document   // Document processing
GET  /api/system_health      // System monitoring
```

### Integration Architecture
- **Modular API Layer**: Clean separation between UI and backend logic
- **Error Handling**: Comprehensive error states across all portals
- **Loading States**: Professional loading indicators and progress tracking
- **Real-time Updates**: WebSocket-ready for live updates and notifications
- **Authentication Ready**: User context integration for personalized experiences

## � Platform Roadmap

### 🔧 Backend Integration (In Progress)
- [ ] **FastAPI RAG Backend**: Complete RAG implementation for intelligent responses
- [ ] **Real-time Analytics**: Live dashboard updates with WebSocket integration  
- [ ] **Document Processing Pipeline**: Advanced PDF processing and chunking
- [ ] **Vector Database Integration**: ChromaDB/Pinecone for semantic search
- [ ] **User Authentication**: Role-based access control (Student/Admin/Faculty)

### 📱 Mobile & Accessibility
- [ ] **Progressive Web App (PWA)**: Offline capability and app-like experience
- [ ] **Voice Interface Enhancement**: Complete speech-to-text and text-to-speech
- [ ] **Screen Reader Optimization**: WCAG 2.1 AAA compliance
- [ ] **Keyboard Navigation**: Full keyboard accessibility across all portals
- [ ] **Mobile-First Redesign**: Enhanced mobile experience for admin dashboard

### 🎯 Advanced Features
- [ ] **Multi-Language Support**: International student support (Spanish, Mandarin, etc.)
- [ ] **Smart Notifications**: Proactive policy updates and deadline reminders
- [ ] **Integration Hub**: Connect with LMS, SIS, and other college systems
- [ ] **Advanced Analytics**: Predictive insights and usage pattern analysis
- [ ] **Collaborative Features**: Study group chat rooms and shared resources

### 🔒 Enterprise Features
- [ ] **Single Sign-On (SSO)**: Integration with college authentication systems
- [ ] **Audit Logging**: Comprehensive activity tracking for compliance
- [ ] **Data Privacy Controls**: FERPA-compliant data handling and retention
- [ ] **Custom Branding**: White-label solution for multiple institutions
- [ ] **API Gateway**: Third-party integrations and webhook support

### 🎨 User Experience
- [ ] **Customizable Themes**: Institution-specific color schemes and branding
- [ ] **Advanced Search**: Cross-portal search with filters and sorting
- [ ] **Export Capabilities**: Chat transcripts, analytics reports (PDF/Excel)
- [ ] **Feedback System**: Rating system for responses and continuous improvement
- [ ] **Personal Dashboard**: User-specific analytics and conversation insights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## � Current Platform Status

### ✅ Completed Features
- **Multi-Portal Architecture**: Landing, Chat, and Admin interfaces
- **Unified Theme System**: Consistent dark/light modes across all portals
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Document Upload System**: Complete PDF upload with drag-and-drop
- **Analytics Dashboard**: Comprehensive admin analytics and monitoring
- **Component Architecture**: Modular, reusable component system

### 🚧 In Development
- **Backend RAG Integration**: FastAPI backend with document processing
- **Enhanced Chat Features**: Advanced conversation management
- **Mobile Optimization**: PWA implementation for better mobile experience
- **Authentication System**: User roles and permission management

## 👥 Development Team

- **Vasu-Devs** - *Platform Architecture & Development* - [GitHub](https://github.com/Vasu-Devs)

## 🙏 Acknowledgments

- **Design Inspiration**: Modern chat interfaces and admin dashboards
- **Technical Stack**: React ecosystem with Tailwind CSS for rapid development  
- **Educational Focus**: Purpose-built for academic institutions and student success
- **Community**: Open source contributions and educational technology community

## 📞 Support & Contact

For technical support, feature requests, or integration assistance:
- **GitHub Issues**: [Report bugs or request features](https://github.com/Vasu-Devs/ChatBotUi/issues)
- **Discussions**: [Join the community discussion](https://github.com/Vasu-Devs/ChatBotUi/discussions)
- **Documentation**: Comprehensive guides and API documentation available

---

**Platform Status**: Production-ready frontend with backend integration in progress. Suitable for educational institutions seeking modern AI-powered student support solutions.
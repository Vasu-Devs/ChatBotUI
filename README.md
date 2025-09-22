# College Assistant Chat UI

A modern, responsive chat interface for a college assistant bot built with React, Vite, and Tailwind CSS. This application provides a ChatGPT-like interface specifically designed for college-related queries and policy assistance.

## ✨ Features

### 🎨 User Interface
- **Modern Chat Interface**: Clean, ChatGPT-inspired design with message bubbles
- **Dark/Light Mode Toggle**: Full theme switching support with smooth transitions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Overlay Sidebar**: Non-intrusive sidebar that overlays content without shifting layout
- **Copy Functionality**: One-click copy with visual feedback (checkmark animation)
- **Perfect Alignment**: Precisely aligned header and sidebar elements with consistent spacing

### 🏫 College-Specific Features
- **Department Selection**: Choose from multiple college departments/schools
- **Policy Library**: Quick access to college policies and procedures  
- **Smart Suggestions**: Pre-built prompts for common college queries
- **Chat History**: Persistent conversation tracking with recent chats display
- **Typing Indicators**: Real-time feedback during bot responses
- **Voice Mode**: Interactive voice input capabilities (placeholder implementation)

### 🛠️ Technical Features
- **Theme Context**: React Context-based theme management with persistent preferences
- **Component Architecture**: Modular, reusable components with clean separation
- **Auto-resizing Input**: Dynamic textarea that grows with content and shrinks on welcome screen
- **Keyboard Shortcuts**: Enter to send, Shift+Enter for new line
- **Icon Integration**: Lucide React icons throughout with consistent styling
- **Smooth Animations**: Spring-like transitions and hover effects
- **Overlay System**: Proper z-index management for layered UI components
- **Scroll Management**: Optimized scrolling with custom scrollbar styling

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

## 📁 Project Structure

```
Frontend/
├── my-app/                    # Main React application
│   ├── public/
│   │   └── vite.svg          # Vite logo
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg     # React logo
│   │   ├── components/       # Modular component architecture
│   │   │   ├── CollegeChatGPT.jsx    # Main chat interface logic
│   │   │   ├── Header.jsx            # Top navigation bar
│   │   │   ├── MessageInput.jsx      # Chat input component
│   │   │   ├── Sidebar.jsx           # Navigation sidebar
│   │   │   └── VoiceModeOverlay.jsx  # Voice input interface
│   │   ├── App.jsx           # Application wrapper and theme provider
│   │   ├── App.css           # Global styles and animations
│   │   ├── main.jsx          # Application entry point
│   │   └── index.css         # Tailwind CSS imports and custom styles
│   ├── eslint.config.js      # ESLint configuration
│   ├── index.html            # HTML template
│   ├── package.json          # Project dependencies
│   ├── postcss.config.js     # PostCSS configuration
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   └── vite.config.js        # Vite build configuration
├── package.json              # Frontend workspace configuration
└── README.md                 # Project documentation
```

## 🧩 Component Architecture

### Main Components (`src/components/`)

- **`CollegeChatGPT.jsx`**: 
  - Primary chat interface with complete state management
  - Handles message flow, theme context, and user interactions
  - Integrates all sub-components into cohesive chat experience

- **`Sidebar.jsx`**: 
  - Overlay navigation panel with smooth collapse/expand animations
  - Chat history display with scrollable recent conversations
  - Navigation buttons (New Chat, Search, Policy Library, History)
  - Settings panel with theme toggle and user profile

- **`Header.jsx`**: 
  - Responsive top bar with adaptive spacing based on sidebar state
  - School/department selector dropdown with smooth transitions
  - Theme toggle integration and branding display

- **`MessageInput.jsx`**: 
  - Smart input area with auto-resize functionality
  - Voice mode integration with microphone controls
  - Send button with disabled state management
  - Keyboard shortcuts (Enter to send, Shift+Enter for new line)

- **`VoiceModeOverlay.jsx`**: 
  - Voice input interface overlay (ready for backend integration)
  - Microphone access and audio recording UI
  - Cancel and send functionality for voice messages

### Embedded UI Components (within `CollegeChatGPT.jsx`)

- **`MessageBubble`**: Individual chat messages with copy functionality and visual feedback
- **`TypingIndicator`**: Animated loading dots with theme-aware styling
- **`WelcomeScreen`**: Initial interface with college branding and suggestions
- **`ChatArea`**: Message display container with custom scrolling
- **`SchoolSelector`**: Department selection dropdown with search capabilities
- **`ThemeToggle`**: Light/dark mode switch with smooth icon transitions
- **`SidebarButton`**: Reusable navigation buttons with collapse-aware labels

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

## 🎨 Theme System

The application features a comprehensive theme system with seamless switching between modes:

### Dark Mode (Default)
- **Primary Background**: Zinc-900/950 gradient
- **Secondary Background**: Zinc-800 for sidebar and components
- **Accent Colors**: Emerald-600 for primary actions, Blue-500 for secondary
- **Text**: White primary, Zinc-300 secondary, Zinc-400 muted
- **Message Bubbles**: Emerald-600 for user, Zinc-700 for bot
- **Custom Scrollbars**: Dark theme with zinc-600 track

### Light Mode
- **Primary Background**: White/Gray-50 clean palette
- **Secondary Background**: Gray-100 for sidebar and components  
- **Accent Colors**: Blue-500 for primary actions, Emerald-500 for secondary
- **Text**: Gray-900 primary, Gray-700 secondary, Gray-500 muted
- **Message Bubbles**: Blue-500 for user, Gray-200 for bot
- **Custom Scrollbars**: Light theme with gray-200 track

### Interactive Elements
- **Smooth Transitions**: All theme changes animate smoothly
- **Hover States**: Consistent hover effects across both themes
- **Focus Indicators**: Accessible focus states for all interactive elements
- **Copy Feedback**: Theme-aware success animations

## 🔄 Backend Integration

The modular frontend architecture is designed for easy backend integration:

### Current Implementation (Mock)
```javascript
// In CollegeChatGPT.jsx
const handleSendMessage = async () => {
  // Current: Mock response with setTimeout
  // Simulates API delay and response formatting
  const mockResponse = "This is a mock response for development.";
  // 2-second delay to simulate network request
};
```

### Future Backend Integration
```javascript
// Planned integration with FastAPI backend
const handleSendMessage = async () => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message,
        department: selectedSchool,
        chatHistory: messages,
        userId: user?.id
      })
    });
    
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('API Error:', error);
    return 'Sorry, I encountered an error. Please try again.';
  }
};
```

### Integration Points
- **Message Processing**: `CollegeChatGPT.jsx` - `handleSendMessage` function
- **Voice Mode**: `VoiceModeOverlay.jsx` - Ready for speech-to-text API integration
- **Theme Persistence**: Can integrate with user preferences API
- **Chat History**: Ready for backend storage and retrieval

## 🚧 Future Enhancements

### Backend Integration
- [ ] FastAPI backend integration for real chat responses
- [ ] Real-time WebSocket support for live conversations
- [ ] Message persistence and chat history storage
- [ ] RAG (Retrieval-Augmented Generation) implementation

### Feature Improvements
- [ ] Complete voice input/output functionality
- [ ] File upload capabilities (documents, images)
- [ ] Advanced search across chat history and policies
- [ ] User authentication and personalized experiences
- [ ] Chat export features (PDF, text, etc.)
- [ ] Multi-language support for international students

### UI/UX Enhancements
- [ ] Message reactions and feedback system
- [ ] Customizable themes and color schemes
- [ ] Keyboard shortcuts panel
- [ ] Accessibility improvements (screen reader support)
- [ ] Mobile app version (React Native)
- [ ] Offline mode with cached responses

### Advanced Features
- [ ] AI-powered policy recommendations
- [ ] Integration with college systems (enrollment, grades, etc.)
- [ ] Calendar integration for deadlines and events
- [ ] Collaborative chat rooms for study groups
- [ ] Smart notifications for important updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Vasu-Devs** - *Initial work* - [GitHub](https://github.com/Vasu-Devs)

## 🙏 Acknowledgments

- Inspired by ChatGPT's user interface
- Built with modern React patterns and best practices
- Styled with Tailwind CSS for rapid development

---

**Note**: This is a frontend-only implementation. For full functionality, integrate with a compatible backend API that can process college-related queries and return appropriate responses.
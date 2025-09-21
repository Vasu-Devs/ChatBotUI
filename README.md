# College Assistant Chat UI

A modern, responsive chat interface for a college assistant bot built with React, Vite, and Tailwind CSS. This application provides a ChatGPT-like interface specifically designed for college-related queries and policy assistance.

## ✨ Features

### 🎨 User Interface
- **Modern Chat Interface**: Clean, ChatGPT-inspired design with message bubbles
- **Dark/Light Mode Toggle**: Full theme switching support
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Collapsible Sidebar**: Space-efficient navigation with toggle functionality

### 🏫 College-Specific Features
- **Department Selection**: Choose from multiple college departments/schools
- **Policy Library**: Quick access to college policies and procedures  
- **Smart Suggestions**: Pre-built prompts for common college queries
- **Chat History**: Persistent conversation tracking
- **Typing Indicators**: Real-time feedback during bot responses

### 🛠️ Technical Features
- **Theme Context**: React Context-based theme management
- **Component Architecture**: Modular, reusable components
- **Auto-resizing Input**: Dynamic textarea that grows with content
- **Keyboard Shortcuts**: Enter to send, Shift+Enter for new line
- **Icon Integration**: Lucide React icons throughout

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vasu-Devs/ChatBotUi.git
   cd my-app
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

## 📁 Project Structure

```
my-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Tailwind CSS imports
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Project dependencies
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite build configuration
└── README.md           # Project documentation
```

## 🧩 Component Architecture

### Core Components

- **`App`**: Main application wrapper with theme provider
- **`CollegeChatGPT`**: Primary chat interface component
- **`ThemeProvider`**: Context provider for dark/light mode
- **`Sidebar`**: Navigation panel with chat history and menu
- **`Header`**: Top bar with department selector and theme toggle
- **`ChatArea`**: Message display area with welcome screen
- **`MessageInput`**: Bottom input area with send functionality

### UI Components

- **`MessageBubble`**: Individual chat message display
- **`TypingIndicator`**: Animated dots for loading states  
- **`SuggestionCard`**: Clickable prompt suggestions
- **`SchoolSelector`**: Dropdown for department selection
- **`ThemeToggle`**: Light/dark mode switch button

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

The application features a comprehensive theme system with two modes:

### Dark Mode (Default)
- Background: Zinc-900/950 palette
- Accent: Emerald-600
- Text: White/Zinc variants

### Light Mode
- Background: White/Gray-50 palette  
- Accent: Blue-500
- Text: Gray-900 variants

## 🔄 Backend Integration

The frontend is designed to integrate with a FastAPI backend. Key integration points:

```javascript
// TODO: Replace mock response with actual API call
const handleSendMessage = async () => {
  // Current: Mock response with setTimeout
  // Future: Fetch from FastAPI endpoint
  // Example: const response = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message, department: selectedSchool }) })
};
```

## 🚧 Future Enhancements

- [ ] FastAPI backend integration
- [ ] Real-time WebSocket support
- [ ] Message persistence
- [ ] File upload capabilities
- [ ] Voice input/output
- [ ] Multi-language support
- [ ] Advanced search functionality
- [ ] User authentication
- [ ] Chat export features

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
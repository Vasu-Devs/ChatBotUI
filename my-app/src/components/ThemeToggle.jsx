import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme.js';

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

export default ThemeToggle;
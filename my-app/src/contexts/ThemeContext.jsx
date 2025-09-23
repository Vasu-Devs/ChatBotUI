import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
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
      bgInput: 'bg-neutral-800',
      border: 'border-neutral-600',
      text: 'text-neutral-200',
      textSecondary: 'text-neutral-300',
      textMuted: 'text-neutral-400',
      button: 'bg-neutral-800 hover:bg-neutral-700',
      buttonPrimary: 'bg-neutral-700 hover:bg-neutral-600',
      accent: 'text-blue-400',
      accentBg: 'bg-blue-600 hover:bg-blue-700',
      accentSecondary: 'text-orange-400',
      accentSecondaryBg: 'bg-orange-600 hover:bg-orange-700',
      cardHover: 'hover:bg-neutral-750',
      textPrimary: 'text-neutral-100',
      // Chat specific colors
      userBubble: 'bg-neutral-700',
      userBubbleText: 'text-white',
      userBubbleTextMuted: 'text-neutral-200',
      botBubble: 'bg-neutral-700',
      botIcon: 'bg-neutral-700',
      botIconText: 'text-white',
      suggestionCard: 'bg-neutral-700 hover:bg-neutral-600',
    } : {
      bg: 'bg-gray-50',
      bgSecondary: 'bg-white',
      bgTertiary: 'bg-gray-100',
      bgHover: 'bg-gray-100',
      bgInput: 'bg-white',
      border: 'border-gray-300',
      text: 'text-gray-900',
      textSecondary: 'text-gray-700',
      textMuted: 'text-gray-500',
      button: 'bg-gray-100 hover:bg-gray-200',
      buttonPrimary: 'bg-neutral-600 hover:bg-neutral-700',
      accent: 'text-blue-600',
      accentBg: 'bg-blue-600 hover:bg-blue-700',
      accentSecondary: 'text-orange-600',
      accentSecondaryBg: 'bg-orange-600 hover:bg-orange-700',
      cardHover: 'hover:bg-gray-50',
      textPrimary: 'text-gray-900',
      // Chat specific colors
      userBubble: 'bg-neutral-200',
      userBubbleText: 'text-neutral-800',
      userBubbleTextMuted: 'text-neutral-600',
      botBubble: 'bg-neutral-100',
      botIcon: 'bg-neutral-300',
      botIconText: 'text-neutral-600',
      suggestionCard: 'bg-neutral-50 hover:bg-neutral-100',
    }
  };
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
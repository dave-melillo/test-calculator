import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  light: {
    name: 'Light',
    background: '#FFFFFF',
    text: '#000000',
    button: '#F0F0F0',
    buttonHover: '#E0E0E0',
    accent: '#007AFF',
    display: '#F5F5F5',
  },
  dark: {
    name: 'Dark',
    background: '#1C1C1E',
    text: '#FFFFFF',
    button: '#2C2C2E',
    buttonHover: '#3C3C3E',
    accent: '#0A84FF',
    display: '#000000',
  },
  ocean: {
    name: 'Ocean',
    background: '#E0F7FA',
    text: '#006064',
    button: '#B2EBF2',
    buttonHover: '#80DEEA',
    accent: '#00ACC1',
    display: '#FFFFFF',
  },
};

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Load theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('calculator-theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    // Save theme to localStorage whenever it changes
    localStorage.setItem('calculator-theme', currentTheme);
  }, [currentTheme]);

  const theme = themes[currentTheme];

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

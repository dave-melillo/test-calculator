import { ThemeProvider, useTheme } from './context/ThemeContext';
import Calculator from './components/Calculator';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      className="app"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      <div className="container">
        <h1 style={{ color: theme.text }}>Calculator</h1>
        <ThemeSwitcher />
        <Calculator />
        <footer style={{ color: theme.text, opacity: 0.6 }}>
          <p>Test Calculator App • Built with React + Vite</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

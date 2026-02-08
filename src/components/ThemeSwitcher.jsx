import { useTheme, themes } from '../context/ThemeContext';
import styles from './ThemeSwitcher.module.css';

export default function ThemeSwitcher() {
  const { currentTheme, setCurrentTheme, theme } = useTheme();

  return (
    <div className={styles.themeSwitcher}>
      <label htmlFor="theme-select" style={{ color: theme.text }}>
        Theme:
      </label>
      <select
        id="theme-select"
        value={currentTheme}
        onChange={(e) => setCurrentTheme(e.target.value)}
        className={styles.select}
        style={{
          backgroundColor: theme.button,
          color: theme.text,
          borderColor: theme.accent,
        }}
      >
        {Object.entries(themes).map(([key, themeObj]) => (
          <option key={key} value={key}>
            {themeObj.name}
          </option>
        ))}
      </select>
    </div>
  );
}

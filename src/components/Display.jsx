import { useTheme } from '../context/ThemeContext';
import styles from './Display.module.css';

export default function Display({ value }) {
  const { theme } = useTheme();

  return (
    <div
      className={styles.display}
      style={{
        backgroundColor: theme.display,
        color: theme.text,
      }}
    >
      {value}
    </div>
  );
}

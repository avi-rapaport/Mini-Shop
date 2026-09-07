import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="toglle-ui">
      <div>{theme === 'dark' ? '🌙' : '☀️'}</div>
      <div
        className={`toggle-wrapper ${theme === 'dark' ? 'active' : ''}`}
        onClick={toggleTheme}
      >
        <div className="toggle-inner">⚪️</div>
      </div>
    </div>
  );
};
export default ThemeToggle;

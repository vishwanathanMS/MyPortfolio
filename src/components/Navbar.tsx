import './app-bar.css'

interface NavItem {
  text: string;
  href: string;
}

interface AppBarProps {
  leftItems?: NavItem[];
  rightItems?: NavItem[];
  showDarkMode?: boolean;
  isDarkMode?: boolean;
  onDarkModeToggle?: () => void;
}

const AppBar: React.FC<AppBarProps> = ({
  leftItems = [],
  rightItems = [],
  showDarkMode = true,
  isDarkMode = false,
  onDarkModeToggle,
}) => {
  return (
    <div className={`app-bar ${isDarkMode ? "dark" : ""}`}>
      <div className='nav'>
        {/* Left side */}
        <div className="nav-left">
          {leftItems.map((item, index) => (
            <a key={index} href={item.href} className="nav-item">
              {item.text}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="nav-right">
          {rightItems.map((item, index) => (
            <a key={index} href={item.href} className="nav-item">
              {item.text}
            </a>
          ))}

          {/* Dark mode toggle */}
          {showDarkMode && (
            <div className={`nav-item toggle-container ${isDarkMode ? "dark" : ""}`} onClick={onDarkModeToggle}>
              <div className="toggle-circle"></div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default AppBar;

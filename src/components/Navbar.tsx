import './app-bar.css'
import { useEffect, useState } from 'react';
import profile from '../assets/profile.jpg'

interface NavItem {
  text: string;
  href: string;
}

interface AppBarProps {
  rightItems?: NavItem[];
  showDarkMode?: boolean;
  isDarkMode?: boolean;
  onDarkModeToggle?: () => void;
}

const AppBar: React.FC<AppBarProps> = ({
  rightItems = [],
  showDarkMode = true,
  isDarkMode = false,
  onDarkModeToggle,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`app-bar ${isDarkMode ? "dark" : ""} ${isScrolled ? "scrolled" : ""}`}>
        <div className='nav'>
          {/* Left side */}
          <div className="nav-left">
            <img
              src={profile}
              alt="Profile"
              className="profile-image"
              onClick={() => setIsModalOpen(true)}
            />
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
              <button 
                className="theme-toggle" 
                onClick={onDarkModeToggle}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="image-modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="image-modal-content">
            <img
              src="/profile.jpg"
              alt="Profile"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AppBar;
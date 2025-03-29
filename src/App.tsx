import { useState } from 'react';
import './App.css'
import AppBar from './components/Navbar';
import profile from './Web_Photo_Editor.png';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  return (
    <div className={`portfolio ${isDarkMode ? "dark" : ""}`}>
      <AppBar
        leftItems={[{ text: 'Vishwa', href: '#' }]}
        rightItems={[
          { text: "Home", href: "#" },
          { text: "About", href: "#" },
          { text: "Portfolio", href: "#" },
          { text: "Contact", href: "#" },
        ]}
        isDarkMode={isDarkMode}
        onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
      />
      <section className="home-container">
        <div className="home-content">
          {/* Left Side: Text Content */}
          <div className="text-content">
            <h1>Vishwanathan</h1>
            <p className="designation">Web developer</p>
            <p className="description">
              I’m a passionate Web Developer with a strong focus on creating modern, responsive, and user-friendly websites. With expertise in front-end and back-end technologies, I specialize in transforming ideas into functional and visually appealing digital experiences.
            </p>
            <button className="say-hello">Download CV</button>
          </div>

          {/* Right Side: Profile Image */}
          <div className="profile-wrapper">
            <img src={profile} alt="Profile" className="profile-image" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

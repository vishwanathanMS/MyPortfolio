import { ReactNode, useState } from 'react';
import './App.css';
import AppBar from './components/Navbar';
import Accordion from './components/Accordion';
import Chip from './components/Chip';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const skillsData = {
    frontend: [
      { label: 'HTML/CSS', percentage: 90 },
      { label: 'JavaScript', percentage: 85 },
      { label: 'React', percentage: 80 },
      { label: 'TypeScript', percentage: 75 },
      { label: 'Tailwind CSS', percentage: 85 },
    ],
    backend: [
      { label: 'Node.js', percentage: 80 },
      { label: 'Express', percentage: 75 },
      { label: 'MongoDB', percentage: 70 },
      { label: 'SQL', percentage: 65 },
      { label: 'GraphQL', percentage: 60 },
    ]
  };

  return (
    <div className={`portfolio ${isDarkMode ? "dark" : ""}`}>
      <AppBar
        rightItems={[
          { text: "Home", href: "#home" },
          { text: "About", href: "#about" },
          { text: "Projects", href: "#projects" },
          { text: "Contact", href: "#contact" },
        ]}
        isDarkMode={isDarkMode}
        onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Home Section */}
      <section className="home-container" id="home">
        <div className="home-content">
          {/* Left Side: Text Content */}
          <div className="text-content">
            <h1 className="designation">Hello, I'm</h1>
            <h1 className="name">Vishwanathan</h1>
            <p className="designation">Web Developer</p>
            <p className="description">
              I'm a passionate Web Developer with a strong focus on creating modern, responsive, and user-friendly websites.
              With expertise in front-end and back-end technologies, I specialize in transforming ideas into functional and visually appealing digital experiences.
            </p>
            <a href="/resume.pdf" download className="download-cv-btn">
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-container" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="skills-content">
          <div className="about-text">
            <h3>Get to know me!</h3>
            <p>I'm a passionate web developer with a strong foundation in both frontend and backend technologies. With several years of experience in the industry, I specialize in creating responsive, accessible, and performant web applications.
              <br /><br />
              My journey began with HTML, CSS, and JavaScript, and has evolved to include modern frameworks like React, along with TypeScript for type safety.</p>
          </div>

          <div className="skills-section">
            <h3>My skills</h3>
            <Accordion title="Frontend Development">
              <div className="chips-container">
                {skillsData.frontend.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill.label}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </Accordion>

            <Accordion title="Backend Development">
              <div className="chips-container">
                {skillsData.backend.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill.label}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Portfolio Section with Carousel */}
      <section id="projects">
        <PortfolioSection />
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
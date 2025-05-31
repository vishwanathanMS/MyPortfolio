import Carousel from './Carousel';
import projects from '../data/projects';
import './portfolio-section.css';

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <h2>My Projects</h2>
        <p>Here are some of my recent projects. Use the arrows to navigate through them.</p>
      </div>
      <Carousel projects={projects} />
    </section>
  );
};

export default PortfolioSection;
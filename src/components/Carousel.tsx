import { useState, useRef, useEffect } from 'react';
import './carousel.css';

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  previewUrl: string;
}

interface CarouselProps {
  projects: ProjectType[];
}

const Carousel = ({ projects }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    
    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= projects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  const handlePreview = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="carousel-container">
      <button 
        className="carousel-button prev-button" 
        onClick={prevSlide}
        aria-label="Previous project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <div className="carousel" ref={carouselRef}>
        <div className="carousel-track">
          {getVisibleProjects().map((project) => (
            <div className="carousel-card" key={project.id}>
              <div className="carousel-card-image">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="carousel-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button 
                  className="preview-button"
                  onClick={() => handlePreview(project.previewUrl)}
                >
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        className="carousel-button next-button" 
        onClick={nextSlide}
        aria-label="Next project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
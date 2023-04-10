import React from 'react';
import './hero.css';
const Hero = ({
  title,
  description,
  heroImg,
  heroAlt,
  
}) => {
  return (
    <>
      <div className="hero-section">
      
        <div className="right-hero-section">
          <div className="right-hero-section-content">
            <img src={heroImg} alt={heroAlt} />
          </div>
        </div>
        <div className="left-hero-section">
        <div className="left-hero-section-content">
          <h2>{title} </h2>
          <p>{description}</p>
        </div>
      </div>

      </div>
    </>
  );
};
export default Hero;

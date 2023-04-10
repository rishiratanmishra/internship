import React from 'react';
import './who.css';
import Robot from './../../images/AI_ML.png.png';
import Future from './../../images/tech-ready.png';
import Real from './../../images/timer.png.png';
import Setting from './../../images/setting.png';
const Who = () => {
  return (
    <>
          <div className="who-we-are">
              
              <h2>Who We Are</h2>
              <div className="who-we-are-main">
        <div className="who-we-are-left">
          <div className="who-we-are-left-content">
            <p>
              We are the essential tool in a digital marketer’s handbag. We are
              on a mission to create trust, uphold integrity, drive growth &
              value across the digital ecosystem. We empower our customers with
              a holistic view of their respective journeys’ in the digital
              ecosystem by providing them with accurate real-time data that
              helps them understand their returns on their digital investments.
            </p>
            <button className="navbar-button">About Us</button>
          </div>
        </div>

        <div className="who-we-are-right">
          <div className="who-we-are-right-box">
            <div className="who-we-are-right-box-first">
              <div className="who-we-are-right-box-first-image-block">
                <img src={Robot} alt="ai" />
                <p>Power of AI/ML</p>
                 </div>
              <div className="who-we-are-right-box-first-image-block">
                <img src={Future} alt="future-tech" />
                <p>Future Ready Tech</p>
                 </div>
                          
            </div>
            <div className="who-we-are-right-box-first">
            <div className="who-we-are-right-box-first-image-block">
            <img src={Real} alt="ai" />
            <p>Real-Time Tracking</p>
             </div>
          <div className="who-we-are-right-box-first-image-block">
            <img src={Setting} alt="future-tech" />
            <p>Seamless Integration</p>
             </div>
            </div>
          </div>
        </div></div>
      </div>
    </>
  );
};

export default Who;

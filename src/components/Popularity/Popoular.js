import React from 'react';
import './popular.css';

import noImg from './../../images/Site Stats-cuate 1 (1).png';
import Linetitle from '../lineTitle/Linetitle';
const Popoular = () => {
  return (
  <>
      <div className="number-speaks">
        <div className="no-title">
          <h2>Numbers speak about us!</h2>
        </div>
      </div>

      <div className="services-block">
        <div className="left-services-block">
          <img src={noImg} alt="man" />
              </div>
             
        <div className="right-services-block">
          <div className="line-services-tracked">
            
          <div className="services-tracked">
          <Linetitle
            noTitle={"1500+"}
            noPara={"eCommerce Websites Tracked"}
            />
          <Linetitle
            noTitle={"100 K+"}
            noPara={"Infringement Instances Identified"}
            />
          <Linetitle
            noTitle={"100 K+"}
            noPara={"Brands Analyzed"}
            />
        </div>
        
          <div className="services-tracked">
          <Linetitle
            noTitle={"1B+"}
            noPara={"Video Frames Analyzed"}
            />
          <Linetitle
            noTitle={"3.5B+"}
            noPara={"Unique Device Coverage"}
            />
          <Linetitle
            noTitle={"$400 M+"}
            noPara={"Saved for clients"}
            />
      </div>
          </div></div>
        </div>
      </>
    
  );
};

export default Popoular;

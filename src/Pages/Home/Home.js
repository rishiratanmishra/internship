import React from 'react';
import './home.css';
import Cards from './../../components/Card/Cards';
import HeroImg from './../../images/hero.png';
import CardImg from './../../images/cardMedia1.png';
import CardImg2 from './../../images/Cloud-Services.png';
import CardImg3 from './../../images/mobile 1.png';
import CardImg4 from './../../images/01.-Advertising 1.png';

import Hero from '../../components/Hero/Hero';
import Popoular from '../../components/Popularity/Popoular';
import Who from '../../components/who/Who';
import Testimonial from '../../components/Testimonials/Testimonial';

const Home = () => {
  return (
    <>
      <Hero
        title="We are the Superhero of the Digital Ad World"
        description="We create innovative marketing solutions for cost conscious marketers who does not compromise on the results!"
        heroImg={HeroImg}
      />

      <div className="main-services">
        <div className="our-services">
          <h2>Our Services</h2>
        </div>

        <div className="cards-in-home">
          <Cards
            cardTitle={'eCommerce Competitive Analytics'}
            cardPara={
              'Map your brand to the eCommerce landscape to enhance market share with real-time market intelligence.'
            }
            cardBtnText={'Read More..'}
            cardImg={CardImg}
          />

          <Cards
            cardTitle={'Brand Hygiene Protection'}
            cardPara={
              'Get the full visibility and control of your marketing campaigns with advanced algorithms that safeguard brands from safety and infringement issues.'
            }
            cardBtnText={'Read More..'}
            cardImg={CardImg2}
          />
        </div>
        <div className="cards-in-home">
          <Cards
            cardTitle={'Mobile Identity Solution'}
            cardPara={
              'Seamless identity verification to eliminate risk and fraud at a single go with minimal user inpuat and reducing friction in identity validation'
            }
            cardBtnText={'Read More..'}
            cardImg={CardImg3}
          />

          <Cards
            cardTitle={'Ad Traffic Validation'}
            cardPara={
              'mFilterIt’s ad fraud detection solution provides deterministic ad-fraud detection & prevention for both App & Web campaigns and help advertisers save money with better ROI.'
            }
            cardBtnText={'Read More..'}
            cardImg={CardImg4}
          />
        </div>
      </div>

      {/*  Importing Numbers Speak about Us */}
      <Popoular />

      {/*  Importing Testimonials */}
      <Testimonial />

      {/*  Importing Who We are */}
      <Who />
    </>
  );
};

export default Home;

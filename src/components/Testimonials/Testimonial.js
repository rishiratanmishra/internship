import React from 'react'
import './testimonial.css'
import TestimonialCard from './TestimonialCard'
import Staz from './../../images/stazplay.png.png'
import Careem from './../../images/careem.png.png'
import Vilr from './../../images/vilrginn.png.png'
import Pidlite from './../../images/pidilite.png.png'
const Testimonial = () => {
  return (
      <>
          <div className="testimonial-section">
              <div className="testimonial-container">
                  <div className="testimonial-heading">
                      <h2>Testimonials</h2>
                  </div>
                  <hr className='testimonials-hr'/>
                  <div className="testimonial-title">
                  <p>What recruiters have to say about <span>mFiterIt</span></p>
                  </div>
              </div>
              <div className="testimonial-card-block-main-box">

              <div className="testimonial-card-block">
                  <TestimonialCard
                      testImg={Staz }
                      testTitle={"Hamad Malik"}
                      testDesc={"CMO"}
                      testAbout={"We started working with mFilterlt and almost instantly saw value is subscribing to the service as it helped us challenge and optimize traffic sources, weed out under performing partners and scale with confidence leading to marketing budget optimization."}
                  />
                  <TestimonialCard
                          testImg={Careem}
                          testTitle={"Harish Khan"}
                          testDesc={"Head Acquisition"}
                          testAbout={ "Ad-fraud is a challenge with every ad network - Careem works closely with partners to control the fraud and improve the traffic quality using mFilterIt fraud detection tool. The tool categorically identifies the type of fraud and helps understand real value additional by ad-network."}
                  />
              </div>

              <div className="testimonial-card-block">
              <TestimonialCard
                          testImg={Vilr}
                          testTitle={"Ganesh Sonwane"}
                          testDesc={"Sr.Digital Manager"}
                          testAbout={"mFilterit have been a fantastic partner in not only helping us identify fraud sources but also optimize and identify where we can scale our investments. The team at mFilterlt have consistently delivered performance and have extended the support with respect to managing our partners."}
              />
              <TestimonialCard
                          testImg={Pidlite}
                          testTitle={"Parth Desai"}
                          testDesc={"Sr. Manager"}
                          testAbout={ "With the support of mFilterlt, we were able to improve the efficiency of our performance marketing spends and optimize our call centre bandwidth basis the quality of the lead. The detailed transactional reporting provided by mFilterlt helped us deliver outstanding business results."}
              />
              </div>
              </div>
          </div>
      
      
      </>)
}

export default Testimonial
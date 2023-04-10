import React from 'react'
import './testicard.css'
const TestimonialCard = ({testImg, testTitle, testDesc,testAbout}) => {
    return (
        <>
            <div className="testimonial-card">
                <div className="testimonial-card-top">
                    <img src={testImg} alt='recruiter' />
                    <div className="testimonial-card-top-logo">

                        <h3>{testTitle}</h3>

                        <p>{testDesc }</p></div>
                </div>
                <div className="testimonial-card-bottom">
                    <p>{ testAbout}</p>
                </div>
            
            </div>
        
        
        </>
  )
}

export default TestimonialCard
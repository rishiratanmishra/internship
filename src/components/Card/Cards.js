import React from 'react';
import './cards.css';

const Cards = ({ cardTitle, cardPara, cardImg, cardBtnText }) => {
  return (
    <>
      <div className="card-body">
        <img src={cardImg} alt="card" />
        <div className="card-content-box">
          <p className='cr-title'>{cardTitle}</p>
          <p className='cr-para'>{cardPara}</p>
          <button>{cardBtnText}</button>
        </div>
      </div>
    </>
  );
};

export default Cards;

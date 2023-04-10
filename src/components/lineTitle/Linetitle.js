import React from 'react'
import './line.css'

const Linetitle = ({noTitle, noPara}) => {
    return (
        <>
            <div className="no-block">
                <div className="no-block-content">
                <h2>{noTitle}</h2>
                    <hr className='hr' />
                <p>{noPara}</p>
                </div>
            </div>
        </>
  )
}

export default Linetitle
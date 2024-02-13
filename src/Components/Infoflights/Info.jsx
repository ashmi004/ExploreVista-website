import React from 'react'
import './info.css'
import { SlCalender } from "react-icons/sl";
import { TbShieldCheck } from "react-icons/tb";
import { BsBookmarkCheck } from "react-icons/bs";




const Info = () => {
  return (
    <div className='info section'>
        <div className="infoContainer container">

            <div className="titleDiv flex">
                <h2>Travel to make memories all around the world!</h2>
                 <button className='btn'>
                    View All
                 </button>
            </div>

            <div className='cardsDiv grid'>
                <div className="singleCard grid">
                    <div className="iconDiv flex">
                    <SlCalender className='icon' />



                    </div>
                    <span className='cardTitle'>Book & Relax</span>
                    <p>You can prefer us to book your flight including many offers!</p>
                </div>
                <div className="singleCard grid">
                    <div className="iconDiv flex colorTwo">
                    <BsBookmarkCheck className='icon' />




                    </div>
                    <span className='cardTitle'>Save More</span>
                    <p>You can prefer us to book your flight including many offers!</p>
                </div>
                <div className="singleCard grid">
                    <div className="iconDiv flex colorOne">
                    <TbShieldCheck className='icon' />




                    </div>
                    <span className='cardTitle'>Smart checklist</span>
                    <p>You can prefer us to book your flight including many offers!</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Info

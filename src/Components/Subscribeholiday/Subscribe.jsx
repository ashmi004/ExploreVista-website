import React from 'react'
import './subscribe.css'
import image from '../../project/lagycalling.jpg'

const Subscribe = () => {
  return (
    <div className='subscribe section container'>
        <div className='secContainer grid'>
            <img src={image} alt="Div Image"/>

            <div className='textDiv'>
                <h4>Best Way to Start Your Journey</h4>
                <p>
                    We offer personalised itineraies tailored to
                    individual preferences and interests.
                </p>
                <button className='btn'>Start Here</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe

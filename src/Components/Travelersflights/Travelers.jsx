import React from 'react'
import './travelers.css'
import raj from '../../assetsflights/raj.jpg'
import ayo from '../../assetsflights/ayo.webp'
import lad from '../../assetsflights/lad.jpg'
import hyd from '../../assetsflights/hyd.jpg'


const travelers=[
    {
        id:1,
        destinationImage:raj,
        travelerImage:raj,
        travelerName:'Jaisalmer',
    },
    {
        id:2,
        destinationImage:hyd,
        travelerImage:hyd,
        travelerName:'Hyderabad',
    },
    {
        id:3,
        destinationImage:ayo,
        travelerImage:ayo,
        travelerName:'Ayodhya',
    },
    {
        id:4,
        destinationImage:lad,
        travelerImage:lad,
        travelerName:'Ladakh',
    },
]
const Travelers = () => {
    return (
      <div className='travelers container section'>
        <div className='sectionContainer'>
          <h2 className='heading'>Top Travels of This Month!</h2>
  
          <div className='travelerContainer grid'>
            {travelers.map(({ id, destinationImage, travelerImage, travelerName }) => (
              <div key={id} className='singleTraveler'>
                <img src={destinationImage} className='destinationImage' />
                <div className='travelerDetails'>
                  <div className='travelerPicture'>
                    <img src={travelerImage} className='travelerImage' />
                  </div>
  
                  <div className='travelerName'>
                    <span>{travelerName}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Travelers;
  

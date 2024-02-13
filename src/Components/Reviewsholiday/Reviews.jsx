import React,{useEffect}from 'react'
import './reviews.css'
import { AiFillStar } from "react-icons/ai";
import image1 from '../../project/user1.jpeg'
import image2 from '../../project/user2.jpeg'
import image3 from '../../project/user3.jpg'
import image4 from '../../project/user4.jpeg'
import image5 from '../../project/water.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Reviews = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <div className='review section container'>
        <div className="secContainer grid">
            <div className="textDiv">
                <span className='redText'>FROM OUR CLIENTS</span>
                <h3 data-aos='fade-up'>Real travel History from our Beloved Clients</h3>
                <p data-aos='fade-up'> By choosing us as their tour agency,
                    customers can expect an enriching &
                    enjoyable travel experience,filled with unforgettable
                    memories that will last a lifetime.
                </p>
                  <span className='stars flex' data-aos='fade-up'>
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                  <AiFillStar className='icon' />
                    </span>  

                <div className="clientsImages flex" data-aos='fade-up'>
                    <img src={image1} alt="Client Image" data-aos='fade-up'/>
                    <img src={image2} alt="Client Image" data-aos='fade-up'/>
                    <img src={image3} alt="Client Image" data-aos='fade-up'/>
                    <img src={image4} alt="Client Image" data-aos='fade-up'/>

                </div>
                
            </div>
            <div className='imgDiv'>
                <img src={image5} alt="Div image" data-aos='fade-up'/>
            </div>
        </div>
    </div>
  )
}

export default Reviews

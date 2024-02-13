import React, { useEffect } from 'react'
import './offers.css'

// Images ==============>
import img from '../../projectactivities/moun.png'
import img2 from '../../projectactivities/stress.jpg'
import img3 from '../../projectactivities/cust.png'

// Import Video ==========>
import video from '../../projectactivities/city.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])


    return(
        <section className='about section'>
            <div className="secContainer">
         
                <div className="videoCard container">
                 <div className="cardContent grid">
                    <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
                        <h2>Wonderful House experience nin there!</h2>
                        <p>The Adventure subranking is based on an equally weighted average of scores from five country.</p>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
                    <video src={video} muted autoPlay loop type="video/mp4"></video>
                    </div>    

                 


                  </div>
                </div>
            </div>
        </section>
    
    )
}

export default About

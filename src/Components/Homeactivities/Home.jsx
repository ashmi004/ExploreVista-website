import React,{useEffect} from 'react'
import './home.css'
import video from '../../projectactivities/camp.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { HiFilter } from "react-icons/hi";

const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <div>
       <section className='home'>
        <div className='overlay'>

    </div>
    <video src={video} muted autoPlay loop type="video/mp4"></video>
    <div className="homeContent container">
        <div className="textDiv">
            <span data-aos="fade-up" className='smallText'>
                Explore the Adventorous World

            </span>
            <h1 data-aos="fade-up" className='homeTitle'>
                Search for the Best!
            </h1>
        </div>
       
   
    </div>
    </section>
    </div>
  )
}

export default Home

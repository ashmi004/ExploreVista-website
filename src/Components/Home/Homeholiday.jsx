import React,{useEffect}from "react";
import "./homeholiday.css";
import video from '../../project/sea.mp4';
import { AiOutlineSwapRight } from "react-icons/ai";
import image1 from '../../project/lotus.jpg'
import image2 from '../../project/mum.jpeg'
import image3 from '../../project/ice.jpeg'
import image4 from '../../project/bal.jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Homeholiday = () =>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return <div className="Home">
        <div className="overlay">
            </div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>   
        

        <div className="sectionText">
            <h1 data-aos='fade-up'>Unlock Your Travel Dreams With Us!</h1>
            <p data-aos='fade-up'>
                Discover the worlds's most fascinating destinations!
            </p>
            <button className="btn flex" data-aos='fade-up'>GET STARTED <AiOutlineSwapRight className="icon" /></button>
        </div>
        <div className="popularPlaces">
            <div className="content">
                <h3 data-aos='fade-up'> Popular Places</h3>
                <div className="images flex" data-aos='fade-up'>
                    {<img src={image1} alt="Destination Images"/>}
                    {<img src={image2} alt="Destination Images"/>}
                    {<img src={image3} alt="Destination Images"/>}
                    {<img src={image4} alt="Destination Images"/>}
                </div>
            </div>
        </div>
    </div>
};
export default Homeholiday;

import React,{useEffect} from 'react'
import './footer.css'
import video from '../../project/palm.mp4'
import { FiSend } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


import { MdOutlineTravelExplore } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <section className='footer'>
        <div className="videoDiv">
            <video src={video} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos="fade-up" className='text'>
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>

                </div>

                <div className="inputDiv flex">
                    <input data-aos="fade-up" type="text" placeholder="Enter Email Address"/>
                    <button data-aos="fade-up" className='btn flex' type='submit'>
                    SEND <FiSend className="icon" />


                    </button>
                </div>
            </div>

            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className='logo flex'>
                        <MdOutlineTravelExplore className='icon' />Travel
                        </a>
                    </div>
                    <div data-aos="fade-up" className="footerParagraph">
                    Whether it's booking flights or crafting dreamy holiday packages,
                    finding adventure or seeking serenity away from work, ExploreVista
                    is your ultimate travel companion. Dive into swift and seamless
                    bookings with incredible discounts, unlocking the door to
                    beautiful, lesser-explored landscapes across India.

                    </div>

                    <div data-aos="fade-up"className="footerSocials flex">
                    <AiOutlineTwitter className="icon" />
                    <AiFillYoutube className="icon" />
                    <AiFillInstagram className="icon" />

                    </div>
                </div>

                <div className="footerLinks grid">
                    {/* Group one */}
                    <div data-aos="fade-up" data-aos-duaration="3000" className='linkGroup'>
                        <span className='groupTitle'>OUR AGENCY</span>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Services
                        </li>
                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Contact Us
                        </li>
                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Agency
                        </li>
                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Tourism
                        </li>

              
                    </div>
                                        {/* Group two */}
                                        <div data-aos="fade-up" data-aos-duaration="4000" className='linkGroup'>
                        <span className='groupTitle'>Partners</span>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Bookings
                        </li>
                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        RentCars
                        </li>
                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Trivago
                        </li>
                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Travelong
                        </li>



              
                    
                 

              
                    </div>
                                        {/* Group one */}
                                        <div data-aos="fade-up"  data-aos-duaration="5000"className='linkGroup'>
                        <span className='groupTitle'>ExploreVista</span>

                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Why us?
                        </li>
                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        About the site
                        </li>
                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Top Hotels in India
                        </li>
                        <li className='footerList flex'>
                        <FiChevronRight className='icon'/>
                        Important Links
                        </li>

              
                    </div>



                </div>

                {/* <div className="footerDiv flex"> */}
                    {/* <small>BEST TRAVEL WEBSITE THEME</small> */}
                    {/* <small>COPYRIGHTS RESERVED-ACS 2023</small> */}
                {/* </div> */}
                
            </div>
        </div>
    </section>
  )
}

export default Footer

import React from 'react';
import './Holidaypage.css';
import Mainlayout from '../layout/Mainlayout';

import Navbar from '../Components/Navbar/Navbar';

import Middle from '../Components/Middle/Middle';

import Portfolio from '../Components/Portfolioholiday/Portfolio';
import Reviews from '../Components/Reviewsholiday/Reviews';
import Subscribe from '../Components/Subscribeholiday/Subscribe';
import Footer from '../Components/Footer/Footer';
import Homeholiday from '../Components/Home/Homeholiday';
import Destinationsholiday from '../Components/Destinationsholiday/Destinations';




const Holidaypage = () => {
  return (
    <Mainlayout>
    <>
    <Navbar/>
    <Homeholiday/>
    <Middle/>
    <Destinationsholiday/>
    <Portfolio/>
    <Reviews/>
    <Subscribe/>
    <Footer/>
    
    
    </>
    </Mainlayout>
  )
}

export default Holidaypage;

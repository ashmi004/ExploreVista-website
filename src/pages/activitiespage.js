import React from 'react';
import './activitiespage.css';
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Components/Homeactivities/Home';
import Popular from '../Components/Destinationsactivities/Destinations';
import Footer from '../Components/Footer/Footer';
import About from '../Components/Offersactivities/Offers';
import Mainlayout from '../layout/Mainlayout';






const Activitiespage = () => {
  return (
    <Mainlayout>
    <>
   <Navbar/>
   <Home/>
   <Popular/>
   <About/>
   
   <Footer/>
   
   
    </>
    </Mainlayout>
  )
}

export default Activitiespage;

import React from 'react';
import './flightspage.css';
import Navbar from '../Components/Navbar/Navbar';
import Flighthome from '../Components/Homeflights/FlightHome';
import Footer from '../Components/Footer/Footer';
import Search from '../Components/Searchflights/Search';
import Info from '../Components/Infoflights/Info';
import Travelers from '../Components/Travelersflights/Travelers';







const Flightspage = () => {
  return (
    <>
   <Navbar/>
   <Flighthome/>
   <Search/>
   <Info/>
   <Travelers/>
   <Footer/>
{/*    
   /* <Footer/> */} */
   {/* <Home/>
   <Popular/>
   <About/>
   
   <Footer/> */}
   
   
    </>
  )
}

export default Flightspage;

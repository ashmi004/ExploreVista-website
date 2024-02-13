import React from 'react';
import Router from "react-router-dom";
import './Homepage.css';
import Mainlayout from '../layout/Mainlayout';

import Main from '../Components/Mainhomepage/Main';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Homemainpage from '../Components/Homemainpage/Homemainpage';



const Homepage = () => {
  return (
    <Mainlayout>
    <>
    <Navbar/>
    <Homemainpage/>
    <Main/>
    <Footer/>
    </>
    </Mainlayout>
  )
}

export default Homepage;

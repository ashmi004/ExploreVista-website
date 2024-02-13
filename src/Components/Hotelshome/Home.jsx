import React,{useEffect} from 'react'
import './home.css'
import img from '../../Assetshotel/header1.avif'
import { GrLocation } from "react-icons/gr";
import { FaSearchDollar } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <section className='home'>
        <div className='overlay'>

    </div>
    <img src={img}></img>
    <div className="homeContent container">
        <div className="textDiv">
            <span data-aos="fade-up" className='smallText'>
                

            </span>
            <h1 data-aos="fade-up" className='homeTitle'>
                Search Your Hotels
            </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
                <label htmlFor='city'>Search your hotels:</label>
                <div className="input flex">
                    <input type="text" placeholder='Enter name here....'/>
                    <GrLocation className='icon'/>
                </div>
            </div>
            <div className="dateInput">
                <label htmlFor='date'>Select your date:</label>
                <div className="input flex">
                    <input type="date" />
                   
                </div>
            </div>
            <div className="priceInput">
                <div className="label-total flex">
                    <label htmlFor="price">Max price:</label>
                    <h3 className='total'>Rs200000</h3>
                </div>
                <div className="input flex">
                    <input type="range" max="200000" min="8000"/>
                </div>
                
            </div>

            <div className="searchOptions flex">
            <FaSearchDollar className='icon' />
            <span>Search</span>

            </div>


            

        </div>

        <div  data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
            <FiFacebook className='icon' />
            <FiInstagram className='icon'/>
            <FaTripadvisor className='icon' />



            </div>
            <div className='leftIcons'>
            <BsListTask className='icon' />
            <TbApps className='icon'/>



            </div>
        </div>

    </div>


    </section>
  )
}

export default Home

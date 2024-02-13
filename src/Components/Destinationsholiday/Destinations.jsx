import React,{useEffect} from 'react'
import "./destinations.css"
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import image1 from '../../project/maldives.jpeg'
import image2 from '../../project/statue.jpeg'
import image3 from '../../project/anda.jpg'
import image4 from '../../project/goa.jpg'
import image5 from '../../project/mount.jpg'
import image6 from '../../project/mp.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { TiLocation } from "react-icons/ti";

const destinations=[
    {
        id:1,
        img:image1,
        name:'Maldives',
        location:'India',
        rating:4.6,

    },
    {
        id:2,
        img:image2,
        name:'Statue of Unity',
        location:'India',
        rating:4.9,

    },
    {
        id:3,
        img:image3,
        name:'Andaman Island',
        location:'India',
        rating:4.5,

    },
    {
        id:4,
        img:image4,
        name:'Goa',
        location:'India',
        rating:4.7,

    },
    {
        id:5,
        img:image5,
        name:'Mount Abu',
        location:'India',
        rating:5.0,

    },
    {
        id:6,
        img:image6,
        name:'Bhedaghat',
        location:'India',
        rating:4.6,

    },
  

]




const Destinationsholiday = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
  return (
    <div className='destination section container'>
        <div className='secContainer'>
            <div className='secTitle'>
                <span className='redText' data-aos='fade-up'>EXPLORE NOW</span>
                <h3>Find Your Dream Destinations</h3>
                <p>Fill in the fields below to find the best
                    spot for your next tour.
                </p>
            </div>

            <div className="searchField grid">
                <div className="inputField flex" data-aos='fade-up'>
                <MdLocationPin className='icon' />
                <input type="text" placeholder="Location"/>
                    
                </div>
                

                <div className="inputField flex" data-aos='fade-up'>
                <BsFillCreditCard2BackFill className='icon' />
                <input type="text" placeholder="Budget"/>
                    
                </div>
               
                
                <div className="inputField flex" data-aos='fade-up'>
                <BsFillCalendar2DateFill className='icon' />

                <input type="text" placeholder="Date"/>
                    
                </div>

                <button className='btn flex' data-aos='fade-up'><BiSearchAlt className='icon' />Search</button>
                </div>

                <div className="secMenu">
                    <ul className='flex'data-aos='fade-up'>
                        <li className='active'>All</li>
                        <li>Recommended</li>
                        <li>Beach</li>
                        <li>Spiritual</li>
                        <li>Nature</li>
                        <li>Mountain</li>

                    </ul>
                </div>

                <div className="destinationContainer grid">
                    {destinations.map(destination => {
                        return(
                            <div className='singleDestination' key={destination.id}>
                            <div className='imgDiv' data-aos='fade-up'>
                                <img src={destination.img} alt="Destination Image"/>
    
                                <div className="descInfo flex">
                                <div className='text'>
                                    <span className='name'>{destination.name}</span>
                                    <p className='flex'><TiLocation className='icon' />{destination.location}</p>
                                </div>
                                <span className='rating'>
                                    {destination.rating}
                                </span>
                                </div>
    
                            </div>
                        </div>

                        )
                    })}
                   
                </div>
                
                
            
        </div>
    </div>
  )
}

export default Destinationsholiday;

import React,{useState} from 'react'
import {Link} from "react-router-dom"
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";



const Navbar = () => {
    const[active, setActive]= useState('navBar')
    const showNav=()=>{
        setActive('navBar activeNavbar')
    }
    
    const removeNavbar=()=>{
        setActive('navBar')
    }

  
  return (
    <section className='navBarSection'>
        <header className='header flex'>

            <div className='logoDiv'>
                <a href="#" className='logo flex'>
                    <h1><MdOutlineTravelExplore className='icon' />ExploreVista</h1>

                </a>
            </div>

            <div className={active}>
                <ul className='navLists flex'>
                <li className='navItem'>
                        <Link to="/" className='navLink'>Home</Link>
                    </li>
                    <li className='navItem'>
                    <Link to="/Flights" className='navLink'>Flights</Link>
                    </li>
                    <li className='navItem'>
                        <a href="#" className='navLink'>Trains</a>
                    </li>
                    <li className='navItem'>
                    <Link to="/Hotels" className='navLink'>Hotels</Link>
                    </li>
                    <li className='navItem'>
                    <Link to="/Activities" className='navLink'>Activities</Link>
                    </li>
                    <li className='navItem'>
                    <Link to="/Holiday" className='navLink'>Holiday</Link>
                    </li>
                    <button className='btn'>
                        <a href="#">Login</a>

                    </button>
                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                <IoIosCloseCircle className='icon' />

                </div>
            </div>

            <div onClick={showNav}  className="toggleNavbar">
            <PiDotsNineBold className='icon' />
            </div>
        </header>
    </section>

  )
}

export default Navbar

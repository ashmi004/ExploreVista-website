import React,{useEffect} from 'react'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardList } from "react-icons/lu";



import img1 from '../../projectimg/ladakh.jpg'
import img2 from '../../projectimg/images.jpeg'
import img3 from '../../projectimg/DELHI.jpg'
import img4 from '../../projectimg/raj.jpeg'
import img5 from '../../projectimg/dar.jpeg'
import img6 from '../../projectimg/shim.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data=[
  {
    id:1,
    imgSrc:img1,
    destTitle:'Ladakh',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'32599/-',
    description:'Ladakh boasts surreal landscapes with towering mountains, deep valleys, and arid deserts. The region is dotted with shimmering lakes like Pangong Tso and Tso Moriri, framed by snow-capped peaks.',



  },
  {
    id:2,
    imgSrc:img2,
    destTitle:'Kerela',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'25599/-',
    description:'Kerala is renowned for its lush greenery, backwaters, serene beaches, and picturesque hill stations. The backwaters, especially in Alleppey and Kumarakom, are a highlight—a network of interconnected canals, rivers, lakes, and estuaries, where houseboat cruises offer a tranquil and scenic experience.',



  },
  {
    id:3,
    imgSrc:img3,
    destTitle:'Delhi',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'28790/-',
    description:' Delhi is a treasure trove of historical monuments. From the iconic Red Fort, a UNESCO World Heritage Site, to the Jama Masjid, one of Indias largest mosques, and Humayuns Tomb, a magnificent Mughal-era structure, each site narrates a rich history.'



  },
  {
    id:4,
    imgSrc:img4,
    destTitle:'Rajasthan',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'21390/-',
    description:'Experience the Thar Desert with camel safaris in Jaisalmer or camp under the starry skies in the desert, immersing yourself in the local culture and folk music around the bonfire.',



  },
  {
    id:5,
    imgSrc:img5,
    destTitle:'Darjelling',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'33000/-',
    description:' Darjeeling is renowned for its tea estates producing the world-famous Darjeeling tea. A tour often includes visits to these picturesque plantations, offering insights into tea processing and panoramic views of rolling hills covered in lush greenery.',



  },
  {
    id:6,
    imgSrc:img6,
    destTitle:'Shimla',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'37599/-',
    description:'Shimla showcases British colonial architecture, including the Viceregal Lodge, Gaiety Theatre, and Christ Church. The Mall Road, lined with shops and eateries, exudes an old-world charm.',

    


  },

]


const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])

  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos="fade-right" className='title'>
          Most Popular Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle}/>
                </div>

                <div className="cardInfo">
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                  <HiOutlineLocationMarker className='icon' />
                  <span className='name'>{location}</span>


                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                    
                  </div>
                  <div className='desc'>
                    <p>{description}</p>
                    </div>
                  <button className='btn flex'>
                    DETAILS <LuClipboardList className='icon' />


                  </button>
                </div>
              </div>

            )

          })
        }

      </div>
    </section>
    
  )
}

export default Main

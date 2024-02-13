import React,{useEffect} from "react";
import "./destinations.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img2 from "../../Assetshotel/hotel20.jpg";
import img3 from "../../Assetshotel/19hotel.jpg";
import img4 from "../../Assetshotel/hotel18.jpg";
import img5 from "../../Assetshotel/hotel16.jpg";
import img6 from "../../Assetshotel/5.hotel.jpg";
import img7 from "../../Assetshotel/6.hotel.jpg";
import img8 from "../../Assetshotel/7.hotel.jpg";
import img9 from "../../Assetshotel/8.hotel.jpg";
import img10 from "../../Assetshotel/hotel17.jpg";
import img11 from "../../Assetshotel/hotel14.jpg";
import img12 from "../../Assetshotel/hotel13.jpg";
import img13 from "../../Assetshotel/hotel12.avif";

import Aos from 'aos'
import 'aos/dist/aos.css'
const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "The Taj Mahal Palace",
    location: "Mumbai",
    grade: "Cultural Relax",
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: "Hotel Glory",
    location: "Delhi",
    grade: "Cultural Relax",
  },
  {
    id: 3,
    imgSrc: img4,
    destTitle: "The Golkonda Hotel",
    location: "Hyderabad",
    grade: "Cultural Relax",
  },
  {
    id: 4,
    imgSrc: img5,
    destTitle: "The Leela Gandinagar",
    location: "Gandinagar",
    grade: "Cultural Relax",
  },
  {
    id: 5,
    imgSrc: img6,
    destTitle: "The Oberoi Udaivilas",
    location: "Udaipur",
    grade: "Cultural Relax",
  },
  {
    id: 6,
    imgSrc: img7,
    destTitle: "ITC Grand Chola",
    location: "Chennai",
    grade: "Cultural Relax",
  },
  {
    id: 7,
    imgSrc: img8,
    destTitle: "JW Marriott Hotel",
    location: "Kolkata",
    grade: "Cultural Relax",
  },
  {
    id: 8,
    imgSrc: img9,
    destTitle: "An Oberoi Resort",
    location: "Shimla",
    grade: "Cultural Relax",
  },
  
  {
    id: 9,
    imgSrc: img10,
    destTitle: "Essentia Luxury Hotel",
    location: "Indore",
    grade: "Cultural Relax",
  },
  {
    id: 10,
    imgSrc: img11,
    destTitle: "Ramada Plaza by Wyndham Agra",
    location: "Agra",
    grade: "Cultural Relax",
  },
  {
    id: 11,
    imgSrc: img12,
    destTitle: "Lalitha Mahal Palace Hotel",
    location: "Mysuru",
    grade: "Cultural Relax",
  },
  {
    id: 12,
    imgSrc: img13,
    destTitle: "Princess De Munnar",
    location: "Munnar",
    grade: "Cultural Relax",
  },
];
const Popular = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle" data-aos="fade-up">Popular Hotels</h2>
            <p data-aos="fade-up">
              Most Popular choices from India!
            </p>
          </div>
          <div className="iconsDiv flex" data-aos="fade-up">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>
        <div className="mainContent grid" >
          {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div className="singleDestination"data-aos="fade-up">
                <div className="destImage">
                  <img src={imgSrc} alt="Image title" />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      ExploreVista
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Popular;

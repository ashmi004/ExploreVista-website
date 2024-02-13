import React,{useEffect} from "react";
import "./destinations.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img2 from "../../projectactivities/gujju.jpg";
import img3 from "../../projectactivities/hot.jpeg";
import img4 from "../../projectactivities/kite.jpeg";
import img5 from "../../projectactivities/tawang.jpeg";
import img6 from "../../projectactivities/trek.jpeg";
import img7 from "../../projectactivities/sky.jpg";
import img8 from "../../projectactivities/dal.jpeg";
import img9 from "../../projectactivities/bunjee.jpg";
import img10 from "../../projectactivities/imagica.jpg";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "Rann Of Kutch",
    location: "Gujrat",
    grade: "Cultural Relax",
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: "Hot Air Ballon Ride",
    location: "Jaipur",
    grade: "Cultural Relax",
  },
  {
    id: 3,
    imgSrc: img4,
    destTitle: "Kite Festival",
    location: "Vadodara",
    grade: "Cultural Relax",
  },
  {
    id: 4,
    imgSrc: img5,
    destTitle: "Tawang Bike Ride",
    location: "Himachal Pradesh",
    grade: "Cultural Relax",
  },
  {
    id: 5,
    imgSrc: img6,
    destTitle: "Kedarnath Trek",
    location: "Uttarakhand",
    grade: "Cultural Relax",
  },
  {
    id: 6,
    imgSrc: img7,
    destTitle: "Skydiving near Delhi",
    location: "Delhi",
    grade: "Cultural Relax",
  },
  {
    id: 7,
    imgSrc: img8,
    destTitle: "House Boat at Dal Lake",
    location: "Srinagar",
    grade: "Cultural Relax",
  },
  {
    id: 8,
    imgSrc: img9,
    destTitle: "Bunjee Jumping at Rishikesh",
    location: "Uttar Pradesh",
    grade: "Cultural Relax",
  },
  {
    id: 9,
    imgSrc: img10,
    destTitle: "Imagica",
    location: "Mumbai",
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
            <h2 className="secTitle" data-aos="fade-up">Popular Destination</h2>
            <p data-aos="fade-up">
              From historical cities to natural specteculators,come see the best
              of the world!
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

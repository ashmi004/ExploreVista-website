
import React from 'react'
import './flighthome.css'
import video from '../../assetsflights/plane.mp4'
import img from '../../assetsflights/bg.png'


const Home=()=>{
    return(
        <div className='aome flex aontainer'>
            <div className='aainText'>
                <h1>Create forever Memories with us!</h1>
            </div>

            <div className="aomeImages flex">
                <div className="aideoDiv">
                    <video src={video} muted autoPlay loop type="video/mp4" ></video>
                </div>

                <img src={img} className='alane'/>
            </div>
        </div>
    )
}
export default Home

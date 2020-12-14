import React from 'react'
import "../css/myHeader.css";
import logo from '../assets/logo.mp4'
import mypic from '../assets/mypic.jpeg'
const Header = () => {

    const videoSource = "https://www.w3schools.com/tags/movie.mp4"
    return (
        <div className="Container" >
                 <div  className="myviedo" dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${logo}"
          width="100%"
          height="100%"
          type="video/mp4"
           
        />,
      ` }}></div>
            
            <div className="Content">
                <div className="SubContent" >
                    <h1>welcome to my Portfolio</h1>
                    <h3>Sara Moshggoo</h3>
                    <p>Full Stack Developer /Software Engineer</p>
                    
                    <img
                        src={mypic}
                        alt="profile" />
                </div>
            </div>
        </div>
    )
   
        
  
}

export default Header

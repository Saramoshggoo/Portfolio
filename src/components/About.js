import React from 'react'
import Title from './Title';
import {ProductConsumer} from '../Context/Context';
import 'font-awesome/css/font-awesome.min.css';
import mypic from '../assets/mypic.jpeg'
import agent_file from '../resume/moshggoo.pdf';
const About = () => {
    return (
        <ProductConsumer>
            {(value)=>{
                return(
               <section  className="about">
               <Title title="about" color="white"/>
               <div className="about" >
                   
                    <div className="about-logo" >

                       <img src={mypic} alt="logo"/>
                   </div> 
                  
                   <div className="about-texts">
                       <div className="profile">
                           <h2>My Profile</h2>

                       
                       <div className="myname">
                           <p><span>Name: </span>Sara Moshggoo</p>
                       </div>
                       <div className="address">
                           <p><span>Address: </span>San Jose , CA</p>
                       </div>
                       <div className="resume">
                           <p><span> My Resume: </span><a download="sara-moshggoo-resume.pdf" target="_blank" href={agent_file}>Download My Resume</a></p>
                       </div>
                       <div className="media">
                        
                        <a href="https://www.linkedin.com/in/sara-moshggoo/"><i className="fa fa-linkedin"></i> </a>
                      
                       <a href="https://www.linkedin.com/in/sara-moshggoo/"><i style={{fontSize:"24px"}} className="fa">&#xf09b;</i></a>
                      </div>
                      
                      </div>
                      
                   </div>
                   <div className="generally">
                         
                            <div className="certificate"></div>
                            <h3>About Me:</h3>
                            <p>Experienced Full Stack Developer and CS graduate with technical experience in the US and abroad. I am always passionate about design and creation , 
                                i am always seeking out way to further develop my skill-set and  challenge myself everyday by learning new technology
                                
                         </p>
                         <h3>My Certificates:</h3>
                       <p>Certificate<b> as Full Stack form Coding Dojo  </b> </p>
                       <p>Bachelor degree<b> as Software of Engineer </b> </p>
                   </div>
                   
               </div>
            </section> ) 
            }}
       
        </ProductConsumer>
    )
}

export default About

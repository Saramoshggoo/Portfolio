import React from 'react'
import '../css/contact.css'

import Title from './Title';

const ContactUs = (props) => {
    return (
        <div>
           
          <Title title="Contact Me"/>
          <div className="contact-container">
         <a href="mailto:smoshggoo@gmail.com"><i style={{color:"red"}}className="fa fa-google  " aria-hidden="true"><span>    Email</span></i></a>               
        <a href="https://www.linkedin.com/in/sara-moshggoo/"><i style={{color:"rgb(110, 190, 240)"}}className="fa fa-linkedin"><span>   LinkedIn</span></i> </a>
        <a href="https://github.com/Saramoshggoo"><i style={{fontSize:"24px"}} className="fa">&#xf09b;</i>  <span>   Github</span> </a>
        </div>
        </div>
    )
}

export default ContactUs

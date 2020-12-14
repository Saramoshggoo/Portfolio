import React from 'react'

import {Link } from 'react-router-dom';
import {scroller} from 'react-scroll';
import {ProductConsumer} from '../Context/Context';
import '../css/Navbar.css'
export default function Navbar(props){
    //scroll function
  
    
    return (
      <ProductConsumer>
       {(value)=>{
           return(
            <div  className="main"   style={{backgroundColor:`${value.headerShow? "rgba(0,0,0,0.9)": "rgba(0,0,0,0.7)"}`}} >
                <div className="header-container">
                    <nav>
                    <div className="logoBtn" onClick={()=>
                        props.scrollToElement('Home')
                    }>
                        <div className="btn" onClick={value.handleSideBar}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                     <ul className="links" onClick={value.handleClose} style={{ transform:`${value.sidebarOpen? "translate(0%)" :"translate(-100%)"}` }}>
                         {value.Links.map(item=>{
                             return (
                             <li key={item.id}><Link to="/" onClick={()=>props.scrollToElement(item.scrolling)}>{item.link}</Link></li>
                             )
                         })}
                     </ul>
                     
                    </nav>
                </div>
             </div>
       
           )
       }}

      </ProductConsumer>
    )
}








//https://www.youtube.com/watch?v=NDbH-bdlj3I
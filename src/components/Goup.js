import React from 'react'
import {Link } from 'react-router-dom';
import '../css/goup.css'
const Goup = (props) => {
    return (
        <div>
        <div className="buttons" style={{paddingLeft:"10px"}}>
        <i className="fa fa-arrow-up" aria-hidden="true"></i>

            <Link to="#" style={{ color:" #219b79"}}onClick={()=>
                        props.scrollToElement('Home')}>go up </Link>
        </div>
        <div  className="buttons" style={{textAlign:"right",paddingRight:"10px"}}>
        <i className="fa fa-arrow-up" aria-hidden="true"></i>

            <Link  to="#" style={{ color:" #219b79"}}onClick={()=>
                        props.scrollToElement('Home')}>go up </Link>
        </div>
         </div>
     
    )
}

export default Goup

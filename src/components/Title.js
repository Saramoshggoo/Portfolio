import React from 'react'
import "../css/title.css"
const Title = (props) => {
    return (
        <div className="titleWrapper"  style={{backgroundColor:`${props.color}`,textAlign:"center"}}>
           <h2>{props.title}</h2>
           <div className="name">
             <div className="underline"></div>

           </div>
            
        </div>
    )
}

export default Title

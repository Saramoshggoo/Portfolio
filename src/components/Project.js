import React from 'react'
import Title from './Title';
import {ProductConsumer} from '../Context/Context';
import "../css/Project.css";

const Project = (props) => {
    return (
        <ProductConsumer>
            {(value)=>{
                return(
                <div className="porjects">
                    <div className="container">
                       <Title title="Project"/>
                      <div className="project-center">
                           {value.projects.map(items=>{
                               return(
                                   <div className="single-project" key={items.id}>
                                        <a href={items.extlink} target="_blank" rel="noopener noreferrer" >
                                            <img src={items.images} alt={items.title}/>
                                        </a>
                                        <p>{items.title}</p>
                                        <div className="item">
                               <button className="projectBtn"><a href={items.extlink}>{items.btnTitle}</a></button>
                                       </div>
                                       </div>
                               )
                           })}
                      </div>
                    </div>
                </div>

                )
            }}
        </ProductConsumer>
    )
}

export default Project

import React from 'react'
import Title from './Title';

import "../css/skills.css"
import {ProductConsumer} from '../Context/Context';
const Skills = () => {
    return (
        <ProductConsumer>
          {
              (value)=>{
                  return(
                   <div className="skills">
                       <div className="container">
                           <Title title="skills"/>
                           <div className="skills-center">
                    
                                  <h4>Web Developeent skills</h4>
                                 
                              <div className="skills-web">
                                  {value.devSkills.map(item=>{
                                      return (
                                          <li key={item.id} >
                                              <h3>{item.title}</h3>
                                              <span className="bar">
                                                  <span className={item.percent}>
                                                      <p>{item.number}</p>
                                                  </span>
                                              </span>
                                          </li>
                                      )
                                  })}
                              </div>
                              <div className="skills-web">
                                  {value.devSkills2.map(item=>{
                                      return (
                                          <li key={item.id} >
                                              <h3>{item.title}</h3>
                                              <span className="bar">
                                                  <span className={item.percent}>
                                                      <p>{item.number}</p>
                                                  </span>
                                              </span>
                                          </li>
                                      )
                                  })}
                              </div>
                              
                           </div>
                       </div>
                   </div>

                  )
              }
          }

        </ProductConsumer>
        
    )
}

export default Skills

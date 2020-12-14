import React from "react";
import './App.css';
import {Element} from 'react-scroll'
import Navbar from './components/Navbar';
import Header from './components/Header';
import GoUp from './components/Goup';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import ContactUs from './components/ContactUs';
import {Route } from 'react-router-dom';
import {ProductConsumer} from './Context/Context'
import {scroller} from 'react-scroll';
function App() {
    const scrollToElement=(element)=>{
        scroller.scrollTo(element,{
            duration:1500, 
            delay:100,
            smooth:true,
            offset:-80
        })
    }
    
return (

   <ProductConsumer>
        {value =>{
            return(
                <div className="App">   
                <Navbar  scrollToElement={scrollToElement} />
                <Element name='Home'>
                   <Route exact path="/" component={Header}/> </Element>
                <div className="basic">
                        <Element name='About'>
                            <Route exact path="/" component={About}/> </Element>
                        <Element name='Skills'>   
                            <Route exact path="/" component={Skills}/> </Element>
                        <Element name='Projects'>  
                            <Route exact path="/" component={Project}/> </Element>
                    </div>
                <GoUp scrollToElement={scrollToElement}/>
                <Element name='Contact'>  
                    <Route exact path="/" component={ContactUs} /> </Element>
                 
                 </div> 

            )
        }}
</ProductConsumer>
  

);
}
export default App;

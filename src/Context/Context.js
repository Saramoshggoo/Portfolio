import React from 'react';
import {Links} from './Data';
import {devSkills} from './Data';
import {projects} from './Data';
import {devSkills2} from './Data';


const ProductContext=React.createContext();

class ProductProvider extends React.Component{
      state={
          sidebarOpen:false,
          closeLinks:false,
          Links:Links,
          headerShow:false,
          devSkills:devSkills,
          projects:projects,
          devSkills2:devSkills2,
        //   backMode:false,
        //   setClass:JSON.parse(localStorage.getItem("Mode"))

      }
      handleSideBar=()=>{
       this.setState({sidebarOpen:!this.state.sidebarOpen})
       console.log(this.state.sidebarOpen)
    }
    handleClose=()=>{
    if (this.state.sidebarOpen===true){
        this.setState({sidebarOpen:false})
    }
    }
componentDidMount(){
    window.addEventListener("scroll",this.scrollEffect)
}
//navbar color change after scroll 30px
scrollEffect=()=>{
  if (window.scrollY>30){
      this.setState({
          headerShow:true
      })
  }
  else{
      this.setState({
        headerShow:false 
      })
  }
}


    render(){
        return (
            <ProductContext.Provider value ={{...this.state,
             handleSideBar:this.handleSideBar,
            handleClose:this.handleClose
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
    //open - close sidebar
   
}
const ProductConsumer=ProductContext.Consumer;
export {ProductProvider,ProductConsumer}
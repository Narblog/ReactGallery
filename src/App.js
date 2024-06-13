
import { Component } from "react";
import Slider from "./components/Slider";
import "./App.css"

class App extends Component{
  state={
    photos:[
      "images/1.jpeg",
      "images/2.jpeg",
      "images/3.jpeg",
      "images/4.jpeg",
      "images/5.jpeg",
      "images/6.jpeg",
      "images/7.jpeg",
      "images/8.jpeg",
      "images/9.jpeg",
      "images/10.jpeg",
    ],
    currentIndex:0
  }
  goNext=()=>{
    this.setState(state=>{
      const prevState={...state}
      if(prevState.currentIndex<prevState.photos.length-1){
        prevState.currentIndex++
      }else{
        prevState.currentIndex=0
      }
      return prevState
    })
  }
  goPrev=()=>{
    this.setState(state=>{
      const prevState={...state}
      if(prevState.currentIndex<=0){
        prevState.currentIndex=prevState.photos.lenght-1
      }
      else{
        prevState.currentIndex--
      }
      return prevState
    })
  }
  setActivePicture=(index)=>{
    this.setState({currentIndex:index})

  }
    render(){
        return(
         <Slider 
            {...this.state}
            goNext={this.goNext}
            goPrev={this.goPrev}
            setActivePicture={this.setActivePicture}/>
        )
    }
}
export default App
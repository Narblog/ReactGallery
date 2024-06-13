
import { Component } from "react";
import TimeLine from "../TimeLine";

class Slider extends Component{
   
    render(){
        const {photos,currentIndex,goNext,goPrev,setActivePicture}=this.props
        const mainPhoto=photos[currentIndex]
        return(
           <div className="slider">
            <img className="main-photo" alt="photo1" src={require("../../"+mainPhoto)}/>

            <div>
                <button onClick={goPrev} >Prev</button>
                <button onClick={goNext}>Next</button>
            </div>
            <TimeLine photos={photos} currentIndex={currentIndex} setActivePicture={setActivePicture}/>
           </div>
        )
    }
}
export default Slider
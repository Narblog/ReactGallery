
import { Component } from "react";

class TimeLine extends Component{
    render(){
        const {photos,currentIndex,setActivePicture}=this.props
        return(
            <div className="photo-list">
                    {
                        photos.map((elm,index)=>{
                            let cssStyle=index===currentIndex?"active":null
                            return <img  className={cssStyle} src={require("../../"+elm)} key={index} alt="images" onClick={()=>setActivePicture(index)}/>
                        })
                    }


            </div>
        )
    }
}
export default TimeLine
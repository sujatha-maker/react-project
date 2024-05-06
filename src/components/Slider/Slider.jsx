import React, { useEffect, useState } from "react";
import "./Slider.css"
import Slide1 from "../Images/bg_1.jpg"
import Slide2 from "../Images/bg_2.jpg"
import Slide3 from "../Images/bg_3.jpg"
import Slide4 from "../Images/bg_4.jpg"

const Slides = [{"slide":Slide1}, {"slide":Slide2}, {"slide":Slide3},{"slide":Slide4}];
function Slideshow() { 
const [currentSlide,setSlide] = useState(0);

useEffect(()=>{
    setInterval(() => {
        
        setSlide(currentSlide+1)
        
    }, 1000);
    if(currentSlide >= 3){
        setSlide(0);
    }
},[])

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
       
      >
        <img src={Slides[currentSlide]?.slide}></img>
      
      </div>

    </div>
  );
}


// function Slideshow() {
//     return (
//       <div className="slideshow">
//         <div className="slideshowSlider">
//           {Slides.map((item, index) => (
//             <div className="slide" key={index}>
//                 <img src={item.slide} alt="slide" />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  export default Slideshow;
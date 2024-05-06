import React from "react";
import "./Props.css";

function Props(props){
    return(
    
   <div className="cake_container">
    <div className="each_cake_box">
   <div class="flaticon-cake">

    <img src={props.name}/>
   </div>
       
<h3 class="heading">{props.heading}</h3>

<p className="description1">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
</p></div></div>
        
        
    );



}

export default Props;
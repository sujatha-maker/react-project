import React from "react";
import "./ChefProps.css";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";


function Chefprops(props){

    return(
   
        <div className="main_container">
        <div className="each_chef_box">
       <div class="chef_image">
    
        <img src={props.image}/>
       </div>
           
    <h3 class="name">{props.name}</h3>
    
    <p className="roll">{props.roll}
    </p>
    <div class="faded1">
<ul class="mainIcon">
<li class="icon"><FaTwitter /></li>
<li class="icon"><FaFacebookF /></li>
<li class="icon"><FaGooglePlusG /></li>
<li class="icon"><FaInstagram /></li>

</ul>
</div>
    
    </div></div>

    );

}
export default Chefprops;
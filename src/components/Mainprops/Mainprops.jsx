import React from "react";
import Props from "../Props/Props";
import "./Mainprops.css";
import image1 from "../Images/cake.png";
import image2 from "../Images/talk.png";
import image3 from "../Images/tray.png";
function Mainprops(){

    return(

        <div className="mainprops">
  <Props heading="Birthday Party" name={image1}/>
     <Props heading="Business Meeting" name={image2}/>
     <Props heading="Wedding Party" name={image3}/>

        </div>
    );
}

export default Mainprops;
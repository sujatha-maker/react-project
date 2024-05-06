import React from "react";
import "./Page2.css";
import { Card } from "../checkComponent/Card";
import checkImg from "../Images/breakfast-2.jpg";

function Page2(){


    return(

<section class="page2" > 
<div class="container">
<div class="row">
<div class="leftside">
    {/* <Card heading="heading" img={checkImg} para="fsjdafkljsdal;kfjskldafj;sklajdfklasjdfkljsdalkfsjda" btnName="submit" btnColor="green"/> */}
<div class="img1" ></div>
<div class="img2"></div>
</div>
<div class="rightside">
<div class="heading-section">
<span class="subheading">About</span>
<h2 class="head">Feliciano Restaurant</h2>
</div>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<div class="time">
<span>Mon - Fri <strong>8 AM - 11 PM</strong></span> 
<div><a href="#">+ 1-978-123-4567</a></div>
<p></p>
</div></div>
</div>
</div>
</section>



    );
}

export default Page2;
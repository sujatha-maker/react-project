import React from "react";
import "./navbarstyle.css";
function Header(){
    return(    

<div className="topPage">

 <div class="top">

<div class="text">+ 1235 2355 98</div>

<div class="text">youremail@email.com</div>

<div class="link"><span>Open hours:</span> <span>Monday - Sunday</span> <span>8:00AM - 9:00PM</span></div>
</div>
<div className="nav-header">
            <a className="logo">Feliciano</a>
            <ul className="nav-tab">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Stories</li>
                <li>Contact</li>
                <li> <button className="booking">Book a table</button></li>
            </ul>
           
        </div>

</div>

        
    );

}
export default Header;

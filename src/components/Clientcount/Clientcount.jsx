import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./Clientcount.css";
import CountUp from 'react-countup';

function Timer() {
  

  return (

    <section class="section-counter">
<div class="container">
<div class="row">
<div class="col">
<div class="text">
  <CountUp 
  start={0}
  end={18}
  duration={15}
  />
<strong class="number" data-number="18">18</strong>
<span>Years of Experienced</span>
</div>   
<div class="text">
<strong class="number" data-number="100">100</strong>
<span>Menus/Dish</span>
</div>

<div class="text">
<strong class="number" data-number="50">50</strong>
<span>Staffs</span>
</div>


<div class="text">
<strong class="number" data-number="15000">15,000</strong>
<span>Happy Customers</span>
</div>

<div class="text1">
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
</div>
</div>
</div>
</div>
</section>
  );
  


}
export default Timer;
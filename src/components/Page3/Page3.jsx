import React from "react";
import "./Page3.css";
function Page3(props){

    return(

<section class="page3">
<div class="container">
<div class="row">
<div class="column">
<span class="subheading">{props.name}</span>
<h2 class="mainheading">{props.services}</h2>
</div>
</div>

</div>
</section>

    );
}
export default Page3;
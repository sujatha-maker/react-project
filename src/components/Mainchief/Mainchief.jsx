import React from "react";
import Chefprops from "../ChefProps/ChefProps";
import "./Mainchief.css";
import chief1 from "../Images/chef-1.jpg"
import chief2 from "../Images/chef-2.jpg"
import chief3 from "../Images/chef-3.jpg"
import chief4 from "../Images/chef-4.jpg"

function Mainchief(props){

return(

    <div className="mainchief">
    <Chefprops name="John Smooth" image={chief1} roll="Restaurant Owner"/>
       <Chefprops  name="Rebeca Welson" image={chief2} roll="Head Chef"/>
       <Chefprops  name="Kharl Branyt" image={chief3} roll="chief"/>
       <Chefprops  name="Luke Simon" image={chief4} roll="chief"/>

          </div>
);

}
export default Mainchief;
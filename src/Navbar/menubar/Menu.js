import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./menu.css"
const Menu=()=>{
    const sections=[
    {type:0, catagory:"MEN", route:"/mensection"},
    {type:1, catagory:"WOMEN", route:"/womensection"},
    {type:2, catagory:"ACCESSORIES",route:"/accessoriessection"}
    ];
    
    const[activeBtn,SetActivebtn]=useState(0);
return(
    <div>
        <div className='sectionscss'>
        {
        sections.map((obj,index)=>{
            return(
               <NavLink key={index} to={obj.route} onClick={()=>SetActivebtn(obj.type)}
               className={obj.type==activeBtn? "activenavbar": "normalnavbar"}>
                   {obj.catagory}
                   </NavLink>)} )
        }

        </div>

    </div>
)
}
export default Menu;

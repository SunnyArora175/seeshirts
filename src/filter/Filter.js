import React, { useState } from "react";
import "./filter.css"
const Filter=()=>{
    const headc=['gender' ,'catagory' ,'sizes' ,'color' ,'Brand' ,'neck']
    const subHeadc=[["women","men","unisex"],["t-shirt","vest","top"],["S","M","L"],["red","white","blue","black"],["bewakoof","cosmos","gonuts"],["round neck", "v-neck"]] 

    /*
    const[toggle,setToggle]=useState(-1);
        return(
            
        <div>
            <p>Filter</p>
            {
                
                headc.map((obj,i)=>{
                    return(
                    <div onClick={()=>(toggle === i)? setToggle(-1) :setToggle(i)}>
                    {obj}
                    {(toggle === i) ?subHeadc[toggle]:""}
                    </div>
                    )
                })
            }
        </div>
    )
    */

    
        const[toggle,setToggle]=useState([]);

        function insert(obj) {
            const arr = [...toggle]
            arr.push(obj)
            setToggle(arr)
        }
        function remove(index) {
            const arr = [...toggle]
            arr.splice(index, 1)
            setToggle(arr)
        }

        return(
            
        <div>
            <p>Filter</p>
            {
                
                headc.map((obj,i)=>{
                    const index = toggle.indexOf(obj)
                    console.log(index)
                    return(
                    <div onClick={()=>(index == -1)? insert(obj) : remove(index)}>
                    {obj}
                    {(index > -1) ?subHeadc[i]:""}
                    </div>
                    )
                })
            }
        </div>
    )

}

export default Filter;


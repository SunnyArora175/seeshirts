import React, { useState } from "react";
const Filter=()=>{
    const headc=[{type:0,filter:"gender",name:"women",name:"men",name:"unisex"},{type:1,filter:"catagory"},{type:2,filter:"sizes"},{type:3,filter:"color"},{type:4,filter:"Brand"},{type:5,filter:"neck"}]

    const subHeadc=[["women","men","unisex"],["t-shirt","vest","top"],["S","M","L"],["red","white","blue","black"],["bewakoof","cosmos","gonuts"],["round neck", "v-neck"]] 

    /*const subHeadc=[{name:"women",name:"men",name:"unisex"},{name:"t-shirt",name:"vest",name:"top"},{name:"S",name:"M",name:"L"},{name:"red",name:"white",name:"blue",name:"black"},{name:"bewakoof",name:"cosmos",name:"gonuts"},{name:"round neck",name: "v-neck"}] */


    const[toggle,SetTaggle]=useState();
    const[on,setOn]=useState(false)
        return(
        <div>
            {
                
                headc.map((obj,i)=>{
                    return(
                    <div onClick={()=>SetTaggle(obj.type)}>
                    {obj.filter}
                    {subHeadc[toggle]}
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Filter;


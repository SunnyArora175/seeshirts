import React from "react";
import "./blueprint.css"
import {useNavigate} from "react-router-dom";
const Blueprint=(props)=>{
  const navigate=useNavigate();
  return(
      <div className="cantainerclass">
      {
        props.data.map((obj,index)=>{
          return(
            <div onClick={()=>navigate(obj.route)}>
            <img src={obj.src} alt="bewkoof img"  height={props.height} width={props.width}
            style={props.imgStyle}/>
            <b><p style={styles.catStyle}>{obj.catagory}</p></b>
            </div>
          )
        })
      }
      </div>
  )
}

const styles = {
  catStyle: {
    fontSize:13,
    textAlign:"center"
  },
}

export default Blueprint;

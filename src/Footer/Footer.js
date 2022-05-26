import React from "react";
import footerdata from "./Footerapi";
import facebook from "../assets/facebook-BW.svg";
import instagram from "../assets/instagram.svg";
import pinterest from "../assets/pinterest.svg";
import snapchat from "../assets/snapchat.svg";
import apple from "../assets/apple.svg";
import twitter from "../assets/twitter.svg";
import {footerdata1} from "./Footerapi";
import "./Footer.css"

import "./Footer.css"
const Footer=()=>{

    return(
        <div className="mainfootercontainer">
        {
            footerdata.subhead.map((obj,index)=> {
              return (
                <div>
                <p className="heading">{footerdata.heads[index]}</p>
                  {
                    obj.map((item,ind)=> <div>{item.Name}</div>)
                  }
                </div>
              )
            })
        }
        <div>
            <p className="heading">CONNECT WITH US</p>
            <div className="container">
              <img src={facebook} alt="facebook img" height="20px" style={{ backgroundColor: '#fff'}} />
              <p style={{marginLeft:5}}>4.7M People Like this</p>
            </div>
            <div className="container">
              <img src={instagram} alt="facebook img" height="20px" />
              <p style={{marginLeft:5}}> 1M Followers</p>
            </div>
            <div className="svgscontainer">
              <img src={twitter} alt="facebook img"  />
              <img src={pinterest} alt="facebook img" />
              <img src={apple} alt="facebook img" height="20px" />
              <img src={snapchat} alt="facebook img" height="20px" />
            </div>
        </div>
        <div>
            <p className="heading">KEEP UP TO DATE</p>
            <input type="text" placeholder="Enter Email id" className="inputfooter"/>
            <button className="buttonfooter">SUBSCRIBE</button>
        </div>




    {/* { footerdata1.map((fobj1,i)=>{
            return(
        fobj1.footer1.allLinkTail.map((obj,index)=>{

            return(
            obj.map((item,ind)=>{return(<div>{item.Name}</div>)})

            )}))})} */}


    </div>
    )

}
export default Footer;

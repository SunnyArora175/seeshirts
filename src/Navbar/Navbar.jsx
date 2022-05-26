import React, {useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import "./Navbar.css"
import search from '../assets/search.svg';
import wishlist from '../assets/wishlist.svg';
import cart from '../assets/cart.svg';
import menudata from "./Menudata"


function Navbar(){
  const[subMenu,setSubmenu]=useState(null);
  const[dynamicMenu,setDynamicemenu]=useState();
  const navigate=useNavigate();
  return(
    <>
      <div className="cantainernavbar">
        <div className="menu-left">
          <h2 className="logo">Seashirts</h2>
          {
            menudata.map((link, index)=>{
              return (
                <NavLink key={index} to={link.route} onMouseOver={()=>setSubmenu(link.submenu)}
                >{link.name}</NavLink>
              )
            })
          }
        </div>
        <div className="menu-right">
          <div className="searchBar">
            <img src={search} height="18px"/>
            <input type="text" placeholder="Search by product, category or collection" />
          </div>
          <span className="divider">|</span>
          <button onClick={()=>navigate(`/login`)}>Login</button>
          <img src={wishlist} height="18px" className="btn" />
          <img src={cart} height="16px" className="btn" />
        </div>
      </div>
      {
        subMenu ?
          <>
          <div className="Navbar_backdrop" onMouseOver={()=>setSubmenu(null)}/>
          <div className="hovercontainer">
            {
               subMenu.data.map((obj, i)=>
                <div className="catagory_block">
                  <h4>{subMenu.names[i]}</h4>
                  {
                    obj.map((item, j)=> <div>{item.Name}</div>)
                  }
                </div>
                )
            }
          </div>

          </>
        :''

      }

    </>
  )
}

export default Navbar;

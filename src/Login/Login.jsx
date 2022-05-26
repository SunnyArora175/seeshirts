import React from "react";
import "./Login.css"
import mail from '../assets/mail.svg';
import facebook from '../assets/facebook.svg';
import google from '../assets/google.svg';
const Login=()=>{
    return(
    <div className="main_login_container">
      <div className="block">
          <h1>Welcome to World of Bewakoof!</h1>
          <img src="https://images.bewakoof.com/web/group-19-1617704502.png" alt="login_welcome"/>
      </div>
      <div className="block">
          <h1>Log in/Sign up</h1>
          <p className="">for Latest trends, exciting offers and everything Bewakoof!</p>
          <div className="Login_searchbar">
              <input type="text" placeholder="Enter Mobile Number"/>
          </div>
          <br/>
              <button className="Bclass" type="submit">CONTINUE</button>
          <div className="hrclass">
             <span><hr/>OR<hr/></span>
          </div>
          <div className="emailcontainerclass">
            <img src={mail} alt="mail" height="18px" className="svgcontainerclass"/>
            <button className="Emailclass">CONTINUE WITH EMAIL</button>
          </div>
          <div className="GFcontainerclass">
            <div className="GOOGLEcontainerclass">
              <img src={google} alt="mail" height="18px" className="svgcontainerclass"/>
              <button className="GOOGLEclass">GOOGLE</button>
            </div>
            <div className="FACEBOOKcontainerclass">
              <img src={facebook} alt="mail" height="18px" className="svgcontainerclass"/>
              <button className="FACEBOOKclass">FACEBOOK</button>
            </div>
          </div>
      </div>
    </div>
    )
}
export default Login;

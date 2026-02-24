import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  //Here just we created a login logout button With useState 
  const [btnName, setBtnName] = useState("Login");
  //this is justbasic buttonwhich text get changed which user clicks its. this is not a real Auth funtional button
  // TODO Const why??
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="image" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>cart</li>
          <li>
            <button className="auth-button" onClick={() => {
              //Condition to change text
              if(btnName === "Login"){
                setBtnName("Logout")
              }else{
                setBtnName("Login")
              }
            }}>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
{
  /* //!  part-4.3 importing Link */
}
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  console.log("Header Render");
  //! ==> part 1 use Effect
  useEffect(() => {
    console.log("UseEffect Called");
  });
  //dependency array//=> not mandatory
  //useEffect get called after every render but we can change behaviour of it by dependency array
  //if no depArr passed as an arg  ==> useEffect is called on evry render even click on login/logout button
  //if empty depArray is passed as arg ==> useEffect is called only on First Render
  //? what can we have as dependencies ==> state variables
  //if depArray is passed havinf dep eg [btnName] then useEffect is called when dep changes i.e when button is clicked

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="image" />
      </div>

      <div className="nav-items">
        {/* //!  part-4.3 */}
        <ul>
          <li>
            
           <Link to="/" >Home</Link>

          </li>
          <li>

            {/* //? we should not use this achor tag as it will readload whole page which is not fast */}
            <a href="/about">About Us</a>

          </li>
          <li>

            {/* 
            //? we should use 'Link' Provideed by react which is cool and reload only specific component
            //? link work same as anchor
             */}
            <Link to="/contact">Contact Us</Link>

          </li>
          <li>cart</li>
          <li>
            <button
              className="auth-button"
              onClick={() => {
                if (btnName === "Login") {
                  setBtnName("Logout");
                } else {
                  setBtnName("Login");
                }
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

//creating react Emeent from core whixh is not dev friendly , reduce redabily
const heading = React.createElement("h1" , {id:"heading"} , "Hello World By Aryan")
// JSX => HTML-like or XML-like
console.log(heading);

//creating react element by jsx
//which make our life simpler
const jsxheading = <h1 id="heading">Hello World By Aryan</h1>; //this piece of code written is JSX
//here attributes are passed in camel case eg clasName , tabIndex which prove jsx is not html
console.log(jsxheading);
//this is same as heading

const text = (<div>
    <div>Here we can Also Add Any javascript by using Curly braces</div>
    {100+200}
    {console.log("hello there")}
    {console.log(jsxheading)}
</div>)


const root = ReactDOM.createRoot(document.querySelector("#root"));

//now instead of heading we will simply render jsxheading
root.render(jsxheading);

//from now on we will never be using react Element

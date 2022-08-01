import React from "react"; 
import Logo from "./logo.svg";

export default function Navigation(){
    return(
        <div className="navigation">
            <img src={Logo} alt ="Logo"></img>
        </div>
    );
}
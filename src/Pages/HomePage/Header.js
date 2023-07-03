import React from "react";
import './HomePage.css';
import LeftHeader from "./LeftHeader";
import logo from '../../Data/header-art.jpg'

function Header() {

    return (
        <div className="header-container">

            <div class="header-left">
                <LeftHeader/>
            </div>

            <div className="header-right">
                <img src={logo}></img>
            </div>

        </div>
    )
}

export default Header;
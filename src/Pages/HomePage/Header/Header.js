import React from "react";
import '../HomePage.css';
import './Header.css';
import LeftHeader from "../LeftHeader";
import HeaderCarousel from "./HeaderCarousel/HeaderCarousel";

function Header(props) {
    const {data} = props;

    return (
        <div className="header-container">

            <div className="header-description">
                <LeftHeader/>
            </div>

            <div className="header-carousel">
                <HeaderCarousel projects={data}/>
            </div>

        </div>
    )
}

export default Header;
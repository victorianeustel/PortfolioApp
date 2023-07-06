import React from "react";
// import '../../HomePage.css';
import '../HomePage.css';
import './Style.css';
import LeftHeader from "../LeftHeader";
import HeaderCarousel from "./HeaderCarousel/HeaderCarousel";
// import LeftHeader from "../LeftHeader";
// import logo from '../../Data/header-art.jpg'

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
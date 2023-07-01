import React from "react";
import '../../childpage.css';
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import logo from '../../../../data/Mexico41.jpg'


function DetailHeader() {

    return (
        <div class="details-title">
            <div className="home-bar">
                <ArrowLeftIcon id="larrow" /> 
                <div>index</div>
            </div>
            <div className="page-title">Victoria Neustel</div>
            <img className = "header-image" src={logo}/>
        </div>
    )
}

export default DetailHeader;
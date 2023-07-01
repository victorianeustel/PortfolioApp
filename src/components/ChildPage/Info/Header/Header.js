import React from "react";
import '../../childpage.css';
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { about } from "../../../../data/data";
import { useNavigate } from "react-router-dom";

function DetailHeader() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }
    return (
        <div class="details-title">
            <div onClick={routeChange} className="home-bar">
                <ArrowLeftIcon id="larrow" /> 
                <div>index</div>
            </div>
            <div className="page-title">Victoria Neustel</div>
            <img className = "header-image" src={about.about.image}/>
        </div>
    )
}

export default DetailHeader;
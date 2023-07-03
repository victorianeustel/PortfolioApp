import React from "react";
import { useNavigate } from "react-router-dom";

import { about } from "../../../../Data/data";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

import '../../childpage.css';

function DetailHeader(props) {
    const {item} = props;

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }
    return (
        <div className="details-title">

            <div onClick={routeChange} className="home-bar">
                <ArrowLeftIcon id="larrow" />
                <div>index</div>
            </div>

            <div className="page-title">{item.name}</div>

            <img className="header-image" src={item.images[0].link} alt={about.images[0].description}/>
            
        </div>
    )
}

export default DetailHeader;
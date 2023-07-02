import React from "react";
import '../../childpage.css';
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { about } from "../../../../data/data";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../../ProjectContext";
import { useContext } from "react";

function DetailHeader() {
    const item = useContext(ProjectContext);

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
            <img className="header-image" src={about.images[0].link} />
        </div>
    )
}

export default DetailHeader;
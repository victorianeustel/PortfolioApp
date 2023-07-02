import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './childpage.css';
import logo from '../../data/Mexico41.jpg';
import InfoPage from "./Info/Info";
import { data, about } from "../../data/data";
import DetailHeader from "./Info/Header/Header";
import Details from "./Info/Details/details";
import NotFound from "../Navigation/notfound";
import Carousel from "./Media/Carousel/carousel";
import { ProjectContext } from "./ProjectContext";

import useDocumentTitle from "../../actions/useDocumentTitle";

function handleClick() {
    const gitLink = 'https://github.com/victorianeustel';
    window.location.replace(gitLink);
}

function ChildPage() {
    const { id } = useParams();

    if (data[id] == null) {
        return <NotFound></NotFound>
    }
    return (
        // <ProjectContext.Provider
        //     value={data[id]}
        // >

            <div className={`flex-container ${data[id].id}`}>
                <div class="leftside">

                    <InfoPage item={data[id]} />

                </div>
                <div className="rightside">

                    <Carousel images={data[id].images}></Carousel>

                </div>
            </div>

        // </ProjectContext.Provider>
    )
}

export default ChildPage;
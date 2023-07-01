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

import useDocumentTitle from "../../actions/useDocumentTitle";

function About() {

    console.log(about.images);
    return (
        <div className={`flex-container ${about.id}`}>
            <div class="leftside">
                <InfoPage item={about} />

            </div>
            <div className="rightside">
                <Carousel images={about.images}></Carousel>
            </div>
        </div>
    )
}

export default About;
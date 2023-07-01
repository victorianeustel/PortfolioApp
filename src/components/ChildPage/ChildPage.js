import React from "react";
import {useNavigate } from "react-router-dom";
import './childpage.css';
import logo from '../../data/Mexico41.jpg';
import InfoPage from "./Info/Info";
import { data, about } from "../../data/data";


import useDocumentTitle from "../../actions/useDocumentTitle";

function ChildPage() {
    useDocumentTitle('About - Victoria Neustel')

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }

    return (
        <div class="flex-container">
            <div class="leftside">
                <InfoPage />
            </div>
            <div class="rightside">
                {/* <div className="image-container"> */}
                <img src={about.about.image} alt="Logo" />

                {/* </div> */}
            </div>
        </div>
    )
}

export default ChildPage;
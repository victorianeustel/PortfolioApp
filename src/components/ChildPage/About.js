import React from "react";
import './childpage.css';
import InfoPage from "./Info/Info";
import { about } from "../../data/data";
import Carousel from "./Media/carousel";

import useDocumentTitle from "../../actions/useDocumentTitle";
import { ProjectContext } from "./ProjectContext";

function About() {
    useDocumentTitle( 'About - Victoria Neustel');

    return (
        <ProjectContext.Provider
            value={about}
        >

            <div className={`flex-container ${about.id}`}>
                <div class="leftside">

                    <InfoPage />

                </div>
                <div className="rightside">

                    <Carousel />

                </div>
            </div>

         </ProjectContext.Provider>
    )
}

export default About;
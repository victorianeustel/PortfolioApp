import React from "react";
import '../ChildPage/childpage.css'
import InfoPage from "../ChildPage/Info/Info";
import { about } from "../../Data/data";
import Carousel from "../ChildPage/Carousel/carousel";

import useDocumentTitle from "../../Actions/useDocumentTitle";
import { ProjectContext } from "../ChildPage/ProjectContext";

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
import React from "react";
import { useParams } from "react-router-dom";
import './childpage.css';
import InfoPage from "./Info/Info";
import { data } from "../../data/data";
import NotFound from "../Navigation/notfound";
import Carousel from "./Media/carousel";
import { ProjectContext } from "./ProjectContext";

import useDocumentTitle from "../../actions/useDocumentTitle";

function ChildPage() {
    const { id } = useParams();
    useDocumentTitle( data[id].name + ' - Victoria Neustel');

    if (data[id] == null) {
        return <NotFound></NotFound>
    }


    return (
        <ProjectContext.Provider
            value={data[id]}
        >

            <div className={`flex-container ${data[id].id}`}>
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

export default ChildPage;
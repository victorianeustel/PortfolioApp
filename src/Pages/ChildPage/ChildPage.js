import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Data/data";
import { ProjectContext } from "./ProjectContext";

import NotFound from "../NotFound/notfound";
import Carousel from "./Carousel/carousel";
import InfoPage from "./Info/Info";

import './childpage.css';
import '../../Styles/global.css';

import useDocumentTitle from "../../Actions/useDocumentTitle";

function ChildPage() {
    const { id } = useParams();
    useDocumentTitle(data[id].name + ' - Victoria Neustel');

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
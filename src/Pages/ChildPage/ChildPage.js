import React from "react";
import { useParams } from "react-router-dom";

import InfoPage from "./Info/Info";
import Loader from "../LoaderPage/Loader";
// import cacheImages from "../../Actions/cacheImages";
import ImageSlider from "./Carousel/Carousel";

import FetchData from "../../Database/Database";

import './childpage.css';
import '../../Styles/global.css';

import useDocumentTitle from "../../Actions/useDocumentTitle";

function ChildPage() {
    const { id, name } = useParams();

    useDocumentTitle(name + ' - Victoria Neustel');

    const data = FetchData(`data/${id}`);

    if (data == null){
        return <Loader />
    }

    return (
            <div className={`flex-container ${data.id}`}>
                <div class="leftside">

                    <InfoPage item={data} />

                </div>

                <div className="rightside">

                    <ImageSlider images={data.images}/>

                </div>
            </div>

        )
}

export default ChildPage;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Data/data";

import NotFound from "../NotFound/notfound";
import InfoPage from "./Info/Info";
import Loader from "../LoaderPage/Loader";
import cacheImages from "../../Actions/cacheImages";
import ImageSlider from "./Carousel/carousel";

import './childpage.css';
import '../../Styles/global.css';

import useDocumentTitle from "../../Actions/useDocumentTitle";

function ChildPage() {
    const { id } = useParams();

    const [isLoaded, setIsLoaded] = useState(false);

    useDocumentTitle(data[id].name + ' - Victoria Neustel');

    useEffect(() => {
        let imgsArr = [];
        data[id].images.map(({ link, description }) => {
            return (
                imgsArr.push(link))
        })

        cacheImages(imgsArr, setIsLoaded);
    }, []);


    if (data[id] == null) {
        return <NotFound></NotFound>
    }

    if (!isLoaded) {
        return (
            <Loader />
        )
    }

    else {
        return (


            <div className={`flex-container ${data[id].id}`}>
                <div class="leftside">

                    <InfoPage item={data[id]} />

                </div>
                <div className="rightside">

                    <ImageSlider images={data[id].images} />

                </div>
            </div>

        )
    }
}

export default ChildPage;
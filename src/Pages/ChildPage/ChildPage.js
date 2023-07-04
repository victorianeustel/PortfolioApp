import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import NotFound from "../NotFound/notfound";
import InfoPage from "./Info/Info";
import Loader from "../LoaderPage/Loader";
import cacheImages from "../../Actions/cacheImages";
import ImageSlider from "./Carousel/carousel";

import { db } from "../../Database/storageConfig";
import { ref, get } from "firebase/database";

import './childpage.css';
import '../../Styles/global.css';

import useDocumentTitle from "../../Actions/useDocumentTitle";

function ChildPage() {
    const { id, name } = useParams();

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isImagesLoaded, setIsImagesLoaded] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    // const [showFullscreen, setShowFullscreen] = useState(false);

    useDocumentTitle(name + ' - Victoria Neustel');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const snapshot = await get(ref(db, 'data/' + id));
                const aboutVal = await snapshot.val();

                setData(aboutVal);
                setIsDataLoaded(true);
            }
            catch (e) {
                return (
                    <NotFound />
                )
            }
        }

        fetchData();

    }, [])

    useEffect(() => {
        if (isDataLoaded) {
            let imgsArr = [];
            data.images.map(({ link, description }) => {
                return (
                    imgsArr.push(link))
            })
            cacheImages(imgsArr, setIsImagesLoaded);
        }
    }, [isDataLoaded]);

    if (error != null) {
        return <NotFound></NotFound>
    }

    else if (!isDataLoaded || !isImagesLoaded
    ) {
        return (
            <Loader />
        )
    }

    else {
        return (


            <div className={`flex-container ${data.id}`}>
                <div class="leftside">

                    <InfoPage item={data} />

                </div>

                <div className="rightside">

                    <ImageSlider images={data.images} 
                    // setShowFullscreen={setShowFullscreen} 
                    />

                </div>
            </div>

        )
    }
}

export default ChildPage;
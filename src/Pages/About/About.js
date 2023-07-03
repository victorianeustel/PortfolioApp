import React from "react";
import '../ChildPage/childpage.css'
import InfoPage from "../ChildPage/Info/Info";
import Carousel from "../ChildPage/Carousel/carousel";
import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../Database/storageConfig";
import Loader from "../LoaderPage/Loader";

import useDocumentTitle from "../../Actions/useDocumentTitle";

function About() {
    useDocumentTitle('About - Victoria Neustel');
    const [about, setAbout] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchAbout = async () => {

            const snapshot = await get(ref(db, 'about'));
            const aboutVal = await snapshot.val();

            setAbout(aboutVal);
            setIsLoaded(true);
        }

        fetchAbout();
    }, [])

    if (!isLoaded) {
        return (
            <Loader />
        )
    }
    
    return (

        <div className={`flex-container ${about.id}`}>
            <div class="leftside">

                <InfoPage item={about}/>

            </div>
            <div className="rightside">

                <Carousel images={about.images}/>

            </div>
        </div>

    )
}

export default About;
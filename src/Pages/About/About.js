import React from "react";

import InfoPage from "../ChildPage/Info/Info";
import Carousel from "../ChildPage/Carousel/Carousel";
import Loader from "../LoaderPage/Loader";

import FetchData from "../../Database/Database";
import useDocumentTitle from "../../Actions/useDocumentTitle";

import '../ChildPage/childpage.css'

function About() {
    useDocumentTitle('About - Victoria Neustel');

    const about = FetchData(`about`);

    if (about == null){
        return <Loader />
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
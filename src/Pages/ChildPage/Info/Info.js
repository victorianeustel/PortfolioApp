import React from "react";
import '../childpage.css';
import Details from "./Details/Details";
import DetailHeader from "./Header/Header";

function InfoPage() {

    return (
        <div className="details-container">

            <DetailHeader />
            <Details />
            
        </div>
    )
}

export default InfoPage;
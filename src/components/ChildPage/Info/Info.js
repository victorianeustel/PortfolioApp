import React from "react";
import '../childpage.css';
import Details from "./Details/details";
import DetailHeader from "./Header/Header";

function InfoPage(props) {
    const {item} = props;

    return (
        <div className="details-container">
            <DetailHeader item={item}/>
            <Details item={item}/>
        </div>
    )
}

export default InfoPage;
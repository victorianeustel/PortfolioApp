import React from "react";
import '../../childpage.css';
import InfoTable from "./InfoTable";
import SocialBar from "./SocialBar";
import { about } from "../../../../data/data";

function Details() {

    return (
        <div className="child-details">
            <SocialBar />
            <InfoTable />
            <div className="description-box">
{about.about.description}            </div>
        </div>
    )
}

export default Details;
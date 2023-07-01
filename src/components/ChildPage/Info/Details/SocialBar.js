import React from "react";
import '../../childpage.css';
import InfoTable from "./InfoTable";

function Details() {

    return (
        <div id="social-bar">
            <img src={email} onClick={handleEmailClick} />
            <img src={github} onClick={handleGitClick} />
            <img src={linkedin} onClick={handleLinkedin} />
        </div>
    )
}

export default Details;


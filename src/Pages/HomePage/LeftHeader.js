import React from "react";
import './HomePage.css'
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { about } from "../../Data/data";


function LeftHeader() {

    return (
        <>
            <div className="intro-description">
                {about.introDescription}
            </div>
            <div className="nav-list">
                <a href="about">
                    <ArrowRightIcon id="rarrow" />
                    <div>
                        About
                    </div>
                </a>
                <a href="mailto:victoria.neustel@outlook.com">
                    <ArrowRightIcon id="rarrow" />
                    <div>
                        Contact
                    </div>
                </a>
            </div>
        </>
    )
}

export default LeftHeader;
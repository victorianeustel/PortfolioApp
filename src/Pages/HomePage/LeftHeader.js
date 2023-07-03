import React from "react";
import './HomePage.css'
import { ArrowRightIcon } from "@radix-ui/react-icons";

function LeftHeader() {

    return (
        <>

            <div className="intro-description">
            Victoria Neustel is a software developer who recently graduated with a Bachelor of Science degree in Computer Science. With a passion for both technology and creativity, they have developed a diverse range of interests and hobbies that provide a unique approach to software development.
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
import React from "react";
import './HomePage.css'
import '../../Styles/global.css'
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { downloadPDF } from "../../Actions/downloadPDF";

function LeftHeader() {

    return (
        <div className="left-header">

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
                <div onClick={downloadPDF}>
                    <ArrowRightIcon id="rarrow" />
                    <div>
                        Resume
                    </div>
                </div>

                <a href="mailto:victoria.neustel@outlook.com">
                    <ArrowRightIcon id="rarrow" />
                    <div>
                        Contact
                    </div>
                </a>

            </div>

        </div>
    )
}

export default LeftHeader;
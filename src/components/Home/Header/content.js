import React from "react";
import '../../../styles/global.css';
import logo from '../../../data/Mexico41.jpg';
import './content.css';
import { ArrowRightIcon } from "@radix-ui/react-icons";
function Content() {
    const handleContactClick = () => {
        const mailLink = 'mailto:victoria.neustel@outlook.com';
        window.location.replace(mailLink);
    };
    return (
        <div id="content">
            <div id="intro">
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet lacinia molestie. Vivamus iaculis, lectus a aliquam ultricies, velit lacus dapibus lectus, eu congue nibh diam quis urna. Suspendisse magna ante, sollicitudin in sapien id, placerat aliquam velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. */}
                <b>Victoria Neustel</b> is a talented and enthusiastic individual who recently graduated from North Dakota State University with a Bachelor of Science degree in Computer Science.
                With a passion for both technology and creativity, they have developed a diverse range of interests and hobbies.
                With their diverse range of interests and their dedication to computer science, Victoria is excited to join a team to make a significant impact in the world of technology and beyond.
                <div className="navList">
                    <a href="about">
                        {/* &rarr; */}
                        <ArrowRightIcon id="rarrow" />
                        <div>
                            About
                        </div>
                    </a>

                    {/* <a href="links">
                        <ArrowRightIcon id="rarrow" />
                        <div>
                            Links
                        </div>
                    </a> */}
                    {/* <a href="links">
                        <ArrowRightIcon id="rarrow" />
                        <div>
                            Reviews
                        </div>
                    </a> */}
                    <a onClick={handleContactClick}>
                        <ArrowRightIcon id="rarrow" />
                        <div>
                            Contact
                        </div>
                    </a>
                </div>
            </div>
            <div id="picture">
                <img src={logo} alt="Logo" />
            </div>
        </div>
    )
}

export default Content;
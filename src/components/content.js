import React from "react";
import '../styles/global.css';
import logo from '../data/Mexico41.jpg';
import '../styles/content.css';

function Content() {

    return (
        <div id="content">
            <div id="intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet lacinia molestie. Vivamus iaculis, lectus a aliquam ultricies, velit lacus dapibus lectus, eu congue nibh diam quis urna. Suspendisse magna ante, sollicitudin in sapien id, placerat aliquam velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                <div className="navList">
                    <a href="url">
                        &rarr;
                        <div>
                            About
                        </div>
                    </a>
                    <a href="url">
                        &rarr; 
                        <div>
                            Contact
                        </div>
                    </a>
                    <a href="url">
                        &rarr; 
                        <div>
                            Links
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
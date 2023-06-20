import React from "react";
import '../styles/global.css';
import logo from '../data/Mexico41.jpg';
import '../styles/content.css';

function Content() {

    return (
        <div id="content">
            <div id="intro">
                {/* <div id="text"> */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet lacinia molestie. Vivamus iaculis, lectus a aliquam ultricies, velit lacus dapibus lectus, eu congue nibh diam quis urna. Suspendisse magna ante, sollicitudin in sapien id, placerat aliquam velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                {/* </div> */}
                <div className="navList">
                    <div>
                        &rarr;
                        <a href="url">
                            About
                        </a>
                    </div>
                    <div>
                        &rarr;
                        <a href="url">
                            Contact
                        </a>
                    </div>
                    <div>
                        &rarr;
                        <a href="url">
                            Links
                        </a>
                    </div>
                </div>
            </div>
            <div id="picture">
                <img src={logo} alt="Logo" />
            </div>
        </div>
    )
}

export default Content;
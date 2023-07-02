import React from "react";

import email from '../../../../Assets/Icons/emaillogo.png'
import github from '../../../../Assets/Icons/githublogo.png'
import linkedin from '../../../../Assets/Icons/linkedinlogo.png'
import openInNewTab from "../../../../Actions/openInNewTab";

import '../../childpage.css';

function SocialBar({ git, repolink, linked, mail }) {

    return (
        <div className="social-bar">

            {mail ?
                    <img
                        src={email}
                        onClick={() => openInNewTab('mailto:victoria.neustel@outlook.com')}
                        alt="Email Contact Icon"
                    />
                    :
                    <></>
            }

            {git ?
                    <img
                        src={github}
                        onClick={() => openInNewTab(repolink)}
                        alt="GitHub Logo Icon" />
                    :
                    <></>
            }

            {linked ?
                    <img
                        src={linkedin}
                        onClick={() => openInNewTab('https://www.linkedin.com/in/victoria-neustel/')}
                        alt="LinkedIn Logo Icon"
                    />
                    :
                    <></>
            }
        </div>
    )
}

export default SocialBar;


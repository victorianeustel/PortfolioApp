import React, { useEffect } from "react";
import '../../childpage.css';
import email from '../../../../assets/emaillogo.png'
import github from '../../../../assets/githublogo.png'
import linkedin from '../../../../assets/linkedinlogo.png'

function SocialBar({ git, repolink, linked, mail }) {

    const handleGitClick = () => {
        window.location.replace(repolink);
    };

    const handleLinkedin = () => {
        const linkedLink = 'https://www.linkedin.com/in/victoria-neustel/';
        window.location.replace(linkedLink);
    };
    const handleEmailClick = () => {
        const linkedLink = 'mailto:victoria.neustel@outlook.com';
        window.location.replace(linkedLink);
    };
    return (
        <div className="social-bar">
            {
                mail ?
                    <img src={email} onClick={handleEmailClick} />
                    :
                    <></>
            }
            {
                git ?
                    <img src={github} onClick={handleGitClick} />
                    :
                    <></>
            }
            {
                linked ?
                    <img src={linkedin} onClick={handleLinkedin} />
                    :
                    <></>
            }

        </div>
    )
}

export default SocialBar;


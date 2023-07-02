import React from "react";
import '../../childpage.css';
import email from '../../../../assets/emaillogo.png'
import github from '../../../../assets/githublogo.png'
import linkedin from '../../../../assets/linkedinlogo.png'

function SocialBar({ git, repolink, linked, mail }) {

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

    return (
        <div className="social-bar">
            {
                mail ?
                    <img src={email} onClick={() => openInNewTab('mailto:victoria.neustel@outlook.com')} />
                    :
                    <></>
            }
            {
                git ?
                    <img src={github} onClick={() => openInNewTab(repolink)} />
                    :
                    <></>
            }
            {
                linked ?
                    <img src={linkedin} onClick={() => openInNewTab('https://www.linkedin.com/in/victoria-neustel/')} />
                    :
                    <></>
            }

        </div>
    )
}

export default SocialBar;


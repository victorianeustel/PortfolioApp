import React from "react";
import '../../childpage.css';
import email from '../../../../assets/emaillogo.png'
import github from '../../../../assets/githublogo.png'
import linkedin from '../../../../assets/linkedinlogo.png'

function SocialBar() {

    const handleGitClick = () => {
        const gitLink = 'https://github.com/victorianeustel';
        window.location.replace(gitLink);
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
            <img src={email} onClick={handleEmailClick} />
            <img src={github}  onClick={handleGitClick} />
            <img src={linkedin}  onClick={handleLinkedin}/>
        </div>
    )
}

export default SocialBar;


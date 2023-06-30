import React from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { data, about } from "../../data/data";
import '../../styles/global.css'
import style from '../../styles/childPage.css';
import { ArrowLeftIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import github from '../../assets/githublogo.png'
import linkedin from '../../assets/linkedinlogo.png'
import email from '../../assets/emaillogo.png'
import useDocumentTitle from "../../actions/useDocumentTitle";

function handleClicking(link) {
    window.location.replace(link);
}

function About() {
    useDocumentTitle('About - Victoria Neustel')

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Resume_VNeustel.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }

    const handleGitClick = () => {
        const gitLink = 'https://github.com/victorianeustel';
        window.location.replace(gitLink);
    };

    const handleLinkedin = () => {
        const linkedLink = 'https://www.linkedin.com/in/victoria-neustel/';
        window.location.replace(linkedLink);
    };
    const handleEmailClick = () => {
        const linkedLink = 'https://www.linkedin.com/in/victoria-neustel/';
        window.location.replace(linkedLink);
    };
    return (
        <div className="detailscontainer about" style={style}>
            <div id="details">
                <div onClick={routeChange} id="indexButton">
                    <ArrowLeftIcon id="larrow" /> index
                </div>
                <div id="title">
                    Victoria Neustel
                </div>
                {/* <div id="download" onClick={onButtonClick}> <ArrowDownIcon /> Resume</div> */}
                <div id="social-links">
                    <img src={email} onClick={handleEmailClick} />
                    <img src={github} onClick={handleGitClick} />
                    <img src={linkedin} onClick={handleLinkedin} />
                </div>
                <table id="infoTable">
                    <tbody>
                        <tr>
                            <td>Location</td>
                            <td>Fargo, ND</td>
                        </tr>
                        <tr>
                            <td>Education</td>
                            <td>Computer Science, B.S. <br /> North Dakota State University</td>
                        </tr>
                        <tr>
                            <td>Achievements</td>
                            <td>Magna Cum Laude (3.73 / 4.00 GPA)</td>
                        </tr>
                    </tbody>
                </table>
                <div id="description">
                    Victoria Neustel is a talented and enthusiastic individual who recently graduated from North Dakota State University with a Bachelor of Science degree in Computer Science. With a passion for both technology and creativity, they have developed a diverse range of interests and hobbies. Outside of their academic pursuits and professional endeavors, Victoria finds joy in various activities that fuel their creative spirit. They have a keen interest in shooting and developing film photography, allowing them to capture unique moments and express their artistic vision. Additionally, Victoria has a knack for building electronics, utilizing their technical skills to bring ideas to life. They thrive on developing personal projects, using their expertise to create innovative solutions and explore new horizons. In their leisure time, [Your Name] cherishes moments spent with their beloved feline companions, as they find solace and happiness in their company. With their diverse range of interests and their dedication to computer science, Victoria Neustel is poised to make a significant impact in the world of technology and beyond.
                </div>
            </div>
            <div id="image-sidebar">
                <div className="carousel">
                    <img src={about.about.image} alt="Logo" id="single-image" />
                </div>
            </div>
        </div>
    )
}

export default About;
import React from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { data, about } from "../../data/data";
import NotFound from "./notfound";
import '../../styles/global.css'
import style from '../../styles/childPage.css';
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import logo from '../../data/VLN_Germany_053.jpg';


function About() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }

    return (
        <div className="detailscontainer about" style={style}>
            <div id="details">
                <div onClick={routeChange} id="indexButton">
                    <ArrowLeftIcon id="larrow" /> index
                </div>
                <div id="title">
                    About Victoria Neustel
                </div>
                <table id="infoTable">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Victoria Neustel</td>
                        </tr>
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
                    <img src={about.about.image} alt="Logo" id="page-image" />
                </div>
            </div>
        </div>
    )
}

export default About;
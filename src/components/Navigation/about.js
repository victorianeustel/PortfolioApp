import React from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { data } from "../../data/data";
import NotFound from "./notfound";
import '../../styles/global.css'
import style from './style.css';
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import logo from '../../data/VLN_Germany_053.jpg';


function About() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }

    return (
        <div className="detailscontainer" style={style}>
            <div id="details">
                <div onClick={routeChange} id="indexButton">
                    <ArrowLeftIcon id="larrow" /> index
                </div>
                <div id="title">
                    About
                </div>
                <table id="infoTable">
                    <tbody>
                        <tr>
                            <td>Type</td>
                            <td>type</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>location</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>date</td>
                        </tr>
                    </tbody>
                </table>
                <div id="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta nibh venenatis cras sed felis eget velit aliquet. Lorem mollis aliquam ut porttitor leo a diam. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Ultricies leo integer malesuada nunc vel risus commodo viverra. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Est velit egestas dui id ornare arcu odio. Facilisis gravida neque convallis a cras semper. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Varius morbi enim nunc faucibus a. Massa tincidunt nunc pulvinar sapien. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Velit egestas dui id ornare arcu odio ut sem nulla. Vitae turpis massa sed elementum tempus egestas sed sed risus. Consequat semper viverra nam libero justo laoreet sit.
                </div>
            </div>
            <div id="images">
                <img src={logo} alt="Logo" />
            </div>
        </div>
    )
}

export default About;
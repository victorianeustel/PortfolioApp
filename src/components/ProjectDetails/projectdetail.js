import React from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { data } from "../../data/data";

import NotFound from "../Navigation/notfound";
import '../../styles/global.css'
import style from '../../styles/childPage.css'
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Carousel from "./Carousel/carousel";
import useDocumentTitle from "../../actions/useDocumentTitle";


function ProjectDetail() {
    const { id } = useParams();

    useDocumentTitle( data[id].name + ' - Victoria Neustel')


    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/';
        navigate(path);
    }

    if (data[id] == null) {
        return <NotFound></NotFound>
    }
    const handleClick = () => {
        window.location.replace(data[id].repo);
    };


    return (
        <div className={`detailscontainer ${data[id].id}`} style={style}>
            <div id="details">
                <div onClick={routeChange} id="indexButton">
                    <ArrowLeftIcon id="larrow" /> index
                </div>
                <div id="title">
                    {data[id].name}
                </div>
                <table id="infoTable">
                    <tbody>
                        <tr>
                            <td>Type</td>
                            <td>{data[id].type}</td>
                        </tr>
                        <tr>
                            <td>Client</td>
                            <td>{data[id].client}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>{data[id].date}</td>
                        </tr>
                        <tr>
                            <td>Technology</td>
                            <td>{data[id].technology.join(", ")}</td>
                        </tr>
                        {data[id].repo != null ?
                            <tr>
                                <td>Repo</td>
                                <td id="repo-link" onClick={handleClick}>{data[id].repo.substring(0, 30) + "..."}</td>
                            </tr>
                            :
                            <></>}

                    </tbody>
                </table>
                <div id="description">
                    {data[id].description === "" || null ? 'No description available' : data[id].description}
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta nibh venenatis cras sed felis eget velit aliquet. Lorem mollis aliquam ut porttitor leo a diam. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Ultricies leo integer malesuada nunc vel risus commodo viverra. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Est velit egestas dui id ornare arcu odio. Facilisis gravida neque convallis a cras semper. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Varius morbi enim nunc faucibus a. Massa tincidunt nunc pulvinar sapien. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Velit egestas dui id ornare arcu odio ut sem nulla. Vitae turpis massa sed elementum tempus egestas sed sed risus. Consequat semper viverra nam libero justo laoreet sit. */}
                </div>
            </div>
            <div id="image-sidebar">
                {/* {data[id].images.length === 1 ?
                    <div id="single-image">
                        <img src={data[id].images[0].link} alt={data[id].images[0].description} />
                        <div id="description"> {data[id].images[0].description}</div>
                    </div>
                    : */}
                    <Carousel className="image-carousel" dataID={id} />
                {/* } */}
            </div>
        </div>
    )
}

export default ProjectDetail;
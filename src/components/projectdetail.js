import React from "react";
import '../styles/global.css'
import { Container, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { data } from "../data/data";

function ProjectDetail() {
    // let project = props.project; 
    const location = useLocation();
    const project = data[location.state.key];

    return (
        <>
            <div>
                {project.date}
            </div>
            <div>
                {project.name}
            </div>
            <div>
                {project.location}

            </div>
            <div>
                {project.type}

            </div>
        </>
    )
}

export default ProjectDetail;
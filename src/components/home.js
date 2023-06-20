import React from "react";
import { Container } from "react-bootstrap";
import ProjectTable from "./table";
import '../styles/global.css'
import Content from "./content";

const Home = () => {
    return (
        <div className="container">
            {/* <NavBar></NavBar> */}
            <Content></Content>
            <ProjectTable id="dataTable"></ProjectTable>
        </div>
    )
}

export default Home;
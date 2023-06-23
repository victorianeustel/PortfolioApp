import React from "react";
import { Container } from "react-bootstrap";
import ProjectTable from "./Table/table";
import '../../styles/global.css'
import Content from "./Header/content";

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
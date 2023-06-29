import React from "react";
import ProjectTable from "./Table/table";
import '../../styles/global.css'
import Content from "./Header/content";

const Home = () => {
    return (
        <div className="container">
            <Content></Content>
            <ProjectTable></ProjectTable>
        </div>
    )
}

export default Home;
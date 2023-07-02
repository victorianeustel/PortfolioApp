import React from "react";
import './HomePage.css'
import ProjectTable from "./ProjectTable.js";
import Header from "./Header.js";


function HomePage() {

    return (
        <div className="home-container">
            <div class="top">
                <Header />
            </div>
            <div className="bottom">
                <ProjectTable />
            </div>
        </div>
    )
}

export default HomePage;
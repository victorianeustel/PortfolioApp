import React from "react";

import ProjectTable from "./DataTable/DataTable";
import Header from "./Header/Header.js";
import Loader from "../LoaderPage/Loader.js"

import FetchData from "../../Database/Database";
import useDocumentTitle from "../../Actions/useDocumentTitle";

import './HomePage.css';

function HomePage() {

    useDocumentTitle('Victoria Neustel')
  
    const data = FetchData('data');

    if (data == null) {
        return <Loader />
    }

    else {return (
        <div className="home-container">

            <div className="top">
                    <Header data={data}/>
                </div>

            <div className="bottom">
                <ProjectTable data={data} />
            </div>

        </div>

    )}

}

export default HomePage;
import React from "react";
import './childpage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../data/Mexico41.jpg';
import InfoPage from "./Info/Info";

import useDocumentTitle from "../../actions/useDocumentTitle";

function ChildPage() {
    useDocumentTitle('child page')

    return (
        <div class="flex-container">
            <div class="leftside">
                <InfoPage />
            </div>
            <div class="rightside">
                {/* <div className="image-container"> */}
                    <img src={logo}></img>

                {/* </div> */}
            </div>
        </div>
    )
}

export default ChildPage;
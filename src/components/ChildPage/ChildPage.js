import React from "react";
import './childpage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useDocumentTitle from "../../actions/useDocumentTitle";

function ChildPage() {
    useDocumentTitle('child page')

    return (
        <div class="grid-container">
            <div class="leftside"> meow</div>
            <div class="rightside">meow </div>
        </div>
    )
}

export default ChildPage;
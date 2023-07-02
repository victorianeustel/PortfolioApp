import React from "react";
import './HomePage.css'
import { useNavigate } from "react-router-dom";


function ProjectTable(props) {
    const {data} = props;

    let navigate = useNavigate();
    const routeChange = (key) => {
        let path = 'projects/' + key;
        navigate(path, { state: { key: key } });
    }

    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th id="name">Project</th>
                    <th id="type">Type</th>
                    <th id="location">Client</th>
                    <th id="date">Date</th>
                </tr>
            </thead>
            <tbody>
                {data.map((event, key) => {
                    return (
                        <tr key={key} onClick={() => routeChange(key)}>
                            <td id="name">{event.data.name}</td>
                            <td id="type">{event.data.type}</td>
                            <td id="location">{event.data.client}</td>
                            <td id="date">{event.data.year}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ProjectTable;
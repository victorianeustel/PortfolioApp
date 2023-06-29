import React from "react";
import './table.css';
import { data } from "../../../data/data";
import { useNavigate } from "react-router-dom";

function ProjectTable() {

    let navigate = useNavigate(); 
    const routeChange = (key) =>{ 
      let path = 'projects/' + key; 
      navigate(path,{state:{key: key}});
    }

    return (
        <table id="dataTable">
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
                            <td id="name">{event.name}</td>
                            <td id="type">{event.type}</td>
                            <td id="location">{event.client}</td>
                            <td id="date">{event.year}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ProjectTable;
import React from "react";
import '../styles/table.css';
import { data } from "../data/data";

function ProjectTable() {

    return (
        <table>
            <tr>
                <th id="name">Project</th>
                <th id="type">Type</th>
                <th id="location">Location</th>
                <th id="date">Date</th>
            </tr>
            {data.map((event, key) => {
                return (
                    <tr key={key}>
                        <td id="name">{event.name}</td>
                        <td id="type">{event.type}</td>
                        <td id="location">{event.location}</td>
                        <td id="date">{event.date}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default ProjectTable;
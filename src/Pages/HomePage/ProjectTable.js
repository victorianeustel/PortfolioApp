import React from "react";
import './HomePage.css'
import { useNavigate } from "react-router-dom";
import logo from '../../Data/header-art.jpg'


function ProjectTable(props) {
    const { data } = props;

    let navigate = useNavigate();

    const routeChange = (key, name) => {
        let path = 'projects/' + key + "/" + name;
        navigate(path, { state: { key: key }, params: { name: name } });
    }

    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th className="name">Project</th>
                    <th className="type">Type</th>
                    <th className="location">Client</th>
                    <th className="date">Date</th>
                </tr>
            </thead>
            <tbody> 

                {data.map((event, key) => {
                    return (

                        <tr key={key} onClick={() => routeChange(key, event.data.name)} className={`preview ${event.data.id}`}>

                            <td className="name">{event.data.name}</td>
                            <td className="type">{event.data.type}</td>
                            <td className="location">{event.data.client}</td>
                            <td className="date">{event.data.year}</td>
                            <td id="preview-data">
                                <div className="hide-image">
                                    <img src={event.data.headerImage} />
                                </div>
                            </td>
                        </tr>
                    )
                })}
             </tbody> 
        </table>
    )
}

export default ProjectTable;
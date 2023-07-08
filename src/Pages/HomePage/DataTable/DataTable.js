import React from "react";
import './DataTable.css'
import { useNavigate } from "react-router-dom";

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
                    <th id="preview-data"></th>
                </tr>
            </thead>
            <tbody> 

                {data.map((project, index) => {
                    return (

                        <tr key={index} onClick={() => routeChange(index, project.name)} className={`preview ${project.id}`}>

                            <td className="name">{project.name}</td>
                            <td className="type">{project.type}</td>
                            <td className="location">{project.client}</td>
                            <td className="date">{project.year}</td>
                            <td id="preview-data">
                                <div className="hide-image">
                                    <img alt={project.name} src={project.headerImage} />
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
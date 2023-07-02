import React, { useContext } from "react";
import { ProjectContext } from "../../ProjectContext";

function InfoTable() {

    const item = useContext(ProjectContext).details;

    return (
        <table className="info-table">

            <tbody>

                {Object.keys(item).map((key, i) => (
                    (key === "Technology") ?

                        <tr key={i}>
                            <td>{key}</td>
                            <td>{item[key].join(", ")}</td>
                        </tr>

                        :

                        <tr key={i}>
                            <td>{key}</td>
                            <td>{item[key]}</td>
                        </tr>
                        
                ))}

            </tbody>

        </table>
    )
}

export default InfoTable;
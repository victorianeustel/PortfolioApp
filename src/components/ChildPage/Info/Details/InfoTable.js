import React from "react";
import { data } from "../../../../data/data";

function InfoTable(props) {
    const { item } = props;

    return (
        <table className="info-table">
            <tbody>
                {Object.keys(item).map((key, i) => (
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
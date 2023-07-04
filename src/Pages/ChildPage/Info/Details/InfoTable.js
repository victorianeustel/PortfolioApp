import React from "react";

function InfoTable(props) {

    const { item } = props;

    return (
        <table className="info-table">

            <tbody>
                {
                    item.map((detail) => (
                        <tr key={detail.id}>
                            <td>{detail.key}</td>
                            {detail.key === "Technology"

                                ? <td>{(detail.value).join(", ")}</td>

                                : <td>{detail.value}</td>

                            }
                        </tr>
                    ))

                }


            </tbody>

        </table>
    )
}

export default InfoTable;
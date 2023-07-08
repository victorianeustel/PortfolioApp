import React from "react";
import TechBadge from "../../../../Components/TechBadge/Badge";

function InfoTable(props) {

    const { item } = props;

    return (
        <table className="info-table">

            <tbody>
                {
                    item.map((detail) => (
                        <tr key={detail.key} >
                            <td key={detail.id}>{detail.key}</td>
                            {detail.key === "Technology"

                                ? <td className="BadgeRow" key={detail.id}>
                                    {
                                        detail.value.map((tech) => {
                                            return (
                                                <TechBadge name={tech} key={tech}/>
                                            )
                                        })
                                    }

                                </td>

                                : <td key={detail.id}>
                                    <span>
                                        {detail.value}
                                    </span>
                                </td>

                            }
                        </tr>
                    ))

                }


            </tbody>

        </table>
    )
}

export default InfoTable;
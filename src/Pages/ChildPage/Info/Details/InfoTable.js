import React from "react";
import TechBadge from "../../../../Components/TechBadge/Badge";

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

                                ? <td className="BadgeRow">
                                    {
                                        detail.value.map((tech) => {
                                            return (
                                                <TechBadge name={tech} />
                                            )
                                        })
                                    }
                                    {/* <span>
                                    {(detail.value).join(", ")}
                                    </span> */}
                                </td>

                                : <td>
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
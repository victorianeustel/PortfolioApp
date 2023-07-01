import React from "react";
import '../../childpage.css';
import InfoTable from "./InfoTable";
function Details() {

    return (
        <div className="child-details">

            <InfoTable />
            <div className="description-box">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat scelerisque elit sit amet consequat. Aliquam erat volutpat. !!
            </div>
        </div>
    )
}

export default Details;
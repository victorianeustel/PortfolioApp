import React from "react";
import '../../childpage.css';
import InfoTable from "./InfoTable";
import SocialBar from "./SocialBar";
import { ProjectContext } from "../../ProjectContext";
import { useContext } from "react";

function Details() {
    const item = useContext(ProjectContext);

    return (
        <div className="child-details">

            {item.id === "about" &&
                <SocialBar git={true} repolink={'https://github.com/victorianeustel'} linked={true} mail={true} />
            }

            {
                item.repo == null ?
                    <SocialBar />
                    :
                    <SocialBar git={true} repolink={item.repo} />
            }


            <InfoTable item={item.details} />

            <div className="description-box">
                {item.description}
            </div>

            <div className="image-list">
                {item.images.map((item, key) => {
                    return (
                        <div key={key} className="image-list-item">
                            <img src={item.link} alt={item.description}></img>
                            <div> {item.description}</div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Details;
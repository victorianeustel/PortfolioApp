import React from "react";
import '../../childpage.css';
import InfoTable from "./InfoTable";
import SocialBar from "./SocialBar";

function Details(props) {
    const { item } = props;

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


            <InfoTable item={item.aboutDetails} />


            <div className="description-box">
                {item.description.split('<br/>').join('\n\n')}
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
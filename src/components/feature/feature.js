import React from "react";
import "./feature.css";

const Feature = (props) => {
    const {name, icon, description} = props;
    return (
        <div className="Feature">
            <div className="Feature-Icon" style={{ "backgroundImage": `url(${icon})` }}>
            </div>
            <div className="Feature-Title">
                <span className="Feature-TitleText">{name}</span>
            </div>
            <div className="Feature-Caption">
                <span className="Feature-CaptionText">{description}</span>
            </div>
        </div>
    );
}

export default Feature;




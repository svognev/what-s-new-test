import React from "react";
import "./version-title.css";

const VersionTitle = (props) => {
    const { eventHandler, number, date, opened } = props;
    let buttonClassName = "VersionTitle-Button";
    if (opened) {
        buttonClassName += " VersionTitle-Button_opened";
    }
    return (
        <div className="VersionTitle">
          <button className={buttonClassName} onClick={eventHandler} />
          <span className="VersionTitle-Text">
            Version {number} <span className="VersionTitle-Text_releaseDate"><span className="VersionTitle-Text_dash">- </span>released on {date}</span>
          </span>
        </div>
    );
}

export default VersionTitle;
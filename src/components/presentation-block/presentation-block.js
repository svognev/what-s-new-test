import React from "react";
import "./presentation-block.css";

const PresentationBlock = ({number, title, innovation}) => {
    return (
        <div className="PresentationBlock">
        <div className="PresentationBlock-TopCaption PresentationCaption">
          <span className="PresentationCaption-Text">
            A new feature of <span className="PresentationCaption-Text_heavy">version {number}</span></span>
        </div>
        <div className="PresentationBlock-Heading PresentationHeading">
          <span className="PresentationHeading-Text">
            {title.toUpperCase()}
          </span>
        </div>
        <div className="PresentationBlock-BottomCaption PresentationCaption PresentationCaption_mobileBottom">
          <span className="PresentationCaption-Text">
            {innovation}
          </span>
        </div>
        <div className="PresentationBlock-Button">
          <button className="PresentationButton">
            READ MORE
          </button>
        </div>
      </div>
    );
}

export default PresentationBlock;
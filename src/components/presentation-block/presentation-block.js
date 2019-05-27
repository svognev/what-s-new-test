import React from "react";
import "./presentation-block.css";

const PresentationBlock = ({lang, number, title, innovation}) => {
    const captionText1 = lang === "en" 
        ? "A new feature of " 
        : "Neue Funktionen von ";
    
    const captionText2 = lang === "en" 
        ? "version " 
        : "Version ";

    const buttonText = lang === "en" 
        ? "READ MORE" 
        : "MEHR LESEN"; 
        
    return (
        <div className="PresentationBlock">
        <div className="PresentationBlock-TopCaption PresentationCaption">
          <span className="PresentationCaption-Text">
            {captionText1}<span className="PresentationCaption-Text_heavy">{captionText2}{number}</span></span>
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
            {buttonText}
          </button>
        </div>
      </div>
    );
}

export default PresentationBlock;
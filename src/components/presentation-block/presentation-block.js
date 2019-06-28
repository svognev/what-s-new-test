import React from "react";
import { withRouter } from "react-router-dom";
import "./presentation-block.css";

const PresentationBlock = ({lang, number, title, innovation, history}) => {
    const captionText1 = lang === "en" 
        ? "A new feature of " 
        : "Neue Funktionen von ";
    
    const captionText2 = lang === "en" 
        ? "version " 
        : "Version ";

    const buttonText = lang === "en" 
        ? "READ MORE" 
        : "MEHR LESEN"; 

    let titleFontSize = 90;
    if (title.length > 12) {
      titleFontSize = Math.floor(90 - (4 * (title.length - 12)));
    }
    
    console.log(titleFontSize);

    return (
        <div className="PresentationBlock">
        <div className="PresentationBlock-TopCaption PresentationCaption">
          <span className="PresentationCaption-Text">
            {captionText1}<span className="PresentationCaption-Text_heavy">{captionText2}{number}</span></span>
        </div>
        <div className="PresentationHeading-Text PresentationBlock-Heading PresentationHeading">
          <span className="PresentationHeading-Text_desktop" style={{ fontSize: titleFontSize }}>
            {title.toUpperCase()}
          </span>
          <span className="PresentationHeading-Text PresentationHeading-Text_mobile">
            {title.toUpperCase()}
          </span>
        </div>
        <div className="PresentationBlock-BottomCaption PresentationCaption PresentationCaption_mobileBottom">
          <span className="PresentationCaption-Text">
            {innovation}
          </span>
        </div>
        <div className="PresentationBlock-Button">
            <button className="PresentationButton" onClick={() => { history.push(`${lang}/${number.replace(".", "-")}`) }}>
              {buttonText}
            </button>
        </div>
      </div>
    );
}

export default withRouter(PresentationBlock);
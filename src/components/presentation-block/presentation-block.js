import React from "react";
import { withRouter } from "react-router-dom";
import "./presentation-block.css";

import { breakIntoLines } from "../../helpers";

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

    let titleText = <p className="PresentationHeading-Text">{title.toUpperCase()}</p>;

    if (title.length > 18) {
      titleText = breakIntoLines(title, 17, 2).map(str => {
        return (<p className="PresentationHeading-Text PresentationHeading-Text_multiline">{str.toUpperCase()}</p>)
      })
      console.log(titleText);
    }
    
    return (
        <div className="PresentationBlock">
        <div className="PresentationBlock-TopCaption PresentationCaption">
          <span className="PresentationCaption-Text">
            {captionText1}<span className="PresentationCaption-Text_heavy">{captionText2}{number}</span></span>
        </div>
        <div className="PresentationHeading-Text PresentationBlock-Heading PresentationHeading">
          {titleText}
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
import React from "react";
import { withRouter } from "react-router-dom";
import "./presentation-block.css";

import { breakIntoLines } from "../../helpers";

const PresentationBlock = ({lang, number, title, innovation, history}) => {
    const captionText = lang === "en" ? "A new feature of " : "Neue Funktionen von ";
    const captionTextBold = `${lang === "en" ? "version" : "Version"} ${number}`;
    const buttonText = lang === "en" ? "READ MORE" : "MEHR LESEN"; 

    let titleText = <h2 className="PresentationHeading-Text">{title.toUpperCase()}</h2>;

    if (title.length > 18) {
      titleText = breakIntoLines(title, 17, 2).map((str, i) => {
        return (
          <h2 className="PresentationHeading-Text PresentationHeading-Text_multiline" key={i}>
            {str.toUpperCase()}
          </h2>
        );
      });
    }
    
    return (
        <div className="PresentationBlock">
        <div className="PresentationBlock-TopCaption PresentationCaption">
          <h2 className="PresentationCaption-Text">
            {captionText}<span className="PresentationCaption-Text_heavy">{captionTextBold}</span>
          </h2>
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
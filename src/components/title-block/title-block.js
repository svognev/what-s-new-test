import React from "react";
import "./title-block.css";

const TitleBlock = ({ lang = "en" }) => {
    const titleText = lang === "en" 
        ? "Our latest features" 
        : "Unsere neuesten Funktionen";

    const subtitleText = lang === "en"
        ? "We are always working hard to make SMASHDOCS the best platform for your documentary needs. Check out some of the most important things we've been up to lately..."
        : "Wir arbeiten ständig daran, SMASHDOCs zur besten Plattform für Ihre Dokumentationsanforderungen zu machen. Schauen Sie sich einige der wichtigsten Dinge an, die wir in letzter Zeit gemacht haben.";

    let subtitleClass = "TitleBlock-Subheading TitleSubheading";
    let titleClass = "TitleBlock-Heading TitleHeading";

    if (lang === "de") {
      subtitleClass += " TitleSubheading_de";
      titleClass += " TitleBlock-Heading_de TitleHeading_de";
    }
    
    return (
        <div className="TitleBlock">
            <div className={titleClass}>
                <h1 className="TitleHeading-Text">
                    {titleText}
                </h1>
            </div>
            <div className={subtitleClass}>
                <span className="SubtitleHeading-Text">
                    {subtitleText}
                </span>
            </div>
        </div>
    );
}

export default TitleBlock;
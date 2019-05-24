import React from "react";
import "./title-block.css";

const TitleBlock = () => {
    return (
        <div className="TitleBlock">
        <div className="TitleBlock-Heading TitleHeading">
          <span className="TitleHeading-Text">
            Our latest features
          </span>
        </div>
        <div className="TitleBlock-Subheading TitleSubheading">
          <span className="SubtitleHeading-Text">
            We are always working hard to make SMASHDOCS the best platform for your documentary needs.
            Check out some of the most important things we've been up to lately...
          </span>
        </div>
      </div>
    );
}

export default TitleBlock;
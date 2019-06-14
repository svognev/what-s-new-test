import React from "react";
import "./version-heading-block.css";

const VersionHeadingBlock = ({lang, versionNumber}) => {
    const headingText = lang === "en" ? "New in " : "Neu in ";
    const patchNumber = versionNumber !== "09" ? ".0" : ".7";
    return (
        <div className="VersionHeadingBlock">
            <div className="VersionHeading">
                <span className="VersionHeading-Text VersionHeading-Text_desktop">
                    {versionNumber + ".0"}
                </span>
                <span className="VersionHeading-Text VersionHeading-Text_mobile">
                    {headingText}{versionNumber + patchNumber}
                </span>
            </div>
        </div>
    );
};

export default VersionHeadingBlock;
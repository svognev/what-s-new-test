import React from "react";
import "./version-heading-block.css";

const VersionHeadingBlock = ({lang, versionNumber}) => {
    const headingText = lang === "en" ? "New in " : "Neu in ";
    const patchNumber = versionNumber !== "2.09" ? ".0" : ".7";

    return (
        <div className="VersionHeadingBlock">
            <div className="VersionHeading">
                <h1 className="VersionHeading-Text VersionHeading-Text_desktop">
                    {versionNumber + patchNumber}
                </h1>
                <h1 className="VersionHeading-Text VersionHeading-Text_mobile">
                    {headingText}{versionNumber + patchNumber}
                </h1>
            </div>
        </div>
    );
};

export default VersionHeadingBlock;
import React from "react";
import "./versions-block.css";
import Version from "../version";

const VersionsBlock = ({versions}) => {
    const mappedVersions = versions.map((version, idx) => {
      return (
          <Version info={version} opened={idx === 0} key={version.number} />
      );
    })
    return (
        <div className="VersionsBlock">
            <div className="VersionsBlock-List VersionsList">
                {mappedVersions}
            </div>
        </div>
    );
}

export default VersionsBlock;
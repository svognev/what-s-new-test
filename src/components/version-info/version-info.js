import React from "react";
import { withRouter } from "react-router-dom";
import "./version-info.css";
import Feature from "../feature";

const VersionInfo = ({features, lang, number, history}) => {

  const getFeatures = (featuresInfo, numOfFeatures, isMobile = false) => {
    const featuresArray = [];

    for (let i = 0; i < featuresInfo.length && i < numOfFeatures; i++) {
      const { name, icon, descriptionShort, descriptionLong } = featuresInfo[i];
      const description = isMobile ? descriptionShort : descriptionLong;

      featuresArray.push(<Feature {...{name, icon, description}} key={name} />)
    }
    return featuresArray;
  }

  const seeAllButtonText = lang === "en" 
      ? "See all features " 
      : "Alle Funktionen anzeigen ";

  return (
      <div>
        <div className="VersionInfo">
            <div className="VersionInfo-FeaturesList FeaturesList">
              { getFeatures(features, 3) }
            </div>
            <div className="VersionInfo-SeeAll SeeAllFeatures">
              <a className="SeeAllFeatures-Link" onClick={() => { history.push(`${lang}/${number.replace(".", "-")}`) }} >{seeAllButtonText}<div className="SeeAllFeatures-Arrow"></div></a>
            </div>
        </div>

        <div className="VersionInfo_mobile">
          <div className="VersionInfo-FeaturesList FeaturesList">
            { getFeatures(features, 4, true) }
          </div>
          <div className="VersionInfo-SeeAll SeeAllFeatures">
            <a className="SeeAllFeatures-Link" onClick={() => { history.push(`${lang}/${number.replace(".", "-")}`) }} >{seeAllButtonText}<div className="SeeAllFeatures-Arrow"></div></a>
          </div>
        </div>
      </div>       
  );
}

export default withRouter(VersionInfo);
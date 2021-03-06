import React from "react";
import FeatureDetails from "../feature-details";
import "./feature-details-list.css";

const FeatureDetailsList = ({features}) => {
    const featureDetailsArray = features.map((feature, idx) => {
        return (
            <FeatureDetails {...feature} key={feature.title + idx} reverse={idx % 2} first={idx === 0} />
        );
    })
    return (
        <div className="FeatureDetailsList">
            {featureDetailsArray}
        </div>
    );
}

export default FeatureDetailsList;
import React from "react";
import "./feature-details.css";

const FeatureDetails = (props) => {
    const { title, icon, image, reverse, first } = props;
    const text = props.text.split("\n").map((item, key) => { 
        return <span key={key}>{item}<br/></span> 
    })

    let FeatureDetailsClass = "FeatureDetails";
    if (reverse) {
        FeatureDetailsClass += " FeatureDetails_reverse";
    }
    if (first) {
        FeatureDetailsClass += " FeatureDetails_first";
    }

    return (
        <div className={FeatureDetailsClass}>
            <div className="FeatureDetails-LeftSide">
                <div className="FeatureDescription">
                    <div className="FeatureDescription-Heading">
                        <div className="FeatureDescription-Icon" style={{ backgroundImage : `url(${icon})`}}>
                        </div>
                        <div className="FeatureDescription-HeadingTextBox">
                            <span className="FeatureDescription-HeadingText">
                                {title}
                            </span>
                        </div>
                    </div>
                    <div className="FeatureDescription-TextBox">
                        <span className="FeatureDescription-Text">
                            {text}
                        </span>
                    </div>
                </div>
            </div>
            <div className="FeatureDetails-RightSide">
                <div className="FeatureIllustration">
                    <img className="FeatureIllustration-Image FeatureIllustration-Image_withShadow" src={image} />
                </div>
            </div>
        </div>
    )
}

export default FeatureDetails;
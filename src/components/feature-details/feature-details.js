import React from "react";
import "./feature-details.css";

const FeatureDetails = (props) => {
    let { title, text, icon, image, reverse, first } = props;
    const preparedText = text.split("\n").map((item, key) => { 
        if (item[0] === "{" && item[item.length - 1] === "}") {
            return (
            <div className="ListItem" key={key}>
                <p className="ListItem-Icon">{"\u2714"}</p>
                <p className="ListItem-Text">{item.slice(1, item.length - 1)}</p>
            </div>
            );
        }
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
                            {preparedText}
                        </span>
                    </div>
                </div>
            </div>
            <div className="FeatureDetails-RightSide">
                <div className="FeatureIllustration">
                    <img className="FeatureIllustration-Image FeatureIllustration-Image_withShadow" src={image} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default FeatureDetails;
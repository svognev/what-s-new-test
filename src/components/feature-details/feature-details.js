import React from "react";
import "./feature-details.css";

const FeatureDetails = (props) => {
    let { title, text, icon, image, reverse, first } = props;
    text = "No doubt the improvement of our Undo button was the most awaited one. We get it and do our best to bring it to perfection. \n\nSo, what is new here this time?\n\n{Undo went global! Let’s say you edit one paragraph, go into another and edit something else there. Then you press the ”Undo” button. Changes will be reset to the current paragraph first and if you make Undo again, you will land on the previous paragraph and changes will be also reset there.}\n\n{Your Undos are not stopped by weblinks/cross-references anymore. Undo deletes them now as normal content.}\n\n{Undo and Redo buttons are now placed on the toolbar. Very convenient!}";
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
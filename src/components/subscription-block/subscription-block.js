import React from "react";
import "./subscription-block.css";

const SubcriptionBlock = ({lang}) => {

    let subheadingClass = "SubscriptionForm-Subheading";
    let headingClass = "SubscriptionForm-Heading";
    let privacyCaptionClass = "SubscriptionForm-PrivacyCaption";
    
    if (lang === "de") {
        subheadingClass += " SubscriptionForm-Subheading_de";
        headingClass += " SubscriptionForm-Heading_de";
        privacyCaptionClass += " SubscriptionForm-PrivacyCaption_de";
    }

    let headingText, subheadingText, salutationTitle, nameTitle, surnameTitle, emailTitle, privacyCaptionText, privacyCaptionLinkText, buttonText;
    
    if (lang === "en") {
        headingText = "Subscribe to SMASHDOCs";
        subheadingText = "Always\u{00A0}be\u{00A0}the\u{00A0}first\u{00A0}to\u{00A0}hear\u{00A0}about\u{00A0}new features\u{00A0}in\u{00A0}SMASHDOCs"; 
        salutationTitle = "Salutation"; 
        nameTitle = "Name"; 
        surnameTitle = "Surname"; 
        emailTitle = "E-mail address"; 
        privacyCaptionText = "Your data is safe with us: "; 
        privacyCaptionLinkText = "Privacy policy";
        buttonText = "SUBSCRIBE";
    } else {
        headingText = "Abonnieren Sie SMASHDOCs";
        subheadingText = "Seien\u{00A0}Sie\u{00A0}immer\u{00A0}der\u{00A0}Erste,\u{00A0}der\u{00A0}von\u{00A0}neuen Funktionen\u{00A0}in\u{00A0}SMASHDOCs\u{00A0}erfährt"; 
        salutationTitle = "Anrede"; 
        nameTitle = "Vorname"; 
        surnameTitle = "Nachname"; 
        emailTitle = "E-Mail-Adresse"; 
        privacyCaptionText = "Ihre Daten sind bei uns sicher: "; 
        privacyCaptionLinkText = "Datenschutzerklärung"; 
        buttonText = "ABONNIEREN";
    }

    return (
        <div className="SubscriptionBlock">
            <div className="SubscriptionForm">
                <div className={headingClass}>
                    <span className="SubscriptionForm-HeadingText">
                        {headingText}
                    </span>
                </div>
                <div className={subheadingClass}>
                    <span className="SubscriptionForm-SubheadingText">
                        {subheadingText}
                    </span>
                </div>
                <div className="SubscriptionForm-InputList">
                    <div className="SubscriptionInput">
                        <div className="SubscriptionInput-Title">
                            <span className="SubscriptionInput-TitleText">
                                {salutationTitle} <span className="SubscriptionInput-TitleText_red">*</span>
                            </span>
                        </div>
                        <div className="SubscriptionInput-InputBox">
                            <input className="SubscriptionInput-InputField" value="Sir" onChange={(e) => {}}>
                            </input>
                        </div>
                    </div>
                    <div className="SubscriptionForm-NameInputs">
                        <div className="SubscriptionInput SubscriptionInput_name">
                            <div className="SubscriptionInput-Title">
                                <span className="SubscriptionInput-TitleText">
                                    {nameTitle} <span className="SubscriptionInput-TitleText_red">*</span>
                                </span>
                            </div>
                            <div className="SubscriptionInput-InputBox">
                                <input className="SubscriptionInput-InputField">
                                </input>
                            </div>    
                        </div>
                        <div className="SubscriptionInput SubscriptionInput_surname">
                            <div className="SubscriptionInput-Title">
                                <span className="SubscriptionInput-TitleText">
                                    {surnameTitle} <span className="SubscriptionInput-TitleText_red">*</span>
                                </span>
                            </div>
                            <div className="SubscriptionInput-InputBox">
                                <input className="SubscriptionInput-InputField">
                                </input>
                            </div>
                        </div>
                    </div>
        
                    <div className="SubscriptionInput SubscriptionInput_email">
                        <div className="SubscriptionInput-Title">
                            <span className="SubscriptionInput-TitleText">
                                {emailTitle} <span className="SubscriptionInput-TitleText_red">*</span>
                            </span>
                        </div>
                        <div className="SubscriptionInput-InputBox">
                            <input className="SubscriptionInput-InputField">
                            </input>
                        </div>
                    </div>
                    <div className={privacyCaptionClass}>
                        <span className="SubscriptionForm-PrivacyCaptionText">
                            {privacyCaptionText}<span className="SubscriptionForm-PrivacyCaptionText_link">{privacyCaptionLinkText}</span>
                        </span>
                    </div>
                </div>
              
                <button className="SubscriptionForm-Button">
                    SUBSCRIBE
                </button>
            </div>
              
        </div>
    );
}

export default SubcriptionBlock;
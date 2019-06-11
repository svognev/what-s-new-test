import React, { Component } from "react";
import "./subscription-block.css";

class SubcriptionBlock extends Component {

    salutations = this.props.lang === "en" ? ["Mr.", "Mrs.", "Miss", "Sir"] : ["Herr", "Frau"]; 

    state = {
        salutation: this.salutations[0],
        name: "",
        surname: "",
        email: "",
    }

    changeInput = (event, inputName) => {
        this.setState({ [inputName]: event.target.value});
    }

    switchSalutationInput(previousValue, isForward = true) {
        const { salutations } = this;
        const idx = salutations.indexOf(previousValue);
        if (idx === -1) {
            this.setState({ salutation: salutations[0]})
        } else {
            if (isForward) {
                if (idx + 1 < salutations.length) {
                    this.setState({ salutation: salutations[idx + 1]});
                } else {
                    this.setState({ salutation: salutations[0]});
                }
            } else {
                if (idx - 1 >= 0) {
                    this.setState({ salutation: salutations[idx - 1]});
                } else {
                    this.setState({ salutation: salutations[salutations.length - 1]});
                }
            }
        }
    }

    render() {
        const { lang } = this.props;
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
                                <input 
                                    className="SubscriptionInput-InputField" 
                                    value={this.state.salutation} 
                                    onChange={(e) => this.changeInput(e, "salutation")}
                                    onFocus={(e) => { if (e.target.value === this.state.salutation) { e.target.value=""; }}}
                                    onBlur={(e) => { if (e.target.value === "") { e.target.value = this.state.salutation}}}
                                >
                                </input>
                                <div className="SubscriptionInput-ArrowBox">
                                    <div 
                                        className="SubscriptionInput-Arrow SubscriptionInput-Arrow_up"
                                        onClick={() => this.switchSalutationInput(this.state.salutation, false)}
                                    >
                                    </div>
                                    <div 
                                        className="SubscriptionInput-Arrow SubscriptionInput-Arrow_down"
                                        onClick={() => this.switchSalutationInput(this.state.salutation)}
                                    >
                                    </div>
                                </div>
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
                                    <input 
                                        className="SubscriptionInput-InputField"
                                        value={this.state.name} 
                                        onChange={(e) => this.changeInput(e, "name")}
                                    >
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
                                    <input 
                                        className="SubscriptionInput-InputField"
                                        value={this.state.surname} 
                                        onChange={(e) => this.changeInput(e, "surname")}
                                    >
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
                                <input 
                                    className="SubscriptionInput-InputField"
                                    value={this.state.email} 
                                    onChange={(e) => this.changeInput(e, "email")}
                                >
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
                        {buttonText}
                    </button>
                </div>
            </div>
        );
    }
}


export default SubcriptionBlock;
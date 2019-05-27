import React, { Component } from "react";
import "./version.css";
import VersionTitle from "../version-title";
import VersionInfo from "../version-info";


class Version extends Component {
    state = {
        opened: this.props.opened,
    }

    openVersionInfo = () => {
        this.setState(({ opened }) => {
            return {
                opened: !opened
            }
        })
    }

    render() {
        const { features, ...others } = this.props.info;
        const { lang } = this.props;

        return (
            <div className="Version">
                <VersionTitle {...others} eventHandler={this.openVersionInfo} opened={this.state.opened} lang={lang} />
                { this.state.opened ? <VersionInfo { ...{features, lang} } /> : null }
            </div>
        );
    }
} 

export default Version;
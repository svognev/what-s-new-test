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
        const { features, number, ...others } = this.props.info;
        const { lang } = this.props;
        const { opened } = this.state;

        return (
            <div className="Version">
                <VersionTitle {...{...others, number, lang, opened}} eventHandler={this.openVersionInfo} />
                { this.state.opened ? <VersionInfo {...{features, number, lang}} /> : null }
            </div>
        );
    }
} 

export default Version;
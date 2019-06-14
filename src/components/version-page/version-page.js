import React, { Component } from "react";
import VersionInfoService from "../../services/version-info-service";
import VersionHeadingBlock from "../version-heading-block";
import FeatureDetailsList from "../feature-details-list";
import SubscriptionBlock from "../subscription-block";
import "./version-page.css";

class VersionPage extends Component {
    infoService = new VersionInfoService();
    
    state = {
        features: null
    };

    infoService = new VersionInfoService();

    componentDidMount() {
      this.updateVersionData();
    }

    componentDidUpdate({ versionNumber }) {
      if (versionNumber !== this.props.versionNumber) {
        this.updateVersionData();
      }
    }
  
    onVersionDataLoaded = versionData => {
      this.setState({ features: versionData });
    }
  
    updateVersionData = () => {
      const { lang, versionNumber } = this.props;
      this.infoService.getVersionDetails(lang, versionNumber).then(versionData => {
        this.onVersionDataLoaded(versionData);
      });
    }

    render() {
        const { lang, versionNumber } = this.props;
        const { features } = this.state;

        if (features) {
            return (
                <div className="VersionPage">
                    <VersionHeadingBlock { ...{lang, versionNumber} }/>
                    <FeatureDetailsList { ...{features} }/>
                    <SubscriptionBlock { ...{lang} }/>
                </div>
            );
        }
        return (
            <div className="VersionPage">
            </div>
        );
    }
}

export default VersionPage;
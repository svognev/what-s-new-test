import React, { Component } from "react";
import "./App.css";
import VersionInfoService from "./services/version-info-service";
import TitleBlock from "./components/title-block";
import PresentationBlock from "./components/presentation-block/presentation-block";
import VersionsBlock from "./components/versions-block";

class App extends Component {
  infoService = new VersionInfoService();
  
  state = {
    lang: this.props.lang,
    versions: null,
  }

  componentDidMount() {
    this.updateVersions();
  }

  onVersionsLoaded = versions => {
    this.setState({ versions });
  }

  updateVersions = () => {
    if (this.state.lang === "en") {
      this.infoService.getAllVersionsEN().then(versions => {
        this.onVersionsLoaded(versions);
      });
    } else if (this.state.lang === "de") {
      this.infoService.getAllVersionsDE().then(versions => {
        this.onVersionsLoaded(versions);
      });
    }
  }
  

  render() {
    const { lang, versions } = this.state;
    if (this.state.versions) {
      const { number, title, innovation } = this.state.versions[0];
      return (
        <div className="App">
          <TitleBlock { ...{lang} } />
          <PresentationBlock { ...{lang, number, title, innovation} }/>
          <VersionsBlock { ...{lang, versions} } />
        </div>
      );
    } else {
      return (
        <div className="App">
          <TitleBlock { ...{lang} }/>
        </div>
      );
    }
  } 
}

export default App;

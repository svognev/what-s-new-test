import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { isValidId,  replaceLangLinks } from "./helpers";
import VersionInfoService from "./services/version-info-service";
import TitleBlock from "./components/title-block";
import PresentationBlock from "./components/presentation-block/presentation-block";
import VersionsBlock from "./components/versions-block";
import VersionPage from "./components/version-page";

class App extends Component {
  infoService = new VersionInfoService();
  
  state = {
    lang: this.props.lang,
    versions: null,
    currentVersion: null,
  }

  componentDidMount() {
    this.updateVersions();
  }

  onVersionsLoaded = versions => {
    this.setState({ versions });
  }

  updateVersions = () => {
    this.infoService.getAllVersions(this.state.lang).then(versions => {
      this.onVersionsLoaded(versions);
    });
  }

  render() {
    const { lang, versions } = this.state;
    if (versions) {
      const { number, title, innovation } = versions[0];
      const { changeLang, scrollTo } = window;

      return (
        <div className="App">
          <Router>
            <Route path="/" exact
              render={({history}) => {
                history.push(`/en`);
                scrollTo(0, 0);

                  return (
                    <div>
                      <TitleBlock { ...{lang} } />
                      <PresentationBlock { ...{lang, number, title, innovation} } />
                      <VersionsBlock { ...{lang, versions} } />
                    </div>
                  );
                }} />

            <Route path={`/${lang}`} exact
              render={() => {
                 changeLang(lang);
                 scrollTo(0, 0);

                 return (
                   <div>
                     <TitleBlock { ...{lang} } />
                     <PresentationBlock { ...{lang, number, title, innovation} } />
                     <VersionsBlock { ...{lang, versions} } />
                   </div>
                 );
               }} />

            <Route path={`/${lang}/:id`} 
              render={({match, history}) => {
               changeLang(lang);
               const { id } = match.params;
               scrollTo(0, 0);

               if (isValidId(versions, id)) {
                 replaceLangLinks(id);

                 return (
                   <div>
                     <VersionPage { ...{lang} } versionNumber={`${id.replace("-", ".")}`} />
                   </div>
                 );
                 
               } else {
                 history.push(`/${lang}`);

                 return (
                   <div>
                     <TitleBlock { ...{lang} } />
                     <PresentationBlock { ...{lang, number, title, innovation} } />
                     <VersionsBlock { ...{lang, versions} } />
                   </div>
                 );
               }                      
              }} />
            
          </Router>
        </div>
      );
    }

    return (
      <div className="App">
      </div>
    );
  } 
}

export default App;

(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(52)},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(18),i=n.n(s),c=(n(33),n(5)),o=n(6),l=n(8),u=n(7),m=n(9),p=n(14),d=n(11),v=(n(34),n(12)),f=n.n(v),E=n(16),b=function(){function e(){Object(c.a)(this,e),this._base="https://my-json-server.typicode.com/svognev/"}return Object(o.a)(e,[{key:"getInfo",value:function(){var e=Object(E.a)(f.a.mark(function e(t,n){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=6;break}return e.next=3,fetch(t,"no-cors");case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,fetch(t);case 8:e.t0=e.sent;case 9:if((a=e.t0).ok){e.next=12;break}throw new Error("Could not fetch ".concat(t,". Res status: ").concat(a.status));case 12:return e.next=14,a.json();case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"getAllVersions",value:function(){var e=Object(E.a)(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getInfo("".concat(this._base).concat(t,"-main/versions"));case 2:return n=e.sent,document.getElementsByClassName("footer_".concat(t))[0].style.display="block",e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getVersionDetails",value:function(){var e=Object(E.a)(f.a.mark(function e(t,n){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getInfo("".concat(this._base).concat(t,"-").concat(n.replace(".","-"),"/features"));case 2:return a=e.sent,document.getElementsByClassName("footer_".concat(t))[0].style.display="block",e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),h=(n(36),function(e){var t=e.lang,n=void 0===t?"en":t,a="en"===n?"Our latest features":"Unsere neuesten Funktionen",s="en"===n?"We are always working hard to make SMASHDOCS the best platform for your documentary needs. Check out some of the most important things we've been up to lately...":"Wir arbeiten st\xe4ndig daran, SMASHDOCs zur besten Plattform f\xfcr Ihre Dokumentationsanforderungen zu machen. Schauen Sie sich einige der wichtigsten Dinge an, die wir in letzter Zeit gemacht haben.",i="TitleBlock-Subheading TitleSubheading",c="TitleBlock-Heading TitleHeading";return"de"===n&&(i+=" TitleSubheading_de",c+=" TitleBlock-Heading_de TitleHeading_de"),r.a.createElement("div",{className:"TitleBlock"},r.a.createElement("div",{className:c},r.a.createElement("span",{className:"TitleHeading-Text"},a)),r.a.createElement("div",{className:i},r.a.createElement("span",{className:"SubtitleHeading-Text"},s)))}),g=(n(37),Object(d.e)(function(e){var t=e.lang,n=e.number,a=e.title,s=e.innovation,i=e.history,c="en"===t?"A new feature of ":"Neue Funktionen von ",o="en"===t?"version ":"Version ",l="en"===t?"READ MORE":"MEHR LESEN";return r.a.createElement("div",{className:"PresentationBlock"},r.a.createElement("div",{className:"PresentationBlock-TopCaption PresentationCaption"},r.a.createElement("span",{className:"PresentationCaption-Text"},c,r.a.createElement("span",{className:"PresentationCaption-Text_heavy"},o,n))),r.a.createElement("div",{className:"PresentationBlock-Heading PresentationHeading"},r.a.createElement("span",{className:"PresentationHeading-Text"},a.toUpperCase())),r.a.createElement("div",{className:"PresentationBlock-BottomCaption PresentationCaption PresentationCaption_mobileBottom"},r.a.createElement("span",{className:"PresentationCaption-Text"},s)),r.a.createElement("div",{className:"PresentationBlock-Button"},r.a.createElement("button",{className:"PresentationButton",onClick:function(){i.push("".concat(t,"/").concat(n.replace(".","-")))}},l)))})),N=(n(42),n(26)),S=n(27),I=(n(43),n(44),function(e){var t=e.eventHandler,n=e.number,a=e.date,s="VersionTitle-Button";e.opened&&(s+=" VersionTitle-Button_opened");var i="en"===e.lang?"released on  ":"";return r.a.createElement("div",{className:"VersionTitle"},r.a.createElement("button",{className:s,onClick:t}),r.a.createElement("span",{className:"VersionTitle-Text"},"Version ",n," ",r.a.createElement("span",{className:"VersionTitle-Text_releaseDate"},r.a.createElement("span",{className:"VersionTitle-Text_dash"},"- "),i,a)))}),k=(n(45),n(46),function(e){var t=e.name,n=e.icon,a=e.description;return r.a.createElement("div",{className:"Feature"},r.a.createElement("div",{className:"Feature-Icon",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"Feature-Title"},r.a.createElement("span",{className:"Feature-TitleText"},t)),r.a.createElement("div",{className:"Feature-Caption"},r.a.createElement("span",{className:"Feature-CaptionText"},a)))}),T=Object(d.e)(function(e){var t=e.features,n=e.lang,a=e.number,s=e.history,i=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=[],s=0;s<e.length&&s<t;s++){var i=e[s],c=i.name,o=i.icon,l=i.descriptionShort,u=i.descriptionLong,m=n?l:u;a.push(r.a.createElement(k,Object.assign({name:c,icon:o,description:m},{key:c})))}return a},c="en"===n?"See all features ":"Alle Funktionen anzeigen ";return r.a.createElement("div",null,r.a.createElement("div",{className:"VersionInfo"},r.a.createElement("div",{className:"VersionInfo-FeaturesList FeaturesList"},i(t,3)),r.a.createElement("div",{className:"VersionInfo-SeeAll SeeAllFeatures"},r.a.createElement("button",{className:"SeeAllFeatures-Link",onClick:function(){s.push("".concat(n,"/").concat(a.replace(".","-")))}},c,r.a.createElement("div",{className:"SeeAllFeatures-Arrow"})))),r.a.createElement("div",{className:"VersionInfo_mobile"},r.a.createElement("div",{className:"VersionInfo-FeaturesList FeaturesList"},i(t,4,!0)),r.a.createElement("div",{className:"VersionInfo-SeeAll SeeAllFeatures"},r.a.createElement("button",{className:"SeeAllFeatures-Link",onClick:function(){s.push("".concat(n,"/").concat(a.replace(".","-")))}},c,r.a.createElement("div",{className:"SeeAllFeatures-Arrow"})))))}),w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={opened:n.props.opened},n.openVersionInfo=function(){n.setState(function(e){return{opened:!e.opened}})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.info,t=e.features,n=e.number,a=Object(S.a)(e,["features","number"]),s=this.props.lang,i=this.state.opened;return r.a.createElement("div",{className:"Version"},r.a.createElement(I,Object.assign({},Object(N.a)({},a,{number:n,lang:s,opened:i}),{eventHandler:this.openVersionInfo})),this.state.opened?r.a.createElement(T,{features:t,number:n,lang:s}):null)}}]),t}(a.Component),y=function(e){var t=e.versions,n=e.lang,a=t.map(function(e,t){return r.a.createElement(w,Object.assign({info:e,opened:0===t,key:e.number},{lang:n}))});return r.a.createElement("div",{className:"VersionsBlock"},r.a.createElement("div",{className:"VersionsBlock-List VersionsList"},a))},F=(n(47),function(e){var t=e.lang,n=e.versionNumber,a="en"===t?"New in ":"Neu in ",s="09"!==n?".0":".7";return r.a.createElement("div",{className:"VersionHeadingBlock"},r.a.createElement("div",{className:"VersionHeading"},r.a.createElement("span",{className:"VersionHeading-Text VersionHeading-Text_desktop"},n+".0"),r.a.createElement("span",{className:"VersionHeading-Text VersionHeading-Text_mobile"},a,n+s)))}),x=(n(48),function(e){var t=e.title,n=e.icon,a=e.image,s=e.reverse,i=e.first,c=e.text.split("\n").map(function(e,t){return r.a.createElement("span",{key:t},e,r.a.createElement("br",null))}),o="FeatureDetails";return s&&(o+=" FeatureDetails_reverse"),i&&(o+=" FeatureDetails_first"),r.a.createElement("div",{className:o},r.a.createElement("div",{className:"FeatureDetails-LeftSide"},r.a.createElement("div",{className:"FeatureDescription"},r.a.createElement("div",{className:"FeatureDescription-Heading"},r.a.createElement("div",{className:"FeatureDescription-Icon",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"FeatureDescription-HeadingTextBox"},r.a.createElement("span",{className:"FeatureDescription-HeadingText"},t))),r.a.createElement("div",{className:"FeatureDescription-TextBox"},r.a.createElement("span",{className:"FeatureDescription-Text"},c)))),r.a.createElement("div",{className:"FeatureDetails-RightSide"},r.a.createElement("div",{className:"FeatureIllustration"},r.a.createElement("img",{className:"FeatureIllustration-Image FeatureIllustration-Image_withShadow",src:a,alt:""}))))}),O=(n(49),function(e){var t=e.features.map(function(e,t){return r.a.createElement(x,Object.assign({},e,{key:e.title+t,reverse:t%2,first:0===t}))});return r.a.createElement("div",{className:"FeatureDetailsList"},t)}),C=n(15),V=(n(50),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).salutations="en"===n.props.lang?["Mr.","Mrs.","Miss","Sir"]:["Herr","Frau"],n.state={salutation:n.salutations[0],name:"",surname:"",email:""},n.changeInput=function(e,t){n.setState(Object(C.a)({},t,e.target.value))},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"switchSalutationInput",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.salutations,a=n.indexOf(e);-1===a?this.setState({salutation:n[0]}):t?a+1<n.length?this.setState({salutation:n[a+1]}):this.setState({salutation:n[0]}):a-1>=0?this.setState({salutation:n[a-1]}):this.setState({salutation:n[n.length-1]})}},{key:"render",value:function(){var e,t,n,a,s,i,c,o,l,u=this,m=this.props.lang,p="SubscriptionForm-Subheading",d="SubscriptionForm-Heading",v="SubscriptionForm-PrivacyCaption";return"de"===m&&(p+=" SubscriptionForm-Subheading_de",d+=" SubscriptionForm-Heading_de",v+=" SubscriptionForm-PrivacyCaption_de"),"en"===m?(e="Subscribe to SMASHDOCs",t="Always\xa0be\xa0the\xa0first\xa0to\xa0hear\xa0about\xa0new features\xa0in\xa0SMASHDOCs",n="Salutation",a="Name",s="Surname",i="E-mail address",c="Your data is safe with us: ",o="Privacy policy",l="SUBSCRIBE"):(e="Abonnieren Sie SMASHDOCs",t="Seien\xa0Sie\xa0immer\xa0der\xa0Erste,\xa0der\xa0von\xa0neuen Funktionen\xa0in\xa0SMASHDOCs\xa0erf\xe4hrt",n="Anrede",a="Vorname",s="Nachname",i="E-Mail-Adresse",c="Ihre Daten sind bei uns sicher: ",o="Datenschutzerkl\xe4rung",l="ABONNIEREN"),r.a.createElement("div",{className:"SubscriptionBlock"},r.a.createElement("div",{className:"SubscriptionForm"},r.a.createElement("div",{className:d},r.a.createElement("span",{className:"SubscriptionForm-HeadingText"},e)),r.a.createElement("div",{className:p},r.a.createElement("span",{className:"SubscriptionForm-SubheadingText"},t)),r.a.createElement("div",{className:"SubscriptionForm-InputList"},r.a.createElement("div",{className:"SubscriptionInput"},r.a.createElement("div",{className:"SubscriptionInput-Title"},r.a.createElement("span",{className:"SubscriptionInput-TitleText"},n," ",r.a.createElement("span",{className:"SubscriptionInput-TitleText_red"},"*"))),r.a.createElement("div",{className:"SubscriptionInput-InputBox"},r.a.createElement("input",{className:"SubscriptionInput-InputField",value:this.state.salutation,onChange:function(e){return u.changeInput(e,"salutation")},onFocus:function(e){-1!==u.salutations.indexOf(e.target.value)&&(e.target.value="")},onBlur:function(e){""===e.target.value&&(e.target.value=u.state.salutation)}}),r.a.createElement("div",{className:"SubscriptionInput-ArrowBox"},r.a.createElement("div",{className:"SubscriptionInput-Arrow SubscriptionInput-Arrow_up",onClick:function(){return u.switchSalutationInput(u.state.salutation,!1)}}),r.a.createElement("div",{className:"SubscriptionInput-Arrow SubscriptionInput-Arrow_down",onClick:function(){return u.switchSalutationInput(u.state.salutation)}})))),r.a.createElement("div",{className:"SubscriptionForm-NameInputs"},r.a.createElement("div",{className:"SubscriptionInput SubscriptionInput_name"},r.a.createElement("div",{className:"SubscriptionInput-Title"},r.a.createElement("span",{className:"SubscriptionInput-TitleText"},a," ",r.a.createElement("span",{className:"SubscriptionInput-TitleText_red"},"*"))),r.a.createElement("div",{className:"SubscriptionInput-InputBox"},r.a.createElement("input",{className:"SubscriptionInput-InputField",value:this.state.name,onChange:function(e){return u.changeInput(e,"name")}}))),r.a.createElement("div",{className:"SubscriptionInput SubscriptionInput_surname"},r.a.createElement("div",{className:"SubscriptionInput-Title"},r.a.createElement("span",{className:"SubscriptionInput-TitleText"},s," ",r.a.createElement("span",{className:"SubscriptionInput-TitleText_red"},"*"))),r.a.createElement("div",{className:"SubscriptionInput-InputBox"},r.a.createElement("input",{className:"SubscriptionInput-InputField",value:this.state.surname,onChange:function(e){return u.changeInput(e,"surname")}})))),r.a.createElement("div",{className:"SubscriptionInput SubscriptionInput_email"},r.a.createElement("div",{className:"SubscriptionInput-Title"},r.a.createElement("span",{className:"SubscriptionInput-TitleText"},i," ",r.a.createElement("span",{className:"SubscriptionInput-TitleText_red"},"*"))),r.a.createElement("div",{className:"SubscriptionInput-InputBox"},r.a.createElement("input",{className:"SubscriptionInput-InputField",value:this.state.email,onChange:function(e){return u.changeInput(e,"email")}}))),r.a.createElement("div",{className:v},r.a.createElement("span",{className:"SubscriptionForm-PrivacyCaptionText"},c,r.a.createElement("span",{className:"SubscriptionForm-PrivacyCaptionText_link"},o)))),r.a.createElement("button",{className:"SubscriptionForm-Button"},l)))}}]),t}(a.Component)),B=(n(51),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).infoService=new b,n.state={features:null},n.infoService=new b,n.onVersionDataLoaded=function(e){n.setState({features:e})},n.updateVersionData=function(){var e=n.props,t=e.lang,a=e.versionNumber;n.infoService.getVersionDetails(t,a).then(function(e){n.onVersionDataLoaded(e)})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateVersionData()}},{key:"componentDidUpdate",value:function(e){e.versionNumber!==this.props.versionNumber&&this.updateVersionData()}},{key:"render",value:function(){var e=this.props,t=e.lang,n=e.versionNumber,a=this.state.features;return a?r.a.createElement("div",{className:"VersionPage"},r.a.createElement(F,{lang:t,versionNumber:n}),r.a.createElement(O,{features:a}),r.a.createElement(V,{lang:t})):r.a.createElement("div",{className:"VersionPage"})}}]),t}(a.Component)),j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).infoService=new b,n.state={lang:n.props.lang,versions:null,currentVersion:null},n.onVersionsLoaded=function(e){n.setState({versions:e})},n.updateVersions=function(){n.infoService.getAllVersions(n.state.lang).then(function(e){n.onVersionsLoaded(e)})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateVersions()}},{key:"render",value:function(){var e=this.state,t=e.lang,n=e.versions;if(n){var a=n[0],s=a.number,i=a.title,c=a.innovation,o=window,l=o.changeLang,u=o.scrollTo;return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/",exact:!0,render:function(e){return e.history.push("/en"),u(0,0),r.a.createElement("div",null,r.a.createElement(h,{lang:t}),r.a.createElement(g,{lang:t,number:s,title:i,innovation:c}),r.a.createElement(y,{lang:t,versions:n}))}}),r.a.createElement(d.a,{path:"/".concat(t),exact:!0,render:function(){return l(t),u(0,0),r.a.createElement("div",null,r.a.createElement(h,{lang:t}),r.a.createElement(g,{lang:t,number:s,title:i,innovation:c}),r.a.createElement(y,{lang:t,versions:n}))}}),r.a.createElement(d.a,{path:"/".concat(t,"/:id"),render:function(e){var a=e.match,o=e.history;l(t);var m=a.params.id;return u(0,0),function(e,t){return e.some(function(e){return e.number.replace(".","-")===t})}(n,m)?(function(e){for(var t=document.getElementsByClassName("changeLangLink"),n=0;n<t.length;n++)t[n].href.includes("/de")?t[n].href="".concat(window.PUBLIC_URL,"/#/de/").concat(e):t[n].href="".concat(window.PUBLIC_URL,"/#/en/").concat(e)}(m),r.a.createElement("div",null,r.a.createElement(B,Object.assign({lang:t},{versionNumber:"".concat(m.replace("-","."))})))):(o.push("/".concat(t)),r.a.createElement("div",null,r.a.createElement(h,{lang:t}),r.a.createElement(g,{lang:t,number:s,title:i,innovation:c}),r.a.createElement(y,{lang:t,versions:n})))}})))}return r.a.createElement("div",{className:"App"})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,{lang:"en"}),document.getElementById("root_en")),i.a.render(r.a.createElement(j,{lang:"de"}),document.getElementById("root_de")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.d8b91308.chunk.js.map
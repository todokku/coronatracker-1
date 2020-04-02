(this.webpackJsonpcoronatracker=this.webpackJsonpcoronatracker||[]).push([[0],{249:function(e,t,a){e.exports=a(453)},254:function(e,t,a){},452:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(254),a(70)),i=a(195),s=a(196),m=a(33),u=a(212),d=a(213),p=a(127),f=a.n(p),E=a(501),h=a(459),g=a(495),v=a(498),b=a(499),C=a(500);function x(e){var t=e.country,a=e.index,n=e.handleClose,l=e.handleChange;return r.a.createElement(g.a,{component:"div",onClick:function(){return l(a)},label:r.a.createElement("div",null,t,r.a.createElement(v.a,{title:"Remove tab",placement:"bottom"},r.a.createElement(b.a,{color:"inherit",size:"small",onClick:function(e){return n(e,a)}},r.a.createElement(C.a,null))))})}var k=a(519),y=a(518),S="Invalid country selected - please select another!",I="Unable to fetch data - please check back in a bit!";function B(e){var t=e.open,a=e.message,n=e.handleClose,l=a===I?function(){}:n;return r.a.createElement(k.a,{open:t,autoHideDuration:6e3,onClose:l,anchorOrigin:{horizontal:"left",vertical:"bottom"}},r.a.createElement(y.a,{severity:"error",variant:"filled",onClose:n},a))}var O=a(502);function j(){return r.a.createElement(E.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{margin:30}},r.a.createElement(E.a,{item:!0,xs:12,sm:12,md:12,lg:12},r.a.createElement(h.a,{align:"center",variant:"body1"},"Big thanks to the ",r.a.createElement(v.a,{title:"Go to source data"},r.a.createElement(O.a,{href:"https://github.com/CSSEGISandData/COVID-19",color:"primary",variant:"body1"},"John Hopkins CSSE"))," for the data! Report any issues ",r.a.createElement(v.a,{title:"Report an issue"},r.a.createElement(O.a,{href:"https://github.com/sashaobucina/coronatracker/issues"},"here")),".")))}var T=a(98),w=a(515),A=a(521),D=Object(w.a)({color:{color:"#3BBA9C"},slider:{height:5}});function V(e){var t=e.dates,a=e.updateState,n=e.value,l=D();return r.a.createElement(A.a,{classes:{colorPrimary:l.color,colorSecondary:l.color,rail:l.slider,track:l.slider},defaultValue:0,valueLabelFormat:function(t){return e.dates[t]},"aria-labelledby":"discrete-slider",marks:!0,step:1,min:0,max:t.length-1,valueLabelDisplay:"on",value:n,onChange:function(e,t){return a(t)}})}var N=a(16);function F(e){var t=e.data,a=e.dataKey;return r.a.createElement(N.h,{height:400},r.a.createElement(N.g,{data:t},r.a.createElement(N.c,{stroke:"#3BBA9C",height:25,fill:"#3C3F58",travellerWidth:8}),r.a.createElement(N.d,{strokeWidth:.5}),r.a.createElement(N.j,{dataKey:"date",stroke:"#3BBA9C"}),r.a.createElement(N.k,{stroke:"#3BBA9C"}),r.a.createElement(N.f,{type:"monotone",dataKey:a,stroke:"#3BBA9C",strokeWidth:2,dot:!1}),r.a.createElement(N.i,null),r.a.createElement(N.e,null)))}function R(e){var t=e.data;return r.a.createElement(N.h,{height:500,style:{minWidth:"100%"}},r.a.createElement(N.b,{data:t,title:"Cases of COVID-19"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"colorConfirmed",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:"#a15c03",stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:"#a15c03",stopOpacity:0})),r.a.createElement("linearGradient",{id:"colorDeaths",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:"#9c3321",stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:"#9c3321",stopOpacity:0}))),r.a.createElement(N.c,{stroke:"#3BBA9C",height:25,fill:"#3C3F58",travellerWidth:8}),r.a.createElement(N.j,{dataKey:"date",stroke:"#3BBA9C"}),r.a.createElement(N.k,{stroke:"#3BBA9C"}),r.a.createElement(N.a,{type:"monotone",dataKey:"confirmed",stroke:"#a15c03",fillOpacity:1,fill:"url(#colorConfirmed)"}),r.a.createElement(N.a,{type:"monotone",dataKey:"deaths",stroke:"red",fillOpacity:1,fill:"url(#colorDeaths)"}),r.a.createElement(N.i,null),r.a.createElement(N.e,null)))}function K(e){var t=e.data,a=e.scale,n="log"===a?[1,1e7]:[1,1e4];return r.a.createElement(N.h,{height:550,style:{minWidth:"100%"}},r.a.createElement(N.g,{data:t,margin:{top:15,right:30,left:20,bottom:5}},r.a.createElement(N.d,{strokeWidth:.5,strokeDasharray:"3 3"}),r.a.createElement(N.j,{dataKey:"cases",name:"Total Confirmed Cases",stroke:"#3BBA9C",type:"number",domain:[1,1e6],scale:"log",ticks:[1,10,100,1e3,1e4,1e5,1e7]}),r.a.createElement(N.k,{dataKey:"weekly",name:"Weekly Confirmed Cases",label:{value:"Confirmed Cases (per week)",angle:-90,position:"insideBottomLeft",fill:"#3BBA9C",fontSize:18},stroke:"#3BBA9C",type:"number",domain:n,scale:a}),r.a.createElement(N.f,{type:"monotone",name:"Total Confirmed Cases",dataKey:"weekly",stroke:"#3BBA9C",strokeWidth:2,animationDuration:400,dot:!0}),r.a.createElement(N.i,null),r.a.createElement(N.e,null)))}var W=a(522),z=a(503),L=Object(w.a)({root:{background:"#3C3F58",color:"#3BBA9C","&:hover":{background:"#3C3F58"}}});function M(e){var t=e.scale,a=e.updateScale,n=L();return r.a.createElement(v.a,{title:"Convert scale",placement:"top"},r.a.createElement(W.a,{className:n.root,value:t,exclusive:!0,onChange:function(e,t){t&&a(t)}},r.a.createElement(z.a,{className:n.root,value:"log"},"Log"),r.a.createElement(z.a,{className:n.root,value:"linear"},"Linear")))}var G=a(506),P=a(504),_=a(505),J=a(507),H=a(508),q=a(509),U=a(510);function Q(e){var t=Object(n.useState)(!0),a=Object(T.a)(t,2),l=a[0],c=a[1],o=e.indexValue,i=e.maxIndex,s=e.onStepClick,m=e.speed,u=e.updateIndexState;Object(n.useEffect)((function(){if(l){var t=setInterval((function(){var t=e.indexValue,a=e.maxIndex,n=e.updateIndexState;t<a?n(t+1):c(!l)}),100/m);return function(){return clearInterval(t)}}}),[l,m,e]);var d=l?r.a.createElement(v.a,{title:"Pause animation",placement:"top"},r.a.createElement(b.a,{color:"inherit",size:"medium",onClick:function(){return c(!1)}},r.a.createElement(P.a,null))):r.a.createElement(v.a,{title:"Play animation",placement:"top"},r.a.createElement(b.a,{onClick:function(){return o<i?c(!0):{}}},r.a.createElement(_.a,null)));return r.a.createElement(G.a,{color:"inherit"},d,r.a.createElement(v.a,{title:"Skip animation",placement:"top"},r.a.createElement(b.a,{onClick:function(){return u(i)}},r.a.createElement(J.a,null))),r.a.createElement(v.a,{title:"Reset",placement:"top"},r.a.createElement(b.a,{onClick:function(){c(!1),u(0)}},r.a.createElement(H.a,null))),r.a.createElement(v.a,{title:"Decrement",placement:"top"},r.a.createElement(b.a,{onClick:function(e){return s(i,!1)}},r.a.createElement(q.a,null))),r.a.createElement(v.a,{title:"Increment",placement:"top"},r.a.createElement(b.a,{onClick:function(e){return s(i,!0)}},r.a.createElement(U.a,null))))}var X=Object(w.a)({root:{background:"#3C3F58",color:"#3BBA9C"},toggleRoot:{background:"#3C3F58",color:"#3BBA9C"}});function Y(e){var t=e.speed,a=e.setSpeed,n=X();return r.a.createElement(v.a,{title:"Change playback speed"},r.a.createElement(W.a,{className:n.root,value:t,exclusive:!0,onChange:function(e,t){t&&a(t)}},r.a.createElement(z.a,{className:n.toggleRoot,value:.25},"0.25x"),r.a.createElement(z.a,{className:n.toggleRoot,value:.5},"0.5x"),r.a.createElement(z.a,{className:n.toggleRoot,value:1},"1x"),r.a.createElement(z.a,{className:n.toggleRoot,value:2},"2x")))}function Z(e,t){var a=e.length;return a<=1?"0":(e[a-1][t]-e[a-2][t]).toString()}var $=Object(w.a)({root:{color:"#fcba03"}});function ee(e){var t=Object(n.useState)(1),a=Object(T.a)(t,2),l=a[0],c=a[1],o=e.country,i=e.data,s=e.indexValue,m=e.scale,u=e.onStepClick,d=e.updateIndexState,p=e.updateScale,f=$(),g=i.overall,v=i.first_derivative_data,b=i.second_derivative_data,C=function(e){return e.filter((function(e){return 0!==e.confirmed})).map((function(e,t,a){var n=t<7?0:a[t].confirmed-a[t-7].confirmed;return{cases:e.confirmed,weekly:Math.round(n)}})).filter((function(e){return e.weekly>=10}))}(g),x=function(e,t){var a=e.length;return e.slice(a-t,a).map((function(e){return e.date}))}(g,C.length),k=x.length-1;return r.a.createElement(E.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(E.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{marginTop:50,marginBottom:20}},r.a.createElement(E.a,{item:!0,xs:1,sm:1,md:1,lg:1}),r.a.createElement(E.a,{item:!0,xs:11,sm:11,md:11,lg:11},r.a.createElement(h.a,{color:"inherit",variant:"h5",align:"center"},"Daily Report for ",o," - ",function(e,t){return new Date(e[t].date.toString()).toDateString()}(g,g.length-1)))),r.a.createElement(E.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{marginBottom:50}},r.a.createElement(E.a,{item:!0,xs:3,sm:3,md:3,lg:3}),r.a.createElement(E.a,{item:!0,xs:3,sm:3,md:3,lg:3},r.a.createElement(h.a,{className:f.root,variant:"h5",align:"center"},"+",Z(g,"confirmed")," Cases")),r.a.createElement(E.a,{item:!0,xs:3,sm:3,md:3,lg:3},r.a.createElement(h.a,{variant:"h5",color:"error",align:"center"},"+",Z(g,"deaths")," Deaths")),r.a.createElement(E.a,{item:!0,xs:2,sm:2,md:2,lg:2})),r.a.createElement(E.a,{item:!0,xs:12,sm:12},r.a.createElement(h.a,{align:"center",variant:"h4"},"COVID-19 Cases (",o,")")),r.a.createElement(E.a,{item:!0,xs:10,sm:10},r.a.createElement(R,{data:g})),r.a.createElement(E.a,{item:!0,xs:5,sm:5,md:5,lg:5},r.a.createElement(h.a,{align:"center",variant:"h5"},"Rate of Change in Cases"),r.a.createElement(F,{data:v,dataKey:"first_derivative"})),r.a.createElement(E.a,{item:!0,xs:5,sm:5,md:5,lg:5},r.a.createElement(h.a,{align:"center",variant:"h5"},"Acceleration of Change"),r.a.createElement(F,{data:b,dataKey:"second_derivative"})),r.a.createElement(E.a,{item:!0,xs:10,sm:10,md:10,lg:10,style:{margin:20}},r.a.createElement(h.a,{align:"center",style:{textTransform:"capitalize"},variant:"h5"},"COVID-19 Trajectory (",m,")"),r.a.createElement(M,{scale:m,updateScale:p}),r.a.createElement(K,{data:C.slice(0,s),scale:m}),r.a.createElement(h.a,{align:"center",fontStyle:"oblique",style:{marginTop:20},variant:"body2"},"\u2190 Tune slider to view changes over time \u2192"),r.a.createElement(V,{dates:x,updateState:d,value:s}),r.a.createElement(E.a,{container:!0,direction:"column"},r.a.createElement(E.a,{item:!0},r.a.createElement(Q,{indexValue:s,maxIndex:k,speed:l,onStepClick:u,updateIndexState:d})),r.a.createElement(E.a,{item:!0},r.a.createElement(Y,{speed:l,setSpeed:c})))))}var te=a(520),ae=a(511),ne=Object(w.a)({backdrop:{zIndex:99999,color:"#fff"},progress:{color:"#3BBA9C"},text:{color:"#3BBA9C",fontSize:"1.25rem",marginRight:20}});function re(e){var t=e.open,a=ne();return r.a.createElement(te.a,{className:a.backdrop,open:t},r.a.createElement(h.a,{className:a.text,variant:"overline"},"Fetching data..."),r.a.createElement(ae.a,{className:a.progress,size:60,thickness:3}))}var le=a(214),ce=a(514),oe=a(517),ie=Object(w.a)({paper:{color:"#3BBA9C",background:"#3C3F58"},color:{color:"#3BBA9C"},textfield:{background:"#3C3F58","& label":{color:"#3BBA9C"},"& label.Mui-focused":{color:"#3BBA9C"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#3BBA9C"},"&:hover fieldset":{borderColor:"#3BBA9C"},"&.Mui-focused fieldset":{borderColor:"#3BBA9C"}}}});function se(e){var t=e.suggestions,a=e.updateState,n=ie();return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(oe.a,{id:"autocomplete-main",classes:{input:n.color,clearIndicator:n.color,popupIndicator:n.color,popupIndicatorOpen:n.color,paper:n.paper,noOptions:n.color},freeSolo:!0,options:t,onSelect:function(e){return a(e.target.value)},noOptionsText:"No countries match your search...",renderInput:function(e){return r.a.createElement(ce.a,Object.assign({},e,{className:n.textfield,label:"Search for a country",margin:"normal",variant:"outlined",InputProps:Object(le.a)({},e.InputProps,{type:"search"})}))}}))}var me=a(460),ue=a(211),de=a.n(ue),pe=Object(w.a)({root:{background:"#3C3F58",color:"#3BBA9C",height:48,"&:hover":{background:"#3C3F58"}}});function fe(e){var t=e.fetchData,a=pe();return r.a.createElement(v.a,{title:"Search"},r.a.createElement(me.a,{className:a.root,color:"inherit",fullWidth:!0,variant:"contained",onClick:t,startIcon:r.a.createElement(de.a,null)},"Search"))}var Ee=a(512),he=a(516),ge=a(513),ve=Object(w.a)({indicator:{background:"#3BBA9C"}});function be(e){var t=e.tabs,a=e.tabIndex,n=ve();return r.a.createElement(Ee.a,{position:"static",color:"inherit",style:{backgroundColor:"#3C3F58"}},r.a.createElement(he.a,{classes:{indicator:n.indicator},indicatorColor:"primary",scrollButtons:"auto",variant:"scrollable",value:a},Object(o.a)(t)))}function Ce(e){var t=e.clearState,a=e.handleTabChange,n=e.tabs,l=e.tabIndex,c=e.removeTab;return r.a.createElement(E.a,{container:!0,direction:"row",alignItems:"center",style:{marginTop:50,marginLeft:5,marginRight:5},spacing:1},r.a.createElement(E.a,{container:!0,direction:"row",justify:"flex-start"},r.a.createElement(E.a,{item:!0,sm:1,md:1,lg:1}),r.a.createElement(E.a,{item:!0,xs:4,sm:2,md:2,lg:2},r.a.createElement(h.a,{variant:"subtitle1"},"Country Tabs"))),r.a.createElement(E.a,{container:!0,direction:"row"},r.a.createElement(E.a,{item:!0,xs:1,sm:1,md:1,lg:1}),r.a.createElement(E.a,{item:!0,xs:12,sm:8,md:8,lg:8},r.a.createElement(be,{tabs:n,tabIndex:l})),r.a.createElement(E.a,{item:!0,xs:4,sm:2,md:2,lg:2},r.a.createElement(G.a,{color:"inherit"},r.a.createElement(v.a,{title:"Previous tab",placement:"top"},r.a.createElement(b.a,{onClick:function(){return a(Math.max(0,l-1))}},r.a.createElement(q.a,null))),r.a.createElement(v.a,{title:"Next tab",placement:"top"},r.a.createElement(b.a,{onClick:function(){return a(Math.min(l+1,n.length-1))}},r.a.createElement(U.a,null))),r.a.createElement(v.a,{title:"Close tab",placement:"top"},r.a.createElement(b.a,{onClick:function(e){return c(e,l)}},r.a.createElement(C.a,null))),r.a.createElement(v.a,{title:"Clear all",placement:"top"},r.a.createElement(b.a,{onClick:function(){return t("")}},r.a.createElement(ge.a,null)))))))}function xe(){return"_self"in r.a.createElement("div")}function ke(e,t){return t.reduce((function(t,a){return a.toLowerCase()===e.toLowerCase()?a:t}),null)}var ye=xe()?"http://localhost:5000/covid19/":"https://coronatracker-rest.herokuapp.com/covid19/",Se=xe()?"http://localhost:5000/valid-countries":"https://coronatracker-rest.herokuapp.com/valid-countries",Ie=(a(452),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).fetchData=function(){var e,t=n.state,a=t.countries,r=t.datum,l=t.tabs,c=t.userInput,i=t.validCountries;if(e=ke(c,a))n.setState({idxValue:0,tabIndex:a.indexOf(e)});else if(e=ke(c,i)){var s=a.length,m=s<8?a:a.slice(0,-1),u=s<8?r:r.slice(0,-1),d=s<8?l:l.slice(0,-1),p=ye+e;f.a.get(p).then((function(t){n.setState({countries:[].concat(Object(o.a)(m),[e]),datum:[].concat(Object(o.a)(u),[t.data]),idxValue:0,tabs:[].concat(Object(o.a)(d),[n.newTab(e,d.length)]),tabIndex:d.length,validated:""})})).catch((function(e){n.clearState(I),console.error(e)}))}else n.setState({idxValue:0,validated:S})},n.prefetchData=function(){f.a.get(Se).then((function(e){n.setState({loaded:!0,validCountries:e.data})})).catch((function(e){n.setState({loaded:!0,validated:I}),console.error(e)}))},n.newTab=function(e,t){return r.a.createElement(x,{country:e,key:t,index:t,handleClose:n.removeTab,handleChange:n.handleTabChange})},n.removeTab=function(e,t){e.stopPropagation();var a=n.state,r=a.countries,l=a.datum,c=a.tabs,o=a.tabIndex,i=function(e,a){return a!==t},s=t>o?o:Math.max(0,o-1),m=c.map((function(e,a){return a>t?n.newTab(r[a],a-1):e}));n.setState({countries:r.filter(i),datum:l.filter(i),tabs:m.filter(i),tabIndex:s})},n.showTabs=function(){var e=n.state,t=e.tabs,a=e.tabIndex;return 0===t.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(Ce,{clearState:n.clearState,handleTabChange:n.handleTabChange,tabs:t,tabIndex:a,removeTab:n.removeTab})},n.showGraphs=function(){var e=n.state,t=e.countries,a=e.datum,l=e.idxValue,c=e.scale,o=e.tabIndex;return 0===a.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(ee,{country:t[o],data:a[o],indexValue:l,scale:c,onStepClick:n.onStepClick,updateIndexState:n.updateIndexState,updateScale:n.updateScale})},n.clearState=function(e){n.setState({countries:[],datum:[],tabs:[],idxValue:0,tabIndex:0,validated:e})},n.onStepClick=function(e,t){var a=n.state.idxValue;t?n.setState({idxValue:a<e?a+1:0}):n.setState({idxValue:a>0?a-1:e})},n.handleTabChange=function(e){n.setState({tabIndex:e})},n.updateInputState=function(e){n.setState({userInput:e})},n.updateIndexState=function(e){n.setState({idxValue:e})},n.updateScale=function(e){n.setState({scale:e})},n.updateValidation=function(e){n.setState({validated:e})},n.state={countries:[],idxValue:0,userInput:"",datum:[],loaded:!1,scale:"log",tabs:[],tabIndex:0,validCountries:[],validated:""},n.clearState=n.clearState.bind(Object(m.a)(n)),n.handleTabChange=n.handleTabChange.bind(Object(m.a)(n)),n.onStepClick=n.onStepClick.bind(Object(m.a)(n)),n.updateInputState=n.updateInputState.bind(Object(m.a)(n)),n.updateIndexState=n.updateIndexState.bind(Object(m.a)(n)),n.updateScale=n.updateScale.bind(Object(m.a)(n)),n.updateValidation=n.updateValidation.bind(Object(m.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.prefetchData()}},{key:"render",value:function(){var e=this,t=this.state,a=t.loaded,n=t.validated,l=t.validCountries,c=t.userInput;return r.a.createElement("div",{id:"root-app"},r.a.createElement(B,{open:""!==n,message:n,handleClose:function(){return e.updateValidation("")}}),r.a.createElement(re,{open:!a}),r.a.createElement(E.a,{container:!0,spacing:2,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:12,sm:12,md:12,lg:12},r.a.createElement(h.a,{variant:"body1",color:"inherit",align:"center",style:{marginTop:40}},'Tracking COVID-19 movements and trends - search "Global" to get world view')),r.a.createElement(E.a,{item:!0,sm:!0,xs:!0,md:!0,lg:!0}),r.a.createElement(E.a,{item:!0,xs:5,sm:5,md:4,lg:4},r.a.createElement(se,{suggestions:l,fetchData:this.fetchData,updateState:this.updateInputState,value:c})),r.a.createElement(E.a,{item:!0,sm:3,xs:3,md:2,lg:2},r.a.createElement(fe,{fetchData:this.fetchData})),r.a.createElement(E.a,{item:!0,sm:!0,xs:!0,md:!0,lg:!0})),this.showTabs(),this.showGraphs(),r.a.createElement(j,null))}}]),a}(n.Component));c.a.render(r.a.createElement(Ie,null),document.getElementById("root"))}},[[249,1,2]]]);
//# sourceMappingURL=main.06f7bf06.chunk.js.map
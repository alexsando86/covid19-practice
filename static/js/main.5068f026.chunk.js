(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{174:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var c=n(315),a=n(0),r=n(22),o=n(76),i=n.n(o),s=n(316),l=n(155),d=n(310),j=n(15),b=n(302),u=n(317),h=n(112),O=n(2),f=function(e){var t=Object(b.b)().toggleColorMode,n=Object(b.c)("dark","light"),c=Object(b.c)(h.a,h.b);return Object(O.jsx)(u.a,Object(j.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(O.jsx)(c,{}),"aria-label":"Switch to ".concat(n," mode")},e))},x=n(318),g=n(28),m=n(63),C=n.n(m),p=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(d.a,{className:C.a.nav,justifyContent:"space-between",alignItems:"center",display:{base:"none",md:"flex"},children:[Object(O.jsx)("img",{className:C.a.covid19,src:"./images/alex.jpg",alt:"alex",width:"60px"}),Object(O.jsx)("nav",{children:Object(O.jsxs)(x.b,{className:C.a.ul,flexDirection:{base:"column",md:"row"},children:[Object(O.jsx)(x.a,{children:Object(O.jsx)(g.b,{to:"/",children:"\ucf54\ub85c\ub09819 \uac10\uc5fc \ud604\ud669"})}),Object(O.jsx)(x.a,{children:Object(O.jsx)(g.b,{to:"/SidoInfoState",children:"\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669"})}),Object(O.jsx)(x.a,{children:Object(O.jsx)(g.b,{to:"/GenAgeCaseInfo",children:"\uc5f0\ub839\ubcc4\xb7\uc131\ubcc4\uac10\uc5fc \ud604\ud669"})}),Object(O.jsx)(x.a,{children:Object(O.jsx)(g.b,{to:"/NatInfoState",children:"\ud574\uc678\ubc1c\uc0dd \ud604\ud669"})})]})})]}),Object(O.jsx)(d.a,{w:"100%",className:C.a.unList,display:{md:"none"},children:Object(O.jsx)("nav",{children:Object(O.jsxs)(x.b,{flexDirection:{base:"column",md:"row"},children:[Object(O.jsx)(x.a,{children:Object(O.jsx)(g.b,{to:"/",children:"\ucf54\ub85c\ub09819 \uac10\uc5fc \ud604\ud669"})}),Object(O.jsx)(x.a,{children:Object(O.jsx)(g.b,{to:"/SidoInfoState",children:"\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669"})}),Object(O.jsx)(x.a,{children:Object(O.jsx)(g.b,{to:"/GenAgeCaseInfo",children:"\uc5f0\ub839\ubcc4\xb7\uc131\ubcc4\uac10\uc5fc \ud604\ud669"})}),Object(O.jsx)(x.a,{children:Object(O.jsx)(g.b,{to:"/NatInfoState",children:"\ud574\uc678\ubc1c\uc0dd \ud604\ud669"})})]})})})]})},v=n(311),D=function(){return Object(O.jsxs)(v.a,{p:4,align:"center",style:{display:"none"},display:{md:"block !important"},children:["\uc81c\uacf5: \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138 (",Object(O.jsx)("a",{href:"https://www.data.go.kr/index.do",target:"_blank",rel:"noreferrer",children:"https://www.data.go.kr/index.do"}),")",Object(O.jsx)("p",{children:"Working day: 2021-07-19 ~ 2021-07-29"}),Object(O.jsx)("p",{children:"Creator: alexsando"})]})},S=n(14),N=(n(174),n(7)),w=n(312),I=n(314),R=n(313),Y=function(e){var t=e.children,n=e.title;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(w.a,{as:"h2",size:"md",p:4,children:["\ucf54\ub85c\ub09819 ",n]}),Object(O.jsx)(R.a,{minChildWidth:"375px",gap:6,w:"100%",h:"100%",p:4,overflow:{md:"hidden"},children:t instanceof Array&&t.map((function(e,t){return Object(O.jsx)(d.a,{alignItems:"center",w:"100%",h:"100%",p:4,boxShadow:"base",overflow:{md:"hidden"},children:e},t)}))})]})},A=n(16),y=n.n(A),E=n(150),_=n(32),k=n(3),L=n(4),M=function(){function e(t){Object(k.a)(this,e),this.count=void 0,this.colorArray=void 0,this.count=t,this.colorArray=[]}return Object(L.a)(e,[{key:"randomColor",value:function(){return Math.floor(255*Math.random())}},{key:"setRgbaColor",value:function(){for(var e=0;e<this.count;e++)this.colorArray.push("rgba(".concat(this.randomColor(),",").concat(this.randomColor(),",").concat(this.randomColor(),", 0.6)"));return this.colorArray}}]),e}(),T=function(e){var t=e.STATE_DT,n=e.DECIDE_CNT,c=e.TODAY_DATE,a=Object(b.c)("rgba(229, 229, 229)","rgba(255,255,255,0.5)"),r=Object(b.c)("gray.200","#fff"),o=new M(t.length),i={labels:t&&t.map((function(e){return"".concat(e.toString().slice(4).substring(0,2),"/").concat(e.toString().slice(4).substring(2))})),datasets:[{label:"\ub204\uc801 \ud655\uc9c4\uc790\uc218",data:n,backgroundColor:o.setRgbaColor(),borderColor:o.setRgbaColor(),borderWidth:1}]},s={plugins:{legend:{labels:{color:r}}},scales:{xAxis:{grid:{borderColor:a,color:a},ticks:{color:r}},yAxis:{ticks:{color:r},grid:{borderColor:a,color:a}}},maintainAspectRatio:!1},l=new M(4),d=c[0],j=d.decideCnt,u=d.clearCnt,h=d.careCnt,f=d.deathCnt,x={labels:["\ud655\uc9c4\uc790 \uc218","\uaca9\ub9ac\ud574\uc81c \uc218","\uce58\ub8cc\uc911 \ud658\uc790 \uc218","\uc0ac\ub9dd\uc790 \uc218"],datasets:[{label:y()(new Date).format("YYYY-MM-DD"),data:[j,u,h,f],backgroundColor:l.setRgbaColor(),borderColor:l.setRgbaColor(),borderWidth:1}]},g={plugins:{legend:{labels:{color:r}}},scales:{xAxis:{grid:{borderColor:a,color:a,drawTicks:!1},ticks:{}},yAxis:{grid:{borderColor:a,color:a,drawTicks:!1},ticks:{display:!1}}},maintainAspectRatio:!1};return Object(O.jsxs)(E.a,{templateRows:"repeat(2,1fr)",w:"100%",h:"100%",children:[Object(O.jsx)(v.a,{p:4,children:Object(O.jsx)(_.c,{data:i,options:s})}),Object(O.jsx)(v.a,{p:4,children:Object(O.jsx)(_.d,{data:x,options:g})})]})},F=n(64),z=n.n(F),U=n(111),G=n(153),V=n.n(G),W=n(154);n.n(W).a.config(),console.log("production");var B=new Date,H=B.getFullYear(),J=("0"+(B.getMonth()+1)).slice(-2),q=("0"+B.getMonth()).slice(-2),X=("0"+B.getDate()).slice(-2),P=("0"+(B.getDate()-1)).slice(-2),Z="".concat(H).concat(J).concat(X),Q="".concat(H).concat(J).concat(P),K="".concat(H).concat(q).concat(X),$="?"+encodeURIComponent("ServiceKey")+"=HoRvXlHzt4YAth4rfQmkQUXibIMl%2BmmW24iZZ8mYKPg0B9ZAAtYr6kVBtCf2Yf4n2XQWjRnDXZzDvE2XoLwVkg%3D%3D";$+="&"+encodeURIComponent("startCreateDt")+"="+encodeURIComponent(K),$+="&"+encodeURIComponent("endCreateDt")+"="+encodeURIComponent(Z);var ee=function(){var e=Object(U.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V()({method:"GET",url:"https://cors.bridged.cc/http://openapi.data.go.kr/openapi/service/rest/Covid19/".concat(t+$)}).then((function(e){return e.data.response.body.items.item})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(e){var t="";switch(e){case"OVERSEAS":t="\ud574\uc678\ubc1c\uc0dd \ud604\ud669";break;case"SIDOINFO":t="\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669";break;case"COVID19INFO":t="\uac10\uc5fc \ud604\ud669";break;case"GENAGECASEINFO":t="\uc5f0\ub839\ubcc4\xb7\uc131\ubcc4\uac10\uc5fc \ud604\ud669";break;default:return null}return function(n){var c=n.url,a=n.setLoadingState;return function(){var n=Object(U.a)(z.a.mark((function n(r){var o;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ee(c);case 3:o=n.sent,r({type:"".concat(e,"_SUCCESS"),payload:o}),a&&a(!1),console.log("".concat(t,": ").concat(e),o),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}},ne="COVID19INFO_PENDING",ce="COVID19INFO_SUCCESS",ae=te("COVID19INFO"),re={data:[{accDefRate:0,accExamCnt:0,accExamCompCnt:0,careCnt:0,clearCnt:0,createDt:"",deathCnt:0,decideCnt:0,examCnt:0,resutlNegCnt:0,seq:0,stateDt:0,stateTime:"",updateDt:""}]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(j.a)({},e);case ce:return Object(j.a)(Object(j.a)({},e),{},{data:t.payload});default:return e}},ie=n(319),se=function(){return Object(O.jsx)(d.a,{justifyContent:"center",alignItems:"center",position:"fixed",left:"0",right:"0",top:"0",bottom:"0",background:"gray.500",opacity:"0.7",children:Object(O.jsx)(ie.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"red.500",size:"xl"})})},le=n(50),de=n.n(le),je=function(){var e=Object(r.c)((function(e){return{covid19InfooReducer:e.covid19InfooReducer.data}})).covid19InfooReducer,t=Object(r.b)(),n=Object(a.useState)(!0),c=Object(N.a)(n,2),o=c[0],i=c[1],s=function(e){i(e)},l=e&&e.map((function(e){return e.stateDt})).sort((function(e,t){return e-t})).slice(-15),j=e&&e.map((function(e){return e.decideCnt})).sort((function(e,t){return e-t})).slice(-15),b=e&&e.filter((function(e){return y()(e.createDt).format("YYYYMMDD")===Z||y()(e.createDt).format("YYYYMMDD")===Q}));Object(a.useEffect)((function(){t(ae({url:"getCovid19InfStateJson",setLoadingState:s}))}),[]);var u=e&&e.map((function(e){return e})).sort((function(e,t){return e.stateDt-t.stateDt})).slice(-15).reverse(),h=null===u||void 0===u?void 0:u.find((function(e){return e.stateDt.toString()===y()(new Date).format("YYYYMMDD")})),f=null===u||void 0===u?void 0:u.find((function(e){return e.stateDt.toString()===(Number(y()(new Date).format("YYYYMMDD"))-1).toString()})),x=(null===h||void 0===h?void 0:h.decideCnt)-(null===f||void 0===f?void 0:f.decideCnt);return Object(O.jsxs)(O.Fragment,{children:[o&&Object(O.jsx)(se,{}),!o&&Object(O.jsxs)(Y,{title:"\uac10\uc5fc \ud604\ud669",children:[Object(O.jsx)(T,{STATE_DT:l,DECIDE_CNT:j,TODAY_DATE:b}),Object(O.jsxs)(d.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(O.jsx)(w.a,{size:"md",mb:4,children:"\ub204\uc801 \ub370\uc774\ud130"}),Object(O.jsx)(v.a,{h:"100%",overflow:"hidden",overflowY:"auto",flex:"1",children:Object(O.jsxs)(I.a,{variant:"striped",size:"sm",flex:"1",children:[Object(O.jsx)(I.b,{fontSize:"md",children:isNaN(x)?"10\uc2dc \uc774\ud6c4 \uc624\ub298\uc758 \ud655\uc9c4\uc790 \uc218 \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4.":"\uc624\ub298 \ud655\uc9c4\uc790 \uc218 : ".concat(x.toLocaleString(),"\uba85")}),Object(O.jsx)(I.f,{children:Object(O.jsxs)(I.g,{children:[Object(O.jsx)(I.e,{className:de.a.th,children:"\uae30\uc900\uc77c"}),Object(O.jsx)(I.e,{className:de.a.th,children:"\ud655\uc9c4\uc790 \uc218"}),Object(O.jsx)(I.e,{className:de.a.th,children:"\uaca9\ub9ac\ud574\uc81c \uc218"}),Object(O.jsx)(I.e,{className:de.a.th,children:"\uce58\ub8cc\uc911 \ud658\uc790 \uc218"}),Object(O.jsx)(I.e,{className:de.a.th,children:"\uc0ac\ub9dd\uc790 \uc218"}),Object(O.jsx)(I.e,{className:de.a.th,children:"\ud655\uc9c4\ub960"})]})}),Object(O.jsx)(I.c,{children:u&&u.map((function(e){return Object(O.jsxs)(I.g,{children:[Object(O.jsx)(I.d,{children:y()(e.stateDt.toString()).format("YYYY-MM-DD")}),Object(O.jsx)(I.d,{children:e.decideCnt.toLocaleString()}),Object(O.jsx)(I.d,{children:e.clearCnt.toLocaleString()}),Object(O.jsx)(I.d,{children:e.careCnt.toLocaleString()}),Object(O.jsx)(I.d,{children:e.deathCnt.toLocaleString()}),Object(O.jsx)(I.d,{children:Number(e.accDefRate).toFixed(2)})]},e.stateDt)}))})]})})]})]})]})},be=function(e){var t=e.DEF_CNT,n=e.GUBUN,c=new M(null===t||void 0===t?void 0:t.length),a={labels:n,datasets:[{label:n,data:null===t||void 0===t?void 0:t.filter((function(e){return"\ud569\uacc4"!==e.gubun})).map((function(e){return e.defCnt})),backgroundColor:c.setRgbaColor(),borderWidth:1}]},r=Object(b.c)("rgba(229, 229, 229)","rgba(255,255,255,0.5)"),o=Object(b.c)("gray.200","#fff"),i={plugins:{legend:{labels:{color:o}}},scales:{xAxis:{grid:{borderColor:r,color:r},ticks:{color:o}},yAxis:{grid:{borderColor:r,color:r},ticks:{color:o}}},maintainAspectRatio:!1},s={labels:n,datasets:[{label:"\uc9c0\uc5ed\ubcc4 \ud604\ud669",data:null===t||void 0===t?void 0:t.filter((function(e){return"\ud569\uacc4"!==e.gubun})).map((function(e){return e.defCnt})),backgroundColor:c.setRgbaColor(),borderWidth:1}]},l={plugins:{legend:{display:!1}},scales:{xAxis:{grid:{borderColor:r,color:r},ticks:{color:o}},yAxis:{ticks:{color:o},grid:{borderColor:r,color:r}}},maintainAspectRatio:!1};return Object(O.jsxs)(E.a,{templateRows:"repeat(2,1fr)",w:"100%",h:"100%",children:[Object(O.jsx)(v.a,{p:4,children:Object(O.jsx)(_.b,{data:a,options:i})}),Object(O.jsx)(v.a,{p:4,children:Object(O.jsx)(_.a,{data:s,options:l})})]})},ue="SIDOINFO_SUCCESS",he=te("SIDOINFO"),Oe={data:[{createDt:"",deathCnt:0,defCnt:0,gubun:"",gubunCn:"",gubunEn:"",incDec:0,isolClearCnt:0,isolIngCnt:0,localOccCnt:0,overFlowCnt:0,qurRate:"",seq:0,stdDay:"",updateDt:""}]},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object(j.a)(Object(j.a)({},e),{},{data:t.payload});default:return e}},xe=n(46),ge=n.n(xe),me=function(){var e=Object(r.c)((function(e){return{sidoInfoReducer:e.sidoInfoReducer.data}})).sidoInfoReducer,t=Object(r.b)(),n=Object(a.useState)(!0),c=Object(N.a)(n,2),o=c[0],i=c[1],s=function(e){i(e)},l=null===e||void 0===e?void 0:e.map((function(e){return e})).sort((function(e,t){return Number(y()(e.createDt).format("YYYYMMDD"))-Number(y()(t.createDt).format("YYYYMMDD"))})).slice(-18),j=null===l||void 0===l?void 0:l.filter((function(e){return"\ud569\uacc4"!==e.gubun})).map((function(e){return e.gubun})),b=null===l||void 0===l?void 0:l.map((function(e){return e})).sort((function(e,t){var n=e.gubun,c=t.gubun;return n.localeCompare(c)})),u=null===l||void 0===l?void 0:l.find((function(e){return y()(e.createDt).format("YYYYMMDD")}));return Object(a.useEffect)((function(){t(he({url:"getCovid19SidoInfStateJson",setLoadingState:s}))}),[]),Object(O.jsxs)(O.Fragment,{children:[o&&Object(O.jsx)(se,{}),!o&&Object(O.jsxs)(Y,{title:"\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669 (\ud655\uc9c4\uc790 \uc218)",children:[Object(O.jsx)(be,{DEF_CNT:l,GUBUN:j,isLoading:o,sidoInfoReducer:e&&e}),Object(O.jsxs)(d.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(O.jsx)(w.a,{size:"md",mb:4,children:"\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669"}),Object(O.jsx)(v.a,{h:"100%",overflow:"hidden",overflowY:"auto",flex:"1",children:Object(O.jsxs)(I.a,{variant:"striped",size:"sm",w:"100%",children:[Object(O.jsx)(I.b,{fontSize:"md",children:"".concat(y()(null===u||void 0===u?void 0:u.createDt).format("YYYY-MM-DD"))}),Object(O.jsx)(I.f,{children:Object(O.jsxs)(I.g,{children:[Object(O.jsx)(I.e,{className:ge.a.th,children:"\ub3c4\uc2dc\uba85"}),Object(O.jsx)(I.e,{className:ge.a.th,children:"\ud655\uc9c4\uc790 \uc218"}),Object(O.jsx)(I.e,{className:ge.a.th,children:"\uaca9\ub9ac\uc911 \ud658\uc790\uc218"}),Object(O.jsx)(I.e,{className:ge.a.th,children:"\uaca9\ub9ac \ud574\uc81c \uc218"}),Object(O.jsx)(I.e,{className:ge.a.th,children:"\uc804\uc77c\ub300\ube44 \uc99d\uac10 \uc218"}),Object(O.jsx)(I.e,{className:ge.a.th,children:"\ud574\uc678\uc720\uc785 \uc218"}),Object(O.jsx)(I.e,{className:ge.a.th,children:"\uc9c0\uc5ed\ubc1c\uc0dd \uc218"})]})}),Object(O.jsx)(I.c,{children:null===b||void 0===b?void 0:b.map((function(e){return Object(O.jsxs)(I.g,{children:[Object(O.jsx)(I.d,{children:e.gubun.toLocaleString()}),Object(O.jsx)(I.d,{children:e.defCnt.toLocaleString()}),Object(O.jsx)(I.d,{children:e.isolIngCnt.toLocaleString()}),Object(O.jsx)(I.d,{children:e.isolClearCnt.toLocaleString()}),Object(O.jsx)(I.d,{children:e.incDec.toLocaleString()}),Object(O.jsx)(I.d,{children:e.overFlowCnt.toLocaleString()}),Object(O.jsx)(I.d,{children:e.localOccCnt.toLocaleString()})]},e.gubun)}))})]})})]})]})]})},Ce=function(e){var t=e.CREACT_DT,n=t.map((function(e){return e.confCase})),c=t.map((function(e){return e.confCaseRate})),a=t.map((function(e){return e.gubun})),r=Object(b.c)("rgba(229, 229, 229)","rgba(255,255,255,0.5)"),o=Object(b.c)("gray.200","#fff"),i=new M(t.length),s={labels:a,datasets:[{label:"\ud655\uc9c4\uc790",data:n,backgroundColor:i.setRgbaColor()}]},l={indexAxis:"y",plugins:{legend:{labels:{color:o}}},scales:{xAxis:{grid:{borderColor:r,color:r},ticks:{color:o}},yAxis:{grid:{borderColor:r,color:r},ticks:{color:o}}},maintainAspectRatio:!1},d={labels:a,datasets:[{label:"\ud655\uc9c4\ub960",data:c,backgroundColor:i.setRgbaColor(),borderColor:i.setRgbaColor()}]};return Object(O.jsxs)(E.a,{templateRows:"repeat(2,1fr)",w:"100%",h:"100%",children:[Object(O.jsx)(v.a,{p:4,children:Object(O.jsx)(_.a,{data:s,options:l})}),Object(O.jsx)(v.a,{p:4,children:Object(O.jsx)(_.c,{data:d,options:l})})]})},pe="GENAGECASEINFO_SUCCESS",ve=te("GENAGECASEINFO"),De={data:[{confCase:8915,confCaseRate:4.76,createDt:"2021-07-24 14:19:04.902",criticalRate:0,death:0,deathRate:"0.00",gubun:"0-9",seq:10420,updateDt:"null"}]},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return Object(j.a)(Object(j.a)({},e),{},{data:t.payload});default:return e}},Ne=n(51),we=n.n(Ne),Ie=function(){var e=Object(r.c)((function(e){return{genAgeCaseInfoReducer:e.genAgeCaseInfoReducer.data}})).genAgeCaseInfoReducer,t=Object(r.b)(),n=Object(a.useState)(!0),c=Object(N.a)(n,2),o=c[0],i=c[1],s=function(e){i(e)},l=e&&e.map((function(e){return e})).sort((function(e,t){return Number(y()(e.createDt).format("YYYYMMDD"))-Number(y()(t.createDt).format("YYYYMMDD"))})).slice(-11);return Object(a.useEffect)((function(){t(ve({url:"getCovid19GenAgeCaseInfJson",setLoadingState:s}))}),[]),Object(O.jsxs)(O.Fragment,{children:[o&&Object(O.jsx)(se,{}),!o&&Object(O.jsxs)(Y,{title:"\uc5f0\ub839\ubcc4\xb7\uc131\ubcc4\uac10\uc5fc \ud604\ud669",children:[Object(O.jsx)(Ce,{genAgeCaseInfoReducer:e&&e,CREACT_DT:l}),Object(O.jsxs)(d.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(O.jsx)(w.a,{size:"md",mb:4,children:"\ub204\uc801 \ub370\uc774\ud130"}),Object(O.jsx)(v.a,{h:"100%",overflow:"hidden",overflowY:"auto",flex:"1",children:Object(O.jsxs)(I.a,{variant:"striped",size:"sm",w:"100%",children:[Object(O.jsx)(I.b,{fontSize:"md"}),Object(O.jsx)(I.f,{children:Object(O.jsxs)(I.g,{children:[Object(O.jsx)(I.e,{className:we.a.th,children:"\uad6c\ubd84(\uc131\ubcc4, \uc5f0\ub839\ubcc4)"}),Object(O.jsx)(I.e,{className:we.a.th,children:"\ud655\uc9c4\uc790"}),Object(O.jsx)(I.e,{className:we.a.th,children:"\ud655\uc9c4\ub960"}),Object(O.jsx)(I.e,{className:we.a.th,children:"\uc0ac\ub9dd\uc790"}),Object(O.jsx)(I.e,{className:we.a.th,children:"\uc0ac\ub9dd\ub960"}),Object(O.jsx)(I.e,{className:we.a.th,children:"\uce58\uba85\ub960"})]})}),Object(O.jsx)(I.c,{children:null===l||void 0===l?void 0:l.map((function(e){var t=e.gubun,n=e.confCase,c=e.confCaseRate,a=e.death,r=e.deathRate,o=e.criticalRate,i=t.indexOf("\ub0a8\uc131")>-1||t.indexOf("\uc5ec\uc131")>-1||t.indexOf("80 \uc774\uc0c1")>-1?t:"".concat(t,"\uc138");return Object(O.jsxs)(I.g,{children:[Object(O.jsx)(I.d,{children:i}),Object(O.jsx)(I.d,{children:n.toLocaleString()}),Object(O.jsx)(I.d,{children:c.toLocaleString()}),Object(O.jsx)(I.d,{children:a.toLocaleString()}),Object(O.jsx)(I.d,{children:r.toLocaleString()}),Object(O.jsx)(I.d,{children:o.toLocaleString()})]},t)}))})]})})]})]})]})},Re="OVERSEAS_SUCCESS",Ye=te("OVERSEAS"),Ae={data:[{areaNm:"",areaNmCn:"",areaNmEn:"",createDt:"",natDeathCnt:0,natDeathRate:0,natDefCnt:0,nationNm:"",nationNmCn:"",nationNmEn:"",seq:0,stdDay:"",updateDt:""}]},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:return Object(j.a)(Object(j.a)({},e),{},{data:t.payload});default:return e}},Ee=n(42),_e=n.n(Ee),ke=function(e){var t=e.CREATE_DT.filter((function(e){return"\ud55c\uad6d"===e.nationNm||"\ub300\ub9cc"===e.nationNm||"\uc911\uad6d"===e.nationNm||"\ubca0\ud2b8\ub0a8"===e.nationNm||"\uc77c\ubcf8"===e.nationNm||"\ub274\uc9c8\ub79c\ub4dc"===e.nationNm||"\ud0dc\uad6d"===e.nationNm})),n=t.map((function(e){return e.natDefCnt})),c=t.map((function(e){return e.nationNm})),a=Object(b.c)("rgba(229, 229, 229)","rgba(255,255,255,0.5)"),r=Object(b.c)("gray.200","#fff"),o=new M(t.length),i={labels:c,datasets:[{axis:"y",label:"\ud655\uc9c4\uc790 \uc218",data:n,fill:!1,backgroundColor:o.setRgbaColor(),borderColor:o.setRgbaColor(),borderWidth:1}]},s={indexAxis:"y",plugins:{legend:{display:!1}},scales:{xAxis:{grid:{borderColor:a,color:a},ticks:{color:r}},yAxis:{grid:{borderColor:a,color:a},ticks:{color:r}}},maintainAspectRatio:!1};return Object(O.jsx)(_.a,{data:i,options:s})},Le=function(){var e=Object(r.c)((function(e){return{overseasReducer:e.overseasReducer.data}})).overseasReducer,t=Object(r.b)(),n=Object(a.useState)(!0),c=Object(N.a)(n,2),o=c[0],i=c[1],s=function(e){i(e)},l=e&&e.map((function(e){return e})).sort((function(e,t){return Number(y()(e.createDt))-Number(y()(t.createDt))})).slice(-190);return Object(a.useEffect)((function(){t(Ye({url:"getCovid19NatInfStateJson",setLoadingState:s}))}),[]),Object(O.jsxs)(O.Fragment,{children:[o&&Object(O.jsx)(se,{}),!o&&Object(O.jsxs)(Y,{title:"\ud574\uc678\ubc1c\uc0dd \ud604\ud669",children:[Object(O.jsx)(ke,{isLoading:o,CREATE_DT:l}),Object(O.jsxs)(d.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(O.jsx)(w.a,{size:"md",mb:4,children:"\ud574\uc678\ubc1c\uc0dd \ud604\ud669"}),Object(O.jsx)(v.a,{h:"100%",overflow:"hidden",overflowY:"auto",flex:"1",children:Object(O.jsxs)(I.a,{variant:"striped",size:"sm",w:"100%",className:_e.a.table,children:[Object(O.jsx)(I.b,{fontSize:"md",children:"\ucf54\ub85c\ub09819 \ud574\uc678\ubc1c\uc0dd \ud604\ud669"}),Object(O.jsx)(I.f,{children:Object(O.jsxs)(I.g,{children:[Object(O.jsx)(I.e,{className:_e.a.th,children:"\uad6d\uac00\uba85"}),Object(O.jsx)(I.e,{className:_e.a.th,children:"\uc9c0\uc5ed\uba85"}),Object(O.jsx)(I.e,{className:_e.a.th,children:"\uad6d\uac00\ubcc4 \ud655\uc9c4\uc790 \uc218"}),Object(O.jsx)(I.e,{className:_e.a.th,children:"\uad6d\uac00\ubcc4 \uc0ac\ub9dd\uc790 \uc218"}),Object(O.jsx)(I.e,{className:_e.a.th,children:"\ud655\uc9c4\ub960 \ub300\ube44 \uc0ac\ub9dd\ub960"})]})}),Object(O.jsx)(I.c,{children:null===l||void 0===l?void 0:l.map((function(e){var t=e.areaNm,n=e.natDeathCnt,c=e.natDeathRate,a=e.natDefCnt,r=e.nationNm,o=e.nationNmEn;return Object(O.jsxs)(I.g,{className:"\uc77c\ubcf8"===r&&_e.a.special||"\ud55c\uad6d"===r&&_e.a.special,children:[Object(O.jsxs)(I.d,{children:[r," (",o,")"]}),Object(O.jsx)(I.d,{children:t}),Object(O.jsx)(I.d,{children:a.toLocaleString()}),Object(O.jsx)(I.d,{children:n.toLocaleString()}),Object(O.jsx)(I.d,{children:Number(c).toFixed(2)})]},r)}))})]})})]})]})]})},Me=function(){return Object(O.jsx)(s.a,{theme:l.theme,children:Object(O.jsxs)(d.a,{flexDirection:"column",w:"100vw",h:"100vh",children:[Object(O.jsxs)(d.a,{justifyContent:"space-between",alignItems:"center",px:4,borderBottomWidth:"1px",borderColor:"gray.200",boxShadow:"md",children:[Object(O.jsx)(p,{}),Object(O.jsx)(f,{})]}),Object(O.jsx)(S.a,{path:"/",exact:!0,component:je}),Object(O.jsx)(S.a,{path:"/SidoInfoState",component:me}),Object(O.jsx)(S.a,{path:"/GenAgeCaseInfo",component:Ie}),Object(O.jsx)(S.a,{path:"/NatInfoState",component:Le}),Object(O.jsx)(D,{})]})})},Te=n(62),Fe=n(157),ze=Object(Te.b)({overseasReducer:ye,sidoInfoReducer:fe,genAgeCaseInfoReducer:Se,covid19InfooReducer:oe}),Ue=Object(Te.c)(ze,Object(Te.a)(Fe.a));i.a.render(Object(O.jsxs)(a.StrictMode,{children:[Object(O.jsx)(c.a,{}),Object(O.jsxs)(r.a,{store:Ue,children:[!1,Object(O.jsx)(g.a,{children:Object(O.jsx)(Me,{})})]})]}),document.getElementById("root"))},42:function(e,t,n){e.exports={table:"NatInfoState_table__12iqH",special:"NatInfoState_special__3V9hF",th:"NatInfoState_th__2_ur3"}},46:function(e,t,n){e.exports={th:"SidoInfoState_th__H34Uc"}},50:function(e,t,n){e.exports={th:"Covid19State_th__3P31B"}},51:function(e,t,n){e.exports={th:"GenAgeCaseInfo_th__1aUxd"}},63:function(e,t,n){e.exports={nav:"Header_nav__2PsrS",ul:"Header_ul__2BdCC",unList:"Header_unList__28stJ"}}},[[300,1,2]]]);
//# sourceMappingURL=main.5068f026.chunk.js.map
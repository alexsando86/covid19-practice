(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{101:function(e,t,n){e.exports={nav:"Header_nav__2PsrS"}},106:function(e,t,n){e.exports={special:"NatInfoState_special__3V9hF"}},169:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var c=n(309),r=n(0),a=n(19),o=n(68),i=n.n(o),s=n(310),d=n(150),l=n(304),b=n(13),j=n(297),u=n(311),f=n(107),O=n(2),h=function(e){var t=Object(j.b)().toggleColorMode,n=Object(j.c)("dark","light"),c=Object(j.c)(f.a,f.b);return Object(O.jsx)(u.a,Object(b.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(O.jsx)(c,{}),"aria-label":"Switch to ".concat(n," mode")},e))},x=n(42),g=n(101),m=n.n(g),p=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(l.a,{className:m.a.nav,justifyContent:"space-between",alignItems:"center",flexDirection:{md:"row"},fontSize:{md:"15px"},children:[Object(O.jsx)("img",{className:m.a.covid19,src:"./images/alex.jpg",alt:"alex",width:"60px"}),Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(x.b,{to:"/",children:"\ucf54\ub85c\ub09819 \uac10\uc5fc \ud604\ud669"})}),Object(O.jsx)("li",{children:Object(O.jsx)(x.b,{to:"/SidoInfoState",children:"\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669"})}),Object(O.jsx)("li",{children:Object(O.jsx)(x.b,{to:"/GenAgeCaseInfo",children:"\uc5f0\ub839\ubcc4\xb7\uc131\ubcc4\uac10\uc5fc \ud604\ud669"})}),Object(O.jsx)("li",{children:Object(O.jsx)(x.b,{to:"/NatInfoState",children:"\ud574\uc678\ubc1c\uc0dd \ud604\ud669"})})]})})]})})},C=n(305),v=function(){return Object(O.jsxs)(C.a,{p:4,align:"center",style:{display:"none"},display:{md:"block !important"},children:["\uc81c\uacf5: \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138 (",Object(O.jsx)("a",{href:"https://www.data.go.kr/index.do",target:"_blank",rel:"noreferrer",children:"https://www.data.go.kr/index.do"}),")",Object(O.jsx)("p",{children:"Copyright \xa9 alexsando. All Rights Reserved."})]})},D=n(12),S=(n(169),n(4)),I=n(306),R=n(308),N=n(307),Y=function(e){var t=e.children,n=e.title;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(I.a,{as:"h2",size:"md",p:4,children:n}),Object(O.jsx)(N.a,{minChildWidth:"375px",gap:6,w:"100%",h:"100%",p:4,overflow:{md:"hidden"},children:t instanceof Array&&t.map((function(e,t){return Object(O.jsx)(l.a,{alignItems:"center",w:"100%",h:"100%",p:4,boxShadow:"base",overflow:{md:"hidden"},children:e},t)}))})]})},w=n(15),y=n.n(w),A=n(32),E=function(e){var t=e.covid19InfooReducer,n=t&&t.map((function(e){return e.stateDt})).sort((function(e,t){return e-t})).slice(-15),c=t&&t.map((function(e){return e.decideCnt})).sort((function(e,t){return e-t})).slice(-15),r={labels:n&&n.map((function(e){return"".concat(e.toString().slice(4).substring(0,2),"/").concat(e.toString().slice(4).substring(2))})),datasets:[{label:"\ub204\uc801 \ud655\uc9c4\uc790\uc218",data:c,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},a=Object(j.c)("rgba(229, 229, 229)","rgba(255,255,255,0.5)"),o=Object(j.c)("gray.200","#fff"),i={plugins:{legend:{labels:{color:o}}},scales:{xAxis:{grid:{borderColor:a,color:a},ticks:{color:o}},yAxis:{ticks:{color:o},grid:{borderColor:a,color:a}}},maintainAspectRatio:!1};return Object(O.jsx)(A.c,{data:r,options:i})},k=n(57),M=n.n(k),L=n(105),F=n(148),_=n.n(F),U=n(149);n.n(U).a.config(),console.log("production");var z=new Date,G=z.getFullYear(),T=("0"+(z.getMonth()+1)).slice(-2),V=("0"+z.getMonth()).slice(-2),W=("0"+z.getDate()).slice(-2),B=("0"+(z.getDate()-1)).slice(-2),J="".concat(G).concat(T).concat(W),q="".concat(G).concat(V).concat(B),X="?"+encodeURIComponent("ServiceKey")+"=HoRvXlHzt4YAth4rfQmkQUXibIMl%2BmmW24iZZ8mYKPg0B9ZAAtYr6kVBtCf2Yf4n2XQWjRnDXZzDvE2XoLwVkg%3D%3D";X+="&"+encodeURIComponent("pageNo")+"="+encodeURIComponent("1"),X+="&"+encodeURIComponent("numOfRows")+"="+encodeURIComponent("10"),X+="&"+encodeURIComponent("startCreateDt")+"="+encodeURIComponent(q),X+="&"+encodeURIComponent("endCreateDt")+"="+encodeURIComponent(J);var Z=function(){var e=Object(L.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()({method:"GET",url:"https://cors.bridged.cc/http://openapi.data.go.kr/openapi/service/rest/Covid19/".concat(t+X)}).then((function(e){return e.data.response.body.items.item})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t="";switch(e){case"OVERSEAS":t="\ud574\uc678\ubc1c\uc0dd \ud604\ud669";break;case"SIDOINFO":t="\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669";break;case"COVID19INFO":t="\uac10\uc5fc \ud604\ud669";break;case"GENAGECASEINFO":t="\uc5f0\ub839\ubcc4\xb7\uc131\ubcc4\uac10\uc5fc \ud604\ud669";break;default:return null}return function(n){var c=n.url,r=n.setLoadingState;return function(){var n=Object(L.a)(M.a.mark((function n(a){var o;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z(c);case 3:o=n.sent,a({type:"".concat(e,"_SUCCESS"),payload:o}),r&&r(!1),console.log("".concat(t,": ").concat(e),o),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}},P="COVID19INFO_PENDING",Q="COVID19INFO_SUCCESS",K=H("COVID19INFO"),$={data:[{accDefRate:0,accExamCnt:0,accExamCompCnt:0,careCnt:0,clearCnt:0,createDt:"",deathCnt:0,decideCnt:0,examCnt:0,resutlNegCnt:0,seq:0,stateDt:0,stateTime:"",updateDt:""}]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(b.a)({},e);case Q:return Object(b.a)(Object(b.a)({},e),{},{data:t.payload});default:return e}},te=n(312),ne=function(){return Object(O.jsx)(l.a,{justifyContent:"center",alignItems:"center",position:"fixed",left:"0",right:"0",top:"0",bottom:"0",background:"gray.500",opacity:"0.7",children:Object(O.jsx)(te.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"red.500",size:"xl"})})},ce=function(){var e=Object(a.c)((function(e){return{covid19InfooReducer:e.covid19InfooReducer.data,sidoInfoReducer:e.sidoInfoReducer.data}})),t=e.covid19InfooReducer,n=e.sidoInfoReducer,c=(null===n||void 0===n||n.map((function(e){return e})).sort((function(e,t){return Number(y()(e.createDt).format("YYYYMMDD"))-Number(y()(t.createDt).format("YYYYMMDD"))})).slice(-18),Object(a.b)()),o=Object(r.useState)(!0),i=Object(S.a)(o,2),s=i[0],d=i[1],b=function(e){d(e)};Object(r.useEffect)((function(){c(K({url:"getCovid19InfStateJson",setLoadingState:b}))}),[]);var j=t&&t.map((function(e){return e})).sort((function(e,t){return e.stateDt-t.stateDt})).slice(-15).reverse(),u=null===j||void 0===j?void 0:j.find((function(e){return e.stateDt.toString()===y()(new Date).format("YYYYMMDD")})),f=null===j||void 0===j?void 0:j.find((function(e){return e.stateDt.toString()===(Number(y()(new Date).format("YYYYMMDD"))-1).toString()})),h=(null===u||void 0===u?void 0:u.decideCnt)-(null===f||void 0===f?void 0:f.decideCnt);return Object(O.jsxs)(O.Fragment,{children:[s&&Object(O.jsx)(ne,{}),!s&&Object(O.jsxs)(Y,{title:"\uacf5\uacf5\ub370\uc774\ud130\ud65c\uc6a9\uc9c0\uc6d0\uc13c\ud130_\ubcf4\uac74\ubcf5\uc9c0\ubd80 \ucf54\ub85c\ub09819 \uac10\uc5fc \ud604\ud669",children:[Object(O.jsx)(E,{covid19InfooReducer:t&&t}),Object(O.jsxs)(l.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(O.jsx)(I.a,{size:"md",mb:4,children:"\ub204\uc801 \ub370\uc774\ud130"}),Object(O.jsxs)(R.a,{variant:"striped",size:"sm",flex:"1",children:[Object(O.jsx)(R.b,{fontSize:"md",children:isNaN(h)?"10\uc2dc \uc774\ud6c4 \uc624\ub298\uc758 \ud655\uc9c4\uc790 \uc218 \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4.":"\uc624\ub298 \ud655\uc9c4\uc790 \uc218 : ".concat(h.toLocaleString(),"\uba85")}),Object(O.jsx)(R.f,{children:Object(O.jsxs)(R.g,{children:[Object(O.jsx)(R.e,{children:"\uae30\uc900\uc77c"}),Object(O.jsx)(R.e,{children:"\ud655\uc9c4\uc790 \uc218"}),Object(O.jsx)(R.e,{children:"\uaca9\ub9ac\ud574\uc81c \uc218"}),Object(O.jsx)(R.e,{children:"\uce58\ub8cc\uc911 \ud658\uc790 \uc218"}),Object(O.jsx)(R.e,{children:"\uc0ac\ub9dd\uc790 \uc218"}),Object(O.jsx)(R.e,{children:"\ud655\uc9c4\ub960"})]})}),Object(O.jsx)(R.c,{children:j&&j.map((function(e){return Object(O.jsxs)(R.g,{children:[Object(O.jsx)(R.d,{children:y()(e.stateDt.toString()).format("YYYY-MM-DD")}),Object(O.jsx)(R.d,{children:e.decideCnt.toLocaleString()}),Object(O.jsx)(R.d,{children:e.clearCnt.toLocaleString()}),Object(O.jsx)(R.d,{children:e.careCnt.toLocaleString()}),Object(O.jsx)(R.d,{children:e.deathCnt.toLocaleString()}),Object(O.jsx)(R.d,{children:Number(e.accDefRate).toFixed(2)})]},e.stateDt)}))})]})]})]})]})},re=n(145),ae=function(e){var t=e.DEF_CNT,n=e.GUBUN,c=[],r=function(){return Math.floor(255*Math.random())};!function(e){for(var t=0;t<e;t++)c.push("rgba(".concat(r(),",").concat(r(),",").concat(r(),", 0.7)"))}(null===t||void 0===t?void 0:t.length);var a={labels:n,datasets:[{label:n,data:null===t||void 0===t?void 0:t.filter((function(e){return"\ud569\uacc4"!==e.gubun})).map((function(e){return e.defCnt})),backgroundColor:c,borderWidth:1}]},o=Object(j.c)("rgba(229, 229, 229)","rgba(255,255,255,0.5)"),i=Object(j.c)("gray.200","#fff"),s={plugins:{legend:{labels:{color:i}}},scales:{xAxis:{grid:{borderColor:o,color:o},ticks:{color:i}},yAxis:{grid:{borderColor:o,color:o},ticks:{color:i}}},maintainAspectRatio:!1},d={labels:n,datasets:[{label:"\uc9c0\uc5ed\ubcc4 \ud604\ud669",data:null===t||void 0===t?void 0:t.filter((function(e){return"\ud569\uacc4"!==e.gubun})).map((function(e){return e.defCnt})),backgroundColor:c,borderWidth:1}]},l={plugins:{legend:{display:!1}},scales:{xAxis:{grid:{borderColor:o,color:o},ticks:{color:i}},yAxis:{ticks:{color:i},grid:{borderColor:o,color:o}}},maintainAspectRatio:!1};return Object(O.jsxs)(re.a,{templateRows:"repeat(2,1fr)",w:"100%",h:"100%",children:[Object(O.jsx)(C.a,{p:4,children:Object(O.jsx)(A.b,{data:a,options:s})}),Object(O.jsx)(C.a,{p:4,children:Object(O.jsx)(A.a,{data:d,options:l})})]})},oe="SIDOINFO_SUCCESS",ie=H("SIDOINFO"),se={data:[{createDt:"",deathCnt:0,defCnt:0,gubun:"",gubunCn:"",gubunEn:"",incDec:0,isolClearCnt:0,isolIngCnt:0,localOccCnt:0,overFlowCnt:0,qurRate:"",seq:0,stdDay:"",updateDt:""}]},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(b.a)(Object(b.a)({},e),{},{data:t.payload});default:return e}},le=function(){var e=Object(a.c)((function(e){return{sidoInfoReducer:e.sidoInfoReducer.data}})).sidoInfoReducer,t=null===e||void 0===e?void 0:e.map((function(e){return e})).sort((function(e,t){return Number(y()(e.createDt).format("YYYYMMDD"))-Number(y()(t.createDt).format("YYYYMMDD"))})).slice(-18),n=null===t||void 0===t?void 0:t.filter((function(e){return"\ud569\uacc4"!==e.gubun})).map((function(e){return e.gubun})),c=null===t||void 0===t?void 0:t.map((function(e){return e})).sort((function(e,t){var n=e.gubun,c=t.gubun;return n.localeCompare(c)})),o=null===t||void 0===t?void 0:t.find((function(e){return y()(e.createDt).format("YYYYMMDD")})),i=Object(a.b)(),s=Object(r.useState)(!0),d=Object(S.a)(s,2),b=d[0],j=d[1],u=function(e){j(e)};return Object(r.useEffect)((function(){i(ie({url:"getCovid19SidoInfStateJson",setLoadingState:u}))}),[]),Object(O.jsxs)(O.Fragment,{children:[b&&Object(O.jsx)(ne,{}),!b&&Object(O.jsxs)(Y,{title:"\uacf5\uacf5\ub370\uc774\ud130\ud65c\uc6a9\uc9c0\uc6d0\uc13c\ud130_\ubcf4\uac74\ubcf5\uc9c0\ubd80 \ucf54\ub85c\ub09819 \uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669",children:[Object(O.jsx)(ae,{DEF_CNT:t,GUBUN:n,isLoading:b,sidoInfoReducer:e&&e}),Object(O.jsxs)(l.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(O.jsx)(I.a,{size:"md",mb:4,children:"\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669"}),Object(O.jsxs)(R.a,{variant:"striped",size:"sm",w:"100%",h:"100%",flex:"1",children:[Object(O.jsx)(R.b,{fontSize:"md",children:"".concat(y()(null===o||void 0===o?void 0:o.createDt).format("YYYY-MM-DD"))}),Object(O.jsx)(R.f,{children:Object(O.jsxs)(R.g,{children:[Object(O.jsx)(R.e,{children:"\ub3c4\uc2dc\uba85"}),Object(O.jsx)(R.e,{children:"\ud655\uc9c4\uc790 \uc218"}),Object(O.jsx)(R.e,{children:"\uaca9\ub9ac\uc911 \ud658\uc790\uc218"}),Object(O.jsx)(R.e,{children:"\uaca9\ub9ac \ud574\uc81c \uc218"}),Object(O.jsx)(R.e,{children:"\uc804\uc77c\ub300\ube44 \uc99d\uac10 \uc218"}),Object(O.jsx)(R.e,{children:"\ud574\uc678\uc720\uc785 \uc218"}),Object(O.jsx)(R.e,{children:"\uc9c0\uc5ed\ubc1c\uc0dd \uc218"})]})}),Object(O.jsx)(R.c,{children:null===c||void 0===c?void 0:c.map((function(e){return Object(O.jsxs)(R.g,{children:[Object(O.jsx)(R.d,{children:e.gubun.toLocaleString()}),Object(O.jsx)(R.d,{children:e.defCnt.toLocaleString()}),Object(O.jsx)(R.d,{children:e.isolIngCnt.toLocaleString()}),Object(O.jsx)(R.d,{children:e.isolClearCnt.toLocaleString()}),Object(O.jsx)(R.d,{children:e.incDec.toLocaleString()}),Object(O.jsx)(R.d,{children:e.overFlowCnt.toLocaleString()}),Object(O.jsx)(R.d,{children:e.localOccCnt.toLocaleString()})]},e.gubun)}))})]})]})]})]})},be=function(e){var t=e.CREACT_DT,n=t.map((function(e){return e.confCase})),c=t.map((function(e){return e.confCaseRate})),r=t.map((function(e){return e.gubun})),a=Object(j.c)("rgba(229, 229, 229)","rgba(255,255,255,0.5)"),o=Object(j.c)("gray.200","#fff"),i={labels:r,datasets:[{label:"\ud655\uc9c4\uc790",data:n,backgroundColor:["rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(255, 205, 86)","rgb(201, 203, 207)","rgb(54, 162, 235)"]}]},s={indexAxis:"y",plugins:{legend:{labels:{color:o}}},scales:{xAxis:{grid:{borderColor:a,color:a},ticks:{color:o}},yAxis:{grid:{borderColor:a,color:a},ticks:{color:o}}},maintainAspectRatio:!1},d={labels:r,datasets:[{label:"\ud655\uc9c4\ub960",data:c,backgroundColor:["rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(255, 205, 86)","rgb(201, 203, 207)","rgb(54, 162, 235)"],borderColor:a}]};return Object(O.jsxs)(re.a,{templateRows:"repeat(2,1fr)",w:"100%",h:"100%",children:[Object(O.jsx)(C.a,{p:4,children:Object(O.jsx)(A.a,{data:i,options:s})}),Object(O.jsx)(C.a,{p:4,children:Object(O.jsx)(A.c,{data:d,options:s})})]})},je="GENAGECASEINFO_SUCCESS",ue=H("GENAGECASEINFO"),fe={data:[{confCase:8915,confCaseRate:4.76,createDt:"2021-07-24 14:19:04.902",criticalRate:0,death:0,deathRate:"0.00",gubun:"0-9",seq:10420,updateDt:"null"}]},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(b.a)(Object(b.a)({},e),{},{data:t.payload});default:return e}},he=function(){var e=Object(a.c)((function(e){return{genAgeCaseInfoReducer:e.genAgeCaseInfoReducer.data}})).genAgeCaseInfoReducer,t=Object(a.b)(),n=Object(r.useState)(!0),c=Object(S.a)(n,2),o=c[0],i=c[1],s=function(e){i(e)};Object(r.useEffect)((function(){t(ue({url:"getCovid19GenAgeCaseInfJson",setLoadingState:s}))}),[]);var d=e&&e.map((function(e){return e})).sort((function(e,t){return Number(y()(e.createDt).format("YYYYMMDD"))-Number(y()(t.createDt).format("YYYYMMDD"))})).slice(-11);return Object(O.jsxs)(O.Fragment,{children:[o&&Object(O.jsx)(ne,{}),!o&&Object(O.jsxs)(Y,{title:"\uacf5\uacf5\ub370\uc774\ud130\ud65c\uc6a9\uc9c0\uc6d0\uc13c\ud130_\ubcf4\uac74\ubcf5\uc9c0\ubd80 \ucf54\ub85c\ub09819 \uc5f0\ub839\ubcc4\xb7\uc131\ubcc4\uac10\uc5fc \ud604\ud669",children:[Object(O.jsx)(be,{genAgeCaseInfoReducer:e&&e,CREACT_DT:d}),Object(O.jsx)(l.a,{flexDirection:"column",w:"100%",h:"100%",children:Object(O.jsxs)(R.a,{variant:"striped",size:"sm",flex:"1",children:[Object(O.jsx)(R.b,{fontSize:"md"}),Object(O.jsx)(R.f,{children:Object(O.jsxs)(R.g,{children:[Object(O.jsx)(R.e,{children:"\uad6c\ubd84(\uc131\ubcc4, \uc5f0\ub839\ubcc4)"}),Object(O.jsx)(R.e,{children:"\ud655\uc9c4\uc790"}),Object(O.jsx)(R.e,{children:"\ud655\uc9c4\ub960"}),Object(O.jsx)(R.e,{children:"\uc0ac\ub9dd\uc790"}),Object(O.jsx)(R.e,{children:"\uc0ac\ub9dd\ub960"}),Object(O.jsx)(R.e,{children:"\uce58\uba85\ub960"})]})}),Object(O.jsx)(R.c,{children:null===d||void 0===d?void 0:d.map((function(e){var t=e.gubun,n=e.confCase,c=e.confCaseRate,r=e.death,a=e.deathRate,o=e.criticalRate,i=t.indexOf("\ub0a8\uc131")>-1||t.indexOf("\uc5ec\uc131")>-1||t.indexOf("80 \uc774\uc0c1")>-1?t:"".concat(t,"\uc138");return Object(O.jsxs)(R.g,{children:[Object(O.jsx)(R.d,{children:i}),Object(O.jsx)(R.d,{children:n.toLocaleString()}),Object(O.jsx)(R.d,{children:c.toLocaleString()}),Object(O.jsx)(R.d,{children:r.toLocaleString()}),Object(O.jsx)(R.d,{children:a.toLocaleString()}),Object(O.jsx)(R.d,{children:o.toLocaleString()})]},t)}))})]})})]})]})},xe="OVERSEAS_SUCCESS",ge=H("OVERSEAS"),me={data:[{areaNm:"",areaNmCn:"",areaNmEn:"",createDt:"",natDeathCnt:0,natDeathRate:0,natDefCnt:0,nationNm:"",nationNmCn:"",nationNmEn:"",seq:0,stdDay:"",updateDt:""}]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(b.a)(Object(b.a)({},e),{},{data:t.payload});default:return e}},Ce=function(e){var t=e.CREATE_DT.filter((function(e){return"\ud55c\uad6d"===e.nationNm||"\ub300\ub9cc"===e.nationNm||"\uc911\uad6d"===e.nationNm||"\ubca0\ud2b8\ub0a8"===e.nationNm||"\uc77c\ubcf8"===e.nationNm||"\ub274\uc9c8\ub79c\ub4dc"===e.nationNm||"\ud0dc\uad6d"===e.nationNm})),n=t.map((function(e){return e.natDefCnt})),c=t.map((function(e){return e.nationNm})),r=Object(j.c)("rgba(229, 229, 229)","rgba(255,255,255,0.5)"),a=Object(j.c)("gray.200","#fff"),o={labels:c,datasets:[{axis:"y",label:"My First Dataset",data:n,fill:!1,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],borderWidth:1}]},i={indexAxis:"y",plugins:{legend:{display:!1}},scales:{xAxis:{grid:{borderColor:r,color:r},ticks:{color:a}},yAxis:{grid:{borderColor:r,color:r},ticks:{color:a}}},maintainAspectRatio:!1};return Object(O.jsx)(A.a,{data:o,options:i})},ve=n(106),De=n.n(ve),Se=function(){var e=Object(a.c)((function(e){return{overseasReducer:e.overseasReducer.data}})).overseasReducer,t=Object(a.b)(),n=Object(r.useState)(!0),c=Object(S.a)(n,2),o=c[0],i=c[1],s=function(e){i(e)},d=e&&e.map((function(e){return e})).sort((function(e,t){return Number(y()(e.createDt))-Number(y()(t.createDt))})).slice(-190);return Object(r.useEffect)((function(){t(ge({url:"getCovid19NatInfStateJson",setLoadingState:s}))}),[]),Object(O.jsxs)(O.Fragment,{children:[o&&Object(O.jsx)(ne,{}),!o&&Object(O.jsxs)(Y,{title:"\uacf5\uacf5\ub370\uc774\ud130\ud65c\uc6a9\uc9c0\uc6d0\uc13c\ud130_\ubcf4\uac74\ubcf5\uc9c0\ubd80 \ucf54\ub85c\ub09819\ud574\uc678\ubc1c\uc0dd \ud604\ud669",children:[Object(O.jsx)(Ce,{isLoading:o,CREATE_DT:d}),Object(O.jsxs)(l.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(O.jsx)(I.a,{size:"md",mb:4,children:"\ud574\uc678\ubc1c\uc0dd \ud604\ud669"}),Object(O.jsx)(C.a,{h:"100%",overflow:"hidden",overflowY:"auto",flex:"1",children:Object(O.jsxs)(R.a,{variant:"striped",size:"sm",w:"100%",h:"100%",children:[Object(O.jsx)(R.b,{fontSize:"md",children:"\ucf54\ub85c\ub09819 \ud574\uc678\ubc1c\uc0dd \ud604\ud669"}),Object(O.jsx)(R.f,{children:Object(O.jsxs)(R.g,{children:[Object(O.jsx)(R.e,{children:"\uad6d\uac00\uba85"}),Object(O.jsx)(R.e,{children:"\uc9c0\uc5ed\uba85"}),Object(O.jsx)(R.e,{children:"\uad6d\uac00\ubcc4 \ud655\uc9c4\uc790 \uc218"}),Object(O.jsx)(R.e,{children:"\uad6d\uac00\ubcc4 \uc0ac\ub9dd\uc790 \uc218"}),Object(O.jsx)(R.e,{children:"\ud655\uc9c4\ub960 \ub300\ube44 \uc0ac\ub9dd\ub960"})]})}),Object(O.jsx)(R.c,{children:null===d||void 0===d?void 0:d.map((function(e){var t=e.areaNm,n=e.natDeathCnt,c=e.natDeathRate,r=e.natDefCnt,a=e.nationNm,o=e.nationNmEn;return Object(O.jsxs)(R.g,{className:"\uc77c\ubcf8"===a&&De.a.special||"\ud55c\uad6d"===a&&De.a.special,children:[Object(O.jsxs)(R.d,{children:[a," (",o,")"]}),Object(O.jsx)(R.d,{children:t}),Object(O.jsx)(R.d,{children:r.toLocaleString()}),Object(O.jsx)(R.d,{children:n.toLocaleString()}),Object(O.jsx)(R.d,{children:Number(c).toFixed(2)})]},a)}))})]})})]})]})]})},Ie=function(){return Object(O.jsx)(s.a,{theme:d.theme,children:Object(O.jsxs)(l.a,{flexDirection:"column",w:"100vw",h:"100vh",children:[Object(O.jsxs)(l.a,{justifyContent:"space-between",alignItems:"center",px:4,borderBottomWidth:"1px",borderColor:"gray.200",boxShadow:"md",children:[Object(O.jsx)(p,{}),Object(O.jsx)(h,{})]}),Object(O.jsx)(D.a,{path:"/",exact:!0,component:ce}),Object(O.jsx)(D.a,{path:"/SidoInfoState",component:le}),Object(O.jsx)(D.a,{path:"/GenAgeCaseInfo",component:he}),Object(O.jsx)(D.a,{path:"/NatInfoState",component:Se}),Object(O.jsx)(v,{})]})})},Re=n(56),Ne=n(152),Ye=Object(Re.b)({overseasReducer:pe,sidoInfoReducer:de,genAgeCaseInfoReducer:Oe,covid19InfooReducer:ee}),we=Object(Re.c)(Ye,Object(Re.a)(Ne.a));i.a.render(Object(O.jsxs)(r.StrictMode,{children:[Object(O.jsx)(c.a,{}),Object(O.jsxs)(a.a,{store:we,children:[!1,Object(O.jsx)(x.a,{children:Object(O.jsx)(Ie,{})})]})]}),document.getElementById("root"))}},[[295,1,2]]]);
//# sourceMappingURL=main.6cbd1591.chunk.js.map
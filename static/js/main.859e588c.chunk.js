(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{101:function(e,t,n){e.exports={nav:"Header_nav__2PsrS"}},106:function(e,t,n){e.exports={special:"NatInfoState_special__3V9hF"}},169:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var c=n(309),r=n(0),a=n(18),o=n(68),i=n.n(o),s=n(310),d=n(150),l=n(304),j=n(13),b=n(297),u=n(311),O=n(107),h=n(2),f=function(e){var t=Object(b.b)().toggleColorMode,n=Object(b.c)("dark","light"),c=Object(b.c)(O.a,O.b);return Object(h.jsx)(u.a,Object(j.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(h.jsx)(c,{}),"aria-label":"Switch to ".concat(n," mode")},e))},x=n(42),g=n(101),m=n.n(g),p=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(l.a,{className:m.a.nav,justifyContent:"space-between",alignItems:"center",flexDirection:{md:"row"},fontSize:{md:"15px"},children:[Object(h.jsx)("img",{className:m.a.covid19,src:"./images/alex.jpg",alt:"alex",width:"60px"}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{to:"/",children:"\ucf54\ub85c\ub09819 \uac10\uc5fc \ud604\ud669"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{to:"/SidoInfoState",children:"\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{to:"/GenAgeCaseInfo",children:"\uc5f0\ub839\ubcc4\xb7\uc131\ubcc4\uac10\uc5fc \ud604\ud669"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{to:"/NatInfoState",children:"\ud574\uc678\ubc1c\uc0dd \ud604\ud669"})})]})})]})})},C=n(305),v=function(){return Object(h.jsxs)(C.a,{p:4,align:"center",style:{display:"none"},display:{md:"block !important"},children:["\uc81c\uacf5: \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138 (",Object(h.jsx)("a",{href:"https://www.data.go.kr/index.do",target:"_blank",rel:"noreferrer",children:"https://www.data.go.kr/index.do"}),")",Object(h.jsx)("p",{children:"Copyright \xa9 alexsando. All Rights Reserved."})]})},D=n(12),S=(n(169),n(4)),I=n(306),R=n(308),N=n(307),w=function(e){var t=e.children,n=e.title;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(I.a,{as:"h2",size:"md",p:4,children:n}),Object(h.jsx)(N.a,{minChildWidth:"375px",gap:6,w:"100%",h:"100%",p:4,overflow:{md:"hidden"},children:t instanceof Array&&t.map((function(e,t){return Object(h.jsx)(l.a,{alignItems:"center",w:"100%",h:"100%",p:4,boxShadow:"base",overflow:{md:"hidden"},children:e},t)}))})]})},E=n(16),Y=n.n(E),y=n(32),A=function(e){var t=e.covid19InfooReducer,n=t&&t.map((function(e){return e.stateDt})).sort((function(e,t){return e-t})).slice(-15),c=t&&t.map((function(e){return e.decideCnt})).sort((function(e,t){return e-t})).slice(-15),r={labels:n&&n.map((function(e){return"".concat(e.toString().slice(4).substring(0,2),"/").concat(e.toString().slice(4).substring(2))})),datasets:[{label:"\ub204\uc801 \ud655\uc9c4\uc790\uc218",data:c,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]};return Object(h.jsx)(y.c,{data:r,options:{legend:{display:!1},scales:{yAxes:[{ticks:{min:0,stepSize:1}}]},maintainAspectRatio:!1}})},k=n(57),L=n.n(k),M=n(105),F=n(148),_=n.n(F),z=n(149);n.n(z).a.config(),console.log("production");var U=new Date,G=U.getFullYear(),T=("0"+(U.getMonth()+1)).slice(-2),V=("0"+U.getMonth()).slice(-2),W=("0"+U.getDate()).slice(-2),B=("0"+(U.getDate()-1)).slice(-2),J="".concat(G).concat(T).concat(W),q="".concat(G).concat(V).concat(B),X="?"+encodeURIComponent("ServiceKey")+"=HoRvXlHzt4YAth4rfQmkQUXibIMl%2BmmW24iZZ8mYKPg0B9ZAAtYr6kVBtCf2Yf4n2XQWjRnDXZzDvE2XoLwVkg%3D%3D";X+="&"+encodeURIComponent("pageNo")+"="+encodeURIComponent("1"),X+="&"+encodeURIComponent("numOfRows")+"="+encodeURIComponent("10"),X+="&"+encodeURIComponent("startCreateDt")+"="+encodeURIComponent(q),X+="&"+encodeURIComponent("endCreateDt")+"="+encodeURIComponent(J);var Z=function(){var e=Object(M.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_()({method:"GET",url:"https://cors.bridged.cc/http://openapi.data.go.kr/openapi/service/rest/Covid19/".concat(t+X)}).then((function(e){return e.data.response.body.items.item})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t="";switch(e){case"OVERSEAS":t="\ud574\uc678\ubc1c\uc0dd \ud604\ud669";break;case"SIDOINFO":t="\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669";break;case"COVID19INFO":t="\uac10\uc5fc \ud604\ud669";break;case"GENAGECASEINFO":t="\uc5f0\ub839\ubcc4\xb7\uc131\ubcc4\uac10\uc5fc \ud604\ud669";break;default:return null}return function(n){var c=n.url,r=n.setLoadingState;return function(){var n=Object(M.a)(L.a.mark((function n(a){var o;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z(c);case 3:o=n.sent,a({type:"".concat(e,"_SUCCESS"),payload:o}),r(!1),console.log("".concat(t,": ").concat(e),o),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}},P="COVID19INFO_PENDING",Q="COVID19INFO_SUCCESS",K=H("COVID19INFO"),$={data:[{accDefRate:0,accExamCnt:0,accExamCompCnt:0,careCnt:0,clearCnt:0,createDt:"",deathCnt:0,decideCnt:0,examCnt:0,resutlNegCnt:0,seq:0,stateDt:0,stateTime:"",updateDt:""}]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(j.a)({},e);case Q:return Object(j.a)(Object(j.a)({},e),{},{data:t.payload});default:return e}},te=n(312),ne=function(){return Object(h.jsx)(l.a,{justifyContent:"center",alignItems:"center",position:"fixed",left:"0",right:"0",top:"0",bottom:"0",background:"gray.500",opacity:"0.7",children:Object(h.jsx)(te.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"red.500",size:"xl"})})},ce=function(){var e=Object(a.c)((function(e){return{covid19InfooReducer:e.covid19InfooReducer.data}})).covid19InfooReducer,t=Object(a.b)(),n=Object(r.useState)(!0),c=Object(S.a)(n,2),o=c[0],i=c[1],s=function(e){i(e)};Object(r.useEffect)((function(){t(K({url:"getCovid19InfStateJson",setLoadingState:s}))}),[]);var d=e&&e.map((function(e){return e})).sort((function(e,t){return e.stateDt-t.stateDt})).slice(-15).reverse(),j=null===d||void 0===d?void 0:d.find((function(e){return e.stateDt.toString()===Y()(new Date).format("YYYYMMDD")})),b=null===d||void 0===d?void 0:d.find((function(e){return e.stateDt.toString()===(Number(Y()(new Date).format("YYYYMMDD"))-1).toString()})),u=(null===j||void 0===j?void 0:j.decideCnt)-(null===b||void 0===b?void 0:b.decideCnt);return Object(h.jsxs)(h.Fragment,{children:[o&&Object(h.jsx)(ne,{}),!o&&Object(h.jsxs)(w,{title:"\uacf5\uacf5\ub370\uc774\ud130\ud65c\uc6a9\uc9c0\uc6d0\uc13c\ud130_\ubcf4\uac74\ubcf5\uc9c0\ubd80 \ucf54\ub85c\ub09819 \uac10\uc5fc \ud604\ud669",children:[Object(h.jsx)(A,{covid19InfooReducer:e&&e}),Object(h.jsxs)(l.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(h.jsx)(I.a,{size:"md",mb:4,children:"\ub204\uc801 \ub370\uc774\ud130"}),Object(h.jsxs)(R.a,{variant:"striped",size:"sm",flex:"1",children:[Object(h.jsx)(R.b,{fontSize:"md",children:isNaN(u)?"10\uc2dc \uc774\ud6c4 \uc624\ub298\uc758 \ud655\uc9c4\uc790 \uc218 \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4.":"\uc624\ub298 \ud655\uc9c4\uc790 \uc218 : ".concat(u.toLocaleString(),"\uba85")}),Object(h.jsx)(R.f,{children:Object(h.jsxs)(R.g,{children:[Object(h.jsx)(R.e,{children:"\uae30\uc900\uc77c"}),Object(h.jsx)(R.e,{children:"\ud655\uc9c4\uc790 \uc218"}),Object(h.jsx)(R.e,{children:"\uaca9\ub9ac\ud574\uc81c \uc218"}),Object(h.jsx)(R.e,{children:"\uce58\ub8cc\uc911 \ud658\uc790 \uc218"}),Object(h.jsx)(R.e,{children:"\uc0ac\ub9dd\uc790 \uc218"}),Object(h.jsx)(R.e,{children:"\ud655\uc9c4\ub960"})]})}),Object(h.jsx)(R.c,{children:d&&d.map((function(e){return Object(h.jsxs)(R.g,{children:[Object(h.jsx)(R.d,{children:Y()(e.stateDt.toString()).format("YYYY-MM-DD")}),Object(h.jsx)(R.d,{children:e.decideCnt.toLocaleString()}),Object(h.jsx)(R.d,{children:e.clearCnt.toLocaleString()}),Object(h.jsx)(R.d,{children:e.careCnt.toLocaleString()}),Object(h.jsx)(R.d,{children:e.deathCnt.toLocaleString()}),Object(h.jsx)(R.d,{children:Number(e.accDefRate).toFixed(2)})]},e.stateDt)}))})]})]})]})]})},re=n(145),ae=function(e){var t=e.DEF_CNT,n=e.GUBUN,c=[],r=function(){return Math.floor(255*Math.random())};!function(e){for(var t=0;t<e;t++)c.push("rgba(".concat(r(),",").concat(r(),",").concat(r(),", 0.7)"))}(null===t||void 0===t?void 0:t.length);var a={labels:n,datasets:[{label:n,data:null===t||void 0===t?void 0:t.filter((function(e){return"\ud569\uacc4"!==e.gubun})).map((function(e){return e.defCnt})),backgroundColor:c,borderWidth:1}]},o={labels:n,datasets:[{label:"\uc9c0\uc5ed\ubcc4 \ud604\ud669",data:null===t||void 0===t?void 0:t.filter((function(e){return"\ud569\uacc4"!==e.gubun})).map((function(e){return e.defCnt})),backgroundColor:c,borderWidth:1}]};return Object(h.jsxs)(re.a,{templateRows:"repeat(2,1fr)",w:"100%",h:"100%",children:[Object(h.jsx)(C.a,{p:4,children:Object(h.jsx)(y.b,{data:a,options:{maintainAspectRatio:!1}})}),Object(h.jsx)(C.a,{p:4,children:Object(h.jsx)(y.a,{data:o,options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1}})})]})},oe="SIDOINFO_SUCCESS",ie=H("SIDOINFO"),se={data:[{createDt:"",deathCnt:0,defCnt:0,gubun:"",gubunCn:"",gubunEn:"",incDec:0,isolClearCnt:0,isolIngCnt:0,localOccCnt:0,overFlowCnt:0,qurRate:"",seq:0,stdDay:"",updateDt:""}]},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(j.a)(Object(j.a)({},e),{},{data:t.payload});default:return e}},le=function(){var e=Object(a.c)((function(e){return{sidoInfoReducer:e.sidoInfoReducer.data}})).sidoInfoReducer,t=null===e||void 0===e?void 0:e.map((function(e){return e})).sort((function(e,t){return Number(Y()(e.createDt).format("YYYYMMDD"))-Number(Y()(t.createDt).format("YYYYMMDD"))})).slice(-18),n=null===t||void 0===t?void 0:t.filter((function(e){return"\ud569\uacc4"!==e.gubun})).map((function(e){return e.gubun})),c=null===t||void 0===t?void 0:t.find((function(e){return Y()(e.createDt).format("YYYYMMDD")})),o=Object(a.b)(),i=Object(r.useState)(!0),s=Object(S.a)(i,2),d=s[0],j=s[1],b=function(e){j(e)};return Object(r.useEffect)((function(){o(ie({url:"getCovid19SidoInfStateJson",setLoadingState:b}))}),[]),Object(h.jsxs)(h.Fragment,{children:[d&&Object(h.jsx)(ne,{}),!d&&Object(h.jsxs)(w,{title:"\uacf5\uacf5\ub370\uc774\ud130\ud65c\uc6a9\uc9c0\uc6d0\uc13c\ud130_\ubcf4\uac74\ubcf5\uc9c0\ubd80 \ucf54\ub85c\ub09819 \uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669",children:[Object(h.jsx)(ae,{DEF_CNT:t,GUBUN:n,isLoading:d,sidoInfoReducer:e&&e}),Object(h.jsxs)(l.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(h.jsx)(I.a,{size:"md",mb:4,children:"\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669"}),Object(h.jsxs)(R.a,{variant:"striped",size:"sm",w:"100%",h:"100%",flex:"1",children:[Object(h.jsx)(R.b,{fontSize:"md",children:"".concat(Y()(null===c||void 0===c?void 0:c.createDt).format("YYYY-MM-DD"))}),Object(h.jsx)(R.f,{children:Object(h.jsxs)(R.g,{children:[Object(h.jsx)(R.e,{children:"\ub3c4\uc2dc\uba85"}),Object(h.jsx)(R.e,{children:"\ud655\uc9c4\uc790 \uc218"}),Object(h.jsx)(R.e,{children:"\uaca9\ub9ac\uc911 \ud658\uc790\uc218"}),Object(h.jsx)(R.e,{children:"\uaca9\ub9ac \ud574\uc81c \uc218"}),Object(h.jsx)(R.e,{children:"\uc804\uc77c\ub300\ube44 \uc99d\uac10 \uc218"}),Object(h.jsx)(R.e,{children:"\ud574\uc678\uc720\uc785 \uc218"}),Object(h.jsx)(R.e,{children:"\uc9c0\uc5ed\ubc1c\uc0dd \uc218"})]})}),Object(h.jsx)(R.c,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(h.jsxs)(R.g,{children:[Object(h.jsx)(R.d,{children:e.gubun.toLocaleString()}),Object(h.jsx)(R.d,{children:e.defCnt.toLocaleString()}),Object(h.jsx)(R.d,{children:e.isolIngCnt.toLocaleString()}),Object(h.jsx)(R.d,{children:e.isolClearCnt.toLocaleString()}),Object(h.jsx)(R.d,{children:e.incDec.toLocaleString()}),Object(h.jsx)(R.d,{children:e.overFlowCnt.toLocaleString()}),Object(h.jsx)(R.d,{children:e.localOccCnt.toLocaleString()})]},e.gubun)}))})]})]})]})]})},je=function(e){var t=e.CREACT_DT,n=t.map((function(e){return e.confCase})),c=t.map((function(e){return e.confCaseRate})),r=t.map((function(e){return e.gubun})),a={labels:r,datasets:[{label:"\ud655\uc9c4\uc790",data:n,backgroundColor:["rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(255, 205, 86)","rgb(201, 203, 207)","rgb(54, 162, 235)"]}]},o={indexAxis:"y",plugins:{legend:{display:!1}}},i={labels:r,datasets:[{label:"\ud655\uc9c4\ub960",data:c,backgroundColor:["rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(255, 205, 86)","rgb(201, 203, 207)","rgb(54, 162, 235)"]}]};return Object(h.jsxs)(re.a,{templateRows:"repeat(2,1fr)",w:"100%",h:"100%",children:[Object(h.jsx)(C.a,{p:4,children:Object(h.jsx)(y.a,{data:a,options:o})}),Object(h.jsx)(C.a,{p:4,children:Object(h.jsx)(y.c,{data:i,options:o})})]})},be="GENAGECASEINFO_SUCCESS",ue=H("GENAGECASEINFO"),Oe={data:[{confCase:8915,confCaseRate:4.76,createDt:"2021-07-24 14:19:04.902",criticalRate:0,death:0,deathRate:"0.00",gubun:"0-9",seq:10420,updateDt:"null"}]},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(j.a)(Object(j.a)({},e),{},{data:t.payload});default:return e}},fe=function(){var e=Object(a.c)((function(e){return{genAgeCaseInfoReducer:e.genAgeCaseInfoReducer.data}})).genAgeCaseInfoReducer,t=Object(a.b)(),n=Object(r.useState)(!0),c=Object(S.a)(n,2),o=c[0],i=c[1],s=function(e){i(e)};Object(r.useEffect)((function(){t(ue({url:"getCovid19GenAgeCaseInfJson",setLoadingState:s}))}),[]);var d=e&&e.map((function(e){return e})).sort((function(e,t){return Number(Y()(e.createDt).format("YYYYMMDD"))-Number(Y()(t.createDt).format("YYYYMMDD"))})).slice(-11);return Object(h.jsxs)(h.Fragment,{children:[o&&Object(h.jsx)(ne,{}),!o&&Object(h.jsxs)(w,{title:"\uacf5\uacf5\ub370\uc774\ud130\ud65c\uc6a9\uc9c0\uc6d0\uc13c\ud130_\ubcf4\uac74\ubcf5\uc9c0\ubd80 \ucf54\ub85c\ub09819 \uc5f0\ub839\ubcc4\xb7\uc131\ubcc4\uac10\uc5fc \ud604\ud669",children:[Object(h.jsx)(je,{genAgeCaseInfoReducer:e&&e,CREACT_DT:d}),Object(h.jsx)(l.a,{flexDirection:"column",w:"100%",h:"100%",children:Object(h.jsxs)(R.a,{variant:"striped",size:"sm",flex:"1",children:[Object(h.jsx)(R.b,{fontSize:"md"}),Object(h.jsx)(R.f,{children:Object(h.jsxs)(R.g,{children:[Object(h.jsx)(R.e,{children:"\uad6c\ubd84(\uc131\ubcc4, \uc5f0\ub839\ubcc4)"}),Object(h.jsx)(R.e,{children:"\ud655\uc9c4\uc790"}),Object(h.jsx)(R.e,{children:"\ud655\uc9c4\ub960"}),Object(h.jsx)(R.e,{children:"\uc0ac\ub9dd\uc790"}),Object(h.jsx)(R.e,{children:"\uc0ac\ub9dd\ub960"}),Object(h.jsx)(R.e,{children:"\uce58\uba85\ub960"})]})}),Object(h.jsx)(R.c,{children:null===d||void 0===d?void 0:d.map((function(e){var t=e.gubun,n=e.confCase,c=e.confCaseRate,r=e.death,a=e.deathRate,o=e.criticalRate,i=t.indexOf("\ub0a8\uc131")>-1||t.indexOf("\uc5ec\uc131")>-1||t.indexOf("80 \uc774\uc0c1")>-1?t:"".concat(t,"\uc138");return Object(h.jsxs)(R.g,{children:[Object(h.jsx)(R.d,{children:i}),Object(h.jsx)(R.d,{children:n.toLocaleString()}),Object(h.jsx)(R.d,{children:c.toLocaleString()}),Object(h.jsx)(R.d,{children:r.toLocaleString()}),Object(h.jsx)(R.d,{children:a.toLocaleString()}),Object(h.jsx)(R.d,{children:o.toLocaleString()})]},t)}))})]})})]})]})},xe="OVERSEAS_SUCCESS",ge=H("OVERSEAS"),me={data:[{areaNm:"",areaNmCn:"",areaNmEn:"",createDt:"",natDeathCnt:0,natDeathRate:0,natDefCnt:0,nationNm:"",nationNmCn:"",nationNmEn:"",seq:0,stdDay:"",updateDt:""}]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xe:return Object(j.a)(Object(j.a)({},e),{},{data:t.payload});default:return e}},Ce=function(e){var t=e.CREATE_DT.filter((function(e){return"\ud55c\uad6d"===e.nationNm||"\ub300\ub9cc"===e.nationNm||"\uc911\uad6d"===e.nationNm||"\ubca0\ud2b8\ub0a8"===e.nationNm||"\uc77c\ubcf8"===e.nationNm||"\ub274\uc9c8\ub79c\ub4dc"===e.nationNm||"\ud0dc\uad6d"===e.nationNm})),n=t.map((function(e){return e.natDefCnt})),c={labels:t.map((function(e){return e.nationNm})),datasets:[{axis:"y",label:"My First Dataset",data:n,fill:!1,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],borderWidth:1}]};return Object(h.jsx)(y.a,{data:c,options:{indexAxis:"y",plugins:{legend:{display:!1}},maintainAspectRatio:!1}})},ve=n(106),De=n.n(ve),Se=function(){var e=Object(a.c)((function(e){return{overseasReducer:e.overseasReducer.data}})).overseasReducer,t=Object(a.b)(),n=Object(r.useState)(!0),c=Object(S.a)(n,2),o=c[0],i=c[1],s=function(e){i(e)},d=e&&e.map((function(e){return e})).sort((function(e,t){return Number(Y()(e.createDt))-Number(Y()(t.createDt))})).slice(-190);return Object(r.useEffect)((function(){t(ge({url:"getCovid19NatInfStateJson",setLoadingState:s}))}),[]),Object(h.jsxs)(h.Fragment,{children:[o&&Object(h.jsx)(ne,{}),!o&&Object(h.jsxs)(w,{title:"\uacf5\uacf5\ub370\uc774\ud130\ud65c\uc6a9\uc9c0\uc6d0\uc13c\ud130_\ubcf4\uac74\ubcf5\uc9c0\ubd80 \ucf54\ub85c\ub09819\ud574\uc678\ubc1c\uc0dd \ud604\ud669",children:[Object(h.jsx)(Ce,{isLoading:o,CREATE_DT:d}),Object(h.jsxs)(l.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(h.jsx)(I.a,{size:"md",mb:4,children:"\ud574\uc678\ubc1c\uc0dd \ud604\ud669"}),Object(h.jsx)(C.a,{h:"100%",overflow:"hidden",overflowY:"auto",flex:"1",children:Object(h.jsxs)(R.a,{variant:"striped",size:"sm",w:"100%",h:"100%",children:[Object(h.jsx)(R.b,{fontSize:"md",children:"\ucf54\ub85c\ub09819 \ud574\uc678\ubc1c\uc0dd \ud604\ud669"}),Object(h.jsx)(R.f,{children:Object(h.jsxs)(R.g,{children:[Object(h.jsx)(R.e,{children:"\uad6d\uac00\uba85"}),Object(h.jsx)(R.e,{children:"\uc9c0\uc5ed\uba85"}),Object(h.jsx)(R.e,{children:"\uad6d\uac00\ubcc4 \ud655\uc9c4\uc790 \uc218"}),Object(h.jsx)(R.e,{children:"\uad6d\uac00\ubcc4 \uc0ac\ub9dd\uc790 \uc218"}),Object(h.jsx)(R.e,{children:"\ud655\uc9c4\ub960 \ub300\ube44 \uc0ac\ub9dd\ub960"})]})}),Object(h.jsx)(R.c,{children:null===d||void 0===d?void 0:d.map((function(e){var t=e.areaNm,n=e.natDeathCnt,c=e.natDeathRate,r=e.natDefCnt,a=e.nationNm,o=e.nationNmEn;return Object(h.jsxs)(R.g,{className:"\uc77c\ubcf8"===a&&De.a.special||"\ud55c\uad6d"===a&&De.a.special,children:[Object(h.jsxs)(R.d,{children:[a," (",o,")"]}),Object(h.jsx)(R.d,{children:t}),Object(h.jsx)(R.d,{children:r.toLocaleString()}),Object(h.jsx)(R.d,{children:n.toLocaleString()}),Object(h.jsx)(R.d,{children:Number(c).toFixed(2)})]},a)}))})]})})]})]})]})},Ie=function(){return Object(h.jsx)(s.a,{theme:d.theme,children:Object(h.jsxs)(l.a,{flexDirection:"column",w:"100vw",h:"100vh",children:[Object(h.jsxs)(l.a,{justifyContent:"space-between",alignItems:"center",px:4,borderBottomWidth:"1px",borderColor:"gray.200",boxShadow:"md",children:[Object(h.jsx)(p,{}),Object(h.jsx)(f,{})]}),Object(h.jsx)(D.a,{path:"/",exact:!0,component:ce}),Object(h.jsx)(D.a,{path:"/SidoInfoState",component:le}),Object(h.jsx)(D.a,{path:"/GenAgeCaseInfo",component:fe}),Object(h.jsx)(D.a,{path:"/NatInfoState",component:Se}),Object(h.jsx)(v,{})]})})},Re=n(56),Ne=n(152),we=Object(Re.b)({overseasReducer:pe,sidoInfoReducer:de,genAgeCaseInfoReducer:he,covid19InfooReducer:ee}),Ee=Object(Re.c)(we,Object(Re.a)(Ne.a));i.a.render(Object(h.jsxs)(r.StrictMode,{children:[Object(h.jsx)(c.a,{}),Object(h.jsxs)(a.a,{store:Ee,children:[!1,Object(h.jsx)(x.a,{children:Object(h.jsx)(Ie,{})})]})]}),document.getElementById("root"))}},[[295,1,2]]]);
//# sourceMappingURL=main.859e588c.chunk.js.map
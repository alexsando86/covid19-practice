(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{107:function(e,t,n){e.exports={nav:"Header_nav__2PsrS"}},174:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var c=n(314),r=n(0),a=n(21),o=n(74),i=n.n(o),s=n(315),l=n(155),d=n(309),j=n(15),b=n(302),u=n(316),h=n(112),f=n(2),O=function(e){var t=Object(b.b)().toggleColorMode,n=Object(b.c)("dark","light"),c=Object(b.c)(h.a,h.b);return Object(f.jsx)(u.a,Object(j.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(f.jsx)(c,{}),"aria-label":"Switch to ".concat(n," mode")},e))},x=n(44),g=n(107),m=n.n(g),p=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(d.a,{className:m.a.nav,justifyContent:"space-between",alignItems:"center",flexDirection:{md:"row"},fontSize:{md:"15px"},children:[Object(f.jsx)("img",{className:m.a.covid19,src:"./images/alex.jpg",alt:"alex",width:"60px"}),Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(x.b,{to:"/",children:"\ucf54\ub85c\ub09819 \uac10\uc5fc \ud604\ud669"})}),Object(f.jsx)("li",{children:Object(f.jsx)(x.b,{to:"/SidoInfoState",children:"\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669"})}),Object(f.jsx)("li",{children:Object(f.jsx)(x.b,{to:"/GenAgeCaseInfo",children:"\uc5f0\ub839\ubcc4\xb7\uc131\ubcc4\uac10\uc5fc \ud604\ud669"})}),Object(f.jsx)("li",{children:Object(f.jsx)(x.b,{to:"/NatInfoState",children:"\ud574\uc678\ubc1c\uc0dd \ud604\ud669"})})]})})]})})},C=n(310),v=function(){return Object(f.jsxs)(C.a,{p:4,align:"center",style:{display:"none"},display:{md:"block !important"},children:["\uc81c\uacf5: \uacf5\uacf5\ub370\uc774\ud130\ud3ec\ud138 (",Object(f.jsx)("a",{href:"https://www.data.go.kr/index.do",target:"_blank",rel:"noreferrer",children:"https://www.data.go.kr/index.do"}),")",Object(f.jsx)("p",{children:"Copyright \xa9 alexsando. All Rights Reserved."})]})},D=n(14),S=(n(174),n(6)),N=n(311),R=n(313),w=n(312),I=function(e){var t=e.children,n=e.title;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(N.a,{as:"h2",size:"md",p:4,children:["\ucf54\ub85c\ub09819 ",n]}),Object(f.jsx)(w.a,{minChildWidth:"375px",gap:6,w:"100%",h:"100%",p:4,overflow:{md:"hidden"},children:t instanceof Array&&t.map((function(e,t){return Object(f.jsx)(d.a,{alignItems:"center",w:"100%",h:"100%",p:4,boxShadow:"base",overflow:{md:"hidden"},children:e},t)}))})]})},Y=n(16),A=n.n(Y),y=n(150),E=n(31),k=n(3),_=n(4),M=function(){function e(t){Object(k.a)(this,e),this.count=void 0,this.colorArray=void 0,this.count=t,this.colorArray=[]}return Object(_.a)(e,[{key:"randomColor",value:function(){return Math.floor(255*Math.random())}},{key:"setRgbaColor",value:function(){for(var e=0;e<this.count;e++)this.colorArray.push("rgba(".concat(this.randomColor(),",").concat(this.randomColor(),",").concat(this.randomColor(),", 0.6)"));return this.colorArray}}]),e}(),L=function(e){var t=e.STATE_DT,n=e.DECIDE_CNT,c=e.TODAY_DATE,r=Object(b.c)("rgba(229, 229, 229)","rgba(255,255,255,0.5)"),a=Object(b.c)("gray.200","#fff"),o=new M(t.length),i={labels:t&&t.map((function(e){return"".concat(e.toString().slice(4).substring(0,2),"/").concat(e.toString().slice(4).substring(2))})),datasets:[{label:"\ub204\uc801 \ud655\uc9c4\uc790\uc218",data:n,backgroundColor:o.setRgbaColor(),borderColor:o.setRgbaColor(),borderWidth:1}]},s={plugins:{legend:{labels:{color:a}}},scales:{xAxis:{grid:{borderColor:r,color:r},ticks:{color:a}},yAxis:{ticks:{color:a},grid:{borderColor:r,color:r}}},maintainAspectRatio:!1},l=new M(4),d=c[0],j=d.decideCnt,u=d.clearCnt,h=d.careCnt,O=d.deathCnt,x={labels:["\ud655\uc9c4\uc790 \uc218","\uaca9\ub9ac\ud574\uc81c \uc218","\uce58\ub8cc\uc911 \ud658\uc790 \uc218","\uc0ac\ub9dd\uc790 \uc218"],datasets:[{label:A()(new Date).format("YYYY-MM-DD"),data:[j,u,h,O],backgroundColor:l.setRgbaColor(),borderColor:l.setRgbaColor(),borderWidth:1}]},g={plugins:{legend:{labels:{color:a}}},scales:{xAxis:{grid:{borderColor:r,color:r,drawTicks:!1},ticks:{}},yAxis:{grid:{borderColor:r,color:r,drawTicks:!1},ticks:{display:!1}}},maintainAspectRatio:!1};return Object(f.jsxs)(y.a,{templateRows:"repeat(2,1fr)",w:"100%",h:"100%",children:[Object(f.jsx)(C.a,{p:4,children:Object(f.jsx)(E.c,{data:i,options:s})}),Object(f.jsx)(C.a,{p:4,children:Object(f.jsx)(E.d,{data:x,options:g})})]})},T=n(63),F=n.n(T),z=n(111),U=n(153),G=n.n(U),V=n(154);n.n(V).a.config(),console.log("production");var W=new Date,B=W.getFullYear(),J=("0"+(W.getMonth()+1)).slice(-2),q=("0"+W.getMonth()).slice(-2),X=("0"+W.getDate()).slice(-2),H=("0"+(W.getDate()-1)).slice(-2),P="".concat(B).concat(J).concat(X),Z="".concat(B).concat(J).concat(H),Q="".concat(B).concat(q).concat(X),K="?"+encodeURIComponent("ServiceKey")+"=HoRvXlHzt4YAth4rfQmkQUXibIMl%2BmmW24iZZ8mYKPg0B9ZAAtYr6kVBtCf2Yf4n2XQWjRnDXZzDvE2XoLwVkg%3D%3D";K+="&"+encodeURIComponent("startCreateDt")+"="+encodeURIComponent(Q),K+="&"+encodeURIComponent("endCreateDt")+"="+encodeURIComponent(P);var $=function(){var e=Object(z.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G()({method:"GET",url:"https://cors.bridged.cc/http://openapi.data.go.kr/openapi/service/rest/Covid19/".concat(t+K)}).then((function(e){return e.data.response.body.items.item})).catch((function(e){return console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(e){var t="";switch(e){case"OVERSEAS":t="\ud574\uc678\ubc1c\uc0dd \ud604\ud669";break;case"SIDOINFO":t="\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669";break;case"COVID19INFO":t="\uac10\uc5fc \ud604\ud669";break;case"GENAGECASEINFO":t="\uc5f0\ub839\ubcc4\xb7\uc131\ubcc4\uac10\uc5fc \ud604\ud669";break;default:return null}return function(n){var c=n.url,r=n.setLoadingState;return function(){var n=Object(z.a)(F.a.mark((function n(a){var o;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,$(c);case 3:o=n.sent,a({type:"".concat(e,"_SUCCESS"),payload:o}),r&&r(!1),console.log("".concat(t,": ").concat(e),o),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}},te="COVID19INFO_PENDING",ne="COVID19INFO_SUCCESS",ce=ee("COVID19INFO"),re={data:[{accDefRate:0,accExamCnt:0,accExamCompCnt:0,careCnt:0,clearCnt:0,createDt:"",deathCnt:0,decideCnt:0,examCnt:0,resutlNegCnt:0,seq:0,stateDt:0,stateTime:"",updateDt:""}]},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(j.a)({},e);case ne:return Object(j.a)(Object(j.a)({},e),{},{data:t.payload});default:return e}},oe=n(317),ie=function(){return Object(f.jsx)(d.a,{justifyContent:"center",alignItems:"center",position:"fixed",left:"0",right:"0",top:"0",bottom:"0",background:"gray.500",opacity:"0.7",children:Object(f.jsx)(oe.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"red.500",size:"xl"})})},se=n(50),le=n.n(se),de=function(){var e=Object(a.c)((function(e){return{covid19InfooReducer:e.covid19InfooReducer.data}})).covid19InfooReducer,t=Object(a.b)(),n=Object(r.useState)(!0),c=Object(S.a)(n,2),o=c[0],i=c[1],s=function(e){i(e)},l=e&&e.map((function(e){return e.stateDt})).sort((function(e,t){return e-t})).slice(-15),j=e&&e.map((function(e){return e.decideCnt})).sort((function(e,t){return e-t})).slice(-15),b=e&&e.filter((function(e){return A()(e.createDt).format("YYYYMMDD")===P||A()(e.createDt).format("YYYYMMDD")===Z}));Object(r.useEffect)((function(){t(ce({url:"getCovid19InfStateJson",setLoadingState:s}))}),[]);var u=e&&e.map((function(e){return e})).sort((function(e,t){return e.stateDt-t.stateDt})).slice(-15).reverse(),h=null===u||void 0===u?void 0:u.find((function(e){return e.stateDt.toString()===A()(new Date).format("YYYYMMDD")})),O=null===u||void 0===u?void 0:u.find((function(e){return e.stateDt.toString()===(Number(A()(new Date).format("YYYYMMDD"))-1).toString()})),x=(null===h||void 0===h?void 0:h.decideCnt)-(null===O||void 0===O?void 0:O.decideCnt);return Object(f.jsxs)(f.Fragment,{children:[o&&Object(f.jsx)(ie,{}),!o&&Object(f.jsxs)(I,{title:"\uac10\uc5fc \ud604\ud669",children:[Object(f.jsx)(L,{STATE_DT:l,DECIDE_CNT:j,TODAY_DATE:b}),Object(f.jsxs)(d.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(f.jsx)(N.a,{size:"md",mb:4,children:"\ub204\uc801 \ub370\uc774\ud130"}),Object(f.jsx)(C.a,{h:"100%",overflow:"hidden",overflowY:"auto",flex:"1",children:Object(f.jsxs)(R.a,{variant:"striped",size:"sm",flex:"1",children:[Object(f.jsx)(R.b,{fontSize:"md",children:isNaN(x)?"10\uc2dc \uc774\ud6c4 \uc624\ub298\uc758 \ud655\uc9c4\uc790 \uc218 \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4.":"\uc624\ub298 \ud655\uc9c4\uc790 \uc218 : ".concat(x.toLocaleString(),"\uba85")}),Object(f.jsx)(R.f,{children:Object(f.jsxs)(R.g,{children:[Object(f.jsx)(R.e,{className:le.a.th,children:"\uae30\uc900\uc77c"}),Object(f.jsx)(R.e,{className:le.a.th,children:"\ud655\uc9c4\uc790 \uc218"}),Object(f.jsx)(R.e,{className:le.a.th,children:"\uaca9\ub9ac\ud574\uc81c \uc218"}),Object(f.jsx)(R.e,{className:le.a.th,children:"\uce58\ub8cc\uc911 \ud658\uc790 \uc218"}),Object(f.jsx)(R.e,{className:le.a.th,children:"\uc0ac\ub9dd\uc790 \uc218"}),Object(f.jsx)(R.e,{className:le.a.th,children:"\ud655\uc9c4\ub960"})]})}),Object(f.jsx)(R.c,{children:u&&u.map((function(e){return Object(f.jsxs)(R.g,{children:[Object(f.jsx)(R.d,{children:A()(e.stateDt.toString()).format("YYYY-MM-DD")}),Object(f.jsx)(R.d,{children:e.decideCnt.toLocaleString()}),Object(f.jsx)(R.d,{children:e.clearCnt.toLocaleString()}),Object(f.jsx)(R.d,{children:e.careCnt.toLocaleString()}),Object(f.jsx)(R.d,{children:e.deathCnt.toLocaleString()}),Object(f.jsx)(R.d,{children:Number(e.accDefRate).toFixed(2)})]},e.stateDt)}))})]})})]})]})]})},je=function(e){var t=e.DEF_CNT,n=e.GUBUN,c=new M(null===t||void 0===t?void 0:t.length),r={labels:n,datasets:[{label:n,data:null===t||void 0===t?void 0:t.filter((function(e){return"\ud569\uacc4"!==e.gubun})).map((function(e){return e.defCnt})),backgroundColor:c.setRgbaColor(),borderWidth:1}]},a=Object(b.c)("rgba(229, 229, 229)","rgba(255,255,255,0.5)"),o=Object(b.c)("gray.200","#fff"),i={plugins:{legend:{labels:{color:o}}},scales:{xAxis:{grid:{borderColor:a,color:a},ticks:{color:o}},yAxis:{grid:{borderColor:a,color:a},ticks:{color:o}}},maintainAspectRatio:!1},s={labels:n,datasets:[{label:"\uc9c0\uc5ed\ubcc4 \ud604\ud669",data:null===t||void 0===t?void 0:t.filter((function(e){return"\ud569\uacc4"!==e.gubun})).map((function(e){return e.defCnt})),backgroundColor:c.setRgbaColor(),borderWidth:1}]},l={plugins:{legend:{display:!1}},scales:{xAxis:{grid:{borderColor:a,color:a},ticks:{color:o}},yAxis:{ticks:{color:o},grid:{borderColor:a,color:a}}},maintainAspectRatio:!1};return Object(f.jsxs)(y.a,{templateRows:"repeat(2,1fr)",w:"100%",h:"100%",children:[Object(f.jsx)(C.a,{p:4,children:Object(f.jsx)(E.b,{data:r,options:i})}),Object(f.jsx)(C.a,{p:4,children:Object(f.jsx)(E.a,{data:s,options:l})})]})},be="SIDOINFO_SUCCESS",ue=ee("SIDOINFO"),he={data:[{createDt:"",deathCnt:0,defCnt:0,gubun:"",gubunCn:"",gubunEn:"",incDec:0,isolClearCnt:0,isolIngCnt:0,localOccCnt:0,overFlowCnt:0,qurRate:"",seq:0,stdDay:"",updateDt:""}]},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(j.a)(Object(j.a)({},e),{},{data:t.payload});default:return e}},Oe=n(45),xe=n.n(Oe),ge=function(){var e=Object(a.c)((function(e){return{sidoInfoReducer:e.sidoInfoReducer.data}})).sidoInfoReducer,t=Object(a.b)(),n=Object(r.useState)(!0),c=Object(S.a)(n,2),o=c[0],i=c[1],s=function(e){i(e)},l=null===e||void 0===e?void 0:e.map((function(e){return e})).sort((function(e,t){return Number(A()(e.createDt).format("YYYYMMDD"))-Number(A()(t.createDt).format("YYYYMMDD"))})).slice(-18),j=null===l||void 0===l?void 0:l.filter((function(e){return"\ud569\uacc4"!==e.gubun})).map((function(e){return e.gubun})),b=null===l||void 0===l?void 0:l.map((function(e){return e})).sort((function(e,t){var n=e.gubun,c=t.gubun;return n.localeCompare(c)})),u=null===l||void 0===l?void 0:l.find((function(e){return A()(e.createDt).format("YYYYMMDD")}));return Object(r.useEffect)((function(){t(ue({url:"getCovid19SidoInfStateJson",setLoadingState:s}))}),[]),Object(f.jsxs)(f.Fragment,{children:[o&&Object(f.jsx)(ie,{}),!o&&Object(f.jsxs)(I,{title:"\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669 (\ud655\uc9c4\uc790 \uc218)",children:[Object(f.jsx)(je,{DEF_CNT:l,GUBUN:j,isLoading:o,sidoInfoReducer:e&&e}),Object(f.jsxs)(d.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(f.jsx)(N.a,{size:"md",mb:4,children:"\uc2dc\xb7\ub3c4\ubc1c\uc0dd \ud604\ud669"}),Object(f.jsx)(C.a,{h:"100%",overflow:"hidden",overflowY:"auto",flex:"1",children:Object(f.jsxs)(R.a,{variant:"striped",size:"sm",w:"100%",children:[Object(f.jsx)(R.b,{fontSize:"md",children:"".concat(A()(null===u||void 0===u?void 0:u.createDt).format("YYYY-MM-DD"))}),Object(f.jsx)(R.f,{children:Object(f.jsxs)(R.g,{children:[Object(f.jsx)(R.e,{className:xe.a.th,children:"\ub3c4\uc2dc\uba85"}),Object(f.jsx)(R.e,{className:xe.a.th,children:"\ud655\uc9c4\uc790 \uc218"}),Object(f.jsx)(R.e,{className:xe.a.th,children:"\uaca9\ub9ac\uc911 \ud658\uc790\uc218"}),Object(f.jsx)(R.e,{className:xe.a.th,children:"\uaca9\ub9ac \ud574\uc81c \uc218"}),Object(f.jsx)(R.e,{className:xe.a.th,children:"\uc804\uc77c\ub300\ube44 \uc99d\uac10 \uc218"}),Object(f.jsx)(R.e,{className:xe.a.th,children:"\ud574\uc678\uc720\uc785 \uc218"}),Object(f.jsx)(R.e,{className:xe.a.th,children:"\uc9c0\uc5ed\ubc1c\uc0dd \uc218"})]})}),Object(f.jsx)(R.c,{children:null===b||void 0===b?void 0:b.map((function(e){return Object(f.jsxs)(R.g,{children:[Object(f.jsx)(R.d,{children:e.gubun.toLocaleString()}),Object(f.jsx)(R.d,{children:e.defCnt.toLocaleString()}),Object(f.jsx)(R.d,{children:e.isolIngCnt.toLocaleString()}),Object(f.jsx)(R.d,{children:e.isolClearCnt.toLocaleString()}),Object(f.jsx)(R.d,{children:e.incDec.toLocaleString()}),Object(f.jsx)(R.d,{children:e.overFlowCnt.toLocaleString()}),Object(f.jsx)(R.d,{children:e.localOccCnt.toLocaleString()})]},e.gubun)}))})]})})]})]})]})},me=function(e){var t=e.CREACT_DT,n=t.map((function(e){return e.confCase})),c=t.map((function(e){return e.confCaseRate})),r=t.map((function(e){return e.gubun})),a=Object(b.c)("rgba(229, 229, 229)","rgba(255,255,255,0.5)"),o=Object(b.c)("gray.200","#fff"),i=new M(t.length),s={labels:r,datasets:[{label:"\ud655\uc9c4\uc790",data:n,backgroundColor:i.setRgbaColor()}]},l={indexAxis:"y",plugins:{legend:{labels:{color:o}}},scales:{xAxis:{grid:{borderColor:a,color:a},ticks:{color:o}},yAxis:{grid:{borderColor:a,color:a},ticks:{color:o}}},maintainAspectRatio:!1},d={labels:r,datasets:[{label:"\ud655\uc9c4\ub960",data:c,backgroundColor:i.setRgbaColor(),borderColor:i.setRgbaColor()}]};return Object(f.jsxs)(y.a,{templateRows:"repeat(2,1fr)",w:"100%",h:"100%",children:[Object(f.jsx)(C.a,{p:4,children:Object(f.jsx)(E.a,{data:s,options:l})}),Object(f.jsx)(C.a,{p:4,children:Object(f.jsx)(E.c,{data:d,options:l})})]})},pe="GENAGECASEINFO_SUCCESS",Ce=ee("GENAGECASEINFO"),ve={data:[{confCase:8915,confCaseRate:4.76,createDt:"2021-07-24 14:19:04.902",criticalRate:0,death:0,deathRate:"0.00",gubun:"0-9",seq:10420,updateDt:"null"}]},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return Object(j.a)(Object(j.a)({},e),{},{data:t.payload});default:return e}},Se=n(51),Ne=n.n(Se),Re=function(){var e=Object(a.c)((function(e){return{genAgeCaseInfoReducer:e.genAgeCaseInfoReducer.data}})).genAgeCaseInfoReducer,t=Object(a.b)(),n=Object(r.useState)(!0),c=Object(S.a)(n,2),o=c[0],i=c[1],s=function(e){i(e)},l=e&&e.map((function(e){return e})).sort((function(e,t){return Number(A()(e.createDt).format("YYYYMMDD"))-Number(A()(t.createDt).format("YYYYMMDD"))})).slice(-11);return Object(r.useEffect)((function(){t(Ce({url:"getCovid19GenAgeCaseInfJson",setLoadingState:s}))}),[]),Object(f.jsxs)(f.Fragment,{children:[o&&Object(f.jsx)(ie,{}),!o&&Object(f.jsxs)(I,{title:"\uc5f0\ub839\ubcc4\xb7\uc131\ubcc4\uac10\uc5fc \ud604\ud669",children:[Object(f.jsx)(me,{genAgeCaseInfoReducer:e&&e,CREACT_DT:l}),Object(f.jsxs)(d.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(f.jsx)(N.a,{size:"md",mb:4,children:"\ub204\uc801 \ub370\uc774\ud130"}),Object(f.jsx)(C.a,{h:"100%",overflow:"hidden",overflowY:"auto",flex:"1",children:Object(f.jsxs)(R.a,{variant:"striped",size:"sm",w:"100%",children:[Object(f.jsx)(R.b,{fontSize:"md"}),Object(f.jsx)(R.f,{children:Object(f.jsxs)(R.g,{children:[Object(f.jsx)(R.e,{className:Ne.a.th,children:"\uad6c\ubd84(\uc131\ubcc4, \uc5f0\ub839\ubcc4)"}),Object(f.jsx)(R.e,{className:Ne.a.th,children:"\ud655\uc9c4\uc790"}),Object(f.jsx)(R.e,{className:Ne.a.th,children:"\ud655\uc9c4\ub960"}),Object(f.jsx)(R.e,{className:Ne.a.th,children:"\uc0ac\ub9dd\uc790"}),Object(f.jsx)(R.e,{className:Ne.a.th,children:"\uc0ac\ub9dd\ub960"}),Object(f.jsx)(R.e,{className:Ne.a.th,children:"\uce58\uba85\ub960"})]})}),Object(f.jsx)(R.c,{children:null===l||void 0===l?void 0:l.map((function(e){var t=e.gubun,n=e.confCase,c=e.confCaseRate,r=e.death,a=e.deathRate,o=e.criticalRate,i=t.indexOf("\ub0a8\uc131")>-1||t.indexOf("\uc5ec\uc131")>-1||t.indexOf("80 \uc774\uc0c1")>-1?t:"".concat(t,"\uc138");return Object(f.jsxs)(R.g,{children:[Object(f.jsx)(R.d,{children:i}),Object(f.jsx)(R.d,{children:n.toLocaleString()}),Object(f.jsx)(R.d,{children:c.toLocaleString()}),Object(f.jsx)(R.d,{children:r.toLocaleString()}),Object(f.jsx)(R.d,{children:a.toLocaleString()}),Object(f.jsx)(R.d,{children:o.toLocaleString()})]},t)}))})]})})]})]})]})},we="OVERSEAS_SUCCESS",Ie=ee("OVERSEAS"),Ye={data:[{areaNm:"",areaNmCn:"",areaNmEn:"",createDt:"",natDeathCnt:0,natDeathRate:0,natDefCnt:0,nationNm:"",nationNmCn:"",nationNmEn:"",seq:0,stdDay:"",updateDt:""}]},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(j.a)(Object(j.a)({},e),{},{data:t.payload});default:return e}},ye=n(46),Ee=n.n(ye),ke=function(e){var t=e.CREATE_DT,n=(e.setNational,t.filter((function(e){return"\ud55c\uad6d"===e.nationNm||"\ub300\ub9cc"===e.nationNm||"\uc911\uad6d"===e.nationNm||"\ubca0\ud2b8\ub0a8"===e.nationNm||"\uc77c\ubcf8"===e.nationNm||"\ub274\uc9c8\ub79c\ub4dc"===e.nationNm||"\ud0dc\uad6d"===e.nationNm}))),c=n.map((function(e){return e.natDefCnt})),r=n.map((function(e){return e.nationNm})),a=Object(b.c)("rgba(229, 229, 229)","rgba(255,255,255,0.5)"),o=Object(b.c)("gray.200","#fff"),i=new M(n.length),s={labels:r,datasets:[{axis:"y",label:"\ud655\uc9c4\uc790 \uc218",data:c,fill:!1,backgroundColor:i.setRgbaColor(),borderColor:i.setRgbaColor(),borderWidth:1}]},l={indexAxis:"y",plugins:{legend:{display:!1}},scales:{xAxis:{grid:{borderColor:a,color:a},ticks:{color:o}},yAxis:{grid:{borderColor:a,color:a},ticks:{color:o}}},maintainAspectRatio:!1};return Object(f.jsx)(E.a,{data:s,options:l})},_e=function(){var e=Object(a.c)((function(e){return{overseasReducer:e.overseasReducer.data}})).overseasReducer,t=Object(a.b)(),n=Object(r.useState)(!0),c=Object(S.a)(n,2),o=c[0],i=c[1],s=function(e){i(e)},l=Object(r.useState)(""),j=Object(S.a)(l,2),b=j[0],u=j[1],h=e&&e.map((function(e){return e})).sort((function(e,t){return Number(A()(e.createDt))-Number(A()(t.createDt))})).slice(-190);return Object(r.useEffect)((function(){t(Ie({url:"getCovid19NatInfStateJson",setLoadingState:s}))}),[]),console.log(b),Object(f.jsxs)(f.Fragment,{children:[o&&Object(f.jsx)(ie,{}),!o&&Object(f.jsxs)(I,{title:"\ud574\uc678\ubc1c\uc0dd \ud604\ud669",children:[Object(f.jsx)(ke,{isLoading:o,CREATE_DT:h,setNational:u}),Object(f.jsxs)(d.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(f.jsx)(N.a,{size:"md",mb:4,children:"\ud574\uc678\ubc1c\uc0dd \ud604\ud669"}),Object(f.jsx)(C.a,{h:"100%",overflow:"hidden",overflowY:"auto",flex:"1",children:Object(f.jsxs)(R.a,{variant:"striped",size:"sm",w:"100%",children:[Object(f.jsx)(R.b,{fontSize:"md",children:"\ucf54\ub85c\ub09819 \ud574\uc678\ubc1c\uc0dd \ud604\ud669"}),Object(f.jsx)(R.f,{children:Object(f.jsxs)(R.g,{children:[Object(f.jsx)(R.e,{className:Ee.a.th,children:"\uad6d\uac00\uba85"}),Object(f.jsx)(R.e,{className:Ee.a.th,children:"\uc9c0\uc5ed\uba85"}),Object(f.jsx)(R.e,{className:Ee.a.th,children:"\uad6d\uac00\ubcc4 \ud655\uc9c4\uc790 \uc218"}),Object(f.jsx)(R.e,{className:Ee.a.th,children:"\uad6d\uac00\ubcc4 \uc0ac\ub9dd\uc790 \uc218"}),Object(f.jsx)(R.e,{className:Ee.a.th,children:"\ud655\uc9c4\ub960 \ub300\ube44 \uc0ac\ub9dd\ub960"})]})}),Object(f.jsx)(R.c,{children:null===h||void 0===h?void 0:h.map((function(e){var t=e.areaNm,n=e.natDeathCnt,c=e.natDeathRate,r=e.natDefCnt,a=e.nationNm,o=e.nationNmEn;return Object(f.jsxs)(R.g,{className:"\uc77c\ubcf8"===a&&Ee.a.special||"\ud55c\uad6d"===a&&Ee.a.special,children:[Object(f.jsxs)(R.d,{children:[a," (",o,")"]}),Object(f.jsx)(R.d,{children:t}),Object(f.jsx)(R.d,{children:r.toLocaleString()}),Object(f.jsx)(R.d,{children:n.toLocaleString()}),Object(f.jsx)(R.d,{children:Number(c).toFixed(2)})]},a)}))})]})})]})]})]})},Me=function(){return Object(f.jsx)(s.a,{theme:l.theme,children:Object(f.jsxs)(d.a,{flexDirection:"column",w:"100vw",h:"100vh",children:[Object(f.jsxs)(d.a,{justifyContent:"space-between",alignItems:"center",px:4,borderBottomWidth:"1px",borderColor:"gray.200",boxShadow:"md",children:[Object(f.jsx)(p,{}),Object(f.jsx)(O,{})]}),Object(f.jsx)(D.a,{path:"/",exact:!0,component:de}),Object(f.jsx)(D.a,{path:"/SidoInfoState",component:ge}),Object(f.jsx)(D.a,{path:"/GenAgeCaseInfo",component:Re}),Object(f.jsx)(D.a,{path:"/NatInfoState",component:_e}),Object(f.jsx)(v,{})]})})},Le=n(62),Te=n(157),Fe=Object(Le.b)({overseasReducer:Ae,sidoInfoReducer:fe,genAgeCaseInfoReducer:De,covid19InfooReducer:ae}),ze=Object(Le.c)(Fe,Object(Le.a)(Te.a));i.a.render(Object(f.jsxs)(r.StrictMode,{children:[Object(f.jsx)(c.a,{}),Object(f.jsxs)(a.a,{store:ze,children:[!1,Object(f.jsx)(x.a,{children:Object(f.jsx)(Me,{})})]})]}),document.getElementById("root"))},45:function(e,t,n){e.exports={th:"SidoInfoState_th__H34Uc"}},46:function(e,t,n){e.exports={special:"NatInfoState_special__3V9hF",th:"NatInfoState_th__2_ur3"}},50:function(e,t,n){e.exports={th:"Covid19State_th__3P31B"}},51:function(e,t,n){e.exports={th:"GenAgeCaseInfo_th__1aUxd"}}},[[300,1,2]]]);
//# sourceMappingURL=main.577d69e4.chunk.js.map
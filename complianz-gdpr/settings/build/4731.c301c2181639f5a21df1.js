"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[4731],{44731:(e,t,n)=>{n.r(t),n.d(t,{Bar:()=>h,Bubble:()=>A,Chart:()=>b,Doughnut:()=>C,Line:()=>E,Pie:()=>w,PolarArea:()=>m,Radar:()=>v,Scatter:()=>y,getDatasetAtEvent:()=>i,getElementAtEvent:()=>d,getElementsAtEvent:()=>f});var r=n(51609),a=n(92262);const s="label";function o(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function u(e,t){e.labels=t}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;const r=[];e.datasets=t.map((t=>{const a=e.datasets.find((e=>e[n]===t[n]));return a&&t.data&&!r.includes(a)?(r.push(a),Object.assign(a,t),a):{...t}}))}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;const n={labels:[],datasets:[]};return u(n,e.labels),c(n,e.datasets,t),n}function i(e,t){return e.getElementsAtEventForMode(t.nativeEvent,"dataset",{intersect:!0},!1)}function d(e,t){return e.getElementsAtEventForMode(t.nativeEvent,"nearest",{intersect:!0},!1)}function f(e,t){return e.getElementsAtEventForMode(t.nativeEvent,"index",{intersect:!0},!1)}function g(e,t){const{height:n=150,width:s=300,redraw:i=!1,datasetIdKey:d,type:f,data:g,options:b,plugins:p=[],fallbackContent:E,updateMode:h,...v}=e,C=(0,r.useRef)(null),m=(0,r.useRef)(),A=()=>{C.current&&(m.current=new a.Chart(C.current,{type:f,data:l(g,d),options:b&&{...b},plugins:p}),o(t,m.current))},w=()=>{o(t,null),m.current&&(m.current.destroy(),m.current=null)};return(0,r.useEffect)((()=>{!i&&m.current&&b&&function(e,t){const n=e.options;n&&t&&Object.assign(n,t)}(m.current,b)}),[i,b]),(0,r.useEffect)((()=>{!i&&m.current&&u(m.current.config.data,g.labels)}),[i,g.labels]),(0,r.useEffect)((()=>{!i&&m.current&&g.datasets&&c(m.current.config.data,g.datasets,d)}),[i,g.datasets]),(0,r.useEffect)((()=>{m.current&&(i?(w(),setTimeout(A)):m.current.update(h))}),[i,b,g.labels,g.datasets,h]),(0,r.useEffect)((()=>{m.current&&(w(),setTimeout(A))}),[f]),(0,r.useEffect)((()=>(A(),()=>w())),[]),r.createElement("canvas",Object.assign({ref:C,role:"img",height:n,width:s},v),E)}const b=(0,r.forwardRef)(g);function p(e,t){return a.Chart.register(t),(0,r.forwardRef)(((t,n)=>r.createElement(b,Object.assign({},t,{ref:n,type:e}))))}const E=p("line",a.LineController),h=p("bar",a.BarController),v=p("radar",a.RadarController),C=p("doughnut",a.DoughnutController),m=p("polarArea",a.PolarAreaController),A=p("bubble",a.BubbleController),w=p("pie",a.PieController),y=p("scatter",a.ScatterController)}}]);
"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[3582,2010,2111],{52010:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(51609),r=a(45111),n=a(86087);const m=e=>{const[t,a]=(0,n.useState)(!1);return(0,l.createElement)("div",{className:"cmplz-panel__list__item",style:e.style?e.style:{}},(0,l.createElement)("details",{open:t},(0,l.createElement)("summary",{onClick:e=>(e=>{e.preventDefault(),a(!t)})(e)},e.icon&&(0,l.createElement)(r.default,{name:e.icon}),(0,l.createElement)("h5",{className:"cmplz-panel__list__item__title"},e.summary),(0,l.createElement)("div",{className:"cmplz-panel__list__item__comment"},e.comment),(0,l.createElement)("div",{className:"cmplz-panel__list__item__icons"},e.icons),(0,l.createElement)(r.default,{name:"chevron-down",size:18})),(0,l.createElement)("div",{className:"cmplz-panel__list__item__details"},t&&e.details)))}},53582:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(51609),r=a(27723),n=a(4219),m=a(86087),c=a(52111);const i=(0,m.memo)((e=>{const{updateField:t,setChangedField:a}=(0,n.default)();let m=e.field,i=m.value;return Array.isArray(i)||(i=[]),(0,l.createElement)("div",{className:"components-base-control cmplz-thirdparty"},(0,l.createElement)("div",null,(0,l.createElement)("button",{onClick:()=>(()=>{let l=e.field.value;Array.isArray(l)||(l=[]);let n={},c=[...l];n.name=(0,r.__)("New Third Party","complianz-gdpr"),c.push(n),t(m.id,c),a(m.id,c)})(),className:"button button-default"},(0,r.__)("Add new Third Party","complianz-gdpr"))),(0,l.createElement)("div",{className:"cmplz-panel__list"},i.map(((t,a)=>(0,l.createElement)(c.default,{field:e.field,updateField:e.updateField,index:a,key:a,thirdParty:t})))))}))},52111:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(51609),r=a(52010),n=a(4219),m=a(86087),c=a(27723),i=a(52043);const d=(0,m.memo)((e=>{const{updateField:t,setChangedField:a}=(0,n.default)(),{selectedMainMenuItem:d}=(0,i.default)(),[s,u]=wp.element.useState(e.thirdParty.name?e.thirdParty.name:""),[p,o]=wp.element.useState(e.thirdParty.purpose?e.thirdParty.purpose:""),[_,y]=wp.element.useState(e.thirdParty.country?e.thirdParty.country:""),[E,f]=wp.element.useState(e.thirdParty.data?e.thirdParty.data:""),v=(l,r)=>{let n=[...e.field.value];Array.isArray(n)||(n=[]);let m={...n[e.index]};m[r]=l,n[e.index]=m,t(e.field.id,n),a(e.field.id,n)};return(0,m.useEffect)((()=>{const e=setTimeout((()=>{v(s,"name")}),500);return()=>{clearTimeout(e)}}),[s]),(0,m.useEffect)((()=>{const e=setTimeout((()=>{v(E,"data")}),500);return()=>{clearTimeout(e)}}),[E]),(0,m.useEffect)((()=>{const e=setTimeout((()=>{v(_,"country")}),500);return()=>{clearTimeout(e)}}),[_]),(0,m.useEffect)((()=>{const e=setTimeout((()=>{v(p,"purpose")}),500);return()=>{clearTimeout(e)}}),[p]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(r.default,{summary:s,details:(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,c.__)("Name","complianz-gdpr")),(0,l.createElement)("input",{onChange:e=>u(e.target.value),type:"text",placeholder:(0,c.__)("Name","complianz-gdpr"),value:s})),(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,c.__)("Country","complianz-gdpr")),(0,l.createElement)("input",{onChange:e=>y(e.target.value),type:"text",placeholder:(0,c.__)("Country","complianz-gdpr"),value:_})),(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,c.__)("Purpose","complianz-gdpr")),(0,l.createElement)("input",{onChange:e=>o(e.target.value),type:"text",placeholder:(0,c.__)("Purpose","complianz-gdpr"),value:p})),(0,l.createElement)("div",{className:"cmplz-details-row"},(0,l.createElement)("label",null,(0,c.__)("Data","complianz-gdpr")),(0,l.createElement)("input",{onChange:e=>f(e.target.value),type:"text",placeholder:(0,c.__)("Data","complianz-gdpr"),value:E})),(0,l.createElement)("div",{className:"cmplz-details-row__buttons"},(0,l.createElement)("button",{className:"button button-default cmplz-reset-button",onClick:l=>(async l=>{let r=e.field.value;Array.isArray(r)||(r=[]);let n=[...r];n.hasOwnProperty(e.index)&&n.splice(e.index,1),t(e.field.id,n),a(e.field.id,n),await saveFields(d,!1,!1)})()},(0,c.__)("Delete","complianz-gdpr"))))}))}))}}]);
"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[6281,5228,2489,1629,4101],{25228:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(51609),l=a(86087),c=a(45296),r=a(45111),o=a(27723);const i=(0,l.memo)((({value:e=!1,onChange:t,required:a,defaultValue:l,disabled:i,options:s={},canBeEmpty:d=!0,label:m})=>{if(Array.isArray(s)){let e={};s.map((t=>{e[t.value]=t.label})),s=e}return d?(""===e||!1===e||0===e)&&(e="0",s={0:(0,o.__)("Select an option","complianz-gdpr"),...s}):e||(e=Object.keys(s)[0]),(0,n.createElement)("div",{className:"cmplz-input-group cmplz-select-group",key:m},(0,n.createElement)(c.bL,{value:e,defaultValue:l,onValueChange:t,required:a,disabled:i&&!Array.isArray(i)},(0,n.createElement)(c.l9,{className:"cmplz-select-group__trigger"},(0,n.createElement)(c.WT,null),(0,n.createElement)(r.default,{name:"chevron-down"})),(0,n.createElement)(c.UC,{className:"cmplz-select-group__content",position:"popper"},(0,n.createElement)(c.PP,{className:"cmplz-select-group__scroll-button"},(0,n.createElement)(r.default,{name:"chevron-up"})),(0,n.createElement)(c.LM,{className:"cmplz-select-group__viewport"},(0,n.createElement)(c.YJ,null,Object.entries(s).map((([e,t])=>(0,n.createElement)(c.q7,{disabled:Array.isArray(i)&&i.includes(e),className:"cmplz-select-group__item",key:e,value:e},(0,n.createElement)(c.p4,null,t)))))),(0,n.createElement)(c.wn,{className:"cmplz-select-group__scroll-button"},(0,n.createElement)(r.default,{name:"chevron-down"})))))}))},32489:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var n=a(51609);const l=(0,n.memo)((({value:e,onChange:t,required:a,disabled:l,id:c,name:r,placeholder:o})=>{const i=c||r,[s,d]=(0,n.useState)("");return(0,n.useEffect)((()=>{d(e||"")}),[e]),(0,n.useEffect)((()=>{if(e===s)return;const a=setTimeout((()=>{t(s)}),400);return()=>{clearTimeout(a)}}),[s]),(0,n.createElement)("div",{className:"cmplz-input-group cmplz-text-input-group"},(0,n.createElement)("input",{type:"text",id:i,name:r,value:s,onChange:e=>(e=>{d(e)})(e.target.value),required:a,disabled:l,className:"cmplz-text-input-group__input",placeholder:o}))}))},86281:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(51609),l=a(81629),c=a(86087),r=a(27723),o=a(56427),i=a(32636),s=a(4219),d=a(45111),m=a(74101),u=a(25228),p=a(32489),g=a(59387);const f=(0,c.memo)((()=>{const{fields:e,fileName:t,fetching:a,loadingFields:f,updating:_,regions:b,resetEditDocumentId:E,fetchData:h,fetchFields:v,updateField:z,save:N,editDocumentId:y,region:C,setRegion:F,serviceName:k,setServiceName:w}=(0,l.default)(),[S,A]=(0,c.useState)(!0),[D,I]=(0,c.useState)(0),{allRequiredFieldsCompleted:q,fetchAllFieldsCompleted:x,fieldsLoaded:T,addHelpNotice:L,showSavedSettingsNotice:R,removeHelpNotice:P}=(0,s.default)();let V=React.createRef();const[W,j]=(0,c.useState)(!1),[H,O]=(0,c.useState)(!1),[U,Y]=(0,c.useState)(!0);(0,c.useEffect)((()=>{y&&V.current&&V.current.scrollIntoView({behavior:"smooth",block:"start"})}),[y]),(0,c.useEffect)((()=>{x()}),[T]),(0,c.useEffect)((()=>{A(""===C||""===k)}),[C,k,a,y]),(0,c.useEffect)((()=>{(async()=>{W&&("application/pdf"!==W.type&&"application/doc"!==W.type&&"application/docx"!==W.type?(Y(!0),L("create-processing-agreements","warning",(0,r.__)("You can only upload .pdf, .doc or .docs files","complianz-gdpr"),(0,r.__)("Incorrect extension","complianz-gdpr"),!1)):(Y(!1),P("create-processing-agreements")),W&&A(!0))})()}),[W]);const J=async()=>{await N(C,k),R()};(0,c.useEffect)((()=>{""===C||""===k||a||A(!1)}),[C,k,a]);let M=e.filter((e=>e=>void 0===e.conditionallyDisabled||!1===e.conditionallyDisabled)),B=Math.ceil(M.length/5),X=(e=>{const t=5*(D-1),a=t+5;return e.slice(t,a)})(e);return(0,n.createElement)(n.Fragment,null,!q&&(0,n.createElement)("div",{className:"cmplz-locked"},(0,n.createElement)("div",{className:"cmplz-locked-overlay"},(0,n.createElement)("span",{className:"cmplz-task-status cmplz-warning"},(0,r.__)("Incomplete","complianz-gdpr")),(0,n.createElement)("span",null,(0,r.__)("The wizard has not been completed yet, but this field requires information from the wizard. Please complete the wizard first.","complianz-gdpr")))),0===D&&(0,n.createElement)(n.Fragment,null,y&&(0,n.createElement)("div",{className:"cmplz-selected-document"},t),(0,n.createElement)(g.default,{id:"region_for_processing_agreement",label:(0,r.__)("Region","complianz-gdpr"),required:!0,type:"select"}),(0,n.createElement)(u.default,{innerRef:V,disabled:_,onChange:e=>F(e),options:b,value:C,required:!0}),(0,n.createElement)(g.default,{id:"servicename_for_processing_agreement",label:(0,r.__)("Service name","complianz-gdpr"),required:!0,type:"text"}),(0,n.createElement)(p.default,{placeholder:(0,r.__)("e.g. Alphabet Inc","complianz-gdpr"),onChange:e=>w(e),value:k||"",disabled:_,required:!0}),(0,n.createElement)("div",{className:"cmplz-table-header"},(0,n.createElement)("div",{className:"cmplz-table-header-controls"},y&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("button",{disabled:_,className:"button button-default",onClick:()=>{E(),I(0)}},(0,r.__)("Cancel","complianz-gdpr")),(0,n.createElement)("button",{disabled:_,className:"button button-primary",onClick:()=>I(D+1)},(0,r.__)("Next","complianz-gdpr")),(0,n.createElement)("button",{disabled:_,className:"button button-primary",onClick:()=>J()},(0,r.__)("Save","complianz-gdpr"))),!y&&(0,n.createElement)(n.Fragment,null,W&&W.name,(0,n.createElement)(o.FormFileUpload,{accept:"",icon:(0,n.createElement)(d.default,{name:"upload",color:"black"}),onChange:e=>j(e.currentTarget.files[0])},(0,r.__)("Select file","complianz-gdpr")),(0,n.createElement)("button",{disabled:U,className:"button button-default",onClick:e=>(Y(!0),O(!0),void(0,m.upload)("upload_processing_agreement",W,{region:C,serviceName:k}).then((e=>(e.data.upload_success?R((0,r.__)("Settings imported","complianz-gdpr")):L("import_settings","warning",(0,r.__)("You can only upload .json files","complianz-gdpr"),(0,r.__)("Incorrect extension","complianz-gdpr"),!1),O(!1),j(!1),E(),h(),!0))).catch((e=>{console.error(e)})))},(0,r.__)("Upload","complianz-gdpr"),H&&(0,n.createElement)(d.default,{name:"loading",color:"grey"})),(0,n.createElement)("button",{disabled:S||f,className:"button cmplz-button button-primary",onClick:()=>(async()=>{await v(C),I(1)})()},(0,r.__)("Create","complianz-gdpr"),f&&(0,n.createElement)(d.default,{name:"loading",color:"grey"})))))),D>0&&(0,n.createElement)(n.Fragment,null,D<=B&&X.map(((e,t)=>(0,n.createElement)(i.default,{key:t,index:t,field:e,isCustomField:!0,customChangeHandler:(e,t)=>((e,t)=>{z(e,t)})(e,t)}))),(0,n.createElement)("div",{className:"cmplz-table-header"},(0,n.createElement)("div",{className:"cmplz-table-header-controls"},(0,n.createElement)("button",{disabled:_,className:"button button-default",onClick:()=>{E(),I(0)}},(0,r.__)("Cancel","complianz-gdpr")),(0,n.createElement)("button",{className:"button button-default",onClick:()=>I(D-1)},(0,r.__)("Previous","complianz-gdpr")),D<B&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("button",{className:"button button-primary",onClick:()=>I(D+1)},(0,r.__)("Next","complianz-gdpr"))),D===B&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("button",{className:"button button-primary",onClick:()=>(async()=>{await N(C,k),I(0),R(),E()})()},(0,r.__)("Finish","complianz-gdpr"),_&&(0,n.createElement)(d.default,{name:"loading",color:"grey"}))),y&&D<B&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("button",{disabled:_,className:"button button-primary",onClick:()=>J()},(0,r.__)("Save","complianz-gdpr")))))))}))},81629:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(81621),l=a(16535),c=a(9588),r=a(73710);const o=(0,n.vt)(((e,t)=>({documentsLoaded:!1,region:"",fileName:"",serviceName:"",fetching:!1,updating:!1,loadingFields:!1,documents:[],regions:[],fields:[],editDocumentId:!1,resetEditDocumentId:t=>{e({editDocumentId:!1,region:"",serviceName:""})},editDocument:async t=>{e({updating:!0}),await c.doAction("load_processing_agreement",{id:t}).then((t=>{e({fields:t.fields,region:t.region,serviceName:t.serviceName,updating:!1,fileName:t.file_name})})).catch((e=>{console.error(e)})),e({editDocumentId:t})},setRegion:t=>{e({region:t})},setServiceName:t=>{e({serviceName:t})},updateField:(a,n)=>{let c=!1,o=!1;e((0,l.Ay)((e=>{e.fields.forEach((function(e,t){e.id===a&&(o=t,c=!0)})),!1!==o&&(e.fields[o].value=n)})));let i=(0,r.updateFieldsListWithConditions)(t().fields);e({fields:i})},save:async(a,n)=>{e({updating:!0});let l=t().editDocumentId;await c.doAction("save_processing_agreement",{fields:t().fields,region:a,serviceName:n,post_id:l}).then((t=>(e({updating:!1}),t))).catch((e=>{console.error(e)})),t().fetchData()},deleteDocuments:async a=>{let n=t().documents.filter((e=>a.includes(e.id)));e((e=>({documents:e.documents.filter((e=>!a.includes(e.id)))})));let l={};l.documents=n,await c.doAction("delete_processing_agreement",l).then((e=>e)).catch((e=>{console.error(e)}))},fetchData:async()=>{if(t().fetching)return;e({fetching:!0});const{documents:a,regions:n}=await c.doAction("get_processing_agreements",{}).then((e=>e)).catch((e=>{console.error(e)}));e((()=>({documentsLoaded:!0,documents:a,regions:n,fetching:!1})))},fetchFields:async t=>{let a={region:t};e({loadingFields:!0});const{fields:n}=await c.doAction("get_processing_agreement_fields",a).then((e=>e)).catch((e=>{console.error(e)}));let l=(0,r.updateFieldsListWithConditions)(n);e((e=>({fields:l,loadingFields:!1})))}})))},74101:(e,t,a)=>{a.r(t),a.d(t,{upload:()=>l});var n=a(71083);const l=(e,t,a)=>{let l=new FormData;return l.append("data",t),void 0!==a&&l.append("details",JSON.stringify(a)),n.A.post(cmplz_settings.admin_url+"?page=complianz&cmplz_upload_file=1&action="+e,l,{headers:{"Content-Type":"multipart/form-data","X-WP-Nonce":cmplz_settings.nonce}})}}}]);
"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[4604,8198],{88198:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});var s=a(9588),n=a(81621);const c={loaded:!1,tokenStatus:"",wscStatus:"",wscSignupDate:"",syncing:!1},o=(0,n.vt)(((t,e)=>({...c,startOnboarding:async()=>{const t=new URL(cmplz_settings.dashboard_url);t.searchParams.set("websitescan",""),setTimeout((()=>{window.location.href=t.href}),500)},getStatus:async()=>{if(!e().getStatusCalled)try{let e={};const{wsc_status:a,token_status:n,wsc_signup_date:c}=await s.doAction("get_wsc_status",e).then((t=>t));t({tokenStatus:n,wscStatus:a,wscSignupDate:c,loaded:!0})}catch(t){console.error("Getting status error: ",t)}},resetWsc:async()=>{if(confirm("Are you sure? This will delete all your Website Scan data."))try{const{result:e,redirect:a}=await s.doAction("reset_wsc").then((t=>t));e&&(t((t=>({...c,startOnboarding:t.startOnboarding,getStatus:t.getStatus,enableWsc:t.enableWsc,disableWsc:t.disableWsc,resetWsc:t.resetWsc}))),setTimeout((()=>{window.location.reload()}),500))}catch(t){console.error("Resetting WSC error: ",t)}finally{setTimeout((()=>{window.location.reload()}),300)}},enableWsc:async()=>{try{const{updated:e,wsc_status:a,token_status:n}=await s.doAction("enable_wsc").then((t=>t));t({updated:e,tokenStatus:n,wscStatus:a,loaded:!0})}catch(t){console.error("Enabling WSC error: ",t)}},disableWsc:async()=>{try{const{updated:e,wsc_status:a,token_status:n}=await s.doAction("disable_wsc").then((t=>t));t({updated:e,tokenStatus:n,wscStatus:a,loaded:!0})}catch(t){console.error("Disabling WSC error: ",t)}},requestActivationEmail:async()=>{try{await s.doAction("request_activation_email"),e().getStatus()}catch(t){console.error("Requesting activation email error: ",t)}}})))},74604:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var s=a(51609),n=a(86087),c=a(88198),o=a(27723);const r=(0,n.memo)((()=>{const{loaded:t,wscStatus:e,tokenStatus:a,getStatus:r,startOnboarding:i,resetWsc:l,enableWsc:d,disableWsc:u}=(0,c.default)();(0,n.useEffect)((()=>{r()}),[]);const b=(0,n.useCallback)((()=>{if(a)switch(a){case"enabled":l();break;case"disabled":case"pending":i()}}),[a]),w=(0,n.useCallback)((()=>{if(e)switch(e){case"enabled":u();break;case"disabled":d()}}),[e]);let m="enabled"===e?(0,o.__)("Disable Website Scan","complianz-gdpr"):(0,o.__)("Enable Website Scan","complianz-gdpr"),g="enabled"===e?"button-secondary":"button-primary",p="enabled"===a?(0,o.__)("Reset Website Scan","complianz-gdpr"):(0,o.__)("Activate Website Scan","complianz-gdpr"),_="enabled"===a?"button-danger":"button-primary",S="pending"===a;return(0,s.createElement)("div",{className:"cmplz-wsc_actions-container"},(0,s.createElement)("div",{className:"cmplz-wsc_actions-row"},(0,s.createElement)("div",{className:"cmplz-wsc_actions-buttons"},"disabled"!==a&&"pending"!==e&&(0,s.createElement)("button",{className:`button ${g}`,onClick:w},m),(0,s.createElement)("button",{disabled:S,className:`button ${_}`,onClick:b},p))))}))}}]);
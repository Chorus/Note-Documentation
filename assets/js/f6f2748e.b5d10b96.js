"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[555],{5680:(e,s,n)=>{n.d(s,{xA:()=>c,yg:()=>g});var t=n(6540);function o(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function r(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?r(Object(n),!0).forEach((function(s){o(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function i(e,s){if(null==e)return{};var n,t,o=function(e,s){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],s.indexOf(n)>=0||(o[n]=e[n]);return o}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){var s=t.useContext(l),n=s;return e&&(n="function"==typeof e?e(s):a(a({},s),e)),n},c=function(e){var s=u(e.components);return t.createElement(l.Provider,{value:s},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var s=e.children;return t.createElement(t.Fragment,{},s)}},y=t.forwardRef((function(e,s){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),y=o,g=p["".concat(l,".").concat(y)]||p[y]||d[y]||r;return n?t.createElement(g,a(a({ref:s},c),{},{components:n})):t.createElement(g,a({ref:s},c))}));function g(e,s){var n=arguments,o=s&&s.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=y;var i={};for(var l in s)hasOwnProperty.call(s,l)&&(i[l]=s[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<r;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2475:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var t=n(8168),o=(n(6540),n(5680));const r={id:"SessionStatuses",title:"Session Statuses"},a=void 0,i={unversionedId:"Session/SessionStatuses",id:"Session/SessionStatuses",title:"Session Statuses",description:"To help you differentiate between sessions, every session has a session status. Sessions are color-coded to help you make sense of your schedule at a glance.",source:"@site/docs/Session/SessionStatuses.md",sourceDirName:"Session",slug:"/Session/SessionStatuses",permalink:"/docs/Session/SessionStatuses",draft:!1,editUrl:"https://github.com/Chorus/Note-Documentation/edit/master/docs/Session/SessionStatuses.md",tags:[],version:"current",frontMatter:{id:"SessionStatuses",title:"Session Statuses"},sidebar:"someSidebar",previous:{title:"Session List",permalink:"/docs/Session/SessionList"},next:{title:"Create, Edit and Cancel a Session",permalink:"/docs/Session/CreateEditCancelSession"}},l={},u=[{value:"See also",id:"see-also",level:3}],c={toc:u},p="wrapper";function d(e){let{components:s,...n}=e;return(0,o.yg)(p,(0,t.A)({},c,n,{components:s,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"To help you differentiate between sessions, every session has a session status. Sessions are color-coded to help you make sense of your schedule at a glance. "),(0,o.yg)("p",null,"The status icon appears for each session on the session list. You can also see the status in the General tab of the session."),(0,o.yg)("img",{src:"/img/SessionStatuses.png",width:"600"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Pending Validation")," \u2013 Your session is awaiting validation by the organization's server."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Validating")," \u2013 Your session is currently being validated by your organization. You cannot edit scheduling details while your session is validating."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Scheduled")," \u2013 Your session is approved by your organization."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Incomplete")," \u2013 Your session is missing required session data. Once a session is in the past, session data is required. Enter the missing details to complete your session."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Ready to Submit")," \u2013 Your session is valid and has session data."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Submitted")," \u2013 Your session has been submitted. You cannot edit a submitted session."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Cancelled")," \u2013 Your session was cancelled. You can see the reason for cancellation in the General tab of the session. You cannot edit a cancelled session."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Declined")," \u2013 Your session has been declined by your organization. You can see the reason in the General tab of the session. You can edit the session to correct the issue, or reach out to your organization if you are unsure why your session was declined. "),(0,o.yg)("h3",{id:"see-also"},"See also"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/Session/SessionList"},"Session List")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/Session/CreateEditCancelSession"},"Create, Edit and Cancel a Session"))))}d.isMDXComponent=!0}}]);
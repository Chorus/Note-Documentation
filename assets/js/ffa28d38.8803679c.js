"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9337],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||n;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<n;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9136:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),l=["components"],i={id:"AddEditRemoveGoals",title:"Add, Edit and Remove Goals"},s={unversionedId:"GoalsTargets/AddEditRemoveGoals",id:"GoalsTargets/AddEditRemoveGoals",isDocsHomePage:!1,title:"Add, Edit and Remove Goals",description:"Add a Goal",source:"@site/docs/GoalsTargets/AddEditRemoveGoals.md",sourceDirName:"GoalsTargets",slug:"/GoalsTargets/AddEditRemoveGoals",permalink:"/docs/GoalsTargets/AddEditRemoveGoals",editUrl:"https://github.com/Chorus/Note-Documentation/edit/master/docs/GoalsTargets/AddEditRemoveGoals.md",version:"current",frontMatter:{id:"AddEditRemoveGoals",title:"Add, Edit and Remove Goals"},sidebar:"someSidebar",previous:{title:"Care Plan Views",permalink:"/docs/CarePlan/CarePlanViews"},next:{title:"Goal Library",permalink:"/docs/GoalsTargets/GoalLibrary"}},d=[{value:"Add a Goal",id:"add-a-goal",children:[]},{value:"Edit a Goal",id:"edit-a-goal",children:[]},{value:"Remove Goal",id:"remove-goal",children:[{value:"See also",id:"see-also",children:[]}]}],c={toc:d};function u(e){var t=e.components,a=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"add-a-goal"},"Add a Goal"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On a Care Plan, click the + button in the bottom right corner. "),(0,n.kt)("li",{parentName:"ol"},"Choose a domain. "),(0,n.kt)("li",{parentName:"ol"},"Choose a subdomain. "),(0,n.kt)("li",{parentName:"ol"},"Import from the goal library or create a new goal. "),(0,n.kt)("li",{parentName:"ol"},"Select a goal from your goal list. "),(0,n.kt)("li",{parentName:"ol"},"Choose to add the targets later or select the targets and click Add.")),(0,n.kt)("p",null,"The new goal will appear in the future tab of the student's care plan. "),(0,n.kt)("h2",{id:"edit-a-goal"},"Edit a Goal"),(0,n.kt)("p",null,"You can edit a goal by clicking edit on the goal details page.  "),(0,n.kt)("h2",{id:"remove-goal"},"Remove Goal"),(0,n.kt)("p",null,"You can remove a goal from a student's care plan if the goal has no targets associated with it. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on a goal. "),(0,n.kt)("li",{parentName:"ol"},"Click \u201cEdit\u201d in the top right corner. "),(0,n.kt)("li",{parentName:"ol"},"Click Remove goal."),(0,n.kt)("li",{parentName:"ol"},"Confirm that you want to remove the goal from this student's care plan. ")),(0,n.kt)("p",null,"In case you want to remove a goal that has targets: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If none of the targets in the goal have data, remove the targets and then you will be able to remove the goal. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If there is a target in the goal that already has data, you will not be able to remove the goal completely. You can, however, deactivate the targets. A goal that only has deactivated targets will be displayed in the past tab. "))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/_DCx4QZ3VQA",title:"Title"},"Demo video: Add a Goal and Targets to a Care Plan")),(0,n.kt)("h3",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/GoalsTargets/GoalLibrary"},"Goal Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/GoalsTargets/AddEditRemoveTargets"},"Add, Edit and Remove Targets")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/GoalsTargets/TargetLibrary"},"Target Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/GoalsTargets/DefaultConfiguration"},"Default Configuration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/GoalsTargets/TargetStatuses"},"Target Statuses"))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkkeycloakifysample=self.webpackChunkkeycloakifysample||[]).push([[331],{2331:function(e,a,t){t.r(a);var s=t(885),l=t(2791),r=t(2981),o=t(1276),n=t(8282),c=function(e,a){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(s=Object.getOwnPropertySymbols(e);l<s.length;l++)a.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(t[s[l]]=e[s[l]])}return t},i=(0,l.memo)((function(e){var a=e.kcContext,t=e.i18n,i=e.doFetchDefaultThemeResources,m=void 0===i||i,d=e.Template,u=void 0===d?r.Z:d,p=c(e,["kcContext","i18n","doFetchDefaultThemeResources","Template"]),k=a.social,b=a.realm,v=a.url,f=a.usernameEditDisabled,C=a.login,E=a.auth,g=a.registrationDisabled,h=t.msg,y=t.msgStr,w=(0,l.useState)(!1),F=(0,s.Z)(w,2),N=F[0],W=F[1],O=(0,n.useConstCallback)((function(e){var a;e.preventDefault(),W(!0);var t=e.target;null===(a=t.querySelector("input[name='email']"))||void 0===a||a.setAttribute("name","username"),t.submit()}));return l.createElement(u,Object.assign({},Object.assign({kcContext:a,i18n:t,doFetchDefaultThemeResources:m},p),{displayInfo:k.displayInfo,displayWide:b.password&&void 0!==k.providers,headerNode:h("doLogIn"),formNode:l.createElement("div",{id:"kc-form",className:(0,o.W)(b.password&&void 0!==k.providers&&p.kcContentWrapperClass)},l.createElement("div",{id:"kc-form-wrapper",className:(0,o.W)(b.password&&k.providers&&[p.kcFormSocialAccountContentClass,p.kcFormSocialAccountClass])},b.password&&l.createElement("form",{id:"kc-form-login",onSubmit:O,action:v.loginAction,method:"post"},l.createElement("div",{className:(0,o.W)(p.kcFormGroupClass)},function(){var e,a=b.loginWithEmailAllowed?b.registrationEmailAsUsername?"email":"usernameOrEmail":"username",t="usernameOrEmail"===a?"username":a;return l.createElement(l.Fragment,null,l.createElement("label",{htmlFor:t,className:(0,o.W)(p.kcLabelClass)},h(a)),l.createElement("input",Object.assign({tabIndex:1,id:t,className:(0,o.W)(p.kcInputClass),name:t,defaultValue:null!==(e=C.username)&&void 0!==e?e:"",type:"text"},f?{disabled:!0}:{autoFocus:!0,autoComplete:"off"})))}()),l.createElement("div",{className:(0,o.W)(p.kcFormGroupClass)},l.createElement("label",{htmlFor:"password",className:(0,o.W)(p.kcLabelClass)},h("password")),l.createElement("input",{tabIndex:2,id:"password",className:(0,o.W)(p.kcInputClass),name:"password",type:"password",autoComplete:"off"})),l.createElement("div",{className:(0,o.W)(p.kcFormGroupClass,p.kcFormSettingClass)},l.createElement("div",{id:"kc-form-options"},b.rememberMe&&!f&&l.createElement("div",{className:"checkbox"},l.createElement("label",null,l.createElement("input",Object.assign({tabIndex:3,id:"rememberMe",name:"rememberMe",type:"checkbox"},C.rememberMe?{checked:!0}:{})),h("rememberMe")))),l.createElement("div",{className:(0,o.W)(p.kcFormOptionsWrapperClass)},b.resetPasswordAllowed&&l.createElement("span",null,l.createElement("a",{tabIndex:5,href:v.loginResetCredentialsUrl},h("doForgotPassword"))))),l.createElement("div",{id:"kc-form-buttons",className:(0,o.W)(p.kcFormGroupClass)},l.createElement("input",Object.assign({type:"hidden",id:"id-hidden-input",name:"credentialId"},void 0!==(null===E||void 0===E?void 0:E.selectedCredential)?{value:E.selectedCredential}:{})),l.createElement("input",{tabIndex:4,className:(0,o.W)(p.kcButtonClass,p.kcButtonPrimaryClass,p.kcButtonBlockClass,p.kcButtonLargeClass),name:"login",id:"kc-login",type:"submit",value:y("doLogIn"),disabled:N})))),b.password&&void 0!==k.providers&&l.createElement("div",{id:"kc-social-providers",className:(0,o.W)(p.kcFormSocialAccountContentClass,p.kcFormSocialAccountClass)},l.createElement("ul",{className:(0,o.W)(p.kcFormSocialAccountListClass,k.providers.length>4&&p.kcFormSocialAccountDoubleListClass)},k.providers.map((function(e){return l.createElement("li",{key:e.providerId,className:(0,o.W)(p.kcFormSocialAccountListLinkClass)},l.createElement("a",{href:e.loginUrl,id:"zocial-".concat(e.alias),className:(0,o.W)("zocial",e.providerId)},l.createElement("span",null,e.displayName)))}))))),infoNode:b.password&&b.registrationAllowed&&!g&&l.createElement("div",{id:"kc-registration"},l.createElement("span",null,h("noAccount"),l.createElement("a",{tabIndex:6,href:v.registrationUrl},h("doRegister"))))}))}));a.default=i}}]);
//# sourceMappingURL=331.9155b82d.chunk.js.map
"use strict";(self.webpackChunkkeycloakifysample=self.webpackChunkkeycloakifysample||[]).push([[413],{7841:function(e,t,a){a.r(t);var r=a(885),n=a(2791),l=a(2981),s=a(1276),o=a(785),c=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},i=(0,n.memo)((function(e){var t=e.kcContext,a=e.i18n,i=e.doFetchDefaultThemeResources,m=void 0===i||i,u=e.Template,p=void 0===u?l.Z:u,d=c(e,["kcContext","i18n","doFetchDefaultThemeResources","Template"]),f=t.url,b=t.messagesPerField,v=t.recaptchaRequired,k=t.recaptchaSiteKey,g=a.msg,y=a.msgStr,E=(0,n.useState)(!1),C=(0,r.Z)(E,2),h=C[0],F=C[1];return n.createElement(p,Object.assign({},Object.assign({kcContext:t,i18n:a,doFetchDefaultThemeResources:m},d),{displayMessage:b.exists("global"),displayRequiredFields:!0,headerNode:g("registerTitle"),formNode:n.createElement("form",{id:"kc-register-form",className:(0,s.W)(d.kcFormClass),action:f.registrationAction,method:"post"},n.createElement(o.M,Object.assign({kcContext:t,onIsFormSubmittableValueChange:F,i18n:a},d)),v&&n.createElement("div",{className:"form-group"},n.createElement("div",{className:(0,s.W)(d.kcInputWrapperClass)},n.createElement("div",{className:"g-recaptcha","data-size":"compact","data-sitekey":k}))),n.createElement("div",{className:(0,s.W)(d.kcFormGroupClass),style:{marginBottom:30}},n.createElement("div",{id:"kc-form-options",className:(0,s.W)(d.kcFormOptionsClass)},n.createElement("div",{className:(0,s.W)(d.kcFormOptionsWrapperClass)},n.createElement("span",null,n.createElement("a",{href:f.loginUrl},g("backToLogin"))))),n.createElement("div",{id:"kc-form-buttons",className:(0,s.W)(d.kcFormButtonsClass)},n.createElement("input",{className:(0,s.W)(d.kcButtonClass,d.kcButtonPrimaryClass,d.kcButtonBlockClass,d.kcButtonLargeClass),type:"submit",value:y("doRegister"),disabled:!h}))))}))}));t.default=i},785:function(e,t,a){a.d(t,{M:function(){return i}});var r=a(885),n=a(2791),l=a(1276),s=a(8737),o=a(5006),c=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},i=(0,n.memo)((function(e){var t=e.kcContext,a=e.onIsFormSubmittableValueChange,i=e.i18n,m=e.BeforeField,u=e.AfterField,p=c(e,["kcContext","onIsFormSubmittableValueChange","i18n","BeforeField","AfterField"]),d=i.advancedMsg,f=(0,o.H)({kcContext:t,i18n:i}),b=f.formValidationState,v=b.fieldStateByAttributeName,k=b.isFormSubmittable,g=f.formValidationReducer,y=f.attributesWithPassword;(0,n.useEffect)((function(){a(k)}),[k]);var E=(0,s.useCallbackFactory)((function(e,t){var a=(0,r.Z)(e,1)[0],n=(0,r.Z)(t,1)[0].target.value;return g({action:"update value",name:a,newValue:n})})),C=(0,s.useCallbackFactory)((function(e){var t=(0,r.Z)(e,1)[0];return g({action:"focus lost",name:t})})),h="";return n.createElement(n.Fragment,null,y.map((function(e,t){var a,r=e.group,s=void 0===r?"":r,o=e.groupDisplayHeader,c=void 0===o?"":o,i=e.groupDisplayDescription,f=void 0===i?"":i,b=v[e.name],k=b.value,g=b.displayableErrors,y=(0,l.W)(p.kcFormGroupClass,0!==g.length&&p.kcFormGroupErrorClass);return n.createElement(n.Fragment,{key:t},s!==h&&""!==(h=s)&&n.createElement("div",{className:y},n.createElement("div",{className:(0,l.W)(p.kcContentWrapperClass)},n.createElement("label",{id:"header-".concat(s),className:(0,l.W)(p.kcFormGroupHeader)},d(c)||h)),""!==f&&n.createElement("div",{className:(0,l.W)(p.kcLabelWrapperClass)},n.createElement("label",{id:"description-".concat(s),className:"".concat((0,l.W)(p.kcLabelClass))},d(f)))),m&&n.createElement(m,{attribute:e}),n.createElement("div",{className:y},n.createElement("div",{className:(0,l.W)(p.kcLabelWrapperClass)},n.createElement("label",{htmlFor:e.name,className:(0,l.W)(p.kcLabelClass)},d(null!==(a=e.displayName)&&void 0!==a?a:"")),e.required&&n.createElement(n.Fragment,null,"*")),n.createElement("div",{className:(0,l.W)(p.kcInputWrapperClass)},function(){var t=e.validators.options;return void 0!==t?n.createElement("select",{id:e.name,name:e.name,onChange:E(e.name),onBlur:C(e.name),value:k},t.options.map((function(e){return n.createElement("option",{key:e,value:e},e)}))):n.createElement("input",{type:function(){switch(e.name){case"password-confirm":case"password":return"password";default:return"text"}}(),id:e.name,name:e.name,value:k,onChange:E(e.name),className:(0,l.W)(p.kcInputClass),"aria-invalid":0!==g.length,disabled:e.readOnly,autoComplete:e.autocomplete,onBlur:C(e.name)})}(),0!==g.length&&function(){var t="input-error-".concat(e.name);return n.createElement(n.Fragment,null,n.createElement("style",null,"#".concat(t," > span: { display: block; }")),n.createElement("span",{id:t,className:(0,l.W)(p.kcInputErrorMessageClass),style:{position:1===g.length?"absolute":void 0},"aria-live":"polite"},g.map((function(e){return e.errorMessage}))))}())),u&&n.createElement(u,{attribute:e}))})))}))}}]);
//# sourceMappingURL=413.b98f75f0.chunk.js.map
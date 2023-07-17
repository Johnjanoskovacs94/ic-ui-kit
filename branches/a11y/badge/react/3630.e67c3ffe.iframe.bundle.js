"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[3630],{"../web-components/dist/esm/ic-pagination-item.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_pagination_item:()=>PaginationItem});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../web-components/dist/esm/index-a77644e1.js"),_helpers_566d6c8c_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/helpers-566d6c8c.js");__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var PaginationItem=function(){function PaginationItem(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,PaginationItem),(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.paginationItemClick=(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"paginationItemClick",7),this.handleClick=function(){_this.paginationItemClick.emit({page:_this.page})},this.appearance=void 0,this.ariaOverride=!1,this.disabled=!1,this.label="Page ",this.page=void 0,this.pages=void 0,this.selected=!1,this.type=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(PaginationItem,[{key:"componentWillLoad",value:function componentWillLoad(){(0,_helpers_566d6c8c_js__WEBPACK_IMPORTED_MODULE_8__.f)(this.disabled,this.el)}},{key:"render",value:function render(){var _class,_class2,_class3,_class4,page=this.page,selected=this.selected,type=this.type,disabled=this.disabled,appearance=this.appearance,label=this.label,ariaOverride=this.ariaOverride,pages=this.pages;return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("a",null,"ellipsis"===type?(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:(_class={},_class["item-container"]=!0,_class.ellipsis=!0,_class.disabled=disabled,_class)},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{class:(_class2={},_class2[""+appearance]=!0,_class2),variant:"label"},"...")):"page"===type?(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("button",{disabled,onClick:this.handleClick,tabindex:selected?"-1":"0",role:"button","aria-current":selected&&"Current page","aria-label":selected?label+": "+page:"Go to page "+page,class:(_class3={},_class3.selected=!disabled&&selected,_class3.disabled=disabled,_class3["item-container"]=!0,_class3[""+appearance]=!0,_class3.page="page"===type,_class3)},(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{variant:"label",class:(_class4={},_class4["page-selected"]=selected,_class4.disabled=disabled,_class4[""+appearance]=!0,_class4)},page)):(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{"aria-live":"polite","aria-label":ariaOverride?"Page "+page+" of "+pages:label+" "+page,class:"simple-current "+appearance,variant:"label"},label," ",page))}},{key:"el",get:function get(){return(0,_index_a77644e1_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}]),PaginationItem}();PaginationItem.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}a{text-align:center}.item-container{display:flex;justify-content:center;align-items:center;width:calc(var(--ic-space-xl) + var(--ic-space-sm));height:var(--ic-space-xl);margin:var(--ic-space-xxs) var(--ic-space-xxxs);cursor:pointer;text-decoration:none}button{background:none;border:none;outline:inherit;position:relative}.ellipsis{pointer-events:none;color:var(--ic-color-secondary-text)}.item-container:focus{box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-fast)}.page{color:var(--ic-action-default)}.simple-current{width:calc(var(--ic-space-xxl) + var(--ic-space-md));height:var(--ic-space-lg);cursor:default}.item-container.page:hover:not(.selected):not(:focus){border-radius:var(--ic-border-radius);background-color:var(--ic-action-default-bg-hover)}.item-container.page:active:not(.selected):not(:focus){background-color:var(--ic-action-default-bg-active)}.selected{pointer-events:none;outline:none}.selected::after{content:"";height:var(--ic-space-xxs);width:100%;position:absolute;bottom:0;background-color:var(--ic-action-default)}.page-selected{color:var(--ic-color-primary-text)}.item-container.page.light:hover:not(.selected):not(:focus){background-color:var(--ic-action-light-bg-hover)}.item-container.page.light:active:not(.selected):not(:focus){background-color:var(--ic-action-light-bg-active)}ic-typography.light{color:var(--ic-color-white-text)}.selected.light::after{content:"";height:var(--ic-space-xxs);width:100%;position:absolute;bottom:0;background-color:var(--ic-action-light)}.item-container.page.dark:hover:not(.selected):not(:focus){background-color:var(--ic-action-dark-bg-hover)}.item-container.page.dark:active:not(.selected):not(:focus){background-color:var(--ic-action-dark-bg-active)}ic-typography.dark{color:var(--ic-color-primary-text)}.selected.dark::after{content:"";height:var(--ic-space-xxs);width:100%;position:absolute;bottom:0;background-color:var(--ic-action-dark)}.disabled{color:var(--ic-architectural-200);pointer-events:none;cursor:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media (forced-colors: active){.selected::after{background-color:Highlight}.selected.light::after{background-color:Highlight}.selected.dark::after{background-color:Highlight}}'}}]);
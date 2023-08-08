"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4272],{"../web-components/dist/esm/ic-footer-link-group.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_footer_link_group:()=>FooterLinkGroup});__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/index-fd30b77e.js"),_helpers_85903813_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../web-components/dist/esm/helpers-85903813.js");__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var FooterLinkGroup=function(){function FooterLinkGroup(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,FooterLinkGroup),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.handleKeydown=function(event){" "!==event.key&&"Enter"!==event.key||_this.toggleExpanded()},this.toggleExpanded=function(){_this.expanded=!_this.expanded},this.expanded=!1,this.deviceSize=_helpers_85903813_js__WEBPACK_IMPORTED_MODULE_9__.D.XL,this.dropdownIconStyle=(0,_helpers_85903813_js__WEBPACK_IMPORTED_MODULE_9__.l)(),this.small=!1,this.groupTitle=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(FooterLinkGroup,[{key:"componentWillLoad",value:function componentWillLoad(){this.small=this.isSmall(this.el)}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_85903813_js__WEBPACK_IMPORTED_MODULE_9__.a)([{prop:this.groupTitle,propName:"group-title"}],"Footer Link Group")}},{key:"footerResizeHandler",value:function footerResizeHandler(){this.small=this.isSmall(this.el)}},{key:"footerThemeChangeHandler",value:function footerThemeChangeHandler(ev){var theme=ev.detail;this.dropdownIconStyle=theme.mode}},{key:"isSmall",value:function isSmall(e){return null!==e.parentElement&&(e.parentElement.classList.contains("footer")?e.parentElement.classList.contains("footer-small"):this.isSmall(e.parentElement))}},{key:"render",value:function render(){var _class,_class2,small=this.small,groupTitle=this.groupTitle;return small?(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.H,{class:(_class2={},_class2["footer-link-group footer-link-group-small"]=!0,_class2["footer-link-group-"+this.dropdownIconStyle]=!0,_class2),tabIndex:"1",onClick:this.toggleExpanded,onKeydown:this.handleKeydown,"aria-haspopup":"true","aria-expanded":this.expanded},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-section-container",{fullHeight:!0},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"footer-link-group-header"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"footer-link-group-title"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"label"},groupTitle)),this.expanded?(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("svg",{class:"footer-link-group-toggle",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("path",{fill:"currentColor",d:"M600.002 210.605L421.285 389.336L0 810.559l178.721 178.836l421.281-421.341l421.281 421.341L1200 810.559L778.733 389.336L600.002 210.605z"})):(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("svg",{class:"footer-link-group-toggle",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("g",{transform:"translate(0 1200) scale(1 -1)"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("path",{fill:"currentColor",d:"M600.002 210.605L421.285 389.336L0 810.559l178.721 178.836l421.281-421.341l421.281 421.341L1200 810.559L778.733 389.336L600.002 210.605z"})))),this.expanded&&(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"footer-link-group-links"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",null)))):(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.H,{class:(_class={},_class["footer-link-group footer-link-group-sparse"]=!0,_class["footer-link-group-"+this.dropdownIconStyle]=!0,_class)},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"footer-link-group-title"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"subtitle-small"},groupTitle)),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"footer-link-group-links"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",null)))}},{key:"el",get:function get(){return(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}],[{key:"delegatesFocus",get:function get(){return!0}}]),FooterLinkGroup}();FooterLinkGroup.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.footer-link-group-sparse){--footer-link-group-margin-right:5.938rem;--footer-link-group-border-bottom:0 solid transparent;--footer-link-group-title-margin-top:0;--footer-link-group-title-margin-bottom:var(--ic-space-md)}:host(.footer-link-group-small){--footer-link-group-margin-right:0;--footer-link-group-title-margin-top:var(--ic-space-md);--footer-link-group-title-margin-bottom:var(--ic-space-md);--footer-link-group-links-padding-left:var(--ic-space-md);--footer-link-group-links-padding-bottom:var(--ic-space-md)}:host(.footer-link-group-light.footer-link-group-small){--footer-link-group-border-bottom:var(--ic-keyline-lighten)}:host(.footer-link-group-dark.footer-link-group-small){--footer-link-group-border-bottom:var(--ic-keyline-darken)}:host(.footer-link-group){margin-right:var(--footer-link-group-margin-right);border-bottom:var(--footer-link-group-border-bottom)}:host(.footer-link-group-small.footer-link-group-light:hover){background-color:var(--ic-action-light-bg-hover);cursor:pointer}:host(.footer-link-group-small.footer-link-group-dark:hover){background-color:var(--ic-action-dark-bg-hover);cursor:pointer}:host(.footer-link-group-sparse:focus){box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);outline:var(--ic-hc-focus-outline);z-index:1}:host(.footer-link-group-small:focus){box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);outline:var(--ic-hc-focus-outline);z-index:1}:host(.footer-link-group-small.footer-link-group-light:active){background-color:var(--ic-action-light-bg-active)}:host(.footer-link-group-small.footer-link-group-dark:active){background-color:var(--ic-action-dark-bg-active)}.footer-link-group-title{margin-top:var(--footer-link-group-title-margin-top);margin-bottom:var(--footer-link-group-title-margin-bottom);flex-grow:1}.footer-link-group-toggle{fill:white !important}.footer-link-group-links{display:flex;flex-direction:column}.footer-link-group-header{display:flex;align-items:center}'}}]);
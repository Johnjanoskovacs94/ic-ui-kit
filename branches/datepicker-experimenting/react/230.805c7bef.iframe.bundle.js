"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[230],{"../web-components/dist/esm/ic-hero.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_hero:()=>Hero});__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../web-components/dist/esm/index-b006ae9d.js"),_types_5c4edec9_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../web-components/dist/esm/types-5c4edec9.js"),_helpers_598a1093_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../web-components/dist/esm/helpers-598a1093.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Hero=function(){function Hero(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Hero),(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.foregroundColor=(0,_helpers_598a1093_js__WEBPACK_IMPORTED_MODULE_10__.u)(),this.rightContent=!1,this.leftContentFullWidth=!this.rightContent&&void 0===this.secondaryHeading,this.scrollFactor="right -100px",this.aligned="left",this.backgroundImage=void 0,this.contentAligned="left",this.disableBackgroundParallax=!1,this.heading=void 0,this.secondaryHeading=void 0,this.secondarySubheading=void 0,this.small=!1,this.subheading=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Hero,[{key:"componentWillLoad",value:function componentWillLoad(){this.rightContent=(0,_helpers_598a1093_js__WEBPACK_IMPORTED_MODULE_10__.s)(this.el,"secondary")}},{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_598a1093_js__WEBPACK_IMPORTED_MODULE_10__.a)([{prop:this.heading,propName:"heading"}],"Hero")}},{key:"componentWillRender",value:function componentWillRender(){this.rightContent=(0,_helpers_598a1093_js__WEBPACK_IMPORTED_MODULE_10__.s)(this.el,"secondary")}},{key:"themeChangeHandler",value:function themeChangeHandler(ev){var theme=ev.detail;this.foregroundColor=theme.mode}},{key:"doScroll",value:function doScroll(){if(!this.disableBackgroundParallax){var y=.4*document.scrollingElement.scrollTop-100;this.scrollFactor="right "+y+"px"}}},{key:"render",value:function render(){var _class,_class2,_class3,aligned=this.aligned,small=this.small,heading=this.heading,subheading=this.subheading,secondaryHeading=this.secondaryHeading,secondarySubheading=this.secondarySubheading,foregroundColor=this.foregroundColor,backgroundImage=this.backgroundImage,scrollFactor=this.scrollFactor,style={};return void 0!==backgroundImage&&(style={"background-image":"url("+backgroundImage+")","background-position":scrollFactor}),(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.H,{class:(_class={},_class[_types_5c4edec9_js__WEBPACK_IMPORTED_MODULE_9__.I.Dark]=foregroundColor===_types_5c4edec9_js__WEBPACK_IMPORTED_MODULE_9__.I.Dark,_class["has-background-image"]=void 0!==backgroundImage,_class.small=small,_class["secondary-heading"]=!!secondaryHeading,_class),style},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-section-container",{aligned,fullHeight:!0,class:"section-container"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:(_class2={},_class2["left-container"]=!0,_class2["left-container-full-width"]=this.leftContentFullWidth,_class2)},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"heading"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"heading"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:small?"h2":"h1",class:(_class3={},_class3["heading-bottom-spacing"]=!small,_class3)},heading))),(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"subheading"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"subheading"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"body"},subheading))),(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"interaction-container"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"interaction"}))),(void 0!==secondaryHeading||this.rightContent)&&(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"right-container"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"secondary"},secondaryHeading&&(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"secondary-container"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"secondary-heading"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"h4"},secondaryHeading)),(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"secondary-subheading"},(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.h)("ic-typography",{variant:"subtitle-small"},secondarySubheading)))))))}},{key:"el",get:function get(){return(0,_index_b006ae9d_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}]),Hero}();Hero.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;background-color:var(--ic-theme-tertiary);color:var(--ic-theme-text);--hero-heading-bottom-margin:var(--ic-space-md)}:host(.dark){background-color:var(--ic-theme-secondary)}:host(.has-background-image){background-repeat:no-repeat;background-position:right -6.25rem;background-size:auto calc(100% + 6.25rem);box-shadow:var(--ic-elevation-inset)}@media (prefers-reduced-motion){:host(.has-background-image){background-position:right -6.25rem !important}}ic-typography.heading-bottom-spacing{margin-bottom:var(--hero-heading-bottom-margin)}.section-container{display:flex;align-items:center;height:100%}.left-container{padding:var(--ic-space-xl) 0}.left-container:not(.left-container-full-width){flex-basis:50%}.left-container-full-width{width:100%}.right-container{flex-basis:50%}.interaction-container{display:flex;gap:var(--ic-space-md);margin-top:var(--ic-space-lg);flex-wrap:wrap}.secondary-container{display:flex;flex-direction:column;justify-content:center;border-left:var(--ic-space-xxxs) solid var(--ic-theme-text)}.secondary-subheading{margin-top:var(--ic-space-xxs)}:host([content-aligned="left"]) .left-container,:host([content-aligned="left"]) .interaction-container{justify-content:flex-start;text-align:left}:host([content-aligned="center"]) .left-container,:host([content-aligned="center"]) .interaction-container{justify-content:center;text-align:center}@media (min-width: 992px){.left-container-full-width{width:66.6%}}@media (min-width: 1044px){:host,.section-container{min-height:13rem}:host(.small),:host(.small) .section-container{min-height:10.813rem}.left-container:not(.left-container-full-width){flex-basis:66.6%}.left-container{min-height:9rem}.right-container{flex-basis:33.3%;margin-left:3.125rem}.secondary-container{min-height:9rem}.secondary-heading,.secondary-subheading{margin-left:3.938rem}}@media (min-width: 801px) and (max-width: 1043px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:16rem}:host(.small),:host(.small) .section-container{min-height:15rem}:host(.secondary-heading),:host(.secondary-heading) .section-container{min-height:14rem}.left-container{min-height:10rem}.secondary-container{min-height:10rem}.secondary-heading,.secondary-subheading{margin-left:5.922rem}.right-container{margin-left:3.125rem}}@media (min-width: 641px) and (max-width: 800px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:16rem}:host(.small),:host(.small) .section-container{min-height:15rem}:host(.secondary-heading),:host(.secondary-heading) .section-container{min-height:14rem}.left-container{min-height:10rem}.secondary-container{min-height:10rem}.secondary-heading,.secondary-subheading{margin-left:2.125rem}.right-container{margin-left:3.125rem}}@media (min-width: 481px) and (max-width: 640px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:13rem}:host(.small),:host(.small) .section-container{min-height:10.813rem}:host(.secondary-heading),:host(.secondary-heading) .section-container{min-height:17.5rem}:host(.secondary-heading) .section-container,:host(.small) .section-container,.section-container{flex-direction:column;align-items:flex-start}.left-container{height:-moz-fit-content;height:fit-content}.secondary-container{height:-moz-fit-content;height:fit-content;border:none}.right-container{margin-bottom:2.5rem}}@media (max-width: 480px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:12rem}:host,.right-container{margin-bottom:var(--ic-space-md)}:host(.small),:host(.small) .section-container{min-height:10.813rem}:host(.secondary-heading),:host(.secondary-heading) .section-container{min-height:16.5rem}:host(.secondary-heading) .section-container,:host(.small) .section-container,.section-container{flex-direction:column;align-items:flex-start}.left-container{height:-moz-fit-content;height:fit-content}.secondary-container{height:-moz-fit-content;height:fit-content;border:none}}'}}]);
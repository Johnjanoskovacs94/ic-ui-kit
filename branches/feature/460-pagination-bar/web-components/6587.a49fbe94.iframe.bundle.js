"use strict";(self.webpackChunk_ukic_web_components=self.webpackChunk_ukic_web_components||[]).push([[6587],{"./dist/esm/ic-input-label.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_input_label:()=>InputLabel});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-90721b3c.js"),_helpers_bc1ff11c_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/esm/helpers-bc1ff11c.js");__webpack_require__("./dist/esm/types-dd515332.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var InputLabel=function(){function InputLabel(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,InputLabel),(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.for=void 0,this.required=!1,this.helperText="",this.label=void 0,this.disabled=!1,this.readonly=!1,this.error=!1,this.dark=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(InputLabel,[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_bc1ff11c_js__WEBPACK_IMPORTED_MODULE_8__.a)([{prop:this.label,propName:"label"}],"Input Label")}},{key:"render",value:function render(){var _class,_class2,_class3,disabled=this.disabled,readonly=this.readonly,label=this.label,required=this.required,helperText=this.helperText,error=this.error,dark=this.dark,labelText=required?label+" *":label,labelContent=readonly?""+labelText:(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("label",{htmlFor:this.for},labelText),id=(0,_helpers_bc1ff11c_js__WEBPACK_IMPORTED_MODULE_8__.Q)(this.for);return(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)(_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.H,{class:(_class={},_class.disabled=disabled,_class.readonly=readonly,_class["with-helper"]=""!==helperText,_class)},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{variant:"label",class:(_class2={},_class2["readonly-label"]=readonly,_class2["error-label"]=error&&!(readonly||disabled),_class2.dark=dark,_class2)},labelContent),""!==helperText&&(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("ic-typography",{variant:"caption",class:(_class3={},_class3.helpertext=!0,_class3["helpertext-normal"]=!disabled&&!readonly,_class3["helpertext-readonly"]=readonly,_class3)},(0,_index_90721b3c_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{id},helperText)))}}]),InputLabel}();InputLabel.style="ic-input-label{margin-bottom:var(--ic-space-xs)}ic-input-label.with-helper{margin-bottom:var(--ic-space-xxxs)}ic-input-label.disabled{color:var(--ic-color-tertiary-text)}ic-input-label.readonly{color:var(--ic-color-tertiary-text)}ic-input-label .helpertext{margin-top:var(--ic-space-xxxs)}ic-input-label .helpertext-normal{color:var(--ic-color-secondary-text)}ic-input-label .helpertext-readonly{color:var(--ic-color-tertiary-text)}ic-input-label .readonly-label{color:var(--ic-color-secondary-text)}ic-input-label .error-label{color:var(--ic-status-error)}ic-input-label .dark{color:var(--ic-architectural-white)}"}}]);
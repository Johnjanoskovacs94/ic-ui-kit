/*! For license information please see 4637.f7af551c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[4637],{"../web-components/dist/esm/close-icon-2f02b42a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"../web-components/dist/esm/ic-dialog.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_dialog:()=>Dialog});__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.splice.js"),__webpack_require__("./node_modules/core-js/modules/es.string.repeat.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var _index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("../web-components/dist/esm/index-fd30b77e.js"),_close_icon_2f02b42a_js__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("../web-components/dist/esm/close-icon-2f02b42a.js"),_helpers_85903813_js__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("../web-components/dist/esm/helpers-85903813.js");__webpack_require__("../web-components/dist/esm/types-dd515332.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Dialog=function(){function Dialog(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Dialog),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.r)(this,hostRef),this.icDialogCancelled=(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icDialogCancelled",7),this.icDialogClosed=(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icDialogClosed",7),this.icDialogConfirmed=(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icDialogConfirmed",7),this.icDialogOpened=(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.c)(this,"icDialogOpened",7),this.DATA_OVERFLOW="data-overflow",this.DATA_GETS_FOCUS="data-gets-focus",this.DATA_GETS_FOCUS_SELECTOR="[data-gets-focus]",this.DIALOG_CONTROLS="dialog-controls",this.dialogHeight=0,this.focusedElementIndex=0,this.IC_TEXT_FIELD="IC-TEXT-FIELD",this.resizeObserver=null,this.setContentOverflow=function(){_this.dialogEl.clientHeight<_this.dialogEl.scrollHeight?_this.el.setAttribute(_this.DATA_OVERFLOW,"true"):_this.el.setAttribute(_this.DATA_OVERFLOW,"false")},this.runResizeObserver=function(){_this.resizeObserver=new ResizeObserver((function(){clearTimeout(_this.resizeTimeout),_this.resizeTimeout=window.setTimeout(_this.resizeObserverCallback,80)})),_this.resizeObserver.observe(_this.dialogEl)},this.resizeObserverCallback=function(){_this.dialogEl.clientHeight!==_this.dialogHeight&&(_this.el.setAttribute(_this.DATA_OVERFLOW,"false"),_this.setContentOverflow(),_this.dialogHeight=_this.dialogEl.clientHeight)},this.setInitialFocus=function(){var focusedElement;_this.sourceElement=document.activeElement,(focusedElement=null!==_this.el.querySelector(_this.DATA_GETS_FOCUS_SELECTOR)?_this.el.querySelector(_this.DATA_GETS_FOCUS_SELECTOR):_this.el.shadowRoot.querySelector(_this.DATA_GETS_FOCUS_SELECTOR)).tagName===_this.IC_TEXT_FIELD?focusedElement.setFocus():focusedElement.focus()},this.getFocusedElementIndex=function(){for(var i=0;i<_this.interactiveElementList.length;i++)_this.interactiveElementList[i]===(_this.el.shadowRoot.activeElement||document.activeElement)&&(_this.focusedElementIndex=i)},this.setAlertVariant=function(){void 0!==_this.status&&null!==_this.status&&_this.el.shadowRoot.querySelector("ic-alert").setAttribute("variant",_this.status)},this.closeIconClick=function(){_this.hideDialog()},this.getInteractiveElements=function(){_this.interactiveElementList=Array.from(_this.el.shadowRoot.querySelectorAll("ic-button"));var slottedInteractiveElements=Array.from(_this.el.querySelectorAll('a[href], button, input:not(.ic-input), textarea, select, details, [tabindex]:not([tabindex="-1"]), \n          ic-button, ic-checkbox, ic-select, ic-search-bar, ic-tab-group, ic-radio-group, \n          ic-back-to-top, ic-breadcrumb, ic-chip[dismissible="true"], ic-footer-link, ic-link, ic-navigation-button, \n          ic-navigation-item, ic-switch, ic-text-field'));slottedInteractiveElements.length>0&&(slottedInteractiveElements[0].slot!==_this.DIALOG_CONTROLS?slottedInteractiveElements[0].setAttribute(_this.DATA_GETS_FOCUS,""):_this.destructive||slottedInteractiveElements[slottedInteractiveElements.length-1].setAttribute(_this.DATA_GETS_FOCUS,""));for(var i=0;i<slottedInteractiveElements.length;i++)_this.interactiveElementList.splice(1+i,0,slottedInteractiveElements[i])},this.focusNextInteractiveElement=function(shiftKey){_this.getFocusedElementIndex(),shiftKey?_this.focusedElementIndex-=1:_this.focusedElementIndex+=1,_this.focusedElementIndex>_this.interactiveElementList.length-1?_this.focusedElementIndex=0:_this.focusedElementIndex<0&&(_this.focusedElementIndex=_this.interactiveElementList.length-1);var nextFocusEl=_this.interactiveElementList[_this.focusedElementIndex];nextFocusEl.tagName===_this.IC_TEXT_FIELD?nextFocusEl.setFocus():nextFocusEl.focus()},this.setButtonOnClick=function(){var _a,_b,_c;_this.buttons&&(_this.buttonOnclick0=new Function(null===(_a=_this.buttonProps[0])||void 0===_a?void 0:_a.onclick),_this.buttonOnclick1=new Function(null===(_b=_this.buttonProps[1])||void 0===_b?void 0:_b.onclick),_this.buttonOnclick2=new Function(null===(_c=_this.buttonProps[2])||void 0===_c?void 0:_c.onclick))},this.getButtonOnclick=function(index){return 0===index?_this.buttonOnclick0():1===index?_this.buttonOnclick1():_this.buttonOnclick2()},this.getButtonVariant=function(index){var mainVariant=_this.destructive?"destructive":"primary";return 1===_this.buttonProps.length?mainVariant:2===_this.buttonProps.length?0===index?"tertiary":mainVariant:2===index?mainVariant:"secondary"},this.dialogRendered=!1,this.fadeIn=!1,this.alertHeading=void 0,this.alertMessage=void 0,this.buttons=!0,this.closeOnBackdropClick=!0,this.destructive=!1,this.dismissLabel="Dismiss",this.heading=void 0,this.label=void 0,this.size="small",this.status=void 0,this.buttonProps=[{label:"Cancel",onclick:"this.cancelDialog();"},{label:"Confirm",onclick:"this.confirmDialog();"}]}var _confirmDialog,_cancelDialog,_hideDialog,_showDialog;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Dialog,[{key:"watchPropHandler",value:function watchPropHandler(){this.setButtonOnClick()}},{key:"componentWillLoad",value:function componentWillLoad(){this.setButtonOnClick()}},{key:"componentDidLoad",value:function componentDidLoad(){this.getInteractiveElements(),this.setAlertVariant()}},{key:"handleKeyboard",value:function handleKeyboard(ev){if(this.dialogRendered)switch(ev.key){case"Tab":ev.preventDefault(),this.focusNextInteractiveElement(ev.shiftKey);break;case"Escape":!ev.repeat&&this.hideDialog(),ev.stopImmediatePropagation()}}},{key:"handleClick",value:function handleClick(ev){var dialogElement=this.el.shadowRoot.querySelector("dialog");if(this.closeOnBackdropClick&&ev.composedPath().indexOf(dialogElement)<=0){var rect=this.dialogEl.getBoundingClientRect();rect.top<=ev.clientY&&ev.clientY<=rect.top+rect.height&&rect.left<=ev.clientX&&ev.clientX<=rect.left+rect.width||this.hideDialog()}}},{key:"showDialog",value:(_showDialog=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(){var _this2=this;return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.dialogRendered=!0,this.dialogEl.showModal(),setTimeout((function(){_this2.fadeIn=!0}),10),setTimeout((function(){_this2.setInitialFocus(),(0,_helpers_85903813_js__WEBPACK_IMPORTED_MODULE_31__.c)(_this2.runResizeObserver)}),75),setTimeout((function(){_this2.getFocusedElementIndex(),_this2.icDialogOpened.emit()}),80);case 5:case"end":return _context.stop()}}),_callee,this)}))),function showDialog(){return _showDialog.apply(this,arguments)})},{key:"hideDialog",value:(_hideDialog=_asyncToGenerator(_regeneratorRuntime().mark((function _callee2(){var _this3=this;return _regeneratorRuntime().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:this.fadeIn=!1,null!==this.resizeObserver&&this.resizeObserver.disconnect(),setTimeout((function(){var _a;_this3.dialogRendered=!1,_this3.dialogEl.close(),null===(_a=_this3.sourceElement)||void 0===_a||_a.focus(),_this3.el.removeAttribute(_this3.DATA_OVERFLOW),_this3.dialogHeight=0,_this3.icDialogClosed.emit()}),80);case 3:case"end":return _context2.stop()}}),_callee2,this)}))),function hideDialog(){return _hideDialog.apply(this,arguments)})},{key:"cancelDialog",value:(_cancelDialog=_asyncToGenerator(_regeneratorRuntime().mark((function _callee3(){return _regeneratorRuntime().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:this.icDialogCancelled.emit(),this.hideDialog();case 2:case"end":return _context3.stop()}}),_callee3,this)}))),function cancelDialog(){return _cancelDialog.apply(this,arguments)})},{key:"confirmDialog",value:(_confirmDialog=_asyncToGenerator(_regeneratorRuntime().mark((function _callee4(){return _regeneratorRuntime().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:this.icDialogConfirmed.emit();case 1:case"end":return _context4.stop()}}),_callee4,this)}))),function confirmDialog(){return _confirmDialog.apply(this,arguments)})},{key:"render",value:function render(){var _class,_class2,_class3,_this4=this,alertHeading=this.alertHeading,alertMessage=this.alertMessage,buttons=this.buttons,buttonProps=this.buttonProps,size=this.size,heading=this.heading,label=this.label,status=this.status,destructive=this.destructive,dismissLabel=this.dismissLabel;return(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)(_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.H,{class:(_class={},_class.hidden=!this.dialogRendered,_class["fade-in"]=this.fadeIn,_class)},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("dialog",{class:(_class2={},_class2.dialog=!0,_class2[""+size]=!0,_class2),"aria-labelledby":"dialog-label dialog-heading","aria-describedby":"dialog-alert dialog-content",ref:function ref(el){return _this4.dialogEl=el}},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("div",{class:"heading-area"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("div",{class:"heading-content"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("div",{class:"label"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("slot",{name:"label"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-typography",{variant:"label",id:"dialog-label"},label))),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("div",{class:"heading"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("slot",{name:"heading"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-typography",{variant:"h4",id:"dialog-heading"},heading)))),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-button",{class:"close-icon",variant:"icon","aria-label":dismissLabel,onClick:this.closeIconClick,"data-gets-focus":destructive||!buttons?"":null},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("span",{class:"close-icon-svg",slot:"icon",innerHTML:_close_icon_2f02b42a_js__WEBPACK_IMPORTED_MODULE_33__.c}))),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("div",{class:"content-area"},status&&(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-alert",{variant:status,heading:alertHeading,message:alertMessage,"title-above":!0,class:"status-alert",id:"dialog-alert"}),(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("div",{id:"dialog-content"},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("slot",null))),(buttons||(0,_helpers_85903813_js__WEBPACK_IMPORTED_MODULE_31__.i)(this.el,this.DIALOG_CONTROLS))&&(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("div",{class:(_class3={},_class3[this.DIALOG_CONTROLS]=!0,_class3["triple-button"]=3===buttonProps.length,_class3)},(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("slot",{name:this.DIALOG_CONTROLS},!(0,_helpers_85903813_js__WEBPACK_IMPORTED_MODULE_31__.i)(this.el,this.DIALOG_CONTROLS)&&buttonProps.map((function(props,index){return index>2?void 0:(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.h)("ic-button",{variant:_this4.getButtonVariant(index),onClick:function onClick(){return _this4.getButtonOnclick(index)},class:"dialog-control-button","full-width":3===buttonProps.length,"data-gets-focus":"primary"===_this4.getButtonVariant(index)?"":null},props.label)}))))))}},{key:"el",get:function get(){return(0,_index_fd30b77e_js__WEBPACK_IMPORTED_MODULE_30__.g)(this)}}],[{key:"watchers",get:function get(){return{buttonProps:["watchPropHandler"]}}}]),Dialog}();Dialog.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;min-height:100% !important;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-dialog);opacity:0;transition:opacity var(--ic-easing-transition-slow)}:host(.fade-in){opacity:1;transition:opacity var(--ic-easing-transition-slow)}:host(.hidden){display:none}.dialog{background-color:var(--ic-architectural-white);border:var(--ic-border-default);border-radius:var(--ic-border-radius);padding:var(--ic-space-xs) var(--ic-space-md);transform:translateY(-3rem);transition:transform 1000s;display:flex;flex-direction:column;box-sizing:border-box}:host(.fade-in) .dialog{transform:translateY(0);transition:transform var(--ic-easing-transition-slow)}.small{width:50%;max-width:25rem;min-height:11rem;max-height:70vh}.medium{width:70vw;max-width:44rem;min-height:12.5rem;max-height:70vh}.large{width:90vw;max-width:62.5rem;min-height:12.5rem;max-height:90vh}.heading-area{display:flex;margin-bottom:var(--ic-space-xs)}.close-icon{margin-left:auto}.close-icon-svg{display:flex;align-items:center}.content-area{-ms-overflow-style:none;scrollbar-width:none;padding:0 var(--ic-space-xs);margin:0 calc(-1 * var(--ic-space-xs))}:host([data-overflow="false"]) .content-area{overflow-y:visible}:host([data-overflow="true"]) .content-area{overflow-y:scroll}:host([data-overflow="false"]) .dialog{overflow:visible}.content-area::-webkit-scrollbar{display:none}#dialog-content{margin-bottom:var(--ic-space-sm)}.status-alert{margin-bottom:var(--ic-space-xs)}.dialog-controls{margin-top:auto;padding-top:var(--ic-space-xs);display:flex;justify-content:flex-end;gap:var(--ic-space-md)}.dialog-control-button{width:-moz-fit-content;width:fit-content}@media (min-width: 800px){:host([size="large"]) .content-area{width:75%}}@media (max-width: 576px){.dialog{width:100vw;height:100vh;transform:translateY(-5rem);max-width:none;max-height:none;box-sizing:border-box}}@media (max-width: 364px){.triple-button{flex-direction:column;gap:var(--ic-space-xs)}.dialog-control-button{width:unset}}'}}]);
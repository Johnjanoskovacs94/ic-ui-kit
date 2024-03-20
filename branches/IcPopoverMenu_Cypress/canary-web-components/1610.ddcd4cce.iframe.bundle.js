"use strict";(self.webpackChunk_ukic_canary_web_components=self.webpackChunk_ukic_canary_web_components||[]).push([[1610],{"./dist/esm/helpers-5271897c.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>getFilteredMenuOptions,b:()=>getOptionsWithoutGroupTitlesCount,c:()=>removeDisabledFalse,d:()=>addFormResetListener,e:()=>renderHiddenInput,f:()=>getInputDescribedByText,g:()=>getLabelFromValue,h:()=>isMobileOrTablet,i:()=>inheritAttributes,j:()=>hasValidationStatus,k:()=>isMacDevice,l:()=>checkResizeObserver,o:()=>onComponentRequiredPropUndefined,r:()=>removeFormResetListener});const inheritAttributes=(element,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(element.hasAttribute(attr)){null!==element.getAttribute(attr)&&(attributeObject[attr]=element.getAttribute(attr)),element.removeAttribute(attr)}})),attributeObject},renderHiddenInput=(always,container,name,value,disabled)=>{if(void 0!==name&&(always||hasShadowDom(container))){const inputs=container.querySelectorAll("input.ic-input");let input=Array.from(inputs).filter((el=>container===el.parentElement))[0];null==input&&(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("ic-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,getInputDescribedByText=(inputId,helperText,validationText)=>{return`${helperText?(id=inputId,id+"-helper-text"):""} ${validationText?(id=>id+"-validation-text")(inputId):""}`.trim();var id},isMobileOrTablet=()=>"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0,getLabelFromValue=(value,options,valueField="value",labelField="label")=>{const ungroupedOptions=[];if(options.length>0&&options.map){options.map((option=>{option.children?option.children.map((option=>ungroupedOptions.push(option))):ungroupedOptions.push(option)}));const matchingValue=ungroupedOptions.find((option=>option[valueField]===value));if(void 0!==matchingValue)return matchingValue[labelField]}},getFilteredMenuOptions=(options,includeDescriptions,searchString,position,labelField="label")=>options.filter((option=>{var _a;const label=option[labelField].toLowerCase(),description=null===(_a=option.description)||void 0===_a?void 0:_a.toLowerCase(),lowerSearchString=searchString.toLowerCase();return"anywhere"===position?includeDescriptions?label.includes(lowerSearchString)||(null==description?void 0:description.includes(lowerSearchString)):label.includes(lowerSearchString):includeDescriptions?label.startsWith(lowerSearchString)||(null==description?void 0:description.startsWith(lowerSearchString)):label.startsWith(lowerSearchString)})),getOptionsWithoutGroupTitlesCount=options=>{const optionsWithoutGroupTitles=[];return options.length>0&&options.map&&options.map((option=>{option.children?option.children.map((option=>optionsWithoutGroupTitles.push(option))):optionsWithoutGroupTitles.push(option)})),optionsWithoutGroupTitles.length},getCssProperty=cssVar=>getComputedStyle(document.documentElement).getPropertyValue(cssVar);Number(getCssProperty("--ic-breakpoint-xs").replace("px","")),Number(getCssProperty("--ic-breakpoint-sm").replace("px","")),Number(getCssProperty("--ic-breakpoint-md").replace("px","")),Number(getCssProperty("--ic-breakpoint-lg").replace("px","")),Number(getCssProperty("--ic-breakpoint-xl").replace("px",""));const hasValidationStatus=(status,disabled)=>""!==status&&!disabled,onComponentRequiredPropUndefined=(props,component)=>{for(let i=0;i<props.length;i++){const{prop,propName}=props[i];null==prop&&console.error(`No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(propName)}' (react) required`)}},kebabToCamelCase=kebabCase=>{const individualWords=(kebabCase=kebabCase.toLowerCase()).split("-");let camelCase=individualWords[0];for(let i=1;i<individualWords.length;i++)camelCase+=individualWords[i].substring(0,1).toUpperCase()+individualWords[i].substring(1);return camelCase},checkResizeObserver=callbackFn=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&callbackFn()},getForm=el=>el.closest("FORM"),addFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.addEventListener("reset",callbackFn)},removeFormResetListener=(el,callbackFn)=>{const form=getForm(el);null!==form&&form.removeEventListener("reset",callbackFn)},removeDisabledFalse=(disabled,element)=>{disabled||element.removeAttribute("disabled")},isMacDevice=()=>window.navigator.userAgent.toUpperCase().indexOf("MAC")>=0},"./dist/esm/ic-select-with-multi.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_select_with_multi:()=>Select});var _index_93509377_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-93509377.js"),_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/helpers-5271897c.js");const IC_INHERITED_ARIA=["aria-atomic","aria-autocomplete","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-expanded","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"];var IcInformationStatus,IcThemeForegroundEnum;!function(IcInformationStatus){IcInformationStatus.Warning="warning",IcInformationStatus.Error="error",IcInformationStatus.Success="success"}(IcInformationStatus||(IcInformationStatus={})),function(IcThemeForegroundEnum){IcThemeForegroundEnum.Default="default",IcThemeForegroundEnum.Dark="dark",IcThemeForegroundEnum.Light="light"}(IcThemeForegroundEnum||(IcThemeForegroundEnum={}));const Expand='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentColor" />\n</svg>\n',Clear='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n<path d="M12.6666 4.27334L11.7266 3.33334L7.99998 7.06001L4.27331 3.33334L3.33331 4.27334L7.05998 8.00001L3.33331 11.7267L4.27331 12.6667L7.99998 8.94001L11.7266 12.6667L12.6666 11.7267L8.93998 8.00001L12.6666 4.27334Z" fill="currentColor" />\n</svg>\n';let inputIds=0;const Select=class{constructor(hostRef){(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.icBlur=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icBlur",7),this.icChange=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icChange",7),this.icClear=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icClear",7),this.icFocus=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icFocus",7),this.icInput=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icInput",7),this.icOptionSelect=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icOptionSelect",7),this.icOptionDeselect=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icOptionDeselect",7),this.icRetryLoad=(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icRetryLoad",7),this.hasSetDefaultValue=!1,this.inheritedAttributes={},this.initialOptionsEmpty=!1,this.inputId="ic-select-input-"+inputIds++,this.menuId=`${this.inputId}-menu`,this.searchableMenuItemSelected=!1,this.ungroupedOptions=[],this.handleRetry=ev=>{var _a;ev.detail.keyPressed&&(null===(_a=this.searchableSelectElement)||void 0===_a||_a.focus()),this.blurredBecauseButtonPressed=!0,this.retryButtonClick=!0,this.hasSetDefaultValue=!0,this.icRetryLoad.emit({value:this.hiddenInputValue})},this.emitIcChange=value=>{this.searchable||(this.multiple&&!Array.isArray(value)&&null!==value?this.handleMultipleSelectChange(value):this.value=value),clearTimeout(this.debounceIcChange),this.debounceIcChange=window.setTimeout((()=>{const valueToEmit=this.multiple?this.value:value;this.icChange.emit({value:valueToEmit})}),this.currDebounce)},this.emitImmediateIcChange=value=>{this.value=value,clearTimeout(this.debounceIcChange),this.icChange.emit({value})},this.deduplicateOptions=options=>{const uniqueValues=[],dedupedOptions=[];let dedupedChildren;return options.forEach((option=>{if(option.children){dedupedChildren=[],option.children.forEach((child=>{uniqueValues.includes(child.value)?console.warn(`ic-select with label ${this.label} was populated with duplicate option (value: ${child.value}) which has been removed.`):(uniqueValues.push(child.value),dedupedChildren.push(child))}));const modifiedParent=Object.assign(Object.assign({},option),{children:dedupedChildren});dedupedOptions.push(modifiedParent)}else uniqueValues.includes(option.value)?console.warn(`ic-select with label ${this.label} was populated with duplicate option (value: ${option.value}) which has been removed.`):(uniqueValues.push(option.value),dedupedOptions.push(option))})),dedupedOptions},this.setOptionsValuesFromLabels=()=>{this.options.length>0&&this.options.map&&this.options.map((option=>{option.value||(option.value=option.label)}))},this.setUngroupedOptions=event=>{this.ungroupedOptions=event.detail.options},this.setTextColor=()=>{0===this.nativeSelectElement.selectedIndex?this.nativeSelectElement.className="placeholder":this.nativeSelectElement.className="select-option-selected"},this.setMenuChange=open=>{this.open!==open&&(this.open=open)},this.getLabelFromValue=value=>(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.g)(value,this.uniqueOptions),this.getMultipleOptionsString=selectedValues=>{const selectedLabels=null==selectedValues?void 0:selectedValues.map((value=>this.getLabelFromValue(value)));return null==selectedLabels?void 0:selectedLabels.join(", ")},this.getFilteredChildMenuOptions=option=>{let children=option.children;children=this.searchable?(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.a)(option.children,this.includeDescriptionsInSearch,this.searchableSelectInputValue,this.searchMatchPosition):(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.a)(option.children,!1,this.pressedCharacters,"start");const newOption=Object.assign({},option);return newOption.children=children,newOption},this.getValueSortedByOptions=value=>{const valueArray=value,valuesFromAllOptions=this.ungroupedOptions.map((option=>option.value));return valueArray.sort(((a,b)=>valuesFromAllOptions.indexOf(a)-valuesFromAllOptions.indexOf(b))),valueArray},this.handleNativeSelectChange=()=>{this.icOptionSelect.emit({value:this.nativeSelectElement.value}),this.emitImmediateIcChange(this.nativeSelectElement.value),this.setTextColor()},this.handleCustomSelectChange=event=>{var _a;const value=event.detail.value;this.searchable&&event.detail.label===this.emptyOptionListText?this.searchableSelectElement.focus():(this.searchable&&(this.value=value,this.searchableMenuItemSelected=!0,this.value===this.currValue&&(this.searchableSelectInputValue=this.getLabelFromValue(this.value)),this.inputValueToFilter=null,this.hiddenInputValue=this.getValueFromLabel(this.searchableSelectInputValue)),this.multiple&&(null===(_a=this.value)||void 0===_a?void 0:_a.includes(value))?this.icOptionDeselect.emit({value}):this.icOptionSelect.emit({value}),this.ariaActiveDescendant=event.detail.optionId,this.emitIcChange(value))},this.handleMultipleSelectChange=value=>{if(this.value){let valueArray=this.value.slice();if(this.value.includes(value)){const valueIndex=valueArray.indexOf(value);valueArray.splice(valueIndex,1)}else valueArray.push(value),valueArray=this.getValueSortedByOptions(valueArray);this.value=0===valueArray.length?null:valueArray}else{const valueArray=[];valueArray.push(value),this.value=valueArray}},this.handleSelectAllChange=event=>{const selectAllOptions=event.detail.select,allValues=this.ungroupedOptions.filter((option=>!option.disabled)).map((option=>option.value));let newValue;if(selectAllOptions){let unselectedValues;unselectedValues=this.value?allValues.filter((value=>this.value&&!this.value.includes(value))):allValues,unselectedValues.forEach((value=>this.icOptionSelect.emit({value}))),newValue=allValues}else this.value.forEach((value=>this.icOptionDeselect.emit({value}))),newValue=null;this.emitIcChange(newValue)},this.handleMenuChange=event=>{this.open=event.detail.open,this.pressedCharacters="",this.searchable&&this.handleFocusIndicatorDisplay()},this.handleMenuKeyPress=ev=>{ev.cancelBubble=!0,this.multiple||this.handleCharacterKeyDown(ev.detail.key)},this.handleFocusIndicatorDisplay=()=>{const focusIndicator=this.el.shadowRoot.querySelector(".focus-indicator");this.open?focusIndicator.classList.add("focus-indicator-enabled"):focusIndicator.classList.remove("focus-indicator-enabled")},this.handleMouseDown=event=>{this.open||event.preventDefault()},this.isExternalFiltering=()=>this.searchable&&this.disableFilter,this.handleClick=event=>{var _a;this.open||(this.isExternalFiltering()?this.menu.options=this.filteredOptions:this.hasTimedOut||this.loading||(null===(_a=this.noOptions)||void 0===_a?void 0:_a.length)||this.searchable&&!this.searchableMenuItemSelected||(this.noOptions=null,this.menu.options=this.uniqueOptions)),0!==event.detail&&this.menu.handleClickOpen()},this.handleExpandIconMouseDown=event=>{this.disabled||(event.preventDefault(),this.searchableSelectElement.focus(),this.handleClick(event))},this.handleClear=event=>{event.stopPropagation(),this.hasTimedOut=!1,clearTimeout(this.timeoutTimer),this.noOptions=null,this.emitImmediateIcChange(null),this.icClear.emit(),this.searchable?(this.searchableSelectElement.value=null,this.searchableSelectInputValue=null,this.filteredOptions=this.uniqueOptions,this.hiddenInputValue=null,this.searchableSelectElement.focus()):this.customSelectElement.focus()},this.handleCharacterKeyDown=key=>{!this.open||" "!==key||0!==this.pressedCharacters.length||this.hasTimedOut||this.loading||this.setMenuChange(!1),1!==key.length||this.searchable?this.pressedCharacters="":(window.clearTimeout(this.characterKeyPressTimer),this.characterKeyPressTimer=window.setTimeout((()=>this.pressedCharacters=""),1e3),(" "!==key||this.pressedCharacters)&&(this.pressedCharacters+=key,this.handleFilter(),this.noOptions||this.emitImmediateIcChange(this.filteredOptions[0].value)))},this.handleNativeSelectKeyDown=event=>{("Escape"!==event.key&&"Tab"!==event.key||this.open)&&(event.cancelBubble=!0),this.handleCharacterKeyDown(event.key)},this.handleKeyDown=event=>{("Escape"!==event.key&&"Tab"!==event.key||this.open)&&(event.cancelBubble=!0);const isArrowKey="ArrowDown"===event.key||"ArrowUp"===event.key;this.open||(this.isExternalFiltering()&&("Enter"===event.key||isArrowKey)?this.menu.options=this.filteredOptions:this.hasTimedOut||(this.noOptions=null,this.menu.options=this.uniqueOptions)),this.open&&"Enter"===event.key?this.setMenuChange(!1):isArrowKey&&null!==this.noOptions||(" "===event.key&&this.pressedCharacters.length>0||this.menu.handleKeyboardOpen(event),this.multiple||this.handleCharacterKeyDown(event.key))},this.handleClearButtonFocus=()=>{this.clearButtonFocused=!0},this.handleClearButtonBlur=ev=>{var _a;const retryButton=null===(_a=this.menu)||void 0===_a?void 0:_a.querySelector("#retry-button");this.searchableSelectElement&&ev.relatedTarget===this.searchableSelectElement||retryButton&&ev.relatedTarget===retryButton||(this.setMenuChange(!1),this.handleFocusIndicatorDisplay()),this.clearButtonFocused=!1},this.handleFilter=()=>{var _a;const options=this.deduplicateOptions(this.searchable?[...this.uniqueOptions]:this.ungroupedOptions);let menuOptionsFiltered,isGrouped=!1,newFilteredOptions=[];options.map((option=>{option.children&&(isGrouped=!0)})),this.searchable?(menuOptionsFiltered=(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.a)(options,this.includeDescriptionsInSearch,this.inputValueToFilter,this.searchMatchPosition),this.searchableMenuItemSelected=!1):menuOptionsFiltered=(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.a)(options,!1,this.pressedCharacters,"start"),isGrouped||(null===(_a=menuOptionsFiltered[0])||void 0===_a?void 0:_a.label)===this.emptyOptionListText?isGrouped&&options.map((option=>{this.includeGroupTitlesInSearch&&-1!==menuOptionsFiltered.indexOf(option)?newFilteredOptions.push(option):newFilteredOptions.push(this.getFilteredChildMenuOptions(option))})):newFilteredOptions=menuOptionsFiltered;let noChildOptionsWhenFiltered=!1;isGrouped&&(noChildOptionsWhenFiltered=!0,newFilteredOptions.map((option=>{option.children.length>0&&(noChildOptionsWhenFiltered=!1)}))),newFilteredOptions.length>0&&!noChildOptionsWhenFiltered?(this.noOptions=null,this.filteredOptions=newFilteredOptions):(this.noOptions=[{label:this.emptyOptionListText,value:""}],this.filteredOptions=this.noOptions)},this.triggerLoading=()=>{this.hasTimedOut=!1,this.noOptions=[{label:this.loadingLabel,value:"",loading:!0}],this.filteredOptions!==this.noOptions&&this.searchable?this.filteredOptions=this.noOptions:this.uniqueOptions===this.noOptions||this.searchable||(this.uniqueOptions=this.noOptions),this.timeout&&(this.timeoutTimer=window.setTimeout((()=>{this.loading=!1,this.hasTimedOut=!0,this.noOptions=[{label:this.loadingErrorLabel,value:"",timedOut:!0}],this.filteredOptions=this.noOptions,this.searchable||(this.uniqueOptions=this.noOptions)}),this.timeout))},this.getValueFromLabel=label=>{var _a;return null===(_a=this.uniqueOptions.find((option=>option.label===label)))||void 0===_a?void 0:_a.value},this.handleSearchableSelectInput=event=>{this.searchableSelectInputValue=event.target.value,this.icInput.emit({value:this.searchableSelectInputValue}),this.emitIcChange(this.searchableSelectInputValue),this.hiddenInputValue=this.searchableSelectInputValue,this.inputValueToFilter=this.searchableSelectInputValue,this.setMenuChange(!0),this.disableFilter||(this.handleFilter(),this.debounceAriaLiveUpdate())},this.updateSearchableSelectResultAriaLive=()=>{const searchableSelectResultsStatusEl=this.el.shadowRoot.querySelector(".searchable-select-results-status");searchableSelectResultsStatusEl&&(null!==this.noOptions?searchableSelectResultsStatusEl.innerText=this.emptyOptionListText:searchableSelectResultsStatusEl.innerText="")},this.updateMultiSelectedCountAriaLive=()=>{var _a;const multiSelectSelectedCountEl=this.el.shadowRoot.querySelector(".multi-select-selected-count"),selectedCount=`${null===(_a=this.currValue)||void 0===_a?void 0:_a.length} of ${(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.options)} selected`;multiSelectSelectedCountEl&&multiSelectSelectedCountEl.innerText!==selectedCount&&(multiSelectSelectedCountEl.innerText=selectedCount)},this.getDefaultValue=value=>this.getLabelFromValue(value)||value||null,this.setDefaultValue=()=>{!this.hasSetDefaultValue&&this.currValue&&(this.searchableSelectInputValue=this.searchable&&this.getDefaultValue(this.currValue),this.initialValue=this.currValue,this.hasSetDefaultValue=!0)},this.onFocus=()=>{this.icFocus.emit()},this.onBlur=event=>{var _a;const target=event.relatedTarget;if(null!==target&&"UL"===target.tagName&&target.className.includes("menu"))return;const retryButton=null===(_a=this.menu)||void 0===_a?void 0:_a.querySelector("#retry-button");this.searchable&&event.relatedTarget!==this.menu&&!Array.from(this.menu.querySelectorAll("[role='option']")).includes(event.relatedTarget)&&!(this.clearButton&&event.relatedTarget===this.clearButton)&&!(retryButton&&event.relatedTarget===retryButton)&&(this.retryButtonClick||this.setMenuChange(!1),this.handleFocusIndicatorDisplay()),this.retryButtonClick=!1,this.icBlur.emit()},this.onTimeoutBlur=ev=>{ev.detail.ev.relatedTarget===this.searchableSelectElement||this.blurredBecauseButtonPressed||(this.setMenuChange(!1),this.handleFocusIndicatorDisplay(),this.icBlur.emit()),this.blurredBecauseButtonPressed=!1},this.handleFormReset=()=>{this.value=this.initialValue,this.searchable&&(this.searchableSelectInputValue=this.getDefaultValue(this.value),this.hiddenInputValue=this.value)},this.ariaActiveDescendant=void 0,this.clearButtonFocused=!1,this.debounceIcChange=void 0,this.hiddenInputValue=void 0,this.noOptions=null,this.open=!1,this.pressedCharacters="",this.searchableSelectInputValue=null,this.charactersUntilSuggestions=0,this.disabled=!1,this.disableFilter=!1,this.emptyOptionListText="No results found",this.form=void 0,this.formaction=void 0,this.formenctype=void 0,this.formmethod=void 0,this.formnovalidate=void 0,this.formtarget=void 0,this.fullWidth=!1,this.helperText="",this.hideLabel=!1,this.includeDescriptionsInSearch=!1,this.includeGroupTitlesInSearch=!1,this.label=void 0,this.loadingErrorLabel="Loading Error",this.loadingLabel="Loading...",this.multiple=!1,this.name=this.inputId,this.placeholder="Select an option",this.readonly=!1,this.required=!1,this.searchable=!1,this.searchMatchPosition="anywhere",this.selectOnEnter=!1,this.showClearButton=!1,this.size="default",this.small=!1,this.timeout=void 0,this.validationStatus="",this.validationText="",this.loading=!1,this.options=[],this.filteredOptions=this.options,this.uniqueOptions=this.options,this.debounce=0,this.currDebounce=this.debounce,this.value=void 0,this.initialValue=this.value,this.inputValueToFilter=this.value,this.currValue=this.value}loadingHandler(newValue){newValue&&this.triggerLoading()}watchOptionsHandler(){this.hasTimedOut||this.options===this.noOptions?this.searchable||(this.options=this.noOptions):(this.loading=!1,clearTimeout(this.timeoutTimer),this.isExternalFiltering()?(this.options.length>0?(this.setOptionsValuesFromLabels(),this.noOptions=null,this.uniqueOptions=this.deduplicateOptions(this.options),this.filteredOptions=this.uniqueOptions):(this.noOptions=[{label:this.emptyOptionListText,value:""}],this.uniqueOptions=this.noOptions,this.filteredOptions=this.noOptions),this.updateSearchableSelectResultAriaLive(),this.setDefaultValue()):(this.setOptionsValuesFromLabels(),this.uniqueOptions=this.deduplicateOptions(this.options),this.filteredOptions=this.uniqueOptions,this.initialOptionsEmpty&&(this.setDefaultValue(),this.initialOptionsEmpty=!1)))}debounceChangedHandler(newValue){this.updateOnChangeDebounce(newValue)}valueChangedHandler(){this.value!==this.currValue&&(this.value&&this.multiple?(this.currValue=this.getValueSortedByOptions(this.value),this.updateMultiSelectedCountAriaLive()):this.currValue=this.value),this.searchable&&(this.searchableSelectInputValue=this.getLabelFromValue(this.currValue)||this.currValue)}disconnectedCallback(){(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.r)(this.el,this.handleFormReset)}componentWillLoad(){this.inheritedAttributes=(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,[...IC_INHERITED_ARIA,"tabindex","title"]),(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.c)(this.disabled,this.el),this.setOptionsValuesFromLabels(),(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.d)(this.el,this.handleFormReset),this.options.length?(this.setDefaultValue(),this.uniqueOptions=this.deduplicateOptions(this.options)):(this.initialOptionsEmpty=!0,this.noOptions=[{label:this.emptyOptionListText,value:""}],this.uniqueOptions=this.noOptions,this.filteredOptions=this.noOptions)}componentDidLoad(){(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.o)([{prop:this.label,propName:"label"}],"Select"),this.loading&&this.triggerLoading(),this.hiddenInputValue=this.searchable&&this.currValue}componentDidRender(){this.nativeSelectElement&&!this.disabled&&this.setTextColor()}async setFocus(){this.nativeSelectElement?this.nativeSelectElement.focus():this.customSelectElement?this.customSelectElement.focus():this.searchableSelectElement&&this.searchableSelectElement.focus()}updateOnChangeDebounce(newValue){this.currDebounce!==newValue&&(this.currDebounce=newValue)}debounceAriaLiveUpdate(){clearTimeout(this.debounceAria),window.setTimeout((()=>{this.updateSearchableSelectResultAriaLive()}),800)}render(){const{size,small,disabled,fullWidth,helperText,hideLabel,label,menuId,multiple,name,options,placeholder,readonly,required,searchable,showClearButton,validationStatus,validationText,currValue}=this;(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.e)(!0,this.el,name,this.searchable?this.hiddenInputValue:currValue,disabled);const invalid=validationStatus===IcInformationStatus.Error?"true":"false",describedBy=(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.inputId,""!==helperText,(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.validationStatus,this.disabled)).trim(),optionsSelectedCount=`${null==currValue?void 0:currValue.length} of ${(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.b)(this.options)} selected`;return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{disabled,searchable,small,[size]:"default"!==size,"full-width":fullWidth},onBlur:this.onBlur},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-container",{readonly},!hideLabel&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-label",{for:this.inputId,label,helperText,required,disabled,readonly}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-component-container",{ref:el=>this.anchorEl=el,class:{"menu-open":this.open},small,size,fullWidth,disabled,readonly,validationStatus},readonly?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",null,(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,multiple?this.getMultipleOptionsString(currValue):this.getLabelFromValue(currValue))):(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.h)()&&!multiple?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("select",Object.assign({ref:el=>this.nativeSelectElement=el,disabled,onChange:this.handleNativeSelectChange,required,id:this.inputId,"aria-label":label,"aria-describedby":describedBy,"aria-invalid":invalid,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.handleNativeSelectKeyDown,form:this.form},this.inheritedAttributes),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:"",selected:!0,disabled:!showClearButton},placeholder),options.map((option=>option.children?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("optgroup",{label:option.label},option.children.map((option=>(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:option.value,disabled:option.disabled,selected:option.value===currValue},option.label)))):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:option.value,disabled:option.disabled,selected:option.value===currValue},option.label)))):searchable?(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"searchable-select-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{class:{"select-input":!0,"with-clear-button":!!this.searchableSelectInputValue},role:"combobox",autocomplete:"off","aria-label":label,"aria-describedby":describedBy,"aria-activedescendant":this.ariaActiveDescendant,"aria-autocomplete":"list","aria-expanded":this.open?"true":"false","aria-invalid":invalid,"aria-required":required?"true":"false","aria-controls":menuId,ref:el=>this.searchableSelectElement=el,id:this.inputId,value:this.searchableSelectInputValue,placeholder,disabled,onInput:this.handleSearchableSelectInput,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.onFocus,onBlur:this.onBlur,form:this.form,formaction:this.formaction,formenctype:this.formenctype,formmethod:this.formmethod,formnovalidate:this.formnovalidate,formtarget:this.formtarget}),this.searchableSelectInputValue&&(showClearButton||searchable)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"clear-button-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{id:"clear-button",ref:el=>this.clearButton=el,"aria-label":this.searchableSelectInputValue&&null===currValue?"Clear input":"Clear selection",class:"clear-button",innerHTML:Clear,onClick:this.handleClear,onFocus:this.handleClearButtonFocus,onBlur:this.handleClearButtonBlur,size,variant:"icon",appearance:this.clearButtonFocused?IcThemeForegroundEnum.Light:IcThemeForegroundEnum.Dark}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"divider"})),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{onMouseDown:this.handleExpandIconMouseDown,class:{"expand-icon":!0,"expand-icon-open":this.open},innerHTML:Expand,"aria-hidden":"true"}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-live":"polite",role:"status",class:"searchable-select-results-status"})):(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"select-container"},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{class:"select-input",ref:el=>this.customSelectElement=el,id:this.inputId,"aria-label":`${label}, ${(multiple&&currValue?`${optionsSelectedCount}, ${this.getMultipleOptionsString(currValue)}`:this.getLabelFromValue(currValue))||placeholder}${required?", required":""}`,"aria-describedby":describedBy,"aria-invalid":invalid,"aria-haspopup":"listbox","aria-expanded":this.open?"true":"false","aria-owns":menuId,"aria-controls":menuId,disabled,onBlur:this.onBlur,onFocus:this.onFocus,onClick:this.handleClick,onMouseDown:this.handleMouseDown,onKeyDown:this.handleKeyDown},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body",class:{"value-text":!0,"with-clear-button":currValue&&showClearButton,placeholder:!this.value||multiple&&this.value.length<1}},(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,(multiple?this.getMultipleOptionsString(currValue):this.getLabelFromValue(currValue))||placeholder)),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"select-input-end"},currValue&&showClearButton&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"divider"}),(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:{"expand-icon":!0,"expand-icon-open":this.open},innerHTML:Expand,"aria-hidden":"true"}))),currValue&&showClearButton&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{id:"clear-button","aria-label":"Clear selection",class:"clear-button",innerHTML:Clear,onClick:this.handleClear,onFocus:this.handleClearButtonFocus,onBlur:this.handleClearButtonBlur,size,variant:"icon",appearance:this.clearButtonFocused?IcThemeForegroundEnum.Light:IcThemeForegroundEnum.Dark}))),(!(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.h)()||multiple)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-menu-with-multi",{class:{"no-results":this.loading||this.hasTimedOut||null!==this.noOptions&&this.noOptions[0]&&this.noOptions[0].label===this.emptyOptionListText},ref:el=>this.menu=el,inputEl:searchable?this.searchableSelectElement:this.customSelectElement,inputLabel:label,anchorEl:this.anchorEl,small,size,menuId,open:this.open,options:searchable?this.filteredOptions:this.uniqueOptions,value:currValue,fullWidth,selectOnEnter:this.selectOnEnter,onMenuStateChange:this.handleMenuChange,onMenuOptionSelect:this.handleCustomSelectChange,onMenuOptionSelectAll:this.handleSelectAllChange,onMenuKeyPress:this.handleMenuKeyPress,onUngroupedOptionsSet:this.setUngroupedOptions,onRetryButtonClicked:this.handleRetry,parentEl:this.el,onTimeoutBlur:this.onTimeoutBlur,activationType:this.searchable||multiple||this.selectOnEnter?"manual":"automatic",closeOnSelect:!multiple}),this.multiple&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{"aria-live":"polite",role:"status",class:"multi-select-selected-count"}),(0,_helpers_5271897c_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.validationStatus,this.disabled)&&(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-input-validation",{class:{"menu-open":this.open},ariaLiveMode:"polite",status:validationStatus,message:validationText,for:this.inputId})))}static get delegatesFocus(){return!0}get el(){return(0,_index_93509377_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{loading:["loadingHandler"],options:["watchOptionsHandler"],debounce:["debounceChangedHandler"],value:["valueChangedHandler"]}}};Select.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:relative;--menu-max-height:100px}:host(.full-width){width:100%}ic-input-component-container:hover{--border-color:var(--ic-action-dark-hover)}ic-input-component-container:active{--border-color:var(--ic-action-dark-active);color:var(--ic-action-dark-active)}ic-input-component-container.menu-open{--border-color:var(--ic-architectural-400);color:var(--ic-action-dark)}ic-input-validation .status-icon,ic-input-validation .statustext{visibility:visible}ic-input-validation.menu-open .status-icon,ic-input-validation.menu-open .statustext{visibility:hidden;transition:visibility 0s}ic-input-label{margin-bottom:var(--ic-space-xs) !important}select{border:0;border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);color:var(--ic-color-primary-text);line-height:1.5rem;letter-spacing:0.005rem;width:100%;height:100%;padding-left:0.375rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-repeat:no-repeat;background-position:right 0.375rem center;background-image:url("data:image/svg+xml;utf8,<svg fill=\'black\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")}select option,.select-option-selected{color:var(--ic-color-primary-text)}select:disabled{color:var(--ic-architectural-200);background-image:url("data:image/svg+xml;utf8,<svg fill=\'grey\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")}select:focus{border:0;outline:0}select:not([disabled]){cursor:pointer}.select-container{width:100%;display:flex;align-items:center;position:relative}.select-input{width:100%;height:100%;padding:0 0.375rem;display:flex;cursor:pointer;align-items:center;justify-content:space-between;background:none;border:none}.select-input:focus{outline:var(--ic-hc-focus-outline)}:host(:not(.disabled)) ic-input-component-container:hover .select-input{background-color:var(--ic-architectural-white)}.select-input[disabled]{pointer-events:none}:host(.searchable) .select-input{cursor:auto}.select-input.with-clear-button{padding-right:0}.value-text{max-width:calc(100% - (var(--ic-space-lg) + var(--ic-space-xxs)));box-sizing:border-box}.value-text.with-clear-button{padding-right:calc(var(--ic-space-xl) + var(--ic-space-xs))}.value-text p{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-bottom:0 !important}.searchable-select-container{align-items:center;display:flex;width:100%;position:relative}.expand-icon{height:var(--ic-space-lg);padding-left:var(--ic-space-xxs);color:var(--ic-action-dark)}.expand-icon>svg{display:inline-block;width:var(--ic-space-lg);height:var(--ic-space-lg)}:host(.disabled) .expand-icon,:host(.disabled) .expand-icon>svg>path{color:var(--ic-architectural-200)}:host(.searchable) .expand-icon{padding-left:0;height:2.25rem}:host(.searchable) .expand-icon>svg{height:2.25rem;padding:0 0.375rem}:host(.searchable:not(.disabled)) .expand-icon>svg{cursor:pointer}.expand-icon-open{color:var(--ic-action-dark)}.expand-icon-open,:host(.searchable) .expand-icon-open{transform:rotateX(180deg)}:host(.disabled) .value-text,.placeholder{color:var(--ic-color-tertiary-text)}.select-input-end{display:flex;align-items:center}.clear-button-container{display:flex}.divider{width:var(--ic-space-1px);background-color:var(--ic-architectural-400);margin:var(--ic-space-xxs) 0;border-radius:var(--ic-space-1px);height:var(--ic-space-lg)}:host(.small) .divider{height:var(--ic-space-md)}:host(.large) .divider{height:var(--ic-space-xl)}.clear-button{position:absolute;right:calc(var(--ic-space-xl) + var(--ic-space-xxs));border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition)}.clear-button:focus{background-color:var(--ic-focus-blue);box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow);border-radius:0.25rem}.clear-button:focus *{fill:white}.clear-button.searchable{position:static}.searchable-select-results-status,.multi-select-selected-count{border:0;clip:rect(0, 0, 0, 0, 0);height:var(--ic-space-1px);overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:var(--ic-space-1px)}'}}]);
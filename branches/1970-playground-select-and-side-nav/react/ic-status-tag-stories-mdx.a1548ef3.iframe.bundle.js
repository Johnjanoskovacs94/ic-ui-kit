/*! For license information please see ic-status-tag-stories-mdx.a1548ef3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[2681],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,dk:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/ic-status-tag.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,danger:()=>danger,default:()=>ic_status_tag_stories,deprecatedAppearance:()=>deprecatedAppearance,deprecatedSmall:()=>deprecatedSmall,neutral:()=>neutral,small:()=>small,success:()=>success,warning:()=>warning});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),components=__webpack_require__("./src/components.ts");const readme_namespaceObject='# ic-status-tag\n\n\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Properties\n\n| Property             | Attribute    | Description                                                                                                                                                                  | Type                                              | Default     |\n| -------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |\n| `announced`          | `announced`  | If `true`, role=\'status\' is added to the component and it will act as an \'aria-live\' region. Screen readers will announce changes to the `label`, but not the initial value. | `boolean`                                         | `false`     |\n| `appearance`         | `appearance` | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Use variant prop instead.<br/><br/>                                                    | `"filled" \\| "outlined"`                          | `undefined` |\n| `label` _(required)_ | `label`      | The content rendered within the status tag.                                                                                                                                  | `string`                                          | `undefined` |\n| `size`               | `size`       | The size of the status tag component.                                                                                                                                        | `"default" \\| "small"`                            | `"default"` |\n| `small`              | `small`      | <span style="color:red">**[DEPRECATED]**</span> This prop should not be used anymore. Set prop `size` to "small" instead.<br/><br/>                                          | `boolean`                                         | `false`     |\n| `status`             | `status`     | The colour of the status tag.                                                                                                                                                | `"danger" \\| "neutral" \\| "success" \\| "warning"` | `"neutral"` |\n| `variant`            | `variant`    | The emphasis of the status tag.                                                                                                                                              | `"filled" \\| "outlined"`                          | `"filled"`  |\n\n\n## Dependencies\n\n### Depends on\n\n- [ic-typography](../ic-typography)\n\n### Graph\n```mermaid\ngraph TD;\n  ic-status-tag --\x3e ic-typography\n  style ic-status-tag fill:#f9f,stroke:#333,stroke-width:4px\n```\n\n----------------------------------------------\n\n\n';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Status tag",component:components.iJ}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:readme_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"neutral",children:"Neutral"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Neutral",children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Neutral"}),(0,jsx_runtime.jsx)(components.iJ,{label:"Neutral",variant:"outlined"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"success",children:"Success"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Success",children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Success",status:"success"}),(0,jsx_runtime.jsx)(components.iJ,{label:"Success",status:"success",variant:"outlined"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"warning",children:"Warning"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Warning",children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Warning",status:"warning"}),(0,jsx_runtime.jsx)(components.iJ,{label:"Warning",status:"warning",variant:"outlined"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"danger",children:"Danger"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Danger",children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Danger",status:"danger"}),(0,jsx_runtime.jsx)(components.iJ,{label:"Danger",status:"danger",variant:"outlined"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Small",children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.iJ,{label:"Small",variant:"outlined",size:"small"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---small",children:"Deprecated - small"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Deprecated - small",children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Small",small:!0}),(0,jsx_runtime.jsx)(components.iJ,{label:"Small",variant:"outlined",small:!0})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"deprecated---appearance",children:"Deprecated - appearance"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsxs)(dist.oG,{name:"Deprecated - appearance",children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Neutral"}),(0,jsx_runtime.jsx)(components.iJ,{label:"Neutral",appearance:"outlined"})]})})]})}const neutral=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Neutral"}),(0,jsx_runtime.jsx)(components.iJ,{label:"Neutral",variant:"outlined"})]});neutral.storyName="Neutral",neutral.parameters={storySource:{source:'<IcStatusTag label="Neutral" />\n<IcStatusTag label="Neutral" variant="outlined" />'}};const success=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Success",status:"success"}),(0,jsx_runtime.jsx)(components.iJ,{label:"Success",status:"success",variant:"outlined"})]});success.storyName="Success",success.parameters={storySource:{source:'<IcStatusTag label="Success" status="success" />\n<IcStatusTag label="Success" status="success" variant="outlined" />'}};const warning=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Warning",status:"warning"}),(0,jsx_runtime.jsx)(components.iJ,{label:"Warning",status:"warning",variant:"outlined"})]});warning.storyName="Warning",warning.parameters={storySource:{source:'<IcStatusTag label="Warning" status="warning" />\n<IcStatusTag label="Warning" status="warning" variant="outlined" />'}};const danger=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Danger",status:"danger"}),(0,jsx_runtime.jsx)(components.iJ,{label:"Danger",status:"danger",variant:"outlined"})]});danger.storyName="Danger",danger.parameters={storySource:{source:'<IcStatusTag label="Danger" status="danger" />\n<IcStatusTag label="Danger" status="danger" variant="outlined" />'}};const small=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Small",size:"small"}),(0,jsx_runtime.jsx)(components.iJ,{label:"Small",variant:"outlined",size:"small"})]});small.storyName="Small",small.parameters={storySource:{source:'<IcStatusTag label="Small" size="small" />\n<IcStatusTag label="Small" variant="outlined" size="small" />'}};const deprecatedSmall=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Small",small:!0}),(0,jsx_runtime.jsx)(components.iJ,{label:"Small",variant:"outlined",small:!0})]});deprecatedSmall.storyName="Deprecated - small",deprecatedSmall.parameters={storySource:{source:'<IcStatusTag label="Small" small />\n<IcStatusTag label="Small" variant="outlined" small />'}};const deprecatedAppearance=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(components.iJ,{label:"Neutral"}),(0,jsx_runtime.jsx)(components.iJ,{label:"Neutral",appearance:"outlined"})]});deprecatedAppearance.storyName="Deprecated - appearance",deprecatedAppearance.parameters={storySource:{source:'<IcStatusTag label="Neutral" />\n<IcStatusTag label="Neutral" appearance="outlined" />'}};const componentMeta={title:"Status tag",component:components.iJ,tags:["stories-mdx"],includeStories:["neutral","success","warning","danger","small","deprecatedSmall","deprecatedAppearance"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const ic_status_tag_stories=componentMeta,__namedExportsOrder=["neutral","success","warning","danger","small","deprecatedSmall","deprecatedAppearance"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
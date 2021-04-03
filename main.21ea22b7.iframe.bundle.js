(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{21:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return Container_Container})),__webpack_require__.d(__webpack_exports__,"d",(function(){return Row_Row})),__webpack_require__.d(__webpack_exports__,"a",(function(){return Col_Col})),__webpack_require__.d(__webpack_exports__,"c",(function(){return GridConfigProvider_GridConfigProvider}));var emotion_react_browser_esm=__webpack_require__(65),react=__webpack_require__(0),emotion_react_jsx_runtime_browser_esm=__webpack_require__(13);const GridContext=Object(react.createContext)(null),GridConfigProvider_GridConfigProvider=props=>Object(emotion_react_jsx_runtime_browser_esm.b)(GridContext.Provider,{...props}),useGrid=()=>{const config=Object(react.useContext)(GridContext);if(!config)throw"Use GridConfigProvider first";return config};try{GridConfigProvider_GridConfigProvider.displayName="GridConfigProvider",GridConfigProvider_GridConfigProvider.__docgenInfo={description:"",displayName:"GridConfigProvider",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"GridConfig"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/GridConfigProvider.tsx#GridConfigProvider"]={docgenInfo:GridConfigProvider_GridConfigProvider.__docgenInfo,name:"GridConfigProvider",path:"packages/grid/src/GridConfigProvider.tsx#GridConfigProvider"})}catch(__react_docgen_typescript_loader_error){}const useStyles=(factory,...args)=>factory(useGrid(),...args),stylesFactory=(gridConfig,fluid)=>[Object(emotion_react_browser_esm.b)("margin:0 auto;padding:0 calc(",gridConfig.gutter," / 2);","")].concat(fluid?[]:Object.values(gridConfig.breakpoints).sort().slice(1).map(breakpoint=>Object(emotion_react_browser_esm.b)("@media only screen and (min-width: ",breakpoint,"em){width:100%;max-width:calc(",breakpoint,"em - ",gridConfig.gutter,");}",""))),Container_Container=({fluid:fluid=!1,...props})=>{const style=useStyles(stylesFactory,fluid);return Object(emotion_react_jsx_runtime_browser_esm.b)("div",{css:style,...props})};try{Container_Container.displayName="Container",Container_Container.__docgenInfo={description:"",displayName:"Container",props:{fluid:{defaultValue:{value:"false"},description:"If `true` the container will have `max-width: 100%`. <br/>\nIf `false`, `max-width` will match the current breakpoint.",name:"fluid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/Container.tsx#Container"]={docgenInfo:Container_Container.__docgenInfo,name:"Container",path:"packages/grid/src/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}const Row_stylesFactory=(gridConfig,justify="start",align="unset")=>Object(emotion_react_browser_esm.b)("display:flex;flex-wrap:wrap;align-items:",align,";justify-content:",justify,";margin:0 calc(",gridConfig.gutter," / 2 * -1);&>*{padding:0 calc(",gridConfig.gutter," / 2);}",""),Row_Row=({justify:justify,align:align,...props})=>{const styles=useStyles(Row_stylesFactory,justify,align);return Object(emotion_react_jsx_runtime_browser_esm.b)("div",{css:styles,...props})};try{Row_Row.displayName="Row",Row_Row.__docgenInfo={description:"",displayName:"Row",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"unset"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/Row.tsx#Row"]={docgenInfo:Row_Row.__docgenInfo,name:"Row",path:"packages/grid/src/Row.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}var _ref={name:"o4pu1i",styles:"display:block;flex-basis:0;flex-grow:1;max-width:100%"};const Col_stylesFactory=(gridConfig,v)=>[Object(emotion_react_browser_esm.b)("flex:0 0 auto;margin-top:calc(",gridConfig.gutter," / 2);",""),...Object.values(gridConfig.breakpoints).sort().map((breakpoint,i)=>0===i&&void 0===v[i]||!0===v[i]?_ref:0===i||"number"==typeof v[i]?Object(emotion_react_browser_esm.b)("display:block;flex-basis:",100*v[i],"%;max-width:",100*v[i],"%;",""):!1===v[i]?Object(emotion_react_browser_esm.b)("@media only screen and (min-width: ",breakpoint,"em){display:none;}",""):void 0)],Col_Col=props=>{const gridConfig=useGrid(),breakpointsValues=Object.keys(gridConfig.breakpoints).map(propName=>props[propName]),styles=useStyles(Col_stylesFactory,breakpointsValues);return Object(emotion_react_jsx_runtime_browser_esm.b)("div",{css:styles,...props})};try{Col_Col.displayName="Col",Col_Col.__docgenInfo={description:"",displayName:"Col",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/Col.tsx#Col"]={docgenInfo:Col_Col.__docgenInfo,name:"Col",path:"packages/grid/src/Col.tsx#Col"})}catch(__react_docgen_typescript_loader_error){}try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{fluid:{defaultValue:{value:"false"},description:"If `true` the container will have `max-width: 100%`. <br/>\nIf `false`, `max-width` will match the current breakpoint.",name:"fluid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/index.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"packages/grid/src/index.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{Row.displayName="Row",Row.__docgenInfo={description:"",displayName:"Row",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"unset"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/index.tsx#Row"]={docgenInfo:Row.__docgenInfo,name:"Row",path:"packages/grid/src/index.tsx#Row"})}catch(__react_docgen_typescript_loader_error){}try{Col.displayName="Col",Col.__docgenInfo={description:"",displayName:"Col",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/index.tsx#Col"]={docgenInfo:Col.__docgenInfo,name:"Col",path:"packages/grid/src/index.tsx#Col"})}catch(__react_docgen_typescript_loader_error){}try{GridConfigProvider.displayName="GridConfigProvider",GridConfigProvider.__docgenInfo={description:"",displayName:"GridConfigProvider",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"GridConfig"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/src/index.tsx#GridConfigProvider"]={docgenInfo:GridConfigProvider.__docgenInfo,name:"GridConfigProvider",path:"packages/grid/src/index.tsx#GridConfigProvider"})}catch(__react_docgen_typescript_loader_error){}},221:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Template",(function(){return Template}));var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13);const Template=()=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.c)(_src__WEBPACK_IMPORTED_MODULE_0__.b,{fluid:!0,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_src__WEBPACK_IMPORTED_MODULE_0__.d,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_src__WEBPACK_IMPORTED_MODULE_0__.a,{children:"Auto-grow"})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.c)(_src__WEBPACK_IMPORTED_MODULE_0__.d,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_src__WEBPACK_IMPORTED_MODULE_0__.a,{xs:!0,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_Box__WEBPACK_IMPORTED_MODULE_1__.a,{children:"xs"})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_src__WEBPACK_IMPORTED_MODULE_0__.a,{xs:!0,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_Box__WEBPACK_IMPORTED_MODULE_1__.a,{children:"xs"})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_src__WEBPACK_IMPORTED_MODULE_0__.a,{xs:!0,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_Box__WEBPACK_IMPORTED_MODULE_1__.a,{children:"xs"})})]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.c)(_src__WEBPACK_IMPORTED_MODULE_0__.d,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_src__WEBPACK_IMPORTED_MODULE_0__.a,{xs:.5,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_Box__WEBPACK_IMPORTED_MODULE_1__.a,{children:"xs = 1 / 2"})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_src__WEBPACK_IMPORTED_MODULE_0__.a,{xs:!0,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_Box__WEBPACK_IMPORTED_MODULE_1__.a,{children:"xs"})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_src__WEBPACK_IMPORTED_MODULE_0__.a,{xs:!0,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_Box__WEBPACK_IMPORTED_MODULE_1__.a,{children:"xs"})})]})]})},222:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Template",(function(){return Template}));var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13);const Template=({fluid:fluid})=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_src__WEBPACK_IMPORTED_MODULE_0__.b,{fluid:fluid,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.c)(_Box__WEBPACK_IMPORTED_MODULE_1__.a,{children:[fluid&&"Fluid ","Container"]})});try{Template.displayName="Template",Template.__docgenInfo={description:"",displayName:"Template",props:{fluid:{defaultValue:null,description:"If `true` the container will have `max-width: 100%`. <br/>\nIf `false`, `max-width` will match the current breakpoint.",name:"fluid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/stories/Container.stories.tsx#Template"]={docgenInfo:Template.__docgenInfo,name:"Template",path:"packages/grid/stories/Container.stories.tsx#Template"})}catch(__react_docgen_typescript_loader_error){}},223:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Template",(function(){return Template}));var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21),_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13);const Template=props=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_src__WEBPACK_IMPORTED_MODULE_0__.b,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.c)(_src__WEBPACK_IMPORTED_MODULE_0__.d,{...props,children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_Box__WEBPACK_IMPORTED_MODULE_1__.a,{children:"A Box!"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.b)(_Box__WEBPACK_IMPORTED_MODULE_1__.a,{tall:!0,children:"A tall Box!"})]})});try{Template.displayName="Template",Template.__docgenInfo={description:"",displayName:"Template",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'},{value:'"unset"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/stories/Row.stories.tsx#Template"]={docgenInfo:Template.__docgenInfo,name:"Template",path:"packages/grid/stories/Row.stories.tsx#Template"})}catch(__react_docgen_typescript_loader_error){}},473:function(module,exports,__webpack_require__){__webpack_require__(474),__webpack_require__(629),__webpack_require__(630),__webpack_require__(836),__webpack_require__(834),__webpack_require__(838),__webpack_require__(839),__webpack_require__(837),__webpack_require__(835),__webpack_require__(840),__webpack_require__(841),module.exports=__webpack_require__(828)},541:function(module,exports){},56:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Box}));var _emotion_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13);var _ref={name:"m1a2da",styles:"padding:0.5rem"},_ref2={name:"1vavuhq",styles:"height:150px"};const Box=({tall:tall,children:children,...props})=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.b)("div",{css:Object(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.b)("background-color:hsla(0, 0%, 91.37254901960785%, 0.1);border-radius:4px;",tall&&_ref2,";",""),...props,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.b)("div",{css:_ref,children:children})});try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{tall:{defaultValue:null,description:"",name:"tall",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/grid/stories/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"packages/grid/stories/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},630:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(343)},828:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(343).configure)([__webpack_require__(829)],module,!1)}).call(this,__webpack_require__(197)(module))},829:function(module,exports,__webpack_require__){var map={"./grid/stories/Col.stories.mdx":830,"./grid/stories/Col.stories.tsx":221,"./grid/stories/Container.stories.mdx":831,"./grid/stories/Container.stories.tsx":222,"./grid/stories/GridConfigProvider.stories.mdx":832,"./grid/stories/README.stories.mdx":842,"./grid/stories/Row.stories.mdx":833,"./grid/stories/Row.stories.tsx":223};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=829},830:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gridConfig",(function(){return gridConfig})),__webpack_require__.d(__webpack_exports__,"col",(function(){return col}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(27),_Col_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(221),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(21);__webpack_require__(56);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const gridConfig={breakpoints:{xs:15,sm:20,md:25,lg:30},gutter:"1rem"},layoutProps={gridConfig:gridConfig};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,{title:"Grid/Col",decorators:[story=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_src__WEBPACK_IMPORTED_MODULE_4__.c,{value:gridConfig,mdxType:"GridConfigProvider"},story())],component:_src__WEBPACK_IMPORTED_MODULE_4__.a,mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h1",{id:"col"},"Col"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.c,{withToolbar:!0,mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,{name:"Col",mdxType:"Story"},_Col_stories__WEBPACK_IMPORTED_MODULE_3__.Template.bind({}))))}MDXContent.isMDXComponent=!0;const col=_Col_stories__WEBPACK_IMPORTED_MODULE_3__.Template.bind({});col.storyName="Col",col.parameters={storySource:{source:"Template.bind({})"}};const componentMeta={title:"Grid/Col",decorators:[story=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_src__WEBPACK_IMPORTED_MODULE_4__.c,{value:gridConfig},story())],component:_src__WEBPACK_IMPORTED_MODULE_4__.a,includeStories:["col"]},mdxStoryNameToKey={Col:"col"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(MDXContent,null))},__webpack_exports__.default=componentMeta},831:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gridConfig",(function(){return gridConfig})),__webpack_require__.d(__webpack_exports__,"container",(function(){return container}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(27),_Container_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(222),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(21);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const gridConfig={breakpoints:{xs:15,sm:20,md:25,lg:30},gutter:"1rem"},layoutProps={gridConfig:gridConfig};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,{title:"Grid/Container",decorators:[story=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_src__WEBPACK_IMPORTED_MODULE_4__.c,{value:gridConfig,mdxType:"GridConfigProvider"},story())],component:_src__WEBPACK_IMPORTED_MODULE_4__.b,mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h1",{id:"container"},"Container"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.c,{withToolbar:!0,mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,{name:"Container",mdxType:"Story"},_Container_stories__WEBPACK_IMPORTED_MODULE_3__.Template.bind({}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.b,{of:".",story:"^",mdxType:"ArgsTable"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h2",{id:"responsive-container"},"Responsive Container"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"The ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("inlineCode",{parentName:"p"},"Container")," responsively sets a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("inlineCode",{parentName:"p"},"max-width")," for each configured breakpoint equal to ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("inlineCode",{parentName:"p"},"calc(breakpoint - gutter)"),"."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h2",{id:"fluid-container"},"Fluid Container"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"When used with the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("inlineCode",{parentName:"p"},"fluid")," prop, ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("inlineCode",{parentName:"p"},"max-width")," is always ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("inlineCode",{parentName:"p"},"100%"),"."))}MDXContent.isMDXComponent=!0;const container=_Container_stories__WEBPACK_IMPORTED_MODULE_3__.Template.bind({});container.storyName="Container",container.parameters={storySource:{source:"Template.bind({})"}};const componentMeta={title:"Grid/Container",decorators:[story=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_src__WEBPACK_IMPORTED_MODULE_4__.c,{value:gridConfig},story())],component:_src__WEBPACK_IMPORTED_MODULE_4__.b,includeStories:["container"]},mdxStoryNameToKey={Container:"container"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(MDXContent,null))},__webpack_exports__.default=componentMeta},832:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(27);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,{title:"Grid/GridConfigProvider",parameters:{docsOnly:!0,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h2",{id:"gridconfigprovider"},"GridConfigProvider"))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Grid/GridConfigProvider",parameters:{docsOnly:!0,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(MDXContent,null))},__webpack_exports__.default=componentMeta},833:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"gridConfig",(function(){return gridConfig})),__webpack_require__.d(__webpack_exports__,"row",(function(){return row}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(27),_Row_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(223),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(21);__webpack_require__(56);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const gridConfig={breakpoints:{xs:15,sm:20,md:25,lg:30},gutter:"1rem"},layoutProps={gridConfig:gridConfig};function MDXContent({components:components,...props}){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,{title:"Grid/Row",decorators:[story=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_src__WEBPACK_IMPORTED_MODULE_4__.c,{value:gridConfig,mdxType:"GridConfigProvider"},story())],component:_src__WEBPACK_IMPORTED_MODULE_4__.d,mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h1",{id:"row"},"Row"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.c,{withToolbar:!0,mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,{name:"Row",mdxType:"Story"},_Row_stories__WEBPACK_IMPORTED_MODULE_3__.Template.bind({}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.b,{of:".",story:"^",mdxType:"ArgsTable"}))}MDXContent.isMDXComponent=!0;const row=_Row_stories__WEBPACK_IMPORTED_MODULE_3__.Template.bind({});row.storyName="Row",row.parameters={storySource:{source:"Template.bind({})"}};const componentMeta={title:"Grid/Row",decorators:[story=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_src__WEBPACK_IMPORTED_MODULE_4__.c,{value:gridConfig},story())],component:_src__WEBPACK_IMPORTED_MODULE_4__.d,includeStories:["row"]},mdxStoryNameToKey={Row:"row"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(MDXContent,null))},__webpack_exports__.default=componentMeta},841:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));var client_api=__webpack_require__(847),esm=__webpack_require__(6),emotion_react_browser_esm=__webpack_require__(65),create=__webpack_require__(215),emotion_react_jsx_runtime_browser_esm=__webpack_require__(13);const parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{expanded:!0,matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{theme:create.a.dark,inlineStories:!0},options:{storySort:{order:["Grid",["README","GridConfigProvider","Container","Row","Col"]]}},argTypes:{className:{table:{disable:!0}}}};var _ref={name:"xww54f",styles:"*{box-sizing:border-box;font-family:'Nunito Sans',sans-serif;color:#fff;}"};const decorators=[Story=>Object(emotion_react_jsx_runtime_browser_esm.c)(emotion_react_jsx_runtime_browser_esm.a,{children:[Object(emotion_react_jsx_runtime_browser_esm.b)(emotion_react_browser_esm.a,{styles:_ref}),Object(emotion_react_jsx_runtime_browser_esm.b)(Story,{})]})];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},842:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var esm=__webpack_require__(4),blocks=__webpack_require__(27);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)("h1",{id:"giogrid"},"@gio/grid"),Object(esm.b)("h2",{id:"a-simple-opinionated-flex-based-grid-system"},"A simple opinionated flex-based grid system"),Object(esm.b)("p",null,Object(esm.b)("inlineCode",{parentName:"p"},"@gio/grid")," is a simple and opinionanted responsive grid system for react based on emotion and flexbox."),Object(esm.b)("p",null,"It doesn't try to solve every possible layout problem, but (hopefully) will solve most of the simple use cases."),Object(esm.b)("h2",{id:"install"},"Install"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-bash"},"npm i @gio/grid\n")),Object(esm.b)("p",null,"or"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @gio/grid\n")),Object(esm.b)("h2",{id:"usage"},"Usage"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-tsx"},"import { GridConfigProvider, Container, Row, Col } from '@gio/grid';\n\nconst gridConfig = {\n  breakpoints: {\n    xs: 30,\n    sm: 48,\n    md: 64,\n    lg: 75,\n  },\n  gutter: '1.5rem',\n  outerMargin: '1rem',\n};\n\nexport const App = () => {\n  return (\n    <GridConfigProvider value={gridConfig}>\n      <Container>\n        <Row>\n          <Col>I'm a column</Col>\n          <Col>I'm also a column</Col>\n        </Row>\n      </Container>\n    </GridConfigProvider>\n  );\n};\n")),Object(esm.b)("h3",{id:"with-typescript"},"With TypeScript"),Object(esm.b)("p",null,"As per the previous examples, ",Object(esm.b)("inlineCode",{parentName:"p"},"Col")," accepts every key defined in ",Object(esm.b)("inlineCode",{parentName:"p"},"breakpoints")," as props.\nIn order to get the correct types, we leverage ",Object(esm.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation",target:"_blank",rel:"nofollow noopener noreferrer"},"module augmentation")," to augment default types."),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-ts"},"// grid.d.ts\nimport { Breakpoints } from '@gio/grid';\n\ndeclare module `@gio/grid` {\n  interface Breakpoints {\n    xs: number;\n    sm: number;\n    // ...\n  }\n}\n")),Object(esm.b)("blockquote",null,Object(esm.b)("p",{parentName:"blockquote"},Object(esm.b)("strong",{parentName:"p"},"Note"),": Be sure to include the file in your ",Object(esm.b)("inlineCode",{parentName:"p"},"include")," section in ",Object(esm.b)("inlineCode",{parentName:"p"},"tsconfig.json"))))}function README_stories_extends(){return(README_stories_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}MDXContent.isMDXComponent=!0;const README_stories_layoutProps={};function README_stories_MDXContent({components:components,...props}){return Object(esm.b)("wrapper",README_stories_extends({},README_stories_layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(blocks.d,{title:"Grid/README",parameters:{docsOnly:!0,previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),Object(esm.b)(MDXContent,{mdxType:"Readme"}))}README_stories_MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Grid/README",parameters:{docsOnly:!0,previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.b)(blocks.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.b)(README_stories_MDXContent,null))};__webpack_exports__.default=componentMeta}},[[473,2,3]]]);
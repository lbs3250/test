(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[9967],{1337:(e,t,n)=>{"use strict";var o=n(4994);t.A=void 0;var r=o(n(39)),i=n(579);t.A=(0,r.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},39:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(1512)},8561:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var o=n(8587),r=n(8168),i=n(5043),a=n(8387),s=n(8606),c=n(4535),d=n(2876),l=n(7056),u=n(2400);function p(e){return(0,u.Ay)("MuiAccordionActions",e)}(0,l.A)("MuiAccordionActions",["root","spacing"]);var A=n(579);const m=["className","disableSpacing"],f=(0,c.Ay)("div",{name:"MuiAccordionActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((e=>{let{ownerState:t}=e;return(0,r.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end"},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),h=i.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiAccordionActions"}),{className:i,disableSpacing:c=!1}=n,l=(0,o.A)(n,m),u=(0,r.A)({},n,{disableSpacing:c}),h=(e=>{const{classes:t,disableSpacing:n}=e,o={root:["root",!n&&"spacing"]};return(0,s.A)(o,p,t)})(u);return(0,A.jsx)(f,(0,r.A)({className:(0,a.A)(h.root,i),ref:t,ownerState:u},l))}))},710:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var o=n(8168),r=n(8587),i=n(5043),a=n(8387),s=n(8606),c=n(4535),d=n(2876),l=n(7056),u=n(2400);function p(e){return(0,u.Ay)("MuiAccordionDetails",e)}(0,l.A)("MuiAccordionDetails",["root"]);var A=n(579);const m=["className"],f=(0,c.Ay)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t}=e;return{padding:t.spacing(1,2,2)}})),h=i.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiAccordionDetails"}),{className:i}=n,c=(0,r.A)(n,m),l=n,u=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},p,t)})(l);return(0,A.jsx)(f,(0,o.A)({className:(0,a.A)(u.root,i),ref:t,ownerState:l},c))}))},6605:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var o=n(8587),r=n(8168),i=n(5043),a=n(8387),s=n(8606),c=n(4535),d=n(2876),l=n(6236),u=n(8309),p=n(7056),A=n(2400);function m(e){return(0,A.Ay)("MuiAccordionSummary",e)}const f=(0,p.A)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var h=n(579);const g=["children","className","expandIcon","focusVisibleClassName","onClick"],b=(0,c.Ay)(l.A,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t,ownerState:n}=e;const o={duration:t.transitions.duration.shortest};return(0,r.A)({display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],o),["&.".concat(f.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(f.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["&:hover:not(.".concat(f.disabled,")")]:{cursor:"pointer"}},!n.disableGutters&&{["&.".concat(f.expanded)]:{minHeight:64}})})),x=(0,c.Ay)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((e=>{let{theme:t,ownerState:n}=e;return(0,r.A)({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&{transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest}),["&.".concat(f.expanded)]:{margin:"20px 0"}})})),v=(0,c.Ay)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((e=>{let{theme:t}=e;return{display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),["&.".concat(f.expanded)]:{transform:"rotate(180deg)"}}})),y=i.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiAccordionSummary"}),{children:c,className:l,expandIcon:p,focusVisibleClassName:A,onClick:f}=n,y=(0,o.A)(n,g),{disabled:w=!1,disableGutters:S,expanded:R,toggle:C}=i.useContext(u.A),M=(0,r.A)({},n,{expanded:R,disabled:w,disableGutters:S}),k=(e=>{const{classes:t,expanded:n,disabled:o,disableGutters:r}=e,i={root:["root",n&&"expanded",o&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,s.A)(i,m,t)})(M);return(0,h.jsxs)(b,(0,r.A)({focusRipple:!1,disableRipple:!0,disabled:w,component:"div","aria-expanded":R,className:(0,a.A)(k.root,l),focusVisibleClassName:(0,a.A)(k.focusVisible,A),onClick:e=>{C&&C(e),f&&f(e)},ref:t,ownerState:M},y,{children:[(0,h.jsx)(x,{className:k.content,ownerState:M,children:c}),p&&(0,h.jsx)(v,{className:k.expandIconWrapper,ownerState:M,children:p})]}))}))},3766:(e,t,n)=>{"use strict";n.d(t,{A:()=>W});var o=n(8587),r=n(8168),i=n(5043),a=(n(2086),n(8387)),s=n(8606),c=n(4535),d=n(2876),l=n(9998),u=n(1140),p=n(4318),A=n(653),m=n(6240),f=n(5849),h=n(7056),g=n(2400);function b(e){return(0,g.Ay)("MuiCollapse",e)}(0,h.A)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var x=n(579);const v=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],y=(0,c.Ay)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((e=>{let{theme:t,ownerState:n}=e;return(0,r.A)({height:0,overflow:"hidden",transition:t.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:t.transitions.create("width")},"entered"===n.state&&(0,r.A)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),w=(0,c.Ay)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((e=>{let{ownerState:t}=e;return(0,r.A)({display:"flex",width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),S=(0,c.Ay)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((e=>{let{ownerState:t}=e;return(0,r.A)({width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),R=i.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiCollapse"}),{addEndListener:c,children:h,className:g,collapsedSize:R="0px",component:C,easing:M,in:k,onEnter:E,onEntered:N,onEntering:j,onExit:I,onExited:G,onExiting:T,orientation:W="vertical",style:P,timeout:z=p.p0.standard,TransitionComponent:D=l.Ay}=n,_=(0,o.A)(n,v),F=(0,r.A)({},n,{orientation:W,collapsedSize:R}),L=(e=>{const{orientation:t,classes:n}=e,o={root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]};return(0,s.A)(o,b,n)})(F),V=(0,m.A)(),q=(0,u.A)(),B=i.useRef(null),H=i.useRef(),O="number"===typeof R?"".concat(R,"px"):R,X="horizontal"===W,Z=X?"width":"height",J=i.useRef(null),K=(0,f.A)(t,J),Q=e=>t=>{if(e){const n=J.current;void 0===t?e(n):e(n,t)}},U=()=>B.current?B.current[X?"clientWidth":"clientHeight"]:0,Y=Q(((e,t)=>{B.current&&X&&(B.current.style.position="absolute"),e.style[Z]=O,E&&E(e,t)})),$=Q(((e,t)=>{const n=U();B.current&&X&&(B.current.style.position="");const{duration:o,easing:r}=(0,A.c)({style:P,timeout:z,easing:M},{mode:"enter"});if("auto"===z){const t=V.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(t,"ms"),H.current=t}else e.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");e.style[Z]="".concat(n,"px"),e.style.transitionTimingFunction=r,j&&j(e,t)})),ee=Q(((e,t)=>{e.style[Z]="auto",N&&N(e,t)})),te=Q((e=>{e.style[Z]="".concat(U(),"px"),I&&I(e)})),ne=Q(G),oe=Q((e=>{const t=U(),{duration:n,easing:o}=(0,A.c)({style:P,timeout:z,easing:M},{mode:"exit"});if("auto"===z){const n=V.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),H.current=n}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style[Z]=O,e.style.transitionTimingFunction=o,T&&T(e)}));return(0,x.jsx)(D,(0,r.A)({in:k,onEnter:Y,onEntered:ee,onEntering:$,onExit:te,onExited:ne,onExiting:oe,addEndListener:e=>{"auto"===z&&q.start(H.current||0,e),c&&c(J.current,e)},nodeRef:J,timeout:"auto"===z?null:z},_,{children:(e,t)=>(0,x.jsx)(y,(0,r.A)({as:C,className:(0,a.A)(L.root,g,{entered:L.entered,exited:!k&&"0px"===O&&L.hidden}[e]),style:(0,r.A)({[X?"minWidth":"minHeight"]:O},P),ownerState:(0,r.A)({},F,{state:e}),ref:K},t,{children:(0,x.jsx)(w,{ownerState:(0,r.A)({},F,{state:e}),className:L.wrapper,ref:B,children:(0,x.jsx)(S,{ownerState:(0,r.A)({},F,{state:e}),className:L.wrapperInner,children:h})})}))}))}));R.muiSupportAuto=!0;const C=R;var M=n(3336),k=n(8309),E=n(4516),N=n(4162);function j(e){return(0,g.Ay)("MuiAccordion",e)}const I=(0,h.A)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),G=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],T=(0,c.Ay)(M.A,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{["& .".concat(I.region)]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((e=>{let{theme:t}=e;const n={duration:t.transitions.duration.shortest};return{position:"relative",transition:t.transitions.create(["margin"],n),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(t.vars||t).palette.divider,transition:t.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&::before":{display:"none"}},["&.".concat(I.expanded)]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},["&.".concat(I.disabled)]:{backgroundColor:(t.vars||t).palette.action.disabledBackground}}}),(e=>{let{theme:t,ownerState:n}=e;return(0,r.A)({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&{["&.".concat(I.expanded)]:{margin:"16px 0"}})})),W=i.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiAccordion"}),{children:c,className:l,defaultExpanded:u=!1,disabled:p=!1,disableGutters:A=!1,expanded:m,onChange:f,square:h=!1,slots:g={},slotProps:b={},TransitionComponent:v,TransitionProps:y}=n,w=(0,o.A)(n,G),[S,R]=(0,E.A)({controlled:m,default:u,name:"Accordion",state:"expanded"}),M=i.useCallback((e=>{R(!S),f&&f(e,!S)}),[S,f,R]),[I,...W]=i.Children.toArray(c),P=i.useMemo((()=>({expanded:S,disabled:p,disableGutters:A,toggle:M})),[S,p,A,M]),z=(0,r.A)({},n,{square:h,disabled:p,disableGutters:A,expanded:S}),D=(e=>{const{classes:t,square:n,expanded:o,disabled:r,disableGutters:i}=e,a={root:["root",!n&&"rounded",o&&"expanded",r&&"disabled",!i&&"gutters"],region:["region"]};return(0,s.A)(a,j,t)})(z),_=(0,r.A)({transition:v},g),F=(0,r.A)({transition:y},b),[L,V]=(0,N.A)("transition",{elementType:C,externalForwardedProps:{slots:_,slotProps:F},ownerState:z});return delete V.ownerState,(0,x.jsxs)(T,(0,r.A)({className:(0,a.A)(D.root,l),ref:t,ownerState:z,square:h},w,{children:[(0,x.jsx)(k.A.Provider,{value:P,children:I}),(0,x.jsx)(L,(0,r.A)({in:S,timeout:"auto"},V,{children:(0,x.jsx)("div",{"aria-labelledby":I.props.id,id:I.props["aria-controls"],role:"region",className:D.region,children:W})}))]}))}))},8309:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=n(5043).createContext({})},8911:(e,t,n)=>{"use strict";n.d(t,{A:()=>M});var o=n(8587),r=n(8168),i=n(5043),a=n(8387),s=n(835),c=n(8606),d=n(2400),l=n(9644),u=n(2900),p=n(8698),A=n(7322),m=n(9751),f=n(8604),h=n(579);const g=["component","direction","spacing","divider","children","className","useFlexGap"],b=(0,A.A)(),x=(0,l.A)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function v(e){return(0,u.A)({props:e,name:"MuiStack",defaultTheme:b})}function y(e,t){const n=i.Children.toArray(e).filter(Boolean);return n.reduce(((e,o,r)=>(e.push(o),r<n.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(r)})),e)),[])}const w=e=>{let{ownerState:t,theme:n}=e,o=(0,r.A)({display:"flex",flexDirection:"column"},(0,m.NI)({theme:n},(0,m.kW)({values:t.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,f.LX)(n),r=Object.keys(n.breakpoints.values).reduce(((e,n)=>(("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e)),{}),i=(0,m.kW)({values:t.direction,base:r}),a=(0,m.kW)({values:t.spacing,base:r});"object"===typeof i&&Object.keys(i).forEach(((e,t,n)=>{if(!i[e]){const o=t>0?i[n[t-1]]:"column";i[e]=o}}));const c=(n,o)=>{return t.useFlexGap?{gap:(0,f._W)(e,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((r=o?i[o]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]))]:(0,f._W)(e,n)}};var r};o=(0,s.A)(o,(0,m.NI)({theme:n},a,c))}return o=(0,m.iZ)(n.breakpoints,o),o};var S=n(4535),R=n(2876);const C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=x,useThemeProps:n=v,componentName:s="MuiStack"}=e,l=t(w),u=i.forwardRef((function(e,t){const i=n(e),u=(0,p.A)(i),{component:A="div",direction:m="column",spacing:f=0,divider:b,children:x,className:v,useFlexGap:w=!1}=u,S=(0,o.A)(u,g),R={direction:m,spacing:f,useFlexGap:w},C=(0,c.A)({root:["root"]},(e=>(0,d.Ay)(s,e)),{});return(0,h.jsx)(l,(0,r.A)({as:A,ownerState:R,ref:t,className:(0,a.A)(C.root,v)},S,{children:b?y(x,b):x}))}));return u}({createStyledComponent:(0,S.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,R.A)({props:e,name:"MuiStack"})}),M=C},6593:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=n(4708).A},1512:(e,t,n)=>{"use strict";n.r(t),n.d(t,{capitalize:()=>r.A,createChainedFunction:()=>i.A,createSvgIcon:()=>a.A,debounce:()=>s.A,deprecatedPropType:()=>c,isMuiElement:()=>d.A,ownerDocument:()=>l.A,ownerWindow:()=>u.A,requirePropFactory:()=>p,setRef:()=>A,unstable_ClassNameGenerator:()=>y,unstable_useEnhancedEffect:()=>m.A,unstable_useId:()=>f.A,unsupportedProp:()=>h,useControlled:()=>g.A,useEventCallback:()=>b.A,useForkRef:()=>x.A,useIsFocusVisible:()=>v.A});var o=n(5430),r=n(6803),i=n(6593),a=n(6734),s=n(950);const c=function(e,t){return()=>null};var d=n(154),l=n(2427),u=n(6078);n(8168);const p=function(e,t){return()=>null};const A=n(9184).A;var m=n(5013),f=n(5879);const h=function(e,t,n,o,r){return null};var g=n(4516),b=n(3319),x=n(5849),v=n(7844);const y={configure:e=>{o.A.configure(e)}}},5879:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=n(992).A},4994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=9967.a0388439.chunk.js.map
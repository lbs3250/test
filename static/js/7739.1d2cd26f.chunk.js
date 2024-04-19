"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[7739],{7739:(e,o,t)=>{t.d(o,{A:()=>B});var r=t(8587),n=t(8168),a=t(5043),p=t(8387),l=t(1140),i=t(8606),s=t(2205),c=t(310),u=t(4535),m=t(6240),d=t(2876),h=t(6803),g=t(6328),f=t(5622),A=t(3319),v=t(5849),b=t(5879),w=t(7844),y=t(4516),x=t(7056),T=t(2400);function R(e){return(0,T.Ay)("MuiTooltip",e)}const P=(0,x.A)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);var M=t(579);const C=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];const L=(0,u.Ay)(f.A,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.popper,!t.disableInteractive&&o.popperInteractive,t.arrow&&o.popperArrow,!t.open&&o.popperClose]}})((e=>{let{theme:o,ownerState:t,open:r}=e;return(0,n.A)({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{['&[data-popper-placement*="bottom"] .'.concat(P.arrow)]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},['&[data-popper-placement*="top"] .'.concat(P.arrow)]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},['&[data-popper-placement*="right"] .'.concat(P.arrow)]:(0,n.A)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),['&[data-popper-placement*="left"] .'.concat(P.arrow)]:(0,n.A)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})})),S=(0,u.Ay)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.tooltip,t.touch&&o.touch,t.arrow&&o.tooltipArrow,o["tooltipPlacement".concat((0,h.A)(t.placement.split("-")[0]))]]}})((e=>{let{theme:o,ownerState:t}=e;return(0,n.A)({backgroundColor:o.vars?o.vars.palette.Tooltip.bg:(0,c.X4)(o.palette.grey[700],.92),borderRadius:(o.vars||o).shape.borderRadius,color:(o.vars||o).palette.common.white,fontFamily:o.typography.fontFamily,padding:"4px 8px",fontSize:o.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:o.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:o.typography.pxToRem(14),lineHeight:"".concat((r=16/14,Math.round(1e5*r)/1e5),"em"),fontWeight:o.typography.fontWeightRegular},{[".".concat(P.popper,'[data-popper-placement*="left"] &')]:(0,n.A)({transformOrigin:"right center"},t.isRtl?(0,n.A)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,n.A)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[".".concat(P.popper,'[data-popper-placement*="right"] &')]:(0,n.A)({transformOrigin:"left center"},t.isRtl?(0,n.A)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,n.A)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[".".concat(P.popper,'[data-popper-placement*="top"] &')]:(0,n.A)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[".".concat(P.popper,'[data-popper-placement*="bottom"] &')]:(0,n.A)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})});var r})),O=(0,u.Ay)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,o)=>o.arrow})((e=>{let{theme:o}=e;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:o.vars?o.vars.palette.Tooltip.bg:(0,c.X4)(o.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}}));let k=!1;const E=new l.E;let N={x:0,y:0};function I(e,o){return t=>{o&&o(t),e(t)}}const B=a.forwardRef((function(e,o){var t,c,u,x,T,P,B,D,F,W,X,j,z,U,H,V,_,Y,q;const G=(0,d.A)({props:e,name:"MuiTooltip"}),{arrow:J=!1,children:K,components:Q={},componentsProps:Z={},describeChild:$=!1,disableFocusListener:ee=!1,disableHoverListener:oe=!1,disableInteractive:te=!1,disableTouchListener:re=!1,enterDelay:ne=100,enterNextDelay:ae=0,enterTouchDelay:pe=700,followCursor:le=!1,id:ie,leaveDelay:se=0,leaveTouchDelay:ce=1500,onClose:ue,onOpen:me,open:de,placement:he="bottom",PopperComponent:ge,PopperProps:fe={},slotProps:Ae={},slots:ve={},title:be,TransitionComponent:we=g.A,TransitionProps:ye}=G,xe=(0,r.A)(G,C),Te=a.isValidElement(K)?K:(0,M.jsx)("span",{children:K}),Re=(0,m.A)(),Pe="rtl"===Re.direction,[Me,Ce]=a.useState(),[Le,Se]=a.useState(null),Oe=a.useRef(!1),ke=te||le,Ee=(0,l.A)(),Ne=(0,l.A)(),Ie=(0,l.A)(),Be=(0,l.A)(),[De,Fe]=(0,y.A)({controlled:de,default:!1,name:"Tooltip",state:"open"});let We=De;const Xe=(0,b.A)(ie),je=a.useRef(),ze=(0,A.A)((()=>{void 0!==je.current&&(document.body.style.WebkitUserSelect=je.current,je.current=void 0),Be.clear()}));a.useEffect((()=>ze),[ze]);const Ue=e=>{E.clear(),k=!0,Fe(!0),me&&!We&&me(e)},He=(0,A.A)((e=>{E.start(800+se,(()=>{k=!1})),Fe(!1),ue&&We&&ue(e),Ee.start(Re.transitions.duration.shortest,(()=>{Oe.current=!1}))})),Ve=e=>{Oe.current&&"touchstart"!==e.type||(Me&&Me.removeAttribute("title"),Ne.clear(),Ie.clear(),ne||k&&ae?Ne.start(k?ae:ne,(()=>{Ue(e)})):Ue(e))},_e=e=>{Ne.clear(),Ie.start(se,(()=>{He(e)}))},{isFocusVisibleRef:Ye,onBlur:qe,onFocus:Ge,ref:Je}=(0,w.A)(),[,Ke]=a.useState(!1),Qe=e=>{qe(e),!1===Ye.current&&(Ke(!1),_e(e))},Ze=e=>{Me||Ce(e.currentTarget),Ge(e),!0===Ye.current&&(Ke(!0),Ve(e))},$e=e=>{Oe.current=!0;const o=Te.props;o.onTouchStart&&o.onTouchStart(e)},eo=Ve,oo=_e,to=e=>{$e(e),Ie.clear(),Ee.clear(),ze(),je.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Be.start(pe,(()=>{document.body.style.WebkitUserSelect=je.current,Ve(e)}))},ro=e=>{Te.props.onTouchEnd&&Te.props.onTouchEnd(e),ze(),Ie.start(ce,(()=>{He(e)}))};a.useEffect((()=>{if(We)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||He(e)}}),[He,We]);const no=(0,v.A)(Te.ref,Je,Ce,o);be||0===be||(We=!1);const ao=a.useRef(),po={},lo="string"===typeof be;$?(po.title=We||!lo||oe?null:be,po["aria-describedby"]=We?Xe:null):(po["aria-label"]=lo?be:null,po["aria-labelledby"]=We&&!lo?Xe:null);const io=(0,n.A)({},po,xe,Te.props,{className:(0,p.A)(xe.className,Te.props.className),onTouchStart:$e,ref:no},le?{onMouseMove:e=>{const o=Te.props;o.onMouseMove&&o.onMouseMove(e),N={x:e.clientX,y:e.clientY},ao.current&&ao.current.update()}}:{});const so={};re||(io.onTouchStart=to,io.onTouchEnd=ro),oe||(io.onMouseOver=I(eo,io.onMouseOver),io.onMouseLeave=I(oo,io.onMouseLeave),ke||(so.onMouseOver=eo,so.onMouseLeave=oo)),ee||(io.onFocus=I(Ze,io.onFocus),io.onBlur=I(Qe,io.onBlur),ke||(so.onFocus=Ze,so.onBlur=Qe));const co=a.useMemo((()=>{var e;let o=[{name:"arrow",enabled:Boolean(Le),options:{element:Le,padding:4}}];return null!=(e=fe.popperOptions)&&e.modifiers&&(o=o.concat(fe.popperOptions.modifiers)),(0,n.A)({},fe.popperOptions,{modifiers:o})}),[Le,fe]),uo=(0,n.A)({},G,{isRtl:Pe,arrow:J,disableInteractive:ke,placement:he,PopperComponentProp:ge,touch:Oe.current}),mo=(e=>{const{classes:o,disableInteractive:t,arrow:r,touch:n,placement:a}=e,p={popper:["popper",!t&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch","tooltipPlacement".concat((0,h.A)(a.split("-")[0]))],arrow:["arrow"]};return(0,i.A)(p,R,o)})(uo),ho=null!=(t=null!=(c=ve.popper)?c:Q.Popper)?t:L,go=null!=(u=null!=(x=null!=(T=ve.transition)?T:Q.Transition)?x:we)?u:g.A,fo=null!=(P=null!=(B=ve.tooltip)?B:Q.Tooltip)?P:S,Ao=null!=(D=null!=(F=ve.arrow)?F:Q.Arrow)?D:O,vo=(0,s.X)(ho,(0,n.A)({},fe,null!=(W=Ae.popper)?W:Z.popper,{className:(0,p.A)(mo.popper,null==fe?void 0:fe.className,null==(X=null!=(j=Ae.popper)?j:Z.popper)?void 0:X.className)}),uo),bo=(0,s.X)(go,(0,n.A)({},ye,null!=(z=Ae.transition)?z:Z.transition),uo),wo=(0,s.X)(fo,(0,n.A)({},null!=(U=Ae.tooltip)?U:Z.tooltip,{className:(0,p.A)(mo.tooltip,null==(H=null!=(V=Ae.tooltip)?V:Z.tooltip)?void 0:H.className)}),uo),yo=(0,s.X)(Ao,(0,n.A)({},null!=(_=Ae.arrow)?_:Z.arrow,{className:(0,p.A)(mo.arrow,null==(Y=null!=(q=Ae.arrow)?q:Z.arrow)?void 0:Y.className)}),uo);return(0,M.jsxs)(a.Fragment,{children:[a.cloneElement(Te,io),(0,M.jsx)(ho,(0,n.A)({as:null!=ge?ge:f.A,placement:he,anchorEl:le?{getBoundingClientRect:()=>({top:N.y,left:N.x,right:N.x,bottom:N.y,width:0,height:0})}:Me,popperRef:ao,open:!!Me&&We,id:Xe,transition:!0},so,vo,{popperOptions:co,children:e=>{let{TransitionProps:o}=e;return(0,M.jsx)(go,(0,n.A)({timeout:Re.transitions.duration.shorter},o,bo,{children:(0,M.jsxs)(fo,(0,n.A)({},wo,{children:[be,J?(0,M.jsx)(Ao,(0,n.A)({},yo,{ref:Se})):null]}))}))}}))]})}))},5879:(e,o,t)=>{t.d(o,{A:()=>r});const r=t(992).A}}]);
//# sourceMappingURL=7739.1d2cd26f.chunk.js.map
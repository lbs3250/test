"use strict";(self.webpackChunkmatx_react=self.webpackChunkmatx_react||[]).push([[8188],{8188:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ae});var a=n(4535),o=n(1e3),s=n(1806),r=n(4882),l=n(8076),i=n(2420),c=n(3460),u=n(7392),d=n(4208),p=n(579);const h=(0,a.Ay)(s.A)((e=>{let{theme:t}=e;return{whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}})),m=[{name:"john doe",date:"18 january, 2019",amount:1e3,status:"close",company:"ABC Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"james cassegne",date:"8 january, 2019",amount:5e3,status:"close",company:"Collboy Tech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."}];function g(){return(0,p.jsx)(o.A,{width:"100%",overflow:"auto",children:(0,p.jsxs)(h,{children:[(0,p.jsx)(r.A,{children:(0,p.jsxs)(l.A,{children:[(0,p.jsx)(i.A,{align:"left",children:"Name"}),(0,p.jsx)(i.A,{align:"center",children:"Company"}),(0,p.jsx)(i.A,{align:"center",children:"Start Date"}),(0,p.jsx)(i.A,{align:"center",children:"Status"}),(0,p.jsx)(i.A,{align:"center",children:"Amount"}),(0,p.jsx)(i.A,{align:"right",children:"Action"})]})}),(0,p.jsx)(c.A,{children:m.map(((e,t)=>(0,p.jsxs)(l.A,{children:[(0,p.jsx)(i.A,{align:"left",children:e.name}),(0,p.jsx)(i.A,{align:"center",children:e.company}),(0,p.jsx)(i.A,{align:"center",children:e.date}),(0,p.jsx)(i.A,{align:"center",children:e.status}),(0,p.jsxs)(i.A,{align:"center",children:["$",e.amount]}),(0,p.jsx)(i.A,{align:"right",children:(0,p.jsx)(u.A,{children:(0,p.jsx)(d.A,{color:"error",children:"close"})})})]},t)))})]})})}var A=n(5043),x=n(8587),b=n(8168),j=n(8387),y=n(8606),P=n(540),v=n(2876),w=n(5673),f=n(2143),B=n(2221),L=n(5263),I=n(6734);const R=(0,I.A)((0,p.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),T=(0,I.A)((0,p.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");var C=n(6240);const M=(0,I.A)((0,p.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),S=(0,I.A)((0,p.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),k=["backIconButtonProps","count","disabled","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton","slots","slotProps"],D=A.forwardRef((function(e,t){var n,a,o,s,r,l,i,c;const{backIconButtonProps:d,count:h,disabled:m=!1,getItemAriaLabel:g,nextIconButtonProps:A,onPageChange:j,page:y,rowsPerPage:P,showFirstButton:v,showLastButton:w,slots:f={},slotProps:B={}}=e,L=(0,x.A)(e,k),I=(0,C.A)(),D=null!=(n=f.firstButton)?n:u.A,F=null!=(a=f.lastButton)?a:u.A,N=null!=(o=f.nextButton)?o:u.A,z=null!=(s=f.previousButton)?s:u.A,G=null!=(r=f.firstButtonIcon)?r:S,H=null!=(l=f.lastButtonIcon)?l:M,O=null!=(i=f.nextButtonIcon)?i:T,K=null!=(c=f.previousButtonIcon)?c:R,$="rtl"===I.direction?F:D,_="rtl"===I.direction?N:z,E="rtl"===I.direction?z:N,Q="rtl"===I.direction?D:F,q="rtl"===I.direction?B.lastButton:B.firstButton,J="rtl"===I.direction?B.nextButton:B.previousButton,U="rtl"===I.direction?B.previousButton:B.nextButton,V="rtl"===I.direction?B.firstButton:B.lastButton;return(0,p.jsxs)("div",(0,b.A)({ref:t},L,{children:[v&&(0,p.jsx)($,(0,b.A)({onClick:e=>{j(e,0)},disabled:m||0===y,"aria-label":g("first",y),title:g("first",y)},q,{children:"rtl"===I.direction?(0,p.jsx)(H,(0,b.A)({},B.lastButtonIcon)):(0,p.jsx)(G,(0,b.A)({},B.firstButtonIcon))})),(0,p.jsx)(_,(0,b.A)({onClick:e=>{j(e,y-1)},disabled:m||0===y,color:"inherit","aria-label":g("previous",y),title:g("previous",y)},null!=J?J:d,{children:"rtl"===I.direction?(0,p.jsx)(O,(0,b.A)({},B.nextButtonIcon)):(0,p.jsx)(K,(0,b.A)({},B.previousButtonIcon))})),(0,p.jsx)(E,(0,b.A)({onClick:e=>{j(e,y+1)},disabled:m||-1!==h&&y>=Math.ceil(h/P)-1,color:"inherit","aria-label":g("next",y),title:g("next",y)},null!=U?U:A,{children:"rtl"===I.direction?(0,p.jsx)(K,(0,b.A)({},B.previousButtonIcon)):(0,p.jsx)(O,(0,b.A)({},B.nextButtonIcon))})),w&&(0,p.jsx)(Q,(0,b.A)({onClick:e=>{j(e,Math.max(0,Math.ceil(h/P)-1))},disabled:m||y>=Math.ceil(h/P)-1,"aria-label":g("last",y),title:g("last",y)},V,{children:"rtl"===I.direction?(0,p.jsx)(G,(0,b.A)({},B.firstButtonIcon)):(0,p.jsx)(H,(0,b.A)({},B.lastButtonIcon))}))]}))}));var F=n(5879),N=n(7056),z=n(2400);function G(e){return(0,z.Ay)("MuiTablePagination",e)}const H=(0,N.A)("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var O;const K=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","disabled","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton","slotProps","slots"],$=(0,a.Ay)(i.A,{name:"MuiTablePagination",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t}=e;return{overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}}})),_=(0,a.Ay)(L.A,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,t)=>(0,b.A)({["& .".concat(H.actions)]:t.actions},t.toolbar)})((e=>{let{theme:t}=e;return{minHeight:52,paddingRight:2,["".concat(t.breakpoints.up("xs")," and (orientation: landscape)")]:{minHeight:52},[t.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},["& .".concat(H.actions)]:{flexShrink:0,marginLeft:20}}})),E=(0,a.Ay)("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(e,t)=>t.spacer})({flex:"1 1 100%"}),Q=(0,a.Ay)("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(e,t)=>t.selectLabel})((e=>{let{theme:t}=e;return(0,b.A)({},t.typography.body2,{flexShrink:0})})),q=(0,a.Ay)(B.A,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,t)=>(0,b.A)({["& .".concat(H.selectIcon)]:t.selectIcon,["& .".concat(H.select)]:t.select},t.input,t.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,["& .".concat(H.select)]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),J=(0,a.Ay)(f.A,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(e,t)=>t.menuItem})({}),U=(0,a.Ay)("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(e,t)=>t.displayedRows})((e=>{let{theme:t}=e;return(0,b.A)({},t.typography.body2,{flexShrink:0})}));function V(e){let{from:t,to:n,count:a}=e;return"".concat(t,"\u2013").concat(n," of ").concat(-1!==a?a:"more than ".concat(n))}function W(e){return"Go to ".concat(e," page")}const X=A.forwardRef((function(e,t){var n;const a=(0,v.A)({props:e,name:"MuiTablePagination"}),{ActionsComponent:o=D,backIconButtonProps:s,className:r,colSpan:l,component:c=i.A,count:u,disabled:d=!1,getItemAriaLabel:h=W,labelDisplayedRows:m=V,labelRowsPerPage:g="Rows per page:",nextIconButtonProps:f,onPageChange:B,onRowsPerPageChange:L,page:I,rowsPerPage:R,rowsPerPageOptions:T=[10,25,50,100],SelectProps:C={},showFirstButton:M=!1,showLastButton:S=!1,slotProps:k={},slots:N={}}=a,z=(0,x.A)(a,K),H=a,X=(e=>{const{classes:t}=e;return(0,y.A)({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},G,t)})(H),Y=null!=(n=null==k?void 0:k.select)?n:C,Z=Y.native?"option":J;let ee;c!==i.A&&"td"!==c||(ee=l||1e3);const te=(0,F.A)(Y.id),ne=(0,F.A)(Y.labelId);return(0,p.jsx)($,(0,b.A)({colSpan:ee,ref:t,as:c,ownerState:H,className:(0,j.A)(X.root,r)},z,{children:(0,p.jsxs)(_,{className:X.toolbar,children:[(0,p.jsx)(E,{className:X.spacer}),T.length>1&&(0,p.jsx)(Q,{className:X.selectLabel,id:ne,children:g}),T.length>1&&(0,p.jsx)(q,(0,b.A)({variant:"standard"},!Y.variant&&{input:O||(O=(0,p.jsx)(w.Ay,{}))},{value:R,onChange:L,id:te,labelId:ne},Y,{classes:(0,b.A)({},Y.classes,{root:(0,j.A)(X.input,X.selectRoot,(Y.classes||{}).root),select:(0,j.A)(X.select,(Y.classes||{}).select),icon:(0,j.A)(X.selectIcon,(Y.classes||{}).icon)}),disabled:d,children:T.map((e=>(0,A.createElement)(Z,(0,b.A)({},!(0,P.g)(Z)&&{ownerState:H},{className:X.menuItem,key:e.label?e.label:e,value:e.value?e.value:e}),e.label?e.label:e)))})),(0,p.jsx)(U,{className:X.displayedRows,children:m({from:0===u?0:I*R+1,to:-1===u?(I+1)*R:-1===R?u:Math.min(u,(I+1)*R),count:-1===u?-1:u,page:I})}),(0,p.jsx)(o,{className:X.actions,backIconButtonProps:s,count:u,nextIconButtonProps:f,onPageChange:B,page:I,rowsPerPage:R,showFirstButton:M,showLastButton:S,slotProps:k.actions,slots:N.actions,getItemAriaLabel:h,disabled:d})]})}))})),Y=(0,a.Ay)(s.A)((()=>({whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}))),Z=[{name:"john doe",date:"18 january, 2019",amount:1e3,status:"close",company:"ABC Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"james cassegne",date:"8 january, 2019",amount:5e3,status:"close",company:"Collboy Tech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."}];function ee(){const[e,t]=(0,A.useState)(0),[n,a]=(0,A.useState)(5);return(0,p.jsxs)(o.A,{width:"100%",overflow:"auto",children:[(0,p.jsxs)(Y,{children:[(0,p.jsx)(r.A,{children:(0,p.jsxs)(l.A,{children:[(0,p.jsx)(i.A,{align:"left",children:"Name"}),(0,p.jsx)(i.A,{align:"center",children:"Company"}),(0,p.jsx)(i.A,{align:"center",children:"Start Date"}),(0,p.jsx)(i.A,{align:"center",children:"Status"}),(0,p.jsx)(i.A,{align:"center",children:"Amount"}),(0,p.jsx)(i.A,{align:"right",children:"Action"})]})}),(0,p.jsx)(c.A,{children:Z.slice(e*n,e*n+n).map(((e,t)=>(0,p.jsxs)(l.A,{children:[(0,p.jsx)(i.A,{align:"left",children:e.name}),(0,p.jsx)(i.A,{align:"center",children:e.company}),(0,p.jsx)(i.A,{align:"center",children:e.date}),(0,p.jsx)(i.A,{align:"center",children:e.status}),(0,p.jsxs)(i.A,{align:"center",children:["$",e.amount]}),(0,p.jsx)(i.A,{align:"right",children:(0,p.jsx)(u.A,{children:(0,p.jsx)(d.A,{color:"error",children:"close"})})})]},t)))})]}),(0,p.jsx)(X,{sx:{px:2},page:e,component:"div",rowsPerPage:n,count:Z.length,onPageChange:(e,n)=>{t(n)},rowsPerPageOptions:[5,10,25],onRowsPerPageChange:e=>{a(+e.target.value),t(0)},nextIconButtonProps:{"aria-label":"Next Page"},backIconButtonProps:{"aria-label":"Previous Page"}})]})}var te=n(783);const ne=(0,a.Ay)("div")((e=>{let{theme:t}=e;return{margin:"30px",[t.breakpoints.down("sm")]:{margin:"16px"},"& .breadcrumb":{marginBottom:"30px",[t.breakpoints.down("sm")]:{marginBottom:"16px"}}}}));function ae(){return(0,p.jsxs)(ne,{children:[(0,p.jsx)(o.A,{className:"breadcrumb",children:(0,p.jsx)(te.Qp,{routeSegments:[{name:"Material",path:"/material"},{name:"Table"}]})}),(0,p.jsx)(te.Tn,{title:"Simple Table",children:(0,p.jsx)(g,{})}),(0,p.jsx)(te.Tn,{title:"Pagination Table",children:(0,p.jsx)(ee,{})})]})}},5263:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(8587),o=n(8168),s=n(5043),r=n(8387),l=n(8606),i=n(2876),c=n(4535),u=n(7056),d=n(2400);function p(e){return(0,d.Ay)("MuiToolbar",e)}(0,u.A)("MuiToolbar",["root","gutters","regular","dense"]);var h=n(579);const m=["className","component","disableGutters","variant"],g=(0,c.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,o.A)({position:"relative",display:"flex",alignItems:"center"},!n.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},"dense"===n.variant&&{minHeight:48})}),(e=>{let{theme:t,ownerState:n}=e;return"regular"===n.variant&&t.mixins.toolbar})),A=s.forwardRef((function(e,t){const n=(0,i.A)({props:e,name:"MuiToolbar"}),{className:s,component:c="div",disableGutters:u=!1,variant:d="regular"}=n,A=(0,a.A)(n,m),x=(0,o.A)({},n,{component:c,disableGutters:u,variant:d}),b=(e=>{const{classes:t,disableGutters:n,variant:a}=e,o={root:["root",!n&&"gutters",a]};return(0,l.A)(o,p,t)})(x);return(0,h.jsx)(g,(0,o.A)({as:c,className:(0,r.A)(b.root,s),ref:t,ownerState:x},A))}))},5879:(e,t,n)=>{n.d(t,{A:()=>a});const a=n(992).A}}]);
//# sourceMappingURL=8188.b8d8be6a.chunk.js.map
(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[924],{924:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>We});var a=l(133),n=l(119),r=l(621);const o={class:"hero"},i={key:1,id:"main-title"},s={key:2,class:"description"},u={key:3,class:"actions"},c={key:0,class:"features"},d={class:"theme-default-content custom"};var v=l(480);const m=(0,a.aZ)({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const t=(0,r.WF)(),{item:l}=(0,a.BK)(e),n=(0,a.Fl)((()=>(0,v.ak)(l.value.link))),o=(0,a.Fl)((()=>(0,v.B2)(l.value.link)||(0,v.R5)(l.value.link))),i=(0,a.Fl)((()=>o.value?null:l.value.target?l.value.target:n.value?"_blank":null)),s=(0,a.Fl)((()=>"_blank"===i.value)),u=(0,a.Fl)((()=>!n.value&&!o.value&&!s.value)),c=(0,a.Fl)((()=>{const e=Object.keys(t.value.locales);return e.length?e.some((e=>e===l.value.link)):"/"===l.value.link})),d=(0,a.Fl)((()=>o.value?null:l.value.rel?l.value.rel:s.value?"noopener noreferrer":null)),m=(0,a.Fl)((()=>l.value.ariaLabel||l.value.text));return{isBlankTarget:s,isExact:c,isRouterLink:u,linkRel:d,linkTarget:i,linkAriaLabel:m}}});m.render=function(e,t,l,n,r,o){const i=(0,a.up)("RouterLink"),s=(0,a.up)("OutboundLink");return e.isRouterLink?((0,a.wg)(),(0,a.j4)(i,(0,a.dG)({key:0,class:"nav-link",to:e.item.link,exact:e.isExact,"aria-label":e.linkAriaLabel},e.$attrs),{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,a.zw)(e.item.text)+" ",1),(0,a.WI)(e.$slots,"after")])),_:3},16,["to","exact","aria-label"])):((0,a.wg)(),(0,a.j4)("a",(0,a.dG)({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs),[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,a.zw)(e.item.text)+" ",1),e.isBlankTarget?((0,a.wg)(),(0,a.j4)(s,{key:0})):(0,a.ry)("",!0),(0,a.WI)(e.$slots,"after")],16,["href","rel","target","aria-label"]))};const p=m,g=(0,a.aZ)({name:"Home",components:{NavLink:p},setup(){const e=(0,r.I2)(),t=(0,r.I5)(),l=(0,a.Fl)((()=>e.value.heroImage?(0,r.pJ)(e.value.heroImage):null)),n=(0,a.Fl)((()=>null===e.value.heroText?null:e.value.heroText||t.value.title||"Hello")),o=(0,a.Fl)((()=>e.value.heroAlt||n.value||"hero")),i=(0,a.Fl)((()=>null===e.value.tagline?null:e.value.tagline||t.value.description||"Welcome to your VuePress site")),s=(0,a.Fl)((()=>(0,v.kJ)(e.value.actions)?e.value.actions.map((({text:e,link:t,type:l="primary"})=>({text:e,link:t,type:l}))):[])),u=(0,a.Fl)((()=>(0,v.kJ)(e.value.features)?e.value.features:[])),c=(0,a.Fl)((()=>e.value.footer)),d=(0,a.Fl)((()=>e.value.footerHtml));return{heroImage:l,heroAlt:o,heroText:n,tagline:i,actions:s,features:u,footer:c,footerHtml:d}}});g.render=function(e,t,l,n,r,v){const m=(0,a.up)("NavLink"),p=(0,a.up)("Content");return(0,a.wg)(),(0,a.j4)("main",{class:"home","aria-labelledby":e.heroText?"main-title":null},[(0,a.Wm)("header",o,[e.heroImage?((0,a.wg)(),(0,a.j4)("img",{key:0,src:e.heroImage,alt:e.heroAlt},null,8,["src","alt"])):(0,a.ry)("",!0),e.heroText?((0,a.wg)(),(0,a.j4)("h1",i,(0,a.zw)(e.heroText),1)):(0,a.ry)("",!0),e.tagline?((0,a.wg)(),(0,a.j4)("p",s,(0,a.zw)(e.tagline),1)):(0,a.ry)("",!0),e.actions.length?((0,a.wg)(),(0,a.j4)("p",u,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.actions,(e=>((0,a.wg)(),(0,a.j4)(m,{key:e.text,class:["action-button",[e.type]],item:e},null,8,["class","item"])))),128))])):(0,a.ry)("",!0)]),e.features.length?((0,a.wg)(),(0,a.j4)("div",c,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.features,(e=>((0,a.wg)(),(0,a.j4)("div",{key:e.title,class:"feature"},[(0,a.Wm)("h2",null,(0,a.zw)(e.title),1),(0,a.Wm)("p",null,(0,a.zw)(e.details),1)])))),128))])):(0,a.ry)("",!0),(0,a.Wm)("div",d,[(0,a.Wm)(p)]),e.footer?((0,a.wg)(),(0,a.j4)(a.HY,{key:1},[e.footerHtml?((0,a.wg)(),(0,a.j4)("div",{key:0,class:"footer",innerHTML:e.footer},null,8,["innerHTML"])):((0,a.wg)(),(0,a.j4)("div",{key:1,class:"footer",textContent:(0,a.zw)(e.footer)},null,8,["textContent"]))],64)):(0,a.ry)("",!0)],8,["aria-labelledby"])};const h=g,b={class:"page"},k={class:"theme-default-content"},w={class:"page-meta"},y={key:0,class:"meta-item edit-link"},f={key:1,class:"meta-item last-updated"},L={class:"meta-item-label"},W={class:"meta-item-info"},j={key:2,class:"meta-item contributors"},x={class:"meta-item-label"},F={class:"meta-item-info"},N=(0,a.Uk)(", "),I=e=>(0,v.ak)(e)?/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":null:"GitHub",$={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},T=()=>{const e=(0,r.X6)(),t=(0,r.Vi)(),l=(0,r.I2)();return(0,a.Fl)((()=>{var a,n;if(null!=(n=null!=(a=l.value.editLink)?a:e.value.editLink)&&!n)return null;const{repo:r,docsRepo:o=r,docsBranch:i="main",docsDir:s="",editLinkText:u}=e.value;if(!o)return null;const c=(({docsRepo:e,docsBranch:t,docsDir:l,filePathRelative:a,editLinkPattern:n})=>{const r=I(e);let o;return n?o=n:null!==r&&(o=$[r]),o?o.replace(/:repo/,"GitHub"===r?`https://github.com/${e}`:e).replace(/:branch/,t).replace(/:path/,(0,v.FY)(`${(0,v.U1)(l)}/${a}`)):null})({docsRepo:o,docsBranch:i,docsDir:s,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=u?u:"Edit this page",link:c}:null}))},H=(0,a.aZ)({name:"PageMeta",components:{NavLink:p},setup:()=>({editNavLink:T(),lastUpdated:(()=>{const e=(0,r.I5)(),t=(0,r.X6)(),l=(0,r.Vi)(),n=(0,r.I2)();return(0,a.Fl)((()=>{var a,r,o,i;return(null==(r=null!=(a=n.value.lastUpdated)?a:t.value.lastUpdated)||r)&&(null==(o=l.value.git)?void 0:o.updatedTime)?new Date(null==(i=l.value.git)?void 0:i.updatedTime).toLocaleString(e.value.lang):null}))})(),contributors:(()=>{const e=(0,r.X6)(),t=(0,r.Vi)(),l=(0,r.I2)();return(0,a.Fl)((()=>{var a,n,r,o;return null!=(n=null!=(a=l.value.contributors)?a:e.value.contributors)&&!n||null==(o=null==(r=t.value.git)?void 0:r.contributors)?null:o}))})()})});H.render=function(e,t,l,n,r,o){const i=(0,a.up)("NavLink");return(0,a.wg)(),(0,a.j4)("footer",w,[e.editNavLink?((0,a.wg)(),(0,a.j4)("div",y,[(0,a.Wm)(i,{class:"meta-item-label",item:e.editNavLink},null,8,["item"])])):(0,a.ry)("",!0),e.lastUpdated?((0,a.wg)(),(0,a.j4)("div",f,[(0,a.Wm)("span",L,(0,a.zw)(e.$themeLocale.lastUpdatedText)+": ",1),(0,a.Wm)("span",W,(0,a.zw)(e.lastUpdated),1)])):(0,a.ry)("",!0),e.contributors&&e.contributors.length?((0,a.wg)(),(0,a.j4)("div",j,[(0,a.Wm)("span",x,(0,a.zw)(e.$themeLocale.contributorsText)+": ",1),(0,a.Wm)("span",F,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.contributors,((t,l)=>((0,a.wg)(),(0,a.j4)(a.HY,{key:l},[(0,a.Wm)("span",{class:"contributor",title:`email: ${t.email}`},(0,a.zw)(t.name),9,["title"]),l!==e.contributors.length-1?((0,a.wg)(),(0,a.j4)(a.HY,{key:0},[N],64)):(0,a.ry)("",!0)],64)))),128))])])):(0,a.ry)("",!0)])};const S=H,z={key:0,class:"page-nav"},C={class:"inner"},P={key:0,class:"prev"},R=(0,a.Uk)(" ← "),A={key:1,class:"next"},B=(0,a.Uk)(" → ");var U=l(710);const Y=e=>!1===e?null:(0,v.HD)(e)?(0,U.sC)(e):!!(0,v.PO)(e)&&e,D=(e,t,l)=>{const a=e.findIndex((e=>e.link===t));if(-1!==a){const t=e[a+l];return(null==t?void 0:t.link)?t:null}for(const a of e)if(a.children){const e=D(a.children,t,l);if(e)return e}return null},O=(0,a.aZ)({name:"PageNav",components:{NavLink:p},setup(){const e=(0,r.I2)(),t=(0,U.VU)(),l=(0,n.yj)();return{prevNavLink:(0,a.Fl)((()=>{const a=Y(e.value.prev);return!1!==a?a:D(t.value,l.path,-1)})),nextNavLink:(0,a.Fl)((()=>{const a=Y(e.value.next);return!1!==a?a:D(t.value,l.path,1)}))}}});O.render=function(e,t,l,n,r,o){const i=(0,a.up)("NavLink");return e.prevNavLink||e.nextNavLink?((0,a.wg)(),(0,a.j4)("nav",z,[(0,a.Wm)("p",C,[e.prevNavLink?((0,a.wg)(),(0,a.j4)("span",P,[R,(0,a.Wm)(i,{item:e.prevNavLink},null,8,["item"])])):(0,a.ry)("",!0),e.nextNavLink?((0,a.wg)(),(0,a.j4)("span",A,[(0,a.Wm)(i,{item:e.nextNavLink},null,8,["item"]),B])):(0,a.ry)("",!0)])])):(0,a.ry)("",!0)};const Z=O,_=(0,a.aZ)({name:"Page",components:{PageMeta:S,PageNav:Z}});_.render=function(e,t,l,n,r,o){const i=(0,a.up)("Content"),s=(0,a.up)("PageMeta"),u=(0,a.up)("PageNav");return(0,a.wg)(),(0,a.j4)("main",b,[(0,a.WI)(e.$slots,"top"),(0,a.Wm)("div",k,[(0,a.Wm)(i)]),(0,a.Wm)(s),(0,a.Wm)(u),(0,a.WI)(e.$slots,"bottom")])};const G=_,K={ref:"navbar",class:"navbar"},M={ref:"siteBrand"},V={key:0,class:"navbar-links"},X={class:"title"},E=(0,a.Wm)("span",{class:"arrow down"},null,-1),q={class:"title"},J={class:"nav-dropdown"},Q={class:"dropdown-subtitle"},ee={key:1},te={class:"dropdown-subitem-wrapper"},le=(0,a.aZ)({name:"DropdownLink",components:{NavLink:p},props:{item:{type:Object,required:!0}},setup(e){const{item:t}=(0,a.BK)(e),l=(0,a.Fl)((()=>t.value.ariaLabel||t.value.text)),r=(0,a.iH)(!1),o=(0,n.yj)();return(0,a.YP)((()=>o.path),(()=>{r.value=!1})),{open:r,dropdownAriaLabel:l,handleDropdown:e=>{const t=0===e.detail;r.value=!!t&&!r.value},isLastItemOfArray:(e,t)=>t[t.length-1]===e}}});le.render=function(e,t,l,n,r,o){const i=(0,a.up)("NavLink");return(0,a.wg)(),(0,a.j4)("div",{class:["dropdown-wrapper",{open:e.open}]},[(0,a.Wm)("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[1]||(t[1]=(...t)=>e.handleDropdown&&e.handleDropdown(...t))},[(0,a.Wm)("span",X,(0,a.zw)(e.item.text),1),E],8,["aria-label"]),(0,a.Wm)("button",{class:"mobile-dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[2]||(t[2]=t=>e.open=!e.open)},[(0,a.Wm)("span",q,(0,a.zw)(e.item.text),1),(0,a.Wm)("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),(0,a.wy)((0,a.Wm)("ul",J,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.item.children,((t,l)=>((0,a.wg)(),(0,a.j4)("li",{key:t.link||l,class:"dropdown-item"},[t.children?((0,a.wg)(),(0,a.j4)(a.HY,{key:0},[(0,a.Wm)("h4",Q,[t.link?((0,a.wg)(),(0,a.j4)(i,{key:0,item:t,onFocusout:l=>e.isLastItemOfArray(t,e.item.children)&&0===t.children.length&&(e.open=!1)},null,8,["item","onFocusout"])):((0,a.wg)(),(0,a.j4)("span",ee,(0,a.zw)(t.text),1))]),(0,a.Wm)("ul",te,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(t.children,(l=>((0,a.wg)(),(0,a.j4)("li",{key:l.link,class:"dropdown-subitem"},[(0,a.Wm)(i,{item:l,onFocusout:a=>e.isLastItemOfArray(l,t.children)&&e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,a.wg)(),(0,a.j4)(i,{key:1,item:t,onFocusout:l=>e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[a.F8,e.open]])],2)};const ae=le,ne=e=>(0,v.HD)(e)?(0,U.sC)(e):e.children?{...e,children:e.children.map(ne)}:e,re=(0,a.aZ)({name:"NavbarLinks",components:{NavLink:p,DropdownLink:ae},setup(){const e=(()=>{const e=(0,r.X6)();return(0,a.Fl)((()=>(e.value.navbar||[]).map(ne)))})(),t=(()=>{const e=(0,n.tv)(),t=(0,r.I)(),l=(0,r.I5)(),o=(0,r.X6)();return(0,a.Fl)((()=>{var a,n;const r=Object.keys(l.value.locales);if(r.length<2)return[];const i=e.currentRoute.value.path,s=e.currentRoute.value.fullPath;return[{text:null!=(a=o.value.selectLanguageText)?a:"unkown language",ariaLabel:null!=(n=o.value.selectLanguageAriaLabel)?n:"unkown language",children:r.map((a=>{var n,r,u,c,d,v;const m=null!=(r=null==(n=l.value.locales)?void 0:n[a])?r:{},p=null!=(c=null==(u=o.value.locales)?void 0:u[a])?c:{},g=`${m.lang}`,h=null!=(d=p.selectLanguageName)?d:g;let b;if(g===l.value.lang)b=s;else{const l=i.replace(t.value,a);b=e.getRoutes().some((e=>e.path===l))?l:null!=(v=p.home)?v:a}return{text:h,link:b}}))}]}))})(),l=(()=>{const e=(0,r.X6)(),t=(0,a.Fl)((()=>e.value.repo)),l=(0,a.Fl)((()=>t.value?I(t.value):null)),n=(0,a.Fl)((()=>"GitHub"===l.value?`https://github.com/${t.value}`:t.value)),o=(0,a.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===l.value?"Source":l.value:null));return(0,a.Fl)((()=>n.value&&o.value?[{text:o.value,link:n.value}]:[]))})();return{navbarLinks:(0,a.Fl)((()=>[...e.value,...t.value,...l.value]))}}});re.render=function(e,t,l,n,r,o){const i=(0,a.up)("DropdownLink"),s=(0,a.up)("NavLink");return e.navbarLinks.length?((0,a.wg)(),(0,a.j4)("nav",V,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.navbarLinks,(e=>((0,a.wg)(),(0,a.j4)("div",{key:e.link,class:"navbar-links-item"},[e.children?((0,a.wg)(),(0,a.j4)(i,{key:0,item:e},null,8,["item"])):((0,a.wg)(),(0,a.j4)(s,{key:1,item:e},null,8,["item"]))])))),128))])):(0,a.ry)("",!0)};const oe=re,ie=(0,a.Wm)("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[(0,a.Wm)("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),se=(0,a.aZ)({name:"ToggleSidebarButton",emits:["toggle"]});se.render=function(e,t,l,n,r,o){return(0,a.wg)(),(0,a.j4)("div",{class:"toggle-sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[ie])};const ue=se,ce=(0,a.aZ)({name:"Navbar",components:{NavbarLinks:oe,ToggleSidebarButton:ue},emits:["toggle-sidebar"],setup(){const e=(0,a.iH)(null),t=(0,a.iH)(null),l=(0,a.iH)(0),n=(0,a.Fl)((()=>l.value?{"max-width":l.value+"px"}:{}));return(0,a.bv)((()=>{const a=de(e.value,"paddingLeft")+de(e.value,"paddingRight"),n=()=>{var n;window.innerWidth<719?l.value=0:l.value=e.value.offsetWidth-a-((null==(n=t.value)?void 0:n.offsetWidth)||0)};n(),window.addEventListener("resize",n,!1)})),{navbar:e,siteBrand:t,linksWrapperStyle:n}}});function de(e,t){var l,a,n;const r=null==(n=null==(a=null==(l=null==e?void 0:e.ownerDocument)?void 0:l.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[t],o=Number.parseInt(r,10);return Number.isNaN(o)?0:o}ce.render=function(e,t,l,n,r,o){const i=(0,a.up)("ToggleSidebarButton"),s=(0,a.up)("RouterLink"),u=(0,a.up)("NavbarLinks"),c=(0,a.up)("Docsearch");return(0,a.wg)(),(0,a.j4)("header",K,[(0,a.Wm)(i,{onToggle:t[1]||(t[1]=t=>e.$emit("toggle-sidebar"))}),(0,a.Wm)("span",M,[(0,a.Wm)(s,{to:e.$themeLocale.home||e.$routeLocale},{default:(0,a.w5)((()=>[e.$themeLocale.logo?((0,a.wg)(),(0,a.j4)("img",{key:0,class:"logo",src:e.$withBase(e.$themeLocale.logo),alt:e.$siteLocale.title},null,8,["src","alt"])):(0,a.ry)("",!0),e.$siteLocale.title?((0,a.wg)(),(0,a.j4)("span",{key:1,class:["site-name",{"can-hide":e.$themeLocale.logo}]},(0,a.zw)(e.$siteLocale.title),3)):(0,a.ry)("",!0)])),_:1},8,["to"])],512),(0,a.Wm)("div",{class:"navbar-links-wrapper",style:e.linksWrapperStyle},[(0,a.WI)(e.$slots,"before"),(0,a.Wm)(u,{class:"can-hide"}),(0,a.WI)(e.$slots,"after"),(0,a.Wm)(c)],4)],512)};const ve=ce,me={class:"sidebar"},pe={class:"sidebar-links"},ge=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),he=(e,t)=>void 0!==t&&(e.hash===t||ge(e.path)===ge(t)),be=(e,t)=>e.link?(0,a.h)(p,{...t,item:e}):(0,a.h)("p",t,e.text),ke=(e,t)=>{var l;return(null===(l=e.children)||void 0===l?void 0:l.length)?(0,a.h)("ul",{class:{"sidebar-sub-headers":t>0}},e.children.map((e=>(0,a.h)("li",(0,a.h)(we,{item:e,depth:t+1}))))):null},we=({item:e,depth:t})=>{var l;if(e.isGroup)return[(0,a.h)("section",{class:{"sidebar-group":!0}},[be(e,{class:"sidebar-heading"}),ke(e,t)])];const r=(0,n.yj)(),o=he(r,e.link)||(null===(l=e.children)||void 0===l?void 0:l.some((e=>he(r,e.link))));return[be(e,{class:{"sidebar-link":!0,active:o}}),ke(e,t)]};we.displayName="SidebarChild",we.props={item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}};const ye=(0,a.aZ)({name:"Sidebar",components:{NavbarLinks:oe,SidebarChild:we},setup:()=>({sidebarItems:(0,U.VU)()})});ye.render=function(e,t,l,n,r,o){const i=(0,a.up)("NavbarLinks"),s=(0,a.up)("SidebarChild");return(0,a.wg)(),(0,a.j4)("aside",me,[(0,a.Wm)(i),(0,a.WI)(e.$slots,"top"),(0,a.Wm)("ul",pe,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(e.sidebarItems,(e=>((0,a.wg)(),(0,a.j4)(s,{key:e.link,item:e},null,8,["item"])))),128))]),(0,a.WI)(e.$slots,"bottom")])};const fe=ye,Le=(0,a.aZ)({name:"Layout",components:{Home:h,Page:G,Navbar:ve,Sidebar:fe,Transition:a.uT},setup(){const e=(0,r.I2)(),t=(0,r.X6)(),l=(0,a.Fl)((()=>!1!==e.value.navbar&&!1!==t.value.navbar)),o=(0,U.VU)(),i=(0,a.iH)(!1),s=e=>{i.value="boolean"==typeof e?e:!i.value},u={x:0,y:0},c=(0,a.Fl)((()=>({"no-navbar":!l.value,"no-sidebar":!o.value.length,"sidebar-open":i.value})));let d;return(0,a.bv)((()=>{const e=(0,n.tv)();d=e.afterEach((()=>{s(!1)}))})),(0,a.Ah)((()=>{d()})),{containerClass:c,shouldShowNavbar:l,toggleSidebar:s,onTouchStart:e=>{u.x=e.changedTouches[0].clientX,u.y=e.changedTouches[0].clientY},onTouchEnd:e=>{const t=e.changedTouches[0].clientX-u.x,l=e.changedTouches[0].clientY-u.y;Math.abs(t)>Math.abs(l)&&Math.abs(t)>40&&(t>0&&u.x<=80?s(!0):s(!1))}}}});Le.render=function(e,t,l,n,r,o){const i=(0,a.up)("Navbar"),s=(0,a.up)("Sidebar"),u=(0,a.up)("Home"),c=(0,a.up)("Page");return(0,a.wg)(),(0,a.j4)("div",{class:["theme-container",e.containerClass],onTouchstart:t[2]||(t[2]=(...t)=>e.onTouchStart&&e.onTouchStart(...t)),onTouchend:t[3]||(t[3]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t))},[e.shouldShowNavbar?((0,a.wg)(),(0,a.j4)(i,{key:0,onToggleSidebar:e.toggleSidebar},{before:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-before")])),after:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-after")])),_:1},8,["onToggleSidebar"])):(0,a.ry)("",!0),(0,a.Wm)("div",{class:"sidebar-mask",onClick:t[1]||(t[1]=t=>e.toggleSidebar(!1))}),(0,a.Wm)(s,null,{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-bottom")])),_:1}),e.$frontmatter.home?((0,a.wg)(),(0,a.j4)(u,{key:1})):((0,a.wg)(),(0,a.j4)(a.uT,{key:2,name:"fade-slide-y",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{key:e.$page.path},{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-bottom")])),_:1})])),_:1}))],34)};const We=Le}}]);
!function(){"use strict";var e,n={446:function(){var e=window.wp.blocks,n=window.wp.element,l=window.wp.blockEditor,t=window.wp.components,r=window.wp.primitives,o=(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),a=(0,n.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(r.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),i=window.React,c=window.wp.i18n,s=e=>{let{icon:l="arrow-right"}=e;return(0,n.createElement)("div",{className:"ev-region22-card__arrow-icon"},(0,n.createElement)("svg",{viewBox:"0 0 144 144",style:{width:"100%",height:"auto",fill:"currentcolor"}},(0,n.createElement)("use",{xlinkHref:`#${l}`})))};const u="noreferrer noopener";var v=JSON.parse('{"u2":"ev-region22-blocks/card-link"}');(0,e.registerBlockType)(v.u2,{edit:e=>{let{attributes:r,setAttributes:v,isSelected:m,style:d}=e;const g=(0,i.useRef)(),k=(0,l.useBlockProps)({className:"wp-block-ev-region22-blocks-card-link ev-region22-card",ref:g,style:d}),{imageId:f,imageUrl:p,focalPointValueX:h,focalPointValueY:w,linkUrl:E,linkTarget:b,linkRel:_}=r,y=(0,i.useCallback)((e=>{var n,l;v({focalPointValueX:null!==(n=e.x)&&void 0!==n?n:.5,focalPointValueY:null!==(l=e.y)&&void 0!==l?l:.5})}),[]),[x,B]=(0,i.useState)(!1),N=!!E,P="_blank"===b;function C(){v({linkUrl:void 0,linkTarget:void 0}),B(!1)}return(0,i.useEffect)((()=>{m||B(!1)}),[m]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.InspectorControls,null,(0,n.createElement)(t.PanelBody,{title:"Bild-Einstellungen"},p&&(0,n.createElement)(t.FocalPointPicker,{url:p,onChange:y,value:{x:null!=h?h:.5,y:null!=w?w:.5}}),(0,n.createElement)(l.MediaUpload,{onSelect:e=>{var n,l,t,r,o,a;const i=null!==(n=null!==(l=null!==(t=null===(r=e.sizes.thumbnail)||void 0===r?void 0:r.url)&&void 0!==t?t:null===(o=e.sizes.medium)||void 0===o?void 0:o.url)&&void 0!==l?l:null===(a=e.sizes.large)||void 0===a?void 0:a.url)&&void 0!==n?n:e.url;v({imageId:e.id,imageUrl:i})},allowedTypes:["image"],value:f,render:e=>{let{open:l}=e;return(0,n.createElement)(t.Button,{isDefault:!0,onClick:l},f?"Bild ändern":"Bild auswählen")}}))),(0,n.createElement)(l.BlockControls,null,(0,n.createElement)(l.AlignmentToolbar,{value:"wide",onChange:()=>console.log("LOG")})),(0,n.createElement)(l.BlockControls,{group:"block"},!N&&(0,n.createElement)(t.ToolbarButton,{name:"link",icon:(0,n.createElement)(l.BlockIcon,{icon:o}),title:(0,c.__)("Link"),onClick:function(e){e.preventDefault(),B(!0)}}),N&&(0,n.createElement)(t.ToolbarButton,{name:"link",icon:(0,n.createElement)(l.BlockIcon,{icon:a}),title:(0,c.__)("Unlink"),onClick:C,isActive:!0})),m&&(x||N)&&(0,n.createElement)(t.Popover,{position:"bottom center",onClose:()=>{B(!1)},anchorRef:g.current,focusOnMount:!!x&&"firstElement"},(0,n.createElement)(l.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:E,opensInNewTab:P},onChange:e=>{let{url:n="",opensInNewTab:l}=e;console.log("newUrl",n),v({linkUrl:n}),P!==l&&function(e){const n=e?"_blank":void 0;let l=_;n&&!_?l=u:n||_!==u||(l=void 0),v({linkTarget:n,linkRel:l})}(l)},onRemove:()=>{C()},forceIsEditingLink:x})),(0,n.createElement)("div",k,p&&(0,n.createElement)("div",{className:"ev-region22-card__image-container"},(0,n.createElement)("img",{className:"ev-region22-card__image",src:p,style:{objectPosition:function(){let{x:e,y:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:.5,y:.5};return`${Math.round(100*e)}% ${Math.round(100*n)}%`}({x:h,y:w})}})),(0,n.createElement)("div",{className:"ev-region22-card__content"},(0,n.createElement)("div",{className:"ev-region22-card__inner-blocks-wrapper"},(0,n.createElement)(l.InnerBlocks,{template:[["core/heading",{level:3,placeholder:"Überschrift",style:{typography:{fontSize:"1.5rem"},color:{text:"var(--wp--preset--color--primary)"}}}],["core/paragraph",{placeholder:"Beschreibung",style:{typography:{fontSize:"1rem",lineHeight:1.375}}}]]})),E&&(0,n.createElement)("a",{className:"ev-region22-card__link","aria-label":"Artikel aufrufen",href:E},(0,n.createElement)(s,{icon:P?"external":"arrow-right"})))))},save:function(e){let{attributes:t,className:r}=e;const{linkUrl:o,linkTarget:a,linkRel:i,imageUrl:c,focalPointValueX:u,focalPointValueY:v}=t,m="_blank"===a,d=l.useBlockProps.save({className:"wp-block-ev-region22-blocks-card-link ev-region22-card"});return(0,n.createElement)("div",d,c&&(0,n.createElement)("div",{className:"ev-region22-card__image-container"},(0,n.createElement)("img",{className:"ev-region22-card__image",src:c,style:{objectPosition:function(){let{x:e,y:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:.5,y:.5};return`${Math.round(100*e)}% ${Math.round(100*n)}%`}({x:u,y:v})}})),(0,n.createElement)("div",{className:"ev-region22-card__content"},(0,n.createElement)("div",{className:"ev-region22-card__inner-blocks-wrapper"},(0,n.createElement)(l.InnerBlocks.Content,null)),o&&(0,n.createElement)("a",{className:"ev-region22-card__link","aria-label":"Artikel aufrufen",href:o,target:a,rel:i},(0,n.createElement)(s,{icon:m?"external":"arrow-right"}))),(0,n.createElement)("a",{className:"ev-region22-card__linkclickarea","aria-hidden":"true",href:o,target:a,rel:i}))}})}},l={};function t(e){var r=l[e];if(void 0!==r)return r.exports;var o=l[e]={exports:{}};return n[e](o,o.exports,t),o.exports}t.m=n,e=[],t.O=function(n,l,r,o){if(!l){var a=1/0;for(u=0;u<e.length;u++){l=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,c=0;c<l.length;c++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](l[c])}))?l.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var s=r();void 0!==s&&(n=s)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[l,r,o]},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={446:0,308:0};t.O.j=function(n){return 0===e[n]};var n=function(n,l){var r,o,a=l[0],i=l[1],c=l[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var u=c(t)}for(n&&n(l);s<a.length;s++)o=a[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},l=self.webpackChunkev_region22_blocks=self.webpackChunkev_region22_blocks||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var r=t.O(void 0,[308],(function(){return t(446)}));r=t.O(r)}();
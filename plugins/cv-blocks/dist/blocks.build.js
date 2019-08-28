!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";var r=wp.editor,o=(r.URLInput,r.BlockControls,r.BlockAlignmentToolbar,r.MediaUpload,r.RichText);t.a=function(e){var t=e.attributes,n=e.isEdit,r=void 0!==n&&n,a=e.setAttributes,i=void 0===a?null:a,l=t.brightness,c=t.title,u=t.description,s=t.url,p="cv-stage-card"+(r?" cv-stage-edit-item":"");return wp.element.createElement("div",{className:p},wp.element.createElement("div",{className:"cv-stage-card__bg","data-background-url":s,"data-brightness":l,style:{backgroundImage:"url("+s+")","--brightness":l+"%"}}),wp.element.createElement("div",{className:"cv-stage-card__overlay"}),wp.element.createElement("div",{className:"cv-stage-card__body"},wp.element.createElement("div",{className:"cv-stage-card__title-wrapper"},!r&&wp.element.createElement(o.Content,{tagName:"h2",className:"cv-stage-card__title",style:{"--title-font-size-factor":"1"},value:c}),r&&wp.element.createElement(o,{tagName:"span",placeholder:"Stage \xdcberschrift",keepPlaceholderOnFocus:!0,formattingControls:[],value:c,className:"cv-stage-card__title",style:{"--title-font-size-factor":"1"},onChange:function(e){return i({title:"<br>"===e?"":e})}})),!r&&wp.element.createElement(o.Content,{tagName:"p",className:"cv-stage-card__description",value:u}),r&&wp.element.createElement(o,{tagName:"span",placeholder:"Stage Inhalt (optional)",keepPlaceholderOnFocus:!0,formattingControls:["bold"],value:u,className:"cv-stage-card__description",onChange:function(e){return i({description:e})}}),wp.element.createElement("div",{className:"cv-stage-card__link"},wp.element.createElement("a",{"v-if":"item.link",href:"/"}))))}},function(e,t,n){"use strict";var r=wp.editor;r.URLInput,r.BlockControls,r.BlockAlignmentToolbar,r.MediaUpload,r.RichText},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(3),n(9),n(13),n(17)},function(e,t,n){"use strict";var r=n(4),o=n(7),a=(n.n(o),n(8)),i=(n.n(a),n(0));(0,wp.blocks.registerBlockType)("cv-blocks/cv-stage-item",{title:"CV Landingpage Stage Element",description:"Ein Element des Header-Blocks.",icon:"format-image",category:"common",keywords:["Header","Image","Element"],parent:["cv-blocks/cv-stage"],attributes:{title:{type:"array",source:"children",selector:".cv-stage-card__title"},description:{type:"array",source:"children",selector:".cv-stage-card__description"},url:{type:"string",source:"attribute",attribute:"data-background-url",selector:".cv-stage-card__bg"},imgSize:{type:"number"},brightness:{type:"string",source:"attribute",attribute:"data-brightness",selector:".cv-stage-card__bg",default:"95"}},getEditWrapperProps:function(){},edit:r.a,save:function(e){var t=e.attributes;return wp.element.createElement(i.a,{attributes:t})}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(5),l=n(0),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=wp.element,s=u.Component,p=u.Fragment;!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(wp.editor);var f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes;return wp.element.createElement(p,null,wp.element.createElement(i.a,{attributes:t,setAttributes:n}),wp.element.createElement(l.a,{attributes:t,isEdit:!0,setAttributes:n}))}}]),t}(s);t.a=f},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(6),l=(n.n(i),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),c=(wp.i18n.__,wp.element.Component),u=wp.editor.InspectorControls,s=wp.components,p=s.PanelBody,f=(s.TextareaControl,s.RangeControl),m=(s.SelectControl,s.TextControl,s.ToggleControl,s.Button);console.log(i.FocalPointPicker),console.log(f);var d=wp.editor.MediaUpload,g=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=(e.categoriesList,e.setAttributes);e.latestPosts,t.order,t.orderBy;return wp.element.createElement(u,null,wp.element.createElement(p,{title:"Hintergrund-Einstellungen"},wp.element.createElement("p",null,wp.element.createElement(d,{buttonProps:{className:"change-image button-default"},onSelect:function(e){n({url:e.url,imgSize:e.filesizeInBytes})},allowed:["image"],type:"image",value:t.url,render:function(e){var n=e.open;return wp.element.createElement(m,{isDefault:!0,onClick:n},t.url?"Bild \xe4ndern":"Bild ausw\xe4hlen")}}),t.imgSize>4e5?wp.element.createElement("p",{style:{color:"#c21d1d"}},"Das ausgew\xe4hlte Bild ist sehr gro\xdf."):null),void 0!==i.FocalPointPicker&&t.url&&wp.element.createElement(i.FocalPointPicker,{url:t.url,dimensions:{width:400,height:100},value:{x:.5,y:.5},onChange:function(e){return console.log("focal point changed",e)}}),wp.element.createElement(f,{label:"Helligkeit des Hintergrundes",value:+t.brightness,onChange:function(e){n({brightness:e})},min:50,max:100})))}}]),t}(c);t.a=g},function(e,t){e.exports=wp.components},function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}var o=n(10),a=n(11),i=(n.n(a),n(12)),l=(n.n(i),wp.blocks.registerBlockType),c=wp.editor.InnerBlocks;l("cv-blocks/cv-stage",{title:"CV Landingpage Stage",description:"Ein Header Image Slider f\xfcr die Landingpage.",icon:"format-image",category:"common",keywords:["Intro","Header","Slider"],getEditWrapperProps:function(){return{"data-align":"full"}},edit:o.a,save:function(e){return r(e.attributes),wp.element.createElement("section",{className:e.className+" alignfull"},wp.element.createElement("cv-stage",null,wp.element.createElement(c.Content,null)))}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=wp.element,c=l.Component,u=l.Fragment,s=wp.editor,p=(s.InspectorControls,s.InnerBlocks);!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(wp.editor);var f=[["cv-blocks/cv-stage-item",{}]],m=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props;return wp.element.createElement(u,null,wp.element.createElement("section",{className:e.className+" alignfull cv-stage-edit","data-align":"full"},wp.element.createElement(p,{allowedBlocks:[],template:f})))}}]),t}(c);t.a=m},function(e,t){},function(e,t){},function(e,t,n){"use strict";var r=n(14),o=n(15),a=(n.n(o),n(16));n.n(a);(0,wp.blocks.registerBlockType)("cv-blocks/cv-groups",{title:"CV Gruppen\xfcbersicht",description:"\xdcbersicht \xfcber alle Gruppen/Angebote.",icon:"format-image",category:"common",keywords:["\xdcbersicht","Gruppe","Angebot"],getEditWrapperProps:function(){return{"data-align":"full"}},edit:r.a,save:function(){return null}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=wp.element,c=l.Component,u=l.Fragment;!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(wp.editor);var s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props;return wp.element.createElement(u,null,wp.element.createElement("section",{className:e.className+" alignfull cv-stage-edit","data-align":"full"},"Gruppen\xfcbersicht"))}}]),t}(c);t.a=s},function(e,t){},function(e,t){},function(e,t,n){"use strict";var r=n(18),o=n(19),a=(n.n(o),n(20)),i=(n.n(a),n(1),wp.blocks.registerBlockType);wp.editor.InnerBlocks;i("cv-blocks/cv-group-detail",{title:"CV Gruppen Eigenschaften",description:"Eigenschaften einer Gruppe/eines Angebotes.",icon:"format-image",category:"common",keywords:["Angebot","Gruppe","Detail"],attributes:{target:{type:"string",source:"meta",meta:"cv_blocks_meta_group_target"},location:{type:"string",source:"meta",meta:"cv_blocks_meta_group_location"},time:{type:"string",source:"meta",meta:"cv_blocks_meta_group_time"},locationPreview:{type:"string"}},edit:r.a,save:function(){return null}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=(n(1),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),l=wp.element,c=l.Component,u=l.Fragment,s=wp.components.TextControl;!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(wp.editor);var p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes;return wp.element.createElement(u,null,wp.element.createElement("div",null,wp.element.createElement(s,{label:"Ort",value:t.location,onChange:function(e){return n({location:e})}}),wp.element.createElement(s,{label:"Zielgruppe",type:"text",value:t.target,onChange:function(e){return n({target:e})}}),wp.element.createElement(s,{label:"Zeit",type:"text",value:t.time,onChange:function(e){return n({time:e})}})))}}]),t}(c);t.a=p},function(e,t){},function(e,t){}]);
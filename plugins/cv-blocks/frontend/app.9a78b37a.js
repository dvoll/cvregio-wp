(function(t){function e(e){for(var r,o,a=e[0],c=e[1],l=e[2],p=0,f=[];p<a.length;p++)o=a[p],i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ec8":function(t,e,n){},4035:function(t,e,n){},4223:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.stageItems,function(e){return n("swiper-slide",{key:"swiper-item-"+e.id,staticClass:"cv-stage__item cv-stage-card",domProps:{innerHTML:t._s(e.innerHTML)}})}),n("div",{staticClass:"cv-stage__controls",attrs:{slot:"pagination"},slot:"pagination"},[n("div",{staticClass:"swiper-button-prev--custom"},[n("i",{staticClass:"fas fa-arrow-left"})]),n("div",{staticClass:"swiper-pagination"}),n("div",{staticClass:"swiper-button-next--custom"},[n("i",{staticClass:"fas fa-arrow-right"})])])],2)},i=[],s=(n("ac6a"),n("7212")),o=(n("dfa4"),n("4035"),{components:{swiper:s["swiper"],swiperSlide:s["swiperSlide"]},props:{items:{type:String}},computed:{},data:function(){return{stageItems:[],swiperOptions:{pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next--custom",prevEl:".swiper-button-prev--custom"},parallax:!0,effect:"fade"}}},mounted:function(){var t=this;console.log("item string",this.items),this.$slots.default.forEach(function(e,n){var r=(new DOMParser).parseFromString(e.data.domProps.innerHTML,"text/html");r.querySelector(".cv-stage-card__body").setAttribute("data-swiper-parallax","200"),console.log("add attribute",r),t.stageItems.push({id:n,innerHTML:r.activeElement.innerHTML})}),console.log("items",this.stageItems)}}),a=o,c=(n("5279"),n("2877")),l=Object(c["a"])(a,r,i,!1,null,null,null);e["a"]=l.exports},5279:function(t,e,n){"use strict";var r=n("0ec8"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=n("c894"),s=n("4223");console.log("Frontend loaded."),r["a"].config.productionTip=!1,r["a"].use(i["a"]),r["a"].customElement("cv-stage",s["a"])}});
//# sourceMappingURL=app.9a78b37a.js.map
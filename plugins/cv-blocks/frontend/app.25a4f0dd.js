(function(t){function e(e){for(var r,a,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)a=o[p],s[a]&&d.push(s[a][0]),s[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ec8":function(t,e,n){},4223:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{attrs:{options:t.swiperOptions}},[t._l(t.stageItems,function(e){return n("swiper-slide",{key:"swiper-item-"+e.id,staticClass:"cv-stage__layer cv-stage-item"},[n("div",{staticClass:"cv-stage-item__bg",style:{backgroundImage:"url("+e.url+")"}}),n("div",{staticClass:"cv-stage__overlay"}),n("div",{staticClass:"cv-stage-content",attrs:{"data-swiper-parallax":"200"}},[n("div",{staticClass:"cv-stage-content__title-wrapper"},[n("p",{staticClass:"cv-stage-content__title"},[t._v(t._s(e.title))])]),n("p",{staticClass:"cv-stage-content__description"},[t._v(t._s(e.text))])])])}),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),n("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"}),n("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"})],2)},s=[],i=(n("ac6a"),n("7212")),a=(n("dfa4"),{components:{swiper:i["swiper"],swiperSlide:i["swiperSlide"]},props:{items:{type:String}},data:function(){return{stageItems:[],swiperOptions:{pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},parallax:!0,effect:"fade"}}},mounted:function(){var t=this;console.log("item string",this.items),this.$slots.default.forEach(function(e,n){var r=(new DOMParser).parseFromString(e.data.domProps.innerHTML,"text/html");t.stageItems.push({id:n,title:r.querySelector(".cv-stage-item__title").textContent.trim(),text:r.querySelector(".cv-stage-item__description").textContent.trim(),url:r.querySelector(".cv-stage-item__bg").dataset.backgroundUrl})}),console.log("items",this.stageItems)}}),o=a,l=(n("5279"),n("2877")),c=Object(l["a"])(o,r,s,!1,null,null,null);e["a"]=c.exports},5279:function(t,e,n){"use strict";var r=n("0ec8"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=n("c894"),i=n("4223");console.log("Frontend loaded."),r["a"].config.productionTip=!1,r["a"].use(s["a"]),r["a"].customElement("cv-stage",i["a"])}});
//# sourceMappingURL=app.25a4f0dd.js.map
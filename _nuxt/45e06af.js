(window.webpackJsonp=window.webpackJsonp||[]).push([[14,13],{399:function(t,e,n){"use strict";n.r(e);var r=n(23),component=Object(r.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{width:"28",height:"10",viewBox:"0 0 28 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M6.67969 0.640001C5.85302 2.34667 5.07969 3.62667 4.35969 4.48L27.6797 4.48L27.6797 6.16L4.35969 6.16C5.07969 7.01334 5.85302 8.29333 6.67969 10L5.27969 10C3.59969 8.05334 1.83969 6.61334 -0.000313183 5.68L-0.000313246 4.96C1.83969 4.05334 3.59969 2.61334 5.27969 0.640001L6.67969 0.640001Z",fill:"#28282A"}})])}),[],!1,null,null,null);e.default=component.exports},411:function(t,e,n){"use strict";n.r(e);n(32),n(251);var r=n(180),l=n.n(r);var c={components:{VueArrowIcon:n(399).default},props:{items:{type:Array,default:function(){return[]}},current:{type:Number,default:0}},data:function(){return{currentSlide:this.current}},computed:{length:function(){return this.items.length}},watch:{current:function(){this.currentSlide=this.current}},mounted:function(){var t=this;window.addEventListener("keydown",this.sliderHandler),l.a.on("resetCurrent",(function(){t.currentSlide=0})),this.sdDestroy=function(t,e){var n,r,l,c,o,d,v=t,h=e||function(t){},_=function(t){var e=t.changedTouches[0];n="none",r=e.pageX,l=e.pageY,d=(new Date).getTime(),t.preventDefault()};v.addEventListener("touchstart",_,!1);var f=function(t){t.preventDefault()};v.addEventListener("touchmove",f,!1);var m=function(t){var e=t.changedTouches[0];c=e.pageX-r,o=e.pageY-l,(new Date).getTime()-d<=300&&(Math.abs(c)>=10&&Math.abs(o)<=100?n=c<0?"left":"right":Math.abs(o)>=10&&Math.abs(c)<=100&&(n=o<0?"up":"down")),h(n),t.preventDefault()};return v.addEventListener("touchend",m,!1),function(){v.removeEventListener("touchstart",_),v.removeEventListener("touchmove",f),v.removeEventListener("touchend",m)}}(this.$el,(function(e){"left"===e?t.next():t.prev()}))},beforeDestroy:function(){window.removeEventListener("keydown",this.sliderHandler),this.sdDestroy&&this.sdDestroy()},methods:{prev:function(){this.currentSlide>0?this.currentSlide--:this.currentSlide=this.items.length-1},next:function(){this.currentSlide<this.items.length-1?this.currentSlide++:this.currentSlide=0},sliderHandler:function(t){"ArrowLeft"===t.key&&this.prev(),"ArrowRight"===t.key&&this.next()}}},o=n(23),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"slider"},[e("ul",{staticClass:"slider__slides"},t._l(t.items,(function(n,r){return e("li",{key:n._uid,staticClass:"slider__slide slide",class:[t.currentSlide===r&&"slide--active"]},[e("the-picture",{attrs:{url:n.img,"img-class":"slide__img",width:"1000"}})],1)})),0),t._v(" "),e("nav",{staticClass:"slider__nav"},[e("button",{staticClass:"slider__nav-item slider__nav-item--left",on:{click:t.prev}},[e("vue-arrow-icon")],1),t._v(" "),e("button",{staticClass:"slider__nav-item slider__nav-item--right",on:{click:t.next}},[e("vue-arrow-icon")],1)]),t._v(" "),e("ul",{staticClass:"slider__texts"},t._l(t.items,(function(n,r){return e("li",{key:n._uid,staticClass:"slider__text sl-text",class:[t.currentSlide===r&&"sl-text--active"]},[e("small",{staticClass:"sl-text__date"},[t._v(t._s(n.name))]),t._v(" "),e("small",{staticClass:"sl-text__size"},[t._v(t._s(n.size))]),t._v(" "),e("small",{staticClass:"sl-text__type"},[t._v(t._s(n.type))])])})),0),t._v(" "),e("div",{staticClass:"slider__counter"},[t._v(t._s(t.currentSlide+1)+"/"+t._s(t.length))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ThePicture:n(177).default})}}]);
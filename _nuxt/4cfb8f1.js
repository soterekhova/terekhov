(window.webpackJsonp=window.webpackJsonp||[]).push([[1,13,14],{333:function(t,e,n){"use strict";var r=n(22),l=n(1),o=n(5),c=n(90),d=n(32),f=n(21),v=n(163),_=n(59),h=n(118),m=n(217),w=n(7),y=n(75).f,C=n(53).f,E=n(26).f,x=n(334),N=n(335).trim,S="Number",I=l.Number,L=I.prototype,k=l.TypeError,A=o("".slice),T=o("".charCodeAt),D=function(t){var e=m(t,"number");return"bigint"==typeof e?e:M(e)},M=function(t){var e,n,r,l,o,c,d,code,f=m(t,"number");if(h(f))throw k("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=N(f),43===(e=T(f,0))||45===e){if(88===(n=T(f,2))||120===n)return NaN}else if(48===e){switch(T(f,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+f}for(c=(o=A(f,2)).length,d=0;d<c;d++)if((code=T(o,d))<48||code>l)return NaN;return parseInt(o,r)}return+f};if(c(S,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var O,F=function(t){var e=arguments.length<1?0:I(D(t)),n=this;return _(L,n)&&w((function(){x(n)}))?v(Object(e),n,F):e},$=r?y(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;$.length>V;V++)f(I,O=$[V])&&!f(F,O)&&E(F,O,C(I,O));F.prototype=L,L.constructor=F,d(l,S,F)}},334:function(t,e,n){var r=n(5);t.exports=r(1..valueOf)},335:function(t,e,n){var r=n(5),l=n(35),o=n(15),c=n(336),d=r("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),_=RegExp(f+f+"*$"),h=function(t){return function(e){var n=o(l(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,_,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},336:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},340:function(t,e,n){"use strict";n.r(e);var r=n(23),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"28",height:"10",viewBox:"0 0 28 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M6.67969 0.640001C5.85302 2.34667 5.07969 3.62667 4.35969 4.48L27.6797 4.48L27.6797 6.16L4.35969 6.16C5.07969 7.01334 5.85302 8.29333 6.67969 10L5.27969 10C3.59969 8.05334 1.83969 6.61334 -0.000313183 5.68L-0.000313246 4.96C1.83969 4.05334 3.59969 2.61334 5.27969 0.640001L6.67969 0.640001Z",fill:"#28282A"}})])}),[],!1,null,null,null);e.default=component.exports},353:function(t,e,n){"use strict";n.r(e);n(333);var r=n(164),l=n.n(r);var o={components:{VueArrowIcon:n(340).default},props:{items:{type:Array,default:function(){return[]}},current:{type:Number,default:0}},data:function(){return{currentSlide:this.current}},computed:{length:function(){return this.items.length}},watch:{current:function(){this.currentSlide=this.current}},mounted:function(){var t=this;window.addEventListener("keydown",this.sliderHandler),l.a.on("resetCurrent",(function(){t.currentSlide=0})),this.sdDestroy=function(t,e){var n,r,l,o,c,d,f=t,v=e||function(t){},_=function(t){var e=t.changedTouches[0];n="none",r=e.pageX,l=e.pageY,d=(new Date).getTime(),t.preventDefault()};f.addEventListener("touchstart",_,!1);var h=function(t){t.preventDefault()};f.addEventListener("touchmove",h,!1);var m=function(t){var e=t.changedTouches[0];o=e.pageX-r,c=e.pageY-l,(new Date).getTime()-d<=300&&(Math.abs(o)>=10&&Math.abs(c)<=100?n=o<0?"left":"right":Math.abs(c)>=10&&Math.abs(o)<=100&&(n=c<0?"up":"down")),v(n),t.preventDefault()};return f.addEventListener("touchend",m,!1),function(){f.removeEventListener("touchstart",_),f.removeEventListener("touchmove",h),f.removeEventListener("touchend",m)}}(this.$el,(function(e){"left"===e?t.next():t.prev()}))},beforeDestroy:function(){window.removeEventListener("keydown",this.sliderHandler),this.sdDestroy&&this.sdDestroy()},methods:{prev:function(){this.currentSlide>0?this.currentSlide--:this.currentSlide=this.items.length-1},next:function(){this.currentSlide<this.items.length-1?this.currentSlide++:this.currentSlide=0},sliderHandler:function(t){"ArrowLeft"===t.key&&this.prev(),"ArrowRight"===t.key&&this.next()}}},c=n(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider"},[n("ul",{staticClass:"slider__slides"},t._l(t.items,(function(e,r){return n("li",{key:e._uid,staticClass:"slider__slide slide",class:[t.currentSlide===r&&"slide--active"]},[n("the-picture",{attrs:{url:e.img,"img-class":"slide__img",width:"1000"}})],1)})),0),t._v(" "),n("nav",{staticClass:"slider__nav"},[n("button",{staticClass:"slider__nav-item slider__nav-item--left",on:{click:t.prev}},[n("vue-arrow-icon")],1),t._v(" "),n("button",{staticClass:"slider__nav-item slider__nav-item--right",on:{click:t.next}},[n("vue-arrow-icon")],1)]),t._v(" "),n("ul",{staticClass:"slider__texts"},t._l(t.items,(function(e,r){return n("li",{key:e._uid,staticClass:"slider__text sl-text",class:[t.currentSlide===r&&"sl-text--active"]},[n("small",{staticClass:"sl-text__date"},[t._v(t._s(e.name))]),t._v(" "),n("small",{staticClass:"sl-text__size"},[t._v(t._s(e.size))]),t._v(" "),n("small",{staticClass:"sl-text__type"},[t._v(t._s(e.type))])])})),0),t._v(" "),n("div",{staticClass:"slider__counter"},[t._v(t._s(t.currentSlide+1)+"/"+t._s(t.length))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ThePicture:n(160).default})},396:function(t,e,n){"use strict";n.r(e);n(333);var r={components:{VueSlider:n(353).default},props:{items:{type:Array,default:function(){return[]}},period:{type:String,default:""},startFrom:{type:Number,default:0},isOpen:{type:Boolean,default:!0}},methods:{close:function(){this.$emit("close")}}},l=n(23),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider-window",class:[t.isOpen&&"slider-window--open"]},[n("div",{staticClass:"center-wrap"},[n("div",{staticClass:"slider-window__period"},[t._v(t._s(t.period))]),t._v(" "),n("button",{staticClass:"back slider-window__close",on:{click:t.close}},[n("span",{staticClass:"back__link"},[t._v("\n        "+t._s("en"===t.$i18n.locale?"back":"назад")+"\n      ")])]),t._v(" "),n("div",{staticClass:"slider-window__slider"},[n("vue-slider",{attrs:{items:t.items,current:t.startFrom}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);
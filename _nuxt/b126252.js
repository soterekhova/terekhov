(window.webpackJsonp=window.webpackJsonp||[]).push([[31,3],{316:function(e,t){function n(e,t,n){var r,o,c,l,f;function d(){var m=Date.now()-l;m<t&&m>=0?r=setTimeout(d,t-m):(r=null,n||(f=e.apply(c,o),c=o=null))}null==t&&(t=100);var m=function(){c=this,o=arguments,l=Date.now();var m=n&&!r;return r||(r=setTimeout(d,t)),m&&(f=e.apply(c,o),c=o=null),f};return m.clear=function(){r&&(clearTimeout(r),r=null)},m.flush=function(){r&&(f=e.apply(c,o),c=o=null,clearTimeout(r),r=null)},m}n.debounce=n,e.exports=n},317:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.raf=t.RAF=void 0;class r{constructor(){this.cbArray=[],this.animation()}on(e){this.cbArray.push(e)}off(e){this.cbArray=this.cbArray.filter((t=>t!==e))}animation(){this.cbArray.forEach((e=>e())),requestAnimationFrame(this.animation.bind(this))}}t.RAF=r;const o=new r;t.raf={on:e=>o.on(e),off:e=>o.off(e)}},318:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resize=t.Resize=void 0;const r=n(316);class o{constructor(){this.cbArray=[],this.init()}bounds(){["resizeHandler"].forEach((e=>{this[e]=this[e].bind(this)}))}init(){this.bounds(),this.debounced=r.debounce(this.resizeHandler,60),window.addEventListener("resize",this.debounced)}resizeHandler(){this.cbArray.forEach((e=>e()))}on(e){e(),this.cbArray.push(e)}off(e){this.cbArray=this.cbArray.filter((t=>t!==e))}destroy(){window.removeEventListener("resize",this.resizeHandler)}}t.Resize=o;const c=new o;t.resize={on:e=>c.on(e),off:e=>c.off(e)}},319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clamp=t.lerp=void 0;t.lerp=(a,b,e)=>a*(1-e)+b*e;t.clamp=(e,a,b)=>Math.max(Math.min(e,Math.max(a,b)),Math.min(a,b))},320:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createNewElement=void 0;t.createNewElement=(e,t)=>{const n=document.createElement(e);return n.classList.add(t),n}},321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t)=>{const n=new MutationObserver((function(e){for(const n of e)"childList"===n.type&&t()}));return n.observe(e,{childList:!0}),()=>n.disconnect()}},322:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.matrixTransform=void 0;t.matrixTransform=(e={})=>{var t,n,r,o,c,l,f;const d={scale:null!==(t=e.scale)&&void 0!==t?t:{x:1,y:1},move:null!==(n=e.move)&&void 0!==n?n:{x:0,y:0,z:0}},p=Object.keys(d).map((e=>"string"==typeof d[e]||"number"==typeof d[e]?{x:d[e],y:d[e],z:d[e]}:d[e]));return`matrix3d(\n    ${null!==(r=p[0].x)&&void 0!==r?r:1},0,0,0,\n    0,${null!==(o=p[0].y)&&void 0!==o?o:1},0,0,\n    0,0,1,0,\n    ${null!==(c=p[1].x)&&void 0!==c?c:0},${null!==(l=p[1].y)&&void 0!==l?l:0},${null!==(f=p[1].z)&&void 0!==f?f:0},1\n    )`}},323:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.matrixTransform=t.mutationObserver=t.createNewElement=t.lerp=t.clamp=t.resize=t.raf=void 0;const o=n(317);Object.defineProperty(t,"raf",{enumerable:!0,get:function(){return o.raf}});const c=n(318);Object.defineProperty(t,"resize",{enumerable:!0,get:function(){return c.resize}});const l=n(319);Object.defineProperty(t,"clamp",{enumerable:!0,get:function(){return l.clamp}}),Object.defineProperty(t,"lerp",{enumerable:!0,get:function(){return l.lerp}});const f=n(320);Object.defineProperty(t,"createNewElement",{enumerable:!0,get:function(){return f.createNewElement}});const d=r(n(321));t.mutationObserver=d.default;const m=n(322);Object.defineProperty(t,"matrixTransform",{enumerable:!0,get:function(){return m.matrixTransform}})},385:function(e,t,n){"use strict";n.r(t),n.d(t,"BlackBg",(function(){return l}));var r=n(161),o=n(162),c=(n(11),n(39),n(92),n(47),n(323)),l=function(){function e(){Object(r.a)(this,e),this.inViewEls=[],this.$els=document.querySelectorAll("[data-dark]"),this.animate=this.animate.bind(this),this.init()}return Object(o.a)(e,[{key:"init",value:function(){c.raf.on(this.animate)}},{key:"update",value:function(){this.$els=document.querySelectorAll("[data-dark]")}},{key:"isInView",value:function(e){var t,n,r=null!==(t=e.dataset.darkOffsetTop)&&void 0!==t?t:.9,o=null!==(n=e.dataset.darkOffsetBottom)&&void 0!==n?n:.7,c=e.getBoundingClientRect(),l=c.top<=window.innerHeight*r,f=-c.top<=c.height*o;return l&&f}},{key:"animate",value:function(){var e=this;this.$els.length&&this.$els.forEach((function(t){e.isInView(t)?e.inViewEls.find((function(e){return t}))||e.inViewEls.push(t):e.inViewEls.find((function(e){return t}))&&(e.inViewEls=e.inViewEls.filter((function(e){return e!==t}))),e.inViewEls.length?document.body.classList.add("e-black"):document.body.classList.remove("e-black")}))}},{key:"destroy",value:function(){c.raf.off(this.animate),document.body.classList.remove("e-black")}}]),e}()}}]);
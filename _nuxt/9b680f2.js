(window.webpackJsonp=window.webpackJsonp||[]).push([[22,17],{324:function(t,e,n){"use strict";n.r(e),n.d(e,"anchorHandler",(function(){return c})),n.d(e,"anchorScroll",(function(){return l}));var r=n(159),o=(n(11),n(39),n(117)),c=function(t,e){var n=e||function(){},r=window.pageYOffset,c=t.offsetTop-r;if(window.innerWidth>=1024)o.a.to(window.ss.state,{duration:1,target:c,onComplete:n});else{var l=document.querySelector("#scroll-container");o.a.to(l,{duration:1,scrollTop:c,onComplete:n})}},l=function(t){var e=Object(r.a)(document.querySelectorAll(t)),n=[];return e.forEach((function(link){var t=function(t){return function(t,link){t.preventDefault();var e=link.getAttribute("data-href"),n=document.querySelector(e);n?c(n):console.warn("target is not defined")}(t,link)};n.push(t),link.addEventListener("click",t)})),{destroy:function(){e.forEach((function(link,i){link.removeEventListener("click",n[i])}))}}}},325:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(24),n(89)),c={props:{bg:{type:Boolean,default:!1}},data:function(){return{email:null,footer:{}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)(t,"/global/contacts",t.$i18n.locale);case 2:return n=e.sent,e.next=5,Object(o.a)(t,"/global/footer",t.$i18n.locale);case 5:r=e.sent,t.email=n.story.content.email,t.footer=r.story.content;case 8:case"end":return e.stop()}}),e)})))()}},l=n(23),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer",class:[t.bg&&"footer--bg"]},[n("div",{staticClass:"center-wrap"},[n("div",{staticClass:"footer__wrap"},[n("nuxt-link",{staticClass:"footer__home",attrs:{to:t.localePath("index")}},[t._v(t._s(t.footer.link_text))]),n("a",{staticClass:"footer__email",attrs:{href:"mailto:"+t.email}},[t._v(t._s(t.email))]),t._v(" "),n("p",{staticClass:"footer__copyr"},[t._v(t._s(t.footer.copy_text))])],1)])])}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n(3),o=(n(24),n(11),n(39),n(117)),c=n(159),l=n(326),d=function(t){var e,n=function(t){t.classList.contains("splitted")||(new l.a(t,{types:"words, chars",tagName:"span",lineClass:"e-line"}).chars.forEach((function(t){t.innerHTML='<span class="char-inner">'.concat(t.innerHTML,"</span>"),t.setAttribute("data-char",t.innerText)})),e=Object(c.a)(t.querySelectorAll(".char-inner")),t.style.opacity=1,t.classList.add("splitted"))};return{in:function(t){var r,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;n(t),t.style.opacity=1,(null===(r=e)||void 0===r?void 0:r.length)&&o.a.to(e,{duration:c,y:"0%",stagger:l,opacity:1,ease:"expo.out",overwrite:!0})}}},f=(n(65),function(t){var e,n,r=function(t){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chars, lines";if(!t.classList.contains("splitted")){var text=new l.a(t,{types:o,tagName:"span",lineClass:"e-line"});null===(r=text.words)||void 0===r||r.forEach((function(t){t.innerHTML='<span class="word-inner">'.concat(t.innerHTML,"</span>"),t.setAttribute("data-word",t.innerText)})),text.lines.forEach((function(line,t){line.innerHTML='<span class="line-inner">'.concat(line.innerHTML,"</span>"),line.setAttribute("data-line",line.innerText),line.setAttribute("data-line-idx",t)})),e=Object(c.a)(t.querySelectorAll(".line-inner .char")),n=Object(c.a)(t.querySelectorAll(".line-inner")),t.style.opacity=1,t.classList.add("splitted")}};return{in:function(t){var c,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.8,d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.08;r(t),t.style.opacity=1;var f=o.a.timeline();null!==(c=e)&&void 0!==c&&c.length&&n.forEach((function(t){f.to(t.querySelectorAll(".char"),{duration:l,x:"0%",stagger:d,ease:"expo.out"},0),f.to(t.querySelectorAll(".char"),{duration:1.5*l,opacity:1,stagger:d,ease:"power3.out"},0)}))},in2:function(t){var e,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.8,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.15;r(t,"lines, words"),t.style.opacity=1,null!==(e=n)&&void 0!==e&&e.length&&n.forEach((function(t,i){setTimeout((function(){o.a.to(t.querySelectorAll('[data-line-idx="'.concat(i,'"] .word-inner')),{duration:c,y:"0%",opacity:1,ease:"expo.out"})}),i*l*1e3)}))},in3:function(t){var e,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.2;if(r(t,"lines"),t.style.opacity=1,null!==(e=n)&&void 0!==e&&e.length){var d=n.reverse();o.a.to(d,{duration:c,y:"0%",rotation:0,stagger:l,ease:"expo.out"}),o.a.to(d,{duration:1.5*c,stagger:l,opacity:1,ease:"expo.out"})}}}}),h=function(){var time=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(t){setTimeout((function(){t()}),time)}))},y="expo.out",m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2.3;NodeList.prototype.animation=function(t){this.length>0&&o.a.to(this,t)},t.querySelectorAll("[data-a-l]").animation({duration:2.5,scaleX:1,delay:.5,ease:y,stagger:.2}),t.querySelectorAll("[data-a-img]").animation({duration:2,delay:.5,opacity:1,ease:y,stagger:.4}),t.querySelectorAll("[data-a-img] div").animation({duration:2.5,delay:.5,scale:1,ease:y,stagger:.4}),t.querySelectorAll("[data-a-t]").animation({duration:2,delay:.5,opacity:1,y:0,ease:y,stagger:.4}),t.querySelectorAll("[data-a-o]").animation({duration:2,delay:.5,opacity:1,ease:y,stagger:.4});var n=t.querySelector("[data-a-thesis]"),c=t.querySelectorAll("[data-a-title]"),l=t.querySelectorAll("[data-a-h]"),m=t.querySelectorAll("[data-a-p]"),v=t.querySelector("[data-a-img-main]");if(v){var w=v.querySelector(".img-wrap"),image=w.querySelector("div"),_=image.querySelector("img"),x=o.a.timeline();x.to(image,{duration:2,y:0,ease:"power2.inOut"},.5),x.to(_,{duration:2,scale:1,ease:"power2.inOut"},.5),x.to(w,{duration:2,y:0,ease:"power2.inOut"},.5)}c.length&&c.forEach(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(300*i);case 2:f().in(e);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),l.length&&l.forEach(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(300*i);case 2:f().in3(n,e);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),m.length&&m.forEach(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(300*(i+1));case 2:f().in2(n,e);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),n&&d().in(n,3)}},329:function(t,e,n){"use strict";n(11),n(39),n(337),n(16),n(52);var r=n(117),o=n(332),c=n.n(o),l=(n(65),n(327)),d=function(){},f=function(t){var e=document.querySelector("#scroll-container"),n=document.querySelector("[data-route]");n&&((t||d)(),e&&!e.classList.contains("sc-loaded")&&r.a.to(e,{duration:.5,opacity:1,onComplete:function(){e.classList.add("sc-loaded")}}),Object(l.a)(n,3))},h=n(324),y=function(){f(),document.querySelector("[data-wait]").removeAttribute("data-wait")},m={transition:function(){var t,e;null===(t=window.scetch)||void 0===t||null===(e=t.figures)||void 0===e||e.forEach((function(t){window.scetch.removeFigure(t._id)}));var n=document.querySelector(".rewealer"),o=document.querySelector(".rewealer-white");return{mode:"out-in",enter:function(t,e){var l=this;if(function(){if(window.ss)try{window.ss.reset()}catch(t){console.log(t)}window.ss&&(window.ss.isFixed=!1),setTimeout((function(){window.parallax&&window.parallax.update()}),0)}(),this.$route.query.anchor){t.style.opacity=0;var d=document.querySelector(this.$route.query.anchor);Object(h.anchorHandler)(d,(function(){r.a.to(t,{duration:.5,opacity:1}),l.$router.replace({query:null})}))}r.a.to(n,{duration:.5,opacity:0,onComplete:e}),r.a.to(o,{duration:.5,opacity:0}),document.querySelector("[data-wait]")?c()(document.querySelector("[data-wait]"),y):f()},leave:function(t,e){window.ss&&(window.ss.isFixed=!0),r.a.fromTo(n,{y:"100%",opacity:1},{duration:1.5,y:"0%",delay:.2,ease:"power1.inOut",onComplete:e}),r.a.fromTo(o,{opacity:0},{duration:1,opacity:.8,ease:"power1.inOut"})}}},computed:{isLoaded:function(){return this.$store.state.app.loaded}},watch:{isLoaded:function(){this.isLoaded&&(document.querySelector("[data-wait]")?c()(document.querySelector("[data-wait]"),y):f())}}},v=n(23),component=Object(v.a)(m,undefined,undefined,!1,null,null,null);e.a=component.exports},330:function(t,e,n){"use strict";var r=n(3),o=(n(11),n(19),n(20),n(24),{mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initAnchor();case 2:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.anchorScroll&&this.anchorScroll.destroy()},methods:{initAnchor:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(null,324));case 2:r=e.sent,o=r.anchorScroll,t.anchorScroll=o("[data-href]");case 5:case"end":return e.stop()}}),e)})))()}}}),c=n(23),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.a=component.exports},331:function(t,e,n){"use strict";var r={mounted:function(){var t=this;this.$storybridge((function(){(new StoryblokBridge).on(["input","published","change"],(function(e){console.log(e,t.story.content),"input"===e.action?e.story.id===t.story.id&&(console.log("updating"),t.story=e.story,t.$forceUpdate()):t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))}),(function(t){console.log(t)}))}},o=n(23),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.a=component.exports},393:function(t,e,n){"use strict";n.r(e);var r=n(30),o=(n(11),n(19),n(20),n(25),n(40),n(41),n(27),n(42),n(47),n(62),n(39),n(63),n(164)),c=n.n(o),l=n(160),d=n(330),f=n(329),h=n(331),y=n(89),m={mixins:[h.a],asyncData:function(t){return Object(y.a)(t.app,"/periods/",t.app.i18n.locale)},computed:{periods:function(){return this.story.content.periods}}},v=n(23),w=Object(v.a)(m,undefined,undefined,!1,null,null,null).exports,_=n(325);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={components:{vuePicture:l.default,PeriodsSlider:function(){return n.e(1).then(n.bind(null,396))},TheFooter:_.default},mixins:[d.a,f.a,w],data:function(){return{sliders:[]}},head:function(){var t=this.story.content.meta[0],title=t.title,e=t.description;return{title:title,meta:[{hid:"description",name:"description",content:e},{hid:"og:title",name:"og:title",content:title},{hid:"og:description",name:"og:title",content:e},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:title},{name:"twitter:description",content:e}]}},computed:{slidersPictures:function(){return this.periods.map((function(t){return t.period_pictures.map((function(image){return{_uid:image._uid,img:image.big_picture.filename,name:image.name||"",size:image.size||"",type:image.type||""}}))}))},slidersContent:function(){var t=this;return this.periods.map((function(e,n){return{isSliderOpen:!1,startFrom:0,period:e.date,items:t.slidersPictures[n]}}))}},watch:{slidersContent:function(){this.sliders=this.slidersContent}},created:function(){this.sliders=this.slidersContent},mounted:function(){},methods:{openSlider:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.sliders[t].startFrom=e,this.sliders[t].isSliderOpen=!0,window.ss&&(window.ss.isFixed=!0)},closeSlider:function(){this.sliders=this.sliders.map((function(t){return O(O({},t),{},{startFrom:0,isSliderOpen:!1})})),c.a.emit("resetCurrent"),window.ss&&(window.ss.isFixed=!1)}}},C=S,j=Object(v.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{"data-route":"","data-periods":""}},[n("section",{staticClass:"periods",attrs:{"data-wait":""}},[n("div",{staticClass:"center-wrap"},[n("div",{staticClass:"periods__header"},[n("div",{staticClass:"back",attrs:{"data-a-o":""}},[n("nuxt-link",{staticClass:"back__link",attrs:{to:t.localePath("index")}},[t._v(t._s(t.story.content.link_text))])],1),t._v(" "),n("div",{staticClass:"periods__header-right"},[n("div",{staticClass:"periods__header-text",attrs:{"data-a-h":""}},[t._v("\n            "+t._s(t.story.content.description)+"\n          ")]),t._v(" "),n("div",{staticClass:"periods__header-title",attrs:{"data-a-h":""}},[t._v("\n            "+t._s(t.story.content.title)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"periods__body anchors",attrs:{"data-a-o":""}},[n("div",{staticClass:"periods__body-list"},t._l(t.periods,(function(e,r){return n("div",{key:e._uid,staticClass:"periods__body-item",attrs:{"data-href":"#period-"+(r+1)}},[t._v("\n            "+t._s(e.date)+"\n          ")])})),0),t._v(" "),t._l(t.periods,(function(e,r){return n("section",{key:e._uid,staticClass:"period",class:["period-"+(r+1)],attrs:{id:"period-"+(r+1)}},[n("div",{staticClass:"period-1__container"},[n("div",{staticClass:"period__title"},[n("p",{staticClass:"period__number"},[t._v(t._s(e.opus))]),t._v(" "),n("p",{staticClass:"period__years"},[t._v(t._s(e.date))])]),t._v(" "),n("ul",{staticClass:"period__images period-1__images"},t._l(e.period_pictures,(function(image,i){return n("li",{key:image._uid,staticClass:"period__img",class:["period-"+(r+1)+"__img"],on:{click:function(e){return t.openSlider(r,i)}}},[n("span",{staticClass:"period__i-wrapper"},[n("vue-picture",{staticClass:"period__i",attrs:{url:image.small_picture.filename}})],1)])})),0)])])}))],2)])]),t._v(" "),n("the-footer",{attrs:{bg:!0}}),t._v(" "),t._l(t.sliders,(function(e){return n("periods-slider",{key:e.period,attrs:{items:e.items,period:e.period,"is-open":e.isSliderOpen,"start-from":e.startFrom},on:{close:t.closeSlider}})}))],2)}),[],!1,null,null,null);e.default=j.exports;installComponents(j,{TheFooter:n(325).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[20,17],{387:function(t,e,n){"use strict";n.r(e),n.d(e,"anchorHandler",(function(){return c})),n.d(e,"anchorScroll",(function(){return l}));var o=n(176),r=(n(11),n(36),n(132)),c=function(t,e){var n=e||function(){},o=window.pageYOffset,c=t.offsetTop-o;if(window.innerWidth>=1024)r.a.to(window.ss.state,{duration:1,target:c,onComplete:n});else{var l=document.querySelector("#scroll-container");r.a.to(l,{duration:1,scrollTop:c,onComplete:n})}},l=function(t){var e=Object(o.a)(document.querySelectorAll(t)),n=[];return e.forEach((function(link){var t=function(t){return function(t,link){t.preventDefault();var e=link.getAttribute("data-href"),n=document.querySelector(e);n?c(n):console.warn("target is not defined")}(t,link)};n.push(t),link.addEventListener("click",t)})),{destroy:function(){e.forEach((function(link,i){link.removeEventListener("click",n[i])}))}}}},388:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(25),n(102)),c={props:{bg:{type:Boolean,default:!1}},data:function(){return{email:null,footer:{}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(r.a)(t,"/global/contacts",t.$i18n.locale);case 2:return n=e.sent,e.next=5,Object(r.a)(t,"/global/footer",t.$i18n.locale);case 5:o=e.sent,t.email=n.story.content.email,t.footer=o.story.content;case 8:case"end":return e.stop()}}),e)})))()}},l=n(24),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer",class:[t.bg&&"footer--bg"]},[e("div",{staticClass:"center-wrap"},[e("div",{staticClass:"footer__wrap"},[e("nuxt-link",{staticClass:"footer__home",attrs:{to:t.localePath("index")}},[t._v(t._s(t.footer.link_text))]),e("a",{staticClass:"footer__email",attrs:{href:"mailto:".concat(t.email)}},[t._v(t._s(t.email))]),t._v(" "),e("p",{staticClass:"footer__copyr"},[t._v(t._s(t.footer.copy_text))])],1)])])}),[],!1,null,null,null);e.default=component.exports},390:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var o=n(3),r=(n(25),n(11),n(36),n(132)),c=n(176),l=n(389),d=function(t){var e;return{in:function(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;!function(t){t.classList.contains("splitted")||(new l.a(t,{types:"words, chars",tagName:"span",lineClass:"e-line"}).chars.forEach((function(t){t.innerHTML='<span class="char-inner">'.concat(t.innerHTML,"</span>"),t.setAttribute("data-char",t.innerText)})),e=Object(c.a)(t.querySelectorAll(".char-inner")),t.style.opacity=1,t.classList.add("splitted"))}(t),t.style.opacity=1,(null===(n=e)||void 0===n?void 0:n.length)&&r.a.to(e,{duration:o,y:"0%",stagger:d,opacity:1,ease:"expo.out",overwrite:!0})}}},_=(n(68),function(t){var e,n,o=function(t){var o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chars, lines";if(!t.classList.contains("splitted")){var text=new l.a(t,{types:r,tagName:"span",lineClass:"e-line"});null===(o=text.words)||void 0===o||o.forEach((function(t){t.innerHTML='<span class="word-inner">'.concat(t.innerHTML,"</span>"),t.setAttribute("data-word",t.innerText)})),text.lines.forEach((function(line,t){line.innerHTML='<span class="line-inner">'.concat(line.innerHTML,"</span>"),line.setAttribute("data-line",line.innerText),line.setAttribute("data-line-idx",t)})),e=Object(c.a)(t.querySelectorAll(".line-inner .char")),n=Object(c.a)(t.querySelectorAll(".line-inner")),t.style.opacity=1,t.classList.add("splitted")}};return{in:function(t){var c,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.8,d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.08;o(t),t.style.opacity=1;var _=r.a.timeline();null!==(c=e)&&void 0!==c&&c.length&&n.forEach((function(t){_.to(t.querySelectorAll(".char"),{duration:l,x:"0%",stagger:d,ease:"expo.out"},0),_.to(t.querySelectorAll(".char"),{duration:1.5*l,opacity:1,stagger:d,ease:"power3.out"},0)}))},in2:function(t){var e,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.8,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.15;o(t,"lines, words"),t.style.opacity=1,null!==(e=n)&&void 0!==e&&e.length&&n.forEach((function(t,i){setTimeout((function(){r.a.to(t.querySelectorAll('[data-line-idx="'.concat(i,'"] .word-inner')),{duration:c,y:"0%",opacity:1,ease:"expo.out"})}),i*l*1e3)}))},in3:function(t){var e,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.2;if(o(t,"lines"),t.style.opacity=1,null!==(e=n)&&void 0!==e&&e.length){var d=n.reverse();r.a.to(d,{duration:c,y:"0%",rotation:0,stagger:l,ease:"expo.out"}),r.a.to(d,{duration:1.5*c,stagger:l,opacity:1,ease:"expo.out"})}}}}),v=function(){var time=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(t){setTimeout((function(){t()}),time)}))},f="expo.out",h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2.3;NodeList.prototype.animation=function(t){this.length>0&&r.a.to(this,t)},t.querySelectorAll("[data-a-l]").animation({duration:2.5,scaleX:1,delay:.5,ease:f,stagger:.2}),t.querySelectorAll("[data-a-img]").animation({duration:2,delay:.5,opacity:1,ease:f,stagger:.4}),t.querySelectorAll("[data-a-img] div").animation({duration:2.5,delay:.5,scale:1,ease:f,stagger:.4}),t.querySelectorAll("[data-a-t]").animation({duration:2,delay:.5,opacity:1,y:0,ease:f,stagger:.4}),t.querySelectorAll("[data-a-o]").animation({duration:2,delay:.5,opacity:1,ease:f,stagger:.4});var n=t.querySelector("[data-a-thesis]"),c=t.querySelectorAll("[data-a-title]"),l=t.querySelectorAll("[data-a-h]"),h=t.querySelectorAll("[data-a-p]"),m=t.querySelector("[data-a-img-main]");if(m){var y=m.querySelector(".img-wrap"),image=y.querySelector("div"),w=image.querySelector("img"),x=r.a.timeline();x.to(image,{duration:2,y:0,ease:"power2.inOut"},.5),x.to(w,{duration:2,scale:1,ease:"power2.inOut"},.5),x.to(y,{duration:2,y:0,ease:"power2.inOut"},.5)}c.length&&c.forEach(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(300*i);case 2:_().in(e);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),l.length&&l.forEach(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(300*i);case 2:_().in3(n,e);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),h.length&&h.forEach(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(300*(i+1));case 2:_().in2(n,e);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),n&&d().in(n,3)}},392:function(t,e,n){"use strict";n(11),n(36),n(396),n(17),n(43);var o=n(132),r=n(395),c=n.n(r),l=(n(68),n(390)),d=function(){},_=function(t){var e=document.querySelector("#scroll-container"),n=document.querySelector("[data-route]");n&&((t||d)(),e&&!e.classList.contains("sc-loaded")&&o.a.to(e,{duration:.5,opacity:1,onComplete:function(){e.classList.add("sc-loaded")}}),Object(l.a)(n,3))},v=n(387),f=function(){_(),document.querySelector("[data-wait]").removeAttribute("data-wait")},h={transition:function(){var t;null===(t=window.scetch)||void 0===t||null===(t=t.figures)||void 0===t||t.forEach((function(t){window.scetch.removeFigure(t._id)}));var e=document.querySelector(".rewealer"),n=document.querySelector(".rewealer-white");return{mode:"out-in",enter:function(t,r){var l=this;if(function(){if(window.ss)try{window.ss.reset()}catch(t){console.log(t)}window.ss&&(window.ss.isFixed=!1),setTimeout((function(){window.parallax&&window.parallax.update()}),0)}(),this.$route.query.anchor){t.style.opacity=0;var d=document.querySelector(this.$route.query.anchor);Object(v.anchorHandler)(d,(function(){o.a.to(t,{duration:.5,opacity:1}),l.$router.replace({query:null})}))}o.a.to(e,{duration:.5,opacity:0,onComplete:r}),o.a.to(n,{duration:.5,opacity:0}),document.querySelector("[data-wait]")?c()(document.querySelector("[data-wait]"),f):_()},leave:function(t,r){window.ss&&(window.ss.isFixed=!0),o.a.fromTo(e,{y:"100%",opacity:1},{duration:1.5,y:"0%",delay:.2,ease:"power1.inOut",onComplete:r}),o.a.fromTo(n,{opacity:0},{duration:1,opacity:.8,ease:"power1.inOut"})}}},computed:{isLoaded:function(){return this.$store.state.app.loaded}},watch:{isLoaded:function(){this.isLoaded&&(document.querySelector("[data-wait]")?c()(document.querySelector("[data-wait]"),f):_())}}},m=n(24),component=Object(m.a)(h,undefined,undefined,!1,null,null,null);e.a=component.exports},393:function(t,e,n){"use strict";var o=n(3),r=(n(11),n(20),n(21),n(25),{mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initAnchor();case 2:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.anchorScroll&&this.anchorScroll.destroy()},methods:{initAnchor:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.bind(null,387));case 2:o=e.sent,r=o.anchorScroll,t.anchorScroll=r("[data-href]");case 5:case"end":return e.stop()}}),e)})))()}}}),c=n(24),component=Object(c.a)(r,undefined,undefined,!1,null,null,null);e.a=component.exports},394:function(t,e,n){"use strict";var o={mounted:function(){var t=this;this.$storybridge((function(){(new StoryblokBridge).on(["input","published","change"],(function(e){console.log(e,t.story.content),"input"===e.action?e.story.id===t.story.id&&(console.log("updating"),t.story=e.story,t.$forceUpdate()):t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))}),(function(t){console.log(t)}))}},r=n(24),component=Object(r.a)(o,undefined,undefined,!1,null,null,null);e.a=component.exports},449:function(t,e,n){"use strict";n.r(e);n(26),n(44);var o=n(3),r=(n(25),n(388)),c=n(177),l=n(393),d=(n(17),n(43),n(105),n(37),n(394)),_=n(102),v={mixins:[d.a],asyncData:function(t){return Object(_.a)(t.app,"/about/",t.app.i18n.locale)},computed:{bioScreens:function(){return this.story.content.biography_screens[0]},footer:function(){return this.story.content.biography_footer[0]}},methods:{breakLine:function(t){return t.replace(/(?:\r\n|\r|\n)/g,"</br>")},replaceSpace:function(t){var e=t.split(" ");return 3===e.length&&(e=[e[0],[e[1],e[2]].join("")]),(e=e.map((function(t){return"<p>".concat(t,"</p>")}))).join(" ")}}},f=n(24),h=Object(f.a)(v,undefined,undefined,!1,null,null,null).exports,m=n(392),y={components:{vuePicture:c.default,TheFooter:r.default},mixins:[l.a,h,m.a],data:function(){return{email:null}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)(t,"/global/contacts",t.$i18n.locale);case 2:n=e.sent,t.email=n.story.content.email;case 4:case"end":return e.stop()}}),e)})))()},head:function(){var t=this.story.content.meta[0],title=t.title,e=t.description;return{title:title,meta:[{hid:"description",name:"description",content:e},{hid:"og:title",name:"og:title",content:title},{hid:"og:description",name:"og:title",content:e},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:title},{name:"twitter:description",content:e}]}}},w=Object(f.a)(y,(function(){var t=this,e=t._self._c;return e("main",{attrs:{"data-route":"","data-about":""}},[e("section",{staticClass:"about",attrs:{"data-preload":""}},[e("div",{staticClass:"center-wrap"},[e("div",{staticClass:"about__header"},[e("div",{staticClass:"about__header-left"},[e("div",{staticClass:"back about__back",attrs:{"data-a-o":""}},[e("nuxt-link",{staticClass:"back__link",attrs:{to:t.localePath("index")}},[t._v("\n              "+t._s("en"===t.$i18n.locale?"back":"назад"))])],1),t._v(" "),e("div",{staticClass:"about__email"},[e("a",{attrs:{"data-a-h":"",href:"mailto:".concat(t.email)}},[t._v(t._s(t.email))])])]),t._v(" "),e("div",{staticClass:"about__header-right img-wrap",attrs:{"data-a-img":""}},[e("div",[e("vue-picture",{attrs:{url:t.bioScreens.picture.filename}})],1)])]),t._v(" "),e("div",{staticClass:"about__wrap",attrs:{"data-a-o":""}},[e("div",{staticClass:"about__wrap-left"},[e("div",{staticClass:"about__box"},[e("h2",{staticClass:"about__box-title"},[t._v(t._s(t.bioScreens.name_artist))]),t._v(" "),e("div",t._l(t.bioScreens.biography_items[0].items,(function(n){return e("div",{key:n._uid,staticClass:"about__box-row"},[e("div",{staticClass:"about__box-date",domProps:{innerHTML:t._s(t.replaceSpace(n.year))}}),t._v(" "),e("div",{staticClass:"about__box-info"},[t._v("\n                  "+t._s(n.description)+"\n                ")])])})),0)])]),t._v(" "),e("div",{staticClass:"about__wrap-right"},[e("div",{staticClass:"about__box"},[e("h2",{staticClass:"about__box-title"},[t._v("\n              "+t._s(t.bioScreens.EXHIBITIONS)+"\n            ")]),t._v(" "),e("div",t._l(t.bioScreens.exhibition[0].items,(function(n){return e("div",{key:n._uid,staticClass:"about__box-row"},[e("div",{staticClass:"about__box-date"},[t._v(t._s(n.year))]),t._v(" "),e("div",{staticClass:"about__box-info"},[t._v("\n                  "+t._s(n.description)+"\n                ")])])})),0)]),t._v(" "),e("div",{staticClass:"about__box"},[e("h2",{staticClass:"about__box-title"},[t._v("\n              "+t._s(t.bioScreens.personal_exhibitions)+"\n            ")]),t._v(" "),e("div",t._l(t.bioScreens.personal_exhibition[0].items,(function(n){return e("div",{key:n._uid,staticClass:"about__box-row"},[e("div",{staticClass:"about__box-date"},[t._v(t._s(n.year))]),t._v(" "),e("div",{staticClass:"about__box-info"},[t._v(t._s(n.description))])])})),0)])])]),t._v(" "),e("div",{staticClass:"about__text"},[e("p",[t._v("\n          "+t._s(t.bioScreens.text)+"\n        ")])])])]),t._v(" "),e("section",{staticClass:"contact"},[e("div",{staticClass:"center-wrap"},[e("div",{staticClass:"contact__wrap"},[e("div",{staticClass:"contact__wrap-right contact__wrap-right--mobile"},[e("div",{staticClass:"contact__box"},[e("div",{staticClass:"contact__box-row"},[e("div",{staticClass:"contact__box-title"},[t._v(t._s(t.footer.techique))]),t._v(" "),e("div",{staticClass:"contact__box-info"},[e("p",[t._v(t._s(t.footer.techique_description))])])]),t._v(" "),e("div",{staticClass:"contact__box-row"},[e("div",{staticClass:"contact__box-title"},[t._v(t._s(t.footer.formats))]),t._v(" "),e("div",{staticClass:"contact__box-info"},[e("p",[t._v(t._s(t.footer.formats_description))])])])])]),t._v(" "),e("div",{staticClass:"contact__wrap-left"},[e("h2",{staticClass:"about__box-title"},[t._v(t._s(t.footer.contacts))]),t._v(" "),e("p",[t._v("Е")]),t._v(" "),e("a",{staticClass:"contact__email",attrs:{href:"mailto:".concat(t.email)}},[t._v(t._s(t.email))])]),t._v(" "),e("div",{staticClass:"contact__wrap-right"},[e("div",{staticClass:"contact__box contact__box--desktop"},[e("div",{staticClass:"contact__box-row"},[e("div",{staticClass:"contact__box-title"},[t._v(t._s(t.footer.techique))]),t._v(" "),e("div",{staticClass:"contact__box-info"},[e("p",[t._v(t._s(t.footer.techique_description))])])]),t._v(" "),e("div",{staticClass:"contact__box-row"},[e("div",{staticClass:"contact__box-title"},[t._v(t._s(t.footer.formats))]),t._v(" "),e("div",{staticClass:"contact__box-info"},[e("p",[t._v(t._s(t.footer.formats_description))])])])]),t._v(" "),e("div",{staticClass:"contact__box"},[e("div",{staticClass:"contact__box-row"},[e("div",{staticClass:"contact__box-title"},[t._v(t._s(t.footer.photo))]),t._v(" "),e("div",{staticClass:"contact__box-info"},[e("p",[t._v(t._s(t.footer.photo_description))])])]),t._v(" "),e("div",{staticClass:"contact__box-row"},[e("div",{staticClass:"contact__box-title"},[t._v(t._s(t.footer.design))]),t._v(" "),e("div",{staticClass:"contact__box-info"},[e("p",[t._v(t._s(t.footer.design_description))])])])])])])])]),t._v(" "),e("the-footer",{attrs:{bg:!0}})],1)}),[],!1,null,null,null);e.default=w.exports;installComponents(w,{TheFooter:n(388).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8,7],{324:function(t,e,r){"use strict";r.r(e),r.d(e,"anchorHandler",(function(){return o})),r.d(e,"anchorScroll",(function(){return l}));var n=r(159),c=(r(11),r(39),r(117)),o=function(t,e){var r=e||function(){},n=window.pageYOffset,o=t.offsetTop-n;if(window.innerWidth>=1024)c.a.to(window.ss.state,{duration:1,target:o,onComplete:r});else{var l=document.querySelector("#scroll-container");c.a.to(l,{duration:1,scrollTop:o,onComplete:r})}},l=function(t){var e=Object(n.a)(document.querySelectorAll(t)),r=[];return e.forEach((function(link){var t=function(t){return function(t,link){t.preventDefault();var e=link.getAttribute("data-href"),r=document.querySelector(e);r?o(r):console.warn("target is not defined")}(t,link)};r.push(t),link.addEventListener("click",t)})),{destroy:function(){e.forEach((function(link,i){link.removeEventListener("click",r[i])}))}}}},328:function(t,e,r){"use strict";r.r(e);r(16),r(52),r(91);var n=r(324),c={methods:{onClick:function(t){var e=/.*\//m,data=t.currentTarget.getAttribute("data-anchor-href"),r=data.replace(e,""),n=data.match(e,"")[0];this.$route.path!==n?this.$router.push({path:this.localePath(n.replace("/","")),query:{anchor:r}}):this.goToAnchor(r)},goToAnchor:function(t){var e=document.querySelector(t);Object(n.anchorHandler)(e)}}},o=r(23),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,r){"use strict";r.r(e);var n=r(3),c=(r(11),r(19),r(20),r(24),r(328)),o=r(160),l={components:{AnchorLink:c.default,VuePicture:o.default},props:{images:{type:Array,default:function(){return[]}},story:{type:Object,default:function(){}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initImages();case 2:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.mp&&this.mp.destroy()},methods:{initImages:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(window.innerWidth>960)){e.next=10;break}if(n=t.$refs.parent,c=t.$refs.child,n&&c){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,r.e(36).then(r.bind(null,389));case 7:o=e.sent,new(0,o.ExpoImages)(n,c);case 10:case"end":return e.stop()}}),e)})))()}}},d=r(23),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.story.content?r("div",{staticClass:"stage"},[r("div",{staticClass:"center-wrap"},[r("div",{staticClass:"stage__list anchors"},[r("div",{ref:"stageParent",staticClass:"stage__list-wrap"},[r("div",{staticClass:"stage__images"},t._l(t.images,(function(image,e){return r("div",{directives:[{name:"multi-ref",rawName:"v-multi-ref:child",arg:"child"}],key:e,staticClass:"stage__img-wrap img-wrap",attrs:{"data-s-idx":e}},[r("div",{staticClass:"stage__img-container"},[r("vue-picture",{attrs:{url:image.first_picture.filename}})],1),t._v(" "),r("div",{staticClass:"stage__img-container"},[r("vue-picture",{attrs:{url:image.second_picture.filename}})],1)])})),0),t._v(" "),t._l(t.story.content.periods,(function(e,n){return r("anchor-link",{directives:[{name:"multi-ref",rawName:"v-multi-ref:parent",arg:"parent"}],key:e._uid,staticClass:"stage__list-row",attrs:{"data-parent-idx":n,"data-anchor-href":"periods/#period-"+(n+1)}},[r("div",{staticClass:"stage__list-info"},[r("div",{staticClass:"stage__list-number"},[t._v("№0"+t._s(n+1))]),t._v(" "),r("div",{staticClass:"stage__list-date"},[t._v(t._s(e.date))])])])}))],2)])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AnchorLink:r(328).default})}}]);
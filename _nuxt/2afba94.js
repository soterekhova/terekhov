(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{401:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return l}));var n=new(r(413).a)({domain:t.env.IMGIX_DOMAIN||"terekhov.imgix.net",secureURLToken:t.env.IMGIX_KEY||"MNN7XeePPsFyC8Ys"}),l=function(t){return n.buildURL(t,{})}}).call(this,r(134))},412:function(t,e,r){"use strict";r.r(e);var n=r(401),l=r(164),c={props:{url:{type:String,default:""}},computed:{getWebpUrl:function(){return Object(l.a)(this.url)},fullUrl:function(){var t=this.$store.state.app.isWebp?this.getWebpUrl:this.url;return Object(n.a)(t)}}},o=r(23),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("picture",[e("source",{attrs:{srcset:t.getWebpUrl}}),t._v(" "),e("img",{attrs:{src:t.url,alt:"","data-gl":"","data-gl-parallax":"1","data-src":t.fullUrl}})])}),[],!1,null,null,null);e.default=component.exports}}]);
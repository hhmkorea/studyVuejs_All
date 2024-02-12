(function(){"use strict";var n={5784:function(n,t,e){var o=e(7764),r=e(4108);const i={id:"app"};function s(n,t){const e=(0,r.E1)("router-view");return(0,r.Wz)(),(0,r.An)("div",i,[(0,r.K2)(e)])}var a=e(4100);const l={},u=(0,a.c)(l,[["render",s]]);var c=u,d=e(6248),f=e(9096);const v={class:"app"},p=(0,r.QD)("h1",null,"5월 마지막주 영화 예매 순위",-1),m={class:"movies"},h={class:"rank"},Q=["src"],D={class:"detail"},g={class:"tit"},b={class:"rate"},y={class:"num"};function O(n,t,e,o,i,s){const a=(0,r.E1)("router-link");return(0,r.Wz)(),(0,r.An)("div",v,[p,(0,r.QD)("ul",m,[((0,r.Wz)(!0),(0,r.An)(r.ae,null,(0,r.mi)(i.movies,(n=>((0,r.Wz)(),(0,r.An)("li",{key:n.id,class:"item"},[(0,r.QD)("span",h,(0,f.WA)(n.id),1),(0,r.K2)(a,{to:{name:"show",params:{id:n.id}}},{default:(0,r.Ql)((()=>[(0,r.QD)("img",{src:n.poster,class:"poster"},null,8,Q)])),_:2},1032,["to"]),(0,r.QD)("div",D,[(0,r.QD)("strong",g,(0,f.WA)(n.name),1),(0,r.QD)("span",b,[(0,r.mY)("예매율 "),(0,r.QD)("span",y,(0,f.WA)(n.rate),1)]),(0,r.K2)(a,{to:{name:"show",params:{id:n.id}},class:"link"},{default:(0,r.Ql)((()=>[(0,r.mY)("자세히보기")])),_:2},1032,["to"])])])))),128))])])}var W={created(){this.$http.get("/api/movies").then((n=>{this.movies=n.data})).catch((n=>{alert(n),console.log(n)}))},data(){return{movies:[]}}};const w=(0,a.c)(W,[["render",O]]);var A=w;const k={class:"detail"},j=["src"],x=(0,r.QD)("h2",null,"영화정보",-1),_={class:"info"},z=(0,r.QD)("dt",null,"감독",-1),T=(0,r.QD)("dt",null,"출연",-1),M=(0,r.QD)("dt",null,"러닝타임",-1),P=(0,r.QD)("h2",null,"줄거리",-1),S=["innerHTML"];function $(n,t,e,o,i,s){const a=(0,r.E1)("router-link");return(0,r.Wz)(),(0,r.An)("div",k,[(0,r.QD)("h1",null,(0,f.WA)(n.movie.name),1),(0,r.QD)("img",{src:n.movie.poster,class:"poster"},null,8,j),(0,r.QD)("section",null,[x,(0,r.QD)("dl",_,[z,(0,r.QD)("dd",null,(0,f.WA)(n.movie.director),1),T,(0,r.QD)("dd",null,(0,f.WA)(n.movie.actors),1),M,(0,r.QD)("dd",null,(0,f.WA)(n.movie.time),1)])]),(0,r.QD)("section",null,[P,(0,r.QD)("p",{innerHTML:n.movie.synopsis,class:"synopsis"},null,8,S)]),(0,r.K2)(a,{to:{name:"index",params:{id:n.movie.id}},class:"link"},{default:(0,r.Ql)((()=>[(0,r.mY)("돌아가기")])),_:1},8,["to"])])}var E={created:function(){let n=this.$route.params.id;this.$http.get("/api/movies/${"+n+"}").then((n=>{this.movie=n.data[0]}))},data:function(){return{movie:{}}}};const K=(0,a.c)(E,[["render",$]]);var Y=K;const C=[{path:"/",name:"index",component:A},{path:"/:id",name:"show",component:Y}],H=(0,d.gv)({history:(0,d.oz)(),routes:C});var L=H,F=e(5232);const q=(0,o.W0)(c);q.config.globalProperties.$axios=F.c,q.use(L),q.mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return n[o].call(i.exports,i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,i){if(!o){var s=1/0;for(c=0;c<n.length;c++){o=n[c][0],r=n[c][1],i=n[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(e.O).every((function(n){return e.O[n](o[l])}))?o.splice(l--,1):(a=!1,i<s&&(s=i));if(a){n.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[o,r,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,i,s=o[0],a=o[1],l=o[2],u=0;if(s.some((function(t){return 0!==n[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(l)var c=l(e)}for(t&&t(o);u<s.length;u++)i=s[u],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[999],(function(){return e(5784)}));o=e.O(o)})();
//# sourceMappingURL=app.d8b96676.js.map
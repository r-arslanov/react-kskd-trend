(this["webpackJsonpreact-kskd-trend"]=this["webpackJsonpreact-kskd-trend"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(3),a=n.n(o),i=(n(12),n.p,n(13),n(4)),r=n(5),l=n(7),u=n(6),d=(n(14),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={names:[]},e}return Object(r.a)(n,[{key:"getNames",value:function(e){fetch("http://my-develop.ddns.net/names.php").then((function(e){return e.json()})).then((function(t){e(t)}))}},{key:"componentDidMount",value:function(){var e=this;console.log("component dud mount"),this.getNames((function(t){e.setState({names:t.names})}))}},{key:"componentDidUpdate",value:function(){console.log("component did update")}},{key:"render",value:function(){return console.log(this.state),Object(d.jsx)("div",{className:"DpListContainer",children:Object(d.jsx)("ul",{children:this.state.names.map((function(e){return Object(d.jsx)("li",{children:e.name})}))})})}}]),n}(c.Component);var j=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"ControlDiv",children:[Object(d.jsx)("h1",{className:"TextHeader",children:"This is control"}),Object(d.jsx)(h,{})]}),Object(d.jsx)("div",{className:"ContentDiv",children:Object(d.jsx)("h1",{className:"TextHeader",children:"This is Content"})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.486cf3f2.chunk.js.map
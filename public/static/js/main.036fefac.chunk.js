(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(e,t,n){e.exports=n(60)},60:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),l=n(22),c=n.n(l),o=n(23),u=n(24),i=n(33),s=n(25),d=n(34),m=n(26),p=n.n(m),h=n(27),E=n(32),b=n(10);function f(){var e=Object(h.a)(["\n                {\n                    books {\n                        id\n                        title\n                        author\n                        description\n                    }\n                }\n            "]);return f=function(){return e},e}function v(){var e,t=Object(a.useState)([]),n=Object(E.a)(t,2),l=n[0],c=n[1],o=null===(e=l[l.length-1])||void 0===e?void 0:e.id;return Object(a.useEffect)((function(){new b.a({uri:"/graphql"}).query({query:Object(b.b)(f())}).then((function(e){c(e.data.books),console.log(o)}))}),[o]),r.a.createElement("div",null,l.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.author),r.a.createElement("i",null,e.description))})))}var g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).state={res:""},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"sendData",value:function(){var e=this;p.a.get("http://localhost:8000/add",{params:{title:document.getElementById("sendData-title").value,author:document.getElementById("sendData-author").value,description:document.getElementById("sendData-description").value}}).then((function(t){console.log("res:"+t),e.setState({res:t.data}),document.getElementById("req-response").innerText=e.state.res})).catch((function(t){e.setState({res:t}),document.getElementById("req-response").innerText=e.state.res,console.log(t)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("input",{id:"sendData-title",placeholder:"Title"}),r.a.createElement("br",null),r.a.createElement("input",{id:"sendData-author",placeholder:"Author"}),r.a.createElement("br",null),r.a.createElement("input",{id:"sendData-description",placeholder:"Description"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return e.sendData()}},"Send"),r.a.createElement("br",null),r.a.createElement("p",{id:"req-response"},"request's response goes here..."),r.a.createElement(v,null)))}}]),t}(a.Component);c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.036fefac.chunk.js.map
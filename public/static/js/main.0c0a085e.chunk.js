(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{50:function(e,t,n){e.exports=n(64)},56:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),l=n.n(c),o=n(23),u=n(22),i=n(48),s=n(8),p=n(20),d=n(17),m=n.n(d),f=n(21),E=n(27),h=n(26),b=n(78),v=n(25),g=n(15),k=n.n(g);function O(){var e=Object(f.a)(["\n{\n  posts {\n    id\n    postTitle\n    postBody\n    author\n    postLikes\n  }\n}\n"]);return O=function(){return e},e}var j=k()(O());n(56);function $(){var e=Object(f.a)(["\n        mutation addBook($title: String, $author: String, $description: String){\n          addBook(title: $title, author: $author, description: $description) {\n            id\n            title\n            author\n            description\n          }\n        }\n    "]);return $=function(){return e},e}function y(){var e=Object(f.a)(["\n        mutation deleteBook($_id: String){\n          deleteBook(_id: $_id) { id }\n        }\n    "]);return y=function(){return e},e}function S(e){var t=Object(a.useState)([]),n=Object(h.a)(t,2),c=n[0],l=n[1],o=Object(v.a)(),u=r.a.createRef(),i=r.a.createRef(),s=r.a.createRef(),d=Object(v.b)(j),f=d.loading,g=d.error,O=d.data;if(Object(a.useEffect)((function(){O&&l(O.posts)}),[O]),g)throw new g;var S=function(){var e=Object(E.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.mutate({variables:{_id:t},mutation:k()(y())});case 2:return n=e.sent,e.next=5,n.data.deleteBook.id;case 5:a=e.sent,l(c.filter((function(e){return e.id!==a})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(E.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.mutate({variables:{title:u.current.value,author:i.current.value,description:s.current.value},mutation:k()($())});case 2:return t=e.sent,e.next=5,t.data.addPost;case 5:n=e.sent,l([].concat(Object(p.a)(c),[n]));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return f?r.a.createElement("p",null,"Loading..."):c.length>0?r.a.createElement("div",null,r.a.createElement("input",{ref:u,placeholder:"Title"}),r.a.createElement("br",null),r.a.createElement("input",{ref:i,placeholder:"Author"}),r.a.createElement("br",null),r.a.createElement("input",{ref:s,placeholder:"Description"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return x()}},"Send"),r.a.createElement("br",null),r.a.createElement("p",{id:"req-response"},"request's response goes here..."),r.a.createElement("div",{className:"booksOuter"},c.map((function(e){return r.a.createElement("div",{key:e.id,className:"bookContainer"},r.a.createElement("a",{href:"/post/".concat(e.id),style:{display:"inline",fontWeight:"bold",fontSize:"20px"}},e.postTitle),r.a.createElement(b.a,{onClick:function(){return S(e.id)},style:{background:"#000",color:"#fff",marginLeft:10}},"X"),r.a.createElement("p",null,e.author),r.a.createElement("i",null,e.postBody))})))):null}function x(){return r.a.createElement("div",{className:"Home"},r.a.createElement(S,null))}function w(){var e=Object(f.a)(["\n        mutation updateBook($_id: String, $title: String, $author: String, $description: String){\n          updateBook(_id: $_id, title: $title, author: $author, description: $description) {\n            id\n            title\n            author\n            description\n          }\n        }\n    "]);return w=function(){return e},e}function _(){var e=Object(f.a)(["\n          query book($_id: String){\n            book(_id: $_id) {\n              id\n              title\n              author\n              description\n            }\n          }\n      "]);return _=function(){return e},e}function B(){var e=Object(u.f)().topicId,t=Object(v.a)(),n=Object(a.useState)(0),c=Object(h.a)(n,2),l=c[0],o=c[1],i=r.a.createRef(),s=r.a.createRef(),p=r.a.createRef();Object(a.useEffect)((function(){(function(){var n=Object(E.a)(m.a.mark((function n(){var a,r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.query({variables:{_id:e},query:k()(_())});case 2:return a=n.sent,n.next=5,a.data.book;case 5:r=n.sent,o(r),console.log(l);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}));var d=function(){var e=Object(E.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("*********************"),console.log(n),console.log(i.current.value),console.log("*********************"),e.next=6,t.mutate({variables:{_id:n,title:i.current.value,author:s.current.value,description:p.current.value},mutation:k()(w())});case 6:a=e.sent,console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 0===l?r.a.createElement("h3",null,"Loading..."):r.a.createElement("div",null,r.a.createElement("h3",null,l.title),r.a.createElement("p",null,l.author),r.a.createElement("p",null,l.description),r.a.createElement("input",{ref:i,defaultValue:l.title}),r.a.createElement("br",null),r.a.createElement("input",{ref:s,defaultValue:l.author}),r.a.createElement("br",null),r.a.createElement("input",{ref:p,defaultValue:l.description}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return d(l.id)}},"Submit"))}function q(){var e=Object(u.g)();return r.a.createElement("div",null,r.a.createElement("h2",null,"Post ..."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(e.url,"/single")},"Single post (example)"))),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"".concat(e.path,"/:topicId")},r.a.createElement(B,null)),r.a.createElement(u.a,{path:e.path},r.a.createElement("h3",null,"Please select a topic."))))}var R=new i.a({uri:"https://archetypeofficial.herokuapp.com/graphql"});l.a.render(r.a.createElement((function(){return r.a.createElement(s.a,{client:R},r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/post"},"Post")),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/post"},r.a.createElement(q,null)),r.a.createElement(u.a,{path:"/"},r.a.createElement(x,null)))))))}),null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.0c0a085e.chunk.js.map
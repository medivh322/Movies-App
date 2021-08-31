(this.webpackJsonpts_react_redux=this.webpackJsonpts_react_redux||[]).push([[0],{27:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=27},28:function(e,t){},41:function(e,t,n){},45:function(e,t){},46:function(e,t){},47:function(e,t){},48:function(e,t){},49:function(e,t){},50:function(e,t){},52:function(e,t,n){"use strict";n.r(t);var c,r,a=n(1),i=n.n(a),s=n(19),o=n.n(s),l=n(12),u=n(15),d=n(3),O=function(e){var t=e.title,n=e.year,c=e.poster,r=e.id;return Object(d.jsx)("div",{className:"col-3",children:Object(d.jsx)(u.b,{to:"/Movies-App/film/".concat(r),children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:c,alt:"",className:"card__img"}),Object(d.jsx)("p",{className:"card__title",children:t}),Object(d.jsx)("div",{className:"card__year",children:n})]})})})},j=Object(l.b)((function(e){return{states:e}}),null)((function(e){return Object(d.jsx)("div",{className:"row",children:e.states.filmList?e.states.filmList.map((function(e){return Object(d.jsx)(O,{title:e.Title,id:e.imdbID,poster:e.Poster,year:e.Year},e.imdbID)})):Object(d.jsx)("div",{className:"col-12",children:e.states.payload})})}));function b(e,t){return{type:c.FETCH_FILMS,list:e,payload:t}}function f(e,t){return{type:c.SET_SORT_FILMS,list:e,sortOrder:t}}!function(e){e.LOADER="LOADER",e.FETCH_FILMS="FETCH_FILMS",e.FETCH_DETAIL_FILM="FETCH_DETAIL_FILM",e.SORT_COL="SORT_COL",e.SET_SORT_FILMS="SET_SORT_FILMS"}(c||(c={})),function(e){e.SHOW_LOADER="SHOW_LOADER",e.HIDE_LOADER="HIDE_LOADER"}(r||(r={}));var p=n(6),h=(n(41),{fetchDetailFilm:function(e){return{type:c.FETCH_DETAIL_FILM,detailData:e}}}),x=Object(l.b)((function(e){return{state:e}}),h)((function(e){var t=Object(p.e)();return Object(a.useEffect)((function(){fetch("http://www.omdbapi.com/?apikey=2bf0e0c6&i=".concat(t.id)).then((function(e){return e.json()})).then((function(t){e.fetchDetailFilm(t,!0)}))}),[e.load]),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:e.state.detailFilm.Poster}),Object(d.jsx)("p",{children:e.state.detailFilm.BoxOffice}),Object(d.jsx)("p",{children:e.state.detailFilm.Language}),Object(d.jsx)("div",{children:e.state.detailFilm.Plot})]})})),m={fetchFilms:b,SortingMovies:function(e){return{type:c.SORT_COL,sortKey:e}}},_=Object(l.b)((function(e){return{state:{filmList:e.filmList,load:e.load}}}),m)((function(e){var t=Object(a.useRef)(null),n=Object(l.c)(),c=e.SortingMovies;return Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsxs)("div",{className:"navigation",children:[Object(d.jsx)(u.c,{to:"/Movies-App/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(d.jsx)(u.c,{to:"/Movies-App/about",children:"\u041e \u043a\u043e\u043c\u0430\u043d\u0434\u0435"})]}),Object(d.jsxs)(p.a,{path:"/Movies-App/",exact:!0,children:[Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)("input",{type:"text",ref:t,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430 \u043d\u0430 \u0430\u043d\u0433\u043b"}),Object(d.jsx)("button",{onClick:function(e){null!==t.current&&n({type:"FETCH_MOVIE",id:t.current.value})},children:"\u041f\u043e\u0438\u0441\u043a"}),Object(d.jsxs)("div",{className:"sorting",children:[Object(d.jsx)("p",{onClick:function(){return c("Year")},children:"\u0413\u043e\u0434"}),Object(d.jsx)("p",{onClick:function(){return c("Title")},children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})]}),e.load?Object(d.jsx)("div",{className:"spinner-border",role:"status",children:Object(d.jsx)("span",{className:"sr-only",children:"Loading..."})}):""]}),Object(d.jsx)(j,{})]}),Object(d.jsx)(p.a,{path:"/Movies-App/about",exact:!0,children:Object(d.jsx)("div",{children:"Hello, my name is Emil"})}),Object(d.jsx)(p.a,{path:"/Movies-App/film/:id",exact:!0,children:Object(d.jsx)(x,{})})]})})})),v=n(18),L=n(31),E=n(11),F={filmList:[],detailFilm:[],load:!1,sortKey:"",sortOrder:"desc"};var T=n(29),y=n(13),S=n.n(y),w=n(14),D=(n(43),n(30)),M=S.a.mark(R),I=S.a.mark(N),C=S.a.mark(H);function R(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.d)("FETCH_MOVIE",H);case 2:return e.next=4,Object(w.d)(c.SORT_COL,N);case 4:case"end":return e.stop()}}),M)}var A=R,g=function(e){return e};function N(e){var t,n,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.c)(g);case 2:return t=e.sent,n="desc"==t.sortOrder?"asc":"desc",e.next=6,Object(D.orderBy)(t.filmList,t.sortKey,n);case 6:return c=e.sent,e.next=9,Object(w.b)(f(c,n));case 9:case"end":return e.stop()}}),I)}function H(e){var t;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,Object(w.b)({type:c.LOADER,load:!0});case 3:return n.next=5,Object(w.a)(k,e.id);case 5:return t=n.sent,n.next=8,Object(w.b)(b(t.Search,t.Search?"":"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"));case 8:return n.next=10,Object(w.b)({type:c.LOADER,load:!1});case 10:case"end":return n.stop()}}),C)}function k(e){return K.apply(this,arguments)}function K(){return(K=Object(T.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?apikey=2bf0e0c6&s=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=Object(L.a)(),P=Object(v.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.FETCH_FILMS:return Object(E.a)(Object(E.a)({},e),{},{filmList:t.list,payload:t.payload});case c.FETCH_DETAIL_FILM:return Object(E.a)(Object(E.a)({},e),{},{detailFilm:t.detailData});case c.LOADER:return Object(E.a)(Object(E.a)({},e),{},{load:t.load});case c.SORT_COL:return Object(E.a)(Object(E.a)({},e),{},{sortKey:t.sortKey});case c.SET_SORT_FILMS:return Object(E.a)(Object(E.a)({},e),{},{filmList:t.list,sortOrder:t.sortOrder});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(Object(v.a)(B)));B.run(A);var W=P;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(l.a,{store:W,children:Object(d.jsx)(_,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.65155ec3.chunk.js.map
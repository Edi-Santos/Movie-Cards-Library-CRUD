(this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]=this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]||[]).push([[0],{27:function(e,t,a){e.exports=a(40)},32:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(23),o=a.n(r),l=(a(32),a(10)),c=a(1),u=a(12),s=a.n(u),m=a(15),d=a(3),h=a(4),v=a(7),p=a(6),b=a(5),f=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"load-screen"},i.a.createElement("p",null,"Carregando..."))}}]),a}(n.Component),g=a(17),y=a(13),E=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state=Object(y.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(g.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_title"},i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}),"T\xedtulo"))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_subtitle"},i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}),"Subt\xedtulo"))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("label",{htmlFor:"movie_image"},i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}}),"Imagem"))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_storyline"},i.a.createElement("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}}),"Sinopse"))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_genre"},"G\xeanero",i.a.createElement("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense"),i.a.createElement("option",{value:"fantasy"},"Fantasia"))))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"movie_rating"},i.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}),"Avalia\xe7\xe3o"))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",null,this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()))}}]),a}(i.a.Component),k=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.id,a=e.title,n=e.subtitle,r=e.imagePath,o=e.storyline;return i.a.createElement("div",{className:"card-item","data-testid":"movie-card"},i.a.createElement("img",{src:r,alt:"Cartaz do filme"}),i.a.createElement("h2",null,a),i.a.createElement("h3",null,n),i.a.createElement("p",null,o),i.a.createElement(l.b,{to:"movies/".concat(t)},"VER DETALHES"))}}]),a}(i.a.Component),O=a(26),j=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(j));var S=function(){return JSON.parse(localStorage.getItem("movies"))},w=function(e){return localStorage.setItem("movies",JSON.stringify(e))},I=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},M=function(e){var t=S().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){I(t)(e)}))},C=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={status:"loading",movie:{},shouldRedirect:!1},n.takeMovie=n.takeMovie.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.takeMovie()}},{key:"handleSubmit",value:function(e){!function(e){new Promise((function(t){var a=S().map((function(t){return t.id===parseInt(e.id,10)?Object(y.a)(Object(y.a)({},t),e):t}));w(a),I("OK")(t)}))}(e),this.setState({shouldRedirect:!0})}},{key:"takeMovie",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,M(t);case 3:a=e.sent,this.setState({status:"",movie:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,a=e.shouldRedirect,n=e.movie;return a?i.a.createElement(c.a,{to:"/"}):"loading"===t?i.a.createElement(f,null):i.a.createElement("div",{"data-testid":"edit-movie"},i.a.createElement(E,{movie:n,onSubmit:this.handleSubmit}))}}]),a}(n.Component),_=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={movie:{},loading:!0},e.takeMovies=e.takeMovies.bind(Object(v.a)(e)),e.details=e.details.bind(Object(v.a)(e)),e.deleteMovie=e.deleteMovie.bind(Object(v.a)(e)),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.takeMovies()}},{key:"takeMovies",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,M(t);case 3:a=e.sent,this.setState({movie:a,loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteMovie",value:function(){!function(e){var t=S();t=t.filter((function(t){return t.id!==parseInt(e,10)})),w(t),new Promise((function(e){I({status:"OK"})(e)}))}(this.props.match.params.id)}},{key:"details",value:function(){var e=this.state.movie,t=e.title,a=e.storyline,n=e.imagePath,r=e.genre,o=e.rating,c=e.subtitle,u=e.id;return i.a.createElement("div",{"data-testid":"movie-details"},i.a.createElement("img",{alt:"Movie Cover",src:"../".concat(n)}),i.a.createElement("h3",null,"Title: ".concat(t)),i.a.createElement("p",null,"Subtitle: ".concat(c)),i.a.createElement("p",null,"Storyline: ".concat(a)),i.a.createElement("p",null,"Genre: ".concat(r)),i.a.createElement("p",null,"Rating: ".concat(o)),i.a.createElement(l.b,{to:"/"},"VOLTAR"),i.a.createElement(l.b,{to:"/movies/".concat(u,"/edit")},"EDITAR"),i.a.createElement(l.b,{to:"/",onClick:this.deleteMovie},"DELETAR"))}},{key:"render",value:function(){var e=this.state.loading;return i.a.createElement("div",null,e?i.a.createElement(f,null):this.details())}}]),a}(n.Component),R=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={movies:[],loading:!0},e.takeMovies=e.takeMovies.bind(Object(v.a)(e)),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.takeMovies()}},{key:"takeMovies",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=S();I(t)(e)}));case 2:t=e.sent,this.setState({movies:t,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return i.a.createElement("div",{className:"movie-list","data-testid":"movie-list"},a?i.a.createElement(f,null):t.map((function(e){return i.a.createElement(k,{key:e.title,movie:e})})))}}]),a}(n.Component),A=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={shouldRedirect:!1},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"handleSubmit",value:function(e){var t;t=e,new Promise((function(e){var a=S(),n=a[a.length-1].id+1,i=Object(y.a)(Object(y.a)({},t),{},{id:n});a=[].concat(Object(O.a)(a),[i]),w(a),I("OK")(e)})),this.setState({shouldRedirect:!0})}},{key:"render",value:function(){return this.state.shouldRedirect?i.a.createElement(c.a,{to:"/"}):i.a.createElement("div",{"data-testid":"new-movie"},i.a.createElement(E,{onSubmit:this.handleSubmit}))}}]),a}(n.Component),P=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component),x=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("h2",null,"Movie Cards Library CRUD"),i.a.createElement(l.b,{className:"add-card",to:"/movies/new"},"ADICIONAR CART\xc3O"))}}]),a}(i.a.Component);a(39);var F=function(){return i.a.createElement(l.a,null,i.a.createElement(x,null),i.a.createElement(c.d,null,i.a.createElement(c.b,{path:"/movies/new",component:A}),i.a.createElement(c.b,{path:"/movies/:id/edit",component:C}),i.a.createElement(c.b,{path:"/movies/:id",component:_}),i.a.createElement(c.b,{exact:!0,path:"/",component:R}),i.a.createElement(c.b,{path:"",component:P})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.14e3aff7.chunk.js.map
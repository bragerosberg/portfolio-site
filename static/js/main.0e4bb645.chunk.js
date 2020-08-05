(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,a){var n=a(31).uuid,r=[{key:n(),title:"React",strength:100},{key:n(),title:"HTML",strength:100},{key:n(),title:"CSS",strength:100},{key:n(),title:"Redux",strength:75},{key:n(),title:"jQuery",strength:70},{key:n(),title:"Bootstrap",strength:70}],l=[{key:n(),title:"Node.js",strength:100},{key:n(),title:"Express",strength:100},{key:n(),title:"MongoDB",strength:75},{key:n(),title:"mongoose",strength:75},{key:n(),title:"PostgreSQL",strength:75},{key:n(),title:"REST API",strength:75},{key:n(),title:"HTTP/JSON/AJAX",strength:75},{key:n(),title:"CLI",strength:75},{key:n(),title:"GraphQL",strength:50}],c=[{key:n(),title:"JavaScript/ES6",strength:100},{key:n(),title:"HTML5",strength:100},{key:n(),title:"CSS3",strength:100},{key:n(),title:"Python",strength:35},{key:n(),title:"C",strength:35}],i=[{key:n(),title:"Agile Development",strength:100},{key:n(),title:"Mob Programming",strength:100},{key:n(),title:"TDD",strength:100},{key:n(),title:"Working in Teams",strength:100},{key:n(),title:"SCRUM",strength:100}],o=[{key:n(),title:"NPM",strength:100},{key:n(),title:"GIT",strength:100},{key:n(),title:"Mocha",strength:100},{key:n(),title:"Linting",strength:100},{key:n(),title:"Jest",strength:70},{key:n(),title:"Chai",strength:70},{key:n(),title:"Heroku",strength:70},{key:n(),title:"Netlify",strength:70},{key:n(),title:"Docker",strength:70}];e.exports={frontEnd:r,backEnd:l,languages:c,principles:i,tools:o}},21:function(e,t,a){e.exports=a(43)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),i=(a(26),a(13)),o=a(1),s=a(7),m=a(8),g=a(10),p=a(9),h=(a(27),function(){return r.a.createElement("article",null,r.a.createElement("section",{className:"tech__logos"},r.a.createElement("img",{src:"https://i.imgur.com/AkbotMR.png",alt:"js"}),r.a.createElement("img",{src:"https://i.imgur.com/WCwxLaz.png",alt:"react"}),r.a.createElement("img",{src:"https://i.imgur.com/abOnPp4.png",alt:"nodejs"}),r.a.createElement("img",{src:"https://i.imgur.com/vJ8T5i8.png",alt:"express"}),r.a.createElement("img",{src:"https://i.imgur.com/2yH5rFb.png",alt:"mongodb"}),r.a.createElement("img",{src:"https://i.imgur.com/8KVSwvp.png",alt:"html5"}),r.a.createElement("img",{src:"https://i.imgur.com/GsdKN8c.png",alt:"css3"})),r.a.createElement("p",{className:"techstack__title"},'See all technologies and tools I work with under "Portfolio"'))}),u=(a(28),function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("section",{className:"homepage__wrapper"},r.a.createElement("img",{className:"portrait",src:"https://i.imgur.com/r7TD3K2.jpg",alt:"portrait"}),r.a.createElement("div",null,r.a.createElement("h1",{className:"homepage__name"},"Brage R\xf8sberg"),r.a.createElement("h1",{className:"homepage__title"},"Full Stack JavaScript Developer"),r.a.createElement("p",{className:"homepage__development"},"Page is currently under development, feel free to contact!."))),r.a.createElement(h,null))}}]),a}(r.a.Component)),E=(a(29),a(30),function(e){return console.log(e.title),r.a.createElement("section",{className:"progress--content"},r.a.createElement("h3",{className:"portfolio__experience--name"},e.title),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar bg-danger progress-bar-striped progress-bar-animated",role:"progressbar",style:{width:e.width}})))}),k=a(11),y=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("section",{className:"portfolio__experience"},r.a.createElement("div",{className:"portfolio__experience__card"},r.a.createElement("h2",{className:"portfolio__experience--category"},"Front End"),k.frontEnd.map((function(e){return r.a.createElement(E,{key:e.key,title:e.title,width:e.strength})}))),r.a.createElement("div",{className:"portfolio__experience__card"},r.a.createElement("h2",{className:"portfolio__experience--category"},"Back End"),k.backEnd.map((function(e){return r.a.createElement(E,{key:e.key,title:e.title,width:e.strength})}))),r.a.createElement("div",{className:"portfolio__experience__card"},r.a.createElement("h2",{className:"portfolio__experience--category"},"Languages"),k.languages.map((function(e){return r.a.createElement(E,{key:e.key,title:e.title,width:e.strength})}))),r.a.createElement("div",{className:"portfolio__experience__card"},r.a.createElement("h2",{className:"portfolio__experience--category"},"Tools"),k.tools.map((function(e){return r.a.createElement(E,{key:e.key,title:e.title,width:e.strength})}))),r.a.createElement("div",{className:"portfolio__experience__card"},r.a.createElement("h2",{className:"portfolio__experience--category"},"Principles"),k.principles.map((function(e){return r.a.createElement(E,{key:e.key,title:e.title,width:e.strength})})))))}}]),a}(r.a.Component),d=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("h1",{className:"main__header"},"Project "))}}]),a}(r.a.Component),f=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.github.com/bragerosberg"},"Github")),r.a.createElement("li",{className:"footer__author"},"Made by Brage R\xf8sberg - 2020"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/brage-rosberg"},"LinkedIn")))};a(36);var _=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar__routes"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/portfolio"},"Portfolio")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/project"},"Projects")))),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/portfolio"},r.a.createElement(y,null)),r.a.createElement(o.a,{path:"/project"},r.a.createElement(d,null)),r.a.createElement(o.a,{path:"/"},r.a.createElement(u,null))),r.a.createElement("section",{className:"footer__links"},r.a.createElement(f,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.0e4bb645.chunk.js.map
(window.webpackJsonploc=window.webpackJsonploc||[]).push([[0],{13:function(e,t,a){e.exports=a(38)},18:function(e,t,a){},19:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(11),s=a.n(l),o=(a(18),a(19),a(12)),c=a.n(o);a(37);var m=e=>n.a.createElement("div",{className:"resultsContent card"},n.a.createElement("strong",null,e.title),n.a.createElement("br",null),n.a.createElement("img",{src:e.image,alt:e.title}),n.a.createElement("p",null,e.description),n.a.createElement("br",null),n.a.createElement("p",null,n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},"Learn more")));var i=function(){const[e,t]=Object(r.useState)([]),[a,l]=Object(r.useState)(""),[s,o]=Object(r.useState)(""),[i,u]=Object(r.useState)(!1);return n.a.createElement("div",{className:"parallax"},n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"headerText"},n.a.createElement("h1",null,"Search the Library of Congress"),n.a.createElement("p",null,"Powered by the ",n.a.createElement("a",{href:"https://libraryofcongress.github.io/data-exploration/",target:"_blank",rel:"noopener noreferrer"},"LOC API"),n.a.createElement("br",null),"No-frills portal to search the Library of Congress collection.",n.a.createElement("br",null),"Returns first 150 results, when available.")),n.a.createElement("div",{className:"searchFormDiv"},n.a.createElement("form",{className:"searchForm",onSubmit:e=>{e.preventDefault(),u(!0),c.a.get("https://www.loc.gov/".concat(s,"/?q=").concat(a,"&fo=json")).then(e=>{t(e.data.results.slice(0,150)),console.log(e.data.results)}).then(()=>{u(!1)})}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("p",{className:"searchTextEntry"},n.a.createElement("strong",null,"Enter a search term:"),n.a.createElement("br",null),n.a.createElement("input",{className:"searchTerm form-control form-control-sm",title:"Enter a search term",value:a,onChange:e=>{e.preventDefault(),l(e.target.value)}}))),n.a.createElement("div",{className:"col"},n.a.createElement("p",{className:"formatSelectEntry"},n.a.createElement("strong",null,"Select media format:"),n.a.createElement("br",null),n.a.createElement("select",{title:"Select media format",className:"formatDropdown form-select-sm",value:s,onChange:e=>{e.preventDefault(),o(e.target.value)}},n.a.createElement("option",null,"Select media format"),n.a.createElement("option",{value:"photos"},"Photos"),n.a.createElement("option",{value:"audio"},"Audio"),n.a.createElement("option",{value:"film-and-videos"},"Film/Videos"),n.a.createElement("option",{value:"newspapers"},"Newspapers"),n.a.createElement("option",{value:"maps"},"Maps"),n.a.createElement("option",{value:"manuscripts"},"Manuscripts"),n.a.createElement("option",{value:"websites"},"Websites"),n.a.createElement("option",{value:"notated-music"},"Printed Music")))),n.a.createElement("div",{className:"col d-flex align-items-center"},!1===i&&n.a.createElement("button",{className:"btn btn-primary"},"Submit"),!0===i&&n.a.createElement("button",{class:"btn btn-primary",type:"button",disabled:!0},n.a.createElement("span",{class:"spinner-border spinner-border-sm","aria-hidden":"true"}),n.a.createElement("span",{class:"visually-hidden",role:"status"},"Loading..."))))))),n.a.createElement("div",{className:"resultsDiv"},e.map((e,t)=>n.a.createElement(m,{className:"singleResult",key:t,title:e.title,description:e.description,image:e.image_url[0],url:e.url})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(i,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.006b2e96.chunk.js.map
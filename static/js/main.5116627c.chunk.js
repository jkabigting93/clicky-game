(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Tommy Shelby","image":"../public/images/tommy-shelby.jpg","clicked":false},{"id":2,"name":"Arthur Shelby","image":"../public/images/arthur-shelby.jpg","clicked":false},{"id":3,"name":"John Shelby","image":"../public/images/john-shelby.jpg","clicked":false},{"id":4,"name":"Polly Gray","image":"../public/images/polly-gray.png","clicked":false},{"id":5,"name":"Michael Gray","image":"../public/images/michael-gray.jpg","clicked":false},{"id":6,"name":"Ada Shelby","image":"../public/images/ada-shelby.jpg","clicked":false},{"id":7,"name":"Grace Burgess","image":"../public/images/grace-burgess.jpg","clicked":false},{"id":8,"name":"Chester Campbell","image":"../public/images/chester-campbell.jpg","clicked":false},{"id":9,"name":"Alfie Solomons","image":"../public/images/alfie-solomons.jpg","clicked":false},{"id":10,"name":"Charlie Strong","image":"../public/images/charlie-strong.png","clicked":false},{"id":11,"name":"Johnny Dogs","image":"../public/images/johnny-dogs.jpg","clicked":false},{"id":12,"name":"Lizzie Starke","image":"../public/images/lizzie-starke.jpg","clicked":false}]')},,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),s=t(2),n=t.n(s),r=(t(14),t(3)),l=t(4),o=t(7),m=t(5),d=t(8),u=(t(15),function(e){return i.a.createElement("div",{onClick:function(){return e.setClicked(e.id)},className:"card col-md-3"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),g=(t(16),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),h=(t(17),function(e){return i.a.createElement("h1",{className:"title"},e.children)}),k=t(6),f=(t(18),0),p=0,b="Click each member of the hit BBC drama Peaky Blinders. But don't click anyone more than once, or you lose!",y=function(e){function a(){var e,t;Object(r.a)(this,a);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={matches:k,correctGuesses:f,bestScore:p,clickMessage:b},t.setClicked=function(e){var a=t.state.matches,c=a.filter((function(a){return a.id===e}));if(c[0].clicked){console.log("Correct: "+f),console.log("High Score: "+p),f=0,b="This character has already been picked, you lose!";for(var i=0;i<a.length;i++)a[i].clicked=!1;t.setState({clickMessage:b}),t.setState({correctGuesses:f}),t.setState({matches:a})}else if(f<11)c[0].clicked=!0,b="Good job, this is a new character!",++f>p&&(p=f,t.setState({bestScore:p})),a.sort((function(e,a){return.5-Math.random()})),t.setState({matches:a}),t.setState({correctGuesses:f}),t.setState({clickMessage:b});else{c[0].clicked=!0,f=0,b="You've clicked on every character!",p=12,t.setState({bestScore:p});for(var s=0;s<a.length;s++)a[s].clicked=!1;a.sort((function(e,a){return.5-Math.random()})),t.setState({matches:a}),t.setState({correctGuesses:f}),t.setState({clickMessage:b})}},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(g,null,i.a.createElement(h,null,"Peaky Blinders Memory Click Game"),i.a.createElement("h3",{className:"scoreSummary"},this.state.clickMessage),i.a.createElement("h3",{className:"scoreSummary card-header"},"Correct Guesses: ",this.state.correctGuesses,i.a.createElement("br",null),"Best Score: ",this.state.bestScore),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},this.state.matches.map((function(a){return i.a.createElement(u,{setClicked:e.setClicked,id:a.id,key:a.id,image:a.image})})))))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.5116627c.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),c=n.n(l),i=n(7),u=n(2),o=n(3),s=n(5),m=n(4),d=n(6),p=r.a.createContext(),h=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={players:[{name:"Will",id:1,score:0},{name:"Alex",id:2,score:0},{name:"Ashley",id:3,score:0},{name:"James",id:4,score:0}]},n.handleRemovePlayer=function(e){n.setState(function(t){return{players:t.players.filter(function(t){return t.id!==e})}})},n.handleUpdateScore=function(e,t){n.setState(function(n){return{players:n.players.map(function(n){return n.id===e&&(n.score=n.score+t),n})}})},n.handleAddPlayer=function(e){n.setState(function(t){var n=Math.max.apply(Math,Object(i.a)(t.players.map(function(e){return e.id})))+1;return{players:[].concat(Object(i.a)(t.players),[{name:e,score:0,id:n}])}})},n.getHighScore=function(){var e=Math.max.apply(Math,Object(i.a)(n.state.players.map(function(e){return e.score})));return e>0?e:null},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.Provider,{value:{players:this.state.players,actions:{addPlayer:this.handleAddPlayer,removePlayer:this.handleRemovePlayer,updateScore:this.handleUpdateScore,getHighScore:this.getHighScore}}},this.props.children)}}]),t}(a.Component),f=p.Consumer,y=function(){return r.a.createElement(f,null,function(e){var t=e.players,n=t.reduce(function(e,t){return e+t.score},0);return r.a.createElement("table",{className:"stats"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Players:"),r.a.createElement("td",null,t.length)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Points:"),r.a.createElement("td",null,n))))})},v=n(1),E=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={isRunning:!1,previousTime:null,elapsedTime:0},e.handleToggleRunning=e.handleToggleRunning.bind(Object(v.a)(Object(v.a)(e))),e.handleReset=e.handleReset.bind(Object(v.a)(Object(v.a)(e))),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.tickInterval=setInterval(this.tick.bind(this),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.tickInterval)}},{key:"tick",value:function(){if(this.state.isRunning){var e=Date.now();this.setState(function(t){return{previousTime:e,elapsedTime:t.elapsedTime+(e-t.previousTime)}})}}},{key:"handleToggleRunning",value:function(){this.state.isRunning||this.setState({previousTime:Date.now()}),this.setState(function(e){return{isRunning:!e.isRunning}})}},{key:"handleReset",value:function(){this.setState({elapsedTime:0})}},{key:"render",value:function(){var e=this.state,t=e.isRunning,n=e.elapsedTime;return r.a.createElement("div",{className:"stopwatch"},r.a.createElement("h2",null,"Stopwatch"),r.a.createElement("span",{className:"stopwatch-time"},Math.round(n/1e3)),r.a.createElement("button",{onClick:this.handleToggleRunning},t?"Stop":"Start"),r.a.createElement("button",{onClick:this.handleReset},"Reset"))}}]),t}(a.Component),b=function(){return r.a.createElement("header",null,r.a.createElement(y,null),r.a.createElement("h1",null,"Scoreboard"),r.a.createElement(E,null))},g=function(e){var t=e.playerId;return r.a.createElement(f,null,function(e){var n=e.players,a=e.actions;return r.a.createElement("div",{className:"counter"},r.a.createElement("button",{className:"counter-action decrement",onClick:function(){return a.updateScore(t,-1)}}," - "),r.a.createElement("span",{className:"counter-score"},n.find(function(e){return e.id===t}).score),r.a.createElement("button",{className:"counter-action increment",onClick:function(){return a.updateScore(t,1)}}," + "))})},j=function(e){return r.a.createElement("svg",{viewBox:"0 0 44 35",className:e.isLeader?"is-high-score":null},r.a.createElement("path",{d:"M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z",transform:"translate(0 0.301727)"}),r.a.createElement("rect",{width:"30.4986",height:"3.07759",transform:"translate(6.56987 31.5603)"}))},O=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.isLeader;return r.a.createElement("div",{className:"player"},r.a.createElement(f,null,function(e){var a=e.players,l=e.actions;return r.a.createElement("span",{className:"player-name"},r.a.createElement("button",{className:"remove-player",onClick:function(){return l.removePlayer(t)}},"\u2716"),r.a.createElement(j,{isLeader:n}),a.find(function(e){return e.id===t}).name)}),r.a.createElement(g,{playerId:t}))}}]),t}(a.PureComponent),S=function(){return r.a.createElement(f,null,function(e){var t=e.players,n=e.actions.getHighScore();return r.a.createElement(a.Fragment,null,t.map(function(e){return r.a.createElement(O,{id:e.id,key:e.id.toString(),isLeader:n===e.score})}))})},k=function(){var e=r.a.createRef();return r.a.createElement(f,null,function(t){var n=t.actions;return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),n.addPlayer(e.current.value),t.currentTarget.reset()}},r.a.createElement("input",{ref:e,type:"text",placeholder:"Enter a player's name"}),r.a.createElement("input",{type:"submit",value:"Add Player"}))})},R=function(){return r.a.createElement("div",{className:"scoreboard"},r.a.createElement(b,null),r.a.createElement(S,null),r.a.createElement(k,null))};n(16);c.a.render(r.a.createElement(h,null,r.a.createElement(R,null)),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.2c274ee9.chunk.js.map
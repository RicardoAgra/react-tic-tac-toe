(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(n,e,t){n.exports=t(37)},31:function(n,e,t){},37:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(14),c=t.n(o),i=(t(31),t(5)),u=t(6),l=t(8),s=t(7),m=t(9),f=t(1),p=t(2),d=t(4);function v(){var n=Object(f.a)(["\n  color: white;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n"]);return v=function(){return n},n}function h(){var n=Object(f.a)(["\n  border: 2px solid currentColor;\n  background: transparent;\n  padding: 10px 20px;\n  font-weight: 600;\n  text-transform: uppercase;\n  cursor: pointer;\n  color: var(--secondary-light);\n\n  :hover {\n    background-color: var(--primary-dark);\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(f.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 70px;\n  background: var(--primary);\n  width: 100%;\n  padding: 0 10px;\n"]);return b=function(){return n},n}var y=p.a.header(b()),O=p.a.button(h()),x=p.a.h3(v()),j=function(n){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this.props,e=n.matchId,t=n.restartHandler,r=n.undoLastMoveHandler;return a.a.createElement(y,null,a.a.createElement(O,{className:"button",onClick:t},"Restart"),a.a.createElement(x,null,"Match Id: ",e),a.a.createElement(O,{className:"button",onClick:r},"Undo last move"))}}]),e}(a.a.PureComponent),g=Object(d.b)(function(n){return{matchId:n.matchId}},function(n){return{restartHandler:function(){return n({type:"RESTART"})},undoLastMoveHandler:function(){return n({type:"UNDO_LAST_MOVE"})}}})(j),E=t(3);function M(){var n=Object(f.a)(["\n  margin-bottom: 50px;\n"]);return M=function(){return n},n}var w=p.a.h1(M()),k=Object(d.b)(function(n){return Object(E.a)({},n)})(a.a.memo(function(n){var e=n.victory,t=n.nextAction,r={victory:{tie:"Tie!",human:"Human wins!",computer:"Computer wins!"},next:{humanSelect:"Select your symbol",human:"Turn to move: Human",computer:"Turn to move: Computer"}},o="";return o=e?r.victory[e]:r.next[t],a.a.createElement(w,null,o)}));function A(){var n=Object(f.a)(["\n  width: 100px;\n  height: 100px;\n  background: transparent;\n  font-size: 50px;\n  cursor: pointer;\n\n  svg {\n    display: none;\n  }\n\n  &.times .fa-times {\n    display: inline;\n  }\n  &.circle .fa-circle {\n    display: inline;\n  }\n  &.previous-move {\n    background: var(--primary);\n    color: var(--secondary-light);\n  }\n"]);return A=function(){return n},n}var H=p.a.button(A()),S=a.a.memo(function(n){var e=n.content,t=n.isLastMove,r=n.clickHandler,o=["square"];return t&&o.push("previous-move"),"x"===e&&o.push("times"),"o"===e&&o.push("circle"),a.a.createElement(H,{className:o.join(" "),onClick:r},a.a.createElement("i",{className:"fas fa-times "}),a.a.createElement("i",{className:"far fa-circle"}))},function(n,e){return n.content===e.content&&n.isLastMove===e.isLastMove});function C(){var n=Object(f.a)(["\n  width: 300px;\n  height: 300px;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n"]);return C=function(){return n},n}var L=p.a.article(C()),N=function(n){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(u.a)(e,[{key:"componentWillMount",value:function(){"computer"===this.props.nextAction&&window.setTimeout(this.props.computerMoveHandler,0)}},{key:"shouldComponentUpdate",value:function(n){return n.boardState!==this.props.boardState}},{key:"componentWillUpdate",value:function(n){"computer"===n.nextAction&&window.setTimeout(this.props.computerMoveHandler,0)}},{key:"render",value:function(){var n=this.props,e=n.boardState,t=n.lastMove,r=n.humanMoveHandler,o=e.map(function(n,e){var o=t.position===e;return a.a.createElement(S,{key:e,content:n,isLastMove:o,clickHandler:r.bind(null,e)})});return a.a.createElement(L,{className:"Board"},o)}}]),e}(a.a.Component),T=Object(d.b)(function(n){return Object(E.a)({},n)},function(n){return{humanMoveHandler:function(e){return n({type:"HUMAN_MOVE",value:e})},computerMoveHandler:function(){return n({type:"COMPUTER_MOVE"})}}})(N);function W(){var n=Object(f.a)(["\n  margin: 100px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"]);return W=function(){return n},n}var U=p.a.main(W()),R=function(n){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(u.a)(e,[{key:"shouldComponentUpdate",value:function(n){return"humanSelect"===n.nextAction||"humanSelect"===this.props.nextAction}},{key:"componentDidUpdate",value:function(){console.log("Main updated!")}},{key:"render",value:function(){var n=this.props,e=n.nextAction,t=n.selectSymbolHandler,r=null;return r="humanSelect"===e?a.a.createElement("div",null,a.a.createElement(S,{content:"x",clickHandler:t.bind(null,"x","o")}),a.a.createElement(S,{content:"o",clickHandler:t.bind(null,"o","x")})):a.a.createElement(T,null),a.a.createElement(U,null,a.a.createElement(k,null),r)}}]),e}(a.a.Component),I=Object(d.b)(function(n){return{nextAction:n.nextAction}},function(n){return{selectSymbolHandler:function(e,t){return n({type:"SELECT_SYMBOL",value:{human:e,computer:t}})}}})(R);function _(){var n=Object(f.a)(["\n  margin-left: 4px;\n"]);return _=function(){return n},n}function D(){var n=Object(f.a)(["\n  width: 50%;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n\n  svg {\n    width: 20px;\n    margin: 0 5px;\n  }\n\n  &.first {\n    justify-content: flex-end;\n  }\n"]);return D=function(){return n},n}function V(){var n=Object(f.a)(['\n  background-color: #333;\n  color: white;\n  padding: 10px;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: "Ubuntu", "Arial", sans-serif;\n']);return V=function(){return n},n}var B=p.a.footer(V()),P=p.a.p(D()),z=p.a.a(_()),J=function(){return a.a.createElement(B,null,a.a.createElement(P,{className:"first"},a.a.createElement("a",{href:"https://github.com/RicardoAgra"},a.a.createElement("i",{className:"fab fa-github"}))," ","Made by Ricardo Agra,"," "),a.a.createElement(P,null,a.a.createElement("i",{className:"fab fa-react"}),"Powered by"," ",a.a.createElement(z,{className:"react-link",href:"https://reactjs.org/"}," ","React"),"."))};function Y(){var n=Object(f.a)(["\n  text-align: center;\n  min-height: 100vh;\n  display: flex;\n  justify-content: space-between;\n  flex-flow: column;\n  background: var( --background );\n"]);return Y=function(){return n},n}var q=p.a.section(Y()),X=function(n){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(q,{className:"App"},a.a.createElement(g,null),a.a.createElement(I,null),a.a.createElement(J,null))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=t(15),G=t(12),K=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],Q=function(n,e){var t=0,r=0;return e.forEach(function(e){e===n&&(t+=1),""===e&&(r+=1)}),1===r&&2===t},Z=function(n,e){var t=0;return K.forEach(function(r){var a=r.map(function(e){return n[e]});t+=Q(e,a)?1:0}),t},$={countCharWinningMoves:Z,doesCharWinLine:Q,doesCharWin:function(n,e){return n.some(function(t){return""!==t&&Z(n,e)>0})},isWinner:function(n,e){return K.some(function(t){return t.every(function(t){return n[t]===e})})},hasChar:function(n,e){return n.some(function(n){return n===e})},addMove:function(n,e,t){var r=Object(G.a)(n);return r[t]=e,r},lines:K},nn={computer:"o",human:"x"},en=function(n){var e;return $.lines.find(function(t){var r=t.map(function(e){return n[e]});return $.doesCharWinLine(nn.computer,r)?(e=t[r.indexOf("")],!0):($.doesCharWinLine(nn.human,r)&&(e=t[r.indexOf("")]),!1)}),e},tn=function(n){return[n.findIndex(function(e,t){var r=$.addMove(n,nn.computer,t);return""===e&&$.countCharWinningMoves(r,nn.computer)>=2}),n.findIndex(function(e,t){var r=$.addMove(n,nn.computer,t),a=en(r),o=$.addMove(r,nn.human,a);return""===e&&void 0!==a&&$.countCharWinningMoves(o,nn.human)<2})].find(function(n){return-1!==n})},rn={setDefs:function(n){nn=Object(E.a)({},n)},move:function(n,e){switch(e){case 0:return 0;case 1:return""!==n[4]?0:4;case 2:return""!==n[1]||""!==n[3]?4:""!==n[8]?4:""!==n[5]?2:""!==n[7]?6:8;case 9:return-1;default:var t=en(n);if(void 0!==t)return t;var r=tn(n);return void 0!==r?r:[4,0,2,6,8,1,3,5,7].find(function(e){return!n[e]})||-1}}},an=Math.random(),on={human:an>.5?"x":"o",computer:an<.5?"x":"o"};rn.setDefs(on);var cn=function(n){for(var e=[],t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")},un={matchId:cn(20),boardState:Array(9).fill(""),lastMove:{char:"",position:null},nextAction:an>.5?"humanSelect":"computer",moveHistory:[],victory:""},ln=function(n,e){return n.length?[].concat(Object(G.a)(n),[e]):[e]},sn=function(n){return $.isWinner(n,on.computer)?"computer":$.isWinner(n,on.human)?"human":$.hasChar(n,"")?"":"tie"},mn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:un,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SELECT_SYMBOL":return on.human=e.value.human,on.computer=e.value.computer,rn.setDefs(on),Object(E.a)({},n,{nextAction:"human"});case"HUMAN_MOVE":if(n.victory||"human"!==n.nextAction||""!==n.boardState[e.value])return n;var t=$.addMove(n.boardState,on.human,e.value);return Object(E.a)({},n,{boardState:t,lastMove:{position:e.value,char:on.human},nextAction:"computer",moveHistory:ln(n.moveHistory,e.value),victory:sn(t)});case"COMPUTER_MOVE":var r=rn.move(n.boardState,n.moveHistory.length);if("computer"===n.nextAction&&r>-1){var a=$.addMove(n.boardState,on.computer,r);return Object(E.a)({},n,{boardState:a,nextAction:"human",moveHistory:ln(n.moveHistory,r),victory:sn(a)})}return Object(E.a)({},n,{nextAction:"human",moveHistory:ln(n.moveHistory,-1)});case"UNDO_LAST_MOVE":if(null!==n.lastMove.position&&"human"===n.nextAction){var o=Object(G.a)(n.boardState),c=Object(G.a)(n.moveHistory),i=Object(E.a)({},n.lastMove);return i.position=c.length>=4?c[c.length-4]:null,o[c.pop()]="",o[c.pop()]="",Object(E.a)({},n,{boardState:o,lastMove:i,moveHistory:c,victory:""})}return n;case"RESTART":return Object(E.a)({},un,{matchId:cn(20),nextAction:Math.random()>.5?"humanSelect":"computer"});default:return n}},fn=Object(F.b)(mn);c.a.render(a.a.createElement(d.a,{store:fn},a.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.3cded7fa.chunk.js.map
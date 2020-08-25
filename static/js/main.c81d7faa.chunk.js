(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,function(e,t,a){},,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r);a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(4),s=a(5),o=a(9),u=a(8),d=a(6),b=a.n(d),p=a(7),m=a.n(p),h=(a(20),function(e){var t=e.text;return l.a.createElement("div",{className:"display"},l.a.createElement("span",null,t))}),E=(a(1),a(21),function(e){var t=e.onClear;return l.a.createElement("button",{className:"button clear-button",type:"button",onClick:t},"clear")}),v=(a(22),function(e){var t=e.label,a=e.canAddOperation,n=e.onClick;return l.a.createElement("button",{className:"button operation-button",type:"button",onClick:n,value:t,disabled:!a},t)}),O=(a(23),function(e){var t=e.value,a=e.onClick;return l.a.createElement("button",{className:"button number-button",type:"button",value:t,onClick:a},t)}),f=(a(24),{PLUS:"+",MINUS:"\u2212",DIVIDE:"\xf7",MULTIPLY:"\xd7",EQUAL:"="}),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).initialState=function(){return{result:!0,display:"0"}},n.handleClear=function(){n.setState(n.initialState())},n.canAddOperation=function(){return!(n.state.result&&"0"===n.state.display)&&-1===Object.values(f).indexOf(n.state.display.substr(-1))},n.handleOperation=function(e,t){var a=e?e.target.value:t;if(n.canAddOperation())if(a!==f.EQUAL)n.addToDisplay(a);else{var l=n.state.display.replace(f.PLUS,"+").replace(f.MINUS,"-").replace(f.MULTIPLY,"*").replace(f.DIVIDE,"/").replace(f.EQUAL,"="),r=b()(l);n.setState({display:r.toString(),result:!0})}},n.handleNumber=function(e,t){var a=e?e.target.value:t;n.addToDisplay(a)},n.handleKeyboardEvent=function(e,t){if(t.stopPropagation(),-1!==n.supportedKeyboardEvents.numbers.indexOf(e))n.handleNumber(null,e);else if(-1!==n.supportedKeyboardEvents.operations.indexOf(e))n.bindKeyToOperation(e);else if(-1!==n.supportedKeyboardEvents.specials.indexOf(e))switch(e){case"del":n.handleClear();break;case"enter":n.handleOperation(null,f.EQUAL)}},n.state=n.initialState(),n.supportedKeyboardEvents={numbers:["0","1","2","3","4","5","6","7","8","9"],operations:["+","-","/","*","="],specials:["del","enter"]},n}return Object(s.a)(a,[{key:"addToDisplay",value:function(e){this.setState((function(t){return{display:t.result&&"0"===t.display?e:t.display+e,result:!1}}))}},{key:"bindKeyToOperation",value:function(e){switch(e){case"-":this.handleOperation(null,f.MINUS);break;case"+":this.handleOperation(null,f.PLUS);break;case"*":this.handleOperation(null,f.MULTIPLY);break;case"/":this.handleOperation(null,f.DIVIDE);break;case"=":this.handleOperation(null,f.EQUAL)}}},{key:"render",value:function(){var e={onClick:this.handleOperation},t={onClick:this.handleNumber},a=this.canAddOperation(),n=Object.values(this.supportedKeyboardEvents).flat();return l.a.createElement("div",{className:"calculator"},l.a.createElement(m.a,{handleKeys:n,onKeyEvent:this.handleKeyboardEvent}),l.a.createElement(h,{text:this.state.display}),l.a.createElement(O,Object.assign({value:7},t)),l.a.createElement(O,Object.assign({value:8},t)),l.a.createElement(O,Object.assign({value:9},t)),l.a.createElement(v,Object.assign({label:f.PLUS,canAddOperation:a},e)),l.a.createElement(O,Object.assign({value:4},t)),l.a.createElement(O,Object.assign({value:5},t)),l.a.createElement(O,Object.assign({value:6},t)),l.a.createElement(v,Object.assign({label:f.MINUS,canAddOperation:a},e)),l.a.createElement(O,Object.assign({value:1},t)),l.a.createElement(O,Object.assign({value:2},t)),l.a.createElement(O,Object.assign({value:3},t)),l.a.createElement(v,Object.assign({label:f.MULTIPLY,canAddOperation:a},e)),l.a.createElement(O,Object.assign({value:0},t)),l.a.createElement(E,{onClear:this.handleClear}),l.a.createElement(v,Object.assign({label:f.DIVIDE,canAddOperation:a},e)),l.a.createElement(v,Object.assign({label:f.EQUAL,canAddOperation:a},e)))}}]),a}(l.a.Component);a(25);function g(){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"React Calculator"),l.a.createElement("p",null,"Use the buttons on the calculator to do your maths. Or you can use your keyboard as well.",l.a.createElement("br",null),"Just make sure you click outside the calculator before ! "))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null),l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.c81d7faa.chunk.js.map
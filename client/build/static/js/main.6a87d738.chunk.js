(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(45)},22:function(e,t,n){},24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(9),s=n.n(o),i=(n(22),n(10)),l=n(11),u=n(14),c=n(12),m=n(15),h=(n(24),n(13)),d=n.n(h),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(c.a)(t).call(this))).handleChange=function(t){/[0-9]/.test(t.target.value)||e.setState({userName:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n={name:e.state.userName};d.a.post("/react",{user:n}).then(function(t){e.setState({message:t.data})})},e.state={userName:"",message:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",null,"Name:",r.a.createElement("input",{type:"text",name:"userName",value:this.state.userName,onChange:this.handleChange,placeholder:"Write your name here"})),r.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Send"),r.a.createElement("h2",null,this.state.message)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.6a87d738.chunk.js.map
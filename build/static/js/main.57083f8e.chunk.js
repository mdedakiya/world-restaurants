(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,a,t){e.exports=t(267)},267:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),i=t.n(r),o=t(41),c=t(42),s=t(48),m=t(43),u=t(49),h=t(32),d=t.n(h),g=t(67),E=t(50),v=t(20),p=t(16),f=t.n(p),b=t(15),w=t.n(b),y=t(108),k=t.n(y),C=t(109),O=t.n(C),N=t(21),j=t.n(N),S=t(110),L=t.n(S),x=t(111),I=t.n(x),T=t(29),R=t.n(T),W=t(33),F=t.n(W),G=t(66),M=t.n(G),A=t(19),B=t.n(A),D=t(47),P=t.n(D),H=t(68),z=t.n(H),J=t(30),U=t.n(J);function V(e,a,t,n){var l=null;fetch("http://localhost:8000/api"+e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return l=e.status,e.json()}).then(function(e){200===l||201===l?t(e):n(e)}).catch(function(e){return n(e)})}var _=t(102),q=t.n(_),K=t(51),Y=t.n(K),$=t(104),Q=t.n($),X=t(106),Z=t.n(X),ee=t(105),ae=t.n(ee),te=t(107),ne=t.n(te),le=function(e){var a=e.data.rating>=4.5?"rating-excellent":e.data.rating>=4?"rating-very-good":e.data.rating>=3.5?"rating-good":e.data.rating>=3?"rating-average":0===e.data.rating?"rating-new":null;return l.a.createElement(q.a,{key:"res",className:"each-res"},l.a.createElement(f.a,{container:!0,spacing:0},l.a.createElement(f.a,{item:!0,xs:4},l.a.createElement(Q.a,{style:{width:150,height:150},image:"https://b.zmtcdn.com/data/collections/5aa505593a52094ca04d23db6bf12781_1536726619.jpg?fit=around%7C300%3A250&crop=300%3A250%3B%2A%2C%2A",title:"Live from space album cover"})),l.a.createElement(f.a,{item:!0,xs:7},l.a.createElement("div",null,l.a.createElement(Y.a,null,l.a.createElement(w.a,{component:"h2",variant:"headline"},e.data.name," "),l.a.createElement(w.a,{variant:"button",gutterBottom:!0},e.data.location.locality),l.a.createElement(w.a,{component:"body1"},e.data.location.address)))),l.a.createElement(f.a,{item:!0,xs:1},l.a.createElement(Y.a,null,l.a.createElement("div",{className:"rating "+a},e.data.rating)))),l.a.createElement(ae.a,null),l.a.createElement(Y.a,null,l.a.createElement(f.a,{container:!0,spacing:0},l.a.createElement(f.a,{item:!0,xs:4},l.a.createElement(w.a,{component:"body2"},"CUISINES:")),l.a.createElement(f.a,{item:!0,xs:8},l.a.createElement(w.a,{component:"body1",align:"left"},e.data.cuisines)),l.a.createElement(f.a,{item:!0,xs:4},l.a.createElement(w.a,{component:"body2"},"COST FOR TWO:")),l.a.createElement(f.a,{item:!0,xs:8},l.a.createElement(w.a,{component:"body1",align:"left"},e.data.cost," in ",e.data.currency)))),l.a.createElement(Z.a,null,e.data.delivery?l.a.createElement(j.a,{size:"small",color:"primary"},"Order Online"):null,e.data.booking?l.a.createElement(j.a,{size:"small",color:"primary"},"Book Table"):null,l.a.createElement(ne.a,{href:"https://www.google.com/maps?q="+e.data.location.latitude+","+e.data.location.longitude,target:"_blank"},l.a.createElement(j.a,{size:"small",color:"primary"},"Google Map"))))},re=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={resData:[],loginModel:!1,token:null,name:"",cuisines:"",booking:!1,delivery:!1,sorting:"rating-high-low",email:"",password:"",regEmail:"",regName:"",regPassword:""},t.dataFetcher=t.dataFetcher.bind(Object(v.a)(Object(v.a)(t))),t.handleChange=t.handleChange.bind(Object(v.a)(Object(v.a)(t))),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"handleChange",value:function(e,a){var t;this.setState((t={},Object(E.a)(t,e,a.target.value),Object(E.a)(t,"resData",[]),t),this.dataFetcher)}},{key:"handleLoginChange",value:function(e,a){this.setState(Object(E.a)({},e,a.target.value))}},{key:"dataFetcher",value:function(){var e="/restaurants?sorting="+this.state.sorting+"&";""!==this.state.name.trim()&&(e+="name="+this.state.name.trim()+"&"),""!==this.state.cuisines.trim()&&(e+="cuisines="+this.state.cuisines.trim()+"&"),this.state.delivery&&(e+="delivery=1&"),this.state.booking&&(e+="booking=1&");!function(e,a,t){var n=null;fetch("http://localhost:8000/api"+e,{method:"GET",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then(function(e){return n=e.status,e.json()}).then(function(e){200===n||201===n?a(e):t(e)}).catch(function(e){return t(e)})}(e,function(e){this.setState({resData:e})}.bind(this),function(e){console.log(e)})}},{key:"componentDidMount",value:function(){var e=Object(g.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("token");case 2:a=e.sent,console.log(a),this.setState({token:a}),this.dataFetcher();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"userLogout",value:function(){var e=Object(g.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("token");case 2:this.setState({token:null});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"userLogin",value:function(){var e=function(e){localStorage.setItem("token",e.token),this.setState({token:e.token,loginModel:!1})}.bind(this);V("/login",{email:this.state.email,password:this.state.password},e,function(e){console.log(e)})}},{key:"userRegister",value:function(){var e=function(e){this.setState({loginModel:!1})}.bind(this);V("/register",{email:this.state.regEmail,password:this.state.regPassword,name:this.state.regName},e,function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"nav-root"},l.a.createElement(k.a,{position:"static"},l.a.createElement(O.a,{variant:"dense"},l.a.createElement(w.a,{variant:"title",color:"inherit"},"Food Finder"),l.a.createElement("div",{className:"app-search"},l.a.createElement(R.a,{placeholder:"Search\u2026",value:this.state.name,onChange:function(a){return e.handleChange("name",a)}})),l.a.createElement("div",{className:"nav-heading"}),null!==this.state.token?l.a.createElement(j.a,{color:"inherit",onClick:function(){e.userLogout()}},"LOGOUT"):l.a.createElement(j.a,{color:"inherit",onClick:function(){e.setState({loginModel:!0})}},"LOGIN")))),l.a.createElement("div",null,l.a.createElement(f.a,{container:!0,spacing:0},l.a.createElement(f.a,{item:!0,xs:1}),l.a.createElement(f.a,{item:!0,xs:2},l.a.createElement(B.a,{className:"each-res filter-paper",elevation:1},l.a.createElement(w.a,{component:"title"},"FILTERS")),l.a.createElement(B.a,{className:"each-res filter-paper",elevation:1},l.a.createElement(w.a,{component:"title"},"CUISINES:"),l.a.createElement(P.a,null,l.a.createElement(R.a,{placeholder:"Cuisines\u2026",value:this.state.cuisines,onChange:function(a){return e.handleChange("cuisines",a)}}))),l.a.createElement(B.a,{className:"each-res filter-paper",elevation:1},l.a.createElement(w.a,{component:"title"},"SORT:"),l.a.createElement(P.a,null,l.a.createElement(M.a,{value:this.state.sorting,onChange:function(a){return e.handleChange("sorting",a)}},l.a.createElement(F.a,{value:"cost-low-high"},"Cost Low to High"),l.a.createElement(F.a,{value:"cost-high-low"},"Cost High to Low"),l.a.createElement(F.a,{value:"rating-high-low"},"Rating High to Low"),l.a.createElement(F.a,{value:"votes-high-low"},"Votes High to Low")))),l.a.createElement(B.a,{className:"each-res filter-paper",elevation:1},l.a.createElement(w.a,{component:"title"},"TABLE BOOKING:"),l.a.createElement(z.a,{checked:this.state.booking,onChange:function(a){return e.handleChange("booking",a)},value:"booking"}),l.a.createElement(w.a,{component:"title"},"HOME DELIVERY:"),l.a.createElement(z.a,{checked:this.state.delivery,onChange:function(a){return e.handleChange("delivery",a)},value:"delivery"}))),l.a.createElement(f.a,{item:!0,xs:5},l.a.createElement(B.a,{className:"each-res filter-paper",elevation:1},l.a.createElement(w.a,{component:"title"},"TOTAL ",this.state.resData.length," results")),this.state.resData.map(function(e,a){return l.a.createElement(le,{key:"res"+a,data:e})})))),l.a.createElement("div",null,l.a.createElement(L.a,{open:this.state.loginModel,onClose:function(){e.setState({loginModel:!1})}},l.a.createElement(I.a,null,l.a.createElement("div",{id:"login-model"},l.a.createElement(f.a,{container:!0,spacing:8},l.a.createElement(f.a,{item:!0,xs:6},l.a.createElement("div",null,l.a.createElement(w.a,{variant:"h5",className:"text-left"},"LOGIN")),l.a.createElement("div",null,l.a.createElement(U.a,{fullWidth:!0,id:"login-email",label:"Email",value:this.state.email,onChange:function(a){return e.handleLoginChange("email",a)},margin:"normal",variant:"outlined"})),l.a.createElement("div",null,l.a.createElement(U.a,{fullWidth:!0,id:"login-password",label:"Password",type:"password",value:this.state.password,onChange:function(a){return e.handleLoginChange("password",a)},margin:"normal",variant:"outlined"})),l.a.createElement("div",{id:"login-btn"},l.a.createElement(j.a,{fullWidth:!0,variant:"outlined",color:"primary",onClick:function(){e.userLogin()}},"LOGIN"))),l.a.createElement(f.a,{item:!0,xs:6},l.a.createElement("div",null,l.a.createElement(w.a,{variant:"h5",className:"text-left"},"REGISTER")),l.a.createElement("div",null,l.a.createElement(U.a,{fullWidth:!0,id:"login-email",label:"Email",value:this.state.regEmail,onChange:function(a){return e.handleLoginChange("regEmail",a)},margin:"normal",variant:"outlined"})),l.a.createElement("div",null,l.a.createElement(U.a,{fullWidth:!0,id:"login-name",label:"Name",value:this.state.regName,onChange:function(a){return e.handleLoginChange("regName",a)},margin:"normal",variant:"outlined"})),l.a.createElement("div",null,l.a.createElement(U.a,{fullWidth:!0,id:"login-password",label:"Password",type:"password",value:this.state.regPassword,onChange:function(a){return e.handleLoginChange("regPassword",a)},margin:"normal",variant:"outlined"})),l.a.createElement("div",{id:"login-btn"},l.a.createElement(j.a,{fullWidth:!0,variant:"outlined",color:"primary",onClick:function(){e.userRegister()}},"REGISTER")))))))))}}]),a}(l.a.Component),ie=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(re,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[112,1,2]]]);
//# sourceMappingURL=main.57083f8e.chunk.js.map
(this.webpackJsonpsplines=this.webpackJsonpsplines||[]).push([[0],{31:function(t,e,n){},38:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n.n(i),r=n(19),a=n.n(r),o=(n(31),n(7)),c=n(4),l=n(5),h=n(10),u=n(9),d=n(17),f=n(18),v=n.n(f),p=n(3),m=n(55),b=function t(e,n){Object(c.a)(this,t),this.x=0,this.y=0,this.x=e,this.y=n},x=function(){function t(e,n){Object(c.a)(this,t),this.knots=[0,1],this.order=3,this.controls=[],this.points=[],this.lambda=1e-4,this.learning_rate=.05,this.xmat=new p.b(0,0),this.ymat=new p.b(0,0),this.drawing=!1,this.setKnotsAndOrder(e,n)}return Object(l.a)(t,[{key:"setKnotsAndOrder",value:function(t,e){v()(t>1),this.drawing=!1;for(var n=[],i=0;i<t;i++)n.push(i/(t-1));for(n=new Array(e).fill(0).concat(n,new Array(e).fill(1)),this.knots=n,this.order=e;this.controls.length<this.numBasis();)this.controls.push(0);this.controls=this.controls.slice(0,this.numBasis()),this.setPoints(this.points)}},{key:"findInterval",value:function(t){for(var e=0;e<this.knots.length;e++)if(t<this.knots[e])return e-1;v()(!1)}},{key:"eval",value:function(t,e){var n=this.findInterval(t);return this.deBoor(n,t,e)}},{key:"setPoints",value:function(t){this.points=t;var e,n=[],i=[],s=Object(d.a)(this.points);try{for(s.s();!(e=s.n()).done;){var r=e.value,a=new Array(this.numBasis()).fill(0);n.push([]),i.push(r.y);for(var o=0;o<a.length;o++){a[o]=1;var c=this.eval(r.x,a);n[n.length-1].push(c),a[o]=0}}}catch(l){s.e(l)}finally{s.f()}this.xmat=new p.b(n),this.ymat=new p.b([i]).transpose()}},{key:"fitExact",value:function(){var t=this.xmat.transpose().mmul(this.xmat).add(p.b.identity(this.xmat.columns).mul(this.lambda)),e=this.xmat.transpose().mmul(this.ymat),n=Object(m.a)(t,e).to1DArray();this.controls=n}},{key:"fitIter",value:function(){if(0===this.points.length)return 0;var t=this.xmat,e=this.ymat,n=new p.b([this.controls]).transpose(),i=t.transpose().mmul(e).mul(-2).add(t.transpose().mmul(t).mmul(n).mul(2)).mul(-1*this.learning_rate);return this.controls=n.add(i).to1DArray(),i.transpose().mmul(i).get(0,0)}},{key:"deBoor",value:function(t,e,n){for(var i=new Array(this.order+1),s=0;s<=this.order;s++)i[s]=n[s+t-this.order];for(var r=1;r<=this.order;r++)for(var a=this.order;a>=r;a--){var o=(e-this.knots[a+t-this.order])/(this.knots[a+1+t-r]-this.knots[a+t-this.order]);i[a]=(1-o)*i[a-1]+o*i[a]}return i[this.order]}},{key:"numBasis",value:function(){return this.knots.length-this.order-1}},{key:"drawBases",value:function(t){var e=!1,n=new Array(this.numBasis()).fill(0),i=t.canvas.height,s=t.canvas.width,r=["red","orange","yellow","green","blue","indigo","violet"];t.clearRect(0,0,s,i);for(var a=0;a<n.length;a++){t.strokeStyle=r[a],t.beginPath(),n[a]=1;for(var o=0;o<=1;o+=1/400){var c=this.eval(o,n);c=i-c*i,e||(t.moveTo(o*s,c),e=!0),t.lineTo(o*s,c)}n[a]=0,t.stroke()}}},{key:"draw",value:function(t){var e=!1,n=t.canvas.height,i=t.canvas.width;t.clearRect(0,0,i,n),t.strokeStyle="#1976d2",t.lineWidth=3,t.beginPath();for(var s=function(t){return t*i},r=function(t){return t*n},a=0;a<=1;a+=1/400){var o=this.eval(a,this.controls);o*=n,e||(t.moveTo(a*i,o),e=!0),t.lineTo(a*i,o)}t.stroke(),t.strokeStyle="black",t.fillStyle="black";var c,l=Object(d.a)(this.points);try{for(l.s();!(c=l.n()).done;){var h=c.value;t.beginPath(),t.arc(s(h.x),r(h.y),5,0,2*Math.PI),t.fill(),t.stroke()}}catch(u){l.e(u)}finally{l.f()}}},{key:"drawLoop",value:function(t){var e=this;this.drawing=!0;window.requestAnimationFrame((function n(){if(e.drawing){var i=e.fitIter();e.draw(t),i>1e-6&&window.requestAnimationFrame(n)}}))}}]),t}(),j=n(1);var g=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).canvas=void 0,i.ctx=null,i.points=[],i.splines=void 0,i.canvas=s.a.createRef(),i.splines=new x(t.numberOfKnots,t.degreeOfSpline),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;if(this.componentDidUpdate(),this.ctx){var e=0;window.requestAnimationFrame((function n(){t.ctx&&!t.splines.points.length&&(t.ctx.clearRect(0,0,t.ctx.canvas.width,t.ctx.canvas.height),t.ctx.font="bold 36px sans-serif",t.ctx.textAlign="center",t.ctx.fillStyle="hsla(".concat(e,", 100%, 50%, 1)"),e+=.5,t.ctx.fillText("Click Me",t.ctx.canvas.width/2,t.ctx.canvas.height/2),window.requestAnimationFrame(n))}))}}},{key:"componentDidUpdate",value:function(){var t,e,n=this;if(this.ctx=this.ctx||(null===(t=this.canvas)||void 0===t||null===(e=t.current)||void 0===e?void 0:e.getContext("2d")),null===this.ctx)return null;this.ctx.canvas.onclick=function(t){var e,i=null===(e=n.ctx)||void 0===e?void 0:e.canvas;if(i){var s=[i.height,i.width],r=s[0],a=s[1];n.points.push(new b(t.offsetX/a,t.offsetY/r)),n.splines.setPoints(n.points),n.ctx&&n.splines.drawLoop(n.ctx)}}}},{key:"render",value:function(){return this.splines.setKnotsAndOrder(this.props.numberOfKnots,this.props.degreeOfSpline),this.ctx&&this.splines.drawLoop(this.ctx),Object(j.jsx)("canvas",{ref:this.canvas,width:850,height:625})}}]),n}(s.a.Component),w=n(54);n(38);var y=function(){var t=s.a.useState(5),e=Object(o.a)(t,2),n=e[0],i=e[1],r=s.a.useState(3),a=Object(o.a)(r,2),c=a[0],l=a[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Basis Splines Demo"}),Object(j.jsxs)("div",{id:"instructions",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("a",{href:"https://en.wikipedia.org/wiki/B-spline",children:"Basis splines"})," are a powerful tool for expressing nonlinear statistical relationships."]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Click\ud83d\uddb1\ufe0f"})," to add data points and fit a basis spline using gradient descent."]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Use the sliders\ud83c\udf9a\ufe0f"})," to adjust the number of knots (polynomial pieces) and the degree (power) of the polynomials."]})]}),Object(j.jsx)(g,{numberOfKnots:n,degreeOfSpline:c}),Object(j.jsxs)("div",{children:["Number of Knots: ",Object(j.jsx)("b",{children:n})]}),Object(j.jsx)(w.a,{onChange:function(t){return i(t.target.value)},defaultValue:5,min:2,max:15}),Object(j.jsxs)("div",{children:["Degree of Spline: ",Object(j.jsx)("b",{children:c})]}),Object(j.jsx)(w.a,{onChange:function(t){return l(t.target.value)},defaultValue:3,min:1,max:5})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),s(t),r(t),a(t)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),O()}},[[44,1,2]]]);
//# sourceMappingURL=main.f2ee8774.chunk.js.map
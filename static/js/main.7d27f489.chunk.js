(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),a=n(2),o=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),b=n(0),h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={date:new Date},t.timer=setInterval((function(){var e=t.state.date;console.log(e.toLocaleTimeString()),t.setState({date:new Date})}),1e3),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){return this.timer}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this.state.date;return Object(b.jsxs)("p",{children:["Current time:"," ",Object(b.jsx)("span",{children:t.toLocaleTimeString()})]})}}]),n}(u.a.Component),j=(n(13),function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={isClockVisible:!0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.isClockVisible;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"React clock"}),Object(b.jsxs)("div",{children:[t&&Object(b.jsx)(h,{date:new Date}),Object(b.jsx)("button",{type:"button",onClick:this.showClock,children:"Show"}),Object(b.jsx)("button",{type:"button",onClick:this.hideClock,children:"Hide"}),Object(b.jsx)("button",{type:"button",children:"Set random name"})]})]})}}]),n}(u.a.Component));i.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7d27f489.chunk.js.map
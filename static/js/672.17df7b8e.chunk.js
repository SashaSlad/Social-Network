"use strict";(self.webpackChunksoc_network=self.webpackChunksoc_network||[]).push([[672],{5672:function(e,s,n){n.r(s),n.d(s,{default:function(){return j}});var i=n(7370),a=(n(2791),{dialogs:"Dialogs_dialogs__GKEYH",line:"Dialogs_line__4ltYQ",sendMessageWrapp:"Dialogs_sendMessageWrapp__kMUrx"}),r=n(1087),t=n(184),o=function(e){var s="/dialogs/"+e.id;return(0,t.jsx)("div",{className:a.dialog,children:(0,t.jsx)(r.OL,{to:s,children:e.name})})},d=function(e){return(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:a.message,children:e.message})})},u=n(6139),l=n(704),c=n(9924),g=n(8661),m=function(e){var s=e.dialogsPage,n=s.dialogsData.map((function(e){return(0,t.jsx)(o,{name:e.name,id:e.id},e.id)})),i=s.messagesData.map((function(e){return(0,t.jsx)(d,{message:e.message,id:e.id},e.id)})),r=(0,g.D)(15),m=(0,l.Z)({form:"dialogAddMessageForm"})((function(e){return(0,t.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,t.jsx)(u.Z,{component:c.gx,name:"newMessageBody",placeholder:"Enter your message",validate:[g.C,r]}),(0,t.jsx)("button",{children:" Send "})]})}));return(0,t.jsxs)("div",{className:a.dialogs,children:[(0,t.jsx)("div",{className:a.dialogsItems,children:n}),(0,t.jsx)("div",{className:a.line}),(0,t.jsxs)("div",{className:a.messages,children:[(0,t.jsx)("div",{children:i}),(0,t.jsx)("div",{className:a.sendMessageWrapp,children:(0,t.jsx)(m,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})})]})]})},f=n(4802),h=n(5927),j=(0,n(7781).qC)((0,f.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e((0,i.XE)(s))}}})),h.D)(m)},5927:function(e,s,n){n.d(s,{D:function(){return m}});var i=n(1413),a=n(5671),r=n(3144),t=n(136),o=n(516),d=n(2791),u=n(1405),l=n(7689),c=n(184),g=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var s=function(s){(0,t.Z)(d,s);var n=(0,o.Z)(d);function d(){return(0,a.Z)(this,d),n.apply(this,arguments)}return(0,r.Z)(d,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(e,(0,i.Z)({},this.props)):(0,c.jsx)(l.Fg,{to:"/login"})}}]),d}(d.Component);return(0,u.$j)(g)(s)}}}]);
//# sourceMappingURL=672.17df7b8e.chunk.js.map
"use strict";(self.webpackChunksoc_network=self.webpackChunksoc_network||[]).push([[780],{4780:function(e,s,t){t.r(s),t.d(s,{default:function(){return V}});var n=t(1413),o=t(5671),i=t(3144),r=t(136),a=t(516),l=t(2791),c=t(8687),u=t(9662),d=t(9439),f={myposts:"MyPosts_myposts__jVT7K",textar:"MyPosts_textar__PKHzE",posts:"MyPosts_posts__A34dN",textarea:"MyPosts_textarea__oVoLq",addpostbtn:"MyPosts_addpostbtn__jZNvt"},p=t(4165),h=t(5861),x=t(1243),j={item:"Post_item__NZMBi",items:"Post_items__x+q-4",postinfo:"Post_postinfo__An1vo",trashbtn:"Post_trashbtn__V8uHu"},m=t(184),v=function(e){var s=(0,l.useState)(""),t=(0,d.Z)(s,2),n=t[0],o=t[1],i=(0,l.useState)(""),r=(0,d.Z)(i,2),a=r[0],c=r[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,h.Z)((0,p.Z)().mark((function e(){var s,t;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.get("https://social-network.samuraijs.com/api/1.0/profile/".concat(a),{headers:{"API-KEY":"bfd52358-f556-49fe-b856-3044468355c0"}});case 3:s=e.sent,t=s.data,o(t.photos.small||""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]),(0,l.useEffect)((function(){var e=function(){var e=(0,h.Z)((0,p.Z)().mark((function e(){var s,t,n;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0,headers:{"API-KEY":"bfd52358-f556-49fe-b856-3044468355c0"}});case 3:s=e.sent,0===(t=s.data).resultCode&&(n=t.data.id,c(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,m.jsxs)("div",{className:j.item,children:[(0,m.jsxs)("div",{className:j.items,children:[(0,m.jsx)("div",{className:j.photo,children:(0,m.jsx)("img",{alt:"",src:n})}),(0,m.jsxs)("div",{className:j.postinfo,children:[(0,m.jsx)("br",{}),(0,m.jsxs)("span",{children:["Post ",e.id]}),(0,m.jsx)("br",{}),(0,m.jsx)("span",{children:e.message}),(0,m.jsx)("br",{}),(0,m.jsxs)("span",{children:["Likes: ",e.likes]})]})]}),(0,m.jsxs)("div",{className:j.btns,children:[(0,m.jsx)("button",{onClick:function(){e.likePost(e.id)},children:"\ud83d\udc93"}),(0,m.jsx)("button",{onClick:function(){e.dislikePost(e.id)},children:"\ud83d\udc4e"}),(0,m.jsx)("button",{className:j.trashbtn,onClick:function(){e.deletePost(e.id)},children:"Delete\ud83d\uddd1"})]})]})},b=t(6139),P=t(704),_=t(7392),k=t(214),g=l.memo((function(e){var s=(0,l.useState)(""),t=(0,d.Z)(s,2),n=t[0],o=t[1],i=e.postsData.filter((function(e){return e.message.toLowerCase().includes(n.toLowerCase())})).map((function(s){return(0,m.jsx)(v,{message:s.message,likes:s.likes,id:s.id,deletePost:e.deletePost,likePost:e.likePost,dislikePost:e.dislikePost},s.id)})),r=(0,_.D)(50),a=(0,P.Z)({form:"profileAddNewPostForm"})((function(e){return(0,m.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,m.jsx)(b.Z,{component:k.gx,name:"newPostText",placeholder:"Send post",validate:[_.C,r],className:f.textarea}),(0,m.jsx)("button",{className:f.addpostbtn,children:"Add post"})]})}));return(0,m.jsxs)("div",{className:f.myPosts,children:[(0,m.jsx)("div",{className:f.search,children:(0,m.jsx)("input",{type:"text",placeholder:"Search posts...",value:n,onChange:function(e){o(e.target.value)},className:f.textarea})}),(0,m.jsx)("div",{className:f.textArea,children:(0,m.jsx)(a,{onSubmit:function(s){e.addPost(s.newPostText)}})}),(0,m.jsx)("div",{className:f.posts,children:i})]})})),N=(0,c.$j)((function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(s){e((0,u.Wl)(s))},likePost:function(s){e((0,u.TP)(s))},dislikePost:function(s){e((0,u.DO)(s))},deletePost:function(s){e((0,u.fu)(s))}}}))(g),Z="Profile_content__ipCJ7",w=t(9611),I={profile:"ProfileInfo_profile__lpuza",uploadPhoto:"ProfileInfo_uploadPhoto__+qCZp",info:"ProfileInfo_info__y3I+2",contacts:"ProfileInfo_contacts__5hc6e",editbtn:"ProfileInfo_editbtn__rQ191",cont:"ProfileInfo_cont__ORxcf",uploadPhotoLabel:"ProfileInfo_uploadPhotoLabel__hhjqM"},y=function(e){var s=(0,l.useState)(!1),t=(0,d.Z)(s,2),n=t[0],o=t[1],i=(0,l.useState)(e.status),r=(0,d.Z)(i,2),a=r[0],c=r[1];(0,l.useEffect)((function(){c(e.status)}),[e.status]);return(0,m.jsxs)(m.Fragment,{children:[!n&&(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Status (double click to edit): "}),(0,m.jsx)("span",{onDoubleClick:function(){o(!0)},children:e.status||"HI!"})]}),n&&(0,m.jsx)("div",{children:(0,m.jsx)("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(a)},value:a})})]})},S=t(5270),C=t(820),A=(0,P.Z)({form:"edit-profile"})((function(e,s){s.initialValues;return(0,m.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,m.jsx)("div",{children:(0,m.jsx)("button",{children:"Save:"})}),e.error&&(0,m.jsx)("div",{className:C.Z.formSummaryError,children:e.error}),(0,m.jsxs)("div",{children:[" ID = ",e.profile.userId," "]}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Full name:"})," ",(0,k.Gr)("Full name","fullName",[],k.II)]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Looking for a job:"})," ",(0,k.Gr)("","lookingForAJob",[],k.II,{type:"checkbox"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"My prfessional skills:"})," ",(0,k.Gr)("My prfessional skills","lookingForAJobDescription",[],k.gx)]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"About me:"})," ",(0,k.Gr)("About me","aboutMe",[],k.gx)]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("b",{children:"Contacts:"}),Object.keys(e.profile.contacts).map((function(e){return(0,m.jsxs)("div",{className:I.contacts,children:[(0,m.jsxs)("b",{children:[e,":"]}),(0,k.Gr)(e,"contacts."+e,[],k.II)]},e)}))]})]})]})})),D=function(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{children:[" ID = ",e.profile.userId," "]}),(0,m.jsxs)("div",{className:I.infos,children:[(0,m.jsxs)("div",{className:I.cont,children:[(0,m.jsx)("b",{children:"Full name: "}),e.profile.fullName]}),(0,m.jsxs)("div",{className:I.cont,children:[(0,m.jsx)("b",{children:"Looking for a job: "}),e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&(0,m.jsxs)("div",{className:I.cont,children:[(0,m.jsx)("b",{children:"My prfessional skills: "}),e.profile.lookingForAJobDescription]}),(0,m.jsxs)("div",{className:I.cont,children:[(0,m.jsx)("b",{children:"About me: "}),e.profile.aboutMe]}),(0,m.jsxs)("div",{className:I.cont,children:[(0,m.jsx)("b",{children:"Contacts: "}),Object.keys(e.profile.contacts).map((function(s){return(0,m.jsx)(M,{contactTitle:s,contactValue:e.profile.contacts[s]},s)}))]}),(0,m.jsx)("div",{className:I.editbtn,children:e.isOwner&&(0,m.jsx)("div",{children:(0,m.jsx)("button",{onClick:e.goToEditMode,children:"Edit"})})})]})]})},M=function(e){var s=e.contactTitle,t=e.contactValue;return(0,m.jsxs)("div",{className:I.contacts,children:[(0,m.jsx)("b",{children:s}),":",t]})},F=function(e){var s=(0,l.useState)(!1),t=(0,d.Z)(s,2),n=t[0],o=t[1];if(!e.profile)return(0,m.jsx)(w.Z,{});return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:I.img_wrapp}),(0,m.jsxs)("div",{className:I.profile,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:e.profile.photos.large||S,alt:"#"}),e.isOwner&&(0,m.jsxs)("label",{htmlFor:"photo-input",className:I.uploadPhotoLabel,children:[(0,m.jsx)("span",{className:I.uploadButtonLabel,children:"Add new photo"}),(0,m.jsx)("input",{type:"file",id:"photo-input",onChange:function(s){s.target.files.length&&e.savePhoto(s.target.files[0])},className:I.uploadPhoto})]})]}),(0,m.jsxs)("div",{className:I.info,children:[n?(0,m.jsx)(A,{initialValues:e.profile,profile:e.profile,onSubmit:function(s){e.saveProfile(s).then((function(){o(!1)}))}}):(0,m.jsx)(D,{goToEditMode:function(){o(!0)},profile:e.profile,isOwner:e.isOwner}),(0,m.jsx)(y,{status:e.status,updateStatus:e.updateStatus})]})]})]})},O=function(e){return(0,m.jsxs)("div",{className:Z,children:[(0,m.jsx)(F,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),(0,m.jsx)(N,{})]})},T=t(8680),E=t(5927),L=t(7781),J=function(e){(0,r.Z)(t,e);var s=(0,a.Z)(t);function t(){return(0,o.Z)(this,t),s.apply(this,arguments)}return(0,i.Z)(t,[{key:"refreshProfile",value:function(){var e=this.props.params.userId;e||(e=this.props.authorizedUserId)||window.location.replace("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s,t){this.props.params.userId!==e.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,m.jsx)("div",{className:Z,children:(0,m.jsx)(O,(0,n.Z)((0,n.Z)({},this.props),{},{isOwner:!this.props.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))})}}]),t}(l.Component),V=(0,L.qC)((0,c.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:u.et,getStatus:u.lR,updateStatus:u.Nf,savePhoto:u.Ju,saveProfile:u.Ii}),T.Z,E.D)(J)},5927:function(e,s,t){t.d(s,{D:function(){return p}});var n=t(1413),o=t(5671),i=t(3144),r=t(136),a=t(516),l=t(2791),c=t(8687),u=t(7689),d=t(184),f=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var s=function(s){(0,r.Z)(l,s);var t=(0,a.Z)(l);function l(){return(0,o.Z)(this,l),t.apply(this,arguments)}return(0,i.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(e,(0,n.Z)({},this.props)):(0,d.jsx)(u.Fg,{to:"/login"})}}]),l}(l.Component);return(0,c.$j)(f)(s)}}}]);
//# sourceMappingURL=780.8e255421.chunk.js.map
"use strict";(self.webpackChunkgid_group_react=self.webpackChunkgid_group_react||[]).push([[513],{6673:(e,s,a)=>{a.d(s,{A:()=>l});var t=a(5475),r=a(579);const l=e=>{let{src:s,title:a}=e;return(0,r.jsx)(t.N_,{className:"breadcrumbs__link",to:s,children:a})}},1479:(e,s,a)=>{a.d(s,{A:()=>n});var t=a(9456),r=a(3216),l=a(6958),c=a(579);const n=()=>{const e=(0,r.Zp)(),s=(0,t.wA)();return(0,c.jsxs)("label",{className:"label",children:["I agree to the ",(0,c.jsx)("span",{onClick:function(){e("/personalData"),window.scrollTo(0,0),document.querySelector("body").style.overflow="",s((0,l.Oo)())},children:"processing of personal data"})]})}},1513:(e,s,a)=>{a.r(s),a.d(s,{default:()=>v});var t=a(6673),r=a(5043),l=a(6531),c=a(579);const n=()=>(0,c.jsxs)("div",{className:"contacts__item-email",children:[(0,c.jsx)("div",{className:"contacts__item-title",children:"Email:"}),(0,c.jsx)("a",{href:"mailto:Hello@gid.group",children:"gid-group@gmail.com"}),(0,c.jsxs)("div",{className:"contacts__item-phone",children:[(0,c.jsx)("div",{className:"contacts__item-title",children:"Phone:"}),(0,c.jsx)("a",{href:"tel:380977596455",children:"+380 (97) 759 64 55"}),(0,c.jsx)("a",{href:"tel:380505596426",children:"+380 (50) 559 64 26"}),(0,c.jsx)("a",{href:"tel:380993293725",children:"+380 (99) 329 37 25"})]})]}),i=()=>(0,c.jsxs)("div",{className:"contacts__item-address",children:[(0,c.jsx)("div",{className:"contacts__item-title",children:"Office:"}),(0,c.jsx)("div",{children:"st. Embankment 21, room 41, 02000, Kyiv, Ukraine"})]}),o=()=>(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{className:"title__page",children:"Contacts"}),(0,c.jsxs)("div",{className:"contacts__items",children:[(0,c.jsx)(n,{}),(0,c.jsx)(i,{}),(0,c.jsxs)("div",{className:"contacts__item-social",children:[(0,c.jsx)("div",{className:"contacts__item-title",children:"We are in social networks"}),(0,c.jsx)(l.A,{})]})]})]});var d=a(4858),m=a(8841),h=a(1479),x=a(4086),u=a(9345);const j=()=>{const[e,s]=(0,r.useState)(!1),[a,t]=(0,r.useState)(!1),[l,n]=(0,r.useState)(!1),{register:i,formState:{errors:o},handleSubmit:j,reset:_}=(0,d.mN)({mode:"onBlur"}),p={setLoading:s,setError:n,setData:t,reset:_},v="".concat(x.$.api.host,"/sendContact");return(0,c.jsxs)("div",{className:"contacts-form",onSubmit:j((e=>(0,m.Kg)(e,v,p))),children:[(0,c.jsx)("h3",{className:"title__page",children:"Contact us"}),(0,c.jsxs)("form",{className:"contacts-form__content",children:[(0,c.jsxs)("div",{className:"contacts-form__info",children:[(0,c.jsx)("label",{className:"contacts-form__label",htmlFor:"name",children:"Name"}),(0,c.jsx)("input",{className:"contacts-form__input",type:"text",placeholder:"Please enter your name",...i("name",{required:"Fill in the field!"})}),(0,c.jsx)("div",{className:"form__error",children:(null===o||void 0===o?void 0:o.name)&&(0,c.jsx)("p",{children:(null===o||void 0===o?void 0:o.name.message)||"Error"})}),(0,c.jsx)("label",{className:"contacts-form__label",htmlFor:"phone",children:"Phone number"}),(0,c.jsx)("input",{className:"contacts-form__input",type:"text",placeholder:"Please enter your phone number",...i("phone",{required:"Phone number is required!",minLength:{value:6,message:"Minimum 6 characters"}}),onChange:e=>{e.target.value=(0,m.WX)(e.target.value)}}),(0,c.jsx)("div",{className:"form__error",children:(null===o||void 0===o?void 0:o.phone)&&(0,c.jsx)("p",{children:(null===o||void 0===o?void 0:o.phone.message)||"Error"})}),(0,c.jsx)("label",{className:"contacts-form__label",htmlFor:"square",children:"Object area"}),(0,c.jsx)("input",{className:"contacts-form__input",type:"text",placeholder:"m2",...i("square",{required:"Fill in the field!"}),onChange:e=>{e.target.value=(0,m.WX)(e.target.value)}}),(0,c.jsx)("div",{className:"form__error",children:(null===o||void 0===o?void 0:o.square)&&(0,c.jsx)("p",{children:(null===o||void 0===o?void 0:o.square.message)||"Error"})})]}),(0,c.jsxs)("div",{className:"contacts-form__message",children:[(0,c.jsx)("label",{className:"contacts-form__label",htmlFor:"message",children:"Comment"}),(0,c.jsx)("textarea",{className:"contacts-form__textarea",placeholder:"Enter text",...i("message")}),(0,c.jsxs)("div",{className:"agreement",children:[(0,c.jsx)("input",{className:"checkbox",type:"checkbox",...i("agreement",{required:"Agreement is mandatory!"})}),(0,c.jsx)(h.A,{}),(0,c.jsx)("div",{className:"form__error",children:(null===o||void 0===o?void 0:o.agreement)&&(0,c.jsx)("p",{children:(null===o||void 0===o?void 0:o.agreement.message)||"Error"})})]}),(0,c.jsxs)("div",{style:{height:"15px",marginTop:"5px"},children:[e&&(0,c.jsx)(u.r,{}),a&&(0,c.jsx)("div",{style:{textAlign:"center"},children:"Thank you! We will call you back within an hour."}),l&&(0,c.jsx)("div",{style:{textAlign:"center",color:"red"},children:"Something went wrong. Try again!"})]}),(0,c.jsx)("button",{className:"contacts-form__btn",type:"submit",children:"Send"})]})]})]})},_=()=>(0,c.jsx)("div",{className:"contacts__map",children:(0,c.jsx)("iframe",{title:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.061808007496!2d30.524675715982!3d50.46634320489895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce40f315d233%3A0x633596d5b3593996!2z0IbQu9C70ZbQvdGB0YzQutC40Lk!5e0!3m2!1suk!2scz!4v1711829756007!5m2!1suk!2scz",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})});var p=a(3808);const v=()=>(0,c.jsxs)("main",{className:"contacts",children:[(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"breadcrumbs",children:[(0,c.jsx)(t.A,{src:"/",title:"Home"}),(0,c.jsx)(t.A,{src:"/contacts",title:"Contacts"})]})}),(0,c.jsxs)("div",{className:"container-fluid",children:[(0,c.jsx)(o,{}),(0,c.jsx)(j,{})]}),(0,c.jsx)(_,{}),(0,c.jsx)("div",{className:"container",children:(0,c.jsx)(p.A,{})})]})},3808:(e,s,a)=>{a.d(s,{A:()=>o});var t=a(5043),r=a(9456),l=a(6958),c=a(3846),n=a(7530),i=a(579);const o=()=>{const[e,s]=(0,t.useState)(!1),{modal:a}=(0,r.d4)((e=>e.modal)),o=(0,r.wA)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"projects-page__request",children:(0,i.jsxs)("div",{className:"projects-page__request-content",children:[(0,i.jsx)("p",{className:"projects-page__request-text",children:"Leave a request and we will help you with your project"}),(0,i.jsx)("button",{className:"projects-page__request-link",onClick:function(){s(!0),o((0,l.qf)())},children:"Submit your application"})]})}),a&&e&&(0,i.jsx)(c.A,{isOpenModal:s,children:(0,i.jsx)(n.A,{setIsOpenModalCall:s})})]})}}}]);
//# sourceMappingURL=513.a2f60ccb.chunk.js.map
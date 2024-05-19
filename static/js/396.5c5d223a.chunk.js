"use strict";(self.webpackChunkgid_group_react=self.webpackChunkgid_group_react||[]).push([[396],{8423:(e,s,a)=>{a.d(s,{A:()=>A});var t=a(579);const r=e=>{let{number:s=null,title:a,text:r,isImage:i=null,imageSrc:A=null}=e;return(0,t.jsxs)("li",{className:"advantage__item",children:[(0,t.jsx)("div",{className:"advantage__item-number",children:s}),(0,t.jsx)("div",{className:"advantage__item-title",children:a}),(0,t.jsx)("p",{className:"advantage__item-text",children:r})]})},i=e=>{let{data:s}=e;return(0,t.jsx)("ul",{className:"advantage__inner",children:s.map((e=>(0,t.jsx)(r,{...e},e.id)))})},A=e=>{let{data:s}=e;return(0,t.jsx)("section",{className:"advantage",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)(i,{data:s})})})}},8560:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(579);const r=()=>(0,t.jsx)("p",{style:{color:"red"},children:"Something went wrong! Please, try again"})},9165:(e,s,a)=>{a.d(s,{A:()=>i});a(5043);const t=a.p+"static/media/round-arrow.27315faa0de772bc1ab014691e96b41c.svg";var r=a(579);const i=e=>{let{text:s,arrowRound:a=!0,fn:i,isDisabled:A=!1}=e;return(0,r.jsxs)("button",{className:"projects__btn",onClick:i,style:{display:"".concat(A?"none":"flex")},children:[a&&(0,r.jsx)("img",{className:"projects__btn-img",src:t,alt:""}),(0,r.jsx)("span",{children:s})]})}},2045:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(579);const r=e=>{let{index:s,moveDot:a,data:r}=e;return(0,t.jsx)("ul",{className:"dots",children:r.map(((e,r)=>(0,t.jsx)("li",{className:s===r?"dot active":"dot",onClick:()=>a(r)},e.id)))})}},1479:(e,s,a)=>{a.d(s,{A:()=>n});var t=a(9456),r=a(3216),i=a(6958),A=a(579);const n=()=>{const e=(0,r.Zp)(),s=(0,t.wA)();return(0,A.jsxs)("label",{className:"label",children:["I agree to the ",(0,A.jsx)("span",{onClick:function(){e("/personalData"),window.scrollTo(0,0),document.querySelector("body").style.overflow="",s((0,i.Oo)())},children:"processing of personal data"})]})}},3361:(e,s,a)=>{a.d(s,{A:()=>m});var t=a(5043),r=a(4858),i=a(8841),A=a(9345),n=a(1479),l=a(4086),c=a(579);const o=()=>{const[e,s]=(0,t.useState)(!1),[a,o]=(0,t.useState)(!1),[d,m]=(0,t.useState)(!1),{register:h,formState:{errors:x},handleSubmit:g,reset:j}=(0,r.mN)({mode:"onBlur"}),p={setLoading:s,setError:m,setData:o,reset:j},u="".concat(l.$.api.host,"/sendCatalog");return(0,c.jsxs)("form",{onSubmit:g((e=>(0,i.Kg)(e,u,p))),children:[(0,c.jsx)("div",{className:"form__error",children:(null===x||void 0===x?void 0:x.email)&&(0,c.jsx)("p",{children:(null===x||void 0===x?void 0:x.email.message)||"Error"})}),(0,c.jsx)("input",{className:"catalog__input",placeholder:"Enter your E-mail",type:"email",...h("email",{required:"Fill in the field!",pattern:{value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Incorrect email"}})}),(0,c.jsx)("div",{className:"form__error",children:(null===x||void 0===x?void 0:x.agreement)&&(0,c.jsx)("p",{children:(null===x||void 0===x?void 0:x.agreement.message)||"Error"})}),(0,c.jsxs)("div",{className:"agreement",children:[(0,c.jsx)("input",{className:"checkbox",type:"checkbox",...h("agreement",{required:"Agreement is mandatory!"})}),(0,c.jsx)(n.A,{})]}),(0,c.jsxs)("div",{style:{height:"20px",marginTop:"15px"},children:[e&&(0,c.jsx)(A.r,{}),a&&(0,c.jsx)("div",{style:{textAlign:"center"},children:"Thank you! Expect the catalog within an hour."}),d&&(0,c.jsx)("div",{style:{textAlign:"center",color:"red"},children:"Something went wrong. Try again!"})]}),(0,c.jsx)("button",{className:"catalog__btn",type:"submit",children:"Get catalog"})]})},d=a.p+"static/media/catalog.803dacdfcc9f9dbc9905.jpg",m=e=>{let{title:s}=e;return(0,c.jsxs)("section",{className:"catalog",children:[(0,c.jsx)("h2",{className:"title",children:s}),(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"catalog__inner",children:[(0,c.jsx)("div",{className:"catalog__img",children:(0,c.jsx)("img",{src:d,alt:"catalog"})}),(0,c.jsxs)("div",{className:"catalog__content",children:[(0,c.jsx)("h5",{className:"catalog__title",children:"Leave your email to receive a catalog of our projects"}),(0,c.jsx)("p",{className:"catalog__text",children:"The catalog will help you choose a style and think through the layout of your apartment"}),(0,c.jsx)(o,{})]})]})})]})}},6741:(e,s,a)=>{a.d(s,{A:()=>n});var t=a(9456),r=a(3216),i=a(7856),A=a(579);const n=e=>{let{item:s,otherClass:a=""}=e;const{id:n,img:l,title:c,style:o,square:d}=s,m=(0,r.Zp)(),h=(0,t.wA)();return(0,A.jsxs)("div",{className:"projects__item ".concat(a),children:[(0,A.jsxs)("div",{className:"projects__item-img",children:[(0,A.jsx)("img",{src:l,alt:c}),(0,A.jsx)("div",{className:"projects__item-hover",children:(0,A.jsx)("button",{className:"projects__item-link",onClick:function(){window.scrollTo(0,0),m("/projects/".concat(n)),h((0,i.xW)(s))},children:"View project"})})]}),(0,A.jsxs)("div",{className:"projects__item-content",children:[(0,A.jsx)("div",{className:"projects__item-title",children:c}),(0,A.jsxs)("div",{className:"projects__item-suptitle",children:["Style - ",o]}),(0,A.jsxs)("div",{className:"projects__item-num",children:[d," m2"]})]})]})}},5037:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(579);const r=e=>{let{img:s,title:a,text:r,num:i}=e;return(0,t.jsxs)("div",{className:"stages__item",children:[(0,t.jsx)("img",{className:"stages__img",src:s,alt:a}),(0,t.jsxs)("div",{className:"stages__title",children:[(0,t.jsx)("span",{className:"stages__num",children:i}),(0,t.jsx)("h3",{children:a})]}),(0,t.jsx)("div",{className:"stages__content",children:(0,t.jsx)("p",{className:"stages__content-text",children:r})})]})}},3808:(e,s,a)=>{a.d(s,{A:()=>c});var t=a(5043),r=a(9456),i=a(6958),A=a(3846),n=a(7530),l=a(579);const c=()=>{const[e,s]=(0,t.useState)(!1),{modal:a}=(0,r.d4)((e=>e.modal)),c=(0,r.wA)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"projects-page__request",children:(0,l.jsxs)("div",{className:"projects-page__request-content",children:[(0,l.jsx)("p",{className:"projects-page__request-text",children:"Leave a request and we will help you with your project"}),(0,l.jsx)("button",{className:"projects-page__request-link",onClick:function(){s(!0),c((0,i.qf)())},children:"Submit your application"})]})}),a&&e&&(0,l.jsx)(A.A,{isOpenModal:s,children:(0,l.jsx)(n.A,{setIsOpenModalCall:s})})]})}},6248:(e,s,a)=>{a.d(s,{A:()=>p});var t=a(9456),r=a(5043),i=a(3216),A=a(2195),n=a(4466),l=a(579);const c=e=>{const s=(0,i.Zp)(),a=(0,t.wA)();const{className:r,style:c,text:o,apartment:d}=e;return(0,l.jsxs)("div",{className:r,children:[(0,l.jsxs)("div",{className:"repair-review__content",children:[(0,l.jsx)(A.A,{...e}),(0,l.jsxs)("p",{className:"repair-review__text",children:[o.slice(0,300),"..."]}),(0,l.jsx)("button",{className:"repair-review__btn",onClick:function(){s("/reviews/".concat(e.id)),a((0,n.CK)(e))},children:"Read more"})]}),(0,l.jsx)("div",{className:"repair-review__images",children:(0,l.jsx)("img",{src:d,alt:c})})]})};const o=a.p+"static/media/arrow-right-black.12f4553f4ef646b5f2e3977398f7cda7.svg";const d=a.p+"static/media/arrow-left-black.a0fc5608796bc94c9a068158ad320afe.svg",m=e=>{let{fn:s,disabled:a}=e;return(0,l.jsx)("button",{className:"arrow arrow__right ".concat(a&&"arrow__disabled"),onClick:s,disabled:a,children:(0,l.jsx)("img",{src:o,alt:"arrow right"})})},h=e=>{let{fn:s,disabled:a}=e;return(0,l.jsx)("button",{className:"arrow arrow__left ".concat(a&&"arrow__disabled"),onClick:s,disabled:a,children:(0,l.jsx)("img",{src:d,alt:"arrow left"})})};var x=a(2045),g=a(8560),j=a(9345);a(8916);const p=()=>{const[e,s]=(0,r.useState)(0),{reviews:a,isError:i,isLoading:A}=(0,t.d4)((e=>{let{reviews:s}=e;return s})),o=(0,t.wA)();return(0,r.useEffect)((()=>{o((0,n.Y_)())}),[o]),A?(0,l.jsx)(j.r,{}):i?(0,l.jsx)(g.A,{}):(0,l.jsxs)("div",{className:"repair-review",children:[(0,l.jsx)("h2",{className:"title",children:"REVIEWS FROM OUR CLIENTS"}),(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"repair-review__inner",children:[a.map(((s,a)=>(0,l.jsx)(c,{className:"repair-review__item ".concat(e===a?"active":""," "),...s},s.id))),(0,l.jsxs)("div",{children:[(0,l.jsx)(h,{fn:function(){s(0===e?a.length-1:e-1)}}),(0,l.jsx)(m,{fn:function(){e===a.length-1?s(0):s(e+1)}})]})]}),(0,l.jsx)(x.A,{index:e,moveDot:function(e){s(e)},data:a})]})]})}},5929:(e,s,a)=>{a.d(s,{A:()=>m});var t=a(3216),r=a(5043),i=a(2382),A=a(6741),n=a(9456),l=a(7856),c=(a(7045),a(579));const o=e=>{let{countSlides:s}=e;const a=(0,n.wA)(),{projects:t}=(0,n.d4)((e=>{let{projects:s}=e;return s})),[o]=(0,r.useState)(t.slice(0,s));return(0,r.useEffect)((()=>{a((0,l.RT)())}),[]),(0,c.jsx)("div",{className:"repair-works__inner",children:(0,c.jsx)("div",{className:"slider-container",children:(0,c.jsx)(i.A,{dots:!1,infinite:!1,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:1100,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:690,settings:{slidesToShow:1,slidesToScroll:1}}],children:o&&o.map((e=>(0,c.jsx)(A.A,{otherClass:"repair-works__item",item:e},e.id)))})})})};var d=a(9165);const m=()=>{const e=(0,t.Zp)();return(0,c.jsxs)("div",{className:"repair-works",children:[(0,c.jsx)("h2",{className:"title",children:"COMPLETED WORKS"}),(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(o,{countSlides:6}),(0,c.jsx)(d.A,{text:"Portfolio",arrowRound:!1,fn:function(){e("/projects")}})]})]})}},4793:(e,s,a)=>{a.r(s),a.d(s,{default:()=>I});var t=a(8423);a(5043);const r=[{src:a.p+"static/media/services1.14cd7d813c373258f85453fd88663d66.svg",title:'"with your design project"',items:[{text:"Your design project"},{text:"Our repair"}]},{src:a.p+"static/media/services2.b5aa208c82a8512fbbdd7e11181a69fb.svg",title:'"turnkey renovation"',items:[{text:"Planning solution"},{text:"Design concept"},{text:"3D Visualization"},{text:"Selection of materials"},{text:"Construction drawings"}]},{src:a.p+"static/media/services3.93efac61fa9b0c9a1167b86fe8fde572.svg",title:'"all inclusive"',items:[{text:"Planning solution"},{text:"Design concept"},{text:"3D Visualization"},{text:"Selection of materials"},{text:"Construction drawings"},{text:"Facility renovation"},{text:"Furniture and materials"},{text:"Final decoration"}]}];var i=a(579);const A=e=>{let{text:s}=e;return(0,i.jsx)("li",{className:"repair-services__text",children:s})},n=e=>{let{src:s,title:a,items:t}=e;return(0,i.jsxs)("div",{className:"repair-services__item",children:[(0,i.jsx)("img",{className:"repair-services__img",src:s,alt:"Services"}),(0,i.jsxs)("h4",{className:"repair-services__title",children:["Rate ",(0,i.jsx)("span",{children:a})," "]}),(0,i.jsx)("ul",{className:"repair-services__content",children:t.map((e=>(0,i.jsx)(A,{text:e.text},e.text)))})]})},l=()=>(0,i.jsx)("div",{className:"repair-services__inner",children:r.map((e=>(0,i.jsx)(n,{...e},e.title)))}),c=()=>(0,i.jsxs)("section",{className:"repair-services",children:[(0,i.jsx)("h2",{className:"title",children:"BASIC SERVICES"}),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(l,{})})]});var o=a(5929),d=a(3361),m=a(5037);const h=[{id:crypto.randomUUID(),num:"01",title:"Draft",text:"Dismantling, plastering, screeding and other works",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA6CAYAAAAOeSEWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALcSURBVHgB7ZpNdtsgEMf/abvpqu4JwrK7+gYhJ7B6A/UEzQ2qGyRddlX1BM4yO+sGzg3snEDOCRImwBNWJFkYZOlhfu/NQx8IMQzMINAF/HArJFXHOyFbI31W6VbdN49PygXcIUW/CrmBVJAJmSlhxvmlcW2mnt2iapQndazPtXjDh7JrIT+FPMIehkp5nV4a1/8IucOEWArh8A8TUqLqBZOAC1lhGIZqSCfIAnP4hQnZqNQLH+GHz0K+CSngD+otf4U8YGLQuNqgfXyR1Rn6Qx4+w4Qhr3ljnJPiKaSFyGNvavfb+I3hfIA3OGQlSUmqMClnOphEyP2BMhJ4HqeukDJkoQzScrrrckhHVap7s1r+DapZVhMMsgcwTAAOOZao0tRlUyG5OicFV9gPE2b+f+gOIXrMJxgZjmrcZXjvhFJ1r56/bMnfxBIjOiQ97pos1gRZ5Vbl15bsC71nlCkhh71VCLLsHaoPgLLnc7/QHbIGgcbKSkli+XIGWWGTPr1hjhE8r3b3HHaYXrY+VeTojpWs5bnBWVu+lGPfK7OWfCXaG7DvBMM7Lz3zcUhrUUUzHO7qlKfJ8Yw6FexyELZeuf5svWwqa40Roe60rF3j6pqtV66ToZoy6ikkw8hkqOay1PJkRWoEHyEhVeV1je+TwyAtwBAoPhbcjoV6zSlDz25MZXPIlcQt3KBG4+j+fGQYmRzdn3x9YXg/g6vDhaw+4IyIyoZKVDZUzkrZoeLs5DakBMVQlt1BNqSr/IfcDnUt55oqFcdsqERlQyUqGyqfYE+frY0Z7LZA2riC/Oa9ghtvMf+YSQUtvV7DnVSlOdzQDfujIw+tiCyOsSxRwB3uqSwGOYkpDuRbRAcVKlHZUDnbODtH/0XrFO5891SW3u1PO/JQrN6Ls7mQL5Bu3AWmpIA7iSrHR532yOHnD1AOf3+o2W6TtsERF8kDJiobKlHZUDHjLP3zsEC4PL4C/wieJDFwJ6UAAAAASUVORK5CYII="},{id:crypto.randomUUID(),num:"02",title:"Engineering work",text:"Electrical work, heating, water supply and others",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB7ZrtddMwFIZfSgcIE0SdgDJBzQRNJ6iYAJiAdIKWCTATFCZImKBlgqoTEP7xE7298onryLLkj8bu6XPOPUmurmxffVzJVwGeOa/RHWXl2MrGyj+kozrWD/IK7VFWvrnvBtuH/G7lh9NrK29L+lunz6ycWlmUdKyfW7nACFBWVpCHquqvrNxY+WNl6Wwyp7t29VZON6vUp/0lRgB7TjeUf6ro6AydVAizwq7jT85Ny3I6rRHmKsImmgO0Y4ZwK9eVU7dBmE2ETTRtHWTAWDSU64qOzp2j+eFpc4s9U8ynapDJIEHizsml0y2cPedmEWQ0HvfyzNkv0SNDLBNfrazdbz4we+MvZLnQVu5dXc7HU1d34+xZ9woDw9YuWrkpWhK2vMLunMuwbQCSW5kH6g/CoUfHlvwJWawVtov155prdA0KvQaVKgeBmxrIUNOQoawxQQ4j7ZaQXUheU/4RuwFn5nTFMD2BzK9yb/H7BQbswVgH+QCqpuyLlTdo3kNWy9kAGaTh3mMgYh0MkVk5Q7teYIQ9x4CkOKgga5tP3zXI+K5rIA3AgLdGS1IcNFaOPPoVuuO7bjGHNWQec4jnSKTtVu0pYM+uIQ5yjmaIext5xJgdLGMgjnItZm+q2IpTcbBgbeUDEpycmoPEQObjdYzxFB0ka0h0XTYZTtVBwl0R19BgemPKDhaZOh0ymrKDJIe8U9aSstBzKCw9eoXuLEvf14jfuZim+6f2oPFIHxhs3+w10lKHrDevK0zpQd489+g5RDK02y8qiCN5Ra8ha91ZxDXuQ4WpDvrg7oItbpCOgj9TkGMbITu9K8Y6qFGfyjOQzbJCOiZQViSnOqUQYxzMIG/sTcPFoH9i52EtdQ7SofIQoXMGE6QuL6rc56AZr8C92cALxEXqDBLgLny2XRK/Q6Ag0ZMJ4NSGLaJupzk7NOy1JdqhfXXHtlVjr52gHaxnqso+smp9sobMKSahTHy1h2D4G56NyNjmYEHT+WOVfQTDF16ooCB7XpVSaaxz0AfXOT4vj/LexVaayhu9Ln3+Qs/H3PtGYXdo3mHAU+GnxneMnqGfM5G9o+A/eSI5xNFJw96r+z+OwjPoxbuGcjo4DxmMOYoqyP4yBMuPQgZjPx+cN9jMMfE9aPG/Uh8KzUN49Cj4T3X5m84dN11gCls1hcf/iVPuO/Opo05PpKIgw1XhhS3/AQBxw+OJyl+yAAAAAElFTkSuQmCC"},{id:crypto.randomUUID(),num:"03",title:"Pre-finishing",text:"Plasterboard works, putty, floor coverings and more",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARFSURBVHgB3VrtUdtAEH3J5D9OBREVABVwVBBTAaICoALsCuJUgFIBUEFEBUAFERUEKkj0crujsyydvs6WyJvZsXRanbS3e7vvTgb+M3zooHuRyzyXCLvHay5PuVzJ8WBc57LKZYbxEOfyE4EQrKOBSHI59Cl8RDMiTAcZrEG1kdJk0CNsuI0ZamV8hY0YU3XRZxATwH0u5wg0EQPhO+w7nVVd9Bk0Ja+UUTvAn/B+wbm0kGOm9DsetEkKU8UbbJKgmFwu2fiePfQLNo275yufhzJMdx7xvd6qLvg8lMLSHabICNPBN/k9xQBMhSksUFN/YEOudVKYYRrhd9Ck0DYp0JibXJYYr8gy/A1sYa1FW4MyWNZwgfHwDL8x/wa6S9pOsJ4mQ4NRwAGLcnmoedai5l7ex+I6uLAa2KxzCX8mNPIyc48OEw8XnAzrGfyJiNdj2GlAQ/ZhF3+tUdV5LO1z5ziq0CNbvxW9BSyDL8PIy7lYYT2jGennUZ5VOYhDmALdfIIiSWTykEtHR0dyX87v5JdtiaMX5fJS6p/9nokcwdZF4so53sCQkHvFesbLctkr6RxWPJznEepBT9ITmoCW0g8H6hkNmBKX4+DQo5yT9AgNyERaIyTbzmDj3C3ALIQPJT1O4uNS27G0q0d717ouHjIowofhUOV+hgcnLesFw4/hc1TS4cvSyBv5pTFv0rfBQLQ1iEteZhaOonqgihwmKF6Musua/haw84h6P+CZ5NvGIbbLvA2K9K1p3sVt0/O7JoUn7A5M8axhumvK3R6Geea7yTVIa0ZoVp2if0hx/sWwnrtv049rEN3JeA7tBeVnCfohQQ8Y1BO/oaDH71rqGmxSoE5QD9Er19gOSF1+N+jEsJ7U+qPc8QQdoQZFInxwyJCbSb9NHqJOmaMNWvYrU+Y8+oJw0P4S+L8aHGLdAKbsXqGnHqKr/8BW7M/YZL59MZO+9uCnMwZ2QBdyTvaQSVuGDlCDdFM+k05ChZ2GXIT6F4vl+rnTlsovvdRpHqlBjHHlYBHC4gz+vYBInp9WXOucqNyQ40O1GoeAbn3FKBZ4W4e7fFjJ7x7CQHlf59Q7BOX1EON4jobvmC2hoZZhhyiT0ww2/DgZSYOYbWbSvkT1y/E6B0GXzCmK76DeTcFtoIptZ7BrHdYFLXYGRV1gBtSdf65IOT84qXXD5FHum2PH3iGqDNJ64S6dUxRZyDjtCdZfeib3U9elMqMiQREyrPQ3aJ5T1GWK5ReAWNraUpcF6pfenelPXchFsKF1iuJz34G0vaD4GEZaQ2N1n+AIhVdCr6tawWeQIkURbpqKNbSoO+YXiQ3UGTSv0X9CO1oUYSQjq/blMgwvrhG6MY5g4VllEEd2aGHVkGyDFJZylRE07TduF3mg2dF0uCeBzZKRnBv0/Fhd9wfACHaPuY+n6BmyjBW6IYalSxwQZswFpvUfo3HwF6ix79YPo6P4AAAAAElFTkSuQmCC"},{id:crypto.randomUUID(),num:"04",title:"Finishing",text:"Installation and decorative coatings",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA1CAYAAADoDQMKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPDSURBVHgB1ZmNcdswDIVfM4E3KLuBO0HZDbxB2AmaDaIN4g2cTpBs4OsEzgZ2J2i7QfROxImiQUqyKUX+7niNKJoCyAfwp8DtYeqyr8uxLru6rHBjrOtyqMvGP/Pvz7ghfqIx2vhn/svZuJmZeKrLC1qDZUYsFgYNdGilQgwa/VdBHWfkiHZGFsMjmpF9qMsz2lEO9U+e/PtFSYjGMMNs0TWMzvxFV//xjCwGyuIh8Y6OcYbijLQobF1ee9pw9MOMpHKH8lAWFq08jDeGJRzNNzQ53mT6+oEPQKZ+h1YCEqQG56Mq73OByjZbzMQ9ukY6dIOTiJMyWwdv4C7T77rnfTGY+iiXeEQr/y7EoXEudJiOpAJ8538zGTS6L/Xx/X1UJ5kn7IeZykZ1si5MhkjD9bRb+XbrqF6cC42V2TFoF7/JiPUvhJoPMUq9OBcauw7qLCYkpf94lxnj/O9CaPSsO9Gc/uNdZooKeqDvMQMp/RvojonD2lZhSKAXp0//m0S9S/SXC/RJTmkp/ROHc8dSDvcFevxchCH5PyblMGWirbgb395Cn5mrGJr/hZTDQwaC7+KtydWIHMaMCo2N48JAHwhNLsxqFoWQPH+tLlNxcZ/onwtdhQIYlFl0qP9UXGj1KYcvInV74NDetsnO02X6sdGzxIV2HshlvtFY6NnjEd0DvIzYM4bt7w3ScVH80E+DbFTn0DVUPixse4yQE1ucIMZmvsEclLpYXhbnTh2RxmBi/YfcKR/j88mXsO5P8PyvLr+RTsUn30ag/p2vK7qoEe22Qws0g65Rubbxe8rwf12+o7m9YCovutnTnDjhXA78+y1q902pC+GIS/Z5DfqmM59QWFra7rFC92j4gq4MHPIZKtS/gW5wuHe6Gm3FlMAVR8J8bpEfRW1hE4NjDAqd7GR/r22Xn9EudLI47aE70Jf/K5yf6ghndIMCVIkPEINm9PmhVabNkPxPWYYylf1aMbRj4xDG5H+ZdQv9Sj/1m8Fykw+MSX+cvSPSs6hh0Mqzzx65FT/k2ocpluvAVzTpj4a5TOcPvmMugF/QZK6hs3hCs17kFj2DxoFf3iaxy2EEBu2NHDujluWmm2tDBf0izGA4FfTRTcnT4oqL5RXafJ/TZur2L0cc6Klzh7xzmAGHcRdhYaDn0rM4NxtbjEsOBukYpJMvmPE/WUIuTdchBjPcjOe4JNBDNpjgLuoSLgl0Ivo3WAgOwwPyQ/Xfx5BAN5jo7F2SXKAvRv99pAI9t7gtEgl0i8aZxeq/D4NmT1b0EvkdGxkMfPfGqrgAAAAASUVORK5CYII="},{id:crypto.randomUUID(),num:"05",title:"The final stage",text:"Furnishing, decoration and cleaning",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKASURBVHgB7ZrtUeMwEIbfu+F/0gHq4LgOnAqAChAVZKiAUAFQAaYCoIK4A+gA00E6AO9IIptFxI4sMVbwM7MjS4plv9HqaxNgT/ljU9WYRn/KxmoMCN3YewS7w0A4EPnTxl4QxisGhBS2wsBcKZS/2FNGYbkxCsuNUVhujMJyYxSWG6OwXNGIcx7ra9GOPvLYUjb2hjAuYc5yTwjjuLEjREbDfGMFwul7gi5tG1EYJ48eTBs7gQkY0XVhr5NygLSQoIdv6ii+8ohEpO6xOUwMhUSsrLlrjYSkFDZl5oJEK1tH6SESuqR0xQf2cAmV/0d3qC03fS9FueMGxl2jI4VV8AsrELbG0Lp2AdNr17btC1tH+QkSIYXdwoiTlAhzmxVrb27TitUlY2/XMdljzl0kcqxUjV2hnQLr/Z+bSHg+NJzeihTmHi5xU7Vi1kVYjbXrnXjyyZDCzuEfYxzqNYVu1LZNsHtkPgm/ZoydoX2Hr2DcdeGpO2LlyqZd8/9EPhRaGz/nCY1hHDRjmCZB0hVnMD/fhhhR9rj/3rYRev+MC/k1Y2yIfLcESTa2ZzkIWyJgn9pF2CXWZyeabWZIvM8TuB0KDxK5wM8VKzsEO+N1EVbATM21bYy6/CeFESRswfIKm0sLUWBHYUQNs/O/RnoKke8yvr7QJkxh3Vtuw3qO/ovoNpaIQJuwOxhhJIaE1TDnqhLp/g8y87zDzmwTpmHcggZoxR76DPOtUpggxVirEIFtC/TcPmTBymqYsaaQIBwdk23C6MVrT3llU4UBM4a4c0NOHgqbLjbFV5ebsFTW+T7flQl7B7S06/usN5SnkdeZq/U85nrsEQOfDHagwj7zAWlhBYrr4+/fAAAAAElFTkSuQmCC"}];a(8267);const x=()=>(0,i.jsx)("div",{className:"repair-stages__items",children:h.map((e=>(0,i.jsx)(m.A,{...e},e.id)))}),g=()=>(0,i.jsxs)("section",{className:"repair-stages",children:[(0,i.jsx)("h2",{className:"title",children:"STAGES OF WORK COMPLETION"}),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(x,{})})]}),j=[{id:crypto.randomUUID(),text:"Complete \u201dturnkey renovation\u201d",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA4CAYAAABdeLCuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJGSURBVHgB7ZrJUcMwFIZ/lgM36ADRAUeOpgKgAqADqCChgpAKEBUAFThUAKkg6oB0EPwm1kzGeXK0xdvom3kXRaP4sxY/yQbCEUVMilgUsWoh6H/fyuuIwn0RfwBWHQi6jksEItAdoU0xcQR/aMhdoVucFHFwAH/orpyhe6gQqRVT9ltGU2SIuEAQ3Jgeo1kkdx2HGCBJqi8MUuoYzZBje5X6KuKJqfuB7cxAFXENS5qSEtiWOjXUPUPgMp3mVF9IC0UAlDqpStncUJcrV3CgKak7h7pPCCTNqb6QpDYYGcpv0IGNo89CQUJjw2+U3lBKRCnNEn5Q+6JSRm09Y0/QH9ocgPzAv8dy8MdgHBKBm8S6Hqqie6yVoWgr5SKkaU3MRmqX0BTmJ36rPWZi1xwal/UE6o+dXeaYLNvajLymLvd/wULYg5gtEg5SrkIagWbFJCylfIU0As2JSVhIhQppBJoRk9ghFUtII7B/Mcm1rdOk0Y6LfoG7lMI6XcrBH6SYUqoH8GnSKxx4QH0PTRCGQP17rGqP5UydhaFtybVJD98R6pkjDIX65JZ67BYRoeEn4EfOlL1jffdcEYgISc2wfs/jSsaUfcMPiYjQ8Hss4hPtoPdJChE5Lhuk054M5hxrH0isb2gV6zNzE+kws4Jiyny38FEJkbpAR0lHZH0hSfWFJNUXBim1+cFVBj5NoreAoQ/VjClTCM/5aNuytXu2efgGf+1oQCDylkMz+DmlMAyWVakZ+s+0+mUmTTo6tTlHP6Gd9/gfeaZrI+P4z70AAAAASUVORK5CYII="},{id:crypto.randomUUID(),text:"Meeting all deadlines and budget",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA4CAYAAAC7UXvqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIySURBVHgB7ZrRUeMwEEAfXAN0cOrgXII7OK4C1MHlly/oIO4g6QCoIFBB6CDhky/cQbBmkhlmvVISW5Ix4zejTJSsd7PSRtqVDXDTtI+m7UbWNu63X+zfGMZJfdm8XDFe6l/Ny3vTCsbnSN2024uAwE70Q7IpOMn+JSNncmBofrQDtejnXKWkrdoneI4DhnwUor/1CYYceBH9knxIB958giEHXkX/L/mQth7pgKGdQBnSY2LaXQlFC9KzEDZX9MDSHo2CdBjFnqUnG9p5eIol9cpjqzcl7VFJEUoPJBj9A5Wi3BmMMRNOx0LRXxERZ2SNXtYZulPQDptkYWo8xg4hZc7UNcdf6xoSYfA74Q4GZifo+I//EGFNhr3GTW2F/7Qg5MRd4LqKzGWtxT8bRpE3+EOmZEAs7ZDQVpAF3UIuC9e0R1UiZ8sSgZgnDbsjuo9934mpJh6ayYE9VvS3ioz87Jpvgrazatmq3PzcNZYBKYm3kVky4rZ7XyLm2n3g2lngujkZUgmDnlafs7PO8CdzGwbKRCvOT6eXZHRCq1cPxvoU+cajd03kcNJifkm8klKrh+dEwirKH4jPUrFTEgE5xa4/mmMVy2lrfCwKxZ6lByuO77CxWQqbKzpiyDv6Ibu/fcKhZK4U/WcCNxoist3b+so/n3DIAXlG/0Q+pK0/dECmDCX5kH/mTquRzFdy3+STeZbK9KjB0EwODM2PcOAGvUKS7DK3Y/Y3TM/MDc/4n5n7BNt+mDO1pkG8AAAAAElFTkSuQmCC"},{id:crypto.randomUUID(),text:"Repair warranty up to 6 years",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA/CAYAAACmVEtSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATWSURBVHgB5Vq9kuNEEP64SyAzGdkOT3AmI5yQ0DwBegP8BhYh0TojlHkCLyGR9jKIZEIi+TIyb0hmZlY97Hg8P92SfLVV91V1eaXp/27NjEYLzA9t6N5Qb+hM1BlqDCm8YiwwOH4u0D1eIRSGLJ+Z1OEVVUPjsl24ZGUqTMRnAt4FObsguiMHFpiGo6FHQ38ZeqLrA/09C7ShFvIMT6U9ZmizjcDgydAWQ1WWgXFFiVgZ2kHWchvc2PmWnJNCYwiGY2MNIRTkjrtnxE6Tdpbxs9wTvx1b4fK5UeC16BIClBSuA8c3GFpI0m4NLttsjXLCWFAFw9rjlTpe6nGb5T7Dy5rxdMb5pRekZOEqUY+Xaiikg2C1UVUQVuDPIj34FfKDWCbkKjAQ68V6hPPOYC3g94NYY2QATSDUeWMS53uSsX17Esq5Xm+DsS0YCJ1UdH8jcCLMVi2UdTtWFdxvUUAVCDQJRdzsO0ir4CduF9zXSEDhOvuOuREaryL6a6EOlzyNdItdZKhDOovSHo5BWoUTXhztg7HOjb0lhl8MfRcYfDD0G4alv0IaRwzb4T8M/WroZ0P/RPj+NfSnoQ8k80ROfJ7Qa+//jWFr/bWhb72xr2j8d3uhkG+DLa4zvCK5qe8CIB1LxNefhnhWCR81kO5vTcJtRvFcUIhP0b03HvPxeVpNbQnuSLhPjP/fhzdy3j0HIDspH5IPkcM5Q1ODUCgvjjk/TlMDmBKEAm9lLwaQUnJHghwjPWTvrwr8bUkugO4Nhqkyhi/pl3M6oCALQDP5D/Sb2ka/twE8JAad0HvwcAAfj0y+D/SrEuPbN6QsFoQLgOPYE2TnOEcmv/NLR8Z+Ij3PsA9h2JP+FFbaArSQg/NGpxK8+5hChfRmblswFNunawosdUBV0tkQ3xLXE0Zy1guX7NYLLmdsjctENAmHlMdXOoVwvKEujQLCdnHPQp0xpsE/XneBLFGuqArud2AgLG1L92Nbbkf3kL+w7JFeU1yLNCi36hVipV17GemFjkqox0vrVJHxCgzEBMMzoVsEEdqIVXQFBlJ7bz87cwfB1a3BwKJgyF/W65EOh329YDh/hmDT2BaMhtPmTuCwa5d9kIwfkZ8IGgigGU40uP6IUVEwXeCM/bsnGRv8mON1BSFqhlIXyBJyaPCPa2qMRM004J4P9wEjDMhmXNGY+wDCbbU1JmKFeY/SuY63YLRN7jPrBsM5z5GuFYbMumy+w/XHvDF4IjsHuj6Av91OQuGyx3WGt8K4NeGE/MqqMbTbPsOTrEATUW4z4j5AW7Jvao8YsqXALDnB6vmeZBdk6x2NKbxU2uEbCN74FGQPbuXJ7RgyO885Dd4msIEAnC1xSBtPXpOT4ToQtuIPAv3+QW8WCuP3OA14LcR9bwipZuhOfuDjUsXQP/azLKsKPcY736MMPUF/sQrVROUVeOgn2MhWIae4Rb70VlaBh9LLfFfwJbq1qBJO+zvHbUZpAz5K50yK+DSuZ7Nkq/beYI14NjXDKBc10tmPocLlllv7g3bV24L3uhbLnCT7DqkqVAU5RTxjbD6jxvTs30IXGwrTs+8QVuEBHwl+LypMww789pkNbhqcI2MKmZnlVnCl15gHtqKjW/Et5LBf3L/AUP45YL/C2H96PeJTxH/YqoC5uRl8iAAAAABJRU5ErkJggg=="},{id:crypto.randomUUID(),text:"Recommendations to friends",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA3CAYAAAClxaIBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAScSURBVHgB1Vq/SytLFD55PLEQeYudIGRf44/Gt2ihYJHVQgQFA9pZmIDYKLx02t3cv8BcwcLKCAqCwo2FttlbCFqo8VchKFmDIFZXKxGEvefIrnczO3uTXTfr+MGYzNlxd76d882cOZMIBAjDMCT8ULCopqlAJRKJ6PAZcH19/f/c3NxPVVUNSZIMNBmKohiZTMYoFotfQHScnp5+l2X5teO8QtcODw9XQFTs7+8v/IkA2IiUSqUFEA2oATWRSFQkYJV0Oo3/YsggEsiNgNNZ0kU8HnfYSSuojzSIBBItMB3d3d0t0ghhUeg7e317e/sYRAF1lN442DpIb586b2uTiEajZW0WFxeLEDD+Av9QNU0rMwwMDOi4JhQgZPgmsbW1FWNtbW1tJ/AB8E3i4uJCtddxCoXBwcEc00x6fHwsMzQ3N+sQMHyRID2wroT6oA/WlaSHhweoNfyOhINEV1fXh+iB4IsETw+xWMyhh9vbW4m1tba2PkLA8EyCIlWeHjo7O1k9wP39vYPEy8vLTwgYf4N3KFXqgYv6+nqZ1g/wDhIXN6z3QyJerR4wxIiytpGRERV+7zeqBoYsgKE9BZyZnp6er/g8/zPG5uZmHphQ4uTkJFdt2/cWiob39vaOzQ3YKzxpwoseagVd12F4eFjBfny3bF6F7aYHjdf47u5OhhqA1p7Z2VnV0pYnTeCU6aYHnde+qanJIvluFAoFsC+c1A+c6ifxa9YTCRTVf6ytr69Pc2s/MTGRxAJB4PLycqG3t1exE9nZ2VHtUXNFkB5SqZRDZD6nS8+gHSElInjP96IJhYbUjj/pIWiQy2KUrNttJHKEXDUJr3qoBRobG7lrQ9UkvOohaJA7kQbsNlr8EIVXYd/c3HzZ2NhIPT09SW43WVpaAvYGOBI/IAQQgYODg3w2mwW2D0DhDjaI8zITlQqlasJIv9Az1tfXi1ZW0V5yudyx1SgNAJ5J0I0hBNCsuLy8XDYrwe+XmKA2vren7e3tGoQACvSmp6e/UXjDQZ7++CIRph5MZNDlywzm9Pov/eGu2Gtra3pHR4dm1RsaGhR8828rI4XFdB8ICTQamAJ1vc4lgRsXvbu7O2nVTd1Uv7wHDAotksmk6/X3JM9CAQkb46YV1+kVBCdhEsgPDQ05vAA1olm7O9FHQpmfn1dMEb+BYjbMrqxadaFJ4JvWMJTXWPvU1BTFbFmrLrwmxsfHV03/f8PV1ZVsrwtPAqGxJMi9UC9Rq/4ZSMisJmj1Rne6serCkzg6Oppk9zG4d9ftdaFJ0Mns2NhYgrWz+xg/GcBQQAeU/f39KdaVMHqluG3VbhN2JNDvNV7kiiRokdPsNmFJUEdnZmY01v78/Ow4GhBaE7hGbJsR8xswDHHs9T/DFFsRQpM4OzuLsWd+vINL7uxUV1cnMUmAfzjN5FomCkql0uTo6GictWMq03GsxiWRyWQUzCS4JgIoE4iblBWoIegZbMaRpteWlpaso7HfbMdHlPPz8zzw8FlIUDLZ1X3xQoqXmBKQgEMfdhIS/fKlml+PhV3oVzyU5at0BhExicj4QUwlEAuOEIOHX4CHPVWFyTknAAAAAElFTkSuQmCC"}],p=e=>{let{img:s,text:a}=e;return(0,i.jsxs)("div",{className:"repair-result__item",children:[(0,i.jsx)("div",{className:"repair-result__wrapper-left"}),(0,i.jsx)("div",{className:"repair-result__wrapper-right"}),(0,i.jsx)("img",{className:"repair-result__img",src:s,alt:""}),(0,i.jsx)("p",{className:"repair-result__text",children:a})]})},u=()=>(0,i.jsxs)("div",{className:"repair-result",children:[(0,i.jsx)("h2",{className:"title",children:"RESULT"}),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"repair-result__inner",children:j.map((e=>(0,i.jsx)(p,{...e},e.id)))})})]});var v=a(6248),N=a(3808);const w=[{id:crypto.randomUUID(),title:"24/7",text:"Your personal manager is always in touch"},{id:crypto.randomUUID(),title:"Observation",text:"The facility is under 24-hour video surveillance"},{id:crypto.randomUUID(),title:"Documentation",text:"We will prepare and approve all project documentation"},{id:crypto.randomUUID(),title:"7 years",text:"Guarantees for all work"}],U=()=>(0,i.jsx)("div",{className:"intro",children:(0,i.jsx)("h1",{className:"intro__title",children:"Repair"})}),I=()=>(0,i.jsxs)("main",{className:"repair",children:[(0,i.jsx)(U,{}),(0,i.jsx)(t.A,{data:w}),(0,i.jsx)(c,{}),(0,i.jsx)(o.A,{}),(0,i.jsx)(u,{}),(0,i.jsx)(d.A,{title:"NOT READY TO ORDER REPAIRS YET?"}),(0,i.jsx)(g,{}),(0,i.jsx)(v.A,{}),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(N.A,{})})]})},2195:(e,s,a)=>{a.d(s,{A:()=>r});a(8916);var t=a(579);const r=e=>{let{owner:s,complex:a,style:r,photoOwner:i}=e;return(0,t.jsxs)("div",{className:"repair-review__box",children:[(0,t.jsx)("div",{className:"repair-review__box-img",children:(0,t.jsx)("img",{src:i,alt:s})}),(0,t.jsxs)("div",{className:"repair-review__box-content",children:[(0,t.jsx)("div",{className:"repair-review__box-name",children:s}),(0,t.jsxs)("div",{className:"repair-review__box-client",children:[a," "]}),(0,t.jsxs)("div",{className:"repair-review__box-text",children:["Turnkey apartment renovation, ",(0,t.jsxs)("div",{children:[" with the selected style - ",r]})]})]})]})}},7045:()=>{},8267:()=>{},8916:()=>{}}]);
//# sourceMappingURL=396.5c5d223a.chunk.js.map
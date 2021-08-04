(this["webpackJsonpla-luz-foundation"]=this["webpackJsonpla-luz-foundation"]||[]).push([[0],{37:function(n,e,t){},38:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e);var i,o,a,r,c,s,d,l,h=t(0),b=t.n(h),j=t(14),p=t.n(j),x=(t(37),t(38),t(3)),m=t(31),u=t(4),g=t(15),f=t(16),O=Object(f.b)({name:"menu",initialState:{options:["Mission","About Us","Our Members","Apply Today"]},reducers:{}}),v=function(n){return n.menu.options},w=O.reducer,y=t(29),k=t.n(y),L=t(30),z=t.n(L),M=t(20),D=t(1);var F,A,U,C,T=function(){var n=Object(h.useState)(!1),e=Object(m.a)(n,2),t=e[0],i=e[1],o=Object(g.b)(v);function a(n){switch(n){case"Mission":return"mission";case"About Us":return"about-us";case"Our Members":return"members";case"Apply Today":default:return"/#"}}return Object(D.jsxs)(S,{children:[Object(D.jsx)("img",{src:"/images/logo.png"}),Object(D.jsx)(I,{children:o&&o.map((function(n,e){return Object(D.jsx)(M.a,{children:Object(D.jsx)(M.b,{to:a(n),children:Object(D.jsx)("span",{children:n})})})}))}),Object(D.jsxs)(X,{children:[Object(D.jsx)(W,{children:"Donate"}),Object(D.jsx)(B,{onClick:function(){return i(!0)}})]}),Object(D.jsxs)(J,{show:t,children:[Object(D.jsx)(N,{children:Object(D.jsx)(P,{onClick:function(){return i(!1)}})}),o&&o.map((function(n,e){return Object(D.jsxs)("li",{children:[" ",Object(D.jsx)("a",{href:"#",children:n})]},e)}))]})]})},S=u.a.div(i||(i=Object(x.a)(["\n    min-height: 60px;\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px;\n    left: 0;\n    right: 0;\n    z-index: 1;\n\n    img {\n        filter: brightness(0) invert(1);\n        width: 20%;\n        margin: -15px 0 -30px -10px;\n        cursor: pointer;\n    }\n"]))),I=u.a.div(o||(o=Object(x.a)(['\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    \n    a{\n        font-weight: 600;\n        text-transform: uppercase;\n        padding: 0 30px;\n        flex-wrap: nowrap;\n        opacity: 0.75;\n\n        span {\n            letter-spacing: 1.42px;\n            position: relative;\n            color: white;\n    \n    \n            &:after {\n                content: "";\n                height: 2px;\n                background: white;\n                position: absolute;\n                left: 0;\n                right: 0;\n                bottom: -6px;\n                opacity: 0;\n                transform: scaleX(0);\n                transform-origin: left center;\n                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n            }\n        }\n    \n        &:hover {\n            span:after {\n                opacity: 1;\n                transform: scaleX(1);\n            }\n    \n        }\n    }\n\n    @media(max-width: 825px){\n        display: none;\n    }\n']))),X=u.a.div(a||(a=Object(x.a)(["\n    display: flex;\n    align-items: center;\n    margin-right: 5%;\n"]))),B=Object(u.a)(k.a)(r||(r=Object(x.a)(["\n    display: none !important;\n    cursor: pointer;\n    margin-left: 25px;\n    color: white;\n    @media(max-width: 825px){\n        display: block !important;\n    }\n"]))),J=u.a.div(c||(c=Object(x.a)(["\n    color: #393c41;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    background: white;\n    width: 300px;\n    list-style: none;\n    padding: 20px;\n    text-align: start;\n    transform: ",";\n    transition: transform 0.2s;\n    li {\n        padding: 15px 0;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n\n        a {\n            font-weight: 600;\n        }\n    }\n"])),(function(n){return n.show?"translateX(0)":"translateX(100%)"})),N=u.a.div(s||(s=Object(x.a)(["\n    display: flex;\n    justify-content: flex-end;\n"]))),P=Object(u.a)(z.a)(d||(d=Object(x.a)(["\n    cursor: pointer;\n"]))),W=u.a.div(l||(l=Object(x.a)(["\nheight: 40px;\nwidth: 150px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nborder-radius: 100px;\ntext-transform: uppercase;\nfont-size: 13px;\ncursor: pointer;\nmargin: 8px;\nbackground: white;\nopacity: 0.65;\ncolor: black;\nfont-weight: 600;\n\n&:hover{\n    transform: scale(1.05);\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n    border-color: rgba(249, 249, 249, 0.8);\n    transition: 0.3s;\n    background: green;\n    color: white;\n    opacity: 1;\n    }\n"]))),E=t(10),Z=t.n(E);var H,$,q,G,K=function(){return Object(D.jsxs)(Q,{children:[Object(D.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,muted:!0,children:Object(D.jsx)("source",{src:"/videos/site.mp4"})}),Object(D.jsx)(Z.a,{bottom:!0,children:Object(D.jsxs)(R,{children:[Object(D.jsx)("h1",{children:"LA LUZ FOUNDATION"}),Object(D.jsx)("p",{children:"At The La Luz Foundation we build relationships and challenge individuals to act on their faith and values to create healthier communities."})]})}),Object(D.jsx)(Z.a,{bottom:!0,children:Object(D.jsx)(V,{children:Object(D.jsx)(Y,{src:"/images/down-arrow.svg"})})})]})},Q=u.a.div(F||(F=Object(x.a)(["\nwidth: 100vw;\nheight: 100vh;\nbackground-size: cover;\nbackground-position: center;\nbackground-repeat: no-repeat;\ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\n\nvideo{\n    object-fit: fill;\n    max-height: 100vh;\n    min-width: 100vw;\n    position: absolute;\n    top: 0px;\n    filter: brightness(50%);\n    z-index: 0;\n\n    @media(max-width: 767px){\n        max-width: 100vw;\n        max-height: 100vh;\n        min-width: 100vw;\n        min-height: 100vh;\n    }\n}\n\n@media(max-width: 767px){\n    flex-direction: row;\n}\n"]))),R=u.a.div(A||(A=Object(x.a)(["\n    padding-top: 35vh;\n    opacity: 0.65;\n    color: white;\n    margin-left: 10%;\n    text-align: left;\n    font-weight: 600;\n    width: 50%;\n\n        h1 { \n            font-size: 100px;\n        }\n\n        p {\n            line-height: 2.4;\n            margin-top: 2%;\n        }\n"]))),V=u.a.div(U||(U=Object(x.a)([""]))),Y=u.a.img(C||(C=Object(x.a)(["\nmargin-top: 20px;\nmargin-bottom: 20px;\nheight: 40px;\ncursor: pointer;\noverflow-x: hidden;\nanimation: animateDown infinite 1.5s;\n"])));var _,nn,en,tn=function(){return Object(D.jsxs)(on,{children:[Object(D.jsx)(Z.a,{bottom:!0,children:Object(D.jsxs)(an,{children:[Object(D.jsx)("h1",{children:"About LLF"}),Object(D.jsx)("p",{children:"LLF sees higher education as an agent of change for individuals, families, and communities. We envision a community that recognizes the importance of educational attainment and assures positive educational outcomes are accessible to all regardless of economic circumstance. "}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("img",{src:"/images/aboutus1.jpg"}),Object(D.jsxs)("p",{children:["To build this community, LLF will:",Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:"Promote and provide financial support for postsecondary education."}),Object(D.jsx)("li",{children:"Advise students and their families on how to save for and afford college."}),Object(D.jsx)("li",{children:"Target underserved and often overlooked students, but not limited to the Morton College district."})]})]}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("img",{src:"/images/aboutus2.jpg"}),Object(D.jsx)("p",{children:"In addition, LLF has been formed for the purpose of performing all things incidental to, or appropriate in, the foregoing specific and primary purposes. However, the LLF shall not, except to an insubstantial degree, engage in any activity or exercise of any powers which are not in the furtherance of its primary non-profit purposes."})]})}),Object(D.jsx)(Z.a,{bottom:!0,children:Object(D.jsx)(rn,{children:Object(D.jsx)(cn,{src:"/images/down-arrow.svg"})})})]})},on=u.a.div(H||(H=Object(x.a)(["\nmin-width: 100vw;\nmin-height: 100vh;\nbackground: #444444;\ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\npadding: 0 25%;\n"]))),an=u.a.div($||($=Object(x.a)(["\npadding-top: 20vh;\nopacity: 0.65;\ncolor: white;\ntext-align: left;\nfont-weight: 600;\n\n    h1 { \n        font-size: 50px;\n    }\n\n    p {\n        line-height: 2.4;\n        margin-top: 10%;\n    }\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n\n    ul {\n        padding-left: 50px;\n    }\n"]))),rn=u.a.div(q||(q=Object(x.a)([""]))),cn=u.a.img(G||(G=Object(x.a)(["\nmargin-top: 20px;\nmargin-bottom: 20px;\nheight: 40px;\ncursor: pointer;\noverflow-x: hidden;\nanimation: animateDown infinite 1.5s;\n"]))),sn=Object(f.b)({name:"member",initialState:{members:[{name:"Manuel Carrera",desc:"User One Desc"},{name:"Edgar Montiel",desc:"User Two Desc"},{name:"Carlos Jaramillo",desc:"User Four Desc"},{name:"Bart Zona",desc:"User Five Desc"},{name:"Daniel Perez",desc:"User Six Desc"}]},reducers:{}}),dn=function(n){return n.member.members},ln=sn.reducer;var hn,bn,jn,pn,xn=function(){var n=Object(g.b)(dn);return Object(D.jsx)(mn,{children:Object(D.jsxs)(Z.a,{bottom:!0,children:[Object(D.jsx)(un,{children:Object(D.jsx)("h1",{children:"Our Members"})}),n&&n.map((function(n){return Object(D.jsx)(gn,{children:n.name})}))]})})},mn=u.a.div(_||(_=Object(x.a)(["\nmin-height: 100vh;\nwidth: 100vw;\nbackground: black;\nopacity: 0.8;\npadding: 0 25%;\n"]))),un=u.a.div(nn||(nn=Object(x.a)(["\npadding-top: 20vh;\npadding-bottom: 10vh;\nopacity: 0.65;\ncolor: white;\ntext-align: left;\nfont-weight: 600;\n\n    h1 { \n        font-size: 50px;\n    }\n"]))),gn=u.a.div(en||(en=Object(x.a)(["\nopacity: 0.65;\ncolor: white;\ntext-align: left;\nfont-weight: 500;\nfont-size: 20px;\npadding-bottom: 3vh;\n"])));var fn,On=function(){return Object(D.jsx)(vn,{children:Object(D.jsx)(Z.a,{bottom:!0,children:Object(D.jsxs)(wn,{children:[Object(D.jsx)("h1",{children:"Mission"}),Object(D.jsx)("p",{children:"La Luz Foundation (LLF) inspires, encourages, and supports Morton College by providing scholarships to current and prospective Morton College students who otherwise would not have the financial means to fulfill their educational goals."}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("img",{src:"/images/mission.jpg"})]})})})},vn=u.a.div(hn||(hn=Object(x.a)(["\nmin-width: 100vw;\nmin-height: 100vh;\nbackground: #444444;\ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\npadding: 0 25%;\n"]))),wn=u.a.div(bn||(bn=Object(x.a)(["\npadding-top: 20vh;\nopacity: 0.65;\ncolor: white;\ntext-align: left;\nfont-weight: 600;\n\n    h1 { \n        font-size: 50px;\n    }\n\n    p {\n        line-height: 2.4;\n        margin-top: 10%;\n    }\n\n    img {\n        width: 100%;\n        height: 100%;\n    }\n\n    ul {\n        padding-left: 50px;\n    }\n"])));u.a.div(jn||(jn=Object(x.a)([""]))),u.a.img(pn||(pn=Object(x.a)(["\nmargin-top: 20px;\nheight: 40px;\ncursor: pointer;\noverflow-x: hidden;\nanimation: animateDown infinite 1.5s;\n"])));var yn=function(){return Object(D.jsxs)(kn,{children:[Object(D.jsx)(K,{}),Object(D.jsx)(On,{}),Object(D.jsx)(tn,{}),Object(D.jsx)(xn,{})]})},kn=u.a.div(fn||(fn=Object(x.a)(["\n    height: 100vh;\n"])));var Ln=function(){return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsx)(T,{}),Object(D.jsx)(yn,{})]})},zn=Object(f.a)({reducer:{menu:w,member:ln}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(Object(D.jsx)(b.a.StrictMode,{children:Object(D.jsx)(g.a,{store:zn,children:Object(D.jsx)(Ln,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.127ef2d4.chunk.js.map
(this.webpackJsonpcoupon_code_cart_frontend=this.webpackJsonpcoupon_code_cart_frontend||[]).push([[0],{103:function(e,t,n){},122:function(e,t,n){},130:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(10),i=n.n(o),s=(n(103),n.p,n(18)),u=n(136),r=n(141),d=n(137),l=n(138),j=n(173),b=n(174),p=n(175),h=n(176),O=n(80),x=n.n(O).a.create({baseURL:"http://localhost:3001",headers:{"Content-Type":"application/json",accept:"application/json"},crossdomain:!0});n(122);var m=n(2);function f(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(0),i=Object(s.a)(o,2),O=i[0],f=i[1],v=Object(c.useState)(0),g=Object(s.a)(v,2),y=g[0],C=g[1];function D(){(function(e,t){return console.log({amount:e,couponCode:t}),x.post("/validateCoupon",{amount:e,couponCode:t},{headers:{"Content-Type":"application/json",accept:"application/json"},data:{couponCode:t},crossdomain:!0})})(O,n).then((function(e){console.log(e),C(e.data)}))}return Object(m.jsxs)("div",{class:"wrapper",children:[Object(m.jsxs)(u.a,{children:[Object(m.jsx)(r.a,{htmlFor:"total_amount",children:"Total Amount"}),Object(m.jsx)(d.a,{id:"total_amount","aria-describedby":"amount",value:O,onChange:function(e){f(e.target.value)}}),Object(m.jsx)(l.a,{id:"my-helper-text",children:"Total amount in rupees"})]}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(r.a,{htmlFor:"coupon_code",children:"Coupon code"}),Object(m.jsx)(d.a,{id:"coupon_code","aria-describedby":"coupon_code",value:n,onChange:function(e){a(e.target.value)}}),Object(m.jsx)(l.a,{id:"coupon_code",children:"Enter a valid coupon code"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(j.a,{style:{backgroundColor:"aqua"},onClick:function(){D()},children:" Validate"}),Object(m.jsx)(b.a,{children:Object(m.jsxs)(p.a,{children:[Object(m.jsxs)(h.a,{children:["Cost entered: ",O]}),Object(m.jsxs)(h.a,{children:["Amount after Coupon is applied: ",y]})]})})]})}var v=n(19),g=n(60),y=n.n(g),C=n(64),D=n(85),T=n(180),F=n(182),k=n(86),A=function e(t,n,c,a,o,i){Object(k.a)(this,e),this.code=t,this.startDate=n,this.endDate=c,this.discountType=a,this.discount=o,this.minAmount=i},S=n(185),_=n(186),w=n(177),R=n(178),E=n(179),N=n(140),W=n(181),M=n(87),B=n.n(M),L=n(88),V=n.n(L),q=n(61);n(128);function I(){function e(e){var t=new Date(e),n=""+(t.getMonth()+1),c=""+t.getDate(),a=t.getFullYear();return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),[a,n,c].join("-")}var t=function(e){return Object(q.b)(e)},n=Object(c.useState)([]),a=Object(s.a)(n,2),o=a[0],i=a[1],u=Object(c.useState)(!1),d=Object(s.a)(u,2),l=d[0],O=d[1],f=Object(c.useState)(!1),g=Object(s.a)(f,2),k=(g[0],g[1]),M=Object(c.useState)(!1),L=Object(s.a)(M,2),I=L[0],J=L[1],P=Object(c.useState)(!1),G=Object(s.a)(P,2),H=(G[0],G[1]),U=Object(c.useState)(!1),Y=Object(s.a)(U,2),z=Y[0],K=Y[1],Q=Object(c.useState)(!1),X=Object(s.a)(Q,2),Z=X[0],$=X[1],ee=new A("",e(new Date),e(new Date),"Flat",0,0),te=Object(c.useState)(ee),ne=Object(s.a)(te,2),ce=ne[0],ae=ne[1];function oe(){x.get("/coupons/get",{headers:{"Content-Type":"application/json",accept:"application/json"},crossdomain:!0}).then(function(){var e=Object(D.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,console.log(n);case 3:e.next=10;break;case 5:if(!(t.data.length>0)){e.next=10;break}return e.next=8,console.log(t.data);case 8:$(!0),i(Object(C.a)(t.data));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()).catch((function(e){}))}function ie(){O(!1),k(!1),J(!1),H(!1)}function se(){var e;z.length>5&&(e=z,alert(e),x.post("/delete/coupon/",{code:e},{headers:{"Content-Type":"application/json",accept:"application/json"},crossdomain:!0})).then((function(e){t("Deleted ".concat(z)),i(Object(C.a)(o.filter((function(e){return e.code!==z.code}))))})).catch((function(e){t("The coupon couldn't be deleted")})),ie()}function ue(){var e;ce.code.length>5&&("Flat"===ce.discountType||"Relative"===ce.discountType)&&ce.discount>0&&ce.minAmount>0?"Relative"===ce.discountType&&ce.discount<100||"Flat"===ce.discountType?((e=ce,x.post("/coupon/create",e,{headers:{"Content-Type":"application/json",accept:"application/json"},crossdomain:!0})).then((function(e){t("Coupon created successfully!")})),ie()):t("The coupon couldn't be created - tip: Check your discount properties"):t("The coupon couldn't be created - tip: Coupon code should be of more than 5 characters")}function re(){var e;ce.code.length>5&&("Flat"===ce.discountType||"Relative"===ce.discountType)&&ce.discount>0&&ce.minAmount>0?"Relative"===ce.discountType&&ce.discount<100||"Flat"===ce.discountType?((e=ce,x.patch("/coupon/edit",e,{headers:{"Content-Type":"application/json",accept:"application/json"},crossdomain:!0})).then((function(e){t("Coupon edited successfully!")})),ie()):t("The coupon couldn't be edited - tip: Check your discount properties"):t("The coupon couldn't be edited - tip: Coupon code should be of more than 5 characters")}return Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(q.a,{}),Object(m.jsxs)(S.a,{open:l,onClose:ie,"aria-labelledby":"form-dialog-title",children:[Object(m.jsx)(_.a,{children:"Create a coupon"}),Object(m.jsxs)(w.a,{children:[Object(m.jsx)(R.a,{children:Object(m.jsx)(E.a,{autoFocus:!0,margin:"dense",id:"name",type:"string",fullWidth:!0,value:ce.code,onChange:function(e){var t=Object(v.a)({},ce);t.code=e.target.value,ae(t)},label:"coupon code"})}),Object(m.jsx)(E.a,{autoFocus:!0,margin:"dense",id:"start date",type:"date",fullWidth:!0,value:ce.startDate,onChange:function(e){var t=Object(v.a)({},ce);t.startDate=e.target.value,ae(t)},label:"Start date"}),Object(m.jsx)(E.a,{autoFocus:!0,margin:"dense",id:"end date",type:"date",fullWidth:!0,value:ce.endDate,onChange:function(e){var t=Object(v.a)({},ce);t.endDate=e.target.value,ae(t)},label:"End date"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(r.a,{children:"Discount type"}),Object(m.jsxs)(N.a,{label:"Discount type",margin:"dense",type:"string",id:"discounttype",defaultValue:ce.discountType,onChange:function(e){var t=Object(v.a)({},ce);t.discountType=e.target.value,ae(t)},children:[Object(m.jsx)("option",{value:"Flat",children:" Flat"}),Object(m.jsx)("option",{value:"Relative",children:"Relative"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(E.a,{autoFocus:!0,type:"number",value:ce.minAmount,onChange:function(e){var t=Object(v.a)({},ce);t.minAmount=e.target.value,ae(t)},label:"Minimum Amount"}),Object(m.jsx)(E.a,{autoFocus:!0,type:"number",value:ce.discount,onChange:function(e){var t=Object(v.a)({},ce);t.discount=e.target.value,ae(t),console.log(ce)},label:"Discount"})]}),Object(m.jsx)(W.a,{children:Object(m.jsx)(j.a,{onClick:function(){ue()},children:"Create coupon!"})})]}),Object(m.jsxs)(S.a,{open:I,onClose:ie,"aria-labelledby":"form-dialog-title",children:[Object(m.jsx)(_.a,{children:"Edit a coupon"}),Object(m.jsxs)(w.a,{children:[Object(m.jsx)(R.a,{children:Object(m.jsx)(E.a,{autoFocus:!0,margin:"dense",id:"name",type:"string",fullWidth:!0,value:ce.code,onChange:function(e){var t=Object(v.a)({},ce);t.code=e.target.value,ae(t)},label:"coupon code"})}),Object(m.jsx)(E.a,{autoFocus:!0,margin:"dense",id:"start date",type:"date",fullWidth:!0,value:ce.startDate,onChange:function(e){var t=Object(v.a)({},ce);t.startDate=e.target.value,ae(t)},label:"Start date"}),Object(m.jsx)(E.a,{autoFocus:!0,margin:"dense",id:"end date",type:"date",fullWidth:!0,value:ce.endDate,onChange:function(e){var t=Object(v.a)({},ce);t.endDate=e.target.value,ae(t)},label:"End date"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(r.a,{children:"Discount type"}),Object(m.jsxs)(N.a,{label:"Discount type",margin:"dense",type:"string",id:"discounttype",defaultValue:ce.discountType,onChange:function(e){var t=Object(v.a)({},ce);t.discountType=e.target.value,ae(t)},children:[Object(m.jsx)("option",{value:"Flat",children:" Flat"}),Object(m.jsx)("option",{value:"Relative",children:"Relative"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(E.a,{autoFocus:!0,type:"number",value:ce.minAmount,onChange:function(e){var t=Object(v.a)({},ce);t.minAmount=e.target.value,ae(t)},label:"Minimum Amount"}),Object(m.jsx)(E.a,{autoFocus:!0,type:"number",value:ce.discount,onChange:function(e){var t=Object(v.a)({},ce);t.discount=e.target.value,ae(t),console.log(ce)},label:"Discount"})]}),Object(m.jsx)(W.a,{children:Object(m.jsx)(j.a,{onClick:function(){re()},children:"Edit coupon!"})})]}),Object(m.jsxs)(T.a,{style:{display:Z?"block":"none"},children:[o.map((function(e,t){return Object(m.jsx)(h.a,{children:Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(p.a,{children:["Code: ",e.code," ",Object(m.jsx)("br",{}),"Minimum Amount: ",e.minAmount," ",Object(m.jsx)("br",{}),"Discount type : ",e.discountType," ",Object(m.jsx)("br",{}),"Discount : ",e.discount," ",Object(m.jsx)("br",{}),"startDate: ",e.startDate.slice(0,10)," ",Object(m.jsx)("br",{}),"endDate: ",e.endDate.slice(0,10),"  ",Object(m.jsx)("br",{})]}),Object(m.jsxs)(F.a,{children:[Object(m.jsx)(j.a,{onClick:function(){K(e.code),se()},children:Object(m.jsx)(B.a,{})}),Object(m.jsx)(j.a,{onClick:function(){J(!0),ae({code:e.code,startDate:e.startDate,endDate:e.endDate,minAmount:e.minAmount,discountType:e.discountType,discount:e.discount})},children:Object(m.jsx)(V.a,{})})]})]})},t)})),Object(m.jsx)(j.a,{onClick:function(){$(!1)},children:"Go Back"})]}),Object(m.jsxs)(T.a,{id:"properties",style:{display:Z?"none":"block"},children:[Object(m.jsx)(h.a,{id:"create",className:"prop",children:Object(m.jsx)(j.a,{onClick:function(){O(!0)},children:" Create a coupon"})}),Object(m.jsx)(h.a,{id:"edit",className:"prop",children:Object(m.jsx)(j.a,{onClick:function(){return J(!0)},children:" Edit a coupon"})}),Object(m.jsx)(h.a,{id:"see",className:"prop",children:Object(m.jsx)(j.a,{onClick:function(){oe(),H(!0)},children:" See all coupons"})})]})]})}var J=n(183),P=n(55);n(130);function G(){return Object(m.jsx)(a.a.Fragment,{children:Object(m.jsxs)(J.a,{style:{backgroundColor:"aqua"},position:"fixed",children:["Shopping cart",Object(m.jsx)(P.a,{children:Object(m.jsxs)("div",{className:"Admin",children:[Object(m.jsx)("a",{href:"/",children:" Home\xa0\xa0"}),Object(m.jsx)("a",{href:"/admin",children:"Admin"})]})})]})})}var H=n(11);n(133);var U=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(G,{}),Object(m.jsxs)(P.a,{children:[Object(m.jsx)(H.c,{children:Object(m.jsx)(H.a,{exact:!0,path:"/admin",component:I})}),Object(m.jsx)(H.c,{children:Object(m.jsx)(H.a,{exact:!0,path:"/",component:f})})]})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,188)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root")),Y()}},[[134,1,2]]]);
//# sourceMappingURL=main.c2b12a5a.chunk.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216812"],{c36b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content login-page"},[a("p",{staticStyle:{color:"#bac964"}},[e._v(e._s(e.databasemessage))]),a("p",{staticStyle:{color:"#f6f578"}},[e._v(e._s(e.resultmessage))]),a("h4",[e._v("Login")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("label",{attrs:{for:"email"}},[e._v(" > Your E-Mail Address")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"password"}},[e._v(" > Your Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._m(0),a("a",{staticClass:"login-register",attrs:{href:"/0:register/"}},[e._v("No Account ? Click Here to Register")])])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{staticClass:"login-button",attrs:{type:"submit"}},[e._v(" Login ")])])}],i={data:function(){return{email:"",password:"",resultmessage:"",databasemessage:""}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.password.length>0&&this.$http.post(window.apiRoutes.loginRoute,{email:this.email,password:this.password}).then((function(e){if(console.log(e),e.data.auth&&e.data.registered){localStorage.setItem("tokendata",JSON.stringify({token:e.data.token,issuedate:e.data.issuedat,expirydate:e.data.expiryat})),localStorage.setItem("userdata",JSON.stringify(e.data.tokenuser));var a=JSON.parse(localStorage.getItem("tokendata")),s=JSON.parse(localStorage.getItem("userdata"));console.log(a),console.log(s),a&&(t.resultmessage="> Logged in Successfully. Your token will expiry at ".concat(a.expirydate,". You will be Redirected now."),setTimeout((function(){t.$router.push("/0:home/")}),2e3))}else t.resultmessage="> "+e.data.message}))}},mounted:function(){var e=this;this.$http.post(window.apiRoutes.homeRoute).then((function(t){console.log(t),"200"==t.status?e.databasemessage="🟢 Database is Live. You can Login. Ping - ".concat(t.data.ping,"ms"):e.databasemessage="🔴 Database Offline / under Maintenance. Please Try Later"}))}},r=i,n=a("2877"),l=Object(n["a"])(r,s,o,!1,null,null,null);t["default"]=l.exports}}]);
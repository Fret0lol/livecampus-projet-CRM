"use strict";(self["webpackChunklivecampus_crm"]=self["webpackChunklivecampus_crm"]||[]).push([[377],{6806:function(e,r,t){t.d(r,{AW:function(){return n},GA:function(){return o},RW:function(){return u},h8:function(){return i},r4:function(){return a}});const s={token:"",headers:new Headers({mode:"no-cors","Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"}),baseUrl:"http://51.75.251.192:3000"};function n(){return fetch(`${s.baseUrl}/api/users`,{method:"GET",headers:s.headers}).then((e=>e.json())).catch((e=>console.log(e)))}function o(e){return fetch(`${s.baseUrl}/api/users/${e}`,{method:"GET",headers:s.headers}).then((e=>e.json())).catch((e=>console.log(e)))}function a(e){return fetch(`${s.baseUrl}/api/users`,{method:"POST",headers:s.headers,body:JSON.stringify(e)}).then((e=>e.json())).catch((e=>console.log(e)))}function u(e,r){return fetch(`${s.baseUrl}/api/users/${e}`,{method:"PUT",headers:s.headers,body:JSON.stringify(r)}).then((e=>e.json())).catch((e=>console.log(e)))}async function i(e){return await fetch(`${s.baseUrl}/api/users/${e}`,{method:"DELETE",headers:s.headers})}},4377:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var s=t(3396),n=t(9242);const o={key:0},a={key:1},u={class:"form"},i=(0,s._)("label",{for:"firstName"},"Prénom",-1),l=(0,s._)("label",{for:"lastName"},"Nom",-1),h=(0,s._)("label",{for:"email"},"Email",-1),c=(0,s._)("label",{for:"phoneNumber"},"Numéro de téléphone",-1);function d(e,r,t,d,m,p){return(0,s.wg)(),(0,s.iD)(s.HY,null,[m.newUser?((0,s.wg)(),(0,s.iD)("h1",o,"Créer un nouvel utilisateur")):((0,s.wg)(),(0,s.iD)("h1",a,"Modifier l'utilisateur")),(0,s._)("div",u,[i,(0,s.wy)((0,s._)("input",{type:"text",id:"firstName","onUpdate:modelValue":r[0]||(r[0]=e=>m.user.firstName=e)},null,512),[[n.nr,m.user.firstName]]),l,(0,s.wy)((0,s._)("input",{type:"text",id:"lastName","onUpdate:modelValue":r[1]||(r[1]=e=>m.user.lastName=e)},null,512),[[n.nr,m.user.lastName]]),h,(0,s.wy)((0,s._)("input",{type:"text",id:"email","onUpdate:modelValue":r[2]||(r[2]=e=>m.user.email=e)},null,512),[[n.nr,m.user.email]]),c,(0,s.wy)((0,s._)("input",{type:"text",id:"phoneNumber","onUpdate:modelValue":r[3]||(r[3]=e=>m.user.phoneNumber=e)},null,512),[[n.nr,m.user.phoneNumber]]),m.newUser?((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:r[4]||(r[4]=(...e)=>p.createUser&&p.createUser(...e))},"Créer")):((0,s.wg)(),(0,s.iD)("button",{key:1,onClick:r[5]||(r[5]=(...e)=>p.updateUser&&p.updateUser(...e))},"Modifier"))])],64)}var m=t(6806),p={name:"UserForm",components:{},data(){return{newUser:!1,user:{firstName:"",lastName:"",email:"",phoneNumber:""}}},mounted(){"new"===this.$route.params.id?this.newUser=!0:this.newUser=!1,this.newUser||(console.log("getUserById",this.$route.params.id),this.getUserById(this.$route.params.id))},methods:{createUser(){(0,m.r4)(this.user).then((()=>{this.$router.push("/")}))},getUserById(e){(0,m.GA)(e).then((e=>{this.user=e}))},updateUser(){(0,m.RW)(this.user.id,this.user).then((()=>{this.$router.push("/")}))}}},f=t(89);const U=(0,f.Z)(p,[["render",d]]);var w=U}}]);
//# sourceMappingURL=377.826470f1.js.map
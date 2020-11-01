(function(e){function t(t){for(var s,i,o=t[0],l=t[1],c=t[2],h=0,d=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},r=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/korean-numbers/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"logo.png",transition:"scale-transition",width:"40"}})],1),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(t){e.showSettings=!e.showSettings}}},[n("v-icon",[e._v("mdi-cog")])],1)],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("v-row",{directives:[{name:"show",rawName:"v-show",value:e.showSettings,expression:"showSettings"}],attrs:{justify:"center"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600","min-width":"400"}},[n("v-card-title",[e._v(" Settings ")]),n("v-card-text",[n("v-container",{attrs:{fluid:""}},[n("v-switch",{attrs:{label:"Translate input to Hangul."},model:{value:e.translate,callback:function(t){e.translate=t},expression:"translate"}}),n("p",[e._v("The keyboard layout used here is the "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Keyboard_layout#/media/File:KB_South_Korea.svg"}},[e._v("Dubeolsik layout")]),e._v(".")]),n("v-divider",{attrs:{inset:!0,vertical:""}}),n("v-switch",{attrs:{label:"Ones (1,2,3,4,5,6,7,8,9)"},model:{value:e.ones,callback:function(t){e.ones=t},expression:"ones"}}),n("v-switch",{attrs:{label:"Tens (e.g. 10, 40, 90)"},model:{value:e.tens,callback:function(t){e.tens=t},expression:"tens"}}),n("v-switch",{attrs:{label:"Hundreds (e.g. 200,500)"},model:{value:e.hundreds,callback:function(t){e.hundreds=t},expression:"hundreds"}}),n("v-switch",{attrs:{label:"Thousands (e.g. 3.000, 9.000)"},model:{value:e.thousands,callback:function(t){e.thousands=t},expression:"thousands"}}),n("v-switch",{attrs:{label:"Tenthousands (e.g. 10.000,40.000)"},model:{value:e.tenthousands,callback:function(t){e.tenthousands=t},expression:"tenthousands"}}),n("v-switch",{attrs:{label:"Hundreds of thousands (e.g. 700.000)"},model:{value:e.hundredthousands,callback:function(t){e.hundredthousands=t},expression:"hundredthousands"}}),n("v-switch",{attrs:{label:"Millions (e.g. 123.000.000)"},model:{value:e.millions,callback:function(t){e.millions=t},expression:"millions"}}),n("v-switch",{attrs:{label:"Billion (e.g. 4.000.000.000)"},model:{value:e.billion,callback:function(t){e.billion=t},expression:"billion"}})],1)],1)],1)],1),n("v-row",{directives:[{name:"show",rawName:"v-show",value:!e.showSettings,expression:"!showSettings"}],attrs:{justify:"center"}},[n("Challenge",{attrs:{translate:e.translate,ones:e.ones,tens:e.tens,hundreds:e.hundreds,thousands:e.thousands,tenthousands:e.tenthousands,hundredthousands:e.hundredthousands,millions:e.millions,billion:e.billion}})],1)],1)],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600","min-width":"400"}},[n("v-snackbar",{attrs:{timeout:"2000",top:""},scopedSlots:e._u([{key:"action",fn:function(t){var s=t.attrs;return[n("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",s,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.text)+" ")]),n("v-card-text",[n("v-container",[n("v-row",{staticClass:"d-flex justify-center"},[n("span",{staticClass:"font-weight-bold text-center py-16",staticStyle:{"font-size":"6rem"}},[e._v(" "+e._s(e.number)+" ")])]),n("v-row",[n("hangul-input",{attrs:{solo:"",label:"Enter your solution.","hide-details":"auto",clearable:"",translate:e.translate},on:{enter:e.check,clear:e.setClearHandler},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),n("v-row",[n("v-text-field",{attrs:{value:e.shownsolution,"append-outer-icon":""===e.shownsolution?"mdi-help":"mdi-close",label:"Show solution",type:"text",readonly:""},on:{"click:append-outer":e.showSolution}})],1)],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-2",text:""},on:{click:function(t){e.number=e.gennumber(),e.shownsolution=""}}},[e._v(" New Number ")]),n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-2",text:""},on:{click:e.check}},[e._v(" Check ")])],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-text-field",{attrs:{label:e.label,placeholder:e.placeholder,solo:e.solo,filled:e.filled,outlined:e.outlined,clearable:e.clearable,value:e.text},on:{keydown:e.keydownhandler,keyup:e.keyuphandler,keypress:e.keypresshandler}})},c=[],u=(n("fb6a"),n("a434"),n("3835")),h=n("0677"),d={name:"HangulInput",props:["label","placeholder","solo","filled","outlined","clearable","value","translate"],data:function(){return{hangullist:[]}},created:function(){this.$emit("clear",this.clear)},computed:{text:function(){return h["assemble"](this.hangullist)}},methods:{clear:function(){this.hangullist.splice(0)},selection:function(e){var t=e.selectionStart,n=e.selectionEnd,s=h["d"](this.text.substring(0,t)),a=h["d"](this.text.substring(t,n)),r=s.length,i=a.length;return this.hangullist.splice(r,i),[r,i]},delete:function(e,t){var n=this,s=this.selection(t),a=Object(u["a"])(s,2),r=a[0],i=a[1];if(!(i>0)){switch(e){case"Backspace":this.hangullist.splice(r-1,1);break;case"Delete":this.hangullist.splice(r,1);break}this.$nextTick((function(){t.selectionEnd=h["a"](n.hangullist.slice(0,r-1)).length}))}},insert:function(e,t){var n=this,s=this.selection(t)[0];this.hangullist.splice(s,0,e),this.$nextTick((function(){t.selectionEnd=h["a"](n.hangullist.slice(0,s+1)).length}))},keypresshandler:function(e){switch(e.code){case"Enter":case"NumpadEnter":this.$emit("enter");break}if(this.translate){if(e.preventDefault(),e.shiftKey)switch(e.code){case"KeyQ":this.insert("ㅃ",e.target);break;case"KeyW":this.insert("ㅉ",e.target);break;case"KeyE":this.insert("ㄸ",e.target);break;case"KeyR":this.insert("ㄲ",e.target);break;case"KeyT":this.insert("ㅆ",e.target);break;case"KeyO":this.insert("ㅒ",e.target);break;case"KeyP":this.insert("ㅖ",e.target);break;default:break}else switch(e.code){case"KeyQ":this.insert("ㅂ",e.target);break;case"KeyW":this.insert("ㅈ",e.target);break;case"KeyE":this.insert("ㄷ",e.target);break;case"KeyR":this.insert("ㄱ",e.target);break;case"KeyT":this.insert("ㅅ",e.target);break;case"KeyY":this.insert("ㅛ",e.target);break;case"KeyU":this.insert("ㅕ",e.target);break;case"KeyI":this.insert("ㅑ",e.target);break;case"KeyO":this.insert("ㅐ",e.target);break;case"KeyP":this.insert("ㅔ",e.target);break;case"KeyA":this.insert("ㅁ",e.target);break;case"KeyS":this.insert("ㄴ",e.target);break;case"KeyD":this.insert("ㅇ",e.target);break;case"KeyF":this.insert("ㄹ",e.target);break;case"KeyG":this.insert("ㅎ",e.target);break;case"KeyH":this.insert("ㅗ",e.target);break;case"KeyJ":this.insert("ㅓ",e.target);break;case"KeyK":this.insert("ㅏ",e.target);break;case"KeyL":this.insert("ㅣ",e.target);break;case"KeyZ":this.insert("ㅋ",e.target);break;case"KeyX":this.insert("ㅌ",e.target);break;case"KeyC":this.insert("ㅊ",e.target);break;case"KeyV":this.insert("ㅍ",e.target);break;case"KeyB":this.insert("ㅠ",e.target);break;case"KeyN":this.insert("ㅜ",e.target);break;case"KeyM":this.insert("ㅡ",e.target);break;case"Enter":case"NumpadEnter":this.$emit("enter");break;default:break}this.$emit("input",this.text)}},keydownhandler:function(e){if(this.translate){switch(e.code){case"Backspace":case"Delete":e.preventDefault(),this.delete(e.code,e.target)}this.$emit("input",this.text)}},keyuphandler:function(e){if(this.translate)switch(e.code){case"Delete":case"Backspace":return void e.preventDefault();case"ControlLeft":case"ControlRight":case"ShiftLeft":case"ShiftRight":case"AltLeft":case"AltRight":case"Enter":return}}}},b=d,p=n("2877"),f=n("6544"),v=n.n(f),g=n("8654"),k=Object(p["a"])(b,l,c,!1,null,"772d4b5c",null),m=k.exports;v()(k,{VTextField:g["a"]});var y={name:"Challenge",components:{HangulInput:m},props:["ones","tens","hundreds","thousands","tenthousands","hundredthousands","millions","billion","translate"],data:function(){return{value:"",number:0,clearinput:void 0,shownsolution:"",text:"",snackbar:!1}},methods:{showSolution:function(){""===this.shownsolution?this.shownsolution=this.solution(this.number):this.shownsolution=""},setClearHandler:function(e){this.clearinput=e},check:function(){this.value===this.solution(this.number)?(this.text="Sucess!",this.number=this.gennumber(),this.shownsolution="",void 0!==this.clearinput&&this.clearinput()):this.text="Not quite right.",this.snackbar=!0},solution:function(e){var t=["","일","이","삼","사","오","육","칠","팔","구"],n=["","십","백","천","만","십만","백만","천만","일억","십억"];if(0===e)return"영";var s=0,a="";while(e>0){var r=e%10;r>0&&(a=n[s]+a),(s>0&&r>1||0==s)&&(a=t[r]+a),e-=r,e/=10,s+=1}return a},procrandom:function(e){var t=Math.random();return Math.floor(t*Math.pow(10,e))},gennumber:function(){var e=0;return this.ones&&(e+=this.procrandom(1)),this.tens&&(e+=10*this.procrandom(1)),this.hundreds&&(e+=100*this.procrandom(1)),this.thousands&&(e+=1e3*this.procrandom(1)),this.tenthousands&&(e+=1e4*this.procrandom(1)),this.hundredthousands&&(e+=1e5*this.procrandom(1)),this.millions&&(e+=1e6*this.procrandom(3)),this.billion&&(e+=1e9*this.procrandom(1)),e}},mounted:function(){this.number=this.gennumber()}},w=y,x=n("8336"),K=n("b0af"),_=n("99d9"),S=n("a523"),V=n("0fd9"),C=n("2db4"),O=n("2fa4"),T=Object(p["a"])(w,i,o,!1,null,"797212cf",null),j=T.exports;v()(T,{VBtn:x["a"],VCard:K["a"],VCardActions:_["a"],VCardText:_["b"],VContainer:S["a"],VRow:V["a"],VSnackbar:C["a"],VSpacer:O["a"],VTextField:g["a"]});var E={name:"App",components:{Challenge:j},data:function(){return{showSettings:!1,ones:!0,tens:!0,hundreds:!0,thousands:!1,tenthousands:!1,hundredthousands:!1,millions:!1,billion:!1,translate:!0}}},$=E,M=n("7496"),B=n("40dc"),D=n("ce7e"),P=n("132d"),H=n("adda"),N=n("f6c4"),A=n("b73d"),R=Object(p["a"])($,a,r,!1,null,null,null),I=R.exports;v()(R,{VApp:M["a"],VAppBar:B["a"],VBtn:x["a"],VCard:K["a"],VCardText:_["b"],VCardTitle:_["c"],VContainer:S["a"],VDivider:D["a"],VIcon:P["a"],VImg:H["a"],VMain:N["a"],VRow:V["a"],VSpacer:O["a"],VSwitch:A["a"]});var L=n("f309");s["a"].use(L["a"]);var F=new L["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:F,render:function(e){return e(I)}}).$mount("#app")}});
//# sourceMappingURL=app.df9468b6.js.map
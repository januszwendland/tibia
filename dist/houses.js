"use strict";(self.webpackChunktibia=self.webpackChunktibia||[]).push([[458],{407:(e,a,r)=>{r.r(a),r.d(a,{default:()=>o});var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("article",{staticClass:"card"},[e._m(0),e._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"input-group large left"},[r("label",{attrs:{for:"server"}},[e._v("Select server")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedServer,expression:"selectedServer"}],attrs:{id:"server"},on:{change:[function(a){var r=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedServer=a.target.multiple?r:r[0]},e.checkServer]}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Select...")]),e._v(" "),e._l(e.servers,(function(a){return r("option",{domProps:{value:a}},[e._v(e._s(a))])}))],2)]),e._v(" "),e.selectedServer?r("div",{staticClass:"mt"},[r("div",{staticClass:"filters-pills"},e._l(e.towns,(function(a){return r("span",{staticClass:"filters-pill",class:{selected:e.filterByTown===a},on:{click:function(r){return e.filter(a)}}},[e._v(e._s(a))])})),0),e._v(" "),r("small",{staticClass:"filters-info"},[e._v("Filter by town.")])]):e._e(),e._v(" "),e._l(e.server,(function(a,t){return e.selectedServer&&null!=a&&a.length?r("div",{directives:[{name:"show",rawName:"v-show",value:!e.filterByTown||e.filterByTown===t,expression:"!filterByTown || filterByTown === name"}]},[r("h3",{staticClass:"mt"},[e._v(e._s(t)+":")]),e._v(" "),r("table",{staticClass:"mt table-fixed"},[e._m(1,!0),e._v(" "),r("tbody",e._l(a,(function(a){return"rented"!==a.status?r("tr",[r("td",[r("a",{attrs:{href:"https://www.tibia.com/community/?subtopic=houses&page=view&world="+e.selectedServer+"&houseid="+a.houseid,target:"_blank"}},[e._v(e._s(a.name))])]),e._v(" "),r("td",{staticClass:"hide-on-mobile"},[e._v(e._s(a.rent))]),e._v(" "),r("td",{staticClass:"hide-on-mobile"},[e._v(e._s(a.size))]),e._v(" "),r("td",[e._v(e._s(a.status))])]):e._e()})),0)])]):e._e()})),e._v(" "),e.loader>0?r("div",{staticClass:"loader-wrapper"},[r("div",{staticClass:"loader",attrs:{role:"status"}})]):e._e()],2)])};t._withStripped=!0;var s=r(669),l=r.n(s);const n={name:"Houses",data:function(){return{servers:["Adra","Alumbra","Antica","Astera","Belobra","Bona","Calmera","Carnera","Celebra","Celesta","Concorda","Damora","Descubra","Dibra","Emera","Epoca","Estela","Famosa","Fera","Ferobra","Fervora","Firmera","Garnera","Gentebra","Gladera","Harmonia","Honbra","Impera","Inabra","Javibra","Juva","Kalibra","Karna","Kenora","Libertabra","Lobera","Luminera","Lutabra","Marcia","Menera","Mercera","Mitigera","Monza","Mudabra","Nefera","Nexa","Nossobra","Ombra","Optera","Pacembra","Pacera","Peloria","Premia","Quelibra","Quintera","Ragna","Refugia","Reinobra","Relania","Relembra","Secura","Serdebra","Serenebra","Solidera","Talera","Tembra","Unica","Unisera","Utobra","Venebra","Visabra","Vunira","Wintera","Wizera","Xandebra","Xylona","Yonabra","Ysolera","Zenobra","Zuna","Zunera"],selectedServer:"",towns:["Ab'Dendriel","Ankrahmun","Carlin","Darashia","Edron","Farmine","Gray Beach","Issavi","Kazordoon","Liberty Bay","Port Hope","Rathleton","Svargrond","Thais","Venore","Yalahar"],server:{"Ab'Dendriel":null,Ankrahmun:null,Carlin:null,Darashia:null,Edron:null,Farmine:null,"Gray Beach":null,Issavi:null,Kazordoon:null,"Liberty Bay":null,"Port Hope":null,Rathleton:null,Svargrond:null,Thais:null,Venore:null,Yalahar:null},filterByTown:null,loader:0}},methods:{checkServer:function(){let e=this.server;this.filterByTown=null,this.selectedServer&&this.towns.forEach((a=>{this.loader++,l().get("https://api.tibiadata.com/v2/houses/"+this.selectedServer+"/"+a+".json").then((r=>{e[a]=r.data.houses.houses.filter((e=>"rented"!==e.status)),r.data.houses.error&&alert(r.data.houses.error),this.loader--}))}))},filter:function(e){e===this.filterByTown?this.filterByTown=null:this.filterByTown=e}}};var i=(0,r(900).Z)(n,t,[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"card-header"},[r("h2",{staticClass:"card-title"},[r("img",{attrs:{src:"icons/houses.svg",alt:"",width:"18px",height:"18px"}}),e._v("\n            Find free houses\n        ")])])},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",{staticClass:"hide-on-mobile"},[e._v("Rent")]),e._v(" "),r("th",{staticClass:"hide-on-mobile"},[e._v("Size")]),e._v(" "),r("th",[e._v("Status")])])])}],!1,null,null,null);i.options.__file="src/js/components/Houses.vue";const o=i.exports}}]);
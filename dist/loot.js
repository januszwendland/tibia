(self.webpackChunktibia=self.webpackChunktibia||[]).push([[887],{821:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(645),r=a.n(s)()((function(e){return e[1]}));r.push([e.id,"h3 img{vertical-align:middle;margin:0 0 0 5px;cursor:pointer;transition:transform .3s}h3 img:hover{transform:scale(1.1)}.ellipsis{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.balance-green input{border-color:#198754}.balance-orange input{border-color:#fd7e14}.balance-red input{border-color:#dc3545}.loot-transfer{margin:.5rem 0 0}.loot-transfer img{vertical-align:middle;margin:0 0 0 5px;cursor:pointer;transition:transform .3s}.loot-transfer img:hover{transform:scale(1.1)}",""]);const n=r},641:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[e._m(0),e._v(" "),a("div",{staticClass:"card-content"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.parseLog.apply(null,arguments)}}},[a("div",{staticClass:"input-group large right"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.log,expression:"log"}],domProps:{value:e.log},on:{input:function(t){t.target.composing||(e.log=t.target.value)}}}),e._v(" "),a("button",[e._v("Split loot")])]),e._v(" "),e._m(1)]),e._v(" "),a("small"),e._v(" "),e.parsed?[a("div",{staticClass:"row row-wrap"},e._l(e.logParsed,(function(t,s){return a("div",{staticClass:"col col-25",class:{"balance-green":t.loot>t.supplies,"balance-orange":t.loot===t.supplies,"balance-red":t.loot<t.supplies}},[a("h3",{staticClass:"mt ellipsis"},[e._v("\n                        "+e._s(t.name)+"\n                        "),a("img",{attrs:{src:"icons/remove.svg",alt:"",width:"24px",height:"24px"},on:{click:function(t){return e.removePlayer(s)}}})]),e._v(" "),a("div",{staticClass:"input-group left mts"},[a("label",{attrs:{for:"loot_"+s}},[e._v("Loot")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.loot,expression:"player.loot",modifiers:{number:!0}}],attrs:{type:"number",id:"loot_"+s},domProps:{value:t.loot},on:{change:e.updateResult,input:function(a){a.target.composing||e.$set(t,"loot",e._n(a.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),a("div",{staticClass:"input-group left mts"},[a("label",{attrs:{for:"supplies_"+s}},[e._v("Supplies")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.supplies,expression:"player.supplies",modifiers:{number:!0}}],attrs:{type:"number",id:"supplies_"+s},domProps:{value:t.supplies},on:{change:e.updateResult,input:function(a){a.target.composing||e.$set(t,"supplies",e._n(a.target.value))},blur:function(t){return e.$forceUpdate()}}})])])})),0),e._v(" "),e._m(2),e._v(" "),a("div",{staticClass:"mt"},e._l(e.transfer,(function(t){return a("p",{staticClass:"loot-transfer"},[a("strong",[e._v(e._s(t.from))]),e._v(" should transfer "),a("strong",[e._v(e._s(t.gold))]),e._v(" gp to "),a("strong",[e._v(e._s(t.to))]),e._v(".\n                    "),a("img",{attrs:{src:"icons/copy.svg",alt:"",width:"24px",height:"24px"},on:{click:function(a){return e.copyToClipboard("transfer "+t.gold+" to "+t.to)}}})])})),0),e._v(" "),e._m(3),e._v(" "),a("div",{staticClass:"row mt"},[a("div",{staticClass:"col"},[a("div",{staticClass:"badge",class:{green:e.teamBalance>0,orange:0===e.teamBalance,red:e.teamBalance<0}},[e._v("\n                        Team balance\n                        "),a("span",[e._v(e._s(e.teamBalance))])])]),e._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"badge",class:{green:e.playerBalance>0,orange:0===e.playerBalance,red:e.playerBalance<0}},[e._v("\n                        Each player balance\n                        "),a("span",[e._v(e._s(e.playerBalance))])])])])]:e._e()],2)])};s._withStripped=!0;const r={name:"Loot",data:function(){return{log:"",logParsed:[],parsed:!1,teamSize:0,teamBalance:0,playerBalance:0,transfer:[]}},methods:{parseLog:function(){let e=this.log.split("\n"),t=/\d+/g;e.splice(0,6),this.teamSize=e.length/6,this.teamBalance=0,this.logParsed=[],this.transfer=[];for(let a=0;a<this.teamSize;a++){let s=e[6*a].replace(" (Leader)",""),r=parseInt(e[6*a+1].replace(",","").match(t)),n=parseInt(e[6*a+2].replace(",","").match(t)),l=r-n;this.logParsed.push({name:s,loot:r,supplies:n,balance:l}),this.teamBalance=this.teamBalance+r-n}this.playerBalance=Math.floor(this.teamBalance/this.teamSize),isNaN(this.playerBalance)&&(this.playerBalance=0),this.transferFromTo(),this.parsed=!0},updateResult:function(){this.teamBalance=0,this.logParsed.forEach((e=>{this.teamBalance=this.teamBalance+parseInt(e.loot)-parseInt(e.supplies),e.balance=parseInt(e.loot)-parseInt(e.supplies)})),this.playerBalance=Math.floor(this.teamBalance/this.teamSize),isNaN(this.playerBalance)&&(this.playerBalance=0),this.transferFromTo()},removePlayer:function(e){this.logParsed.splice(e,1),this.teamSize--,this.updateResult()},transferFromTo:function(){let e=this;e.transfer=[],e.logParsed.forEach(((t,a)=>{if(t.balance>e.playerBalance){let s=Math.abs(t.balance-e.playerBalance),r=a;e.logParsed.forEach(((t,a)=>{if(s>0&&t.balance<e.playerBalance){let a=Math.abs(t.balance-e.playerBalance),n=0;a<s?(n=a,s-=a):(n=s,s=0),t.balance+=n,e.logParsed[r].balance-=n,e.transfer.push({from:e.logParsed[r].name,to:t.name,gold:n})}}))}}))},copyToClipboard:function(e){let t=document.createElement("textarea");t.textContent=e,t.style.position="fixed",document.body.appendChild(t),t.select();try{return document.execCommand("copy")}catch(e){return console.warn("Copy to clipboard failed.",e),!1}finally{document.body.removeChild(t)}}}};var n=a(379),l=a.n(n),o=a(821);l()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var i=(0,a(900).Z)(r,s,[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-header"},[a("h2",{staticClass:"card-title"},[a("img",{attrs:{src:"icons/loot.svg",alt:"",width:"18px",height:"18px"}}),e._v("\n            Party loot splitter\n        ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("small",[e._v("Copy "),a("strong",[e._v("entire")]),e._v(" log from Party Hunt Analyser. Application "),a("strong",[e._v("do not")]),e._v(" store or validate pasted log.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mts"},[a("small",[e._v("\n                    You can edit values in text fields."),a("br"),e._v("\n                    You can remove player by clicking on '"),a("strong",[e._v("x")]),e._v("' icon.\n                ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mts"},[a("small",[e._v("\n                    You can copy '"),a("strong",[e._v("transfer [amount] to [name]")]),e._v("' by clicking on icon after text.\n                ")])])}],!1,null,null,null);i.options.__file="src/js/components/Loot.vue";const c=i.exports}}]);
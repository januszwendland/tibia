"use strict";(self.webpackChunktibia=self.webpackChunktibia||[]).push([[354],{3646:(i,e,m)=>{m.r(e),m.d(e,{default:()=>X});var n=m(5166);const a={class:"card"},t=(0,n._)("div",{class:"card-header"},[(0,n._)("h2",{class:"card-title"},[(0,n._)("img",{src:"icons/imbuing.svg",alt:"",width:"18",height:"18"}),(0,n.Uk)(" Imbuing calculator ")])],-1),g={class:"card-content"},s={class:"row"},o={class:"col"},l={class:"input-group left"},r=(0,n._)("label",{for:"tokenPrice"},[(0,n._)("img",{src:"img/imbuing/gold-token.webp",title:"Gold Token",width:"32",height:"32"})],-1),u={class:"col"},b={class:"badge green"},c=(0,n.Uk)(" Basic "),p={class:"col"},w={class:"badge orange"},d=(0,n.Uk)(" Intricate "),f={class:"col"},h={class:"badge red"},k=(0,n.Uk)(" Powerful "),_=(0,n._)("small",null,"Calculate based on gold token price.",-1),v={class:"mt"},y={class:"flex filters-imgs"},P=["src","title","onClick"],F=(0,n._)("small",{class:"filters-info"},"Calculate price for specific imbuement.",-1),x={key:0},S={class:"mt"},I={class:"row mt"},D={class:"col"},C={class:"input-group left"},z={for:"basicPrice"},W=["src","title"],H={class:"col"},B={class:"badge green"},U=(0,n.Uk)(" Basic "),E={class:"row mt"},M={class:"col"},G={class:"input-group left"},T={for:"intricatePrice"},L=["src","title"],V={class:"col"},R={class:"badge orange"},q=(0,n.Uk)(" Intricate "),A={class:"row mt"},O={class:"col"},j={class:"input-group left"},K={for:"powerfulPrice"},N=["src","title"],Q={class:"col"},Y={class:"badge red"},Z=(0,n.Uk)(" Powerful "),J={name:"Imbuing",data:function(){return{token:0,basic:0,intricate:0,powerful:0,selected:null,selectedIndex:null,imbuements:[{name:"Life Leech",img:"img/imbuing/life-leech.webp",basic:{amount:25,name:"Vampire Teeth",img:"img/imbuing/vampire-teeth.webp"},intricate:{amount:15,name:"Bloody Pincers",img:"img/imbuing/bloody-pincers.webp"},powerful:{amount:5,name:"Piece of Dead Brain",img:"img/imbuing/piece-of-dead-brain.webp"}},{name:"Mana Leech",img:"img/imbuing/mana-leech.webp",basic:{amount:25,name:"Rope Belts",img:"img/imbuing/rope-belt.webp"},intricate:{amount:25,name:"Silencer Claws",img:"img/imbuing/silencer-claws.webp"},powerful:{amount:5,name:"Some Grimeleech Wings",img:"img/imbuing/some-grimeleech-wings.webp"}},{name:"Critical Hit",img:"img/imbuing/critical-hit.webp",basic:{amount:20,name:"Protective Charms",img:"img/imbuing/protective-charm.webp"},intricate:{amount:25,name:"Sabreteeth",img:"img/imbuing/sabretooth.webp"},powerful:{amount:5,name:"Vexclaw Talons",img:"img/imbuing/vexclaw-talon.webp"}},{name:"Fire Damage",img:"img/imbuing/fire-damage.webp",basic:{amount:25,name:"Fiery Hearts",img:"img/imbuing/fiery-heart.webp"},intricate:{amount:5,name:"Green Dragon Scales",img:"img/imbuing/green-dragon-scale.webp"},powerful:{amount:5,name:"Demon Horns",img:"img/imbuing/demon-horn.webp"}},{name:"Earth Damage",img:"img/imbuing/earth-damage.webp",basic:{amount:25,name:"Swamp Grass",img:"img/imbuing/swamp-grass.webp"},intricate:{amount:20,name:"Poisonous Slimes",img:"img/imbuing/poisonous-slime.webp"},powerful:{amount:2,name:"Slime Hearts",img:"img/imbuing/slime-heart.webp"}},{name:"Ice Damage",img:"img/imbuing/ice-damage.webp",basic:{amount:25,name:"Frosty Hearts",img:"img/imbuing/frosty-heart.webp"},intricate:{amount:10,name:"Seacrest Hair",img:"img/imbuing/seacrest-hair.webp"},powerful:{amount:5,name:"Polar Bear Paws",img:"img/imbuing/polar-bear-paw.webp"}},{name:"Energy Damage",img:"img/imbuing/energy-damage.webp",basic:{amount:25,name:"Rorc Feathers",img:"img/imbuing/rorc-feather.webp"},intricate:{amount:5,name:"Peacock Feather Fans",img:"img/imbuing/peacock-feather-fan.webp"},powerful:{amount:1,name:"Energy Vein",img:"img/imbuing/energy-vein.webp"}},{name:"Death Damage",img:"img/imbuing/death-damage.webp",basic:{amount:25,name:"Piles of Grave Earth",img:"img/imbuing/pile-of-grave-earth.webp"},intricate:{amount:20,name:"Demonic Skeletal Hands",img:"img/imbuing/demonic-skeletal-hand.webp"},powerful:{amount:5,name:"Petrified Screams",img:"img/imbuing/petrified-scream.webp"}},{name:"Death Protection",img:"img/imbuing/death-protection.webp",basic:{amount:25,name:"Flasks of Embalming Fluid",img:"img/imbuing/flask-of-embalming-fluid.webp"},intricate:{amount:20,name:"Gloom Wolf Furs",img:"img/imbuing/gloom-wolf-fur.webp"},powerful:{amount:5,name:"Mystical Hourglasses",img:"img/imbuing/mystical-hourglass.webp"}},{name:"Earth Protection",img:"img/imbuing/earth-protection.webp",basic:{amount:25,name:"Pieces of Swampling Wood",img:"img/imbuing/piece-of-swampling-wood.webp"},intricate:{amount:20,name:"Snake Skins",img:"img/imbuing/snake-skin.webp"},powerful:{amount:10,name:"Brimstone Fangs",img:"img/imbuing/brimstone-fangs.webp"}},{name:"Fire Protection",img:"img/imbuing/fire-protection.webp",basic:{amount:20,name:"Green Dragon Leathers",img:"img/imbuing/green-dragon-leather.webp"},intricate:{amount:10,name:"Blazing Bones",img:"img/imbuing/blazing-bone.webp"},powerful:{amount:5,name:"Draken Sulphur",img:"img/imbuing/draken-sulphur.webp"}},{name:"Ice Protection",img:"img/imbuing/ice-protection.webp",basic:{amount:25,name:"Winter Wolf Furs",img:"img/imbuing/winter-wolf-fur.webp"},intricate:{amount:15,name:"Thick Furs",img:"img/imbuing/thick-fur.webp"},powerful:{amount:10,name:"Deepling Warts",img:"img/imbuing/deepling-warts.webp"}},{name:"Energy Protection",img:"img/imbuing/energy-protection.webp",basic:{amount:20,name:"Wyvern Talismans",img:"img/imbuing/wyvern-talisman.webp"},intricate:{amount:15,name:"Crawler Head Platings",img:"img/imbuing/crawler-head-plating.webp"},powerful:{amount:10,name:"Wyrm Scales",img:"img/imbuing/wyrm-scale.webp"}},{name:"Holy Protection",img:"img/imbuing/holy-protection.webp",basic:{amount:25,name:"Cultish Robes",img:"img/imbuing/cultish-robe.webp"},intricate:{amount:25,name:"Cultish Masks",img:"img/imbuing/cultish-mask.webp"},powerful:{amount:20,name:"Hellspawn Tails",img:"img/imbuing/hellspawn-tail.webp"}},{name:"Paralysis Deflection",img:"img/imbuing/paralysis-deflection.webp",basic:{amount:20,name:"Wereboar Hooves",img:"img/imbuing/wereboar-hooves.webp"},intricate:{amount:15,name:"Crystallized Anger",img:"img/imbuing/crystallized-anger.webp"},powerful:{amount:5,name:"Quills",img:"img/imbuing/quill.webp"}},{name:"Walking Speed",img:"img/imbuing/walking-speed.webp",basic:{amount:15,name:"Damselfly Wings",img:"img/imbuing/damselfly-wing.webp"},intricate:{amount:25,name:"Compasses",img:"img/imbuing/compass.webp"},powerful:{amount:20,name:"Waspoid Wings",img:"img/imbuing/waspoid-wing.webp"}},{name:"Capacity",img:"img/imbuing/capacity.webp",basic:{amount:20,name:"Fairy Wings",img:"img/imbuing/fairy-wings.webp"},intricate:{amount:10,name:"Little Bowls of Myrrh",img:"img/imbuing/little-bowl-of-myrrh.webp"},powerful:{amount:5,name:"Goosebump Leather",img:"img/imbuing/goosebump-leather.webp"}},{name:"Axe Fighting",img:"img/imbuing/axe-fighting.webp",basic:{amount:20,name:"Orc Teeth",img:"img/imbuing/orc-tooth.webp"},intricate:{amount:25,name:"Battle Stones",img:"img/imbuing/battle-stone.webp"},powerful:{amount:20,name:"Moohtant Horns",img:"img/imbuing/moohtant-horn.webp"}},{name:"Sword Fighting",img:"img/imbuing/sword-fighting.webp",basic:{amount:25,name:"Lion's Manes",img:"img/imbuing/lions-mane.webp"},intricate:{amount:25,name:"Mooh'tah Shells",img:"img/imbuing/moohtah-shell.webp"},powerful:{amount:5,name:"War Crystals",img:"img/imbuing/war-crystal.webp"}},{name:"Club Fighting",img:"img/imbuing/club-fighting.webp",basic:{amount:20,name:"Cyclops Toes",img:"img/imbuing/cyclops-toe.webp"},intricate:{amount:15,name:"Ogre Nose Rings",img:"img/imbuing/ogre-nose-ring.webp"},powerful:{amount:10,name:"Warmaster's Wristguards",img:"img/imbuing/warmasters-wristguards.webp"}},{name:"Distance Fighting",img:"img/imbuing/distance-fighting.webp",basic:{amount:25,name:"Elven Scouting Glasses",img:"img/imbuing/elven-scouting-glass.webp"},intricate:{amount:20,name:"Elven Hoofs",img:"img/imbuing/elven-hoof.webp"},powerful:{amount:10,name:"Metal Spikes",img:"img/imbuing/metal-spike.webp"}},{name:"Shielding",img:"img/imbuing/shielding.webp",basic:{amount:20,name:"Pieces of Scarab Shell",img:"img/imbuing/piece-of-scarab-shell.webp"},intricate:{amount:25,name:"Brimstone Shells",img:"img/imbuing/brimstone-shell.webp"},powerful:{amount:25,name:"Frazzle Skins",img:"img/imbuing/frazzle-skin.webp"}},{name:"Magic Level",img:"img/imbuing/magic-level.webp",basic:{amount:25,name:"Elvish Talismans",img:"img/imbuing/elvish-talisman.webp"},intricate:{amount:15,name:"Broken Shamanic Staffs",img:"img/imbuing/broken-shamanic-staff.webp"},powerful:{amount:15,name:"Strands of Medusa Hair",img:"img/imbuing/strand-of-medusa-hair.webp"}}]}},methods:{formatPrice:function(i){let e=i.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),e.join(".")},showImbuement:function(i){this.selected=!0,this.selectedIndex=i,this.basic=0,this.intricate=0,this.powerful=0}}},X=(0,m(3744).Z)(J,[["render",function(i,e,m,J,X,$){return(0,n.wg)(),(0,n.iD)("article",a,[t,(0,n._)("div",g,[(0,n._)("div",s,[(0,n._)("div",o,[(0,n._)("div",l,[r,(0,n.wy)((0,n._)("input",{type:"number",id:"tokenPrice","onUpdate:modelValue":e[0]||(e[0]=e=>i.token=e)},null,512),[[n.nr,i.token]])])]),(0,n._)("div",u,[(0,n._)("div",b,[c,(0,n._)("span",null,(0,n.zw)($.formatPrice(parseFloat((2*i.token).toFixed(3)))),1)])]),(0,n._)("div",p,[(0,n._)("div",w,[d,(0,n._)("span",null,(0,n.zw)($.formatPrice(parseFloat((4*i.token).toFixed(3)))),1)])]),(0,n._)("div",f,[(0,n._)("div",h,[k,(0,n._)("span",null,(0,n.zw)($.formatPrice(parseFloat((6*i.token).toFixed(3)))),1)])])]),_,(0,n._)("div",v,[(0,n._)("div",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.imbuements,((e,m)=>((0,n.wg)(),(0,n.iD)("img",{src:e.img,title:e.name,class:(0,n.C_)({selected:i.selectedIndex===m}),onClick:i=>$.showImbuement(m),key:m},null,10,P)))),128))]),F]),i.selected?((0,n.wg)(),(0,n.iD)("div",x,[(0,n._)("h3",S,(0,n.zw)(i.imbuements[i.selectedIndex].name),1),(0,n._)("div",I,[(0,n._)("div",D,[(0,n._)("div",C,[(0,n._)("label",z,[(0,n._)("img",{width:"32",height:"32",src:i.imbuements[i.selectedIndex].basic.img,title:i.imbuements[i.selectedIndex].basic.name},null,8,W),(0,n.Uk)(" * "+(0,n.zw)(i.imbuements[i.selectedIndex].basic.amount),1)]),(0,n.wy)((0,n._)("input",{type:"number",id:"basicPrice","onUpdate:modelValue":e[1]||(e[1]=e=>i.basic=e)},null,512),[[n.nr,i.basic]])])]),(0,n._)("div",H,[(0,n._)("div",B,[U,(0,n._)("span",null,(0,n.zw)($.formatPrice(parseFloat((i.imbuements[i.selectedIndex].basic.amount*i.basic).toFixed(3)))),1)])])]),(0,n._)("div",E,[(0,n._)("div",M,[(0,n._)("div",G,[(0,n._)("label",T,[(0,n._)("img",{width:"32",height:"32",src:i.imbuements[i.selectedIndex].intricate.img,title:i.imbuements[i.selectedIndex].intricate.name},null,8,L),(0,n.Uk)(" * "+(0,n.zw)(i.imbuements[i.selectedIndex].intricate.amount),1)]),(0,n.wy)((0,n._)("input",{type:"number",id:"intricatePrice","onUpdate:modelValue":e[2]||(e[2]=e=>i.intricate=e)},null,512),[[n.nr,i.intricate]])])]),(0,n._)("div",V,[(0,n._)("div",R,[q,(0,n._)("span",null,(0,n.zw)($.formatPrice(parseFloat((i.imbuements[i.selectedIndex].basic.amount*i.basic+i.imbuements[i.selectedIndex].intricate.amount*i.intricate).toFixed(3)))),1)])])]),(0,n._)("div",A,[(0,n._)("div",O,[(0,n._)("div",j,[(0,n._)("label",K,[(0,n._)("img",{width:"32",height:"32",src:i.imbuements[i.selectedIndex].powerful.img,title:i.imbuements[i.selectedIndex].powerful.name},null,8,N),(0,n.Uk)(" * "+(0,n.zw)(i.imbuements[i.selectedIndex].powerful.amount),1)]),(0,n.wy)((0,n._)("input",{type:"number",id:"powerfulPrice","onUpdate:modelValue":e[3]||(e[3]=e=>i.powerful=e)},null,512),[[n.nr,i.powerful]])])]),(0,n._)("div",Q,[(0,n._)("div",Y,[Z,(0,n._)("span",null,(0,n.zw)($.formatPrice(parseFloat((i.imbuements[i.selectedIndex].basic.amount*i.basic+i.imbuements[i.selectedIndex].intricate.amount*i.intricate+i.imbuements[i.selectedIndex].powerful.amount*i.powerful).toFixed(3)))),1)])])])])):(0,n.kq)("v-if",!0)])])}]])}}]);
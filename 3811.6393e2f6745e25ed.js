"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[3811],{3811:(z,c,o)=>{o.r(c),o.d(c,{FloatlabelDemoModule:()=>U});var d=o(6814),s=o(95),u=o(2129),y=o(1406),e=o(9467),M=o(7744),g=o(5219),m=o(707),f=o(3714),h=o(3965),v=o(9246),b=o(3749),C=o(4037);const Z=t=>({"background-color":t});function T(t,p){if(1&t){const l=e.EpF();e.TgZ(0,"div",35)(1,"div",36)(2,"div",37),e.NdJ("click",function(){e.CHM(l);const n=e.oxw(2);return e.KtG(n.visibleSidebar2=!0)}),e._UZ(3,"div",38),e.TgZ(4,"div",39)(5,"h6",40),e._uU(6),e.qZA()()()()()}if(2&t){const l=p.$implicit;e.xp6(3),e.Q6J("ngStyle",e.VKq(2,Z,l.color)),e.xp6(3),e.Oqu(l.title)}}function x(t,p){if(1&t&&(e.TgZ(0,"div",33),e.YNc(1,T,7,4,"div",34),e.qZA()),2&t){const l=e.oxw();e.xp6(1),e.Q6J("ngForOf",l.sensitiveLabels)}}const F=t=>({width:t});let A=(()=>{class t{constructor(l){this.countryService=l,this.countries=[],this.sortOrder=0,this.sortField="",this.filteredCountries=[],this.visibleSidebar2=!1,this.colorPickerVisible=!1,this.sidebarWidth=y.u,this.cities=[{name:"None",code:"LDN"},{name:"ANY : Document contains any of these words",code:"NY"},{name:"ALL : Document contains ALL of these words",code:"RM"},{name:"Exact : Document contains matches the word",code:"IST"},{name:"Regex : Document matches the regular expression",code:"PRS"}],this.sensitiveLabels=[{id:1,title:"Strictly Confidential",color:"#FF5733",createdBy:"John Doe",createdOn:"2024-11-15"},{id:2,title:"Highly Confidential",color:"#33FF57",createdBy:"Jane Smith",createdOn:"2024-11-20"},{id:3,title:"Confidential",color:"#3357FF",createdBy:"Alice Brown",createdOn:"2024-11-10"},{id:1,title:"Internal ",color:"#FF6347",createdBy:"M. Sarah",createdOn:"2024-11-21"},{id:2,title:"Public",color:"#4CAF50",createdBy:"M. Sarah",createdOn:"2024-11-21"}]}ngOnInit(){this.onResize(null),this.countryService.getCountries().then(l=>{this.countries=l}),this.value9=this.cities[0]}onResize(l){this.sidebarWidth=window.innerWidth<=768?"70%":"22%"}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(M.T))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],hostBindings:function(a,n){1&a&&e.NdJ("resize",function(i){return n.onResize(i)},!1,e.Jf7)},decls:67,vars:25,consts:[[1,"card","p-3","mb-2"],[1,"p-grid","p-fluid"],[1,"field","row","justify-content-between","align-items-center"],[1,"row","md:justify-content-start","col-8","align-items-center"],[1,"p-input-icon-right"],["type","text","id","righticon","placeholder","Search for a specific tag","pInputText","",3,"ngModel","ngModelChange"],[1,"pi","pi-search"],[1,"flex","flex-row","justify-content-end","gap-2","mx-2","col-4","align-items-center"],["pButton","","pRipple","","type","text","label","Filters",1,"p-button-outlined","p-button-primary"],["label","Remove","styleClass","p-button-outlined p-button-danger","icon","pi pi-trash"],["pButton","","label","Add label",1,"p-button-primary",3,"click"],["filterBy","name","layout","grid",3,"value","paginator","rows"],["dv",""],["pTemplate","gridItem"],["position","right",1,"sidebar-content-center",3,"visible","baseZIndex","visibleChange"],[1,"text-primary","font-bold"],[1,"p-grid","p-fluid","sidebar-content-center-inner"],[1,"p-col-12","p-md-6"],[1,"field"],["for","inputtext",1,"font-bold"],["type","text","id","inputtext","pInputText","",3,"ngModel","ngModelChange"],[1,"p-grid"],["for","color",1,"font-bold"],["id","color","readonly","",3,"ngModel","styleClass","ngModelChange","click"],["for","dropdown",1,"font-bold"],["inputId","dropdown","optionLabel","name",3,"autoDisplayFirst","options","ngModel","ngModelChange"],[1,"font-bold"],["for","dropdown",1,"text-primary"],["inputId","dropdown","optionLabel","name",3,"autoDisplayFirst","ngModel","ngModelChange"],[1,"w-6","self-center"],[1,"field","row","justify-content-center","align-items-center"],["pButton","","label","Cancel",1,"p-button-outlined","p-button","p-button-sm"],["pButton","","label","Save",1,"p-button-primary","p-button-sm"],[1,"grid","grid-nogutter"],["class","col-12 md:col-3",4,"ngFor","ngForOf"],[1,"col-12","md:col-3"],[1,"cardtags","m-2","p-2","flex","flex-column"],[1,"flex","justify-content-evenly","align-items-center","card-content",3,"click"],[1,"col-4","d-flex","justify-content-center","align-items-center","circle",3,"ngStyle"],[1,"col-8"],[1,"m-0","text-xl","title"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4)(5,"input",5),e.NdJ("ngModelChange",function(i){return n.value4=i}),e.qZA(),e._UZ(6,"i",6),e.qZA()(),e.TgZ(7,"div",7),e._UZ(8,"button",8)(9,"p-button",9),e.TgZ(10,"button",10),e.NdJ("click",function(){return n.visibleSidebar2=!0}),e.qZA()()()()(),e.TgZ(11,"p-dataView",11,12),e.YNc(13,x,2,1,"ng-template",13),e.qZA(),e.TgZ(14,"p-sidebar",14),e.NdJ("visibleChange",function(i){return n.visibleSidebar2=i}),e.TgZ(15,"h3",15),e._uU(16,"Add Sensitivity Label"),e.qZA(),e.TgZ(17,"div",16)(18,"div",17)(19,"div",18)(20,"label",19),e._uU(21,"Name"),e.qZA(),e.TgZ(22,"input",20),e.NdJ("ngModelChange",function(i){return n.inputTextValue=i}),e.qZA()()(),e.TgZ(23,"div",21)(24,"div",17)(25,"div",18)(26,"label",22),e._uU(27,"Color"),e.qZA(),e.TgZ(28,"p-colorPicker",23),e.NdJ("ngModelChange",function(i){return n.selectedColor=i})("click",function(){return n.colorPickerVisible=!0}),e.qZA()()()(),e.TgZ(29,"div",17)(30,"div",18)(31,"label",24),e._uU(32,"Matching algorithm"),e.qZA(),e.TgZ(33,"p-dropdown",25),e.NdJ("ngModelChange",function(i){return n.value9=i}),e.qZA()()(),e.TgZ(34,"div",17)(35,"div",18)(36,"label",19),e._uU(37,"Matching Pattern"),e.qZA(),e.TgZ(38,"input",20),e.NdJ("ngModelChange",function(i){return n.inputTextValue=i}),e.qZA()()(),e.TgZ(39,"h6",26),e._uU(40,"View Permissions"),e.qZA(),e.TgZ(41,"div",17)(42,"div",18)(43,"label",27),e._uU(44,"Users"),e.qZA(),e.TgZ(45,"p-dropdown",28),e.NdJ("ngModelChange",function(i){return n.value9=i}),e.qZA()()(),e.TgZ(46,"div",17)(47,"div",18)(48,"label",27),e._uU(49,"Groups"),e.qZA(),e.TgZ(50,"p-dropdown",28),e.NdJ("ngModelChange",function(i){return n.value9=i}),e.qZA()()(),e.TgZ(51,"h6",26),e._uU(52,"Edit Permissions"),e.qZA(),e.TgZ(53,"div",17)(54,"div",18)(55,"label",27),e._uU(56,"Users"),e.qZA(),e.TgZ(57,"p-dropdown",28),e.NdJ("ngModelChange",function(i){return n.value9=i}),e.qZA()()(),e.TgZ(58,"div",17)(59,"div",18)(60,"label",27),e._uU(61,"Groups"),e.qZA(),e.TgZ(62,"p-dropdown",28),e.NdJ("ngModelChange",function(i){return n.value9=i}),e.qZA()()(),e.TgZ(63,"div",29)(64,"div",30),e._UZ(65,"button",31)(66,"button",32),e.qZA()()()()),2&a&&(e.xp6(5),e.Q6J("ngModel",n.value4),e.xp6(6),e.Q6J("value",n.cities)("paginator",!0)("rows",5),e.xp6(3),e.Akn(e.VKq(23,F,n.sidebarWidth)),e.Q6J("visible",n.visibleSidebar2)("baseZIndex",1e4),e.xp6(8),e.Q6J("ngModel",n.inputTextValue),e.xp6(6),e.Q6J("ngModel",n.selectedColor)("styleClass","p-inputtext p-colorpicker-input"),e.xp6(5),e.Q6J("autoDisplayFirst",!0)("options",n.cities)("ngModel",n.value9),e.xp6(5),e.Q6J("ngModel",n.inputTextValue),e.xp6(7),e.Q6J("autoDisplayFirst",!0)("ngModel",n.value9),e.xp6(5),e.Q6J("autoDisplayFirst",!0)("ngModel",n.value9),e.xp6(7),e.Q6J("autoDisplayFirst",!0)("ngModel",n.value9),e.xp6(5),e.Q6J("autoDisplayFirst",!0)("ngModel",n.value9))},dependencies:[d.sg,d.PC,s.Fj,s.JJ,s.On,g.jx,m.Hq,m.zx,f.o,h.Lt,v.Y,b.zH,C.VO],styles:[".cardtags[_ngcontent-%COMP%]{background-color:#fff;min-height:100px;display:flex;border:1px solid rgb(226,224,224);border-radius:10px;flex-direction:column;justify-content:space-between;transition:transform .3s ease}.circle[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;box-shadow:0 2px 6px #0000001a}.title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:16px;font-weight:700}.field.row[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:10px}.created-info[_ngcontent-%COMP%]{font-size:12px;color:#6c757d}.card-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;flex-grow:1}@media (max-width: 768px){.col-12[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.cardtags[_ngcontent-%COMP%]{min-height:180px}}.sidebar-content-center[_ngcontent-%COMP%]{justify-content:center;align-items:center;height:100%}.sidebar-content-center-inner[_ngcontent-%COMP%]{flex-direction:column;justify-content:center;width:100%}"]})}return t})(),D=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[u.Bz.forChild([{path:"",component:A}]),u.Bz]})}return t})();var _=o(7327),J=o(6760),w=o(1480),L=o(9663),S=o(5167),N=o(8062),O=o(4055),P=o(6218);let j=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[d.ez,g.m8]})}return t})();var B=o(5897),I=o(8454);let U=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[d.ez,s.u5,D,_.WN,J._8,w.Gg,h.kW,L.zz,S.L$,N.XH,O.q4,P.A,f.j,B.n,j,I.y,v.l,b.e4,C.FI]})}return t})()}}]);
"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[3280],{3280:(R,p,t)=>{t.r(p),t.d(p,{InvalidStateDemoModule:()=>U});var s=t(6814),d=t(95),g=t(2129),c=t(1406),e=t(9467),b=t(7744),x=t(5219),u=t(707),m=t(3714),v=t(3965),h=t(9246),f=t(3749),C=t(4037);const M=i=>({"background-color":i});function T(i,y){if(1&i){const o=e.EpF();e.TgZ(0,"div",30)(1,"div",31)(2,"div",32),e.NdJ("click",function(){e.CHM(o);const n=e.oxw(2);return e.KtG(n.visibleSidebar2=!0)}),e._UZ(3,"div",33),e.TgZ(4,"div",34)(5,"h6",35),e._uU(6),e.qZA(),e.TgZ(7,"span",36),e._uU(8),e.qZA()()()()()}if(2&i){const o=y.$implicit;e.xp6(3),e.Q6J("ngStyle",e.VKq(4,M,o.color)),e.xp6(3),e.Oqu(o.title),e.xp6(2),e.AsE("",o.createdOn," by ",o.createdBy,"")}}function Z(i,y){if(1&i&&(e.TgZ(0,"div",28),e.YNc(1,T,9,6,"div",29),e.qZA()),2&i){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",o.sensitiveLabels)}}const S=i=>({width:i});let A=(()=>{class i{onResize(o){this.sidebarWidth=(window,c.u)}constructor(o){this.countryService=o,this.visibleSidebar2=!1,this.circleColor="#006400",this.colorPickerVisible=!1,this.sortOrder=0,this.sortField="",this.countries=[],this.filteredCountries=[],this.sidebarWidth=c.u}ngOnInit(){this.algorithms=[{name:"None",code:"LDN"},{name:"ANY : Document contains any of these words",code:"NY"},{name:"ALL : Document contains ALL of these words",code:"RM"},{name:"Exact : Document contains matches the word",code:"IST"},{name:"Regex : Document matches the regular expression",code:"PRS"}],this.onResize(null),this.sensitiveLabels=[{id:1,title:"Financial-Inclusion",color:"#FF5733",createdBy:"John Doe",createdOn:"2024-11-15"},{id:2,title:"Micorofinance",color:"#33FF57",createdBy:"Jane Smith",createdOn:"2024-11-20"},{id:3,title:"Financial Literacy Use",color:"#3357FF",createdBy:"Alice Brown",createdOn:"2024-11-10"},{id:1,title:"Trade",color:"#FF6347",createdBy:"M. Sarah",createdOn:"2024-11-21"},{id:2,title:"Reconstruction",color:"#4CAF50",createdBy:"M. Sarah",createdOn:"2024-11-21"},{id:3,title:"SME-PME",color:"#2196F3",createdBy:"M. Sarah",createdOn:"2024-11-21"},{id:4,title:"Market Access",color:"#FF9800",createdBy:"M. Sarah",createdOn:"2024-11-21"},{id:5,title:"Development Banking",color:"#9C27B0",createdBy:"M. Sarah",createdOn:"2024-11-21"}]}searchCountry(o){const l=[],n=o.query;for(let r=0;r<this.countries.length;r++){const a=this.countries[r];0==a.name.toLowerCase().indexOf(n.toLowerCase())&&l.push(a)}this.filteredCountries=l}static#e=this.\u0275fac=function(l){return new(l||i)(e.Y36(b.T))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],hostBindings:function(l,n){1&l&&e.NdJ("resize",function(a){return n.onResize(a)},!1,e.Jf7)},decls:42,vars:19,consts:[[1,"card","p-3","mb-2"],[1,"p-grid","p-fluid"],[1,"field","row","justify-content-between","align-items-center"],[1,"row","md:justify-content-start","col-8","align-items-center"],[1,"p-input-icon-right"],["type","text","placeholder","Search for a specific tag","pInputText","",3,"ngModel","ngModelChange"],[1,"pi","pi-search"],[1,"flex","flex-row","justify-content-end","gap-2","mx-2","col-4","align-items-center"],["pButton","","pRipple","","type","text","label","Filters",1,"p-button-outlined","p-button-primary"],["label","Remove","styleClass","p-button-outlined p-button-danger","icon","pi pi-trash"],["pButton","","type","button","label","Add tags",1,"p-button-primary",3,"click"],["filterBy","name","layout","grid",3,"value","paginator","rows","sortField","sortOrder"],["dv",""],["pTemplate","gridItem"],["position","right",1,"custom-sidebar",3,"visible","baseZIndex","visibleChange"],[1,"text-primary","font-bold"],[1,"p-col-12","p-md-6"],[1,"field"],["for","inputtext",1,"font-bold"],["type","text","id","inputtext","pInputText","",3,"ngModel","ngModelChange"],["for","color",1,"font-bold"],["id","color","readonly","",3,"ngModel","styleClass","ngModelChange","click"],["for","dropdown",1,"font-bold"],["inputId","dropdown","optionLabel","name",3,"autoDisplayFirst","options","ngModel","ngModelChange"],[1,"w-6","self-center"],[1,"field","row","justify-content-center","align-items-center"],["pButton","","label","Cancel",1,"p-button-outlined","p-button-sm"],["pButton","","label","Save",1,"p-button-primary","p-button-sm"],[1,"grid","grid-nogutter"],["class","col-12 md:col-3",4,"ngFor","ngForOf"],[1,"col-12","md:col-3"],[1,"cardtags","m-2","p-2","flex","flex-column"],[1,"flex","justify-content-evenly","align-items-center","card-content",3,"click"],[1,"col-4","d-flex","justify-content-center","align-items-center","circle",3,"ngStyle"],[1,"col-8"],[1,"m-0","text-xl","title"],[1,"m-0","text-muted","created-info"]],template:function(l,n){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4)(5,"input",5),e.NdJ("ngModelChange",function(a){return n.value4=a}),e.qZA(),e._UZ(6,"i",6),e.qZA()(),e.TgZ(7,"div",7),e._UZ(8,"button",8)(9,"p-button",9),e.TgZ(10,"button",10),e.NdJ("click",function(){return n.visibleSidebar2=!0}),e.qZA()()()()(),e.TgZ(11,"p-dataView",11,12),e.YNc(13,Z,2,1,"ng-template",13),e.qZA(),e.TgZ(14,"p-sidebar",14),e.NdJ("visibleChange",function(a){return n.visibleSidebar2=a}),e.TgZ(15,"h3",15),e._uU(16,"Add Tag"),e.qZA(),e.TgZ(17,"div",1)(18,"div",16)(19,"div",17)(20,"label",18),e._uU(21,"Name"),e.qZA(),e.TgZ(22,"input",19),e.NdJ("ngModelChange",function(a){return n.inputTextValue=a}),e.qZA()()(),e.TgZ(23,"div",16)(24,"div",17)(25,"label",20),e._uU(26,"Color"),e.qZA(),e.TgZ(27,"p-colorPicker",21),e.NdJ("ngModelChange",function(a){return n.selectedColor=a})("click",function(){return n.colorPickerVisible=!0}),e.qZA()()(),e.TgZ(28,"div",16)(29,"div",17)(30,"label",22),e._uU(31,"Matching algorithm"),e.qZA(),e.TgZ(32,"p-dropdown",23),e.NdJ("ngModelChange",function(a){return n.value9=a}),e.qZA()()(),e.TgZ(33,"div",16)(34,"div",17)(35,"label",18),e._uU(36,"Matching Pattern"),e.qZA(),e.TgZ(37,"input",19),e.NdJ("ngModelChange",function(a){return n.inputTextValue=a}),e.qZA()()(),e.TgZ(38,"div",24)(39,"div",25),e._UZ(40,"button",26)(41,"button",27),e.qZA()()()()),2&l&&(e.xp6(5),e.Q6J("ngModel",n.value4),e.xp6(6),e.Q6J("value",n.sensitiveLabels)("paginator",!0)("rows",12)("sortField",n.sortField)("sortOrder",n.sortOrder),e.xp6(3),e.Akn(e.VKq(17,S,n.sidebarWidth)),e.Q6J("visible",n.visibleSidebar2)("baseZIndex",1e4),e.xp6(8),e.Q6J("ngModel",n.inputTextValue),e.xp6(5),e.Q6J("ngModel",n.selectedColor)("styleClass","p-inputtext p-colorpicker-input"),e.xp6(5),e.Q6J("autoDisplayFirst",!0)("options",n.sensitiveLabels)("ngModel",n.value9),e.xp6(5),e.Q6J("ngModel",n.inputTextValue))},dependencies:[s.sg,s.PC,d.Fj,d.JJ,d.On,x.jx,u.Hq,u.zx,m.o,v.Lt,h.Y,f.zH,C.VO],styles:[".cardtags[_ngcontent-%COMP%]{background-color:#fff;min-height:100px;display:flex;border:1px solid rgb(226,224,224);border-radius:10px;flex-direction:column;justify-content:space-between;transition:transform .3s ease}.circle[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;box-shadow:0 2px 6px #0000001a}.title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:16px;font-weight:700}.field.row[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:10px}.created-info[_ngcontent-%COMP%]{font-size:12px;color:#6c757d}.card-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;flex-grow:1}@media (max-width: 768px){.col-12[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.cardtags[_ngcontent-%COMP%]{min-height:180px}}.sidebar-content-center[_ngcontent-%COMP%]{justify-content:center;align-items:center;height:100%}.sidebar-content-center-inner[_ngcontent-%COMP%]{flex-direction:column;justify-content:center;width:100%}"]})}return i})(),F=(()=>{class i{static#e=this.\u0275fac=function(l){return new(l||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[g.Bz.forChild([{path:"",component:A}]),g.Bz]})}return i})();var O=t(7327),I=t(6760),D=t(1480),J=t(9663),B=t(5167),w=t(8062),P=t(4055),N=t(6218),j=t(1423),z=t(5907),L=t(5897);let U=(()=>{class i{static#e=this.\u0275fac=function(l){return new(l||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[s.ez,d.u5,F,O.WN,I._8,D.Gg,v.kW,J.zz,B.L$,w.XH,P.q4,j.gz,N.A,m.j,h.l,f.e4,C.FI,z._t,L.n]})}return i})()}}]);
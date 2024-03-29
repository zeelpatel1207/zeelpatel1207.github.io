"use strict";(self.webpackChunkoculus_web=self.webpackChunkoculus_web||[]).push([[742],{6176:(m,p,c)=>{c.d(p,{X:()=>s});var s=(()=>{return(t=s||(s={})).TEXT="text",t.NUMBER="number",t.DATE="date",t.CURRENCY="currency",t.BOOLEAN="boolean",t.STATUS="status",t.ACTION="action",t.DURATION="duration",t.INDEX="index",t.PROGRESS="progress",s;var t})()},1742:(m,p,c)=>{c.d(p,{a:()=>q});var s=c(7340),t=c(4650),b=c(7489),u=c.n(b),d=c(4608),l=c(2587),y=c(6176),C=c(5140),x=c(1507),P=c(9697),_=c(6895);function f(e,r){if(1&e&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.hij(" ",n.displayLabel," ")}}function O(e,r){1&e&&(t.TgZ(0,"th"),t._uU(1,"Last Payment Status"),t.qZA())}function M(e,r){if(1&e&&(t.TgZ(0,"div"),t._UZ(1,"div",17),t.qZA()),2&e){const n=t.oxw().$implicit,o=t.oxw(),i=o.index,a=o.$implicit;t.xp6(1),t.Q6J("innerHTML","orderIndex"===(null==n?null:n.key)?i+1:a[null==n?null:n.key],t.oJD)}}function h(e,r){if(1&e&&(t.TgZ(0,"div"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=t.oxw().$implicit,o=t.oxw().$implicit;t.xp6(1),t.hij(" ",o[null==n?null:n.key]?t.xi3(2,1,o[null==n?null:n.key],"MMM dd, yyyy HH:mm:ss"):"N/A"," ")}}function T(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"div",18),t._uU(2),t.qZA(),t.TgZ(3,"div",19),t._UZ(4,"div",20),t.qZA(),t.BQk()),2&e){const n=t.oxw().$implicit,o=t.oxw().$implicit;t.xp6(2),t.hij("",o.datausege,"%"),t.xp6(2),t.Udp("width",null==o?null:o[null==n?null:n.key],"%"),t.uIk("aria-valuenow",null==o?null:o[null==n?null:n.key])}}function v(e,r){1&e&&(t.TgZ(0,"span",24),t._uU(1,"Active"),t.qZA())}function w(e,r){1&e&&(t.TgZ(0,"span",25),t._uU(1,"Expired"),t.qZA())}function E(e,r){1&e&&(t.TgZ(0,"span",26),t._uU(1),t.qZA()),2&e&&(t.xp6(1),t.hij(" ","Not Configured"," "))}function A(e,r){if(1&e&&(t.ynx(0),t.YNc(1,v,2,0,"span",21),t.YNc(2,w,2,0,"span",22),t.YNc(3,E,2,1,"span",23),t.BQk()),2&e){const n=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf","active"===(null==n?null:n.status)),t.xp6(1),t.Q6J("ngIf","expired"===(null==n?null:n.status)),t.xp6(1),t.Q6J("ngIf","not-configured"===(null==n?null:n.status))}}function k(e,r){if(1&e&&(t.TgZ(0,"span",29),t._uU(1,"Fail "),t._UZ(2,"i",30),t.qZA()),2&e){const n=t.oxw(3).$implicit,o=t.oxw(2);t.Q6J("title",o.getErrorMessage(n))}}function D(e,r){1&e&&(t.TgZ(0,"span",31),t._uU(1,"Success"),t.qZA())}function S(e,r){if(1&e&&(t.ynx(0),t.YNc(1,k,3,1,"span",27),t.YNc(2,D,2,0,"span",28),t.BQk()),2&e){const n=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf",0===(null==n?null:n.status)),t.xp6(1),t.Q6J("ngIf",1===(null==n?null:n.status))}}function Z(e,r){1&e&&t._UZ(0,"div",42)}function I(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",40),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,a=t.oxw(3).$implicit,g=t.oxw(2);return t.KtG(g.openDialog(null!=i&&i.isVersionV1Compatibility&&(null!=a&&a.isVersionV1||null!=a&&a.isAdminGeneratedOrder)?i.backwardCompatibilityEvent:i.event,a,i))}),t.TgZ(1,"a"),t._uU(2),t.qZA(),t.YNc(3,Z,1,0,"div",41),t.qZA()}if(2&e){const n=t.oxw().$implicit,o=t.oxw(3).$implicit,i=t.oxw(2);t.xp6(1),t.Gre("submenu-color d-flex justify-content-between ",null==n?null:n.customClass,""),t.xp6(1),t.hij("",i.getPaymentStatus(o)&&"renew now"==(null==n||null==n.title?null:n.title.toLowerCase())?"Retry Failed Payment":null==n?null:n.title," "),t.xp6(1),t.Q6J("ngIf",(null==n?null:n.isDivider)&&!o.isAdminGeneratedOrder&&!o.isHideRenewNow)}}function R(e,r){if(1&e&&(t.ynx(0),t.YNc(1,I,4,5,"div",39),t.BQk()),2&e){const n=r.$implicit,o=t.oxw(3).$implicit,i=t.oxw(2);t.xp6(1),t.Q6J("ngIf",i.isDisplayAutoRenewAction(n,o)&&i.isDisplayRenewAction(n,o)&&i.isDisplayChangeMethod(n,o))}}function U(e,r){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",32)(2,"span",33),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2).$implicit,a=t.oxw(2);return t.KtG(a.proxyList.emit(i))}),t._uU(3),t.qZA(),t.TgZ(4,"div",34)(5,"div",35)(6,"a",36),t._UZ(7,"i",37),t.qZA(),t.TgZ(8,"div",38),t.YNc(9,R,2,1,"ng-container",8),t.qZA()()()(),t.BQk()}if(2&e){const n=t.oxw().$implicit,o=t.oxw(3);t.xp6(3),t.Oqu(o.proxyListLabel),t.xp6(6),t.Q6J("ngForOf",null==n?null:n.actions)}}function N(e,r){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"i",43),t.NdJ("click",function(){const a=t.CHM(n).$implicit,g=t.oxw(3).$implicit,H=t.oxw(2);return t.KtG(H.openDialog(a.event,g,a))}),t.qZA(),t.BQk()}if(2&e){const n=r.$implicit;t.xp6(1),t.Tol(null==n?null:n.icon)}}function L(e,r){if(1&e&&(t.ynx(0),t.YNc(1,N,2,3,"ng-container",8),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",null==n?null:n.actions)}}const B=function(e){return{width:e}};function J(e,r){if(1&e&&(t.TgZ(0,"td",16),t.YNc(1,M,2,1,"div",9),t.YNc(2,h,3,4,"div",9),t.YNc(3,T,5,4,"ng-container",9),t.YNc(4,A,4,3,"ng-container",9),t.YNc(5,S,3,2,"ng-container",9),t.YNc(6,U,10,2,"ng-container",9),t.YNc(7,L,2,1,"ng-container",9),t.qZA()),2&e){const n=r.$implicit,o=t.oxw().$implicit,i=t.oxw(2);t.Q6J("ngStyle",t.VKq(8,B,(null==n?null:n.columnWidth)+"px")),t.xp6(1),t.Q6J("ngIf",!i.columnNotDisplaying.includes(null==n?null:n.type)),t.xp6(1),t.Q6J("ngIf",(null==n?null:n.type)===i.tableTypeEnum.DATE),t.xp6(1),t.Q6J("ngIf",(null==n?null:n.type)===i.tableTypeEnum.PROGRESS&&"N/A"!==(null==o?null:o[null==n?null:n.key])),t.xp6(1),t.Q6J("ngIf",(null==n?null:n.type)===i.tableTypeEnum.STATUS&&!n.customButton),t.xp6(1),t.Q6J("ngIf",(null==n?null:n.type)===i.tableTypeEnum.STATUS&&n.customButton),t.xp6(1),t.Q6J("ngIf",i.checkConditionForActionCol(o,n)),t.xp6(1),t.Q6J("ngIf",(null==n?null:n.type)===i.tableTypeEnum.ACTION&&(null==n?null:n.isDisplayWithoutIcon))}}function Q(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"td")(1,"div")(2,"span",44),t.NdJ("click",function(){t.CHM(n);const i=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.getPaymentStatus(i)&&"expired"!==(null==i?null:i.status)?a.paymentButton.emit(i):null)}),t.TgZ(3,"span",45),t._uU(4),t.qZA(),t.TgZ(5,"span",46),t._UZ(6,"i"),t.qZA()()()()}if(2&e){const n=t.oxw().$implicit,o=t.oxw(2);t.xp6(2),t.ekj("success-msg",!o.getPaymentStatus(n))("incomplete-msg",o.getPaymentStatus(n))("disabled","expired"===(null==n?null:n.status)&&o.getPaymentStatus(n)),t.Q6J("title",o.getPaymentStatus(n)?o.getErrorMessageTable(n):""),t.xp6(2),t.Oqu(o.getPaymentStatus(n)?"Incomplete":"Success"),t.xp6(2),t.Gre("fa fa-regular ",o.getPaymentStatus(n)?"fa-clock":"fa-check","")}}function Y(e,r){if(1&e&&(t.TgZ(0,"tr",14),t.YNc(1,J,8,10,"td",15),t.YNc(2,Q,7,11,"td",9),t.qZA()),2&e){const n=r.$implicit,o=t.oxw(2);t.Q6J("ngClass","expired"===n.status?"data-diactive-color":"data-active-color"),t.xp6(1),t.Q6J("ngForOf",o.columns),t.xp6(1),t.Q6J("ngIf",o.isPaymentStatusCol)}}function $(e,r){if(1&e&&(t.TgZ(0,"tbody",12),t.YNc(1,Y,3,3,"tr",13),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.data)}}function K(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"button",52),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.redirectOnPricing())}),t._uU(1," Purchase plan "),t.qZA()}}function F(e,r){if(1&e&&(t.TgZ(0,"div",47)(1,"div",48)(2,"div",49),t._UZ(3,"img",50)(4,"h4",17),t.TgZ(5,"a"),t.YNc(6,K,2,0,"button",51),t.qZA()()()()),2&e){const n=t.oxw();t.xp6(4),t.Q6J("innerHTML",n.emptyScreenText,t.oJD),t.xp6(2),t.Q6J("ngIf",n.isEmptyScreenButtonDisplay)}}let q=(()=>{class e{constructor(n,o){this.modelService=n,this.router=o,this._vs=(0,t.f3M)(C.P),this.data=[],this.columns=[],this.orderKey=[],this.orderDirection=[],this.emptyScreenText="You do not have any active plans",this.isEmptyScreenButtonDisplay=!0,this.type=l.SA.ISP_PROXY,this.newProductType=l.Le.PERFORMANCE,this.paymentButton=new t.vpe,this.proxyList=new t.vpe,this.isPaymentStatusCol=!1,this.proxyListLabel="Proxy list",this.residentialPlanType=d.sz.OCULUS_SHARED_DATA_CENTER,this.orderTypeEnum=l.SA,this.tableTypeEnum=y.X,this.columnNotDisplaying=[this.tableTypeEnum.STATUS,this.tableTypeEnum.PROGRESS,this.tableTypeEnum.DATE],this.showConfigureProxy=!1}ngOnInit(){this.data=u().orderBy(this.data,this.orderKey,this.orderDirection)}ngOnChanges(){this.data=u().orderBy(this.data,this.orderKey,this.orderDirection)}redirectOnPricing(){this.type===l.SA.ISP_PROXY||this.newProductType===l.Le.ISP_PROXY?this.router.navigate([this._vs.getPlanURL("premium")]):this.newProductType===l.Le.DEDICATED_DC||this.newProductType===l.Le.SHARED_DC?this.router.navigate([this._vs.getPlanURL("sharedDC")],this._vs.isV2OrV3?{queryParams:{planType:this.newProductType}}:{}):this.router.navigate(this.type===l.SA.RESIDENTIAL_PROXY?[this._vs.getPlanURL("residential")]:[this._vs.getPlanURL("sharedDC")])}paymentHistory(){this.modelService.open("payment-history")}openDialog(n,o,i){this.getPaymentStatus(o)&&["renewResidential","renew-now"].includes(i.key)?this.paymentButton.emit(o):n&&n.emit(o)}checkConditionForActionCol(n,o){return o?.type===this.tableTypeEnum.ACTION&&!o?.isDisplayWithoutIcon&&"expired"!==n?.status&&o?.actions?.length}getPaymentStatus(n){return["initiated","failed"].includes(n?.lastPaymentStatus?.toLowerCase())&&!!n?.stripeSubscriptionId}getErrorMessage(n){return n?.errorMessage}getErrorMessageTable(n){return n?.errorMessage}isDisplayChangeMethod(n,o){return!o.isAdminGeneratedOrder&&"changePaymentMethod"===n.key||"changePaymentMethod"!==n.key}isDisplayRenewAction(n,o){return(!n.isHidefunctionality||n.isHidefunctionality&&o.isVersionV1||o.isAdminGeneratedOrder&&"changePaymentMethod"!==n.key)&&!("renew-now"===n.key&&o.isHideRenewNow)&&n.hideType!==d.sz.OCULUS_NETWORK_EXTREME&&n.hideType!==d.sz.OCULUS_PRIVATE_RESERVE&&n.hideType!==this.residentialPlanType}isDisplayAutoRenewAction(n,o){return("autoRenewSubscription"!==n.key||"autoRenewSubscription"===n.key&&o.isDisplayAction||!o.isAdminGeneratedOrder&&"changePaymentMethod"!==n.key)&&!("autoRenewSubscription"===n.key&&o.isHideRenewNow)&&n.hideType!==d.sz.OCULUS_NETWORK_EXTREME&&n.hideType!==this.residentialPlanType}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(x.k),t.Y36(P.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-table"]],inputs:{data:"data",columns:"columns",orderKey:"orderKey",orderDirection:"orderDirection",emptyScreenText:"emptyScreenText",isEmptyScreenButtonDisplay:"isEmptyScreenButtonDisplay",type:"type",newProductType:"newProductType",isPaymentStatusCol:"isPaymentStatusCol",proxyListLabel:"proxyListLabel",residentialPlanType:"residentialPlanType"},outputs:{paymentButton:"paymentButton",proxyList:"proxyList"},features:[t.TTD],decls:13,vars:6,consts:[[1,"my-orders-table"],[1,"my-orders-table-responsive"],[1,"pricing-content"],["id","pills-tabContent"],[1,"tab-pane","show","active"],[1,"table-responsive","border-head",3,"ngClass"],[1,"table-hover","borders","row-divider"],[1,"order-row"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","table-body align-top",4,"ngIf"],["class","empty-state",4,"ngIf"],[1,"table-body","align-top"],["class","mt-2 radius table-data",3,"ngClass",4,"ngFor","ngForOf"],[1,"mt-2","radius","table-data",3,"ngClass"],[3,"ngStyle",4,"ngFor","ngForOf"],[3,"ngStyle"],[3,"innerHTML"],[1,"p-0"],[1,"custome-progressBar"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","custome-progressBar-color"],["class","badge active-status-color",4,"ngIf"],["class","badge expired-status-color badge-dark",4,"ngIf"],["class","badge badge-dark",4,"ngIf"],[1,"badge","active-status-color"],[1,"badge","expired-status-color","badge-dark"],[1,"badge","badge-dark"],["class","badge expired-status-color fail-badge",3,"title",4,"ngIf"],["class","badge badge-success-subscription",4,"ngIf"],[1,"badge","expired-status-color","fail-badge",3,"title"],[1,"fas","fa-info-circle",2,"margin-left","5px"],[1,"badge","badge-success-subscription"],[2,"display","flex"],[1,"proxy-list",3,"click"],[1,"options","option","option-radius"],[1,"dropdown","proxy-modal"],["id","tabaction","data-toggle","dropdown","aria-expanded","false",1,"color","dots","d-flex","justify-content-center","dropdown-toggle-no-content"],[1,"p-2","fas","fa-ellipsis-v"],["aria-labelledby","tabaction",1,"menu-shadow","dropdown-menu","dropdown-border"],["class","label-color dropdown-item",3,"click",4,"ngIf"],[1,"label-color","dropdown-item",3,"click"],["class","dropdown-divider-less",4,"ngIf"],[1,"dropdown-divider-less"],[3,"click"],["data-toggle","tooltip","data-placement","top",1,"payment",3,"title","click"],[1,"payment-status"],[1,"d-flex"],[1,"empty-state"],[1,"image-section"],[1,"text-center"],["src","../../../../assets/images/order/empty-order.svg"],["class","btn-purchase",3,"click",4,"ngIf"],[1,"btn-purchase",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"table",6)(7,"thead")(8,"tr",7),t.YNc(9,f,2,1,"th",8),t.YNc(10,O,2,0,"th",9),t.qZA()(),t.YNc(11,$,2,1,"tbody",10),t.qZA(),t.YNc(12,F,7,2,"div",11),t.qZA()()()()()()),2&n&&(t.Q6J("@fade",void 0),t.xp6(5),t.Q6J("ngClass",1===o.data.length?"table-min-height":""),t.xp6(4),t.Q6J("ngForOf",o.columns),t.xp6(1),t.Q6J("ngIf",o.isPaymentStatusCol),t.xp6(1),t.Q6J("ngIf",null==o.data?null:o.data.length),t.xp6(1),t.Q6J("ngIf",!o.data.length))},dependencies:[_.mk,_.sg,_.O5,_.PC,_.uU],styles:[".align-top[_ngcontent-%COMP%]{vertical-align:middle!important}.submenu-color[_ngcontent-%COMP%]{color:#fff}.submenu-color[_ngcontent-%COMP%]:hover{color:#5ee8bd!important}.radius[_ngcontent-%COMP%]{border-radius:5px!important}[_nghost-%COMP%]    {user-select:text!important;-webkit-user-select:text!important}.table-min-height[_ngcontent-%COMP%]{min-height:12rem}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]{margin-bottom:10px}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table-hover[_ngcontent-%COMP%]{width:100%}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table-hover[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#222633;padding:20px 10px;color:#a4a9bb}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table-hover[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1rem 10px;font-weight:700;font-size:14px!important}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table-hover[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{border-radius:12px 0 0 12px}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table-hover[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{border-radius:0 12px 12px 0}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table-hover[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]{margin-top:6px;margin-bottom:6px;background-color:#151824}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table-hover[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:18px 10px}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table-hover[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{border-radius:12px 0 0 12px}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table-hover[_ngcontent-%COMP%]   .table-data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-radius:0 12px 12px 0}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table-hover[_ngcontent-%COMP%]   .data-active-color[_ngcontent-%COMP%]{color:#fff}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .table-hover[_ngcontent-%COMP%]   .data-diactive-color[_ngcontent-%COMP%]{color:#a4a9bb}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .custome-progressBar[_ngcontent-%COMP%]{display:flex;height:.5rem;overflow:hidden;line-height:0;font-size:.75rem;background-color:#2e3243;border-radius:.25rem}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   .custome-progressBar-color[_ngcontent-%COMP%]{background:#62fcc1}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]{min-height:50vh;display:flex;align-items:center;justify-content:center}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]{text-align:center}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px;color:#fff}.my-orders-table[_ngcontent-%COMP%]   .my-orders-table-responsive[_ngcontent-%COMP%]   .pricing-content[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:6px 20px;border-radius:7px;margin-top:12px;background:#0099a5;font-weight:700;border:none;color:#fff}a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{border-bottom:none!important}.menu-shadow[_ngcontent-%COMP%]{box-shadow:0 12px 17px #00000040;background:#1f2333}.row-divider[_ngcontent-%COMP%]{border-spacing:0 10px;border-collapse:separate}.active-status-color[_ngcontent-%COMP%]{color:#66fcc1;padding:.7em 1.5em;border:2px solid #244643;border-radius:15px}.expired-status-color[_ngcontent-%COMP%]{color:#f16199;background-color:transparent;padding:.7em 1.5em;border:2px solid #43273b;border-radius:15px}.color[_ngcontent-%COMP%]{color:#75798b}.option[_ngcontent-%COMP%]{background:#2e3243;border-radius:5px}.dropdown-divider-less[_ngcontent-%COMP%]{height:0px!important;margin:.5rem -16px!important;overflow:hidden!important;border-top:1px solid #41475a!important}.dropdown-item[_ngcontent-%COMP%]{padding:0rem 1rem!important}.dropdown-item[_ngcontent-%COMP%]:first{padding-top:1rem}.dots[_ngcontent-%COMP%]{border-radius:4px!important;font-size:13px!important;line-height:1.2!important;font-weight:500!important;letter-spacing:.1px!important;text-align:center!important;transition:.4s!important}.dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background-color:#1f2333}.badge-dark-subscription[_ngcontent-%COMP%]{border:1px solid #a1a1a1;color:#d6d6d6;background-color:#0d0f17;border-radius:2px;font-weight:400;letter-spacing:1px;text-transform:capitalize;font-size:13px}.badge-success-subscription[_ngcontent-%COMP%]{border:1px solid #41b787;color:#14e08d;background-color:#0d0f17;border-radius:2px;font-weight:400;text-transform:capitalize;font-size:13px;letter-spacing:.5px}.success-msg[_ngcontent-%COMP%]{color:#66fcc1!important;background-color:transparent!important;width:110px!important;border:2px solid #244643;border-radius:15px!important}.payment[_ngcontent-%COMP%]{padding:4px;margin-inline:auto;width:124px;display:flex;align-items:center;justify-content:space-evenly;justify-items:center;background-color:#8d8d8d52;color:#fff;border-radius:5px;cursor:pointer;font-size:13px;font-weight:600}.payment-status[_ngcontent-%COMP%]{display:flex;align-items:center}.disabled[_ngcontent-%COMP%]{background-color:#8d8d8d52;color:#dcdcdc}.fail-badge[_ngcontent-%COMP%]{cursor:pointer;font-size:14px;padding:4px 10px;border-radius:2px;border:1px solid #f16199;background-color:#f1619900}.proxy-list[_ngcontent-%COMP%]{color:#66fcc1;background-color:#244643;padding:.7em 1.5em;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;cursor:pointer;white-space:nowrap;font-weight:700;line-height:1;font-size:78%}.option-radius[_ngcontent-%COMP%]{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important;border-radius:0}.incomplete-msg[_ngcontent-%COMP%]{color:#fff!important;background-color:transparent!important;width:110px!important;border:2px solid grey;border-radius:15px!important}"],data:{animation:[(0,s.X$)("fade",[(0,s.eR)("void => *",[(0,s.oB)({opacity:0}),(0,s.jt)(700,(0,s.oB)({opacity:1}))])])]}}),e})()}}]);
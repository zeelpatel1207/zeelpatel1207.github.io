"use strict";(self.webpackChunkoculus_web=self.webpackChunkoculus_web||[]).push([[618],{5618:(v,_,s)=>{s.d(_,{y:()=>B});var e=s(4650),a=s(4719),u=s(3679),m=s(4766),p=s(6716),l=s(5439),d=s.n(l),h=s(1179),x=s(1338),b=s(5140),f=s(9697),y=s(5628),O=s(7185),P=s(3305),C=s(6895),M=s(1405),R=s(4750),w=s(9919),E=s(6817);const T=["registerFormEl"],D=["captchaElem"],A=["ngOtpInput"];function U(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"app-otp",2),e.NdJ("validateLoginToken",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.validateToken(i))})("captchaResponse",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.captchaResponse(i))})("resentOtp",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.isResentOtp(i))})("closeRegisterDialog",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.closeRegisterDialog.emit(!1))}),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("reload2FACaptcha",t.reload2FACaptcha)("loginEmail",t.email)("isLabelDisplay",!0)("isRegisterFromDialog",t.isRegisterFromDialog)("type","")("loading",t.isLoader)("applyCaptcha",!0)}}function k(o,c){1&o&&(e.TgZ(0,"div",4)(1,"div",5)(2,"div",37)(3,"h1"),e._uU(4,"Sign Up "),e._UZ(5,"span"),e.qZA()()()())}function Z(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"button",41),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(3);return e.KtG(i.closeRegisterDialog.emit(!1))}),e.TgZ(1,"span",24),e._uU(2,"\xd7"),e.qZA()()}}function I(o,c){if(1&o&&(e.TgZ(0,"div",38)(1,"h1",39),e._uU(2,"Sign Up"),e.qZA(),e.YNc(3,Z,3,0,"button",40),e.qZA()),2&o){const t=e.oxw(2);e.xp6(3),e.Q6J("ngIf",!t.isLoading)}}function F(o,c){1&o&&e._UZ(0,"hr")}function L(o,c){1&o&&(e.TgZ(0,"div"),e._uU(1," Password must be a minimum of 8 characters including uppercase, lowercase and at least one number. "),e.qZA())}function S(o,c){if(1&o&&(e.TgZ(0,"div",42),e.YNc(1,L,2,0,"div",9),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.f.password.errors.required||t.f.password.errors.minlength||t.f.password.errors.pattern)}}function K(o,c){1&o&&e._UZ(0,"span",43)}function N(o,c){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",44),e._UZ(2,"hr"),e._uU(3," OR "),e._UZ(4,"hr"),e.qZA(),e.TgZ(5,"app-google-auth",45),e.NdJ("success",function(){e.CHM(t);const i=e.oxw(2);return i.isSignUpAfterVisit=!0,e.KtG(i.googleAuth.emit(!0))}),e.qZA(),e.BQk()}}function q(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),e.YNc(4,k,6,0,"div",7),e.YNc(5,I,4,1,"div",8),e.YNc(6,F,1,0,"hr",9),e.TgZ(7,"div",4)(8,"div",5)(9,"div",10)(10,"div",11)(11,"form",12,13),e.NdJ("ngSubmit",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.registerUser())}),e.TgZ(13,"div",4)(14,"div",14)(15,"div",15),e._UZ(16,"input",16),e.qZA()(),e.TgZ(17,"div",14)(18,"div",15),e._UZ(19,"input",17),e.qZA()(),e.TgZ(20,"div",18)(21,"div",15),e._UZ(22,"input",19),e.qZA()(),e.TgZ(23,"div",18)(24,"div",20),e._UZ(25,"input",21),e.TgZ(26,"div",22)(27,"a",23),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.show=!i.show)}),e._UZ(28,"i",24),e.qZA()(),e.YNc(29,S,2,1,"div",25),e.qZA()(),e.TgZ(30,"div",18)(31,"div",15)(32,"app-country-code-picker",26),e.NdJ("selectedCountry",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.getSelectedCountry(i))}),e.qZA()()(),e.TgZ(33,"div",27)(34,"div",15)(35,"ngx-recaptcha2",28,29),e.NdJ("success",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.handleSuccess(i))}),e.qZA()()(),e.TgZ(37,"div",18)(38,"div",15)(39,"label",30),e._UZ(40,"input",31),e._uU(41," By registering on this website, you have confirmed that you have read and agreed to our "),e.TgZ(42,"a",32),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.goTo("/terms_conditions"))}),e._uU(43,"Terms and Conditions"),e.qZA(),e._uU(44," and "),e.TgZ(45,"a",32),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.goTo("/privacy_policy"))}),e._uU(46,"Privacy Policy"),e.qZA(),e._uU(47,"."),e.qZA()()(),e.TgZ(48,"div",18)(49,"button",33),e.YNc(50,K,1,0,"span",34),e._uU(51," Sign Up "),e.qZA(),e.YNc(52,N,6,0,"ng-container",9),e.ALo(53,"async"),e.qZA()()()(),e.TgZ(54,"div",35)(55,"p"),e._uU(56," Already have an account? "),e.TgZ(57,"a",36),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.goToLogin())}),e._uU(58,"Log In"),e.qZA()()()()()()()()()()}if(2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngIf",!t.isRegisterFromDialog),e.xp6(1),e.Q6J("ngIf",t.isRegisterFromDialog),e.xp6(1),e.Q6J("ngIf",t.isRegisterFromDialog),e.xp6(5),e.Q6J("formGroup",t.registerForm),e.xp6(14),e.Q6J("type",t.show?"text":"password"),e.xp6(3),e.Gre("fa fa-eye",t.show?"-slash":"",""),e.xp6(1),e.Q6J("ngIf",t.f.password.errors&&t.f.password.touched),e.xp6(3),e.Q6J("countryTooltip","")("defaultValue",t.defaultCountry)("displayLabel",!1)("isDisabled",!1),e.xp6(3),e.Q6J("siteKey",t.recaptchaKey)("size",t.size)("hl",t.lang)("theme",t.theme)("type",t.type),e.xp6(4),e.ekj("fs-10x",t.isRegisterFromDialog),e.xp6(10),e.ekj("btn-disabled",t.isLoading),e.Q6J("disabled",t.isLoading),e.xp6(1),e.Q6J("ngIf",t.isLoading),e.xp6(2),e.Q6J("ngIf",e.lcZ(53,25,t.vs.isV2OrV3$))}}let B=(()=>{class o{constructor(t,n,i,r,g,J,G){this.route=t,this.authenticationService=n,this.router=i,this.toastr=r,this.fb=g,this._cdr=J,this._dataLayerService=G,this.vs=(0,e.f3M)(b.P),this.showOtpComponent=!0,this.showEmailField=!0,this.showPasswordField=!0,this.show=!1,this.isSignUpAfterVisit=!1,this.theme="light",this.size="normal",this.lang="en",this.type="image",this.captchaResponseString="",this.config={allowNumbersOnly:!0,length:6,isPasswordInput:!1,disableAutoFocus:!1,placeholder:"",inputStyles:{width:"50px",height:"50px"}},this.defaultCountry=u.h[0],this.enable2fa=!1,this.email="",this.returnUrl="",this.registerRequest={},this.isLoading=!1,this.isLoader=!1,this.reload2FACaptcha=!1,this.recaptchaKey=m.N.recaptchaKey,this.isRegisterFromDialog=!1,this.closeRegisterDialog=new e.vpe,this.googleAuth=new e.vpe}handleKeyboardEvent(t){"enter"===t.key?.toLowerCase()&&this.registerUser()}onPopState(t){console.log("Back button pressed"),this.registerForm.reset()}ngOnInit(){this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/",this._dataLayerService.logSignupForm(window.location.href),this.registerForm=this.fb.group({firstName:new a.p4("",[a.kI.required]),lastName:new a.p4("",[a.kI.required]),email:new a.p4("",[h.o]),password:new a.p4("",[a.kI.required,a.kI.minLength(8),a.kI.pattern(p.lI)]),acceptTerms:new a.p4(""),recaptcha:new a.p4("")}),this.authenticationService.scrollToTop(),this.isSignUpAfterVisit=!1,this.isRegisterFromDialog||this.checkCurrentActiveState()}checkCurrentActiveState(){this.route.queryParamMap.subscribe(t=>{const n=this.authenticationService.getUserEmail();t&&t.params&&t.params.email&&t.params.email===n?this.enable2fa=!0:(this.enable2fa=!1,this.router.navigate(["register"],{replaceUrl:!0}),this._cdr.detectChanges())})}get f(){return this.registerForm.controls}handleSuccess(t){console.log(t)}controlsEqual(t,n,i=t){return r=>{const g=r?.get(t);return g?.value!==r.get(n)?.value?(g?.setErrors({[i]:!0}),{[i]:!0}):(g?.setErrors(null),null)}}getSelectedCountry(t){this.defaultCountry=t,console.log("country code",this.defaultCountry)}validateAreEqual(t){return t.value===this.registerForm.get("password").value?t.value:{NotEqual:!0}}setFormInputFocus(){for(const t of Object.keys(this.registerForm.controls))if(this.registerForm.controls[t].invalid){this.registerFormEl.nativeElement.querySelector('[formcontrolname="'+t+'"]').focus();break}}registerUser(){if(!this.enable2fa){if(this.registerForm.invalid)return void this.setFormInputFocus();if(!this.registerForm.get("recaptcha").value)return void this.toastr.error("Please resolve the captcha and submit!","Captcha Error");if(this.registerForm.get("acceptTerms").value){let t=this.registerForm.get("email").value;this.registerRequest={...this.registerForm.value,username:t,country:this.defaultCountry.code},this.registerRequest.password=this.registerRequest.password,delete this.registerRequest.confirm_password,delete this.registerRequest.email,this.isLoading=!0,this.authenticationService.registerUser(this.registerRequest).subscribe(n=>{this.isSignUpAfterVisit=!0,this.captchaElement?.reloadCaptcha(),this.registerForm.get("recaptcha").setValue(""),this.email=t,this.authenticationService.setUserName(this.email),this.toastr.success(this.authenticationService.firstLetterCapitalized("Successfully sent token on your register mail id"+this.email),"Success");let i=this.email.split("@")[0].length-2,r=new RegExp(".{"+i+"}@","g");this.email=this.email.replace(r,"***@"),this.enable2fa=!0,this.isLoading=!1,this.isRegisterFromDialog||this.router.navigate([],{relativeTo:this.route,queryParams:{email:this.registerRequest.username},queryParamsHandling:"merge"}),this._cdr.detectChanges()},n=>{this.isLoading=!1,this.captchaElement?.reloadCaptcha(),this.registerForm.get("recaptcha").setValue(""),n?.message&&this.toastr.error(n.message,"Error"),this._cdr.detectChanges()})}else this.toastr.error("Please accept T&C and privacy policy")}}isResentOtp(t){this.registerFormRequest=this.registerForm.value;const n=this.registerFormRequest.email||this.authenticationService.getUserEmail();this.authenticationService.resentOtp(n).subscribe(i=>{console.log(i),this.toastr.error("Wait 3 minutes, Our message might be slightly delayed. you can request the login token again after 3  minutes of your last request.","Success")},i=>{console.log(i)})}captchaResponse(t){this.captchaResponseString=t}validateToken(t){if(this.isLoader=!0,this.reload2FACaptcha=!1,t){const n=t;let i="";console.log("token value is",n,this.registerRequest,this.captchaResponseString),i=this.registerRequest&&this.registerRequest.username?this.registerRequest.username:this.authenticationService.getUserEmail(),this.authenticationService.validateLogin(n,i,this.captchaResponseString).subscribe(r=>{this.isLoader=!1,this.reload2FACaptcha=!0,console.log("[SIGNUP] track events in ga4...."),this._dataLayerService.logSignupSuccess(window.location.href),this.isRegisterFromDialog?this.closeRegisterDialog.emit(!0):this.router.navigate([this.vs.getOrderURL("ispProxy")]),this.getLoginTime(r?.expiryDate),this.toastr.success("Congratulations! Your account has been created"),this._cdr.detectChanges()},r=>{this.isLoader=!1,this.reload2FACaptcha=!0,this._cdr.detectChanges()})}}getLoginTime(t){localStorage.setItem(x.xZ.oculusSession,d()(new Date(t)).unix().toString())}goToLogin(){this.isSignUpAfterVisit=!0,this.router.navigate(["login"])}goTo(t){window.open(t,"_blank")}ngOnDestroy(){this.isSignUpAfterVisit||(console.log("[INCOMPLETE_SIGNUP] track events in ga4...."),this._dataLayerService.logIncompleteSignup(window.location.href))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f.gz),e.Y36(y.$h),e.Y36(f.F0),e.Y36(O._W),e.Y36(a.QS),e.Y36(e.sBO),e.Y36(P.n))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-register"]],viewQuery:function(t,n){if(1&t&&(e.Gf(T,5),e.Gf(D,5),e.Gf(A,5)),2&t){let i;e.iGM(i=e.CRH())&&(n.registerFormEl=i.first),e.iGM(i=e.CRH())&&(n.captchaElement=i.first),e.iGM(i=e.CRH())&&(n.ngOtpInput=i.first)}},hostBindings:function(t,n){1&t&&e.NdJ("keypress",function(r){return n.handleKeyboardEvent(r)},!1,e.evT)("popstate",function(r){return n.onPopState(r)},!1,e.Jf7)},inputs:{isRegisterFromDialog:"isRegisterFromDialog"},outputs:{closeRegisterDialog:"closeRegisterDialog",googleAuth:"googleAuth"},decls:2,vars:2,consts:[[3,"reload2FACaptcha","loginEmail","isLabelDisplay","isRegisterFromDialog","type","loading","applyCaptcha","validateLoginToken","captchaResponse","resentOtp","closeRegisterDialog",4,"ngIf"],["class","container d-flex justify-content-center animate__animated animate__fadeIn","style","min-height: calc(80vh - 260px); margin-top: 80px",4,"ngIf"],[3,"reload2FACaptcha","loginEmail","isLabelDisplay","isRegisterFromDialog","type","loading","applyCaptcha","validateLoginToken","captchaResponse","resentOtp","closeRegisterDialog"],[1,"container","d-flex","justify-content-center","animate__animated","animate__fadeIn",2,"min-height","calc(80vh - 260px)","margin-top","80px"],[1,"row"],[1,"col-12"],[1,"register-part"],["class","row",4,"ngIf"],["id","signup-header","class","col-12 d-inline-flex justify-content-between",4,"ngIf"],[4,"ngIf"],[1,"register-content"],[1,"register-form"],["title","Register form","id","register_form",3,"formGroup","ngSubmit"],["registerFormEl",""],[1,"col-md-6","col-12"],[1,"form-inputRow"],["type","text","id","firstname","name","firstname","placeholder","First Name","formControlName","firstName","autofocus","",1,"register-input-control"],["type","text","id","lastname","name","lastname","placeholder","Last Name","formControlName","lastName",1,"register-input-control"],[1,"col-md-12","col-12"],["type","email","id","email","name","email","placeholder","Email","formControlName","email",1,"register-input-control"],[1,"form-inputRow","input-group"],["id","password","name","password","placeholder","Set a password","formControlName","password",1,"register-input-control",3,"type"],[1,"password-icon"],["id","password-icon",3,"click"],["aria-hidden","true"],["style","color: red",4,"ngIf"],[1,"country-code",3,"countryTooltip","defaultValue","displayLabel","isDisabled","selectedCountry"],[1,"col-md-12","col-12","mb-20"],["formControlName","recaptcha",3,"siteKey","size","hl","theme","type","success"],["captchaElem",""],["id","lblTermCondition","for","termCondition"],["type","checkbox","id","termCondition","name","termCondition1","formControlName","acceptTerms",1,"cursor-pointer",2,"-webkit-appearance","checkbox !important"],[1,"focus-text",3,"click"],["type","submit","name","submit",1,"submit_btn",3,"disabled"],["class","spinner-border spinner-border-sm mr-2","role","status","aria-hidden","true",4,"ngIf"],[1,"alreadyAccount"],[3,"click"],[1,"title-section"],["id","signup-header",1,"col-12","d-inline-flex","justify-content-between"],[1,"modal-title"],["type","button","class","close","aria-label","Close",3,"click",4,"ngIf"],["type","button","aria-label","Close",1,"close",3,"click"],[2,"color","red"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","mr-2"],[1,"d-flex","justify-content-center","align-items-center","class-or"],[3,"success"]],template:function(t,n){1&t&&(e.YNc(0,U,1,7,"app-otp",0),e.YNc(1,q,59,27,"div",1)),2&t&&(e.Q6J("ngIf",n.enable2fa),e.xp6(1),e.Q6J("ngIf",!n.enable2fa))},dependencies:[C.O5,a._Y,a.Fj,a.Wl,a.JJ,a.JL,a.sg,a.u,M.to,R.r,w._,E.j,C.Ov],styles:['[_nghost-%COMP%]     app-google-auth .google-button{border:1px solid #d3d3d3;width:100%;padding:10px 15px;display:flex;gap:10px;justify-content:center;align-items:center;border-radius:5px}[_nghost-%COMP%]     app-google-auth .google-button svg{height:23px}[_nghost-%COMP%]     .class-or{gap:1rem}[_nghost-%COMP%]     .class-or hr{border-color:#dcdcde;margin:1.5rem 0;border-top:1px solid #ececef;width:100%}.position[_ngcontent-%COMP%]{margin:5% 40%}.position[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]{text-align:center;margin-bottom:40px}.position[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:26px;color:#fff;line-height:normal;text-align:center;text-transform:capitalize}.position[_ngcontent-%COMP%]   .top-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:60px;border-style:solid;border-width:2px;border-image-source:linear-gradient(265deg,#0091a7,#ccff90);border-image-slice:1;display:block;margin:14px auto 0}.position[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{background:white;padding:30px 10px}.position[_ngcontent-%COMP%]   .lable-color[_ngcontent-%COMP%]{padding:5px 0;color:#000}.focus-text[_ngcontent-%COMP%]{color:#0099a5}.fs-10x[_ngcontent-%COMP%]{font-size:10px!important}.modal-header-padding[_ngcontent-%COMP%]{padding:.5rem 3.625rem!important}.close[_ngcontent-%COMP%]{color:#000!important;font-size:2rem;cursor:pointer;margin-right:.275rem}.btn-disabled[_ngcontent-%COMP%]{background:#9d9d9d!important;cursor:auto!important}.register-content[_ngcontent-%COMP%]{max-width:450px;margin:4% 0;border-radius:5px;background-color:#fff;box-shadow:0 2px 4px #00000080;color:#000}.register-form[_ngcontent-%COMP%]{padding:2.5rem 2rem}@media only screen and (min-width: 992px){register-form[_ngcontent-%COMP%]{padding:40px 42px}}[_nghost-%COMP%]     .cancel-btn{background:rgb(239,239,239)!important;color:#000}[_nghost-%COMP%]     .form-inputRow{margin-bottom:20px}[_nghost-%COMP%]     .form-inputRow .country-code .country-code-picker{padding:0!important}[_nghost-%COMP%]     .form-inputRow .country-code .form-control{font-family:Circular!important;font-size:14px;font-weight:500;line-height:normal;width:100%;border-radius:3px;outline:none;height:48px;background-color:#f8fafd!important;border:solid 1px #cbd3df!important}.register-input-control[_ngcontent-%COMP%]{font-family:roboto;font-size:14px;font-weight:500;line-height:normal;color:#002c60;width:100%;border-radius:3px;outline:none;background-color:#f8fafd;border:solid 1px #add8e6;padding:16px 10px 15px 20px}.register-input-control.error-msg[_ngcontent-%COMP%]{border-color:#ff0004}.register-input-control[_ngcontent-%COMP%]::placeholder{color:#999}.submit_btn[_ngcontent-%COMP%]{font-family:roboto;font-size:14px;font-weight:500;line-height:45px;height:45px;color:#fff;width:100%;border-radius:3px;border:none;outline:none;cursor:pointer;background-image:linear-gradient(to right,#0099a5,#41b787);box-shadow:0 2px 3px #75757580;transition:all .2s ease-in-out}.submit_btn[_ngcontent-%COMP%]:hover{background-image:linear-gradient(to right,#41b787,#41b787)}.alreadyAccount[_ngcontent-%COMP%]{border-top:1px solid #dbe2ec;padding:22px 0 40px}.alreadyAccount[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#757575;line-height:normal;text-align:center}.alreadyAccount[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;color:#002c60}.alreadyAccount[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#41b787}.otp_textbox[_ngcontent-%COMP%]{width:45px;height:50px;padding:12px 4px 16px;margin:5px;font-size:45px;font-weight:700;text-indent:5px;color:#002c60;border-radius:3px;outline:none;background-color:#f8fafd;border:solid 1px #cbd3df}.form-inputRow[_ngcontent-%COMP%]{margin-bottom:20px}.otp_title[_ngcontent-%COMP%]{margin-bottom:20px;display:block;font-weight:"500"}input[_ngcontent-%COMP%]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:roboto,sans-serif;-webkit-appearance:none}input[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%]{border-color:#ff0004}input[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%]{border-color:#90ee90}input[_ngcontent-%COMP%]   .ng-untouched[_ngcontent-%COMP%]{border-color:#add8e6}#partitioned[_ngcontent-%COMP%]{padding-left:15px;letter-spacing:42px;border:0;background-image:linear-gradient(to left,black 70%,rgba(255,255,255,0) 0%);background-position:bottom;background-size:50px 1px;background-repeat:repeat-x;background-position-x:35px;width:220px;min-width:220px}#lblTermCondition[_ngcontent-%COMP%]{font-size:13px;font-weight:400;color:#4b4f55!important;margin:0 5px;cursor:pointer}#signup-header[_ngcontent-%COMP%]{padding:1rem 2rem!important}#signup-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{color:#000!important;opacity:.78;font-size:30px;width:100%;text-align:center}hr[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}']}),o})()},1179:(v,_,s)=>{s.d(_,{K:()=>m,o:()=>u});let e=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,a=/^(([^<>()[\]\\.,;:\s@I"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;const u=l=>l.value?(l.value&&p(l.value)&&(e=a),l.value&&!e.test(l.value)?{errors:{message:"Please enter valid email"}}:null):{errors:!0},m=l=>{const d=l.replace(/(\r\n|\n|\r| )/gm,"");return p(d)&&(e=a),e.test(d)},p=l=>"string"==typeof l&&l.includes("@brightdata.com")}}]);
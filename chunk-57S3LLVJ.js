import{a as C}from"./chunk-ZUQTUCMF.js";import"./chunk-URYO5XU4.js";import"./chunk-5WTFWRCP.js";import{a as A}from"./chunk-2QTYIY2N.js";import"./chunk-76HYZLEV.js";import"./chunk-X3KQLVKV.js";import{a as D,b as W}from"./chunk-GPAELO4O.js";import"./chunk-RI24VZ65.js";import"./chunk-NMBIHQNJ.js";import"./chunk-YTV2MOZQ.js";import"./chunk-7Q7QEYUX.js";import{b as f}from"./chunk-BIOKOBW3.js";import{B as v,D as S,L as p,s as V,v as h}from"./chunk-7YXRK5ID.js";import"./chunk-IV5FR2YO.js";import{H as E,I as d,P as c,T as l,V as u,ca as b,f as I,ia as R,ka as g,x as w}from"./chunk-G4N3XFUX.js";import"./chunk-I45VEKAA.js";import"./chunk-K7U4LPPR.js";import"./chunk-O73BFGMG.js";import"./chunk-UGZMQAEK.js";import{l as m}from"./chunk-OERSU4S2.js";var j=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(i=(r<3?a(i):r>3?a(e,t,i):a(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},P=class extends C{constructor(){super(...arguments),this.onOtpSubmit=e=>m(this,null,function*(){try{if(this.authConnector){let t=R.state.activeChain,o=b.getConnections(t),r=E.state.remoteFeatures?.multiWallet,i=o.length>0;if(yield this.authConnector.provider.connectOtp({otp:e}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),t)yield b.connectExternal(this.authConnector,t);else throw new Error("Active chain is not set on ChainController");if(E.state.remoteFeatures?.emailCapture)return;if(E.state.siwx){g.close();return}if(i&&r){l.replace("ProfileWallets"),d.showSuccess("New Wallet Added");return}g.close()}}catch(t){throw c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:w.parseError(t)}}),t}}),this.onOtpResend=e=>m(this,null,function*(){this.authConnector&&(yield this.authConnector.provider.connectEmail({email:e}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))})}};P=j([p("w3m-email-verify-otp-view")],P);var N=S`
  wui-icon-box {
    height: ${({spacing:n})=>n[16]};
    width: ${({spacing:n})=>n[16]};
  }
`;var U=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(i=(r<3?a(i):r>3?a(e,t,i):a(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},O=class extends v{constructor(){super(),this.email=l.state.data?.email,this.authConnector=u.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return h`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["6","3","6","3"]}
        gap="4"
      >
        <wui-icon-box size="xl" color="accent-primary" icon="sealCheck"></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="3">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="md-regular" color="primary">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="md-regular" color="primary"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="sm-regular" color="secondary" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="2">
            <wui-text variant="sm-regular" color="primary" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}listenForDeviceApproval(){return m(this,null,function*(){if(this.authConnector)try{yield this.authConnector.provider.connectDevice(),c.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),l.replace("EmailVerifyOtp",{email:this.email})}catch{l.goBack()}})}onResendCode(){return m(this,null,function*(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,yield this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),d.showSuccess("Code email resent")}}catch(e){d.showError(e)}finally{this.loading=!1}})}};O.styles=N;U([f()],O.prototype,"loading",void 0);O=U([p("w3m-email-verify-device-view")],O);var T=V`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var _=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(i=(r<3?a(i):r>3?a(e,t,i):a(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},y=class extends v{constructor(){super(...arguments),this.formRef=D(),this.initialEmail=l.state.data?.email??"",this.redirectView=l.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{e.key==="Enter"&&this.onSubmitEmail(e)})}render(){return h`
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${W(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}onSubmitEmail(e){return m(this,null,function*(){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=u.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Auth connector not found");let o=yield t.provider.updateEmail({email:this.email});c.sendEvent({type:"track",event:"EMAIL_EDIT"}),o.action==="VERIFY_SECONDARY_OTP"?l.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):l.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(t){d.showError(t),this.loading=!1}})}buttonsTemplate(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?h`
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${l.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:h`
        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};y.styles=T;_([f()],y.prototype,"email",void 0);_([f()],y.prototype,"loading",void 0);y=_([p("w3m-update-email-wallet-view")],y);var M=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(i=(r<3?a(i):r>3?a(e,t,i):a(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},$=class extends C{constructor(){super(),this.email=l.state.data?.email,this.onOtpSubmit=e=>m(this,null,function*(){try{this.authConnector&&(yield this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),l.replace("UpdateEmailSecondaryOtp",l.state.data))}catch(t){throw c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:w.parseError(t)}}),t}}),this.onStartOver=()=>{l.replace("UpdateEmailWallet",l.state.data)}}};$=M([p("w3m-update-email-primary-otp-view")],$);var H=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(i=(r<3?a(i):r>3?a(e,t,i):a(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},F=class extends C{constructor(){super(),this.email=l.state.data?.newEmail,this.redirectView=l.state.data?.redirectView,this.onOtpSubmit=e=>m(this,null,function*(){try{this.authConnector&&(yield this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&l.reset(this.redirectView))}catch(t){throw c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:w.parseError(t)}}),t}}),this.onStartOver=()=>{l.replace("UpdateEmailWallet",l.state.data)}}};F=H([p("w3m-update-email-secondary-otp-view")],F);var L=function(n,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,o);else for(var s=n.length-1;s>=0;s--)(a=n[s])&&(i=(r<3?a(i):r>3?a(e,t,i):a(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},x=class extends v{constructor(){super(),this.authConnector=u.getAuthConnector(),this.isEmailEnabled=E.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(u.state.connectors),this.connectors=u.state.connectors,u.subscribeKey("connectors",e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw new Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw new Error("w3m-email-login-view: No auth connector provided");return h`<wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){let t=e.filter(r=>r.type===A.CONNECTOR_TYPE_AUTH).map(r=>r.chain);return I.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(r=>t.includes(r))}};L([f()],x.prototype,"connectors",void 0);x=L([p("w3m-email-login-view")],x);export{x as W3mEmailLoginView,C as W3mEmailOtpWidget,O as W3mEmailVerifyDeviceView,P as W3mEmailVerifyOtpView,$ as W3mUpdateEmailPrimaryOtpView,F as W3mUpdateEmailSecondaryOtpView,y as W3mUpdateEmailWalletView};

import{a as D}from"./chunk-BW4HDSEO.js";import"./chunk-DBIFS4ZY.js";import"./chunk-5WTFWRCP.js";import"./chunk-XXQYS3DE.js";import"./chunk-76HYZLEV.js";import"./chunk-X3KQLVKV.js";import"./chunk-JEWQBEMQ.js";import{a as Z,b as J}from"./chunk-GPAELO4O.js";import"./chunk-RI24VZ65.js";import"./chunk-NMBIHQNJ.js";import"./chunk-YTV2MOZQ.js";import"./chunk-7Q7QEYUX.js";import"./chunk-JHMSJEYS.js";import{a as l,b as p,c as Q}from"./chunk-BIOKOBW3.js";import{B as m,D as b,H as E,I as z,L as u,d as v,s as U,v as c}from"./chunk-7YXRK5ID.js";import"./chunk-IV5FR2YO.js";import{H as L,I as K,P as k,T as G,U as V,V as A,Z as x,ca as q,f as R,ha as X,ia as h,k as Y,ka as M,s as F,v as P,x as N,y as d,z as j}from"./chunk-G4N3XFUX.js";import"./chunk-I45VEKAA.js";import"./chunk-K7U4LPPR.js";import"./chunk-O73BFGMG.js";import"./chunk-UGZMQAEK.js";import{l as w}from"./chunk-OERSU4S2.js";var ee=U`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var oe=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r},B=600,te=360,le=64,W=class extends m{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(M.subscribeKey("open",t=>{t||this.onHideIframe()}),M.subscribeKey("shake",t=>{t?this.iframe.style.animation="w3m-shake 500ms var(--apkt-easings-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(t=>t()),this.bodyObserver?.unobserve(window.document.body)}firstUpdated(){return w(this,null,function*(){yield this.syncTheme(),this.iframe.style.display="block";let t=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver(o=>{let n=o?.[0]?.contentBoxSize?.[0]?.inlineSize;this.iframe.style.height=`${B}px`,t.style.height=`${B}px`,L.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():n&&n<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset",this.onShowIframe()):(this.iframe.style.width=`${te}px`,this.iframe.style.left=`calc(50% - ${te/2}px)`,this.iframe.style.top=`calc(50% - ${B/2}px + ${le/2}px)`,this.iframe.style.bottom="unset",this.onShowIframe())}),this.bodyObserver.observe(window.document.body)})}render(){return c`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){let t=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=t?"w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)"}syncTheme(){return w(this,null,function*(){let t=A.getAuthConnector();if(t){let o=V.getSnapshot().themeMode,i=V.getSnapshot().themeVariables;yield t.provider.syncTheme({themeVariables:i,w3mThemeVariables:F(i,o)})}})}updateFrameSizeForEmbeddedMode(){return w(this,null,function*(){let t=this?.renderRoot?.querySelector("div");yield new Promise(i=>{setTimeout(i,300)});let o=this.getBoundingClientRect();t.style.width="100%",this.iframe.style.left=`${o.left}px`,this.iframe.style.top=`${o.top}px`,this.iframe.style.width=`${o.width}px`,this.iframe.style.height=`${o.height}px`,this.onShowIframe()})}};W.styles=ee;oe([p()],W.prototype,"ready",void 0);W=oe([u("w3m-approve-transaction-view")],W);var re=b`
  a {
    border: none;
    border-radius: ${({borderRadius:e})=>e[20]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  a[data-type='error'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  a[data-type='warning'] {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    a[data-type='success']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderSuccess};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderError};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderWarning};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a:disabled {
    opacity: 0.5;
  }
`;var $=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r},me={sm:"md-regular",md:"lg-regular",lg:"lg-regular"},ue={success:"sealCheck",error:"warning",warning:"exclamationCircle"},f=class extends m{constructor(){super(...arguments),this.type="success",this.size="md",this.imageSrc=void 0,this.disabled=!1,this.href="",this.text=void 0}render(){return c`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${me[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `}imageTemplate(){return this.imageSrc?c`<wui-image src=${this.imageSrc} size="inherit"></wui-image>`:c`<wui-icon
      name=${ue[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`}};f.styles=[E,z,re];$([l()],f.prototype,"type",void 0);$([l()],f.prototype,"size",void 0);$([l()],f.prototype,"imageSrc",void 0);$([l({type:Boolean})],f.prototype,"disabled",void 0);$([l()],f.prototype,"href",void 0);$([l()],f.prototype,"text",void 0);f=$([u("wui-semantic-chip")],f);var pe=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r},ie=class extends m{render(){return c`
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${P.SECURE_SITE_DASHBOARD}
          href=${P.SECURE_SITE_DASHBOARD}
          imageSrc=${P.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};ie=pe([u("w3m-upgrade-wallet-view")],ie);var O=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r},T=class extends m{constructor(){super(...arguments),this.loading=!1,this.switched=!1,this.text="",this.network=h.state.activeCaipNetwork}render(){return c`
      <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
        ${this.togglePreferredAccountTypeTemplate()} ${this.toggleSmartAccountVersionTemplate()}
      </wui-flex>
    `}toggleSmartAccountVersionTemplate(){return c`
      <w3m-tooltip-trigger text="Changing the smart account version will reload the page">
        <wui-list-item
          icon=${this.isV6()?"arrowTop":"arrowBottom"}
          ?rounded=${!0}
          ?chevron=${!0}
          data-testid="account-toggle-smart-account-version"
          @click=${this.toggleSmartAccountVersion.bind(this)}
        >
          <wui-text variant="lg-regular" color="primary"
            >Force Smart Account Version ${this.isV6()?"7":"6"}</wui-text
          >
        </wui-list-item>
      </w3m-tooltip-trigger>
    `}isV6(){return(j.get("dapp_smart_account_version")||"v6")==="v6"}toggleSmartAccountVersion(){j.set("dapp_smart_account_version",this.isV6()?"v7":"v6"),typeof window<"u"&&window?.location?.reload()}togglePreferredAccountTypeTemplate(){let t=this.network?.chainNamespace,o=h.checkIfSmartAccountEnabled(),i=A.getConnectorId(t);return!A.getAuthConnector()||i!==R.CONNECTOR_ID.AUTH||!o?null:(this.switched||(this.text=x(t)===d.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),c`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `)}changePreferredAccountType(){return w(this,null,function*(){let t=this.network?.chainNamespace,o=h.checkIfSmartAccountEnabled(),i=x(t)===d.ACCOUNT_TYPES.SMART_ACCOUNT||!o?d.ACCOUNT_TYPES.EOA:d.ACCOUNT_TYPES.SMART_ACCOUNT;A.getAuthConnector()&&(this.loading=!0,yield q.setPreferredAccountType(i,t),this.text=i===d.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,X.resetSend(),this.loading=!1,this.requestUpdate())})}};O([p()],T.prototype,"loading",void 0);O([p()],T.prototype,"switched",void 0);O([p()],T.prototype,"text",void 0);O([p()],T.prototype,"network",void 0);T=O([u("w3m-smart-account-settings-view")],T);var ne=b`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
      border-radius: ${({borderRadius:e})=>e[6]};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`;var I=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r},S=class extends m{constructor(){super(...arguments),this.name="",this.registered=!1,this.loading=!1,this.disabled=!1}render(){return c`
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `}templateRightContent(){return this.loading?c`<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`:this.registered?c`<wui-tag variant="info" size="sm">Registered</wui-tag>`:c`<wui-tag variant="success" size="sm">Available</wui-tag>`}};S.styles=[E,z,ne];I([l()],S.prototype,"name",void 0);I([l({type:Boolean})],S.prototype,"registered",void 0);I([l({type:Boolean})],S.prototype,"loading",void 0);I([l({type:Boolean})],S.prototype,"disabled",void 0);S=I([u("wui-account-name-suggestion-item")],S);var se=b`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${({spacing:e})=>e[4]};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var _=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r},y=class extends m{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return c`
      <wui-input-text
        value=${Q(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `}};y.styles=[E,se];_([l()],y.prototype,"errorMessage",void 0);_([l({type:Boolean})],y.prototype,"disabled",void 0);_([l()],y.prototype,"value",void 0);_([l({type:Boolean})],y.prototype,"loading",void 0);_([l({attribute:!1})],y.prototype,"onKeyDown",void 0);y=_([u("wui-ens-input")],y);var ae=b`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[6]};
    padding: ${({spacing:e})=>e[4]};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var C=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r},g=class extends m{constructor(){super(),this.formRef=Z(),this.usubscribe=[],this.name="",this.error="",this.loading=v.state.loading,this.suggestions=v.state.suggestions,this.profileName=h.getAccountData()?.profileName,this.onDebouncedNameInputChange=N.debounce(t=>{t.length<4?this.error="Name must be at least 4 characters long":D.isValidReownName(t)?(this.error="",v.getSuggestions(t)):this.error="The value is not a valid username"}),this.usubscribe.push(v.subscribe(t=>{this.suggestions=t.suggestions,this.loading=t.loading}),h.subscribeChainProp("accountState",t=>{this.profileName=t?.profileName,t?.profileName&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(t=>t()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["1","3","4","3"]}
      >
        <form ${J(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){let t=this.suggestions.find(i=>i.name?.split(".")?.[0]===this.name&&i.registered);if(this.loading)return c`<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;let o=`${this.name}${R.WC_NAME_SUFFIX}`;return c`
      <wui-icon-link
        ?disabled=${!!t}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${t?"default":"accent-primary"}
        @click=${()=>this.onSubmitName(o)}
      >
      </wui-icon-link>
    `}onNameInputChange(t){let o=D.validateReownName(t.detail||"");this.name=o,this.onDebouncedNameInputChange(o)}onKeyDown(t){t.key.length===1&&!D.isValidReownName(t.key)&&t.preventDefault()}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:c`<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map(t=>c`<wui-account-name-suggestion-item
            name=${t.name}
            ?registered=${t.registered}
            ?loading=${this.loading}
            ?disabled=${t.registered||this.loading}
            data-testid="account-name-suggestion"
            @click=${()=>this.onSubmitName(t.name)}
          ></wui-account-name-suggestion-item>`)}
    </wui-flex>`}isAllowedToSubmit(t){let o=t.split(".")?.[0],i=this.suggestions.find(n=>n.name?.split(".")?.[0]===o&&n.registered);return!this.loading&&!this.error&&!this.profileName&&o&&v.validateName(o)&&!i}onSubmitName(t){return w(this,null,function*(){try{if(!this.isAllowedToSubmit(t))return;k.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:x(h.state.activeChain)===d.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}}),yield v.registerName(t),k.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:x(h.state.activeChain)===d.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}})}catch(o){K.showError(o.message),k.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:x(h.state.activeChain)===d.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t,error:N.parseError(o)}})}})}onEnterKey(t){if(t.key==="Enter"&&this.name&&this.isAllowedToSubmit(this.name)){let o=`${this.name}${R.WC_NAME_SUFFIX}`;this.onSubmitName(o)}}};g.styles=ae;C([l()],g.prototype,"errorMessage",void 0);C([p()],g.prototype,"name",void 0);C([p()],g.prototype,"error",void 0);C([p()],g.prototype,"loading",void 0);C([p()],g.prototype,"suggestions",void 0);C([p()],g.prototype,"profileName",void 0);g=C([u("w3m-register-account-name-view")],g);var ce=U`
  .continue-button-container {
    width: 100%;
  }
`;var de=function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r},H=class extends m{render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{N.openHref(Y.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return c` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return c`<wui-flex
      .padding=${["0","4","0","4"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){G.replace("Account")}};H.styles=ce;H=de([u("w3m-register-account-name-success-view")],H);export{W as W3mApproveTransactionView,H as W3mRegisterAccountNameSuccess,g as W3mRegisterAccountNameView,T as W3mSmartAccountSettingsView,ie as W3mUpgradeWalletView};

import"./chunk-SLTPINPC.js";import"./chunk-GECKKE5G.js";import"./chunk-Y22OQAYN.js";import"./chunk-ZM5O5AWK.js";import"./chunk-X3KQLVKV.js";import"./chunk-3KG42EGU.js";import"./chunk-JEWQBEMQ.js";import"./chunk-GPAELO4O.js";import"./chunk-RI24VZ65.js";import"./chunk-NMBIHQNJ.js";import"./chunk-YTV2MOZQ.js";import"./chunk-7Q7QEYUX.js";import"./chunk-JHMSJEYS.js";import{a as d,b as s}from"./chunk-BIOKOBW3.js";import{B as g,D as k,H as N,I as Q,L as b,j as n,r as L,v as c}from"./chunk-7YXRK5ID.js";import"./chunk-IV5FR2YO.js";import{P as _,T as x,Z as F,h as p,i as B,ia as v,ka as M,v as V,x as W,y as z}from"./chunk-G4N3XFUX.js";import"./chunk-I45VEKAA.js";import"./chunk-K7U4LPPR.js";import"./chunk-O73BFGMG.js";import"./chunk-UGZMQAEK.js";import{l as C}from"./chunk-OERSU4S2.js";var q=k`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    cursor: pointer;
  }

  .details-content-container {
    padding: ${({spacing:e})=>e[2]};
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e[3]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[2]};
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} + ${({borderRadius:e})=>e[1]}
    );
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: ${({spacing:e})=>e[2]};
  }
`;var S=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(r=(a<3?l(r):a>3?l(t,o,r):l(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r},oe=V.CONVERT_SLIPPAGE_TOLERANCE,T=class extends g{constructor(){super(),this.unsubscribe=[],this.networkName=v.state.activeCaipNetwork?.name,this.detailsOpen=!1,this.sourceToken=n.state.sourceToken,this.toToken=n.state.toToken,this.toTokenAmount=n.state.toTokenAmount,this.sourceTokenPriceInUSD=n.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=n.state.toTokenPriceInUSD,this.priceImpact=n.state.priceImpact,this.maxSlippage=n.state.maxSlippage,this.networkTokenSymbol=n.state.networkTokenSymbol,this.inputError=n.state.inputError,this.unsubscribe.push(n.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.priceImpact=t.priceImpact,this.maxSlippage=t.maxSlippage,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError}))}render(){let t=this.toTokenAmount&&this.maxSlippage?p.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;let o=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return c`
      <wui-flex flexDirection="column" alignItems="center" gap="01" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","2","0","2"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="2">
                <wui-text variant="sm-regular" color="primary">
                  1 ${this.sourceToken.symbol} =
                  ${p.formatNumberToLocalString(o,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="sm-regular" color="secondary">
                  $${p.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?c`
                <wui-flex flexDirection="column" gap="2" class="details-content-container">
                  ${this.priceImpact?c` <wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${p.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?c`<wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${t?`Transaction will be reversed if you receive less than ${p.formatNumberToLocalString(t,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${p.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${oe}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="2">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="2">
                        <wui-text class="details-row-title" variant="sm-regular" color="secondary">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="sm-regular" color="secondary">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};T.styles=[q];S([s()],T.prototype,"networkName",void 0);S([d()],T.prototype,"detailsOpen",void 0);S([s()],T.prototype,"sourceToken",void 0);S([s()],T.prototype,"toToken",void 0);S([s()],T.prototype,"toTokenAmount",void 0);S([s()],T.prototype,"sourceTokenPriceInUSD",void 0);S([s()],T.prototype,"toTokenPriceInUSD",void 0);S([s()],T.prototype,"priceImpact",void 0);S([s()],T.prototype,"maxSlippage",void 0);S([s()],T.prototype,"networkTokenSymbol",void 0);S([s()],T.prototype,"inputError",void 0);T=S([b("w3m-swap-details")],T);var K=k`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[5]};
    padding-right: ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill ${({durations:e})=>e.md}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: ${({tokens:e})=>e.core.glass010};
  }

  :host wui-flex .input_mask__background {
    fill: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var H=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(r=(a<3?l(r):a>3?l(t,o,r):l(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r},R=class extends g{constructor(){super(...arguments),this.target="sourceToken"}render(){return c`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="1"
        >
          <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return c`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
      </wui-flex>
    `}};R.styles=[K];H([d()],R.prototype,"target",void 0);R=H([b("w3m-swap-input-skeleton")],R);var G=k`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[5]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[5]};
    padding-right: ${({spacing:e})=>e[3]};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    position: relative;
    transition: box-shadow ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.lg};
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.core.glass010};
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.core.glass010};
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var I=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(r=(a<3?l(r):a>3?l(t,o,r):l(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r},ie=5e-5,y=class extends g{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null,this.autoFocus=!1}firstUpdated(){this.autoFocus&&requestAnimationFrame(()=>{this.shadowRoot?.querySelector("input")?.focus()})}render(){let t=this.marketValue||"0",o=p.bigNumber(t).gt("0");return c`
      <wui-flex
        class="${this.focused?"focus":""}"
        justifyContent="space-between"
        alignItems="center"
      >
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            value=${this.value||""}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
            pattern="[0-9,.]*"
          />
          <wui-text class="market-value" variant="sm-regular" color="secondary">
            ${o?`$${p.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(t){return B.numericInputKeyDown(t,this.value,o=>this.onSetAmount?.(this.target,o))}dispatchInputChangeEvent(t){if(!this.onSetAmount)return;let o=t.target.value.replace(/[^0-9.]/gu,"");o===","||o==="."?this.onSetAmount(this.target,"0."):o.endsWith(",")?this.onSetAmount(this.target,o.replace(",",".")):this.onSetAmount(this.target,o)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?c`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="1"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:c` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="neutral-secondary"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){let t=p.multiply(this.balance,this.price),o=t?t?.gt(ie):!1;return c`
      ${o?c`<wui-text variant="sm-regular" color="secondary">
            ${p.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(o):null}
    `}tokenActionButtonTemplate(t){return t?c` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-primary" variant="sm-medium">Max</wui-text>
      </button>`:c` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-primary" variant="sm-medium">Buy</wui-text>
    </button>`}onFocusChange(t){this.focused=t}onSelectToken(){_.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),x.push("SwapSelectToken",{target:this.target})}onBuyToken(){x.push("OnRampProviders")}};y.styles=[G];I([d()],y.prototype,"focused",void 0);I([d()],y.prototype,"balance",void 0);I([d()],y.prototype,"value",void 0);I([d()],y.prototype,"price",void 0);I([d()],y.prototype,"marketValue",void 0);I([d()],y.prototype,"disabled",void 0);I([d()],y.prototype,"target",void 0);I([d()],y.prototype,"token",void 0);I([d()],y.prototype,"onSetAmount",void 0);I([d()],y.prototype,"onSetMaxValue",void 0);I([d({type:Boolean})],y.prototype,"autoFocus",void 0);y=I([b("w3m-swap-input")],y);var Y=k`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .action-button:disabled {
    border-color: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  .swap-inputs-container {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[10]} !important;
    border: 4px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: ${({spacing:e})=>e[2]};
  }

  .details-container > wui-flex {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    transition: background ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({spacing:e})=>e[2]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[5]};
    border-radius: ${({borderRadius:e})=>e[3]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var f=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(r=(a<3?l(r):a>3?l(t,o,r):l(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r},m=class extends g{subscribe({resetSwapState:t,initializeSwapState:o}){return()=>{v.subscribeKey("activeCaipNetwork",i=>this.onCaipNetworkChange({newCaipNetwork:i,resetSwapState:t,initializeSwapState:o})),v.subscribeChainProp("accountState",i=>{this.onCaipAddressChange({newCaipAddress:i?.caipAddress,resetSwapState:t,initializeSwapState:o})})}}constructor(){super(),this.unsubscribe=[],this.initialParams=x.state.data?.swap,this.detailsOpen=!1,this.caipAddress=v.getAccountData()?.caipAddress,this.caipNetworkId=v.state.activeCaipNetwork?.caipNetworkId,this.initialized=n.state.initialized,this.loadingQuote=n.state.loadingQuote,this.loadingPrices=n.state.loadingPrices,this.loadingTransaction=n.state.loadingTransaction,this.sourceToken=n.state.sourceToken,this.sourceTokenAmount=n.state.sourceTokenAmount,this.sourceTokenPriceInUSD=n.state.sourceTokenPriceInUSD,this.toToken=n.state.toToken,this.toTokenAmount=n.state.toTokenAmount,this.toTokenPriceInUSD=n.state.toTokenPriceInUSD,this.inputError=n.state.inputError,this.fetchError=n.state.fetchError,this.lastTokenPriceUpdate=0,this.minTokenPriceUpdateInterval=1e4,this.visibilityChangeHandler=()=>{document?.hidden?(clearInterval(this.interval),this.interval=void 0):this.startTokenPriceInterval()},this.startTokenPriceInterval=()=>{this.interval&&Date.now()-this.lastTokenPriceUpdate<this.minTokenPriceUpdateInterval||(this.lastTokenPriceUpdate&&Date.now()-this.lastTokenPriceUpdate>this.minTokenPriceUpdateInterval&&this.fetchTokensAndValues(),clearInterval(this.interval),this.interval=setInterval(()=>{this.fetchTokensAndValues()},this.minTokenPriceUpdateInterval))},this.watchTokensAndValues=()=>{!this.sourceToken||!this.toToken||(this.subscribeToVisibilityChange(),this.startTokenPriceInterval())},this.onDebouncedGetSwapCalldata=W.debounce(()=>C(this,null,function*(){yield n.swapTokens()}),200),this.subscribe({resetSwapState:!0,initializeSwapState:!1})(),this.unsubscribe.push(this.subscribe({resetSwapState:!1,initializeSwapState:!0}),M.subscribeKey("open",t=>{t||n.resetState()}),x.subscribeKey("view",t=>{t.includes("Swap")||n.resetValues()}),n.subscribe(t=>{this.initialized=t.initialized,this.loadingQuote=t.loadingQuote,this.loadingPrices=t.loadingPrices,this.loadingTransaction=t.loadingTransaction,this.sourceToken=t.sourceToken,this.sourceTokenAmount=t.sourceTokenAmount,this.sourceTokenPriceInUSD=t.sourceTokenPriceInUSD,this.toToken=t.toToken,this.toTokenAmount=t.toTokenAmount,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.inputError=t.inputError,this.fetchError=t.fetchError,t.sourceToken&&t.toToken&&this.watchTokensAndValues()}))}firstUpdated(){return C(this,null,function*(){n.initializeState(),this.watchTokensAndValues(),yield this.handleSwapParameters()})}disconnectedCallback(){this.unsubscribe.forEach(t=>t?.()),clearInterval(this.interval),document?.removeEventListener("visibilitychange",this.visibilityChangeHandler)}render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}subscribeToVisibilityChange(){document?.removeEventListener("visibilitychange",this.visibilityChangeHandler),document?.addEventListener("visibilitychange",this.visibilityChangeHandler)}fetchTokensAndValues(){n.getNetworkTokenPrice(),n.getMyTokensWithBalance(),n.swapTokens(),this.lastTokenPriceUpdate=Date.now()}templateSwap(){return c`
      <wui-flex flexDirection="column" gap="3">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){let t=!this.sourceTokenAmount||this.sourceTokenAmount==="0";return this.fetchError?"Swap":!this.sourceToken||!this.toToken?"Select token":t?"Enter amount":this.inputError?this.inputError:"Review swap"}templateReplaceTokensButton(){return c`
      <wui-flex class="replace-tokens-button-container">
        <wui-icon-box
          @click=${this.onSwitchTokens.bind(this)}
          icon="recycleHorizontal"
          size="md"
          variant="default"
        ></wui-icon-box>
      </wui-flex>
    `}templateLoading(){return c`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(t,o){let i=n.state.myTokensWithBalance?.find(u=>u?.address===o?.address),a=t==="toToken"?this.toTokenAmount:this.sourceTokenAmount,r=t==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,l=p.parseLocalStringToNumber(a)*r;return c`<w3m-swap-input
      .value=${t==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${t==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${t}
      .token=${o}
      .balance=${i?.quantity?.numeric}
      .price=${i?.price}
      .marketValue=${l}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
      ?autoFocus=${t==="sourceToken"}
    ></w3m-swap-input>`}onSetMaxValue(t,o){let i=p.bigNumber(o||"0");if(!i.gt(0)){this.handleChangeAmount(t,"0");return}let a=t==="sourceToken"?this.sourceToken:this.toToken,r=a?.decimals??18,{networkAddress:l}=n.getParams(),u=n.state.gasFee;if(t==="sourceToken"&&a?.address===l&&u&&u!=="0"){let U=150000n*BigInt(u),te=p.bigNumber(U.toString()).div(p.bigNumber(10).pow(r)),O=i.minus(te);this.handleChangeAmount(t,O.gt(0)?O.toFixed(r,0):"0")}else this.handleChangeAmount(t,i.toFixed(r,0))}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:c`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}handleChangeAmount(t,o){n.clearError(),t==="sourceToken"?n.setSourceTokenAmount(o):n.setToTokenAmount(o),this.onDebouncedGetSwapCalldata()}templateActionButton(){let t=!this.toToken||!this.sourceToken,o=!this.sourceTokenAmount||this.sourceTokenAmount==="0",i=this.loadingQuote||this.loadingPrices||this.loadingTransaction,a=i||t||o||this.inputError;return c` <wui-flex gap="2">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant="accent-primary"
        ?loading=${!!i}
        ?disabled=${!!a}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){return C(this,null,function*(){yield n.switchTokens()})}onSwapPreview(){return C(this,null,function*(){this.fetchError&&(yield n.swapTokens()),_.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:F(v.state.activeChain)===z.ACCOUNT_TYPES.SMART_ACCOUNT}}),x.push("SwapPreview")})}handleSwapParameters(){return C(this,null,function*(){this.initialParams&&(n.state.initialized||(yield new Promise(o=>{let i=n.subscribeKey("initialized",a=>{a&&(i?.(),o())})})),yield this.setSwapParameters(this.initialParams))})}setSwapParameters(a){return C(this,arguments,function*({amount:t,fromToken:o,toToken:i}){(!n.state.tokens||!n.state.myTokensWithBalance)&&(yield new Promise(u=>{let E=n.subscribeKey("myTokensWithBalance",U=>{U&&U.length>0&&(E?.(),u())});setTimeout(()=>{E?.(),u()},5e3)}));let r=[...n.state.tokens||[],...n.state.myTokensWithBalance||[]];if(o){let l=r.find(u=>u.symbol.toLowerCase()===o.toLowerCase());l&&n.setSourceToken(l)}if(i){let l=r.find(u=>u.symbol.toLowerCase()===i.toLowerCase());l&&n.setToToken(l)}t&&!isNaN(Number(t))&&n.setSourceTokenAmount(t)})}onCaipAddressChange({newCaipAddress:t,resetSwapState:o,initializeSwapState:i}){this.caipAddress!==t&&(this.caipAddress=t,o&&n.resetState(),i&&n.initializeState())}onCaipNetworkChange({newCaipNetwork:t,resetSwapState:o,initializeSwapState:i}){this.caipNetworkId!==t?.caipNetworkId&&(this.caipNetworkId=t?.caipNetworkId,o&&n.resetState(),i&&n.initializeState())}};m.styles=Y;f([d({type:Object})],m.prototype,"initialParams",void 0);f([s()],m.prototype,"interval",void 0);f([s()],m.prototype,"detailsOpen",void 0);f([s()],m.prototype,"caipAddress",void 0);f([s()],m.prototype,"caipNetworkId",void 0);f([s()],m.prototype,"initialized",void 0);f([s()],m.prototype,"loadingQuote",void 0);f([s()],m.prototype,"loadingPrices",void 0);f([s()],m.prototype,"loadingTransaction",void 0);f([s()],m.prototype,"sourceToken",void 0);f([s()],m.prototype,"sourceTokenAmount",void 0);f([s()],m.prototype,"sourceTokenPriceInUSD",void 0);f([s()],m.prototype,"toToken",void 0);f([s()],m.prototype,"toTokenAmount",void 0);f([s()],m.prototype,"toTokenPriceInUSD",void 0);f([s()],m.prototype,"inputError",void 0);f([s()],m.prototype,"fetchError",void 0);f([s()],m.prototype,"lastTokenPriceUpdate",void 0);m=f([b("w3m-swap-view")],m);var Z=k`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]};
    height: 40px;
    border: none;
    border-radius: 80px;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    cursor: pointer;
    transition: background ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background;
  }

  .token-item:hover {
    background: ${({tokens:e})=>e.core.glass010};
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[5]};
    border-radius: ${({borderRadius:e})=>e[3]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .action-buttons-container {
    width: 100%;
    gap: ${({spacing:e})=>e[2]};
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: ${({borderRadius:e})=>e[4]};
    border: none;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    transition: background ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({spacing:e})=>e[2]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[5]};
    border-radius: ${({borderRadius:e})=>e[3]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var w=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(r=(a<3?l(r):a>3?l(t,o,r):l(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r},h=class extends g{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=n.state.approvalTransaction,this.swapTransaction=n.state.swapTransaction,this.sourceToken=n.state.sourceToken,this.sourceTokenAmount=n.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=n.state.sourceTokenPriceInUSD,this.balanceSymbol=v.getAccountData()?.balanceSymbol,this.toToken=n.state.toToken,this.toTokenAmount=n.state.toTokenAmount??"",this.toTokenPriceInUSD=n.state.toTokenPriceInUSD,this.caipNetwork=v.state.activeCaipNetwork,this.inputError=n.state.inputError,this.loadingQuote=n.state.loadingQuote,this.loadingApprovalTransaction=n.state.loadingApprovalTransaction,this.loadingBuildTransaction=n.state.loadingBuildTransaction,this.loadingTransaction=n.state.loadingTransaction,this.unsubscribe.push(v.subscribeChainProp("accountState",t=>{t?.balanceSymbol!==this.balanceSymbol&&x.goBack()}),v.subscribeKey("activeCaipNetwork",t=>{this.caipNetwork!==t&&(this.caipNetwork=t)}),n.subscribe(t=>{this.approvalTransaction=t.approvalTransaction,this.swapTransaction=t.swapTransaction,this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.sourceTokenAmount=t.sourceTokenAmount??"",this.toTokenAmount=t.toTokenAmount??"",this.inputError=t.inputError,t.inputError&&x.goBack(),this.loadingQuote=t.loadingQuote,this.loadingApprovalTransaction=t.loadingApprovalTransaction,this.loadingBuildTransaction=t.loadingBuildTransaction,this.loadingTransaction=t.loadingTransaction}))}firstUpdated(){n.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(t=>t?.()),clearInterval(this.interval)}render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{n.getApprovalLoadingState()||n.getTransaction()},1e4)}templateSwap(){let t=`${p.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,o=`${p.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,i=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,a=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD,r=p.formatNumberToLocalString(i),l=p.formatNumberToLocalString(a),u=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return c`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="4">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Send</wui-text>
              <wui-text variant="md-regular" color="primary">$${r}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="default" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Receive</wui-text>
              <wui-text variant="md-regular" color="primary">$${l}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${o}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="2">
          <wui-icon size="sm" color="default" name="info"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral-secondary"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="secondary">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="accent-primary"
            ?loading=${u}
            ?disabled=${u}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="invert"> ${this.actionButtonLabel()} </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:c`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){x.goBack()}onSendTransaction(){this.approvalTransaction?n.sendTransactionForApproval(this.approvalTransaction):n.sendTransactionForSwap(this.swapTransaction)}};h.styles=Z;w([s()],h.prototype,"interval",void 0);w([s()],h.prototype,"detailsOpen",void 0);w([s()],h.prototype,"approvalTransaction",void 0);w([s()],h.prototype,"swapTransaction",void 0);w([s()],h.prototype,"sourceToken",void 0);w([s()],h.prototype,"sourceTokenAmount",void 0);w([s()],h.prototype,"sourceTokenPriceInUSD",void 0);w([s()],h.prototype,"balanceSymbol",void 0);w([s()],h.prototype,"toToken",void 0);w([s()],h.prototype,"toTokenAmount",void 0);w([s()],h.prototype,"toTokenPriceInUSD",void 0);w([s()],h.prototype,"caipNetwork",void 0);w([s()],h.prototype,"inputError",void 0);w([s()],h.prototype,"loadingQuote",void 0);w([s()],h.prototype,"loadingApprovalTransaction",void 0);w([s()],h.prototype,"loadingBuildTransaction",void 0);w([s()],h.prototype,"loadingTransaction",void 0);h=w([b("w3m-swap-preview-view")],h);var J=k`
  :host {
    width: 100%;
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: ${({spacing:e})=>e[3]};
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.foregroundSecondary};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    :host > wui-flex:active {
      background-color: ${({tokens:e})=>e.core.glass010};
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    border-radius: ${({borderRadius:e})=>e[8]};
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var D=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(r=(a<3?l(r):a>3?l(t,o,r):l(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r},A=class extends g{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;let t=this.amount&&this.price?p.multiply(this.price,this.amount)?.toFixed(3):null;return c`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="1">
          <wui-flex justifyContent="space-between">
            <wui-text variant="md-medium" color="primary" lineClamp="1">${this.name}</wui-text>
            ${t?c`
                  <wui-text variant="md-medium" color="primary">
                    $${p.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="sm-regular" color="secondary" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?c`<wui-text variant="sm-regular" color="secondary">
                  ${p.formatNumberToLocalString(this.amount,5)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?c`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?c`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};A.styles=[N,Q,J];D([d()],A.prototype,"imageSrc",void 0);D([d()],A.prototype,"name",void 0);D([d()],A.prototype,"symbol",void 0);D([d()],A.prototype,"price",void 0);D([d()],A.prototype,"amount",void 0);D([s()],A.prototype,"visible",void 0);D([s()],A.prototype,"imageError",void 0);A=D([b("wui-token-list-item")],A);var X=k`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    column-gap: ${({spacing:e})=>e[3]};
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[4]};
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var ne=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(r=(a<3?l(r):a>3?l(t,o,r):l(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r},j=class extends g{render(){return c`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="1" alignItems="flex-end">
          <wui-shimmer width="24px" height="12px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="32px" height="12px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};j.styles=[N,X];j=ne([b("wui-token-list-item-loader")],j);var ee=k`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid ${({tokens:e})=>e.core.glass010};
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: ${({spacing:e})=>e[2]};
    align-items: center;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  .select-network-button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }
`;var P=function(e,t,o,i){var a=arguments.length,r=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(r=(a<3?l(r):a>3?l(t,o,r):l(t,o))||r);return a>3&&r&&Object.defineProperty(t,o,r),r},$=class extends g{constructor(){super(),this.unsubscribe=[],this.targetToken=x.state.data?.target,this.sourceToken=n.state.sourceToken,this.sourceTokenAmount=n.state.sourceTokenAmount,this.toToken=n.state.toToken,this.myTokensWithBalance=n.state.myTokensWithBalance,this.popularTokens=n.state.popularTokens,this.suggestedTokens=n.state.suggestedTokens,this.tokensLoading=n.state.tokensLoading,this.searchValue="",this.unsubscribe.push(n.subscribe(t=>{this.sourceToken=t.sourceToken,this.toToken=t.toToken,this.myTokensWithBalance=t.myTokensWithBalance,this.popularTokens=t.popularTokens,this.suggestedTokens=t.suggestedTokens,this.tokensLoading=t.tokensLoading}))}firstUpdated(){return C(this,null,function*(){yield n.getTokenList()})}updated(){this.renderRoot?.querySelector(".suggested-tokens-container")?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),this.renderRoot?.querySelector(".tokens")?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();let t=this.renderRoot?.querySelector(".suggested-tokens-container"),o=this.renderRoot?.querySelector(".tokens");t?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),o?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return c`
      <wui-flex flexDirection="column" gap="3">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(t){this.targetToken==="sourceToken"?n.setSourceToken(t):(n.setToToken(t),this.sourceToken&&this.sourceTokenAmount&&n.swapTokens()),x.goBack()}templateSearchInput(){return c`
      <wui-flex .padding=${["1","3","0","3"]} gap="2">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateMyTokens(){let t=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],o=this.filterTokensWithText(t,this.searchValue);return o?.length>0?c`<wui-flex justifyContent="flex-start" padding="2">
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        ${o.map(i=>{let a=i.symbol===this.sourceToken?.symbol||i.symbol===this.toToken?.symbol;return c`
            <wui-token-list-item
              data-testid="swap-select-token-item-${i.symbol}"
              name=${i.name}
              ?disabled=${a}
              symbol=${i.symbol}
              price=${i?.price}
              amount=${i?.quantity?.numeric}
              imageSrc=${i.logoUri}
              @click=${()=>{a||this.onSelectToken(i)}}
            >
            </wui-token-list-item>
          `})}`:null}templateAllTokens(){let t=this.popularTokens?this.popularTokens:[],o=this.filterTokensWithText(t,this.searchValue);return this.tokensLoading?c`
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
      `:o?.length>0?c`
        ${o.map(i=>c`
            <wui-token-list-item
              data-testid="swap-select-token-item-${i.symbol}"
              name=${i.name}
              symbol=${i.symbol}
              imageSrc=${i.logoUri}
              @click=${()=>this.onSelectToken(i)}
            >
            </wui-token-list-item>
          `)}
      `:null}templateTokens(){return c`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","2","2","2"]} flexDirection="column">
          ${this.templateMyTokens()}
          <wui-flex justifyContent="flex-start" padding="3">
            <wui-text variant="md-medium" color="secondary">Tokens</wui-text>
          </wui-flex>
          ${this.templateAllTokens()}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){let t=this.suggestedTokens?this.suggestedTokens.slice(0,8):null;return this.tokensLoading?c`
        <wui-flex
          class="suggested-tokens-container"
          .padding=${["0","3","0","3"]}
          gap="2"
        >
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
        </wui-flex>
      `:t?c`
      <wui-flex
        class="suggested-tokens-container"
        .padding=${["0","3","0","3"]}
        gap="2"
      >
        ${t.map(o=>c`
            <wui-token-button
              text=${o.symbol}
              imageSrc=${o.logoUri}
              @click=${()=>this.onSelectToken(o)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(t){this.searchValue=t.detail}handleSuggestedTokensScroll(){let t=this.renderRoot?.querySelector(".suggested-tokens-container");t&&(t.style.setProperty("--suggested-tokens-scroll--left-opacity",L.interpolate([0,100],[0,1],t.scrollLeft).toString()),t.style.setProperty("--suggested-tokens-scroll--right-opacity",L.interpolate([0,100],[0,1],t.scrollWidth-t.scrollLeft-t.offsetWidth).toString()))}handleTokenListScroll(){let t=this.renderRoot?.querySelector(".tokens");t&&(t.style.setProperty("--tokens-scroll--top-opacity",L.interpolate([0,100],[0,1],t.scrollTop).toString()),t.style.setProperty("--tokens-scroll--bottom-opacity",L.interpolate([0,100],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString()))}filterTokensWithText(t,o){return t.filter(i=>`${i.symbol} ${i.name} ${i.address}`.toLowerCase().includes(o.toLowerCase())).sort((i,a)=>{let r=`${i.symbol} ${i.name} ${i.address}`.toLowerCase(),l=`${a.symbol} ${a.name} ${a.address}`.toLowerCase(),u=r.indexOf(o.toLowerCase()),E=l.indexOf(o.toLowerCase());return u-E})}};$.styles=ee;P([s()],$.prototype,"interval",void 0);P([s()],$.prototype,"targetToken",void 0);P([s()],$.prototype,"sourceToken",void 0);P([s()],$.prototype,"sourceTokenAmount",void 0);P([s()],$.prototype,"toToken",void 0);P([s()],$.prototype,"myTokensWithBalance",void 0);P([s()],$.prototype,"popularTokens",void 0);P([s()],$.prototype,"suggestedTokens",void 0);P([s()],$.prototype,"tokensLoading",void 0);P([s()],$.prototype,"searchValue",void 0);$=P([b("w3m-swap-select-token-view")],$);export{h as W3mSwapPreviewView,$ as W3mSwapSelectTokenView,m as W3mSwapView};

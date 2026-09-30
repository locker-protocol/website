import{c as S}from"./chunk-2QTYIY2N.js";import{a as A,b as h,c as g,h as ne}from"./chunk-BIOKOBW3.js";import{B as b,C as $e,D as N,H as te,I as Oe,J as De,L as E,r as de,s as Re,v as u}from"./chunk-7YXRK5ID.js";import{G as ve,H as ee,I as U,N as T,P as H,T as Q,V as k,Y as pe,a as Se,b as Te,ca as _,d as Ce,da as _e,f as v,fa as Ue,h as x,ia as f,j as ke,ka as B,m as w,x as C}from"./chunk-G4N3XFUX.js";import{a as F,b as z,l as d}from"./chunk-OERSU4S2.js";var Le=N`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:t})=>t[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:t})=>t.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:t})=>t.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:t})=>t.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:t})=>t.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:t})=>t.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:t})=>t[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:t})=>t[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:t})=>t.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:t})=>t.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:t})=>t.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:t})=>t.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var M=function(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},$=class extends b{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return u`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${g(this.iconSize)}></wui-icon>
    </button>`}};$.styles=[te,Oe,Le];M([A()],$.prototype,"icon",void 0);M([A()],$.prototype,"variant",void 0);M([A()],$.prototype,"type",void 0);M([A()],$.prototype,"size",void 0);M([A()],$.prototype,"iconSize",void 0);M([A({type:Boolean})],$.prototype,"fullWidth",void 0);M([A({type:Boolean})],$.prototype,"disabled",void 0);$=M([E("wui-icon-button")],$);var p={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS",UNABLE_TO_GET_TOKEN_BALANCES:"UNABLE_TO_GET_TOKEN_BALANCES",UNABLE_TO_GET_QUOTE:"UNABLE_TO_GET_QUOTE",UNABLE_TO_GET_QUOTE_STATUS:"UNABLE_TO_GET_QUOTE_STATUS",INVALID_RECIPIENT_ADDRESS_FOR_ASSET:"INVALID_RECIPIENT_ADDRESS_FOR_ASSET"},q={[p.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[p.INVALID_RECIPIENT]:"Invalid recipient address",[p.INVALID_ASSET]:"Invalid asset specified",[p.INVALID_AMOUNT]:"Invalid payment amount",[p.INVALID_RECIPIENT_ADDRESS_FOR_ASSET]:"Invalid recipient address for the asset selected",[p.UNKNOWN_ERROR]:"Unknown payment error occurred",[p.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[p.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[p.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[p.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[p.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[p.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[p.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status",[p.UNABLE_TO_GET_TOKEN_BALANCES]:"Unable to get token balances",[p.UNABLE_TO_GET_QUOTE]:"Unable to get quote. Please choose a different token",[p.UNABLE_TO_GET_QUOTE_STATUS]:"Unable to get quote status"},m=class t extends Error{get message(){return q[this.code]}constructor(e,n){super(q[e]),this.name="AppKitPayError",this.code=e,this.details=n,Error.captureStackTrace&&Error.captureStackTrace(this,t)}};var qe="https://rpc.walletconnect.org/v1/json-rpc",me="reown_test";function Fe(){let{chainNamespace:t}=w.parseCaipNetworkId(c.state.paymentAsset.network);if(!C.isAddress(c.state.recipient,t))throw new m(p.INVALID_RECIPIENT_ADDRESS_FOR_ASSET,`Provide valid recipient address for namespace "${t}"`)}function Be(t,e,n){return d(this,null,function*(){if(e!==v.CHAIN.EVM)throw new m(p.INVALID_CHAIN_NAMESPACE);if(!n.fromAddress)throw new m(p.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.");let r=typeof n.amount=="string"?parseFloat(n.amount):n.amount;if(isNaN(r))throw new m(p.INVALID_PAYMENT_CONFIG);let i=t.metadata?.decimals??18,s=_.parseUnits(r.toString(),i);if(typeof s!="bigint")throw new m(p.GENERIC_PAYMENT_ERROR);return(yield _.sendTransaction({chainNamespace:e,to:n.recipient,address:n.fromAddress,value:s,data:"0x"}))??void 0})}function Me(t,e){return d(this,null,function*(){if(!e.fromAddress)throw new m(p.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.");let n=t.asset,r=e.recipient,i=Number(t.metadata.decimals),s=_.parseUnits(e.amount.toString(),i);if(s===void 0)throw new m(p.GENERIC_PAYMENT_ERROR);return(yield _.writeContract({fromAddress:e.fromAddress,tokenAddress:n,args:[r,s],method:"transfer",abi:ke.getERC20Abi(n),chainNamespace:v.CHAIN.EVM}))??void 0})}function We(t,e){return d(this,null,function*(){if(t!==v.CHAIN.SOLANA)throw new m(p.INVALID_CHAIN_NAMESPACE);if(!e.fromAddress)throw new m(p.INVALID_PAYMENT_CONFIG,"fromAddress is required for Solana payments.");let n=typeof e.amount=="string"?parseFloat(e.amount):e.amount;if(isNaN(n)||n<=0)throw new m(p.INVALID_PAYMENT_CONFIG,"Invalid payment amount.");try{if(!Ue.getProvider(t))throw new m(p.GENERIC_PAYMENT_ERROR,"No Solana provider available.");let i=yield _.sendTransaction({chainNamespace:v.CHAIN.SOLANA,to:e.recipient,value:n,tokenMint:e.tokenMint});if(!i)throw new m(p.GENERIC_PAYMENT_ERROR,"Transaction failed.");return i}catch(r){throw r instanceof m?r:new m(p.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${r}`)}})}function je(i){return d(this,arguments,function*({sourceToken:t,toToken:e,amount:n,recipient:r}){let s=_.parseUnits(n,t.metadata.decimals),a=_.parseUnits(n,e.metadata.decimals);return Promise.resolve({type:re,origin:{amount:s?.toString()??"0",currency:t},destination:{amount:a?.toString()??"0",currency:e},fees:[{id:"service",label:"Service Fee",amount:"0",currency:e}],steps:[{requestId:re,type:"deposit",deposit:{amount:s?.toString()??"0",currency:t.asset,receiver:r}}],timeInSeconds:6})})}function J(t){if(!t)return null;let e=t.steps[0];return!e||e.type!==Ge?null:e}function se(t,e=0){if(!t)return[];let n=t.steps.filter(i=>i.type===ze),r=n.filter((i,s)=>s+1>e);return n.length>0&&n.length<3?r:[]}var fe=new ve({baseUrl:C.getApiUrl(),clientId:null}),he=class extends Error{};function ft(){let t=ee.getSnapshot().projectId;return`${qe}?projectId=${t}`}function ge(){let{projectId:t,sdkType:e,sdkVersion:n}=ee.state;return{projectId:t,st:e||"appkit",sv:n||"html-wagmi-4.2.2"}}function we(t,e){return d(this,null,function*(){let n=ft(),{sdkType:r,sdkVersion:i,projectId:s}=ee.getSnapshot(),a={jsonrpc:"2.0",id:1,method:t,params:z(F({},e||{}),{st:r,sv:i,projectId:s})},y=yield(yield fetch(n,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}})).json();if(y.error)throw new he(y.error.message);return y})}function ye(t){return d(this,null,function*(){return(yield we("reown_getExchanges",t)).result})}function xe(t){return d(this,null,function*(){return(yield we("reown_getExchangePayUrl",t)).result})}function Qe(t){return d(this,null,function*(){return(yield we("reown_getExchangeBuyStatus",t)).result})}function gt(t){return d(this,null,function*(){let e=x.bigNumber(t.amount).times(10**t.toToken.metadata.decimals).toString(),{chainId:n,chainNamespace:r}=w.parseCaipNetworkId(t.sourceToken.network),{chainId:i,chainNamespace:s}=w.parseCaipNetworkId(t.toToken.network),a=t.sourceToken.asset==="native"?pe(r):t.sourceToken.asset,l=t.toToken.asset==="native"?pe(s):t.toToken.asset;return yield fe.post({path:"/appkit/v1/transfers/quote",body:{user:t.address,originChainId:n.toString(),originCurrency:a,destinationChainId:i.toString(),destinationCurrency:l,recipient:t.recipient,amount:e},params:ge()})})}function Ye(t){return d(this,null,function*(){let e=S.isLowerCaseMatch(t.sourceToken.network,t.toToken.network),n=S.isLowerCaseMatch(t.sourceToken.asset,t.toToken.asset);return e&&n?je(t):gt(t)})}function Ve(t){return d(this,null,function*(){return yield fe.get({path:"/appkit/v1/transfers/status",params:F({requestId:t.requestId},ge())})})}function He(t){return d(this,null,function*(){return yield fe.get({path:`/appkit/v1/transfers/assets/exchanges/${t}`,params:ge()})})}var wt=["eip155","solana"],yt={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},Ke={56:"714",204:"714"};function ie(t,e){let{chainNamespace:n,chainId:r}=w.parseCaipNetworkId(t),i=yt[n];if(!i)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${n}`);let s=i.native.assetNamespace,a=i.native.assetReference;return e!=="native"?(s=i.defaultTokenNamespace,a=e):n==="eip155"&&Ke[r]&&(a=Ke[r]),`${`${n}:${r}`}/${s}:${a}`}function Xe(t){let{chainNamespace:e}=w.parseCaipNetworkId(t);return wt.includes(e)}function Ze(t){let n=f.getAllRequestedCaipNetworks().find(i=>i.caipNetworkId===t.chainId),r=t.address;if(!n)throw new Error(`Target network not found for balance chainId "${t.chainId}"`);if(S.isLowerCaseMatch(t.symbol,n.nativeCurrency.symbol))r="native";else if(C.isCaipAddress(r)){let{address:i}=w.parseCaipAddress(r);r=i}else if(!r)throw new Error(`Balance address not found for balance symbol "${t.symbol}"`);return{network:n.caipNetworkId,asset:r,metadata:{name:t.name,symbol:t.symbol,decimals:Number(t.quantity.decimals),logoURI:t.iconUrl},amount:t.quantity.numeric}}function Je(t){return{chainId:t.network,address:`${t.network}:${t.asset}`,symbol:t.metadata.symbol,name:t.metadata.name,iconUrl:t.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:t.metadata.decimals.toString()}}}function Y(t){let e=x.bigNumber(t,{safe:!0});return e.lt(.001)?"<0.001":e.round(4).toString()}function et(t){let n=f.getAllRequestedCaipNetworks().find(r=>r.caipNetworkId===t.network);return n?!!n.testnet:!1}var tt=0,be="unknown",re="direct-transfer",Ge="deposit",ze="transaction",o=Se({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[v.CHAIN.EVM]:[],[v.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),c={state:o,subscribe(t){return Te(o,()=>t(o))},subscribeKey(t,e){return Ce(o,t,e)},handleOpenPay(t){return d(this,null,function*(){this.resetState(),this.setPaymentConfig(t),this.initializeAnalytics(),Fe(),yield this.prepareTokenLogo(),o.isConfigured=!0,H.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:o.exchanges,configuration:{network:o.paymentAsset.network,asset:o.paymentAsset.asset,recipient:o.recipient,amount:o.amount}}}),yield B.open({view:"Pay"})})},resetState(){o.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},o.recipient="0x0",o.amount=0,o.isConfigured=!1,o.error=null,o.isPaymentInProgress=!1,o.isLoading=!1,o.currentPayment=void 0,o.selectedExchange=void 0,o.exchangeUrlForQuote=void 0,o.requestId=void 0},resetQuoteState(){o.quote=void 0,o.quoteStatus="waiting",o.quoteError=null,o.isFetchingQuote=!1,o.requestId=void 0},setPaymentConfig(t){if(!t.paymentAsset)throw new m(p.INVALID_PAYMENT_CONFIG);try{o.choice=t.choice??"pay",o.paymentAsset=t.paymentAsset,o.recipient=t.recipient,o.amount=t.amount,o.openInNewTab=t.openInNewTab??!0,o.redirectUrl=t.redirectUrl,o.payWithExchange=t.payWithExchange,o.error=null}catch(e){throw new m(p.INVALID_PAYMENT_CONFIG,e.message)}},setSelectedPaymentAsset(t){o.selectedPaymentAsset=t},setSelectedExchange(t){o.selectedExchange=t},setRequestId(t){o.requestId=t},setPaymentInProgress(t){o.isPaymentInProgress=t},getPaymentAsset(){return o.paymentAsset},getExchanges(){return o.exchanges},fetchExchanges(){return d(this,null,function*(){try{o.isLoading=!0;let t=yield ye({page:tt});o.exchanges=t.exchanges.slice(0,2)}catch{throw U.showError(q.UNABLE_TO_GET_EXCHANGES),new m(p.UNABLE_TO_GET_EXCHANGES)}finally{o.isLoading=!1}})},getAvailableExchanges(t){return d(this,null,function*(){try{let e=t?.asset&&t?.network?ie(t.network,t.asset):void 0;return yield ye({page:t?.page??tt,asset:e,amount:t?.amount?.toString()})}catch{throw new m(p.UNABLE_TO_GET_EXCHANGES)}})},getPayUrl(t,e,n=!1){return d(this,null,function*(){try{let r=Number(e.amount),i=yield xe({exchangeId:t,asset:ie(e.network,e.asset),amount:r.toString(),recipient:`${e.network}:${e.recipient}`});return H.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:t},configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:r},currentPayment:{type:"exchange",exchangeId:t},headless:n}}),n&&(this.initiatePayment(),H.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:o.paymentId||be,configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:r},currentPayment:{type:"exchange",exchangeId:t}}})),i}catch(r){throw r instanceof Error&&r.message.includes("is not supported")?new m(p.ASSET_NOT_SUPPORTED):new Error(r.message)}})},generateExchangeUrlForQuote(i){return d(this,arguments,function*({exchangeId:t,paymentAsset:e,amount:n,recipient:r}){let s=yield xe({exchangeId:t,asset:ie(e.network,e.asset),amount:n.toString(),recipient:r});o.exchangeSessionId=s.sessionId,o.exchangeUrlForQuote=s.url})},openPayUrl(t,e,n=!1){return d(this,null,function*(){try{let r=yield this.getPayUrl(t.exchangeId,e,n);if(!r)throw new m(p.UNABLE_TO_GET_PAY_URL);let s=t.openInNewTab??!0?"_blank":"_self";return C.openHref(r.url,s),r}catch(r){throw r instanceof m?o.error=r.message:o.error=q.GENERIC_PAYMENT_ERROR,new m(p.UNABLE_TO_GET_PAY_URL)}})},onTransfer(s){return d(this,arguments,function*({chainNamespace:t,fromAddress:e,toAddress:n,amount:r,paymentAsset:i}){if(o.currentPayment={type:"wallet",status:"IN_PROGRESS"},!o.isPaymentInProgress)try{this.initiatePayment();let l=f.getAllRequestedCaipNetworks().find(L=>L.caipNetworkId===i.network);if(!l)throw new Error("Target network not found");let y=f.state.activeCaipNetwork;switch(S.isLowerCaseMatch(y?.caipNetworkId,l.caipNetworkId)||(yield f.switchActiveNetwork(l)),t){case v.CHAIN.EVM:i.asset==="native"&&(o.currentPayment.result=yield Be(i,t,{recipient:n,amount:r,fromAddress:e})),i.asset.startsWith("0x")&&(o.currentPayment.result=yield Me(i,{recipient:n,amount:r,fromAddress:e})),o.currentPayment.status="SUCCESS";break;case v.CHAIN.SOLANA:o.currentPayment.result=yield We(t,{recipient:n,amount:r,fromAddress:e,tokenMint:i.asset==="native"?void 0:i.asset}),o.currentPayment.status="SUCCESS";break;default:throw new m(p.INVALID_CHAIN_NAMESPACE)}}catch(a){throw a instanceof m?o.error=a.message:o.error=q.GENERIC_PAYMENT_ERROR,o.currentPayment.status="FAILED",U.showError(o.error),a}finally{o.isPaymentInProgress=!1}})},onSendTransaction(t){return d(this,null,function*(){try{let{namespace:e,transactionStep:n}=t;c.initiatePayment();let i=f.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===o.paymentAsset?.network);if(!i)throw new Error("Target network not found");let s=f.state.activeCaipNetwork;if(S.isLowerCaseMatch(s?.caipNetworkId,i.caipNetworkId)||(yield f.switchActiveNetwork(i)),e===v.CHAIN.EVM){let{from:a,to:l,data:y,value:L}=n.transaction;yield _.sendTransaction({address:a,to:l,data:y,value:BigInt(L),chainNamespace:e})}else if(e===v.CHAIN.SOLANA){let{instructions:a}=n.transaction;yield _.writeSolanaTransaction({instructions:a})}}catch(e){throw e instanceof m?o.error=e.message:o.error=q.GENERIC_PAYMENT_ERROR,U.showError(o.error),e}finally{o.isPaymentInProgress=!1}})},getExchangeById(t){return o.exchanges.find(e=>e.id===t)},validatePayConfig(t){let{paymentAsset:e,recipient:n,amount:r}=t;if(!e)throw new m(p.INVALID_PAYMENT_CONFIG);if(!n)throw new m(p.INVALID_RECIPIENT);if(!e.asset)throw new m(p.INVALID_ASSET);if(r==null||r<=0)throw new m(p.INVALID_AMOUNT)},handlePayWithExchange(t){return d(this,null,function*(){try{o.currentPayment={type:"exchange",exchangeId:t};let{network:e,asset:n}=o.paymentAsset,r={network:e,asset:n,amount:o.amount,recipient:o.recipient},i=yield this.getPayUrl(t,r);if(!i)throw new m(p.UNABLE_TO_INITIATE_PAYMENT);return o.currentPayment.sessionId=i.sessionId,o.currentPayment.status="IN_PROGRESS",o.currentPayment.exchangeId=t,this.initiatePayment(),{url:i.url,openInNewTab:o.openInNewTab}}catch(e){return e instanceof m?o.error=e.message:o.error=q.GENERIC_PAYMENT_ERROR,o.isPaymentInProgress=!1,U.showError(o.error),null}})},getBuyStatus(t,e){return d(this,null,function*(){try{let n=yield Qe({sessionId:e,exchangeId:t});return(n.status==="SUCCESS"||n.status==="FAILED")&&H.sendEvent({type:"track",event:n.status==="SUCCESS"?"PAY_SUCCESS":"PAY_ERROR",properties:{message:n.status==="FAILED"?C.parseError(o.error):void 0,source:"pay",paymentId:o.paymentId||be,configuration:{network:o.paymentAsset.network,asset:o.paymentAsset.asset,recipient:o.recipient,amount:o.amount},currentPayment:{type:"exchange",exchangeId:o.currentPayment?.exchangeId,sessionId:o.currentPayment?.sessionId,result:n.txHash}}}),n}catch{throw new m(p.UNABLE_TO_GET_BUY_STATUS)}})},fetchTokensFromEOA(r){return d(this,arguments,function*({caipAddress:t,caipNetwork:e,namespace:n}){if(!t)return[];let{address:i}=w.parseCaipAddress(t),s=e;return n===v.CHAIN.EVM&&(s=void 0),yield _e.getMyTokensWithBalance({address:i,caipNetwork:s})})},fetchTokensFromExchange(){return d(this,null,function*(){if(!o.selectedExchange)return[];let t=yield He(o.selectedExchange.id),e=Object.values(t.assets).flat();return yield Promise.all(e.map(r=>d(this,null,function*(){let i=Je(r),{chainNamespace:s}=w.parseCaipNetworkId(i.chainId),a=i.address;if(C.isCaipAddress(a)){let{address:y}=w.parseCaipAddress(a);a=y}let l=yield T.getImageByToken(a??"",s).catch(()=>{});return i.iconUrl=l??"",i})))})},fetchTokens(r){return d(this,arguments,function*({caipAddress:t,caipNetwork:e,namespace:n}){try{o.isFetchingTokenBalances=!0;let a=yield!!o.selectedExchange?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:t,caipNetwork:e,namespace:n});o.tokenBalances=z(F({},o.tokenBalances),{[n]:a})}catch(i){let s=i instanceof Error?i.message:"Unable to get token balances";U.showError(s)}finally{o.isFetchingTokenBalances=!1}})},fetchQuote(s){return d(this,arguments,function*({amount:t,address:e,sourceToken:n,toToken:r,recipient:i}){try{c.resetQuoteState(),o.isFetchingQuote=!0;let a=yield Ye({amount:t,address:o.selectedExchange?void 0:e,sourceToken:n,toToken:r,recipient:i});if(o.selectedExchange){let l=J(a);if(l){let y=`${n.network}:${l.deposit.receiver}`,L=x.formatNumber(l.deposit.amount,{decimals:n.metadata.decimals??0,round:8});yield c.generateExchangeUrlForQuote({exchangeId:o.selectedExchange.id,paymentAsset:n,amount:L.toString(),recipient:y})}}o.quote=a}catch(a){let l=q.UNABLE_TO_GET_QUOTE;if(a instanceof Error&&a.cause&&a.cause instanceof Response)try{let y=yield a.cause.json();y.error&&typeof y.error=="string"&&(l=y.error)}catch{}throw o.quoteError=l,U.showError(l),new m(p.UNABLE_TO_GET_QUOTE)}finally{o.isFetchingQuote=!1}})},fetchQuoteStatus(e){return d(this,arguments,function*({requestId:t}){try{if(t===re){let r=o.selectedExchange,i=o.exchangeSessionId;if(r&&i){switch((yield this.getBuyStatus(r.id,i)).status){case"IN_PROGRESS":o.quoteStatus="waiting";break;case"SUCCESS":o.quoteStatus="success",o.isPaymentInProgress=!1;break;case"FAILED":o.quoteStatus="failure",o.isPaymentInProgress=!1;break;case"UNKNOWN":o.quoteStatus="waiting";break;default:o.quoteStatus="waiting";break}return}o.quoteStatus="success";return}let{status:n}=yield Ve({requestId:t});o.quoteStatus=n}catch{throw o.quoteStatus="failure",new m(p.UNABLE_TO_GET_QUOTE_STATUS)}})},initiatePayment(){o.isPaymentInProgress=!0,o.paymentId=crypto.randomUUID()},initializeAnalytics(){o.analyticsSet||(o.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",t=>{if(o.currentPayment?.status&&o.currentPayment.status!=="UNKNOWN"){let e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[o.currentPayment.status];H.sendEvent({type:"track",event:e,properties:{message:o.currentPayment.status==="FAILED"?C.parseError(o.error):void 0,source:"pay",paymentId:o.paymentId||be,configuration:{network:o.paymentAsset.network,asset:o.paymentAsset.asset,recipient:o.recipient,amount:o.amount},currentPayment:{type:o.currentPayment.type,exchangeId:o.currentPayment.exchangeId,sessionId:o.currentPayment.sessionId,result:o.currentPayment.result}}})}}))},prepareTokenLogo(){return d(this,null,function*(){if(!o.paymentAsset.metadata.logoURI)try{let{chainNamespace:t}=w.parseCaipNetworkId(o.paymentAsset.network),e=yield T.getImageByToken(o.paymentAsset.asset,t);o.paymentAsset.metadata.logoURI=e}catch{}})}};var nt=N`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:t})=>t.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:t})=>t.round};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:t})=>t[8]};
    border-top-left-radius: ${({borderRadius:t})=>t[8]};
  }
`;var W=function(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},O=class extends b{constructor(){super(),this.unsubscribe=[],this.amount=c.state.amount,this.namespace=void 0,this.paymentAsset=c.state.paymentAsset,this.activeConnectorIds=k.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=c.state.exchanges,this.isLoading=c.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(c.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(k.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(c.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(c.subscribeKey("isLoading",e=>this.isLoading=e)),c.fetchExchanges(),c.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return u`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return u`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){let e=f.state.activeChain;this.namespace=e,this.caipAddress=f.getAccountData(e)?.caipAddress,this.unsubscribe.push(f.subscribeChainProp("accountState",n=>{this.caipAddress=n?.caipAddress},e))}paymentDetailsTemplate(){let n=f.getAllRequestedCaipNetworks().find(r=>r.caipNetworkId===this.paymentAsset.network);return u`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${Y(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${n?.name||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${g(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${g(T.getNetworkImage(n))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return Xe(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():u``}connectedWalletTemplate(){let{name:e,image:n}=this.getWalletProperties({namespace:this.namespace});return u`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${g(n)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return u`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return u`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;let e=this.exchanges.filter(n=>et(this.paymentAsset)?n.id===me:n.id!==me);return e.length===0?u`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map(n=>u`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(n)}
          data-testid="exchange-option-${n.id}"
          ?chevron=${!0}
          imageSrc=${g(n.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${n.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return u`<wui-separator text="or" bgColor="secondary"></wui-separator>`}onWalletPayment(){return d(this,null,function*(){if(!this.namespace)throw new Error("Namespace not found");this.caipAddress?Q.push("PayQuote"):(yield k.connect(),yield B.open({view:"PayQuote"}))})}onExchangePayment(e){c.setSelectedExchange(e),Q.push("PayQuote")}onDisconnect(){return d(this,null,function*(){try{yield _.disconnect(),yield B.open({view:"Pay"})}catch{console.error("Failed to disconnect"),U.showError("Failed to disconnect")}})}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let n=this.activeConnectorIds[e];if(!n)return{name:void 0,image:void 0};let r=k.getConnector({id:n,namespace:e});if(!r)return{name:void 0,image:void 0};let i=T.getConnectorImage(r);return{name:r.name,image:i}}};O.styles=nt;W([h()],O.prototype,"amount",void 0);W([h()],O.prototype,"namespace",void 0);W([h()],O.prototype,"paymentAsset",void 0);W([h()],O.prototype,"activeConnectorIds",void 0);W([h()],O.prototype,"caipAddress",void 0);W([h()],O.prototype,"exchanges",void 0);W([h()],O.prototype,"isLoading",void 0);O=W([E("w3m-pay-view")],O);var rt=N`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;var K=function(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},xt=3,bt=2,Et=.3,At="200px",It={"accent-primary":$e.tokens.core.backgroundAccentPrimary},j=class extends b{constructor(){super(...arguments),this.rings=xt,this.duration=bt,this.opacity=Et,this.size=At,this.variant="accent-primary"}render(){let e=It[this.variant];this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${e};
      --pulse-opacity: ${this.opacity};
    `;let n=Array.from({length:this.rings},(r,i)=>this.renderRing(i,this.rings));return u`
      <div class="pulse-container">
        <div class="pulse-rings">${n}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,n){let i=`animation-delay: ${e/n*this.duration}s;`;return u`<div class="pulse-ring" style=${i}></div>`}};j.styles=[te,rt];K([A({type:Number})],j.prototype,"rings",void 0);K([A({type:Number})],j.prototype,"duration",void 0);K([A({type:Number})],j.prototype,"opacity",void 0);K([A()],j.prototype,"size",void 0);K([A()],j.prototype,"variant",void 0);j=K([E("wui-pulse")],j);var Ee=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],Ae=["success","submitted","failure","timeout","refund"];var st=N`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:t})=>t[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    border: 3px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    border: 3px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:t})=>t.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:t})=>t.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border: 1px solid ${({tokens:t})=>t.theme.foregroundSecondary};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:t})=>t[6]};
    border-top-left-radius: ${({borderRadius:t})=>t[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:t})=>t.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:t})=>t.round};
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:t})=>t.round};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
  }
`;var D=function(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},Nt={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]},Pt=3e3,R=class extends b{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=c.state.paymentAsset,this.quoteStatus=c.state.quoteStatus,this.quote=c.state.quote,this.amount=c.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=k.state.activeConnectorIds,this.selectedExchange=c.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(c.subscribeKey("quoteStatus",e=>this.quoteStatus=e),c.subscribeKey("quote",e=>this.quote=e),k.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e),c.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach(e=>e())}render(){return u`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){let e=Y(this.amount||"0"),n=this.paymentAsset.metadata.symbol??"Unknown",i=f.getAllRequestedCaipNetworks().find(l=>l.caipNetworkId===this.paymentAsset.network),s=this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund";return this.quoteStatus==="success"||this.quoteStatus==="submitted"?u`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:s?u`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:u`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${g(T.getNetworkImage(i))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${n}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return u`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){let e=this.getStepsWithStatus();return u`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map(n=>this.renderStep(n))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){let e=this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund",n=this.quoteStatus==="success"||this.quoteStatus==="submitted";if(e)return u`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(n)return u`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;let r=this.quote?.timeInSeconds??0;return u`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${r} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){let n=f.getAllRequestedCaipNetworks().find(a=>{let l=this.quote?.origin.currency.network;if(!l)return!1;let{chainId:y}=w.parseCaipNetworkId(l);return S.isLowerCaseMatch(a.id.toString(),y.toString())}),r=x.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString(),i=Y(r),s=this.quote?.origin.currency.metadata.symbol??"Unknown";return u`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${i}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${s}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${g(T.getNetworkImage(n))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${n?.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return u`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary"
          >${this.selectedExchange?"Exchange":"Wallet"}</wui-text
        >

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){let{image:e}=this.getWalletProperties({namespace:this.namespace}),{address:n}=this.caipAddress?w.parseCaipAddress(this.caipAddress):{},r=this.selectedExchange?.name;return this.selectedExchange?u`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${r}</wui-text>
          <wui-image src=${g(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:u`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${De.getTruncateString({string:this.profileName||n||r||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${g(e)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund"?Ee.map(n=>z(F({},n),{status:"failed"})):Ee.map(n=>{let i=(Nt[n.id]??[]).includes(this.quoteStatus)?"completed":"pending";return z(F({},n),{status:i})})}renderStep({title:e,icon:n,status:r}){return u`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${n} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${ne({"step-icon-box":!0,success:r==="completed"})}>
            ${this.renderStatusIndicator(r)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${e}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return e==="completed"?u`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:e==="failed"?u`<wui-icon size="sm" color="error" name="close"></wui-icon>`:e==="pending"?u`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval(()=>{this.fetchQuoteStatus()},Pt))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}fetchQuoteStatus(){return d(this,null,function*(){let e=c.state.requestId;if(!e||Ae.includes(this.quoteStatus))this.stopPolling();else try{yield c.fetchQuoteStatus({requestId:e}),Ae.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}})}initializeNamespace(){let e=f.state.activeChain;this.namespace=e,this.caipAddress=f.getAccountData(e)?.caipAddress,this.profileName=f.getAccountData(e)?.profileName??null,this.unsubscribe.push(f.subscribeChainProp("accountState",n=>{this.caipAddress=n?.caipAddress,this.profileName=n?.profileName??null},e))}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let n=this.activeConnectorIds[e];if(!n)return{name:void 0,image:void 0};let r=k.getConnector({id:n,namespace:e});if(!r)return{name:void 0,image:void 0};let i=T.getConnectorImage(r);return{name:r.name,image:i}}};R.styles=st;D([h()],R.prototype,"paymentAsset",void 0);D([h()],R.prototype,"quoteStatus",void 0);D([h()],R.prototype,"quote",void 0);D([h()],R.prototype,"amount",void 0);D([h()],R.prototype,"namespace",void 0);D([h()],R.prototype,"caipAddress",void 0);D([h()],R.prototype,"profileName",void 0);D([h()],R.prototype,"activeConnectorIds",void 0);D([h()],R.prototype,"selectedExchange",void 0);R=D([E("w3m-pay-loading-view")],R);var it=Re`
  :host {
    display: block;
  }
`;var St=function(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},Ie=class extends b{render(){return u`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};Ie.styles=[it];Ie=St([E("w3m-pay-fees-skeleton")],Ie);var ot=N`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t.round};
  }
`;var at=function(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},oe=class extends b{constructor(){super(),this.unsubscribe=[],this.quote=c.state.quote,this.unsubscribe.push(c.subscribeKey("quote",e=>this.quote=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=x.formatNumber(this.quote?.origin.amount||"0",{decimals:this.quote?.origin.currency.metadata.decimals??0,round:6}).toString();return u`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${e} ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(n=>this.renderFee(n)):null}
      </wui-flex>
    `}renderFee(e){let n=e.id==="network",r=x.formatNumber(e.amount||"0",{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(n){let s=f.getAllRequestedCaipNetworks().find(a=>S.isLowerCaseMatch(a.caipNetworkId,e.currency.network));return u`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${r} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${g(T.getNetworkImage(s))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${s?.name||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return u`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${r} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};oe.styles=[ot];at([h()],oe.prototype,"quote",void 0);oe=at([E("w3m-pay-fees")],oe);var ct=N`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:t})=>t[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:t})=>t[8]};
    height: ${({spacing:t})=>t[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var lt=function(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},ae=class extends b{constructor(){super(),this.unsubscribe=[],this.selectedExchange=c.state.selectedExchange,this.unsubscribe.push(c.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=!!this.selectedExchange;return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${e?null:u`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};ae.styles=[ct];lt([A({type:Array})],ae.prototype,"selectedExchange",void 0);ae=lt([E("w3m-pay-options-empty")],ae);var ut=N`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({borderRadius:t})=>t[4]};
    padding: ${({spacing:t})=>t[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({tokens:t})=>t.theme.foregroundSecondary};
  }
`;var Tt=function(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},Ne=class extends b{render(){return u`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return u`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};Ne.styles=[ut];Ne=Tt([E("w3m-pay-options-skeleton")],Ne);var pt=N`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({borderRadius:t})=>t[4]};
    padding: ${({spacing:t})=>t[3]};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:t})=>t.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:t})=>t.round};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }
`;var ce=function(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},Ct=300,X=class extends b{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){this.unsubscribe.forEach(n=>n()),this.resizeObserver?.disconnect(),this.shadowRoot?.querySelector(".pay-options-container")?.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){let e=this.shadowRoot?.querySelector(".pay-options-container");e&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),e?.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()}),this.resizeObserver?.observe(e),this.handleOptionsListScroll())}render(){return u`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(e=>this.payOptionTemplate(e))}
      </wui-flex>
    `}payOptionTemplate(e){let{network:n,metadata:r,asset:i,amount:s="0"}=e,l=f.getAllRequestedCaipNetworks().find(Z=>Z.caipNetworkId===n),y=`${n}:${i}`,L=`${this.selectedPaymentAsset?.network}:${this.selectedPaymentAsset?.asset}`,ue=y===L,G=x.bigNumber(s,{safe:!0}),V=G.gt(0);return u`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>this.onSelect?.(e)}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${g(r.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${g(T.getNetworkImage(l))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${r.symbol}</wui-text>
            ${V?u`<wui-text variant="sm-regular" color="secondary">
                  ${G.round(6).toString()} ${r.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${ue?u`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){let e=this.shadowRoot?.querySelector(".pay-options-container");if(!e)return;e.scrollHeight>Ct?(e.style.setProperty("--options-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--options-scroll--top-opacity",de.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--options-scroll--bottom-opacity",de.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--options-mask-image","none"),e.style.setProperty("--options-scroll--top-opacity","0"),e.style.setProperty("--options-scroll--bottom-opacity","0"))}};X.styles=[pt];ce([A({type:Array})],X.prototype,"options",void 0);ce([A()],X.prototype,"selectedPaymentAsset",void 0);ce([A()],X.prototype,"onSelect",void 0);X=ce([E("w3m-pay-options")],X);var dt=N`
  .payment-methods-container {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:t})=>t[5]};
    border-top-left-radius: ${({borderRadius:t})=>t[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    border-radius: ${({borderRadius:t})=>t[5]};
    padding: ${({spacing:t})=>t[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var P=function(t,e,n,r){var i=arguments.length,s=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},le={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton"},kt={eip155:{icon:le.eip155,label:"EVM"},solana:{icon:le.solana,label:"Solana"},bip122:{icon:le.bip122,label:"Bitcoin"},ton:{icon:le.ton,label:"Ton"}},I=class extends b{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=c.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=c.state.amount,this.recipient=c.state.recipient,this.activeConnectorIds=k.state.activeConnectorIds,this.selectedPaymentAsset=c.state.selectedPaymentAsset,this.selectedExchange=c.state.selectedExchange,this.isFetchingQuote=c.state.isFetchingQuote,this.quoteError=c.state.quoteError,this.quote=c.state.quote,this.isFetchingTokenBalances=c.state.isFetchingTokenBalances,this.tokenBalances=c.state.tokenBalances,this.isPaymentInProgress=c.state.isPaymentInProgress,this.exchangeUrlForQuote=c.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(c.subscribeKey("paymentAsset",e=>this.paymentAsset=e)),this.unsubscribe.push(c.subscribeKey("tokenBalances",e=>this.onTokenBalancesChanged(e))),this.unsubscribe.push(c.subscribeKey("isFetchingTokenBalances",e=>this.isFetchingTokenBalances=e)),this.unsubscribe.push(k.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e)),this.unsubscribe.push(c.subscribeKey("selectedPaymentAsset",e=>this.selectedPaymentAsset=e)),this.unsubscribe.push(c.subscribeKey("isFetchingQuote",e=>this.isFetchingQuote=e)),this.unsubscribe.push(c.subscribeKey("quoteError",e=>this.quoteError=e)),this.unsubscribe.push(c.subscribeKey("quote",e=>this.quote=e)),this.unsubscribe.push(c.subscribeKey("amount",e=>this.amount=e)),this.unsubscribe.push(c.subscribeKey("recipient",e=>this.recipient=e)),this.unsubscribe.push(c.subscribeKey("isPaymentInProgress",e=>this.isPaymentInProgress=e)),this.unsubscribe.push(c.subscribeKey("selectedExchange",e=>this.selectedExchange=e)),this.unsubscribe.push(c.subscribeKey("exchangeUrlForQuote",e=>this.exchangeUrlForQuote=e)),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach(e=>e())}updated(e){super.updated(e),e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return u`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){if(this.selectedExchange){let a=x.formatNumber(this.quote?.origin.amount,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return u`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?u`<wui-text variant="lg-regular" color="primary">
                ${x.bigNumber(a,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:u`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}let e=C.getPlainAddress(this.caipAddress)??"",{name:n,image:r}=this.getWalletProperties({namespace:this.namespace}),{icon:i,label:s}=kt[this.namespace]??{};return u`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${g(this.profileName)}
          address=${g(e)}
          imageSrc=${g(r)}
          alt=${g(n)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${g(s)}
          address=${g(e)}
          icon=${g(i)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${g(s)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){let e=f.state.activeChain;this.namespace=e,this.caipAddress=f.getAccountData(e)?.caipAddress,this.profileName=f.getAccountData(e)?.profileName??null,this.unsubscribe.push(f.subscribeChainProp("accountState",n=>this.onAccountStateChanged(n),e))}fetchTokens(){return d(this,null,function*(){if(this.namespace){let e;if(this.caipAddress){let{chainId:n,chainNamespace:r}=w.parseCaipAddress(this.caipAddress),i=`${r}:${n}`;e=f.getAllRequestedCaipNetworks().find(a=>a.caipNetworkId===i)}yield c.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}})}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){let{address:e}=this.caipAddress?w.parseCaipAddress(this.caipAddress):{};c.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:e}){if(!e)return{name:void 0,image:void 0};let n=this.activeConnectorIds[e];if(!n)return{name:void 0,image:void 0};let r=k.getConnector({id:n,namespace:e});if(!r)return{name:void 0,image:void 0};let i=T.getConnectorImage(r);return{name:r.name,image:i}}paymentOptionsViewTemplate(){return u`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){let e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return u`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(e.length===0)return u`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;let n={disabled:this.isFetchingQuote};return u`<w3m-pay-options
      class=${ne(n)}
      .options=${e}
      .selectedPaymentAsset=${g(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?u`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:u`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){let e=this.isFetchingQuote||this.isFetchingTokenBalances,n=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||!!this.quoteError,r=x.formatNumber(this.quote?.origin.amount??0,{decimals:this.quote?.origin.currency.metadata.decimals??0}).toString();return this.selectedExchange?e||n?u`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:u`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:u`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${e||n?u`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:u`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${Y(r)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${this.quote?.origin.currency.metadata.symbol||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:e,isDisabled:n})}
      </wui-flex>
    `}actionButtonTemplate(e){let n=se(this.quote),{isLoading:r,isDisabled:i}=e,s="Pay";return n.length>1&&this.completedTransactionsCount===0&&(s="Approve"),u`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${r||this.isPaymentInProgress}
        ?disabled=${i||this.isPaymentInProgress}
        @click=${()=>{n.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${s}
        ${r?null:u`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){return this.namespace?(this.tokenBalances[this.namespace]??[]).map(i=>{try{return Ze(i)}catch{return null}}).filter(i=>!!i).filter(i=>{let{chainId:s}=w.parseCaipNetworkId(i.network),{chainId:a}=w.parseCaipNetworkId(this.paymentAsset.network);return S.isLowerCaseMatch(i.asset,this.paymentAsset.asset)?!0:this.selectedExchange?!S.isLowerCaseMatch(s.toString(),a.toString()):!0}):[]}onTokenBalancesChanged(e){this.tokenBalances=e;let[n]=this.getPaymentAssetFromTokenBalances();n&&c.setSelectedPaymentAsset(n)}onConnectOtherWallet(){return d(this,null,function*(){yield k.connect(),yield B.open({view:"PayQuote"})})}onAccountStateChanged(e){let{address:n}=this.caipAddress?w.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=e?.caipAddress,this.profileName=e?.profileName??null,n){let{address:r}=this.caipAddress?w.parseCaipAddress(this.caipAddress):{};r?S.isLowerCaseMatch(r,n)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):B.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||c.setSelectedPaymentAsset(e)}onTransfer(){return d(this,null,function*(){let e=J(this.quote);if(e){if(!S.isLowerCaseMatch(this.selectedPaymentAsset?.asset,e.deposit.currency))throw new Error("Quote asset is not the same as the selected payment asset");let r=this.selectedPaymentAsset?.amount??"0",i=x.formatNumber(e.deposit.amount,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!x.bigNumber(r).gte(i)){U.showError("Insufficient funds");return}if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){let{address:a}=w.parseCaipAddress(this.caipAddress);yield c.onTransfer({chainNamespace:this.namespace,fromAddress:a,toAddress:e.deposit.receiver,amount:i,paymentAsset:this.selectedPaymentAsset}),c.setRequestId(e.requestId),Q.push("PayLoading")}}})}onSendTransactions(){return d(this,null,function*(){let e=this.selectedPaymentAsset?.amount??"0",n=x.formatNumber(this.quote?.origin.amount??0,{decimals:this.selectedPaymentAsset?.metadata.decimals??0}).toString();if(!x.bigNumber(e).gte(n)){U.showError("Insufficient funds");return}let i=se(this.quote),[s]=se(this.quote,this.completedTransactionsCount);s&&this.namespace&&(yield c.onSendTransaction({namespace:this.namespace,transactionStep:s}),this.completedTransactionsCount+=1,this.completedTransactionsCount===i.length&&(c.setRequestId(s.requestId),Q.push("PayLoading")))})}onPayWithExchange(){if(this.exchangeUrlForQuote){let e=C.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw new Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;let n=J(this.quote);n&&c.setRequestId(n.requestId),c.initiatePayment(),Q.push("PayLoading")}}resetAssetsState(){c.setSelectedPaymentAsset(null)}resetQuoteState(){c.resetQuoteState()}};I.styles=dt;P([h()],I.prototype,"profileName",void 0);P([h()],I.prototype,"paymentAsset",void 0);P([h()],I.prototype,"namespace",void 0);P([h()],I.prototype,"caipAddress",void 0);P([h()],I.prototype,"amount",void 0);P([h()],I.prototype,"recipient",void 0);P([h()],I.prototype,"activeConnectorIds",void 0);P([h()],I.prototype,"selectedPaymentAsset",void 0);P([h()],I.prototype,"selectedExchange",void 0);P([h()],I.prototype,"isFetchingQuote",void 0);P([h()],I.prototype,"quoteError",void 0);P([h()],I.prototype,"quote",void 0);P([h()],I.prototype,"isFetchingTokenBalances",void 0);P([h()],I.prototype,"tokenBalances",void 0);P([h()],I.prototype,"isPaymentInProgress",void 0);P([h()],I.prototype,"exchangeUrlForQuote",void 0);P([h()],I.prototype,"completedTransactionsCount",void 0);I=P([E("w3m-pay-quote-view")],I);var vt=3e5;function mt(t){return d(this,null,function*(){return c.handleOpenPay(t)})}function _t(n){return d(this,arguments,function*(t,e=vt){if(e<=0)throw new m(p.INVALID_PAYMENT_CONFIG,"Timeout must be greater than 0");try{yield mt(t)}catch(r){throw r instanceof m?r:new m(p.UNABLE_TO_INITIATE_PAYMENT,r.message)}return new Promise((r,i)=>{let s=!1,a=setTimeout(()=>{s||(s=!0,G(),i(new m(p.GENERIC_PAYMENT_ERROR,"Payment timeout")))},e);function l(){if(s)return;let V=c.state.currentPayment,Z=c.state.error,ht=c.state.isPaymentInProgress;if(V?.status==="SUCCESS"){s=!0,G(),clearTimeout(a),r({success:!0,result:V.result});return}if(V?.status==="FAILED"){s=!0,G(),clearTimeout(a),r({success:!1,error:Z||"Payment failed"});return}Z&&!ht&&!V&&(s=!0,G(),clearTimeout(a),r({success:!1,error:Z}))}let y=Pe("currentPayment",l),L=Pe("error",l),ue=Pe("isPaymentInProgress",l),G=Dt([y,L,ue]);l()})})}function Ut(){return c.getExchanges()}function Rt(){return c.state.currentPayment?.result}function $t(){return c.state.error}function Ot(){return c.state.isPaymentInProgress}function Pe(t,e){return c.subscribeKey(t,e)}function Dt(t){return()=>{t.forEach(e=>{try{e()}catch{}})}}var Ei={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},Ai={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Ii={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},Ni={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Pi={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Si={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Ti={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},Ci={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ki={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},vi={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},_i={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Ui={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},Ri={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},$i={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}};export{c as a,O as b,R as c,I as d,mt as e,_t as f,Ut as g,Rt as h,$t as i,Ot as j,Ei as k,Ai as l,Ii as m,Ni as n,Pi as o,Si as p,Ti as q,Ci as r,ki as s,vi as t,_i as u,Ui as v,Ri as w,$i as x};

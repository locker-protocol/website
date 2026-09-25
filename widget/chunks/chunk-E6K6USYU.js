import{a as Vr,w as Kr}from"./chunk-IR527B2I.js";import{a as me,b as Fe}from"./chunk-FSCGOVIF.js";import{A as Lt,B as Bt,C as Ft,D as Ht,E as Wt,F as $t,G as jt,H as qt,I as Vt,J as Kt,K as st,L as dr,M as mr,N as fr,a as dt,c as ur,d as ze,e as It,f as ge,g as Ne,h as Be,i as rt,j as pr,k as Nt,l as _t,m as Tt,n as xt,o as Pt,p as mt,q as Rt,r as kt,s as Ot,t as ot,u as nt,v as ft,w as Ut,x as Ge,y as Dt,z as Mt}from"./chunk-KWT6Y5P2.js";import{e as qr}from"./chunk-YFOR3E57.js";var V={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"ID_AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin",cosmos:"Cosmos"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],HTTP_STATUS_CODES:{SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network",SECURE_SITE_SDK_ORIGIN:(typeof process<"u"&&typeof process.env<"u"?process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org"};var zt={caipNetworkIdToNumber(e){return e?Number(e.split(":")[1]):void 0},parseEvmChainId(e){return typeof e=="string"?this.caipNetworkIdToNumber(e):e},getNetworksByNamespace(e,t){return e?.filter(r=>r.chainNamespace===t)||[]},getFirstNetworkByNamespace(e,t){return this.getNetworksByNamespace(e,t)[0]},getNetworkNameByCaipNetworkId(e,t){if(!t)return;let r=e.find(n=>n.caipNetworkId===t);if(r)return r.name;let[o]=t.split(":");return V.CHAIN_NAME_MAP?.[o]||void 0}};var zr=20,Gr=1,He=1e6,hr=1e6,Yr=-7,Xr=21,Jr=!1,it="[big.js] ",We=it+"Invalid ",ht=We+"decimal places",Qr=We+"rounding mode",wr=it+"Division by zero",H={},ye=void 0,Zr=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function gr(){function e(t){var r=this;if(!(r instanceof e))return t===ye?gr():new e(t);if(t instanceof e)r.s=t.s,r.e=t.e,r.c=t.c.slice();else{if(typeof t!="string"){if(e.strict===!0&&typeof t!="bigint")throw TypeError(We+"value");t=t===0&&1/t<0?"-0":String(t)}eo(r,t)}r.constructor=e}return e.prototype=H,e.DP=zr,e.RM=Gr,e.NE=Yr,e.PE=Xr,e.strict=Jr,e.roundDown=0,e.roundHalfUp=1,e.roundHalfEven=2,e.roundUp=3,e}function eo(e,t){var r,o,n;if(!Zr.test(t))throw Error(We+"number");for(e.s=t.charAt(0)=="-"?(t=t.slice(1),-1):1,(r=t.indexOf("."))>-1&&(t=t.replace(".","")),(o=t.search(/e/i))>0?(r<0&&(r=o),r+=+t.slice(o+1),t=t.substring(0,o)):r<0&&(r=t.length),n=t.length,o=0;o<n&&t.charAt(o)=="0";)++o;if(o==n)e.c=[e.e=0];else{for(;n>0&&t.charAt(--n)=="0";);for(e.e=r-o-1,e.c=[],r=0;o<=n;)e.c[r++]=+t.charAt(o++)}return e}function $e(e,t,r,o){var n=e.c;if(r===ye&&(r=e.constructor.RM),r!==0&&r!==1&&r!==2&&r!==3)throw Error(Qr);if(t<1)o=r===3&&(o||!!n[0])||t===0&&(r===1&&n[0]>=5||r===2&&(n[0]>5||n[0]===5&&(o||n[1]!==ye))),n.length=1,o?(e.e=e.e-t+1,n[0]=1):n[0]=e.e=0;else if(t<n.length){if(o=r===1&&n[t]>=5||r===2&&(n[t]>5||n[t]===5&&(o||n[t+1]!==ye||n[t-1]&1))||r===3&&(o||!!n[0]),n.length=t,o){for(;++n[--t]>9;)if(n[t]=0,t===0){++e.e,n.unshift(1);break}}for(t=n.length;!n[--t];)n.pop()}return e}function je(e,t,r){var o=e.e,n=e.c.join(""),s=n.length;if(t)n=n.charAt(0)+(s>1?"."+n.slice(1):"")+(o<0?"e":"e+")+o;else if(o<0){for(;++o;)n="0"+n;n="0."+n}else if(o>0)if(++o>s)for(o-=s;o--;)n+="0";else o<s&&(n=n.slice(0,o)+"."+n.slice(o));else s>1&&(n=n.charAt(0)+"."+n.slice(1));return e.s<0&&r?"-"+n:n}H.abs=function(){var e=new this.constructor(this);return e.s=1,e};H.cmp=function(e){var t,r=this,o=r.c,n=(e=new r.constructor(e)).c,s=r.s,a=e.s,c=r.e,u=e.e;if(!o[0]||!n[0])return o[0]?s:n[0]?-a:0;if(s!=a)return s;if(t=s<0,c!=u)return c>u^t?1:-1;for(a=(c=o.length)<(u=n.length)?c:u,s=-1;++s<a;)if(o[s]!=n[s])return o[s]>n[s]^t?1:-1;return c==u?0:c>u^t?1:-1};H.div=function(e){var t=this,r=t.constructor,o=t.c,n=(e=new r(e)).c,s=t.s==e.s?1:-1,a=r.DP;if(a!==~~a||a<0||a>He)throw Error(ht);if(!n[0])throw Error(wr);if(!o[0])return e.s=s,e.c=[e.e=0],e;var c,u,l,p,f,I=n.slice(),h=c=n.length,J=o.length,d=o.slice(0,c),b=d.length,U=e,te=U.c=[],K=0,X=a+(U.e=t.e-e.e)+1;for(U.s=s,s=X<0?0:X,I.unshift(0);b++<c;)d.push(0);do{for(l=0;l<10;l++){if(c!=(b=d.length))p=c>b?1:-1;else for(f=-1,p=0;++f<c;)if(n[f]!=d[f]){p=n[f]>d[f]?1:-1;break}if(p<0){for(u=b==c?n:I;b;){if(d[--b]<u[b]){for(f=b;f&&!d[--f];)d[f]=9;--d[f],d[b]+=10}d[b]-=u[b]}for(;!d[0];)d.shift()}else break}te[K++]=p?l:++l,d[0]&&p?d[b]=o[h]||0:d=[o[h]]}while((h++<J||d[0]!==ye)&&s--);return!te[0]&&K!=1&&(te.shift(),U.e--,X--),K>X&&$e(U,X,r.RM,d[0]!==ye),U};H.eq=function(e){return this.cmp(e)===0};H.gt=function(e){return this.cmp(e)>0};H.gte=function(e){return this.cmp(e)>-1};H.lt=function(e){return this.cmp(e)<0};H.lte=function(e){return this.cmp(e)<1};H.minus=H.sub=function(e){var t,r,o,n,s=this,a=s.constructor,c=s.s,u=(e=new a(e)).s;if(c!=u)return e.s=-u,s.plus(e);var l=s.c.slice(),p=s.e,f=e.c,I=e.e;if(!l[0]||!f[0])return f[0]?e.s=-u:l[0]?e=new a(s):e.s=1,e;if(c=p-I){for((n=c<0)?(c=-c,o=l):(I=p,o=f),o.reverse(),u=c;u--;)o.push(0);o.reverse()}else for(r=((n=l.length<f.length)?l:f).length,c=u=0;u<r;u++)if(l[u]!=f[u]){n=l[u]<f[u];break}if(n&&(o=l,l=f,f=o,e.s=-e.s),(u=(r=f.length)-(t=l.length))>0)for(;u--;)l[t++]=0;for(u=t;r>c;){if(l[--r]<f[r]){for(t=r;t&&!l[--t];)l[t]=9;--l[t],l[r]+=10}l[r]-=f[r]}for(;l[--u]===0;)l.pop();for(;l[0]===0;)l.shift(),--I;return l[0]||(e.s=1,l=[I=0]),e.c=l,e.e=I,e};H.mod=function(e){var t,r=this,o=r.constructor,n=r.s,s=(e=new o(e)).s;if(!e.c[0])throw Error(wr);return r.s=e.s=1,t=e.cmp(r)==1,r.s=n,e.s=s,t?new o(r):(n=o.DP,s=o.RM,o.DP=o.RM=0,r=r.div(e),o.DP=n,o.RM=s,this.minus(r.times(e)))};H.neg=function(){var e=new this.constructor(this);return e.s=-e.s,e};H.plus=H.add=function(e){var t,r,o,n=this,s=n.constructor;if(e=new s(e),n.s!=e.s)return e.s=-e.s,n.minus(e);var a=n.e,c=n.c,u=e.e,l=e.c;if(!c[0]||!l[0])return l[0]||(c[0]?e=new s(n):e.s=n.s),e;if(c=c.slice(),t=a-u){for(t>0?(u=a,o=l):(t=-t,o=c),o.reverse();t--;)o.push(0);o.reverse()}for(c.length-l.length<0&&(o=l,l=c,c=o),t=l.length,r=0;t;c[t]%=10)r=(c[--t]=c[t]+l[t]+r)/10|0;for(r&&(c.unshift(r),++u),t=c.length;c[--t]===0;)c.pop();return e.c=c,e.e=u,e};H.pow=function(e){var t=this,r=new t.constructor("1"),o=r,n=e<0;if(e!==~~e||e<-hr||e>hr)throw Error(We+"exponent");for(n&&(e=-e);e&1&&(o=o.times(t)),e>>=1,!!e;)t=t.times(t);return n?r.div(o):o};H.prec=function(e,t){if(e!==~~e||e<1||e>He)throw Error(We+"precision");return $e(new this.constructor(this),e,t)};H.round=function(e,t){if(e===ye)e=0;else if(e!==~~e||e<-He||e>He)throw Error(ht);return $e(new this.constructor(this),e+this.e+1,t)};H.sqrt=function(){var e,t,r,o=this,n=o.constructor,s=o.s,a=o.e,c=new n("0.5");if(!o.c[0])return new n(o);if(s<0)throw Error(it+"No square root");s=Math.sqrt(+je(o,!0,!0)),s===0||s===1/0?(t=o.c.join(""),t.length+a&1||(t+="0"),s=Math.sqrt(t),a=((a+1)/2|0)-(a<0||a&1),e=new n((s==1/0?"5e":(s=s.toExponential()).slice(0,s.indexOf("e")+1))+a)):e=new n(s+""),a=e.e+(n.DP+=4);do r=e,e=c.times(r.plus(o.div(r)));while(r.c.slice(0,a).join("")!==e.c.slice(0,a).join(""));return $e(e,(n.DP-=4)+e.e+1,n.RM)};H.times=H.mul=function(e){var t,r=this,o=r.constructor,n=r.c,s=(e=new o(e)).c,a=n.length,c=s.length,u=r.e,l=e.e;if(e.s=r.s==e.s?1:-1,!n[0]||!s[0])return e.c=[e.e=0],e;for(e.e=u+l,a<c&&(t=n,n=s,s=t,l=a,a=c,c=l),t=new Array(l=a+c);l--;)t[l]=0;for(u=c;u--;){for(c=0,l=a+u;l>u;)c=t[l]+s[u]*n[l-u-1]+c,t[l--]=c%10,c=c/10|0;t[l]=c}for(c?++e.e:t.shift(),u=t.length;!t[--u];)t.pop();return e.c=t,e};H.toExponential=function(e,t){var r=this,o=r.c[0];if(e!==ye){if(e!==~~e||e<0||e>He)throw Error(ht);for(r=$e(new r.constructor(r),++e,t);r.c.length<e;)r.c.push(0)}return je(r,!0,!!o)};H.toFixed=function(e,t){var r=this,o=r.c[0];if(e!==ye){if(e!==~~e||e<0||e>He)throw Error(ht);for(r=$e(new r.constructor(r),e+r.e+1,t),e=e+r.e+1;r.c.length<e;)r.c.push(0)}return je(r,!1,!!o)};H[Symbol.for("nodejs.util.inspect.custom")]=H.toJSON=H.toString=function(){var e=this,t=e.constructor;return je(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])};H.toNumber=function(){var e=+je(this,!0,!0);if(this.constructor.strict===!0&&!this.eq(e.toString()))throw Error(it+"Imprecise conversion");return e};H.toPrecision=function(e,t){var r=this,o=r.constructor,n=r.c[0];if(e!==ye){if(e!==~~e||e<1||e>He)throw Error(We+"precision");for(r=$e(new o(r),e,t);r.c.length<e;)r.c.push(0)}return je(r,e<=r.e||r.e<=o.NE||r.e>=o.PE,!!n)};H.valueOf=function(){var e=this,t=e.constructor;if(t.strict===!0)throw Error(it+"valueOf disallowed");return je(e,e.e<=t.NE||e.e>=t.PE,!0)};var to=gr(),Ye=to;var Gt={bigNumber(e){return e?new Ye(e):new Ye(0)},multiply(e,t){if(e===void 0||t===void 0)return new Ye(0);let r=new Ye(e),o=new Ye(t);return r.times(o)},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},parseLocalStringToNumber(e){return e===void 0?0:parseFloat(e.replace(/,/gu,""))}};var Cr=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];var Er=[{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}];var br=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];var Yt={getERC20Abi:e=>V.USDT_CONTRACT_ADDRESSES.includes(e)?br:Cr,getSwapAbi:()=>Er};var ro={validateCaipAddress(e){if(e.split(":")?.length!==3)throw new Error("Invalid CAIP Address");return e},parseCaipAddress(e){let t=e.split(":");if(t.length!==3)throw new Error(`Invalid CAIP-10 address: ${e}`);let[r,o,n]=t;if(!r||!o||!n)throw new Error(`Invalid CAIP-10 address: ${e}`);return{chainNamespace:r,chainId:o,address:n}},parseCaipNetworkId(e){let t=e.split(":");if(t.length!==2)throw new Error(`Invalid CAIP-2 network id: ${e}`);let[r,o]=t;if(!r||!o)throw new Error(`Invalid CAIP-2 network id: ${e}`);return{chainNamespace:r,chainId:o}}};var x={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types",CONNECTIONS:"@appkit/connections"};function at(e){if(!e)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${e}:connected_connector_id`}var N={setItem(e,t){qe()&&t!==void 0&&localStorage.setItem(e,t)},getItem(e){if(qe())return localStorage.getItem(e)||void 0},removeItem(e){qe()&&localStorage.removeItem(e)},clear(){qe()&&localStorage.clear()}};function qe(){return typeof window<"u"&&typeof localStorage<"u"}function fe(e,t){return t==="light"?{"--w3m-accent":e?.["--w3m-accent"]||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":e?.["--w3m-accent"]||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}var C={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5},isCacheExpired(e,t){return Date.now()-e>t},getActiveNetworkProps(){let e=C.getActiveNamespace(),t=C.getActiveCaipNetworkId(),r=t?t.split(":")[1]:void 0,o=r?isNaN(Number(r))?r:Number(r):void 0;return{namespace:e,caipNetworkId:t,chainId:o}},setWalletConnectDeepLink({name:e,href:t}){try{N.setItem(x.DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=N.getItem(x.DEEPLINK_CHOICE);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{N.removeItem(x.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{N.setItem(x.ACTIVE_NAMESPACE,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{N.setItem(x.ACTIVE_CAIP_NETWORK_ID,e),C.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return N.getItem(x.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{N.removeItem(x.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{let t=at(e);N.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{let t=C.getRecentWallets();t.find(o=>o.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),N.setItem(x.RECENT_WALLETS,JSON.stringify(t)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{let e=N.getItem(x.RECENT_WALLETS);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnectorId(e,t){try{let r=at(e);N.setItem(r,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return N.getItem(x.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{let t=at(e);return N.getItem(t)}catch{console.info("Unable to get connected connector id in namespace ",e)}},setConnectedSocialProvider(e){try{N.setItem(x.CONNECTED_SOCIAL,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return N.getItem(x.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{N.removeItem(x.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return N.getItem(x.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){return N.getItem(x.ACTIVE_CAIP_NETWORK_ID)?.split(":")?.[1]},setConnectionStatus(e){try{N.setItem(x.CONNECTION_STATUS,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return N.getItem(x.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{let e=N.getItem(x.CONNECTED_NAMESPACES);return e?.length?e.split(","):[]}catch{return[]}},setConnectedNamespaces(e){try{let t=Array.from(new Set(e));N.setItem(x.CONNECTED_NAMESPACES,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{let t=C.getConnectedNamespaces();t.includes(e)||(t.push(e),C.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{let t=C.getConnectedNamespaces(),r=t.indexOf(e);r>-1&&(t.splice(r,1),C.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return N.getItem(x.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{N.setItem(x.TELEGRAM_SOCIAL_PROVIDER,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{N.removeItem(x.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{let t=N.getItem(x.PORTFOLIO_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{let t=C.getBalanceCache();N.setItem(x.PORTFOLIO_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{let r=C.getBalanceCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.portfolio))return r.balance;C.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{let t=C.getBalanceCache();t[e.caipAddress]=e,N.setItem(x.PORTFOLIO_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{let t=N.getItem(x.NATIVE_BALANCE_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{let t=C.getBalanceCache();N.setItem(x.NATIVE_BALANCE_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{let r=C.getNativeBalanceCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.nativeBalance))return r;console.info("Discarding cache for address",e),C.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{let t=C.getNativeBalanceCache();t[e.caipAddress]=e,N.setItem(x.NATIVE_BALANCE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{let t=N.getItem(x.ENS_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{let r=C.getEnsCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.ens))return r.ens;C.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{let t=C.getEnsCache();t[e.address]=e,N.setItem(x.ENS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{let t=C.getEnsCache();N.setItem(x.ENS_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{let t=N.getItem(x.IDENTITY_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{let r=C.getIdentityCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.identity))return r.identity;C.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{let t=C.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},N.setItem(x.IDENTITY_CACHE,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{let t=C.getIdentityCache();N.setItem(x.IDENTITY_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove identity from cache",e)}},clearAddressCache(){try{N.removeItem(x.PORTFOLIO_CACHE),N.removeItem(x.NATIVE_BALANCE_CACHE),N.removeItem(x.ENS_CACHE),N.removeItem(x.IDENTITY_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{N.setItem(x.PREFERRED_ACCOUNT_TYPES,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{let e=N.getItem(x.PREFERRED_ACCOUNT_TYPES);return e?JSON.parse(e):{}}catch{console.info("Unable to get preferred account types")}return{}},setConnections(e,t){try{let r={...C.getConnections(),[t]:e};N.setItem(x.CONNECTIONS,JSON.stringify(r))}catch(r){console.error("Unable to sync connections to storage",r)}},getConnections(){try{let e=N.getItem(x.CONNECTIONS);return e?JSON.parse(e):{}}catch(e){return console.error("Unable to get connections from storage",e),{}}}};var Xt=(typeof process<"u"&&typeof process.env<"u"?process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",Jt=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}],vr="WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",ee={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:Xt,SECURE_SITE_DASHBOARD:`${Xt}/dashboard`,SECURE_SITE_FAVICON:`${Xt}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","berachain","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Berachain:"berachain",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],BALANCE_SUPPORTED_CHAINS:["eip155","solana"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:["eip155","solana"],ACTIVITY_ENABLED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x",cosmos:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in the wallet app",WEB:"Open and continue in the wallet app"},SEND_SUPPORTED_NAMESPACES:["eip155","solana"],DEFAULT_REMOTE_FEATURES:{swaps:["1inch"],onramp:["coinbase","meld"],email:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],activity:!0,reownBranding:!0},DEFAULT_REMOTE_FEATURES_DISABLED:{email:!1,socials:!1,swaps:!1,onramp:!1,activity:!1,reownBranding:!1},DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1},DEFAULT_SOCIALS:["google","x","farcaster","discord","apple","github","facebook"],DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"}};var S={isMobile(){return this.isClient()?!!(typeof window?.matchMedia=="function"&&window?.matchMedia("(pointer:coarse)")?.matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(e,t=""){return e?.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase())},isAndroid(){if(!this.isMobile())return!1;let e=window?.navigator.userAgent.toLowerCase();return S.isMobile()&&e.includes("android")},isIos(){if(!this.isMobile())return!1;let e=window?.navigator.userAgent.toLowerCase();return e.includes("iphone")||e.includes("ipad")},isSafari(){return this.isClient()?(window?.navigator.userAgent.toLowerCase()).includes("safari"):!1},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=ee.TEN_SEC_MS:!0},isAllowedRetry(e,t=ee.ONE_SEC_MS){return Date.now()-e>=t},copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{return window?.self!==window?.top}catch{return!1}},isSafeApp(){if(S.isClient()&&window.self!==window.top)try{let e=window?.location?.ancestorOrigins?.[0],t="https://app.safe.global";if(e){let r=new URL(e),o=new URL(t);return r.hostname===o.hostname}}catch{return!1}return!1},getPairingExpiry(){return Date.now()+ee.FOUR_MINUTES_MS},getNetworkId(e){return e?.split(":")[1]},getPlainAddress(e){return e?.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let r;return(...o)=>{function n(){e(...o)}r&&clearTimeout(r),r=setTimeout(n,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t,r=null){if(S.isHttpUrl(e))return this.formatUniversalUrl(e,t);let o=e,n=r;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),n&&!n?.endsWith("/")&&(n=`${n}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));let s=encodeURIComponent(t);return{redirect:`${o}wc?uri=${s}`,redirectUniversalLink:n?`${n}wc?uri=${s}`:void 0,href:o}},formatUniversalUrl(e,t){if(!S.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let o=encodeURIComponent(t);return{redirect:`${r}wc?uri=${o}`,href:r}},getOpenTargetForPlatform(e){return e==="popupWindow"?e:this.isTelegram()?C.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,r){window?.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},returnOpenHref(e,t,r){return window?.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},isPWA(){if(typeof window>"u")return!1;let e=window.matchMedia?.("(display-mode: standalone)")?.matches,t=window?.navigator?.standalone;return!!(e||t)},async preloadImage(e){let t=new Promise((r,o)=>{let n=new Image;n.onload=r,n.onerror=o,n.crossOrigin="anonymous",n.src=e});return Promise.race([t,S.wait(2e3)])},formatBalance(e,t){let r="0.000";if(typeof e=="string"){let o=Number(e);if(o){let n=Math.floor(o*1e3)/1e3;n&&(r=n.toString())}}return`${r}${t?` ${t}`:""}`},formatBalance2(e,t){let r;if(e==="0")r="0";else if(typeof e=="string"){let o=Number(e);o&&(r=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:r??"0",rest:r==="0"?"000":"",symbol:t}},getApiUrl(){return V.W3M_API_URL},getBlockchainApiUrl(){return V.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return V.PULSE_API_URL},getUUID(){return crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})},parseError(e){return typeof e=="string"?e:typeof e?.issues?.[0]?.message=="string"?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},sortRequestedNetworks(e,t=[]){let r={};return t&&e&&(e.forEach((o,n)=>{r[o]=n}),t.sort((o,n)=>{let s=r[o.id],a=r[n.id];return s!==void 0&&a!==void 0?s-a:s!==void 0?-1:a!==void 0?1:0})),t},calculateBalance(e){let t=0;for(let r of e)t+=r.value??0;return t},formatTokenBalance(e){let t=e.toFixed(2),[r,o]=t.split(".");return{dollars:r,pennies:o}},isAddress(e,t="eip155"){switch(t){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);default:return!1}},uniqueBy(e,t){let r=new Set;return e.filter(o=>{let n=o[t];return r.has(n)?!1:(r.add(n),!0)})},generateSdkVersion(e,t,r){let n=e.length===0?ee.ADAPTER_TYPES.UNIVERSAL:e.map(s=>s.adapterType).join(",");return`${t}-${n}-${r}`},createAccount(e,t,r,o,n){return{namespace:e,address:t,type:r,publicKey:o,path:n}},isCaipAddress(e){if(typeof e!="string")return!1;let t=e.split(":"),r=t[0];return t.filter(Boolean).length===3&&r in V.CHAIN_NAME_MAP},isMac(){let e=window?.navigator.userAgent.toLowerCase();return e.includes("macintosh")&&!e.includes("safari")},formatTelegramSocialLoginUrl(e){let t=`--${encodeURIComponent(window?.location.href)}`,r="state=";if(new URL(e).host==="auth.magic.link"){let n="provider_authorization_url=",s=e.substring(e.indexOf(n)+n.length),a=this.injectIntoUrl(decodeURIComponent(s),r,t);return e.replace(s,encodeURIComponent(a))}return this.injectIntoUrl(e,r,t)},injectIntoUrl(e,t,r){let o=e.indexOf(t);if(o===-1)throw new Error(`${t} parameter not found in the URL: ${e}`);let n=e.indexOf("&",o),s=t.length,a=n!==-1?n:e.length,c=e.substring(0,o+s),u=e.substring(o+s,a),l=e.substring(n),p=u+r;return c+p+l}};var Bn=Symbol(),oo=Symbol();var Ar=Object.getPrototypeOf,Qt=new WeakMap,no=e=>e&&(Qt.has(e)?Qt.get(e):Ar(e)===Object.prototype||Ar(e)===Array.prototype);var Sr=e=>no(e)&&e[oo]||null,Zt=(e,t=!0)=>{Qt.set(e,t)};var er=e=>typeof e=="object"&&e!==null,Oe=new WeakMap,ct=new WeakSet,so=(e=Object.is,t=(l,p)=>new Proxy(l,p),r=l=>er(l)&&!ct.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),o=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},n=new WeakMap,s=(l,p,f=o)=>{let I=n.get(l);if(I?.[0]===p)return I[1];let h=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return Zt(h,!0),n.set(l,[p,h]),Reflect.ownKeys(l).forEach(J=>{if(Object.getOwnPropertyDescriptor(h,J))return;let d=Reflect.get(l,J),{enumerable:b}=Reflect.getOwnPropertyDescriptor(l,J),U={value:d,enumerable:b,configurable:!0};if(ct.has(d))Zt(d,!1);else if(d instanceof Promise)delete U.value,U.get=()=>f(d);else if(Oe.has(d)){let[te,K]=Oe.get(d);U.value=s(te,K(),f)}Object.defineProperty(h,J,U)}),Object.preventExtensions(h)},a=new WeakMap,c=[1,1],u=l=>{if(!er(l))throw new Error("object required");let p=a.get(l);if(p)return p;let f=c[0],I=new Set,h=(D,O=++c[0])=>{f!==O&&(f=O,I.forEach(R=>R(D,O)))},J=c[1],d=(D=++c[1])=>(J!==D&&!I.size&&(J=D,U.forEach(([O])=>{let R=O[1](D);R>f&&(f=R)})),f),b=D=>(O,R)=>{let ne=[...O];ne[1]=[D,...ne[1]],h(ne,R)},U=new Map,te=(D,O)=>{if((import.meta.env?import.meta.env.MODE:void 0)!=="production"&&U.has(D))throw new Error("prop listener already exists");if(I.size){let R=O[3](b(D));U.set(D,[O,R])}else U.set(D,[O])},K=D=>{var O;let R=U.get(D);R&&(U.delete(D),(O=R[1])==null||O.call(R))},X=D=>(I.add(D),I.size===1&&U.forEach(([R,ne],Ae)=>{if((import.meta.env?import.meta.env.MODE:void 0)!=="production"&&ne)throw new Error("remove already exists");let ke=R[3](b(Ae));U.set(Ae,[R,ke])}),()=>{I.delete(D),I.size===0&&U.forEach(([R,ne],Ae)=>{ne&&(ne(),U.set(Ae,[R]))})}),Z=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),oe=t(Z,{deleteProperty(D,O){let R=Reflect.get(D,O);K(O);let ne=Reflect.deleteProperty(D,O);return ne&&h(["delete",[O],R]),ne},set(D,O,R,ne){let Ae=Reflect.has(D,O),ke=Reflect.get(D,O,ne);if(Ae&&(e(ke,R)||a.has(R)&&e(ke,a.get(R))))return!0;K(O),er(R)&&(R=Sr(R)||R);let pe=R;if(R instanceof Promise)R.then(Se=>{R.status="fulfilled",R.value=Se,h(["resolve",[O],Se])}).catch(Se=>{R.status="rejected",R.reason=Se,h(["reject",[O],Se])});else{!Oe.has(R)&&r(R)&&(pe=u(R));let Se=!ct.has(pe)&&Oe.get(pe);Se&&te(O,Se)}return Reflect.set(D,O,pe,ne),h(["set",[O],R,ke]),!0}});a.set(l,oe);let Re=[Z,d,s,X];return Oe.set(oe,Re),Reflect.ownKeys(l).forEach(D=>{let O=Object.getOwnPropertyDescriptor(l,D);"value"in O&&(oe[D]=l[D],delete O.value,delete O.writable),Object.defineProperty(Z,D,O)}),oe})=>[u,Oe,ct,e,t,r,o,n,s,a,c],[io]=so();function y(e={}){return io(e)}function $(e,t,r){let o=Oe.get(e);(import.meta.env?import.meta.env.MODE:void 0)!=="production"&&!o&&console.warn("Please use proxy object");let n,s=[],a=o[3],c=!1,l=a(p=>{if(s.push(p),r){t(s.splice(0));return}n||(n=Promise.resolve().then(()=>{n=void 0,c&&t(s.splice(0))}))});return c=!0,()=>{c=!1,l()}}function Ie(e,t){let r=Oe.get(e);(import.meta.env?import.meta.env.MODE:void 0)!=="production"&&!r&&console.warn("Please use proxy object");let[o,n,s]=r;return s(o,n(),t)}function Ce(e){return ct.add(e),e}function L(e,t,r,o){let n=e[t];return $(e,()=>{let s=e[t];Object.is(n,s)||r(n=s)},o)}var qn=Symbol();function yr(e){let t=y({data:Array.from(e||[]),has(r){return this.data.some(o=>o[0]===r)},set(r,o){let n=this.data.find(s=>s[0]===r);return n?n[1]=o:this.data.push([r,o]),this},get(r){var o;return(o=this.data.find(n=>n[0]===r))==null?void 0:o[1]},delete(r){let o=this.data.findIndex(n=>n[0]===r);return o===-1?!1:(this.data.splice(o,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(r){this.data.forEach(o=>{r(o[1],o[0],this)})},keys(){return this.data.map(r=>r[0]).values()},values(){return this.data.map(r=>r[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(t,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(t),t}var Ir={getFeatureValue(e,t){let r=t?.[e];return r===void 0?ee.DEFAULT_FEATURES[e]:r},filterSocialsByPlatform(e){if(!e||!e.length)return e;if(S.isTelegram()){if(S.isIos())return e.filter(t=>t!=="google");if(S.isMac())return e.filter(t=>t!=="x");if(S.isAndroid())return e.filter(t=>!["facebook","x"].includes(t))}return e}};var g=y({features:ee.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:ee.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{}}),_={state:g,subscribeKey(e,t){return L(g,e,t)},setOptions(e){Object.assign(g,e)},setRemoteFeatures(e){if(!e)return;let t={...g.remoteFeatures,...e};g.remoteFeatures=t,g.remoteFeatures?.socials&&(g.remoteFeatures.socials=Ir.filterSocialsByPlatform(g.remoteFeatures.socials))},setFeatures(e){if(!e)return;g.features||(g.features=ee.DEFAULT_FEATURES);let t={...g.features,...e};g.features=t},setProjectId(e){g.projectId=e},setCustomRpcUrls(e){g.customRpcUrls=e},setAllWallets(e){g.allWallets=e},setIncludeWalletIds(e){g.includeWalletIds=e},setExcludeWalletIds(e){g.excludeWalletIds=e},setFeaturedWalletIds(e){g.featuredWalletIds=e},setTokens(e){g.tokens=e},setTermsConditionsUrl(e){g.termsConditionsUrl=e},setPrivacyPolicyUrl(e){g.privacyPolicyUrl=e},setCustomWallets(e){g.customWallets=e},setIsSiweEnabled(e){g.isSiweEnabled=e},setIsUniversalProvider(e){g.isUniversalProvider=e},setSdkVersion(e){g.sdkVersion=e},setMetadata(e){g.metadata=e},setDisableAppend(e){g.disableAppend=e},setEIP6963Enabled(e){g.enableEIP6963=e},setDebug(e){g.debug=e},setEnableWalletConnect(e){g.enableWalletConnect=e},setEnableWalletGuide(e){g.enableWalletGuide=e},setEnableAuthLogger(e){g.enableAuthLogger=e},setEnableWallets(e){g.enableWallets=e},setPreferUniversalLinks(e){g.experimental_preferUniversalLinks=e},setHasMultipleAddresses(e){g.hasMultipleAddresses=e},setSIWX(e){g.siwx=e},setConnectMethodsOrder(e){g.features={...g.features,connectMethodsOrder:e}},setWalletFeaturesOrder(e){g.features={...g.features,walletFeaturesOrder:e}},setSocialsOrder(e){g.remoteFeatures={...g.remoteFeatures,socials:e}},setCollapseWallets(e){g.features={...g.features,collapseWallets:e}},setEnableEmbedded(e){g.enableEmbedded=e},setAllowUnsupportedChain(e){g.allowUnsupportedChain=e},setManualWCControl(e){g.manualWCControl=e},setEnableNetworkSwitch(e){g.enableNetworkSwitch=e},setDefaultAccountTypes(e={}){Object.entries(e).forEach(([t,r])=>{r&&(g.defaultAccountTypes[t]=r)})},setUniversalProviderConfigOverride(e){g.universalProviderConfigOverride=e},getUniversalProviderConfigOverride(){return g.universalProviderConfigOverride},getSnapshot(){return Ie(g)}};async function lt(...e){let t=await fetch(...e);if(!t.ok)throw new Error(`HTTP status code: ${t.status}`,{cause:t});return t}var Ee=class{constructor({baseUrl:t,clientId:r}){this.baseUrl=t,this.clientId=r}async get({headers:t,signal:r,cache:o,...n}){let s=this.createUrl(n);return(await lt(s,{method:"GET",headers:t,signal:r,cache:o})).json()}async getBlob({headers:t,signal:r,...o}){let n=this.createUrl(o);return(await lt(n,{method:"GET",headers:t,signal:r})).blob()}async post({body:t,headers:r,signal:o,...n}){let s=this.createUrl(n);return(await lt(s,{method:"POST",headers:r,body:t?JSON.stringify(t):void 0,signal:o})).json()}async put({body:t,headers:r,signal:o,...n}){let s=this.createUrl(n);return(await lt(s,{method:"PUT",headers:r,body:t?JSON.stringify(t):void 0,signal:o})).json()}async delete({body:t,headers:r,signal:o,...n}){let s=this.createUrl(n);return(await lt(s,{method:"DELETE",headers:r,body:t?JSON.stringify(t):void 0,signal:o})).json()}createUrl({path:t,params:r}){let o=new URL(t,this.baseUrl);return r&&Object.entries(r).forEach(([n,s])=>{s&&o.searchParams.append(n,s)}),this.clientId&&o.searchParams.append("clientId",this.clientId),o}};var ao=Object.freeze({enabled:!0,events:[]}),co=new Ee({baseUrl:S.getAnalyticsUrl(),clientId:null}),lo=5,uo=60*1e3,Ue=y({...ao}),Nr={state:Ue,subscribeKey(e,t){return L(Ue,e,t)},async sendError(e,t){if(!Ue.enabled)return;let r=Date.now();if(Ue.events.filter(s=>{let a=new Date(s.properties.timestamp||"").getTime();return r-a<uo}).length>=lo)return;let n={type:"error",event:t,properties:{errorType:e.name,errorMessage:e.message,stackTrace:e.stack,timestamp:new Date().toISOString()}};Ue.events.push(n);try{if(typeof window>"u")return;let{projectId:s,sdkType:a,sdkVersion:c}=_.state;await co.post({path:"/e",params:{projectId:s,st:a,sv:c||"html-wagmi-4.2.2"},body:{eventId:S.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:new Date().toISOString(),props:{type:"error",event:t,errorType:e.name,errorMessage:e.message,stackTrace:e.stack}}})}catch{}},enable(){Ue.enabled=!0},disable(){Ue.enabled=!1},clearEvents(){Ue.events=[]}};var Xe=class e extends Error{constructor(t,r,o){super(t),this.name="AppKitError",this.category=r,this.originalError=o,Object.setPrototypeOf(this,e.prototype);let n=!1;if(o instanceof Error&&typeof o.stack=="string"&&o.stack){let s=o.stack,a=s.indexOf(`
`);if(a>-1){let c=s.substring(a+1);this.stack=`${this.name}: ${this.message}
${c}`,n=!0}}n||(Error.captureStackTrace?Error.captureStackTrace(this,e):this.stack||(this.stack=`${this.name}: ${this.message}`))}};function _r(e,t){let r=e instanceof Xe?e:new Xe(e instanceof Error?e.message:String(e),t,e);throw Nr.sendError(r,r.category),r}function j(e,t="INTERNAL_SDK_ERROR"){let r={};return Object.keys(e).forEach(o=>{let n=e[o];if(typeof n=="function"){let s=n;n.constructor.name==="AsyncFunction"?s=async(...a)=>{try{return await n(...a)}catch(c){return _r(c,t)}}:s=(...a)=>{try{return n(...a)}catch(c){return _r(c,t)}},r[o]=s}else r[o]=n}),r}var de=y({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),po={state:de,subscribeNetworkImages(e){return $(de.networkImages,()=>e(de.networkImages))},subscribeKey(e,t){return L(de,e,t)},subscribe(e){return $(de,()=>e(de))},setWalletImage(e,t){de.walletImages[e]=t},setNetworkImage(e,t){de.networkImages[e]=t},setChainImage(e,t){de.chainImages[e]=t},setConnectorImage(e,t){de.connectorImages={...de.connectorImages,[e]:t}},setTokenImage(e,t){de.tokenImages[e]=t},setCurrencyImage(e,t){de.currencyImages[e]=t}},ie=j(po);var mo={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00",cosmos:""},tr=y({networkImagePromises:{}}),rr={async fetchWalletImage(e){if(e)return await E._fetchWalletImage(e),this.getWalletImageById(e)},async fetchNetworkImage(e){if(!e)return;let t=this.getNetworkImageById(e);return t||(tr.networkImagePromises[e]||(tr.networkImagePromises[e]=E._fetchNetworkImage(e)),await tr.networkImagePromises[e],this.getNetworkImageById(e))},getWalletImageById(e){if(e)return ie.state.walletImages[e]},getWalletImage(e){if(e?.image_url)return e?.image_url;if(e?.image_id)return ie.state.walletImages[e.image_id]},getNetworkImage(e){if(e?.assets?.imageUrl)return e?.assets?.imageUrl;if(e?.assets?.imageId)return ie.state.networkImages[e.assets.imageId]},getNetworkImageById(e){if(e)return ie.state.networkImages[e]},getConnectorImage(e){if(e?.imageUrl)return e.imageUrl;if(e?.imageId)return ie.state.connectorImages[e.imageId]},getChainImage(e){return ie.state.networkImages[mo[e]]}};var be={PHANTOM:{id:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",url:"https://phantom.app"},SOLFLARE:{id:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",url:"https://solflare.com"},COINBASE:{id:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",url:"https://go.cb-w.com"}},Tr={handleMobileDeeplinkRedirect(e,t){let r=window.location.href,o=encodeURIComponent(r);if(e===be.PHANTOM.id&&!("phantom"in window)){let n=r.startsWith("https")?"https":"http",s=r.split("/")[2],a=encodeURIComponent(`${n}://${s}`);window.location.href=`${be.PHANTOM.url}/ul/browse/${o}?ref=${a}`}e===be.SOLFLARE.id&&!("solflare"in window)&&(window.location.href=`${be.SOLFLARE.url}/ul/v1/browse/${o}?ref=${o}`),t===V.CHAIN.SOLANA&&e===be.COINBASE.id&&!("coinbaseSolana"in window)&&(window.location.href=`${be.COINBASE.url}/dapp?cb_url=${o}`)}};var Ve=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),re=y({...Ve}),fo={state:re,subscribeKey(e,t){return L(re,e,t)},showLoading(e,t={}){this._showMessage({message:e,variant:"loading",...t})},showSuccess(e){this._showMessage({message:e,variant:"success"})},showSvg(e,t){this._showMessage({message:e,svg:t})},showError(e){let t=S.parseError(e);this._showMessage({message:t,variant:"error"})},hide(){re.message=Ve.message,re.variant=Ve.variant,re.svg=Ve.svg,re.open=Ve.open,re.autoClose=Ve.autoClose},_showMessage({message:e,svg:t,variant:r="success",autoClose:o=Ve.autoClose}){re.open?(re.open=!1,setTimeout(()=>{re.message=e,re.variant=r,re.svg=t,re.open=!0,re.autoClose=o},150)):(re.message=e,re.variant=r,re.svg=t,re.open=!0,re.autoClose=o)}},se=fo;var ho={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},xr=S.getBlockchainApiUrl(),ae=y({clientId:null,api:new Ee({baseUrl:xr,clientId:null}),supportedChains:{http:[],ws:[]}}),w={state:ae,async get(e){let{st:t,sv:r}=w.getSdkProperties(),o=_.state.projectId,n={...e.params||{},st:t,sv:r,projectId:o};return ae.api.get({...e,params:n})},getSdkProperties(){let{sdkType:e,sdkVersion:t}=_.state;return{st:e||"unknown",sv:t||"unknown"}},async isNetworkSupported(e){if(!e)return!1;try{ae.supportedChains.http.length||await w.getSupportedNetworks()}catch{return!1}return ae.supportedChains.http.includes(e)},async getSupportedNetworks(){try{let e=await w.get({path:"v1/supported-chains"});return ae.supportedChains=e,e}catch{return ae.supportedChains}},async fetchIdentity({address:e,caipNetworkId:t}){if(!await w.isNetworkSupported(t))return{avatar:"",name:""};let o=C.getIdentityFromCacheForAddress(e);if(o)return o;let n=await w.get({path:`/v1/identity/${e}`,params:{sender:i.state.activeCaipAddress?S.getPlainAddress(i.state.activeCaipAddress):void 0}});return C.updateIdentityCache({address:e,identity:n,timestamp:Date.now()}),n},async fetchTransactions({account:e,cursor:t,onramp:r,signal:o,cache:n,chainId:s}){return await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)?w.get({path:`/v1/account/${e}/history`,params:{cursor:t,onramp:r,chainId:s},signal:o,cache:n}):{data:[],next:void 0}},async fetchSwapQuote({amount:e,userAddress:t,from:r,to:o,gasPrice:n}){return await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)?w.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:e,userAddress:t,from:r,to:o,gasPrice:n}}):{quotes:[]}},async fetchSwapTokens({chainId:e}){return await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)?w.get({path:"/v1/convert/tokens",params:{chainId:e}}):{tokens:[]}},async fetchTokenPrice({addresses:e}){return await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)?ae.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:e,projectId:_.state.projectId},headers:{"Content-Type":"application/json"}}):{fungibles:[]}},async fetchSwapAllowance({tokenAddress:e,userAddress:t}){return await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)?w.get({path:"/v1/convert/allowance",params:{tokenAddress:e,userAddress:t},headers:{"Content-Type":"application/json"}}):{allowance:"0"}},async fetchGasPrice({chainId:e}){let{st:t,sv:r}=w.getSdkProperties();if(!await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))throw new Error("Network not supported for Gas Price");return w.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:e,st:t,sv:r}})},async generateSwapCalldata({amount:e,from:t,to:r,userAddress:o,disableEstimate:n}){if(!await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))throw new Error("Network not supported for Swaps");return ae.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:ee.CONVERT_SLIPPAGE_TOLERANCE},projectId:_.state.projectId,from:t,to:r,userAddress:o,disableEstimate:n}})},async generateApproveCalldata({from:e,to:t,userAddress:r}){let{st:o,sv:n}=w.getSdkProperties();if(!await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))throw new Error("Network not supported for Swaps");return w.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:r,from:e,to:t,st:o,sv:n}})},async getBalance(e,t,r){let{st:o,sv:n}=w.getSdkProperties();if(!await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))return se.showError("Token Balance Unavailable"),{balances:[]};let a=`${t}:${e}`,c=C.getBalanceCacheForCaipAddress(a);if(c)return c;let u=await w.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",chainId:t,forceUpdate:r,st:o,sv:n}});return C.updateBalanceCache({caipAddress:a,balance:u,timestamp:Date.now()}),u},async lookupEnsName(e){return await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)?w.get({path:`/v1/profile/account/${e}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]}},async reverseLookupEnsName({address:e}){return await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)?w.get({path:`/v1/profile/reverse/${e}`,params:{sender:k.state.address,apiVersion:"2"}}):[]},async getEnsNameSuggestions(e){return await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)?w.get({path:`/v1/profile/suggestions/${e}`,params:{zone:"reown.id"}}):{suggestions:[]}},async registerEnsName({coinType:e,address:t,message:r,signature:o}){return await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)?ae.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:r,signature:o},headers:{"Content-Type":"application/json"}}):{success:!1}},async generateOnRampURL({destinationWallets:e,partnerUserId:t,defaultNetwork:r,purchaseAmount:o,paymentAmount:n}){return await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)?(await ae.api.post({path:"/v1/generators/onrampurl",params:{projectId:_.state.projectId},body:{destinationWallets:e,defaultNetwork:r,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:o,presetFiatAmount:n}})).url:""},async getOnrampOptions(){if(!await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await w.get({path:"/v1/onramp/options"})}catch{return ho}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:r,network:o}){try{return await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)?await ae.api.post({path:"/v1/onramp/quote",params:{projectId:_.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:r,network:o}}):null}catch{return{coinbaseFee:{amount:r,currency:t.id},networkFee:{amount:r,currency:t.id},paymentSubtotal:{amount:r,currency:t.id},paymentTotal:{amount:r,currency:t.id},purchaseAmount:{amount:r,currency:t.id},quoteId:"mocked-quote-id"}}},async getSmartSessions(e){return await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)?w.get({path:`/v1/sessions/${e}`}):[]},async revokeSmartSession(e,t,r){return await w.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)?ae.api.post({path:`/v1/sessions/${e}/revoke`,params:{projectId:_.state.projectId},body:{pci:t,signature:r}}):{success:!1}},setClientId(e){ae.clientId=e,ae.api=new Ee({baseUrl:xr,clientId:e})}};var he=y({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),wo={state:he,replaceState(e){e&&Object.assign(he,Ce(e))},subscribe(e){return i.subscribeChainProp("accountState",t=>{if(t)return e(t)})},subscribeKey(e,t,r){let o;return i.subscribeChainProp("accountState",n=>{if(n){let s=n[e];o!==s&&(o=s,t(s))}},r)},setStatus(e,t){i.setAccountProp("status",e,t)},getCaipAddress(e){return i.getAccountProp("caipAddress",e)},setCaipAddress(e,t){let r=e?S.getPlainAddress(e):void 0;t===i.state.activeChain&&(i.state.activeCaipAddress=e),i.setAccountProp("caipAddress",e,t),i.setAccountProp("address",r,t)},setBalance(e,t,r){i.setAccountProp("balance",e,r),i.setAccountProp("balanceSymbol",t,r)},setProfileName(e,t){i.setAccountProp("profileName",e,t)},setProfileImage(e,t){i.setAccountProp("profileImage",e,t)},setUser(e,t){i.setAccountProp("user",e,t)},setAddressExplorerUrl(e,t){i.setAccountProp("addressExplorerUrl",e,t)},setSmartAccountDeployed(e,t){i.setAccountProp("smartAccountDeployed",e,t)},setCurrentTab(e){i.setAccountProp("currentTab",e,i.state.activeChain)},setTokenBalance(e,t){e&&i.setAccountProp("tokenBalance",e,t)},setShouldUpdateToAddress(e,t){i.setAccountProp("shouldUpdateToAddress",e,t)},setAllAccounts(e,t){i.setAccountProp("allAccounts",e,t)},addAddressLabel(e,t,r){let o=i.getAccountProp("addressLabels",r)||new Map;o.set(e,t),i.setAccountProp("addressLabels",o,r)},removeAddressLabel(e,t){let r=i.getAccountProp("addressLabels",t)||new Map;r.delete(e),i.setAccountProp("addressLabels",r,t)},setConnectedWalletInfo(e,t){i.setAccountProp("connectedWalletInfo",e,t,!1)},setPreferredAccountType(e,t){i.setAccountProp("preferredAccountTypes",{...he.preferredAccountTypes,[t]:e},t)},setPreferredAccountTypes(e){he.preferredAccountTypes=e},setSocialProvider(e,t){e&&i.setAccountProp("socialProvider",e,t)},setSocialWindow(e,t){i.setAccountProp("socialWindow",e?Ce(e):void 0,t)},setFarcasterUrl(e,t){i.setAccountProp("farcasterUrl",e,t)},async fetchTokenBalance(e){he.balanceLoading=!0;let t=i.state.activeCaipNetwork?.caipNetworkId,r=i.state.activeCaipNetwork?.chainNamespace,o=i.state.activeCaipAddress,n=o?S.getPlainAddress(o):void 0;if(he.lastRetry&&!S.isAllowedRetry(he.lastRetry,30*ee.ONE_SEC_MS))return he.balanceLoading=!1,[];try{if(n&&t&&r){let a=(await w.getBalance(n,t)).balances.filter(c=>c.quantity.decimals!=="0");return k.setTokenBalance(a,r),he.lastRetry=void 0,he.balanceLoading=!1,a}}catch(s){he.lastRetry=Date.now(),e?.(s),se.showError("Token Balance Unavailable")}finally{he.balanceLoading=!1}return[]},resetAccount(e){i.resetAccount(e)}},k=j(wo);var Pr={onSwitchNetwork({network:e,ignoreSwitchConfirmation:t=!1}){let r=i.state.activeCaipNetwork,o=v.state.data;if(e.id===r?.id)return;let s=k.getCaipAddress(i.state.activeChain),a=e.chainNamespace!==i.state.activeChain,c=k.getCaipAddress(e.chainNamespace),l=A.getConnectorId(i.state.activeChain)===V.CONNECTOR_ID.AUTH,p=V.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(f=>f===e.chainNamespace);t||l&&p?v.push("SwitchNetwork",{...o,network:e}):s&&a&&!c?v.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):v.push("SwitchNetwork",{...o,network:e})}};var De=y({message:"",variant:"info",open:!1}),go={state:De,subscribeKey(e,t){return L(De,e,t)},open(e,t){let{debug:r}=_.state,{shortMessage:o,longMessage:n}=e;r&&(De.message=o,De.variant=t,De.open=!0),n&&console.error(typeof n=="function"?n():n)},close(){De.open=!1,De.message="",De.variant="info"}},or=j(go);var Co=S.getAnalyticsUrl(),Eo=new Ee({baseUrl:Co,clientId:null}),bo=["MODAL_CREATED"],_e=y({timestamp:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"}}),z={state:_e,subscribe(e){return $(_e,()=>e(_e))},getSdkProperties(){let{projectId:e,sdkType:t,sdkVersion:r}=_.state;return{projectId:e,st:t,sv:r||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(e){try{let t=k.state.address;if(bo.includes(e.data.event)||typeof window>"u")return;await Eo.post({path:"/e",params:z.getSdkProperties(),body:{eventId:S.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:{...e.data,address:t}}}),_e.reportedErrors.FORBIDDEN=!1}catch(t){t instanceof Error&&t.cause instanceof Response&&t.cause.status===V.HTTP_STATUS_CODES.FORBIDDEN&&!_e.reportedErrors.FORBIDDEN&&(or.open({shortMessage:"Invalid App Configuration",longMessage:`Origin ${qe()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`},"error"),_e.reportedErrors.FORBIDDEN=!0)}},sendEvent(e){_e.timestamp=Date.now(),_e.data=e,_.state.features?.analytics&&z._sendAnalyticsEvent(_e)}};var Je=y({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1}),Te={state:Je,subscribe(e){return $(Je,()=>e(Je))},subscribeOpen(e){return L(Je,"open",e)},set(e){Object.assign(Je,{...Je,...e})}};var ce=y({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),vo={state:ce,subscribe(e){return $(ce,()=>e(ce))},subscribeKey(e,t){return L(ce,e,t)},async open(e){let t=k.state.status==="connected",r=e?.namespace,o=i.state.activeChain,n=r&&r!==o,s=i.getAccountData(e?.namespace)?.caipAddress;if(T.state.wcBasic?E.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1}):await E.prefetch({fetchConnectorImages:!t,fetchFeaturedWallets:!t,fetchRecommendedWallets:!t}),A.setFilterByNamespace(e?.namespace),Q.setLoading(!0,r),r&&n){let a=i.getNetworkData(r)?.caipNetwork||i.getRequestedCaipNetworks(r)[0];a&&Pr.onSwitchNetwork({network:a,ignoreSwitchConfirmation:!0})}else{let a=i.state.noAdapters;_.state.manualWCControl||a&&!s?S.isMobile()?v.reset("AllWallets"):v.reset("ConnectingWalletConnectBasic"):e?.view?v.reset(e.view,e.data):s?v.reset("Account"):v.reset("Connect")}ce.open=!0,Te.set({open:!0}),z.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!s}})},close(){let e=_.state.enableEmbedded,t=!!i.state.activeCaipAddress;ce.open&&z.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}}),ce.open=!1,v.reset("Connect"),Q.clearLoading(),e?t?v.replace("Account"):v.push("Connect"):Te.set({open:!1}),T.resetUri()},setLoading(e,t){t&&ce.loadingNamespaceMap.set(t,e),ce.loading=e,Te.set({loading:e})},clearLoading(){ce.loadingNamespaceMap.clear(),ce.loading=!1},shake(){ce.shake||(ce.shake=!0,setTimeout(()=>{ce.shake=!1},500))}},Q=j(vo);var q=y({view:"Connect",history:["Connect"],transactionStack:[]}),Ao={state:q,subscribeKey(e,t){return L(q,e,t)},pushTransactionStack(e){q.transactionStack.push(e)},popTransactionStack(e){let t=q.transactionStack.pop();if(!t)return;let{onSuccess:r,onError:o,onCancel:n}=t;switch(e){case"success":r?.();break;case"error":o?.(),v.goBack();break;case"cancel":n?.(),v.goBack();break;default:}},push(e,t){e!==q.view&&(q.view=e,q.history.push(e),q.data=t)},reset(e,t){q.view=e,q.history=[e],q.data=t},replace(e,t){q.history.at(-1)===e||(q.view=e,q.history[q.history.length-1]=e,q.data=t)},goBack(){let e=i.state.activeCaipAddress,t=v.state.view==="ConnectingFarcaster",r=!e&&t;if(q.history.length>1){q.history.pop();let[o]=q.history.slice(-1);o&&(e&&o==="Connect"?q.view="Account":q.view=o)}else Q.close();q.data?.wallet&&(q.data.wallet=void 0),setTimeout(()=>{if(r){k.setFarcasterUrl(void 0,i.state.activeChain);let o=A.getAuthConnector();o?.provider?.reload();let n=Ie(_.state);o?.provider?.syncDappData?.({metadata:n.metadata,sdkVersion:n.sdkVersion,projectId:n.projectId,sdkType:n.sdkType})}},100)},goBackToIndex(e){if(q.history.length>1){q.history=q.history.slice(0,e+1);let[t]=q.history.slice(-1);t&&(q.view=t)}},goBackOrCloseModal(){v.state.history.length>1?v.goBack():Q.close()}},v=j(Ao);var xe=y({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),nr={state:xe,subscribe(e){return $(xe,()=>e(xe))},setThemeMode(e){xe.themeMode=e;try{let t=A.getAuthConnector();if(t){let r=nr.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:r,w3mThemeVariables:fe(r,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){xe.themeVariables={...xe.themeVariables,...e};try{let t=A.getAuthConnector();if(t){let r=nr.getSnapshot().themeVariables;t.provider.syncTheme({themeVariables:r,w3mThemeVariables:fe(xe.themeVariables,xe.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return Ie(xe)}},Qe=j(nr);var Rr={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0,cosmos:void 0},B=y({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:{...Rr},filterByNamespaceMap:{eip155:!0,solana:!0,polkadot:!0,bip122:!0,cosmos:!0}}),So={state:B,subscribe(e){return $(B,()=>{e(B)})},subscribeKey(e,t){return L(B,e,t)},initialize(e){e.forEach(t=>{let r=C.getConnectedConnectorId(t);r&&A.setConnectorId(r,t)})},setActiveConnector(e){e&&(B.activeConnector=Ce(e))},setConnectors(e){e.filter(n=>!B.allConnectors.some(s=>s.id===n.id&&A.getConnectorName(s.name)===A.getConnectorName(n.name)&&s.chain===n.chain)).forEach(n=>{n.type!=="MULTI_CHAIN"&&B.allConnectors.push(Ce(n))});let r=A.getEnabledNamespaces(),o=A.getEnabledConnectors(r);B.connectors=A.mergeMultiChainConnectors(o)},filterByNamespaces(e){Object.keys(B.filterByNamespaceMap).forEach(t=>{B.filterByNamespaceMap[t]=!1}),e.forEach(t=>{B.filterByNamespaceMap[t]=!0}),A.updateConnectorsForEnabledNamespaces()},filterByNamespace(e,t){B.filterByNamespaceMap[e]=t,A.updateConnectorsForEnabledNamespaces()},updateConnectorsForEnabledNamespaces(){let e=A.getEnabledNamespaces(),t=A.getEnabledConnectors(e),r=A.areAllNamespacesEnabled();B.connectors=A.mergeMultiChainConnectors(t),r?E.clearFilterByNamespaces():E.filterByNamespaces(e)},getEnabledNamespaces(){return Object.entries(B.filterByNamespaceMap).filter(([e,t])=>t).map(([e])=>e)},getEnabledConnectors(e){return B.allConnectors.filter(t=>e.includes(t.chain))},areAllNamespacesEnabled(){return Object.values(B.filterByNamespaceMap).every(e=>e)},mergeMultiChainConnectors(e){let t=A.generateConnectorMapByName(e),r=[];return t.forEach(o=>{let n=o[0],s=n?.id===V.CONNECTOR_ID.AUTH;o.length>1&&n?r.push({name:n.name,imageUrl:n.imageUrl,imageId:n.imageId,connectors:[...o],type:s?"AUTH":"MULTI_CHAIN",chain:"eip155",id:n?.id||""}):n&&r.push(n)}),r},generateConnectorMapByName(e){let t=new Map;return e.forEach(r=>{let{name:o}=r,n=A.getConnectorName(o);if(!n)return;let s=t.get(n)||[];s.find(c=>c.chain===r.chain)||s.push(r),t.set(n,s)}),t},getConnectorName(e){return e&&({"Trust Wallet":"Trust"}[e]||e)},getUniqueConnectorsByName(e){let t=[];return e.forEach(r=>{t.find(o=>o.chain===r.chain)||t.push(r)}),t},addConnector(e){if(e.id===V.CONNECTOR_ID.AUTH){let t=e,r=Ie(_.state),o=Qe.getSnapshot().themeMode,n=Qe.getSnapshot().themeVariables;t?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,projectId:r.projectId,sdkType:r.sdkType}),t?.provider?.syncTheme({themeMode:o,themeVariables:n,w3mThemeVariables:fe(n,o)}),A.setConnectors([e])}else A.setConnectors([e])},getAuthConnector(e){let t=e||i.state.activeChain,r=B.connectors.find(o=>o.id===V.CONNECTOR_ID.AUTH);if(r)return r?.connectors?.length?r.connectors.find(n=>n.chain===t):r},getAnnouncedConnectorRdns(){return B.connectors.filter(e=>e.type==="ANNOUNCED").map(e=>e.info?.rdns)},getConnectorById(e){return B.allConnectors.find(t=>t.id===e)},getConnector(e,t){return B.allConnectors.filter(o=>o.chain===i.state.activeChain).find(o=>o.explorerId===e||o.info?.rdns===t)},syncIfAuthConnector(e){if(e.id!=="ID_AUTH")return;let t=e,r=Ie(_.state),o=Qe.getSnapshot().themeMode,n=Qe.getSnapshot().themeVariables;t?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,sdkType:r.sdkType,projectId:r.projectId}),t.provider.syncTheme({themeMode:o,themeVariables:n,w3mThemeVariables:fe(n,o)})},getConnectorsByNamespace(e){let t=B.allConnectors.filter(r=>r.chain===e);return A.mergeMultiChainConnectors(t)},selectWalletConnector(e){let t=A.getConnector(e.id,e.rdns),r=i.state.activeChain;Tr.handleMobileDeeplinkRedirect(t?.explorerId||e.id,r),t?v.push("ConnectingExternal",{connector:t}):v.push("ConnectingWalletConnect",{wallet:e})},getConnectors(e){return e?A.getConnectorsByNamespace(e):A.mergeMultiChainConnectors(B.allConnectors)},setFilterByNamespace(e){B.filterByNamespace=e,B.connectors=A.getConnectors(e),E.setFilterByNamespace(e)},setConnectorId(e,t){e&&(B.activeConnectorIds={...B.activeConnectorIds,[t]:e},C.setConnectedConnectorId(t,e))},removeConnectorId(e){B.activeConnectorIds={...B.activeConnectorIds,[e]:void 0},C.deleteConnectedConnectorId(e)},getConnectorId(e){if(e)return B.activeConnectorIds[e]},isConnected(e){return e?!!B.activeConnectorIds[e]:Object.values(B.activeConnectorIds).some(t=>!!t)},resetConnectorIds(){B.activeConnectorIds={...Rr}}},A=j(So);var yo="https://secure.walletconnect.org/sdk",Xi=(typeof process<"u"&&typeof process.env<"u"?process.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL:void 0)||yo,Ji=(typeof process<"u"&&typeof process.env<"u"?process.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL:void 0)||"error",Qi=(typeof process<"u"&&typeof process.env<"u"?process.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION:void 0)||"4";var Pe={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};var G=y({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),Io={state:G,subscribe(e){return $(G,()=>e(G))},setLastNetworkInView(e){G.lastNetworkInView=e},async fetchTransactions(e,t){if(!e)throw new Error("Transactions can't be fetched without an accountAddress");G.loading=!0;try{let r=await w.fetchTransactions({account:e,cursor:G.next,onramp:t,cache:t==="coinbase"?"no-cache":void 0,chainId:i.state.activeCaipNetwork?.caipNetworkId}),o=Ze.filterSpamTransactions(r.data),n=Ze.filterByConnectedChain(o),s=[...G.transactions,...n];G.loading=!1,t==="coinbase"?G.coinbaseTransactions=Ze.groupTransactionsByYearAndMonth(G.coinbaseTransactions,r.data):(G.transactions=s,G.transactionsByYear=Ze.groupTransactionsByYearAndMonth(G.transactionsByYear,n)),G.empty=s.length===0,G.next=r.next?r.next:void 0}catch{let o=i.state.activeChain;z.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:_.state.projectId,cursor:G.next,isSmartAccount:k.state.preferredAccountTypes?.[o]===Pe.ACCOUNT_TYPES.SMART_ACCOUNT}}),se.showError("Failed to fetch transactions"),G.loading=!1,G.empty=!0,G.next=void 0}},groupTransactionsByYearAndMonth(e={},t=[]){let r=e;return t.forEach(o=>{let n=new Date(o.metadata.minedAt).getFullYear(),s=new Date(o.metadata.minedAt).getMonth(),a=r[n]??{},u=(a[s]??[]).filter(l=>l.id!==o.id);r[n]={...a,[s]:[...u,o].sort((l,p)=>new Date(p.metadata.minedAt).getTime()-new Date(l.metadata.minedAt).getTime())}}),r},filterSpamTransactions(e){return e.filter(t=>!t.transfers.every(o=>o.nft_info?.flags.is_spam===!0))},filterByConnectedChain(e){let t=i.state.activeCaipNetwork?.caipNetworkId;return e.filter(o=>o.metadata.chain===t)},clearCursor(){G.next=void 0},resetTransactions(){G.transactions=[],G.transactionsByYear={},G.lastNetworkInView=void 0,G.loading=!1,G.empty=!1,G.next=void 0}},Ze=j(Io,"API_ERROR");var Y=y({connections:new Map,wcError:!1,buffering:!1,status:"disconnected"}),Ke,No={state:Y,subscribeKey(e,t){return L(Y,e,t)},_getClient(){return Y._client},setClient(e){Y._client=Ce(e)},async connectWalletConnect(){if(S.isTelegram()||S.isSafari()&&S.isIos()){if(Ke){await Ke,Ke=void 0;return}if(!S.isPairingExpired(Y?.wcPairingExpiry)){let e=Y.wcUri;Y.wcUri=e;return}Ke=T._getClient()?.connectWalletConnect?.().catch(()=>{}),T.state.status="connecting",await Ke,Ke=void 0,Y.wcPairingExpiry=void 0,T.state.status="connected"}else await T._getClient()?.connectWalletConnect?.()},async connectExternal(e,t,r=!0){await T._getClient()?.connectExternal?.(e),r&&i.setActiveNamespace(t)},async reconnectExternal(e){await T._getClient()?.reconnectExternal?.(e);let t=e.chain||i.state.activeChain;t&&A.setConnectorId(e.id,t)},async setPreferredAccountType(e,t){Q.setLoading(!0,i.state.activeChain);let r=A.getAuthConnector();r&&(k.setPreferredAccountType(e,t),await r.provider.setPreferredAccount(e),C.setPreferredAccountTypes(k.state.preferredAccountTypes??{[t]:e}),await T.reconnectExternal(r),Q.setLoading(!1,i.state.activeChain),z.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:i.state.activeCaipNetwork?.caipNetworkId||""}}))},async signMessage(e){return T._getClient()?.signMessage(e)},parseUnits(e,t){return T._getClient()?.parseUnits(e,t)},formatUnits(e,t){return T._getClient()?.formatUnits(e,t)},async sendTransaction(e){return T._getClient()?.sendTransaction(e)},async getCapabilities(e){return T._getClient()?.getCapabilities(e)},async grantPermissions(e){return T._getClient()?.grantPermissions(e)},async walletGetAssets(e){return T._getClient()?.walletGetAssets(e)??{}},async estimateGas(e){return T._getClient()?.estimateGas(e)},async writeContract(e){return T._getClient()?.writeContract(e)},async getEnsAddress(e){return T._getClient()?.getEnsAddress(e)},async getEnsAvatar(e){return T._getClient()?.getEnsAvatar(e)},checkInstalled(e){return T._getClient()?.checkInstalled?.(e)||!1},resetWcConnection(){Y.wcUri=void 0,Y.wcPairingExpiry=void 0,Y.wcLinking=void 0,Y.recentWallet=void 0,Y.status="disconnected",Ze.resetTransactions(),C.deleteWalletConnectDeepLink()},resetUri(){Y.wcUri=void 0,Y.wcPairingExpiry=void 0,Ke=void 0},finalizeWcConnection(){let{wcLinking:e,recentWallet:t}=T.state;e&&C.setWalletConnectDeepLink(e),t&&C.setAppKitRecent(t),z.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:v.state.data?.wallet?.name||"Unknown"}})},setWcBasic(e){Y.wcBasic=e},setUri(e){Y.wcUri=e,Y.wcPairingExpiry=S.getPairingExpiry()},setWcLinking(e){Y.wcLinking=e},setWcError(e){Y.wcError=e,Y.buffering=!1},setRecentWallet(e){Y.recentWallet=e},setBuffering(e){Y.buffering=e},setStatus(e){Y.status=e},async disconnect(e){try{await T._getClient()?.disconnect(e)}catch(t){throw new Xe("Failed to disconnect","INTERNAL_SDK_ERROR",t)}},setConnections(e,t){Y.connections.set(t,e)},switchAccount({connection:e,address:t,namespace:r}){if(A.state.activeConnectorIds[r]===e.connectorId){let s=i.state.activeCaipNetwork;if(s){let a=`${r}:${s.id}:${t}`;k.setCaipAddress(a,r)}else console.warn(`No current network found for namespace "${r}"`)}else{let s=A.getConnector(e.connectorId);s?T.connectExternal(s,r):console.warn(`No connector found for namespace "${r}"`)}}},T=j(No);async function wt(e,{signal:t}={}){return new Promise((r,o)=>{if(t?.aborted){o(ge(t));return}let n=()=>t?.removeEventListener("abort",a),s=setTimeout(()=>{n(),r()},e),a=()=>{clearTimeout(s),n(),o(ge(t))};t?.addEventListener("abort",a,{once:!0})})}function kr(e,{delay:t=100,retryCount:r=2,shouldRetry:o=()=>!0,signal:n}={}){return new Promise((s,a)=>{let c=async({count:u=0}={})=>{if(n?.aborted){a(ge(n));return}let l=async({error:p})=>{let f=typeof t=="function"?t({count:u,error:p}):t;if(f)try{await wt(f,{signal:n})}catch(I){a(I);return}c({count:u+1})};try{let p=await e();s(p)}catch(p){if(n?.aborted){a(ge(n));return}if(Ne(p)){a(p);return}if(u<r&&await o({count:u,error:p}))return l({error:p});a(p)}};c()})}var gt=256,Ct;function Or(e=11){if(!Ct||gt+e>256*2){Ct="",gt=0;for(let t=0;t<256;t++)Ct+=(256+Math.random()*256|0).toString(16).substring(1)}return Ct.substring(gt,gt+++e)}var Et=new ur(8192);function Ur(e,{enabled:t=!0,id:r}){if(!t||!r)return e();if(Et.get(r))return Et.get(r);let o=e().finally(()=>Et.delete(r));return Et.set(r,o),o}function Dr(e,t={}){return async(r,o={})=>{let{dedupe:n=!1,methods:s,retryDelay:a=150,retryCount:c=3,signal:u,uid:l}={...t,...o},{method:p}=r;if(s?.exclude?.includes(p))throw new nt(new Error("method not supported"),{method:p});if(s?.include&&!s.include.includes(p))throw new nt(new Error("method not supported"),{method:p});if(u?.aborted)throw ge(u);let f=n?To(`${l}.${ze(r)}`):void 0;return Ur(()=>kr(async()=>{try{return await e(r,u?{signal:u}:void 0)}catch(I){if(u?.aborted)throw ge(u);if(Ne(I))throw I;let h=I;switch(h.code){case _t.code:throw new _t(h);case Tt.code:throw new Tt(h);case xt.code:throw new xt(h,{method:r.method});case Pt.code:throw new Pt(h);case mt.code:throw new mt(h);case Rt.code:throw new Rt(h);case kt.code:throw new kt(h);case Ot.code:throw new Ot(h);case ot.code:throw new ot(h);case nt.code:throw new nt(h,{method:r.method});case ft.code:throw new ft(h);case Ut.code:throw new Ut(h);case Ge.code:throw new Ge(h);case Dt.code:throw new Dt(h);case Mt.code:throw new Mt(h);case Lt.code:throw new Lt(h);case Bt.code:throw new Bt(h);case Ft.code:throw new Ft(h);case Ht.code:throw new Ht(h);case Wt.code:throw new Wt(h);case $t.code:throw new $t(h);case jt.code:throw new jt(h);case qt.code:throw new qt(h);case Vt.code:throw new Vt(h);case Kt.code:throw new Kt(h);case 5e3:throw new Ge(h);case st.code:throw new st(h);default:throw I instanceof dt?I:new dr(h)}}},{delay:({count:I,error:h})=>{if(h&&h instanceof Be){let J=h?.headers?.get("Retry-After");if(J?.match(/\d/))return Number.parseInt(J,10)*1e3}return~~(1<<I)*a},retryCount:c,signal:u,shouldRetry:({error:I})=>_o(I)}),{enabled:n,id:f})}}function _o(e){return Ne(e)?!1:"code"in e&&typeof e.code=="number"?e.code===-1||e.code===ft.code||e.code===mt.code||e.code===429:e instanceof Be&&e.status?e.status===403||e.status===408||e.status===413||e.status===429||e.status===500||e.status===502||e.status===503||e.status===504:!0}function To(e,t=0){let r=3735928559^t,o=1103547991^t;for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);r=Math.imul(r^s,2654435761),o=Math.imul(o^s,1597334677)}return r=Math.imul(r^r>>>16,2246822507),r^=Math.imul(o^o>>>16,3266489909),o=Math.imul(o^o>>>16,2246822507),o^=Math.imul(r^r>>>16,3266489909),(4294967296*(2097151&o)+(r>>>0)).toString(36)}function Mr(e,{errorInstance:t=new Error("timed out"),timeout:r,signal:o}){return new Promise((n,s)=>{(async()=>{let a,c=new AbortController;try{r>0&&(a=setTimeout(()=>{o?c.abort():s(t)},r)),n(await e({signal:c?.signal||null}))}catch(u){if(c?.signal.aborted&&Ne(u)){s(t);return}s(u)}finally{clearTimeout(a)}})()})}function xo(){return{current:0,take(){return this.current++},reset(){this.current=0}}}var sr=xo();var Po=10485760;function Lr(e,t={}){let{url:r,headers:o}=ko(e);return{async request(n){let{body:s,fetchFn:a=t.fetchFn??fetch,maxResponseBodySize:c=t.maxResponseBodySize??Po,onRequest:u=t.onRequest,onResponse:l=t.onResponse,timeout:p=t.timeout??1e4}=n,f={...t.fetchOptions??{},...n.fetchOptions??{}},{headers:I,method:h,signal:J}=f;try{let d=await Mr(async({signal:te})=>{let K={...f,body:Array.isArray(s)?ze(s.map(oe=>({jsonrpc:"2.0",id:oe.id??sr.take(),...oe}))):ze({jsonrpc:"2.0",id:s.id??sr.take(),...s}),headers:{...o,"Content-Type":"application/json",...I},method:h||"POST",signal:J||(p>0?te:null)},X=new Request(r,K),Z=await u?.(X,K)??{...K,url:r};return await a(Z.url??r,Z)},{errorInstance:new Nt({body:s,url:r}),timeout:p,signal:!0});l&&await l(d);let b,U=await Ro(d,{maxResponseBodySize:c});if(d.headers.get("Content-Type")?.startsWith("application/json"))b=JSON.parse(U);else{b=U;try{b=JSON.parse(b||"{}")}catch(te){if(d.ok)throw te;b={error:b}}}if(!d.ok){if(typeof b.error?.code=="number"&&typeof b.error?.message=="string")return b;throw new Be({body:s,details:ze(b.error)||d.statusText,headers:d.headers,status:d.status,url:r})}return b}catch(d){throw J?.aborted?ge(J):Ne(d)||d instanceof Be||d instanceof rt||d instanceof Nt?d:new Be({body:s,cause:d,url:r})}}}}async function Ro(e,{maxResponseBodySize:t}){if(t===!1)return e.text();let r=e.headers.get("Content-Length");if(r){let c=Number(r);if(c>t)throw new rt({maxSize:t,size:c})}if(!e.body){let c=await e.text(),u=new TextEncoder().encode(c).length;if(u>t)throw new rt({maxSize:t,size:u});return c}let o=e.body.getReader(),n=new TextDecoder,s="",a=0;try{for(;;){let{done:c,value:u}=await o.read();if(c)break;if(a+=u.byteLength,a>t)throw await o.cancel(),new rt({maxSize:t,size:a});s+=n.decode(u,{stream:!0})}return s+=n.decode(),s}finally{o.releaseLock()}}function ko(e){try{let t=new URL(e),r=(()=>{if(t.username){let o=`${decodeURIComponent(t.username)}:${decodeURIComponent(t.password)}`;return t.username="",t.password="",{url:t.toString(),headers:{Authorization:`Basic ${btoa(o)}`}}}})();return{url:t.toString(),...r}}catch{return{url:e}}}function bt({key:e,methods:t,name:r,request:o,retryCount:n=3,retryDelay:s=150,timeout:a,type:c},u){let l=Or();return{config:{key:e,methods:t,name:r,request:o,retryCount:n,retryDelay:s,timeout:a,type:c},request:Dr(o,{methods:t,retryCount:n,retryDelay:s,uid:l}),value:u}}function Oo(e,t={}){let{key:r="fallback",name:o="Fallback",rank:n=!1,shouldThrow:s=Br,retryCount:a,retryDelay:c}=t;return({chain:u,pollingInterval:l=4e3,timeout:p,...f})=>{let I=e,h=()=>{},J=bt({key:r,name:o,async request({method:d,params:b}){let U,te=async(K=0)=>{let X=I[K]({...f,chain:u,retryCount:0,timeout:p});try{let Z=await X.request({method:d,params:b});return h({method:d,params:b,response:Z,transport:X,status:"success"}),Z}catch(Z){if(h({error:Z,method:d,params:b,transport:X,status:"error"}),s(Z)||K===I.length-1||(U??=I.slice(K+1).some(ue=>{let{include:oe,exclude:Re}=ue({chain:u}).config.methods||{};return oe?oe.includes(d):Re?!Re.includes(d):!0}),!U))throw Z;return te(K+1)}};return te()},retryCount:a,retryDelay:c,type:"fallback"},{onResponse:d=>h=d,transports:I.map(d=>d({chain:u,retryCount:0}))});if(n){let d=typeof n=="object"?n:{};Uo({chain:u,interval:d.interval??l,onTransports:b=>I=b,ping:d.ping,sampleCount:d.sampleCount,timeout:d.timeout,transports:I,weights:d.weights})}return J}}function Br(e){return!!("code"in e&&typeof e.code=="number"&&(e.code===ot.code||e.code===Ge.code||e.code===st.code||mr.nodeMessage.test(e.message)||e.code===5e3))}function Uo({chain:e,interval:t=4e3,onTransports:r,ping:o,sampleCount:n=10,timeout:s=1e3,transports:a,weights:c={}}){let{stability:u=.7,latency:l=.3}=c,p=[],f=async()=>{let I=await Promise.all(a.map(async d=>{let b=d({chain:e,retryCount:0,timeout:s}),U=Date.now(),te,K;try{await(o?o({transport:b}):b.request({method:"net_listening"})),K=1}catch{K=0}finally{te=Date.now()}return{latency:te-U,success:K}}));p.push(I),p.length>n&&p.shift();let h=Math.max(...p.map(d=>Math.max(...d.map(({latency:b})=>b)))),J=a.map((d,b)=>{let U=p.map(ue=>ue[b].latency),K=1-U.reduce((ue,oe)=>ue+oe,0)/U.length/h,X=p.map(ue=>ue[b].success),Z=X.reduce((ue,oe)=>ue+oe,0)/X.length;return Z===0?[0,b]:[l*K+u*Z,b]}).sort((d,b)=>b[0]-d[0]);r(J.map(([,d])=>a[d])),await wt(t),f()};f()}var vt=class extends dt{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}};var Do=0,Fr=new WeakMap;function Mo(e){if(!e)return"default";let t=Fr.get(e);if(t!==void 0)return t;let r=Do++;return Fr.set(e,r),r}function Lo(e,t={}){let{batch:r,fetchFn:o,fetchOptions:n,key:s="http",maxResponseBodySize:a,methods:c,name:u="HTTP JSON-RPC",onFetchRequest:l,onFetchResponse:p,retryDelay:f,raw:I}=t;return({chain:h,retryCount:J,timeout:d})=>{let{batchSize:b=1e3,wait:U=0}=typeof r=="object"?r:{},te=t.retryCount??J,K=d??t.timeout??1e4,X=e||h?.rpcUrls.default.http[0];if(!X)throw new vt;let Z=Lr(X,{fetchFn:o,fetchOptions:n,maxResponseBodySize:a,onRequest:l,onResponse:p,timeout:K});return bt({key:s,methods:c,name:u,async request({method:ue,params:oe},Re){let D={method:ue,params:oe},O=Re?.signal?{signal:Re.signal}:void 0,{schedule:R}=fr({id:`${X}.${Mo(Re?.signal)}`,wait:U,shouldSplitBatch(pe){return pe.length>b},fn:pe=>Z.request({body:pe,fetchOptions:O}),sort:(pe,Se)=>pe.id-Se.id}),ne=async pe=>r?R(pe):[await Z.request({body:pe,fetchOptions:O})],[{error:Ae,result:ke}]=await ne(D);if(I)return{error:Ae,result:ke};if(Ae)throw new pr({body:D,error:Ae,url:X});return ke},retryCount:te,retryDelay:f,timeout:K,type:"http"},{fetchOptions:n,url:X})}}var At={createBalance(e,t){let r={name:e.metadata.name||"",symbol:e.metadata.symbol||"",decimals:e.metadata.decimals||0,value:e.metadata.value||0,price:e.metadata.price||0,iconUrl:e.metadata.iconUrl||""};return{name:r.name,symbol:r.symbol,chainId:t,address:e.address==="native"?void 0:this.convertAddressToCAIP10Address(e.address,t),value:r.value,price:r.price,quantity:{decimals:r.decimals.toString(),numeric:this.convertHexToBalance({hex:e.balance,decimals:r.decimals})},iconUrl:r.iconUrl}},convertHexToBalance({hex:e,decimals:t}){return It(BigInt(e),t)},convertAddressToCAIP10Address(e,t){return`${t}:${e}`},createCAIP2ChainId(e,t){return`${t}:${parseInt(e,16)}`},getChainIdHexFromCAIP2ChainId(e){let t=e.split(":");if(t.length<2||!t[1])return"0x0";let r=t[1],o=parseInt(r,10);return isNaN(o)?"0x0":`0x${o.toString(16)}`},isWalletGetAssetsResponse(e){return typeof e!="object"||e===null?!1:Object.values(e).every(t=>Array.isArray(t)&&t.every(r=>this.isValidAsset(r)))},isValidAsset(e){return typeof e=="object"&&e!==null&&typeof e.address=="string"&&typeof e.balance=="string"&&(e.type==="ERC20"||e.type==="NATIVE")&&typeof e.metadata=="object"&&e.metadata!==null&&typeof e.metadata.name=="string"&&typeof e.metadata.symbol=="string"&&typeof e.metadata.decimals=="number"&&typeof e.metadata.price=="number"&&typeof e.metadata.iconUrl=="string"}};var ir={async getMyTokensWithBalance(e){let t=k.state.address,r=i.state.activeCaipNetwork;if(!t||!r)return[];if(r.chainNamespace==="eip155"){let n=await this.getEIP155Balances(t,r);if(n)return this.filterLowQualityTokens(n)}let o=await w.getBalance(t,r.caipNetworkId,e);return this.filterLowQualityTokens(o.balances)},async getEIP155Balances(e,t){try{let r=At.getChainIdHexFromCAIP2ChainId(t.caipNetworkId);if(!(await T.getCapabilities(e))?.[r]?.assetDiscovery?.supported)return null;let n=await T.walletGetAssets({account:e,chainFilter:[r]});return At.isWalletGetAssetsResponse(n)?(n[r]||[]).map(a=>At.createBalance(a,t.caipNetworkId)):null}catch{return null}},filterLowQualityTokens(e){return e.filter(t=>t.quantity.decimals!=="0")},mapBalancesToSwapTokens(e){return e?.map(t=>({...t,address:t?.address?t.address:i.getActiveNetworkTokenAddress(),decimals:parseInt(t.quantity.decimals,10),logoUri:t.iconUrl,eip2612:!1}))||[]}};var W=y({tokenBalances:[],loading:!1}),Bo={state:W,subscribe(e){return $(W,()=>e(W))},subscribeKey(e,t){return L(W,e,t)},setToken(e){e&&(W.token=Ce(e))},setTokenAmount(e){W.sendTokenAmount=e},setReceiverAddress(e){W.receiverAddress=e},setReceiverProfileImageUrl(e){W.receiverProfileImageUrl=e},setReceiverProfileName(e){W.receiverProfileName=e},setNetworkBalanceInUsd(e){W.networkBalanceInUSD=e},setLoading(e){W.loading=e},async sendToken(){try{switch(F.setLoading(!0),i.state.activeCaipNetwork?.chainNamespace){case"eip155":await F.sendEvmToken();return;case"solana":await F.sendSolanaToken();return;default:throw new Error("Unsupported chain")}}finally{F.setLoading(!1)}},async sendEvmToken(){let e=i.state.activeChain,t=k.state.preferredAccountTypes?.[e];if(!F.state.sendTokenAmount||!F.state.receiverAddress)throw new Error("An amount and receiver address are required");if(!F.state.token)throw new Error("A token is required");F.state.token?.address?(z.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===Pe.ACCOUNT_TYPES.SMART_ACCOUNT,token:F.state.token.address,amount:F.state.sendTokenAmount,network:i.state.activeCaipNetwork?.caipNetworkId||""}}),await F.sendERC20Token({receiverAddress:F.state.receiverAddress,tokenAddress:F.state.token.address,sendTokenAmount:F.state.sendTokenAmount,decimals:F.state.token.quantity.decimals})):(z.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===Pe.ACCOUNT_TYPES.SMART_ACCOUNT,token:F.state.token.symbol||"",amount:F.state.sendTokenAmount,network:i.state.activeCaipNetwork?.caipNetworkId||""}}),await F.sendNativeToken({receiverAddress:F.state.receiverAddress,sendTokenAmount:F.state.sendTokenAmount,decimals:F.state.token.quantity.decimals}))},async fetchTokenBalance(e){W.loading=!0;let t=i.state.activeCaipNetwork?.caipNetworkId,r=i.state.activeCaipNetwork?.chainNamespace,o=i.state.activeCaipAddress,n=o?S.getPlainAddress(o):void 0;if(W.lastRetry&&!S.isAllowedRetry(W.lastRetry,30*ee.ONE_SEC_MS))return W.loading=!1,[];try{if(n&&t&&r){let s=await ir.getMyTokensWithBalance();return W.tokenBalances=s,W.lastRetry=void 0,s}}catch(s){W.lastRetry=Date.now(),e?.(s),se.showError("Token Balance Unavailable")}finally{W.loading=!1}return[]},fetchNetworkBalance(){if(W.tokenBalances.length===0)return;let e=ir.mapBalancesToSwapTokens(W.tokenBalances);if(!e)return;let t=e.find(r=>r.address===i.getActiveNetworkTokenAddress());t&&(W.networkBalanceInUSD=t?Gt.multiply(t.quantity.numeric,t.price).toString():"0")},async sendNativeToken(e){v.pushTransactionStack({});let t=e.receiverAddress,r=k.state.address,o=T.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));await T.sendTransaction({chainNamespace:"eip155",to:t,address:r,data:"0x",value:o??BigInt(0)}),z.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:k.state.preferredAccountTypes?.eip155===Pe.ACCOUNT_TYPES.SMART_ACCOUNT,token:F.state.token?.symbol||"",amount:e.sendTokenAmount,network:i.state.activeCaipNetwork?.caipNetworkId||""}}),T._getClient()?.updateBalance("eip155"),F.resetSend()},async sendERC20Token(e){v.pushTransactionStack({onSuccess(){v.replace("Account")}});let t=T.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));if(k.state.address&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress){let r=S.getPlainAddress(e.tokenAddress);await T.writeContract({fromAddress:k.state.address,tokenAddress:r,args:[e.receiverAddress,t??BigInt(0)],method:"transfer",abi:Yt.getERC20Abi(r),chainNamespace:"eip155"}),F.resetSend()}},async sendSolanaToken(){if(!F.state.sendTokenAmount||!F.state.receiverAddress)throw new Error("An amount and receiver address are required");v.pushTransactionStack({onSuccess(){v.replace("Account")}}),await T.sendTransaction({chainNamespace:"solana",to:F.state.receiverAddress,value:F.state.sendTokenAmount}),T._getClient()?.updateBalance("solana"),F.resetSend()},resetSend(){W.token=void 0,W.sendTokenAmount=void 0,W.receiverAddress=void 0,W.receiverProfileImageUrl=void 0,W.receiverProfileName=void 0,W.loading=!1,W.tokenBalances=[]}},F=j(Bo);var ar={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[],user:void 0},St={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},m=y({chains:yr(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0},isSwitchingNamespace:!1}),Fo={state:m,subscribe(e){return $(m,()=>{e(m)})},subscribeKey(e,t){return L(m,e,t)},subscribeChainProp(e,t,r){let o;return $(m.chains,()=>{let n=r||m.activeChain;if(n){let s=m.chains.get(n)?.[e];o!==s&&(o=s,t(s))}})},initialize(e,t,r){let{chainId:o,namespace:n}=C.getActiveNetworkProps(),s=t?.find(p=>p.id.toString()===o?.toString()),c=e.find(p=>p?.namespace===n)||e?.[0],u=e.map(p=>p.namespace).filter(p=>p!==void 0),l=_.state.enableEmbedded?new Set([...u]):new Set([...t?.map(p=>p.chainNamespace)??[]]);(e?.length===0||!c)&&(m.noAdapters=!0),m.noAdapters||(m.activeChain=c?.namespace,m.activeCaipNetwork=s,i.setChainNetworkData(c?.namespace,{caipNetwork:s}),m.activeChain&&Te.set({activeChain:c?.namespace})),l.forEach(p=>{let f=t?.filter(I=>I.chainNamespace===p);i.state.chains.set(p,{namespace:p,networkState:y({...St,caipNetwork:f?.[0]}),accountState:y(ar),caipNetworks:f??[],...r}),i.setRequestedCaipNetworks(f??[],p)})},removeAdapter(e){if(m.activeChain===e){let t=Array.from(m.chains.entries()).find(([r])=>r!==e);if(t){let r=t[1]?.caipNetworks?.[0];r&&i.setActiveCaipNetwork(r)}}m.chains.delete(e)},addAdapter(e,{networkControllerClient:t,connectionControllerClient:r},o){m.chains.set(e.namespace,{namespace:e.namespace,networkState:{...St,caipNetwork:o[0]},accountState:ar,caipNetworks:o,connectionControllerClient:r,networkControllerClient:t}),i.setRequestedCaipNetworks(o?.filter(n=>n.chainNamespace===e.namespace)??[],e.namespace)},addNetwork(e){let t=m.chains.get(e.chainNamespace);if(t){let r=[...t.caipNetworks||[]];t.caipNetworks?.find(o=>o.id===e.id)||r.push(e),m.chains.set(e.chainNamespace,{...t,caipNetworks:r}),i.setRequestedCaipNetworks(r,e.chainNamespace),A.filterByNamespace(e.chainNamespace,!0)}},removeNetwork(e,t){let r=m.chains.get(e);if(r){let o=m.activeCaipNetwork?.id===t,n=[...r.caipNetworks?.filter(s=>s.id!==t)||[]];o&&r?.caipNetworks?.[0]&&i.setActiveCaipNetwork(r.caipNetworks[0]),m.chains.set(e,{...r,caipNetworks:n}),i.setRequestedCaipNetworks(n||[],e),n.length===0&&A.filterByNamespace(e,!1)}},setAdapterNetworkState(e,t){let r=m.chains.get(e);r&&(r.networkState={...r.networkState||St,...t},m.chains.set(e,r))},setChainAccountData(e,t,r=!0){if(!e)throw new Error("Chain is required to update chain account data");let o=m.chains.get(e);if(o){let n={...o.accountState||ar,...t};m.chains.set(e,{...o,accountState:n}),(m.chains.size===1||m.activeChain===e)&&(t.caipAddress&&(m.activeCaipAddress=t.caipAddress),k.replaceState(n))}},setChainNetworkData(e,t){if(!e)return;let r=m.chains.get(e);if(r){let o={...r.networkState||St,...t};m.chains.set(e,{...r,networkState:o})}},setAccountProp(e,t,r,o=!0){i.setChainAccountData(r,{[e]:t},o),e==="status"&&t==="disconnected"&&r&&A.removeConnectorId(r)},setActiveNamespace(e){m.activeChain=e;let t=e?m.chains.get(e):void 0,r=t?.networkState?.caipNetwork;r?.id&&e&&(m.activeCaipAddress=t?.accountState?.caipAddress,m.activeCaipNetwork=r,i.setChainNetworkData(e,{caipNetwork:r}),C.setActiveCaipNetworkId(r?.caipNetworkId),Te.set({activeChain:e,selectedNetworkId:r?.caipNetworkId}))},setActiveCaipNetwork(e){if(!e)return;m.activeChain!==e.chainNamespace&&i.setIsSwitchingNamespace(!0);let t=m.chains.get(e.chainNamespace);m.activeChain=e.chainNamespace,m.activeCaipNetwork=e,i.setChainNetworkData(e.chainNamespace,{caipNetwork:e}),t?.accountState?.address?m.activeCaipAddress=`${e.chainNamespace}:${e.id}:${t?.accountState?.address}`:m.activeCaipAddress=void 0,i.setAccountProp("caipAddress",m.activeCaipAddress,e.chainNamespace),t&&k.replaceState(t.accountState),F.resetSend(),Te.set({activeChain:m.activeChain,selectedNetworkId:m.activeCaipNetwork?.caipNetworkId}),C.setActiveCaipNetworkId(e.caipNetworkId),!i.checkIfSupportedNetwork(e.chainNamespace)&&_.state.enableNetworkSwitch&&!_.state.allowUnsupportedChain&&!T.state.wcBasic&&i.showUnsupportedChainUI()},addCaipNetwork(e){if(!e)return;let t=m.chains.get(e.chainNamespace);t&&t?.caipNetworks?.push(e)},async switchActiveNamespace(e){if(!e)return;let t=e!==i.state.activeChain,r=i.getNetworkData(e)?.caipNetwork,o=i.getCaipNetworkByNamespace(e,r?.id);t&&o&&await i.switchActiveNetwork(o)},async switchActiveNetwork(e){let r=!i.state.chains.get(i.state.activeChain)?.caipNetworks?.some(n=>n.id===m.activeCaipNetwork?.id),o=i.getNetworkControllerClient(e.chainNamespace);if(o){try{await o.switchCaipNetwork(e),r&&Q.close()}catch{v.goBack()}z.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.caipNetworkId}})}},getNetworkControllerClient(e){let t=e||m.activeChain,r=m.chains.get(t);if(!r)throw new Error("Chain adapter not found");if(!r.networkControllerClient)throw new Error("NetworkController client not set");return r.networkControllerClient},getConnectionControllerClient(e){let t=e||m.activeChain;if(!t)throw new Error("Chain is required to get connection controller client");let r=m.chains.get(t);if(!r?.connectionControllerClient)throw new Error("ConnectionController client not set");return r.connectionControllerClient},getAccountProp(e,t){let r=m.activeChain;if(t&&(r=t),!r)return;let o=m.chains.get(r)?.accountState;if(o)return o[e]},getNetworkProp(e,t){let r=m.chains.get(t)?.networkState;if(r)return r[e]},getRequestedCaipNetworks(e){let t=m.chains.get(e),{approvedCaipNetworkIds:r=[],requestedCaipNetworks:o=[]}=t?.networkState||{};return S.sortRequestedNetworks(r,o)},getAllRequestedCaipNetworks(){let e=[];return m.chains.forEach(t=>{let r=i.getRequestedCaipNetworks(t.namespace);e.push(...r)}),e},setRequestedCaipNetworks(e,t){i.setAdapterNetworkState(t,{requestedCaipNetworks:e});let o=i.getAllRequestedCaipNetworks().map(s=>s.chainNamespace),n=Array.from(new Set(o));A.filterByNamespaces(n)},getAllApprovedCaipNetworkIds(){let e=[];return m.chains.forEach(t=>{let r=i.getApprovedCaipNetworkIds(t.namespace);e.push(...r)}),e},getActiveCaipNetwork(){return m.activeCaipNetwork},getActiveCaipAddress(){return m.activeCaipAddress},getApprovedCaipNetworkIds(e){return m.chains.get(e)?.networkState?.approvedCaipNetworkIds||[]},async setApprovedCaipNetworksData(e){let r=await i.getNetworkControllerClient()?.getApprovedCaipNetworksData();i.setAdapterNetworkState(e,{approvedCaipNetworkIds:r?.approvedCaipNetworkIds,supportsAllNetworks:r?.supportsAllNetworks})},checkIfSupportedNetwork(e,t){let r=t||m.activeCaipNetwork,o=i.getRequestedCaipNetworks(e);return o.length?o?.some(n=>n.id===r?.id):!0},checkIfSupportedChainId(e){return m.activeChain?i.getRequestedCaipNetworks(m.activeChain)?.some(r=>r.id===e):!0},setSmartAccountEnabledNetworks(e,t){i.setAdapterNetworkState(t,{smartAccountEnabledNetworks:e})},checkIfSmartAccountEnabled(){let e=zt.caipNetworkIdToNumber(m.activeCaipNetwork?.caipNetworkId),t=m.activeChain;return!t||!e?!1:!!i.getNetworkProp("smartAccountEnabledNetworks",t)?.includes(Number(e))},getActiveNetworkTokenAddress(){let e=m.activeCaipNetwork?.chainNamespace||"eip155",t=m.activeCaipNetwork?.id||1,r=ee.NATIVE_TOKEN_ADDRESS[e];return`${e}:${t}:${r}`},showUnsupportedChainUI(){Q.open({view:"UnsupportedChain"})},checkIfNamesSupported(){let e=m.activeCaipNetwork;return!!(e?.chainNamespace&&ee.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))},resetNetwork(e){i.setAdapterNetworkState(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(e){let t=e;if(!t)throw new Error("Chain is required to set account prop");m.activeCaipAddress=void 0,i.setChainAccountData(t,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountTypes:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,allAccounts:[],user:void 0,status:"disconnected"}),A.removeConnectorId(t)},setIsSwitchingNamespace(e){m.isSwitchingNamespace=e},getFirstCaipNetworkSupportsAuthConnector(){let e=[],t;if(m.chains.forEach(r=>{V.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(o=>o===r.namespace)&&r.namespace&&e.push(r.namespace)}),e.length>0){let r=e[0];return t=r?m.chains.get(r)?.caipNetworks?.[0]:void 0,t}},getAccountData(e){return e?i.state.chains.get(e)?.accountState:k.state},getNetworkData(e){let t=e||m.activeChain;if(t)return i.state.chains.get(t)?.networkState},getCaipNetworkByNamespace(e,t){if(!e)return;let r=i.state.chains.get(e),o=r?.caipNetworks?.find(n=>n.id===t);return o||r?.networkState?.caipNetwork||r?.caipNetworks?.[0]},getRequestedCaipNetworkIds(){let e=A.state.filterByNamespace;return(e?[m.chains.get(e)]:Array.from(m.chains.values())).flatMap(r=>r?.caipNetworks||[]).map(r=>r.caipNetworkId)},getCaipNetworks(e){return e?i.getRequestedCaipNetworks(e):i.getAllRequestedCaipNetworks()}},i=j(Fo);var Ho=S.getApiUrl(),le=new Ee({baseUrl:Ho,clientId:null}),Wo=40,Hr=4,$o=20,P=y({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],filteredWallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1}),E={state:P,subscribeKey(e,t){return L(P,e,t)},_getSdkProperties(){let{projectId:e,sdkType:t,sdkVersion:r}=_.state;return{projectId:e,st:t||"appkit",sv:r||"html-wagmi-4.2.2"}},_filterOutExtensions(e){return _.state.isUniversalProvider?e.filter(t=>!!(t.mobile_link||t.desktop_link||t.webapp_link)):e},async _fetchWalletImage(e){let t=`${le.baseUrl}/getWalletImage/${e}`,r=await le.getBlob({path:t,params:E._getSdkProperties()});ie.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${le.baseUrl}/public/getAssetImage/${e}`,r=await le.getBlob({path:t,params:E._getSdkProperties()});ie.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${le.baseUrl}/public/getAssetImage/${e}`,r=await le.getBlob({path:t,params:E._getSdkProperties()});ie.setConnectorImage(e,URL.createObjectURL(r))},async _fetchCurrencyImage(e){let t=`${le.baseUrl}/public/getCurrencyImage/${e}`,r=await le.getBlob({path:t,params:E._getSdkProperties()});ie.setCurrencyImage(e,URL.createObjectURL(r))},async _fetchTokenImage(e){let t=`${le.baseUrl}/public/getTokenImage/${e}`,r=await le.getBlob({path:t,params:E._getSdkProperties()});ie.setTokenImage(e,URL.createObjectURL(r))},_filterWalletsByPlatform(e){return S.isMobile()?e?.filter(r=>r.mobile_link||r.id===be.COINBASE.id?!0:i.state.activeChain==="solana"&&(r.id===be.SOLFLARE.id||r.id===be.PHANTOM.id)):e},async fetchProjectConfig(){return(await le.get({path:"/appkit/v1/config",params:E._getSdkProperties()})).features},async fetchAllowedOrigins(){try{let{allowedOrigins:e}=await le.get({path:"/projects/v1/origins",params:E._getSdkProperties()});return e}catch{return[]}},async fetchNetworkImages(){let t=i.getAllRequestedCaipNetworks()?.map(({assets:r})=>r?.imageId).filter(Boolean).filter(r=>!rr.getNetworkImageById(r));t&&await Promise.allSettled(t.map(r=>E._fetchNetworkImage(r)))},async fetchConnectorImages(){let{connectors:e}=A.state,t=e.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(t.map(r=>E._fetchConnectorImage(r)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(t=>E._fetchCurrencyImage(t)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(t=>E._fetchTokenImage(t)))},async fetchWallets(e){let t=e.exclude??[];E._getSdkProperties().sv.startsWith("html-core-")&&t.push(...Object.values(be).map(s=>s.id));let o=await le.get({path:"/getWallets",params:{...E._getSdkProperties(),...e,page:String(e.page),entries:String(e.entries),include:e.include?.join(","),exclude:t.join(",")}});return{data:E._filterWalletsByPlatform(o?.data)||[],count:o?.count}},async fetchFeaturedWallets(){let{featuredWalletIds:e}=_.state;if(e?.length){let t={...E._getSdkProperties(),page:1,entries:e?.length??Hr,include:e},{data:r}=await E.fetchWallets(t),o=[...r].sort((s,a)=>e.indexOf(s.id)-e.indexOf(a.id)),n=o.map(s=>s.image_id).filter(Boolean);await Promise.allSettled(n.map(s=>E._fetchWalletImage(s))),P.featured=o,P.allFeatured=o}},async fetchRecommendedWallets(){try{P.isFetchingRecommendedWallets=!0;let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=_.state,o=[...t??[],...r??[]].filter(Boolean),n=i.getRequestedCaipNetworkIds().join(","),s={page:1,entries:Hr,include:e,exclude:o,chains:n},{data:a,count:c}=await E.fetchWallets(s),u=C.getRecentWallets(),l=a.map(f=>f.image_id).filter(Boolean),p=u.map(f=>f.image_id).filter(Boolean);await Promise.allSettled([...l,...p].map(f=>E._fetchWalletImage(f))),P.recommended=a,P.allRecommended=a,P.count=c??0}catch{}finally{P.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:o}=_.state,n=i.getRequestedCaipNetworkIds().join(","),s=[...P.recommended.map(({id:p})=>p),...r??[],...o??[]].filter(Boolean),a={page:e,entries:Wo,include:t,exclude:s,chains:n},{data:c,count:u}=await E.fetchWallets(a),l=c.slice(0,$o).map(p=>p.image_id).filter(Boolean);await Promise.allSettled(l.map(p=>E._fetchWalletImage(p))),P.wallets=S.uniqueBy([...P.wallets,...E._filterOutExtensions(c)],"id").filter(p=>p.chains?.some(f=>n.includes(f))),P.count=u>P.count?u:P.count,P.page=e},async initializeExcludedWallets({ids:e}){let t={page:1,entries:e.length,include:e},{data:r}=await E.fetchWallets(t);r&&r.forEach(o=>{P.excludedWallets.push({rdns:o.rdns,name:o.name})})},async searchWallet({search:e,badge:t}){let{includeWalletIds:r,excludeWalletIds:o}=_.state,n=i.getRequestedCaipNetworkIds().join(",");P.search=[];let s={page:1,entries:100,search:e?.trim(),badge_type:t,include:r,exclude:o,chains:n},{data:a}=await E.fetchWallets(s);z.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:t??"",search:e??""}});let c=a.map(u=>u.image_id).filter(Boolean);await Promise.allSettled([...c.map(u=>E._fetchWalletImage(u)),S.wait(300)]),P.search=E._filterOutExtensions(a)},initPromise(e,t){let r=P.promises[e];return r||(P.promises[e]=t())},prefetch({fetchConnectorImages:e=!0,fetchFeaturedWallets:t=!0,fetchRecommendedWallets:r=!0,fetchNetworkImages:o=!0}={}){let n=[e&&E.initPromise("connectorImages",E.fetchConnectorImages),t&&E.initPromise("featuredWallets",E.fetchFeaturedWallets),r&&E.initPromise("recommendedWallets",E.fetchRecommendedWallets),o&&E.initPromise("networkImages",E.fetchNetworkImages)].filter(Boolean);return Promise.allSettled(n)},prefetchAnalyticsConfig(){_.state.features?.analytics&&E.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{let{isAnalyticsEnabled:e}=await le.get({path:"/getAnalyticsConfig",params:E._getSdkProperties()});_.setFeatures({analytics:e})}catch{_.setFeatures({analytics:!1})}},filterByNamespaces(e){if(!e?.length){P.featured=P.allFeatured,P.recommended=P.allRecommended;return}let t=i.getRequestedCaipNetworkIds().join(",");P.featured=P.allFeatured.filter(r=>r.chains?.some(o=>t.includes(o))),P.recommended=P.allRecommended.filter(r=>r.chains?.some(o=>t.includes(o))),P.filteredWallets=P.wallets.filter(r=>r.chains?.some(o=>t.includes(o)))},clearFilterByNamespaces(){P.filteredWallets=[]},setFilterByNamespace(e){if(!e){P.featured=P.allFeatured,P.recommended=P.allRecommended;return}let t=i.getRequestedCaipNetworkIds().join(",");P.featured=P.allFeatured.filter(r=>r.chains?.some(o=>t.includes(o))),P.recommended=P.allRecommended.filter(r=>r.chains?.some(o=>t.includes(o))),P.filteredWallets=P.wallets.filter(r=>r.chains?.some(o=>t.includes(o)))}};var qo=qr(Vr());var Vo="wc",Ko="universal_provider",Rl=`${Vo}@2:${Ko}:`,zo="https://rpc.walletconnect.org/v1/";var kl=`${zo}bundler`;var et={getSIWX(){return _.state.siwx},async initializeIfEnabled(){let e=_.state.siwx,t=i.getActiveCaipAddress();if(!(e&&t))return;let[r,o,n]=t.split(":");if(i.checkIfSupportedNetwork(r))try{if((await e.getSessions(`${r}:${o}`,n)).length)return;await Q.open({view:"SIWXSignMessage"})}catch(s){console.error("SIWXUtil:initializeIfEnabled",s),z.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties()}),await T._getClient()?.disconnect().catch(console.error),v.reset("Connect"),se.showError("A problem occurred while trying initialize authentication")}},async requestSignMessage(){let e=_.state.siwx,t=S.getPlainAddress(i.getActiveCaipAddress()),r=i.getActiveCaipNetwork(),o=T._getClient();if(!e)throw new Error("SIWX is not enabled");if(!t)throw new Error("No ActiveCaipAddress found");if(!r)throw new Error("No ActiveCaipNetwork or client found");if(!o)throw new Error("No ConnectionController client found");try{let n=await e.createMessage({chainId:r.caipNetworkId,accountAddress:t}),s=n.toString();A.getConnectorId(r.chainNamespace)===V.CONNECTOR_ID.AUTH&&v.pushTransactionStack({});let c=await o.signMessage(s);await e.addSession({data:n,message:s,signature:c}),Q.close(),z.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:this.getSIWXEventProperties()})}catch(n){let s=this.getSIWXEventProperties();(!Q.state.open||v.state.view==="ApproveTransaction")&&await Q.open({view:"SIWXSignMessage"}),s.isSmartAccount?se.showError("This application might not support Smart Accounts"):se.showError("Signature declined"),z.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:s}),console.error("SWIXUtil:requestSignMessage",n)}},async cancelSignMessage(){try{this.getSIWX()?.getRequired?.()?await T.disconnect():Q.close(),v.reset("Connect"),z.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:this.getSIWXEventProperties()})}catch(e){console.error("SIWXUtil:cancelSignMessage",e)}},async getSessions(){let e=_.state.siwx,t=S.getPlainAddress(i.getActiveCaipAddress()),r=i.getActiveCaipNetwork();return e&&t&&r?e.getSessions(r.caipNetworkId,t):[]},async isSIWXCloseDisabled(){let e=this.getSIWX();if(e){let t=v.state.view==="ApproveTransaction",r=v.state.view==="SIWXSignMessage";if(t||r)return e.getRequired?.()&&(await this.getSessions()).length===0}return!1},async universalProviderAuthenticate({universalProvider:e,chains:t,methods:r}){let o=et.getSIWX(),n=new Set(t.map(c=>c.split(":")[0]));if(!o||n.size!==1||!n.has("eip155"))return!1;let s=await o.createMessage({chainId:i.getActiveCaipNetwork()?.caipNetworkId||"",accountAddress:""}),a=await e.authenticate({nonce:s.nonce,domain:s.domain,uri:s.uri,exp:s.expirationTime,iat:s.issuedAt,nbf:s.notBefore,requestId:s.requestId,version:s.version,resources:s.resources,statement:s.statement,chainId:s.chainId,methods:r,chains:[s.chainId,...t.filter(c=>c!==s.chainId)]});if(se.showLoading("Authenticating...",{autoClose:!1}),k.setConnectedWalletInfo({...a.session.peer.metadata,name:a.session.peer.metadata.name,icon:a.session.peer.metadata.icons?.[0],type:"WALLET_CONNECT"},Array.from(n)[0]),a?.auths?.length){let c=a.auths.map(u=>{let l=e.client.formatAuthMessage({request:u.p,iss:u.p.iss});return{data:{...u.p,accountAddress:u.p.iss.split(":").slice(-1).join(""),chainId:u.p.iss.split(":").slice(2,4).join(":"),uri:u.p.aud,version:u.p.version||s.version,expirationTime:u.p.exp,issuedAt:u.p.iat,notBefore:u.p.nbf},message:l,signature:u.s.s,cacao:u}});try{await o.setSessions(c),z.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:et.getSIWXEventProperties()})}catch(u){throw console.error("SIWX:universalProviderAuth - failed to set sessions",u),z.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:et.getSIWXEventProperties()}),await e.disconnect().catch(console.error),u}finally{se.hide()}}return!0},getSIWXEventProperties(){let e=i.state.activeChain;return{network:i.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:k.state.preferredAccountTypes?.[e]===Pe.ACCOUNT_TYPES.SMART_ACCOUNT}},async clearSessions(){let e=this.getSIWX();e&&await e.setSessions([])}};var Go={isUnsupportedChainView(){return v.state.view==="UnsupportedChain"||v.state.view==="SwitchNetwork"&&v.state.history.includes("UnsupportedChain")},async safeClose(){if(this.isUnsupportedChainView()){Q.shake();return}if(await et.isSIWXCloseDisabled()){Q.shake();return}Q.close()}};var ut={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},cr={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},Yo={providers:Jt,selectedProvider:null,error:null,purchaseCurrency:ut,paymentCurrency:cr,purchaseCurrencies:[ut],paymentCurrencies:[],quotesLoading:!1},M=y(Yo),Xo={state:M,subscribe(e){return $(M,()=>e(M))},subscribeKey(e,t){return L(M,e,t)},setSelectedProvider(e){if(e&&e.name==="meld"){let t=i.state.activeChain===V.CHAIN.SOLANA?"SOL":"USDC",r=k.state.address??"",o=new URL(e.url);o.searchParams.append("publicKey",vr),o.searchParams.append("destinationCurrencyCode",t),o.searchParams.append("walletAddress",r),o.searchParams.append("externalCustomerId",_.state.projectId),M.selectedProvider={...e,url:o.toString()}}else M.selectedProvider=e},setOnrampProviders(e){if(Array.isArray(e)&&e.every(t=>typeof t=="string")){let t=e,r=Jt.filter(o=>t.includes(o.name));M.providers=r}else M.providers=[]},setPurchaseCurrency(e){M.purchaseCurrency=e},setPaymentCurrency(e){M.paymentCurrency=e},setPurchaseAmount(e){lr.state.purchaseAmount=e},setPaymentAmount(e){lr.state.paymentAmount=e},async getAvailableCurrencies(){let e=await w.getOnrampOptions();M.purchaseCurrencies=e.purchaseCurrencies,M.paymentCurrencies=e.paymentCurrencies,M.paymentCurrency=e.paymentCurrencies[0]||cr,M.purchaseCurrency=e.purchaseCurrencies[0]||ut,await E.fetchCurrencyImages(e.paymentCurrencies.map(t=>t.id)),await E.fetchTokenImages(e.purchaseCurrencies.map(t=>t.symbol))},async getQuote(){M.quotesLoading=!0;try{let e=await w.getOnrampQuote({purchaseCurrency:M.purchaseCurrency,paymentCurrency:M.paymentCurrency,amount:M.paymentAmount?.toString()||"0",network:M.purchaseCurrency?.symbol});return M.quotesLoading=!1,M.purchaseAmount=Number(e?.purchaseAmount.amount),e}catch(e){return M.error=e.message,M.quotesLoading=!1,null}finally{M.quotesLoading=!1}},resetState(){M.selectedProvider=null,M.error=null,M.purchaseCurrency=ut,M.paymentCurrency=cr,M.purchaseCurrencies=[ut],M.paymentCurrencies=[],M.paymentAmount=void 0,M.purchaseAmount=void 0,M.quotesLoading=!1}},lr=j(Xo);var ve=y({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),Jo={state:ve,subscribe(e){return $(ve,()=>e(ve))},subscribeKey(e,t){return L(ve,e,t)},showTooltip({message:e,triggerRect:t,variant:r}){ve.open=!0,ve.message=e,ve.triggerRect=t,ve.variant=r},hide(){ve.open=!1,ve.message="",ve.triggerRect={width:0,height:0,top:0,left:0}}},Qo=j(Jo);var Wr={convertEVMChainIdToCoinType(e){if(e>=2147483648)throw new Error("Invalid chainId");return(2147483648|e)>>>0}};var we=y({suggestions:[],loading:!1}),Zo={state:we,subscribe(e){return $(we,()=>e(we))},subscribeKey(e,t){return L(we,e,t)},async resolveName(e){try{return await w.lookupEnsName(e)}catch(t){let r=t;throw new Error(r?.reasons?.[0]?.description||"Error resolving name")}},async isNameRegistered(e){try{return await w.lookupEnsName(e),!0}catch{return!1}},async getSuggestions(e){try{we.loading=!0,we.suggestions=[];let t=await w.getEnsNameSuggestions(e);return we.suggestions=t.suggestions.map(r=>({...r,name:r.name}))||[],we.suggestions}catch(t){let r=yt.parseEnsApiError(t,"Error fetching name suggestions");throw new Error(r)}finally{we.loading=!1}},async getNamesForAddress(e){try{if(!i.state.activeCaipNetwork)return[];let r=C.getEnsFromCacheForAddress(e);if(r)return r;let o=await w.reverseLookupEnsName({address:e});return C.updateEnsCache({address:e,ens:o,timestamp:Date.now()}),o}catch(t){let r=yt.parseEnsApiError(t,"Error fetching names for address");throw new Error(r)}},async registerName(e){let t=i.state.activeCaipNetwork;if(!t)throw new Error("Network not found");let r=k.state.address,o=A.getAuthConnector();if(!r||!o)throw new Error("Address or auth connector not found");we.loading=!0;try{let n=JSON.stringify({name:e,attributes:{},timestamp:Math.floor(Date.now()/1e3)});v.pushTransactionStack({onCancel(){v.replace("RegisterAccountName")}});let s=await T.signMessage(n);we.loading=!1;let a=t.id;if(!a)throw new Error("Network not found");let c=Wr.convertEVMChainIdToCoinType(Number(a));await w.registerEnsName({coinType:c,address:r,signature:s,message:n}),k.setProfileName(e,t.chainNamespace),v.replace("RegisterAccountNameSuccess")}catch(n){let s=yt.parseEnsApiError(n,`Error registering name ${e}`);throw v.replace("RegisterAccountName"),new Error(s)}finally{we.loading=!1}},validateName(e){return/^[a-zA-Z0-9-]{4,}$/u.test(e)},parseEnsApiError(e,t){return e?.reasons?.[0]?.description||t}},yt=j(Zo);var pt,Me,Le;function en(e,t){pt=document.createElement("style"),Me=document.createElement("style"),Le=document.createElement("style"),pt.textContent=tt(e).core.cssText,Me.textContent=tt(e).dark.cssText,Le.textContent=tt(e).light.cssText,document.head.appendChild(pt),document.head.appendChild(Me),document.head.appendChild(Le),$r(t)}function $r(e){Me&&Le&&(e==="light"?(Me.removeAttribute("media"),Le.media="enabled"):(Le.removeAttribute("media"),Me.media="enabled"))}function tn(e){pt&&Me&&Le&&(pt.textContent=tt(e).core.cssText,Me.textContent=tt(e).dark.cssText,Le.textContent=tt(e).light.cssText)}function tt(e){return{core:Fe`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${me(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${me(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${me(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${me(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${me(e?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,light:Fe`
      :root {
        --w3m-color-mix: ${me(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${me(fe(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${me(fe(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,dark:Fe`
      :root {
        --w3m-color-mix: ${me(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${me(fe(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${me(fe(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `}}var tp=Fe`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,rp=Fe`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,op=Fe`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;var jr={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){try{return new URL(e).hostname}catch{return""}},getTruncateString({string:e,charsStart:t,charsEnd:r,truncate:o}){return e.length<=t+r?e:o==="end"?`${e.substring(0,t)}...`:o==="start"?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`},generateAvatarColors(e){let r=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),o=this.hexToRgb(r),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),a=100-3*Number(n?.replace("px","")),c=`${a}% ${a}% at 65% 40%`,u=[];for(let l=0;l<5;l+=1){let p=this.tintColor(o,.15*l);u.push(`rgb(${p[0]}, ${p[1]}, ${p[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${c}
   `},hexToRgb(e){let t=parseInt(e,16),r=t>>16&255,o=t>>8&255,n=t&255;return[r,o,n]},tintColor(e,t){let[r,o,n]=e,s=Math.round(r+(255-r)*t),a=Math.round(o+(255-o)*t),c=Math.round(n+(255-n)*t);return[s,a,c]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){return e||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark")},splitBalance(e){let t=e.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(e,t,r){return e.toString().length>=t?Number(e).toFixed(r):e},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}};function rn(e,t){let{kind:r,elements:o}=t;return{kind:r,elements:o,finisher(n){customElements.get(e)||customElements.define(e,n)}}}function on(e,t){return customElements.get(e)||customElements.define(e,t),t}function nn(e){return function(r){return typeof r=="function"?on(e,r):rn(e,r)}}var Cp={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:(typeof process<"u"&&typeof process.env<"u"?process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}};export{V as a,zt as b,ro as c,y as d,$ as e,Ce as f,L as g,ee as h,C as i,S as j,_ as k,ie as l,rr as m,or as n,z as o,E as p,v as q,Qe as r,A as s,se as t,T as u,Te as v,Oo as w,Lo as x,F as y,i as z,w as A,k as B,Q as C,lr as D,Qo as E,yt as F,et as G,Go as H,Cp as I,en as J,$r as K,tn as L,tp as M,rp as N,op as O,jr as P,nn as Q};

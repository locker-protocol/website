import"./chunk-Y2SB35PP.js";import"./chunk-76HYZLEV.js";import"./chunk-3KG42EGU.js";import"./chunk-RI24VZ65.js";import"./chunk-YTV2MOZQ.js";import"./chunk-JHMSJEYS.js";import"./chunk-BIOKOBW3.js";import{B as a,L as p,s as c,v as m}from"./chunk-7YXRK5ID.js";import"./chunk-IV5FR2YO.js";import"./chunk-G4N3XFUX.js";import"./chunk-I45VEKAA.js";import"./chunk-K7U4LPPR.js";import"./chunk-O73BFGMG.js";import"./chunk-UGZMQAEK.js";import"./chunk-OERSU4S2.js";var w=c`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,e,i,r){var l=arguments.length,t=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,i,r);else for(var f=o.length-1;f>=0;f--)(n=o[f])&&(t=(l<3?n(t):l>3?n(e,i,t):n(e,i))||t);return l>3&&t&&Object.defineProperty(e,i,t),t},s=class extends a{render(){return m`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=w;s=u([p("w3m-transactions-view")],s);export{s as W3mTransactionsView};

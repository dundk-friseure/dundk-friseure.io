"use strict";(self.webpackChunkdundk_friseure=self.webpackChunkdundk_friseure||[]).push([[26],{4026:(ut,W,h)=>{function y(e,n,t,i){return new(t||(t=Promise))(function(s,l){function c(p){try{u(i.next(p))}catch(j){l(j)}}function d(p){try{u(i.throw(p))}catch(j){l(j)}}function u(p){p.done?s(p.value):function r(s){return s instanceof t?s:new t(function(l){l(s)})}(p.value).then(c,d)}u((i=i.apply(e,n||[])).next())})}h.d(W,{zS:()=>At,cx:()=>Nt,sG:()=>yt,mP:()=>tt});var f=h(5e3),v=h(3469),at=h(591),St=h(7274),G=h(1086),vt=h(6831),gt=h(6787),F=h(4850);function ct(...e){const n=e.length;if(0===n)throw new Error("list of properties cannot be empty.");return t=>(0,F.U)(function wt(e,n){return i=>{let r=i;for(let s=0;s<n;s++){const l=r[e[s]];if(void 0===l)return;r=l}return r}}(e,n))(t)}var bt=h(3489);class Ot{constructor(n,t){this.predicate=n,this.inclusive=t}call(n,t){return t.subscribe(new Ct(n,this.predicate,this.inclusive))}}class Ct extends bt.L{constructor(n,t,i){super(n),this.predicate=t,this.inclusive=i,this.index=0}_next(n){const t=this.destination;let i;try{i=this.predicate(n,this.index++)}catch(r){return void t.error(r)}this.nextOrComplete(n,i)}nextOrComplete(n,t){const i=this.destination;Boolean(t)?i.next(n):(this.inclusive&&i.next(n),i.complete())}}var x=h(2198),Y=h(7545),H=h(2994),xt=h(7224),z=h(5154),et=h(2986),ft=h(7221),nt=h(9808);const _t=["*"],V={useTransferState:!0,alwaysMonitor:!1,manualIdle:!1,baseURIForScullyContent:"http://localhost:1668"},q=new f.OlP("scullyLibConfig",{factory:()=>V}),b=e=>(e.includes("#")&&(e=e.split("#")[0]),e.includes("?")&&(e=e.split("?")[0]),e.endsWith("/")?e.slice(0,-1):e);function J(e,n="json"){return new Promise((t,i)=>{const r=new XMLHttpRequest;r.responseType=n,r.addEventListener("load",s=>{if(200!==r.status)return i(r);t(r.response)}),r.addEventListener("error",(...s)=>i(s)),r.open("get",e,!0),r.send()})}const tt=()=>window&&"running"===window.ScullyIO,it=()=>window&&"generated"===window.ScullyIO;function ht(e,n){return e.endsWith("/")&&n.startsWith("/")?`${e}${n.substr(1)}`:e.endsWith("/")||n.startsWith("/")?`${e}${n}`:`${e}/${n}`}const rt="ScullyIO-transfer-state",st="/** ___SCULLY_STATE_START___ */",ot="/** ___SCULLY_STATE_END___ */";let dt=(()=>{class e{constructor(t,i){this.document=t,this.router=i,this.inlineOnly=!1,this.currentBaseUrl="//",this.stateBS=new at.X({}),this.state$=this.stateBS.pipe((0,x.h)(r=>void 0!==r)),this.nextUrl=this.router.events.pipe((0,x.h)(r=>r instanceof v.OD),(0,Y.w)(r=>b(this.initialUrl)===b(r.url)?(this.initialUrl="__done__with__Initial__navigation__",St.C):(0,G.of)(r)),(0,H.b)(()=>this.stateBS.next(void 0)),(0,Y.w)(r=>this.router.events.pipe((0,x.h)(s=>s instanceof v.m2&&s.url===r.url),(0,xt.P)())),(0,F.U)(r=>b(r.urlAfterRedirects||r.url)),(0,z.d)(1))}startMonitoring(){window&&window["ScullyIO-injected"]&&window["ScullyIO-injected"].inlineStateOnly&&(this.inlineOnly=!0),this.setupEnvForTransferState(),this.setupStartNavMonitoring()}setupEnvForTransferState(){if(tt()){this.injectScript();const t=window["ScullyIO-exposed"]||{};t.transferState&&(this.stateBS.next(t.transferState),this.saveState(t.transferState))}else it()&&(this.initialUrl=window.location.pathname||"__no_NO_no__",this.initialUrl="/"!==this.initialUrl&&this.initialUrl.endsWith("/")?this.initialUrl.slice(0,-1):this.initialUrl,this.stateBS.next(window&&window[rt]||{}))}injectScript(){this.script=this.document.createElement("script"),this.script.setAttribute("id",rt);let t=document.body.lastChild;for(;"SCRIPT"===t.previousSibling.nodeName;)t=t.previousSibling;document.body.insertBefore(this.script,t)}getState(t){return this.fetchTransferState(),this.state$.pipe(ct(t))}stateHasKey(t){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(t)}stateKeyHasValue(t){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(t)&&null!=this.stateBS.value[t]}setState(t,i){const r=Object.assign(Object.assign({},this.stateBS.value),{[t]:i});this.stateBS.next(r),this.saveState(r)}saveState(t){tt()&&(this.script.textContent=`{window['${rt}']=_u(\`${st}${function Et(e){const n={"'":"_~q~","`":"_~b~","/":"_~s~","<":"_~l~",">":"_~g~"};return e.replace(/[`'<>\/]/g,t=>n[t]).replace(/\\\"/g,"\\'")}(JSON.stringify(t))}${ot}\`);function _u(t) {t=t.split('${st}')[1].split('${ot}')[0];const u={'_~b~': "\`",'_~q~': "'",'_~s~': '/','_~l~': '<','_~g~': '>'};return JSON.parse(t.replace(/\\'/g,\`\\\\"\`).replace(/_~[^]~/g, (s) => u[s]).replace(/\\n/g,\`\\\\n\`).replace(/\\r/g,\`\\\\r\`));}}`)}setupStartNavMonitoring(){!it()||this.nextUrl.subscribe()}useScullyTransferState(t,i){return it()?this.getState(t):i.pipe((0,H.b)(r=>this.setState(t,r)))}fetchTransferState(){return y(this,void 0,void 0,function*(){const t=s=>s.split("/").filter(l=>""!==l.trim())[0];yield new Promise(s=>setTimeout(s,0));const i=yield this.nextUrl.pipe((0,et.q)(1)).toPromise(),r=t(i);this.currentBaseUrl!==r&&(this.currentBaseUrl=r,this.nextUrl.pipe(function Tt(e,n=!1){return t=>t.lift(new Ot(e,n))}(s=>t(s)===this.currentBaseUrl),(0,Y.w)(s=>this.inlineOnly?this.readFromIndex(s):this.readFromJson(s)),(0,ft.K)(s=>(console.warn("Error while loading of parsing Scully state:",s),(0,G.of)({}))),(0,H.b)(s=>{this.stateBS.next(s)})).subscribe({complete:()=>{this.currentBaseUrl="//"}}))})}readFromJson(t){return J(pt(ht(t,"/data.json")))}readFromIndex(t){return J(pt(ht(t,"/index.html")),"text").then(i=>{const r=i.split(st)[1].split(ot)[0];return JSON.parse(function Lt(e){const n={"_~q~":"'","_~b~":"`","_~s~":"/","_~l~":"<","_~g~":">"};return e.replace(/\\'/g,'\\"').replace(/_~[^]~/g,t=>n[t]).replace(/\n/g,"/n").replace(/\r/g,"/r")}(r))})}}return e.\u0275fac=function(t){return new(t||e)(f.LFG(nt.K0),f.LFG(v.F0))},e.\u0275prov=(0,f.Yz7)({factory:function(){return new e((0,f.LFG)(nt.K0),(0,f.LFG)(v.F0))},token:e,providedIn:"root"}),e})();function pt(e){return e.startsWith("/")?e.slice(1):e}let Mt=(()=>{class e{constructor(t,i,r,s){this.zone=t,this.router=i,this.initialUrl=function Rt(e){return e.endsWith("/")?e.slice(0,-1):e}(window&&window.location.pathname)||"",this.imState=new at.X({idle:!1,timeOut:5e3}),this.idle$=this.imState.pipe(ct("idle")),this.initApp=new Event("AngularInitialized",{bubbles:!0,cancelable:!1}),this.appReady=new Event("AngularReady",{bubbles:!0,cancelable:!1}),this.appTimeout=new Event("AngularTimeout",{bubbles:!0,cancelable:!1}),this.scullyLibConfig=Object.assign({},V,r);const c=!!(window["ScullyIO-exposed"]||{}).manualIdle;!this.scullyLibConfig.manualIdle&&window&&(this.scullyLibConfig.alwaysMonitor||tt())&&(window.dispatchEvent(this.initApp),this.router.events.pipe((0,x.h)(d=>d instanceof v.m2&&void 0!==d.urlAfterRedirects),(0,x.h)(d=>!c||d.urlAfterRedirects!==this.initialUrl),(0,H.b)(()=>this.zoneIdleCheck())).subscribe()),this.scullyLibConfig.manualIdle&&window.dispatchEvent(this.initApp),this.scullyLibConfig.useTransferState&&s.startMonitoring()}fireManualMyAppReadyEvent(){return y(this,void 0,void 0,function*(){return window.dispatchEvent(this.appReady)})}init(){return y(this,void 0,void 0,function*(){return this.idle$.pipe((0,et.q)(1)).toPromise()})}zoneIdleCheck(){return y(this,void 0,void 0,function*(){if(void 0===Zone)return this.simpleTimeout();const t=Zone.current.get("TaskTrackingZone");if(void 0===t)return this.simpleTimeout();this.imState.value.idle&&(yield this.setState("idle",!1)),this.zone.runOutsideAngular(()=>{let i,r=0;const s=Date.now(),l=()=>{clearTimeout(i),Date.now()-s>3e4?window.dispatchEvent(this.appTimeout):t.macroTasks.length>0&&void 0!==t.macroTasks.find(c=>c.source.includes("XMLHttpRequest"))||r<1?i=setTimeout(()=>{r+=1,l()},50):this.zone.run(()=>{setTimeout(()=>{window.dispatchEvent(this.appReady),this.setState("idle",!0)},250)})};l()})})}simpleTimeout(){return y(this,void 0,void 0,function*(){console.warn("Scully is using timeouts, add the needed polyfills instead!"),yield new Promise(t=>setTimeout(t,this.imState.value.timeOut)),window.dispatchEvent(this.appReady)})}setPupeteerTimeoutValue(t){this.imState.next(Object.assign(Object.assign({},this.imState.value),{timeOut:t}))}setState(t,i){this.imState.next(Object.assign(Object.assign({},this.imState.value),{[t]:i}))}}return e.\u0275fac=function(t){return new(t||e)(f.LFG(f.R0b),f.LFG(v.F0),f.LFG(q),f.LFG(dt))},e.\u0275prov=(0,f.Yz7)({factory:function(){return new e((0,f.LFG)(f.R0b),(0,f.LFG)(v.F0),(0,f.LFG)(q),(0,f.LFG)(dt))},token:e,providedIn:"root"}),e})(),yt=(()=>{class e{constructor(t){this.router=t,this.refresh=new vt.t(1),this.allRoutes$=this.refresh.pipe((0,Y.w)(()=>J("assets/scully-routes.json")),(0,ft.K)(()=>(console.warn("Scully routes file not found, are you running the Scully generated version of your site?"),(0,G.of)([]))),(0,x.h)(i=>Array.isArray(i)),(0,F.U)(this.cleanDups),(0,z.d)({refCount:!1,bufferSize:1})),this.available$=this.allRoutes$.pipe((0,F.U)(i=>i.filter(r=>!r.hasOwnProperty("published")||!1!==r.published)),(0,z.d)({refCount:!1,bufferSize:1})),this.unPublished$=this.allRoutes$.pipe((0,F.U)(i=>i.filter(r=>!!r.hasOwnProperty("published")&&!1===r.published)),(0,z.d)({refCount:!1,bufferSize:1})),this.topLevel$=this.available$.pipe((0,F.U)(i=>i.filter(r=>!r.route.slice(1).includes("/"))),(0,z.d)({refCount:!1,bufferSize:1})),this.reload()}getCurrent(){return location?(0,gt.T)((0,G.of)(new v.m2(0,"","")),this.router.events).pipe((0,x.h)(t=>t instanceof v.m2),(0,Y.w)(()=>this.available$),(0,F.U)(t=>{const i=b(encodeURI(location.pathname).trim());return t.find(r=>i===b(r.route.trim())||r.slugs&&Array.isArray(r.slugs)&&r.slugs.find(s=>i.endsWith(b(s.trim()))))})):(0,G.of)()}cleanDups(t){const i=new Map;return t.forEach(r=>i.set(JSON.stringify(Object.assign(Object.assign({},r),{route:Pt(r)?"":r.route})),r)),[...i.values()]}reload(){this.refresh.next()}}return e.\u0275fac=function(t){return new(t||e)(f.LFG(v.F0))},e.\u0275prov=(0,f.Yz7)({factory:function(){return new e((0,f.LFG)(v.F0))},token:e,providedIn:"root"}),e})();function Pt(e){const n=Object.keys(e);return!(1===n.length&&n.includes("route")||2===n.length&&n.includes("route")&&n.includes("title"))}let K,At=(()=>{class e{constructor(t,i,r,s,l){this.elmRef=t,this.srs=i,this.router=r,this.location=s,this.conf=l,this.baseUrl=this.conf.useTransferState||V.useTransferState,this.elm=this.elmRef.nativeElement,this.routes=this.srs.allRoutes$.pipe((0,et.q)(1)).toPromise(),this.routeUpdates$=this.router.events.pipe((0,x.h)(c=>c instanceof v.m2),(0,x.h)(c=>K&&!K.endsWith(c.urlAfterRedirects)),(0,H.b)(c=>this.replaceContent())),this.routeSub=this.routeUpdates$.subscribe()}ngOnInit(){this.elm&&this.handlePage()}handlePage(){return y(this,void 0,void 0,function*(){const t=b(location.href);if(K===t)return;K=t;const i=document.createElement("template"),r=this.getCSSId(this.elm);if(window.scullyContent){const d=window.scullyContent.html;i.innerHTML=r!==window.scullyContent.cssId?d.split(window.scullyContent.cssId).join(r):d}else yield J(t+"/index.html","text").catch(d=>{if((0,f.X6Q)()){const u=new URL(location.href);return J(`${this.conf.baseURIForScullyContent}/${b(u.pathname)}/index.html`,"text")}return Promise.reject(d)}).then(d=>{try{const u=d.split("\x3c!--scullyContent-begin--\x3e")[1].split("\x3c!--scullyContent-end--\x3e")[0];if(u.includes("_ngcontent")){const p="_ngcontent"+u.split("_ngcontent")[1].split("=")[0];i.innerHTML=u.split(p).join(r)}else i.innerHTML=u}catch(u){i.innerHTML='<h2 id="___scully-parsing-error___">Sorry, could not parse static page content</h2>\n            <p>This might happen if you are not using the static generated pages.</p>'}}).catch(d=>{i.innerHTML='<h2 id="___scully-parsing-error___">Sorry, could not load static page content</h2>',console.error("problem during loading static scully content",d)});const s=this.elm.parentElement||document.body,l=document.createComment("scullyContent-begin"),c=document.createComment("scullyContent-end");s.insertBefore(l,this.elm),s.insertBefore(i.content,this.elm),s.insertBefore(c,this.elm),setTimeout(()=>document.querySelectorAll("[href]").forEach(this.upgradeToRoutelink.bind(this)),10)})}upgradeToRoutelink(t){return y(this,void 0,void 0,function*(){if(!["A","BUTTON"].includes(t.tagName))return;const i=t.dataset.hash;if(i)return t.setAttribute("href","#"+i),t.setAttribute("onclick",""),void(t.onclick=d=>{d.preventDefault();const u=document.getElementById(i);if(u){const p=new URL(window.location.href);p.hash=i,history.replaceState("","",p.toString()),u.scrollIntoView()}});const r=yield this.routes,s=t.getAttribute("href"),l=b(s.toLowerCase()),c=r.find(d=>b(d.route.toLowerCase())===l);l&&c&&!l.startsWith("#")&&(t.onclick=d=>y(this,void 0,void 0,function*(){const u=c.route.split("/"),p=location.pathname.split("/");p.pop(),d.preventDefault(),(yield this.router.navigate(u).catch(m=>(console.error("routing error",m),!1)))&&p.every((m,M)=>u[M]===m)&&u.length!==p.length+1&&setTimeout(()=>this.replaceContent(),10)}))})}replaceContent(){window.scullyContent=void 0;const t=this.elm.parentElement;let i=function Ft(e,n){const t=[],i=document.createNodeIterator(e,NodeFilter.SHOW_COMMENT,{acceptNode:s=>n&&s.nodeValue&&!s.nodeValue.includes(n)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});let r;for(;r=i.nextNode();)t.push(r);return t}(t,"scullyContent-begin")[0];for(;i&&i!==this.elm;){const r=i.nextSibling;t.removeChild(i),i=r}this.handlePage()}getCSSId(t){return t.getAttributeNames().find(i=>i.startsWith("_ngcontent"))||""}ngOnDestroy(){this.routeSub.unsubscribe(),K="//"}}return e.\u0275fac=function(t){return new(t||e)(f.Y36(f.SBq),f.Y36(yt),f.Y36(v.F0),f.Y36(nt.Ye),f.Y36(q))},e.\u0275cmp=f.Xpm({type:e,selectors:[["scully-content"]],ngContentSelectors:_t,decls:1,vars:0,template:function(t,i){1&t&&(f.F$t(),f.Hsn(0))},styles:["\n      :host {\n        display: none;\n      }\n      scully-content {\n        display: none;\n      }\n    "],encapsulation:2,changeDetection:0}),e})(),mt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({}),e})(),Nt=(()=>{class e{constructor(t){this.idle=t}static forRoot(t=V){return t=Object.assign({},V,t),{ngModule:e,providers:[{provide:q,useValue:t}]}}}return e.\u0275fac=function(t){return new(t||e)(f.LFG(Mt))},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[mt],mt]}),e})()},6831:(ut,W,h)=>{h.d(W,{t:()=>D});var R=h(8929),X=h(6686),T=h(2268);const N=new class A extends T.v{}(class U extends X.o{constructor(o,a){super(o,a),this.scheduler=o,this.work=a}schedule(o,a=0){return a>0?super.schedule(o,a):(this.delay=a,this.state=o,this.scheduler.flush(this),this)}execute(o,a){return a>0||this.closed?super.execute(o,a):this._execute(o,a)}requestAsyncId(o,a,S=0){return null!==S&&S>0||null===S&&this.delay>0?super.requestAsyncId(o,a,S):o.flush(this)}});var _=h(2654),y=h(3489),I=h(9312);class w extends y.L{constructor(o,a,S=0){super(o),this.scheduler=a,this.delay=S}static dispatch(o){const{notification:a,destination:S}=o;a.observe(S),this.unsubscribe()}scheduleMessage(o){this.destination.add(this.scheduler.schedule(w.dispatch,this.delay,new Q(o,this.destination)))}_next(o){this.scheduleMessage(I.P.createNext(o))}_error(o){this.scheduleMessage(I.P.createError(o)),this.unsubscribe()}_complete(){this.scheduleMessage(I.P.createComplete()),this.unsubscribe()}}class Q{constructor(o,a){this.notification=o,this.destination=a}}var Z=h(5279),k=h(5283);class D extends R.xQ{constructor(o=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,S){super(),this.scheduler=S,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=o<1?1:o,this._windowTime=a<1?1:a,a===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(o){const a=this._events;a.push(o),a.length>this._bufferSize&&a.shift(),super.next(o)}nextTimeWindow(o){this._events.push(new $(this._getNow(),o)),this._trimBufferThenGetEvents(),super.next(o)}_subscribe(o){const a=this._infiniteTimeWindow,S=a?this._events:this._trimBufferThenGetEvents(),C=this.scheduler,P=S.length;let g;if(this.closed)throw new Z.N;if(this.isStopped||this.hasError?g=_.w.EMPTY:(this.observers.push(o),g=new k.W(this,o)),C&&o.add(o=new w(o,C)),a)for(let L=0;L<P&&!o.closed;L++)o.next(S[L]);else for(let L=0;L<P&&!o.closed;L++)o.next(S[L].value);return this.hasError?o.error(this.thrownError):this.isStopped&&o.complete(),g}_getNow(){return(this.scheduler||N).now()}_trimBufferThenGetEvents(){const o=this._getNow(),a=this._bufferSize,S=this._windowTime,C=this._events,P=C.length;let g=0;for(;g<P&&!(o-C[g].time<S);)g++;return P>a&&(g=Math.max(g,P-a)),g>0&&C.splice(0,g),C}}class ${constructor(o,a){this.time=o,this.value=a}}},5154:(ut,W,h)=>{h.d(W,{d:()=>X});var R=h(6831);function X(T,A,N){let _;return _=T&&"object"==typeof T?T:{bufferSize:T,windowTime:A,refCount:!1,scheduler:N},y=>y.lift(function U({bufferSize:T=Number.POSITIVE_INFINITY,windowTime:A=Number.POSITIVE_INFINITY,refCount:N,scheduler:_}){let y,O,I=0,B=!1,w=!1;return function(Z){I++,(!y||B)&&(B=!1,y=new R.t(T,A,_),O=Z.subscribe({next(D){y.next(D)},error(D){B=!0,y.error(D)},complete(){w=!0,O=void 0,y.complete()}}));const k=y.subscribe(this);this.add(()=>{I--,k.unsubscribe(),O&&!w&&N&&0===I&&(O.unsubscribe(),O=void 0,y=void 0)})}}(_))}}}]);
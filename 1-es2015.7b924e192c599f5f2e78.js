(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{UXun:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var n=i("jtHE");function s(t,e,i){let s;return s=t&&"object"==typeof t?t:{bufferSize:t,windowTime:e,refCount:!1,scheduler:i},t=>t.lift(function({bufferSize:t=Number.POSITIVE_INFINITY,windowTime:e=Number.POSITIVE_INFINITY,refCount:i,scheduler:s}){let r,o,c=0,a=!1,l=!1;return function(u){c++,r&&!a||(a=!1,r=new n.a(t,e,s),o=u.subscribe({next(t){r.next(t)},error(t){a=!0,r.error(t)},complete(){l=!0,o=void 0,r.complete()}}));const h=r.subscribe(this);this.add(()=>{c--,h.unsubscribe(),o&&!l&&i&&0===c&&(o.unsubscribe(),o=void 0,r=void 0)})}}(s))}},jtHE:function(t,e,i){"use strict";i.d(e,"a",function(){return m});var n=i("XNiG"),s=i("3N8a");class r extends s.a{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}schedule(t,e=0){return e>0?super.schedule(t,e):(this.delay=e,this.state=t,this.scheduler.flush(this),this)}execute(t,e){return e>0||this.closed?super.execute(t,e):this._execute(t,e)}requestAsyncId(t,e,i=0){return null!==i&&i>0||null===i&&this.delay>0?super.requestAsyncId(t,e,i):t.flush(this)}}var o=i("IjjT");class c extends o.a{}const a=new c(r);var l=i("quSY"),u=i("7o/Q"),h=i("WMd4");class d extends u.a{constructor(t,e,i=0){super(t),this.scheduler=e,this.delay=i}static dispatch(t){const{notification:e,destination:i}=t;e.observe(i),this.unsubscribe()}scheduleMessage(t){this.destination.add(this.scheduler.schedule(d.dispatch,this.delay,new p(t,this.destination)))}_next(t){this.scheduleMessage(h.a.createNext(t))}_error(t){this.scheduleMessage(h.a.createError(t)),this.unsubscribe()}_complete(){this.scheduleMessage(h.a.createComplete()),this.unsubscribe()}}class p{constructor(t,e){this.notification=t,this.destination=e}}var f=i("9ppp"),b=i("Ylt2");class m extends n.a{constructor(t=Number.POSITIVE_INFINITY,e=Number.POSITIVE_INFINITY,i){super(),this.scheduler=i,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=t<1?1:t,this._windowTime=e<1?1:e,e===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(t){const e=this._events;e.push(t),e.length>this._bufferSize&&e.shift(),super.next(t)}nextTimeWindow(t){this._events.push(new w(this._getNow(),t)),this._trimBufferThenGetEvents(),super.next(t)}_subscribe(t){const e=this._infiniteTimeWindow,i=e?this._events:this._trimBufferThenGetEvents(),n=this.scheduler,s=i.length;let r;if(this.closed)throw new f.a;if(this.isStopped||this.hasError?r=l.a.EMPTY:(this.observers.push(t),r=new b.a(this,t)),n&&t.add(t=new d(t,n)),e)for(let o=0;o<s&&!t.closed;o++)t.next(i[o]);else for(let o=0;o<s&&!t.closed;o++)t.next(i[o].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),r}_getNow(){return(this.scheduler||a).now()}_trimBufferThenGetEvents(){const t=this._getNow(),e=this._bufferSize,i=this._windowTime,n=this._events,s=n.length;let r=0;for(;r<s&&!(t-n[r].time<i);)r++;return s>e&&(r=Math.max(r,s-e)),r>0&&n.splice(0,r),n}}class w{constructor(t,e){this.time=t,this.value=e}}},sbAP:function(t,e,i){"use strict";i.d(e,"a",function(){return $}),i.d(e,"b",function(){return k}),i.d(e,"c",function(){return B}),i.d(e,"d",function(){return E});var n=i("mrSG"),s=i("fXoL"),r=i("tyNb"),o=i("2Vo4"),c=i("5yfJ"),a=i("LRne"),l=i("jtHE"),u=i("VRyK"),h=i("pLZG"),d=i("eIep"),p=i("vkgz"),f=i("SxV6"),b=i("lJxs"),m=i("UXun");function w(...t){const e=t.length;if(0===e)throw new Error("list of properties cannot be empty.");return i=>Object(b.a)(function(t,e){return i=>{let n=i;for(let s=0;s<e;s++){const e=n[t[s]];if(void 0===e)return;n=e}return n}}(t,e))(i)}var _=i("IzEk"),S=i("7o/Q");class O{constructor(t,e){this.predicate=t,this.inclusive=e}call(t,e){return e.subscribe(new v(t,this.predicate,this.inclusive))}}class v extends S.a{constructor(t,e,i){super(t),this.predicate=e,this.inclusive=i,this.index=0}_next(t){const e=this.destination;let i;try{i=this.predicate(t,this.index++)}catch(n){return void e.error(n)}this.nextOrComplete(t,i)}nextOrComplete(t,e){const i=this.destination;Boolean(e)?i.next(t):(this.inclusive&&i.next(t),i.complete())}}var g=i("JIr8"),y=i("ofXK");const j=["*"],T={useTransferState:!0,alwaysMonitor:!1,manualIdle:!1,baseURIForScullyContent:"http://localhost:1668"},I=new s.t("scullyLibConfig",{factory:()=>T}),x=t=>(t.includes("#")&&(t=t.split("#")[0]),t.includes("?")&&(t=t.split("?")[0]),t.endsWith("/")?t.slice(0,-1):t);function C(t,e="json"){return new Promise((i,n)=>{const s=new XMLHttpRequest;s.responseType=e,s.addEventListener("load",t=>{if(200!==s.status)return n(s);i(s.response)}),s.addEventListener("error",(...t)=>n(t)),s.open("get",t,!0),s.send()})}const E=()=>window&&"running"===window.ScullyIO,N=()=>window&&"generated"===window.ScullyIO;function L(t,e){return t.endsWith("/")&&e.startsWith("/")?`${t}${e.substr(1)}`:t.endsWith("/")||e.startsWith("/")?`${t}${e}`:`${t}/${e}`}let A=(()=>{class t{constructor(t,e){this.document=t,this.router=e,this.inlineOnly=!1,this.currentBaseUrl="//",this.stateBS=new o.a({}),this.state$=this.stateBS.pipe(Object(h.a)(t=>void 0!==t)),this.nextUrl=this.router.events.pipe(Object(h.a)(t=>t instanceof r.b),Object(d.a)(t=>x(this.initialUrl)===x(t.url)?(this.initialUrl="__done__with__Initial__navigation__",c.a):Object(a.a)(t)),Object(p.a)(()=>this.stateBS.next(void 0)),Object(d.a)(t=>this.router.events.pipe(Object(h.a)(e=>e instanceof r.a&&e.url===t.url),Object(f.a)())),Object(b.a)(t=>x(t.urlAfterRedirects||t.url)),Object(m.a)(1))}startMonitoring(){window&&window["ScullyIO-injected"]&&window["ScullyIO-injected"].inlineStateOnly&&(this.inlineOnly=!0),this.setupEnvForTransferState(),this.setupStartNavMonitoring()}setupEnvForTransferState(){if(E()){this.injectScript();const t=window["ScullyIO-exposed"]||{};t.transferState&&(this.stateBS.next(t.transferState),this.saveState(t.transferState))}else N()&&(this.initialUrl=window.location.pathname||"__no_NO_no__",this.initialUrl="/"!==this.initialUrl&&this.initialUrl.endsWith("/")?this.initialUrl.slice(0,-1):this.initialUrl,this.stateBS.next(window&&window["ScullyIO-transfer-state"]||{}))}injectScript(){this.script=this.document.createElement("script"),this.script.setAttribute("id","ScullyIO-transfer-state");let t=document.body.lastChild;for(;"SCRIPT"===t.previousSibling.nodeName;)t=t.previousSibling;document.body.insertBefore(this.script,t)}getState(t){return this.fetchTransferState(),this.state$.pipe(w(t))}stateHasKey(t){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(t)}stateKeyHasValue(t){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(t)&&null!=this.stateBS.value[t]}setState(t,e){const i=Object.assign(Object.assign({},this.stateBS.value),{[t]:e});this.stateBS.next(i),this.saveState(i)}saveState(t){E()&&(this.script.textContent=`{window['ScullyIO-transfer-state']=_u(\`/** ___SCULLY_STATE_START___ */${function(t){const e={"'":"_~q~","`":"_~b~","/":"_~s~","<":"_~l~",">":"_~g~"};return t.replace(/[`'<>\/]/g,t=>e[t]).replace(/\\\"/g,"\\'")}(JSON.stringify(t))}/** ___SCULLY_STATE_END___ */\`);function _u(t) {t=t.split('/** ___SCULLY_STATE_START___ */')[1].split('/** ___SCULLY_STATE_END___ */')[0];const u={'_~b~': "\`",'_~q~': "'",'_~s~': '/','_~l~': '<','_~g~': '>'};return JSON.parse(t.replace(/\\'/g,\`\\\\"\`).replace(/_~[^]~/g, (s) => u[s]).replace(/\\n/g,\`\\\\n\`).replace(/\\r/g,\`\\\\r\`));}}`)}setupStartNavMonitoring(){N()&&this.nextUrl.subscribe()}useScullyTransferState(t,e){return N()?this.getState(t):e.pipe(Object(p.a)(e=>this.setState(t,e)))}fetchTransferState(){return Object(n.a)(this,void 0,void 0,function*(){const t=t=>t.split("/").filter(t=>""!==t.trim())[0];yield new Promise(t=>setTimeout(t,0));const e=yield this.nextUrl.pipe(Object(_.a)(1)).toPromise(),i=t(e);this.currentBaseUrl!==i&&(this.currentBaseUrl=i,this.nextUrl.pipe(function(t,e=!1){return i=>i.lift(new O(t,e))}(e=>t(e)===this.currentBaseUrl),Object(d.a)(t=>this.inlineOnly?this.readFromIndex(t):this.readFromJson(t)),Object(g.a)(t=>(console.warn("Error while loading of parsing Scully state:",t),Object(a.a)({}))),Object(p.a)(t=>{this.stateBS.next(t)})).subscribe({complete:()=>{this.currentBaseUrl="//"}}))})}readFromJson(t){return C(U(L(t,"/data.json")))}readFromIndex(t){return C(U(L(t,"/index.html")),"text").then(t=>{const e=t.split("/** ___SCULLY_STATE_START___ */")[1].split("/** ___SCULLY_STATE_END___ */")[0];return JSON.parse(function(t){const e={"_~q~":"'","_~b~":"`","_~s~":"/","_~l~":"<","_~g~":">"};return t.replace(/\\'/g,'\\"').replace(/_~[^]~/g,t=>e[t]).replace(/\n/g,"/n").replace(/\r/g,"/r")}(e))})}}return t.\u0275fac=function(e){return new(e||t)(s.ec(y.d),s.ec(r.c))},t.\u0275prov=Object(s.Ob)({factory:function(){return new t(Object(s.ec)(y.d),Object(s.ec)(r.c))},token:t,providedIn:"root"}),t})();function U(t){return t.startsWith("/")?t.slice(1):t}let R=(()=>{class t{constructor(t,e,i,n){var s;this.zone=t,this.router=e,this.initialUrl=((s=window&&window.location.pathname).endsWith("/")?s.slice(0,-1):s)||"",this.imState=new o.a({idle:!1,timeOut:5e3}),this.idle$=this.imState.pipe(w("idle")),this.initApp=new Event("AngularInitialized",{bubbles:!0,cancelable:!1}),this.appReady=new Event("AngularReady",{bubbles:!0,cancelable:!1}),this.appTimeout=new Event("AngularTimeout",{bubbles:!0,cancelable:!1}),this.scullyLibConfig=Object.assign({},T,i);const c=!!(window["ScullyIO-exposed"]||{}).manualIdle;!this.scullyLibConfig.manualIdle&&window&&(this.scullyLibConfig.alwaysMonitor||E())&&(window.dispatchEvent(this.initApp),this.router.events.pipe(Object(h.a)(t=>t instanceof r.a&&void 0!==t.urlAfterRedirects),Object(h.a)(t=>!c||t.urlAfterRedirects!==this.initialUrl),Object(p.a)(()=>this.zoneIdleCheck())).subscribe()),this.scullyLibConfig.manualIdle&&window.dispatchEvent(this.initApp),this.scullyLibConfig.useTransferState&&n.startMonitoring()}fireManualMyAppReadyEvent(){return Object(n.a)(this,void 0,void 0,function*(){return window.dispatchEvent(this.appReady)})}init(){return Object(n.a)(this,void 0,void 0,function*(){return this.idle$.pipe(Object(_.a)(1)).toPromise()})}zoneIdleCheck(){return Object(n.a)(this,void 0,void 0,function*(){if(void 0===Zone)return this.simpleTimeout();const t=Zone.current.get("TaskTrackingZone");if(void 0===t)return this.simpleTimeout();this.imState.value.idle&&(yield this.setState("idle",!1)),this.zone.runOutsideAngular(()=>{let e,i=0;const n=Date.now(),s=()=>{clearTimeout(e),Date.now()-n>3e4?window.dispatchEvent(this.appTimeout):t.macroTasks.length>0&&void 0!==t.macroTasks.find(t=>t.source.includes("XMLHttpRequest"))||i<1?e=setTimeout(()=>{i+=1,s()},50):this.zone.run(()=>{setTimeout(()=>{window.dispatchEvent(this.appReady),this.setState("idle",!0)},250)})};s()})})}simpleTimeout(){return Object(n.a)(this,void 0,void 0,function*(){console.warn("Scully is using timeouts, add the needed polyfills instead!"),yield new Promise(t=>setTimeout(t,this.imState.value.timeOut)),window.dispatchEvent(this.appReady)})}setPupeteerTimeoutValue(t){this.imState.next(Object.assign(Object.assign({},this.imState.value),{timeOut:t}))}setState(t,e){this.imState.next(Object.assign(Object.assign({},this.imState.value),{[t]:e}))}}return t.\u0275fac=function(e){return new(e||t)(s.ec(s.C),s.ec(r.c),s.ec(I),s.ec(A))},t.\u0275prov=Object(s.Ob)({factory:function(){return new t(Object(s.ec)(s.C),Object(s.ec)(r.c),Object(s.ec)(I),Object(s.ec)(A))},token:t,providedIn:"root"}),t})(),B=(()=>{class t{constructor(t){this.router=t,this.refresh=new l.a(1),this.allRoutes$=this.refresh.pipe(Object(d.a)(()=>C("assets/scully-routes.json")),Object(g.a)(()=>(console.warn("Scully routes file not found, are you running the Scully generated version of your site?"),Object(a.a)([]))),Object(h.a)(t=>Array.isArray(t)),Object(b.a)(this.cleanDups),Object(m.a)({refCount:!1,bufferSize:1})),this.available$=this.allRoutes$.pipe(Object(b.a)(t=>t.filter(t=>!t.hasOwnProperty("published")||!1!==t.published)),Object(m.a)({refCount:!1,bufferSize:1})),this.unPublished$=this.allRoutes$.pipe(Object(b.a)(t=>t.filter(t=>!!t.hasOwnProperty("published")&&!1===t.published)),Object(m.a)({refCount:!1,bufferSize:1})),this.topLevel$=this.available$.pipe(Object(b.a)(t=>t.filter(t=>!t.route.slice(1).includes("/"))),Object(m.a)({refCount:!1,bufferSize:1})),this.reload()}getCurrent(){return location?Object(u.a)(Object(a.a)(new r.a(0,"","")),this.router.events).pipe(Object(h.a)(t=>t instanceof r.a),Object(d.a)(()=>this.available$),Object(b.a)(t=>{const e=x(encodeURI(location.pathname).trim());return t.find(t=>e===x(t.route.trim())||t.slugs&&Array.isArray(t.slugs)&&t.slugs.find(t=>e.endsWith(x(t.trim()))))})):Object(a.a)()}cleanDups(t){const e=new Map;return t.forEach(t=>e.set(JSON.stringify(Object.assign(Object.assign({},t),{route:M(t)?"":t.route})),t)),[...e.values()]}reload(){this.refresh.next()}}return t.\u0275fac=function(e){return new(e||t)(s.ec(r.c))},t.\u0275prov=Object(s.Ob)({factory:function(){return new t(Object(s.ec)(r.c))},token:t,providedIn:"root"}),t})();function M(t){const e=Object.keys(t);return!(1===e.length&&e.includes("route")||2===e.length&&e.includes("route")&&e.includes("title"))}let P,$=(()=>{class t{constructor(t,e,i,n,s){this.elmRef=t,this.srs=e,this.router=i,this.location=n,this.conf=s,this.baseUrl=this.conf.useTransferState||T.useTransferState,this.elm=this.elmRef.nativeElement,this.routes=this.srs.allRoutes$.pipe(Object(_.a)(1)).toPromise(),this.routeUpdates$=this.router.events.pipe(Object(h.a)(t=>t instanceof r.a),Object(h.a)(t=>P&&!P.endsWith(t.urlAfterRedirects)),Object(p.a)(t=>this.replaceContent())),this.routeSub=this.routeUpdates$.subscribe()}ngOnInit(){this.elm&&this.handlePage()}handlePage(){return Object(n.a)(this,void 0,void 0,function*(){const t=x(location.href);if(P===t)return;P=t;const e=document.createElement("template"),i=this.getCSSId(this.elm);if(window.scullyContent){const t=window.scullyContent.html;e.innerHTML=i!==window.scullyContent.cssId?t.split(window.scullyContent.cssId).join(i):t}else yield C(t+"/index.html","text").catch(t=>{if(Object(s.ab)()){const t=new URL(location.href);return C(`${this.conf.baseURIForScullyContent}/${x(t.pathname)}/index.html`,"text")}return Promise.reject(t)}).then(t=>{try{const n=t.split("\x3c!--scullyContent-begin--\x3e")[1].split("\x3c!--scullyContent-end--\x3e")[0];if(n.includes("_ngcontent")){const t="_ngcontent"+n.split("_ngcontent")[1].split("=")[0];e.innerHTML=n.split(t).join(i)}else e.innerHTML=n}catch(n){e.innerHTML='<h2 id="___scully-parsing-error___">Sorry, could not parse static page content</h2>\n            <p>This might happen if you are not using the static generated pages.</p>'}}).catch(t=>{e.innerHTML='<h2 id="___scully-parsing-error___">Sorry, could not load static page content</h2>',console.error("problem during loading static scully content",t)});const n=this.elm.parentElement||document.body,r=document.createComment("scullyContent-begin"),o=document.createComment("scullyContent-end");n.insertBefore(r,this.elm),n.insertBefore(e.content,this.elm),n.insertBefore(o,this.elm),setTimeout(()=>document.querySelectorAll("[href]").forEach(this.upgradeToRoutelink.bind(this)),10)})}upgradeToRoutelink(t){return Object(n.a)(this,void 0,void 0,function*(){if(!["A","BUTTON"].includes(t.tagName))return;const e=t.dataset.hash;if(e)return t.setAttribute("href","#"+e),t.setAttribute("onclick",""),void(t.onclick=t=>{t.preventDefault();const i=document.getElementById(e);if(i){const t=new URL(window.location.href);t.hash=e,history.replaceState("","",t.toString()),i.scrollIntoView()}});const i=yield this.routes,s=t.getAttribute("href"),r=x(s.toLowerCase()),o=i.find(t=>x(t.route.toLowerCase())===r);r&&o&&!r.startsWith("#")&&(t.onclick=t=>Object(n.a)(this,void 0,void 0,function*(){const e=o.route.split("/"),i=location.pathname.split("/");i.pop(),t.preventDefault(),(yield this.router.navigate(e).catch(t=>(console.error("routing error",t),!1)))&&i.every((t,i)=>e[i]===t)&&e.length!==i.length+1&&setTimeout(()=>this.replaceContent(),10)}))})}replaceContent(){window.scullyContent=void 0;const t=this.elm.parentElement;let e=function(t,e){const i=[],n=document.createNodeIterator(t,NodeFilter.SHOW_COMMENT,{acceptNode:t=>t.nodeValue&&!t.nodeValue.includes("scullyContent-begin")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});let s;for(;s=n.nextNode();)i.push(s);return i}(t)[0];for(;e&&e!==this.elm;){const i=e.nextSibling;t.removeChild(e),e=i}this.handlePage()}getCSSId(t){return t.getAttributeNames().find(t=>t.startsWith("_ngcontent"))||""}ngOnDestroy(){this.routeSub.unsubscribe(),P="//"}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(s.m),s.Sb(B),s.Sb(r.c),s.Sb(y.h),s.Sb(I))},t.\u0275cmp=s.Mb({type:t,selectors:[["scully-content"]],ngContentSelectors:j,decls:1,vars:0,template:function(t,e){1&t&&(s.nc(),s.mc(0))},styles:["\n      :host {\n        display: none;\n      }\n      scully-content {\n        display: none;\n      }\n    "],encapsulation:2,changeDetection:0}),t})(),W=(()=>{class t{}return t.\u0275mod=s.Qb({type:t}),t.\u0275inj=s.Pb({factory:function(e){return new(e||t)}}),t})(),k=(()=>{class t{constructor(t){this.idle=t}static forRoot(e=T){return e=Object.assign({},T,e),{ngModule:t,providers:[{provide:I,useValue:e}]}}}return t.\u0275mod=s.Qb({type:t}),t.\u0275inj=s.Pb({factory:function(e){return new(e||t)(s.ec(R))},imports:[[W],W]}),t})()}}]);
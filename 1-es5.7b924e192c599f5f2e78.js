!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{UXun:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("jtHE");function i(t,e,n){var i;return i=t&&"object"==typeof t?t:{bufferSize:t,windowTime:e,refCount:!1,scheduler:n},function(t){return t.lift(function(t){var e,n,i=t.bufferSize,o=void 0===i?Number.POSITIVE_INFINITY:i,u=t.windowTime,s=void 0===u?Number.POSITIVE_INFINITY:u,a=t.refCount,c=t.scheduler,l=0,f=!1,h=!1;return function(t){l++,e&&!f||(f=!1,e=new r.a(o,s,c),n=t.subscribe({next:function(t){e.next(t)},error:function(t){f=!0,e.error(t)},complete:function(){h=!0,n=void 0,e.complete()}}));var i=e.subscribe(this);this.add(function(){l--,i.unsubscribe(),n&&!h&&a&&0===l&&(n.unsubscribe(),n=void 0,e=void 0)})}}(i))}}},jtHE:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var i=n("XNiG"),a=function(t){s(n,t);var e=c(n);function n(t,i){var o;return r(this,n),(o=e.call(this,t,i)).scheduler=t,o.work=i,o}return o(n,[{key:"schedule",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e>0?u(f(n.prototype),"schedule",this).call(this,t,e):(this.delay=e,this.state=t,this.scheduler.flush(this),this)}},{key:"execute",value:function(t,e){return e>0||this.closed?u(f(n.prototype),"execute",this).call(this,t,e):this._execute(t,e)}},{key:"requestAsyncId",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return null!==r&&r>0||null===r&&this.delay>0?u(f(n.prototype),"requestAsyncId",this).call(this,t,e,r):t.flush(this)}}]),n}(n("3N8a").a),l=new(function(t){s(n,t);var e=c(n);function n(){return r(this,n),e.apply(this,arguments)}return n}(n("IjjT").a))(a),h=n("quSY"),d=n("7o/Q"),p=n("WMd4"),v=function(t){s(n,t);var e=c(n);function n(t,i){var o,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return r(this,n),(o=e.call(this,t)).scheduler=i,o.delay=u,o}return o(n,[{key:"scheduleMessage",value:function(t){this.destination.add(this.scheduler.schedule(n.dispatch,this.delay,new b(t,this.destination)))}},{key:"_next",value:function(t){this.scheduleMessage(p.a.createNext(t))}},{key:"_error",value:function(t){this.scheduleMessage(p.a.createError(t)),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleMessage(p.a.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(t){var e=t.notification,n=t.destination;e.observe(n),this.unsubscribe()}}]),n}(d.a),b=function t(e,n){r(this,t),this.notification=e,this.destination=n},y=n("9ppp"),m=n("Ylt2"),w=function(t){s(n,t);var e=c(n);function n(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Number.POSITIVE_INFINITY,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.POSITIVE_INFINITY,u=arguments.length>2?arguments[2]:void 0;return r(this,n),(t=e.call(this)).scheduler=u,t._events=[],t._infiniteTimeWindow=!1,t._bufferSize=i<1?1:i,t._windowTime=o<1?1:o,o===Number.POSITIVE_INFINITY?(t._infiniteTimeWindow=!0,t.next=t.nextInfiniteTimeWindow):t.next=t.nextTimeWindow,t}return o(n,[{key:"nextInfiniteTimeWindow",value:function(t){var e=this._events;e.push(t),e.length>this._bufferSize&&e.shift(),u(f(n.prototype),"next",this).call(this,t)}},{key:"nextTimeWindow",value:function(t){this._events.push(new g(this._getNow(),t)),this._trimBufferThenGetEvents(),u(f(n.prototype),"next",this).call(this,t)}},{key:"_subscribe",value:function(t){var e,n=this._infiniteTimeWindow,r=n?this._events:this._trimBufferThenGetEvents(),i=this.scheduler,o=r.length;if(this.closed)throw new y.a;if(this.isStopped||this.hasError?e=h.a.EMPTY:(this.observers.push(t),e=new m.a(this,t)),i&&t.add(t=new v(t,i)),n)for(var u=0;u<o&&!t.closed;u++)t.next(r[u]);else for(var s=0;s<o&&!t.closed;s++)t.next(r[s].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),e}},{key:"_getNow",value:function(){return(this.scheduler||l).now()}},{key:"_trimBufferThenGetEvents",value:function(){for(var t=this._getNow(),e=this._bufferSize,n=this._windowTime,r=this._events,i=r.length,o=0;o<i&&!(t-r[o].time<n);)o++;return i>e&&(o=Math.max(o,i-e)),o>0&&r.splice(0,o),r}}]),n}(i.a),g=function t(e,n){r(this,t),this.time=e,this.value=n}},sbAP:function(e,i,u){"use strict";u.d(i,"a",function(){return X}),u.d(i,"b",function(){return K}),u.d(i,"c",function(){return V}),u.d(i,"d",function(){return U});var a=u("mrSG"),l=u("fXoL"),f=u("tyNb"),h=u("2Vo4"),d=u("5yfJ"),p=u("LRne"),v=u("jtHE"),b=u("VRyK"),y=u("pLZG"),m=u("eIep"),w=u("vkgz"),g=u("SxV6"),_=u("lJxs"),O=u("UXun");function S(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.length;if(0===r)throw new Error("list of properties cannot be empty.");return function(t){return Object(_.a)(function(t,e){return function(n){for(var r=n,i=0;i<e;i++){var o=r[t[i]];if(void 0===o)return;r=o}return r}}(e,r))(t)}}var j=u("IzEk"),T=u("7o/Q"),k=function(){function t(e,n){r(this,t),this.predicate=e,this.inclusive=n}return o(t,[{key:"call",value:function(t,e){return e.subscribe(new x(t,this.predicate,this.inclusive))}}]),t}(),x=function(t){s(n,t);var e=c(n);function n(t,i,o){var u;return r(this,n),(u=e.call(this,t)).predicate=i,u.inclusive=o,u.index=0,u}return o(n,[{key:"_next",value:function(t){var e,n=this.destination;try{e=this.predicate(t,this.index++)}catch(r){return void n.error(r)}this.nextOrComplete(t,e)}},{key:"nextOrComplete",value:function(t,e){var n=this.destination;Boolean(e)?n.next(t):(this.inclusive&&n.next(t),n.complete())}}]),n}(T.a),I=u("JIr8"),E=u("ofXK"),R=["*"],C={useTransferState:!0,alwaysMonitor:!1,manualIdle:!1,baseURIForScullyContent:"http://localhost:1668"},A=new l.t("scullyLibConfig",{factory:function(){return C}}),N=function(t){return t.includes("#")&&(t=t.split("#")[0]),t.includes("?")&&(t=t.split("?")[0]),t.endsWith("/")?t.slice(0,-1):t};function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json";return new Promise(function(n,r){var i=new XMLHttpRequest;i.responseType=e,i.addEventListener("load",function(t){if(200!==i.status)return r(i);n(i.response)}),i.addEventListener("error",function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r(e)}),i.open("get",t,!0),i.send()})}var U=function(){return window&&"running"===window.ScullyIO},P=function(){return window&&"generated"===window.ScullyIO};function B(t,e){return t.endsWith("/")&&e.startsWith("/")?"".concat(t).concat(e.substr(1)):t.endsWith("/")||e.startsWith("/")?"".concat(t).concat(e):"".concat(t,"/").concat(e)}var M,W=((M=function(){function t(e,n){var i=this;r(this,t),this.document=e,this.router=n,this.inlineOnly=!1,this.currentBaseUrl="//",this.stateBS=new h.a({}),this.state$=this.stateBS.pipe(Object(y.a)(function(t){return void 0!==t})),this.nextUrl=this.router.events.pipe(Object(y.a)(function(t){return t instanceof f.b}),Object(m.a)(function(t){return N(i.initialUrl)===N(t.url)?(i.initialUrl="__done__with__Initial__navigation__",d.a):Object(p.a)(t)}),Object(w.a)(function(){return i.stateBS.next(void 0)}),Object(m.a)(function(t){return i.router.events.pipe(Object(y.a)(function(e){return e instanceof f.a&&e.url===t.url}),Object(g.a)())}),Object(_.a)(function(t){return N(t.urlAfterRedirects||t.url)}),Object(O.a)(1))}return o(t,[{key:"startMonitoring",value:function(){window&&window["ScullyIO-injected"]&&window["ScullyIO-injected"].inlineStateOnly&&(this.inlineOnly=!0),this.setupEnvForTransferState(),this.setupStartNavMonitoring()}},{key:"setupEnvForTransferState",value:function(){if(U()){this.injectScript();var t=window["ScullyIO-exposed"]||{};t.transferState&&(this.stateBS.next(t.transferState),this.saveState(t.transferState))}else P()&&(this.initialUrl=window.location.pathname||"__no_NO_no__",this.initialUrl="/"!==this.initialUrl&&this.initialUrl.endsWith("/")?this.initialUrl.slice(0,-1):this.initialUrl,this.stateBS.next(window&&window["ScullyIO-transfer-state"]||{}))}},{key:"injectScript",value:function(){this.script=this.document.createElement("script"),this.script.setAttribute("id","ScullyIO-transfer-state");for(var t=document.body.lastChild;"SCRIPT"===t.previousSibling.nodeName;)t=t.previousSibling;document.body.insertBefore(this.script,t)}},{key:"getState",value:function(t){return this.fetchTransferState(),this.state$.pipe(S(t))}},{key:"stateHasKey",value:function(t){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(t)}},{key:"stateKeyHasValue",value:function(t){return this.stateBS.value&&this.stateBS.value.hasOwnProperty(t)&&null!=this.stateBS.value[t]}},{key:"setState",value:function(t,e){var r=Object.assign(Object.assign({},this.stateBS.value),n({},t,e));this.stateBS.next(r),this.saveState(r)}},{key:"saveState",value:function(t){var e,n;U()&&(this.script.textContent="{window['ScullyIO-transfer-state']=_u(`/** ___SCULLY_STATE_START___ */".concat((e=JSON.stringify(t),n={"'":"_~q~","`":"_~b~","/":"_~s~","<":"_~l~",">":"_~g~"},e.replace(/[`'<>\/]/g,function(t){return n[t]}).replace(/\\\"/g,"\\'")),"/** ___SCULLY_STATE_END___ */`);function _u(t) {t=t.split('/** ___SCULLY_STATE_START___ */')[1].split('/** ___SCULLY_STATE_END___ */')[0];const u={'_~b~': \"`\",'_~q~': \"'\",'_~s~': '/','_~l~': '<','_~g~': '>'};return JSON.parse(t.replace(/\\'/g,`\\\\\"`).replace(/_~[^]~/g, (s) => u[s]).replace(/\\n/g,`\\\\n`).replace(/\\r/g,`\\\\r`));}}"))}},{key:"setupStartNavMonitoring",value:function(){P()&&this.nextUrl.subscribe()}},{key:"useScullyTransferState",value:function(t,e){var n=this;return P()?this.getState(t):e.pipe(Object(w.a)(function(e){return n.setState(t,e)}))}},{key:"fetchTransferState",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n,r,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(t){return t.split("/").filter(function(t){return""!==t.trim()})[0]},t.next=3,new Promise(function(t){return setTimeout(t,0)});case 3:return t.next=5,this.nextUrl.pipe(Object(j.a)(1)).toPromise();case 5:n=t.sent,r=e(n),this.currentBaseUrl!==r&&(this.currentBaseUrl=r,this.nextUrl.pipe(function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){return n.lift(new k(t,e))}}(function(t){return e(t)===i.currentBaseUrl}),Object(m.a)(function(t){return i.inlineOnly?i.readFromIndex(t):i.readFromJson(t)}),Object(I.a)(function(t){return console.warn("Error while loading of parsing Scully state:",t),Object(p.a)({})}),Object(w.a)(function(t){i.stateBS.next(t)})).subscribe({complete:function(){i.currentBaseUrl="//"}}));case 8:case"end":return t.stop()}},t,this)}))}},{key:"readFromJson",value:function(t){return L(F(B(t,"/data.json")))}},{key:"readFromIndex",value:function(t){return L(F(B(t,"/index.html")),"text").then(function(t){var e,n=t.split("/** ___SCULLY_STATE_START___ */")[1].split("/** ___SCULLY_STATE_END___ */")[0];return JSON.parse((e={"_~q~":"'","_~b~":"`","_~s~":"/","_~l~":"<","_~g~":">"},n.replace(/\\'/g,'\\"').replace(/_~[^]~/g,function(t){return e[t]}).replace(/\n/g,"/n").replace(/\r/g,"/r")))})}}]),t}()).\u0275fac=function(t){return new(t||M)(l.ec(E.d),l.ec(f.c))},M.\u0275prov=Object(l.Ob)({factory:function(){return new M(Object(l.ec)(E.d),Object(l.ec)(f.c))},token:M,providedIn:"root"}),M);function F(t){return t.startsWith("/")?t.slice(1):t}var z,$,D=(($=function(){function t(e,n,i,o){var u,s=this;r(this,t),this.zone=e,this.router=n,this.initialUrl=((u=window&&window.location.pathname).endsWith("/")?u.slice(0,-1):u)||"",this.imState=new h.a({idle:!1,timeOut:5e3}),this.idle$=this.imState.pipe(S("idle")),this.initApp=new Event("AngularInitialized",{bubbles:!0,cancelable:!1}),this.appReady=new Event("AngularReady",{bubbles:!0,cancelable:!1}),this.appTimeout=new Event("AngularTimeout",{bubbles:!0,cancelable:!1}),this.scullyLibConfig=Object.assign({},C,i);var a=!!(window["ScullyIO-exposed"]||{}).manualIdle;!this.scullyLibConfig.manualIdle&&window&&(this.scullyLibConfig.alwaysMonitor||U())&&(window.dispatchEvent(this.initApp),this.router.events.pipe(Object(y.a)(function(t){return t instanceof f.a&&void 0!==t.urlAfterRedirects}),Object(y.a)(function(t){return!a||t.urlAfterRedirects!==s.initialUrl}),Object(w.a)(function(){return s.zoneIdleCheck()})).subscribe()),this.scullyLibConfig.manualIdle&&window.dispatchEvent(this.initApp),this.scullyLibConfig.useTransferState&&o.startMonitoring()}return o(t,[{key:"fireManualMyAppReadyEvent",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",window.dispatchEvent(this.appReady));case 1:case"end":return t.stop()}},t,this)}))}},{key:"init",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.idle$.pipe(Object(j.a)(1)).toPromise());case 1:case"end":return t.stop()}},t,this)}))}},{key:"zoneIdleCheck",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==Zone){t.next=2;break}return t.abrupt("return",this.simpleTimeout());case 2:if(void 0!==(e=Zone.current.get("TaskTrackingZone"))){t.next=5;break}return t.abrupt("return",this.simpleTimeout());case 5:if(t.t0=this.imState.value.idle,!t.t0){t.next=9;break}return t.next=9,this.setState("idle",!1);case 9:this.zone.runOutsideAngular(function(){var t,r=0,i=Date.now();!function o(){clearTimeout(t),Date.now()-i>3e4?window.dispatchEvent(n.appTimeout):e.macroTasks.length>0&&void 0!==e.macroTasks.find(function(t){return t.source.includes("XMLHttpRequest")})||r<1?t=setTimeout(function(){r+=1,o()},50):n.zone.run(function(){setTimeout(function(){window.dispatchEvent(n.appReady),n.setState("idle",!0)},250)})}()});case 10:case"end":return t.stop()}},t,this)}))}},{key:"simpleTimeout",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.warn("Scully is using timeouts, add the needed polyfills instead!"),t.next=3,new Promise(function(t){return setTimeout(t,e.imState.value.timeOut)});case 3:window.dispatchEvent(this.appReady);case 4:case"end":return t.stop()}},t,this)}))}},{key:"setPupeteerTimeoutValue",value:function(t){this.imState.next(Object.assign(Object.assign({},this.imState.value),{timeOut:t}))}},{key:"setState",value:function(t,e){this.imState.next(Object.assign(Object.assign({},this.imState.value),n({},t,e)))}}]),t}()).\u0275fac=function(t){return new(t||$)(l.ec(l.C),l.ec(f.c),l.ec(A),l.ec(W))},$.\u0275prov=Object(l.Ob)({factory:function(){return new $(Object(l.ec)(l.C),Object(l.ec)(f.c),Object(l.ec)(A),Object(l.ec)(W))},token:$,providedIn:"root"}),$),V=((z=function(){function e(t){r(this,e),this.router=t,this.refresh=new v.a(1),this.allRoutes$=this.refresh.pipe(Object(m.a)(function(){return L("assets/scully-routes.json")}),Object(I.a)(function(){return console.warn("Scully routes file not found, are you running the Scully generated version of your site?"),Object(p.a)([])}),Object(y.a)(function(t){return Array.isArray(t)}),Object(_.a)(this.cleanDups),Object(O.a)({refCount:!1,bufferSize:1})),this.available$=this.allRoutes$.pipe(Object(_.a)(function(t){return t.filter(function(t){return!t.hasOwnProperty("published")||!1!==t.published})}),Object(O.a)({refCount:!1,bufferSize:1})),this.unPublished$=this.allRoutes$.pipe(Object(_.a)(function(t){return t.filter(function(t){return!!t.hasOwnProperty("published")&&!1===t.published})}),Object(O.a)({refCount:!1,bufferSize:1})),this.topLevel$=this.available$.pipe(Object(_.a)(function(t){return t.filter(function(t){return!t.route.slice(1).includes("/")})}),Object(O.a)({refCount:!1,bufferSize:1})),this.reload()}return o(e,[{key:"getCurrent",value:function(){var t=this;return location?Object(b.a)(Object(p.a)(new f.a(0,"","")),this.router.events).pipe(Object(y.a)(function(t){return t instanceof f.a}),Object(m.a)(function(){return t.available$}),Object(_.a)(function(t){var e=N(encodeURI(location.pathname).trim());return t.find(function(t){return e===N(t.route.trim())||t.slugs&&Array.isArray(t.slugs)&&t.slugs.find(function(t){return e.endsWith(N(t.trim()))})})})):Object(p.a)()}},{key:"cleanDups",value:function(e){var n=new Map;return e.forEach(function(t){return n.set(JSON.stringify(Object.assign(Object.assign({},t),{route:(e=t,r=Object.keys(e),1===r.length&&r.includes("route")||2===r.length&&r.includes("route")&&r.includes("title")?t.route:"")})),t);var e,r}),t(n.values())}},{key:"reload",value:function(){this.refresh.next()}}]),e}()).\u0275fac=function(t){return new(t||z)(l.ec(f.c))},z.\u0275prov=Object(l.Ob)({factory:function(){return new z(Object(l.ec)(f.c))},token:z,providedIn:"root"}),z);var Y,H,J,q,X=((q=function(){function t(e,n,i,o,u){var s=this;r(this,t),this.elmRef=e,this.srs=n,this.router=i,this.location=o,this.conf=u,this.baseUrl=this.conf.useTransferState||C.useTransferState,this.elm=this.elmRef.nativeElement,this.routes=this.srs.allRoutes$.pipe(Object(j.a)(1)).toPromise(),this.routeUpdates$=this.router.events.pipe(Object(y.a)(function(t){return t instanceof f.a}),Object(y.a)(function(t){return Y&&!Y.endsWith(t.urlAfterRedirects)}),Object(w.a)(function(t){return s.replaceContent()})),this.routeSub=this.routeUpdates$.subscribe()}return o(t,[{key:"ngOnInit",value:function(){this.elm&&this.handlePage()}},{key:"handlePage",value:function(){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n,r,i,o,u,s,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=N(location.href),Y!==e){t.next=3;break}return t.abrupt("return");case 3:if(Y=e,n=document.createElement("template"),r=this.getCSSId(this.elm),!window.scullyContent){t.next=10;break}i=window.scullyContent.html,n.innerHTML=r!==window.scullyContent.cssId?i.split(window.scullyContent.cssId).join(r):i,t.next=12;break;case 10:return t.next=12,L(e+"/index.html","text").catch(function(t){if(Object(l.ab)()){var e=new URL(location.href);return L("".concat(a.conf.baseURIForScullyContent,"/").concat(N(e.pathname),"/index.html"),"text")}return Promise.reject(t)}).then(function(t){try{var e=t.split("\x3c!--scullyContent-begin--\x3e")[1].split("\x3c!--scullyContent-end--\x3e")[0];if(e.includes("_ngcontent")){var i="_ngcontent"+e.split("_ngcontent")[1].split("=")[0];n.innerHTML=e.split(i).join(r)}else n.innerHTML=e}catch(o){n.innerHTML='<h2 id="___scully-parsing-error___">Sorry, could not parse static page content</h2>\n            <p>This might happen if you are not using the static generated pages.</p>'}}).catch(function(t){n.innerHTML='<h2 id="___scully-parsing-error___">Sorry, could not load static page content</h2>',console.error("problem during loading static scully content",t)});case 12:o=this.elm.parentElement||document.body,u=document.createComment("scullyContent-begin"),s=document.createComment("scullyContent-end"),o.insertBefore(u,this.elm),o.insertBefore(n.content,this.elm),o.insertBefore(s,this.elm),setTimeout(function(){return document.querySelectorAll("[href]").forEach(a.upgradeToRoutelink.bind(a))},10);case 14:case"end":return t.stop()}},t,this)}))}},{key:"upgradeToRoutelink",value:function(t){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n,r,i,o,u,s=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(["A","BUTTON"].includes(t.tagName)){e.next=2;break}return e.abrupt("return");case 2:if(!(n=t.dataset.hash)){e.next=5;break}return e.abrupt("return",(t.setAttribute("href","#"+n),t.setAttribute("onclick",""),void(t.onclick=function(t){t.preventDefault();var e=document.getElementById(n);if(e){var r=new URL(window.location.href);r.hash=n,history.replaceState("","",r.toString()),e.scrollIntoView()}})));case 5:return e.next=7,this.routes;case 7:r=e.sent,i=t.getAttribute("href"),o=N(i.toLowerCase()),u=r.find(function(t){return N(t.route.toLowerCase())===o}),o&&u&&!o.startsWith("#")&&(t.onclick=function(t){return Object(a.a)(s,void 0,void 0,regeneratorRuntime.mark(function e(){var n,r,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.route.split("/"),(r=location.pathname.split("/")).pop(),t.preventDefault(),e.next=5,this.router.navigate(n).catch(function(t){return console.error("routing error",t),!1});case 5:if(e.t1=e.sent,!e.t1){e.next=8;break}e.t1=r.every(function(t,e){return n[e]===t});case 8:if(e.t0=e.t1,!e.t0){e.next=11;break}e.t0=n.length!==r.length+1;case 11:if(e.t2=e.t0,!e.t2){e.next=14;break}setTimeout(function(){return i.replaceContent()},10);case 14:case"end":return e.stop()}},e,this)}))});case 12:case"end":return e.stop()}},e,this)}))}},{key:"replaceContent",value:function(){window.scullyContent=void 0;for(var t=this.elm.parentElement,e=function(t,e){for(var n,r=[],i=document.createNodeIterator(t,NodeFilter.SHOW_COMMENT,{acceptNode:function(t){return t.nodeValue&&!t.nodeValue.includes("scullyContent-begin")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});n=i.nextNode();)r.push(n);return r}(t)[0];e&&e!==this.elm;){var n=e.nextSibling;t.removeChild(e),e=n}this.handlePage()}},{key:"getCSSId",value:function(t){return t.getAttributeNames().find(function(t){return t.startsWith("_ngcontent")})||""}},{key:"ngOnDestroy",value:function(){this.routeSub.unsubscribe(),Y="//"}}]),t}()).\u0275fac=function(t){return new(t||q)(l.Sb(l.m),l.Sb(V),l.Sb(f.c),l.Sb(E.h),l.Sb(A))},q.\u0275cmp=l.Mb({type:q,selectors:[["scully-content"]],ngContentSelectors:R,decls:1,vars:0,template:function(t,e){1&t&&(l.nc(),l.mc(0))},styles:["\n      :host {\n        display: none;\n      }\n      scully-content {\n        display: none;\n      }\n    "],encapsulation:2,changeDetection:0}),q),G=((J=function t(){r(this,t)}).\u0275mod=l.Qb({type:J}),J.\u0275inj=l.Pb({factory:function(t){return new(t||J)}}),J),K=((H=function(){function t(e){r(this,t),this.idle=e}return o(t,null,[{key:"forRoot",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;return e=Object.assign({},C,e),{ngModule:t,providers:[{provide:A,useValue:e}]}}}]),t}()).\u0275mod=l.Qb({type:H}),H.\u0275inj=l.Pb({factory:function(t){return new(t||H)(l.ec(D))},imports:[[G],G]}),H)}}])}();
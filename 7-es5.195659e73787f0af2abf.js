!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ElqU:function(e,o,i){"use strict";i.r(o),i.d(o,"StaticPagesModule",function(){return G});var c=i("ofXK"),r=(i("R1ws"),i("fXoL"));i("XNiG"),i("quSY"),i("LRne"),i("vkgz"),i("Kj3r");var a=i("pLZG"),s=(i("lJxs"),i("IzEk"),i("8LU1"),i("nLfN"));i("HDdC"),"undefined"!=typeof Element&&Element;var d,h,u=((h=function(){function e(n,o){t(this,e),this._platform=n,this._document=o}return n(e,[{key:"getHighContrastMode",value:function(){if(!this._platform.isBrowser)return 0;var t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);var e=this._document.defaultView||window,n=e&&e.getComputedStyle?e.getComputedStyle(t):null,o=(n&&n.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(t),o){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}},{key:"_applyBodyHighContrastModeCssClasses",value:function(){if(this._platform.isBrowser&&this._document.body){var t=this._document.body.classList;t.remove("cdk-high-contrast-active"),t.remove("cdk-high-contrast-black-on-white"),t.remove("cdk-high-contrast-white-on-black");var e=this.getHighContrastMode();1===e?(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-black-on-white")):2===e&&(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-white-on-black"))}}}]),e}()).\u0275fac=function(t){return new(t||h)(r.ec(s.a),r.ec(c.d))},h.\u0275prov=Object(r.Ob)({factory:function(){return new h(Object(r.ec)(s.a),Object(r.ec)(c.d))},token:h,providedIn:"root"}),h),l=((d=function e(){t(this,e)}).\u0275mod=r.Qb({type:d}),d.\u0275inj=r.Pb({factory:function(t){return new(t||d)}}),d),p=new r.S("11.1.1");i("JX91");var m,g=new r.S("11.1.1"),b=new r.t("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}}),f=((m=function(){function e(n,o,i){t(this,e),this._hasDoneGlobalChecks=!1,this._document=i,n._applyBodyHighContrastModeCssClasses(),this._sanityChecks=o,this._hasDoneGlobalChecks||(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}return n(e,[{key:"_getWindow",value:function(){var t=this._document.defaultView||window;return"object"==typeof t&&t?t:null}},{key:"_checksAreEnabled",value:function(){return Object(r.ab)()&&!this._isTestEnv()}},{key:"_isTestEnv",value:function(){var t=this._getWindow();return t&&(t.__karma__||t.jasmine)}},{key:"_checkDoctypeIsDefined",value:function(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.doctype)&&!this._document.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}},{key:"_checkThemeIsPresent",value:function(){if(this._checksAreEnabled()&&!1!==this._sanityChecks&&this._sanityChecks.theme&&this._document.body&&"function"==typeof getComputedStyle){var t=this._document.createElement("div");t.classList.add("mat-theme-loaded-marker"),this._document.body.appendChild(t);var e=getComputedStyle(t);e&&"none"!==e.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),this._document.body.removeChild(t)}}},{key:"_checkCdkVersionMatch",value:function(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.version)&&g.full!==p.full&&console.warn("The Angular Material version ("+g.full+") does not match the Angular CDK version ("+p.full+").\nPlease ensure the versions of these two packages exactly match.")}}]),e}()).\u0275mod=r.Qb({type:m}),m.\u0275inj=r.Pb({factory:function(t){return new(t||m)(r.ec(u),r.ec(b,8),r.ec(c.d))},imports:[[l],l]}),m);try{"undefined"!=typeof Intl}catch(j){!1}var _,y,C,k,w=((_=function e(){t(this,e)}).\u0275mod=r.Qb({type:_}),_.\u0275inj=r.Pb({factory:function(t){return new(t||_)},imports:[[f],f]}),_),v=i("sbAP"),x=i("tyNb"),M=i("eIep"),P=[{path:":id",component:(y=function e(n,o){var i=this;t(this,e),this.router=n,this.scully=o,this.current$=this.router.events.pipe(Object(a.a)(function(t){return t instanceof x.a}),Object(M.a)(function(t){return i.scully.getCurrent()}))},y.\u0275fac=function(t){return new(t||y)(r.Sb(x.c),r.Sb(v.c))},y.\u0275cmp=r.Mb({type:y,selectors:[["scheibentoenung-schmieder-staticpages"]],decls:19,vars:3,consts:[[1,"section","profile-content"],[1,"container"],[1,"row"],[1,"col-md-12","ml-auto","mr-auto"]],template:function(t,e){var n;(1&t&&(r.Xb(0,"div",0),r.Gc(1,"\n  "),r.Xb(2,"div",1),r.Gc(3,"\n    "),r.Xb(4,"div",2),r.Gc(5,"\n      "),r.Xb(6,"div",3),r.Gc(7,"\n        "),r.Xb(8,"h1"),r.Gc(9),r.kc(10,"async"),r.Wb(),r.Gc(11,"\n        "),r.Xb(12,"p"),r.Tb(13,"scully-content"),r.Wb(),r.Gc(14,"\n      "),r.Wb(),r.Gc(15,"\n    "),r.Wb(),r.Gc(16,"\n  "),r.Wb(),r.Gc(17,"\n"),r.Wb(),r.Gc(18,"\n")),2&t)&&(r.Fb(9),r.Hc(null==(n=r.lc(10,1,e.current$))?null:n.title))},directives:[v.a],pipes:[c.b],styles:[".img-rounded[_ngcontent-%COMP%]{border-radius:12px;transition:opacity .5s ease 0s;max-width:100%}.img-details[_ngcontent-%COMP%]{min-height:50px;padding:0 4px .5em}.img-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.img-details[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{margin-left:10px;margin-top:-21px;width:40px}.img-circle[_ngcontent-%COMP%]{background-color:#fff;margin-bottom:10px;padding:4px;border-radius:50%!important;max-width:100%}.img-thumbnail[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{border:0;border-radius:12px;box-shadow:0 1px 2px rgba(164,158,147,.6);margin-bottom:10px}.img-no-padding[_ngcontent-%COMP%]{padding:0}.example-page[_ngcontent-%COMP%]   .img-rounded[_ngcontent-%COMP%]{margin:50px 0 20px}.img-shadow[_ngcontent-%COMP%]{box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.images-title[_ngcontent-%COMP%]{margin-bottom:20px;height:50px}.nav-link[_ngcontent-%COMP%]   .profile-photo-small[_ngcontent-%COMP%]{width:40px;height:30px;margin:-10px 0 0 -15px}.profile-picture[_ngcontent-%COMP%]{margin:0 auto}.profile-picture[_ngcontent-%COMP%]   .fileinput-new[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;margin-bottom:10px}.profile-picture[_ngcontent-%COMP%]   .fileinput-exists[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px;max-height:150px;border-radius:50%;margin-bottom:10px}img[_ngcontent-%COMP%]{width:100vw}@media (min-width:992px){img[_ngcontent-%COMP%]{width:400px}}"]}),y),data:{markdown:!0}}],O=((k=function e(){t(this,e)}).\u0275mod=r.Qb({type:k}),k.\u0275inj=r.Pb({factory:function(t){return new(t||k)},imports:[[x.e.forChild(P)],x.e]}),k),G=((C=function e(){t(this,e)}).\u0275mod=r.Qb({type:C}),C.\u0275inj=r.Pb({factory:function(t){return new(t||C)},imports:[[c.c,O,v.b,w]]}),C)}}])}();
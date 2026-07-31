import{W as Ts,S as ks,O as Cs,a as Ls,V as Pn,M as Ms,P as $s,C as Rs}from"./three-BBlaNamj.js";import{g as Vi}from"./gsap-CzGW6FVa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();var pr="1.3.25";function Hr(t,e,r){return Math.max(t,Math.min(e,r))}function Ps(t,e,r){return(1-r)*t+r*e}function As(t,e,r,i){return Ps(t,e,1-Math.exp(-r*i))}function Ds(t,e){return(t%e+e)%e}var Os=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(t){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const r=Hr(0,this.currentTime/this.duration,1);e=r>=1;const i=e?1:this.easing(r);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=As(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:r,duration:i,easing:n,onStart:s,onUpdate:l}){this.from=this.value=t,this.to=e,this.lerp=r,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=l}};function zs(t,e){let r;return function(...i){clearTimeout(r),r=setTimeout(()=>{r=void 0,t.apply(this,i)},e)}}var Hs=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(t,e,{autoResize:r=!0,debounce:i=250}={}){this.wrapper=t,this.content=e,r&&(this.debouncedResize=zs(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Br=class{events={};emit(t,...e){const r=this.events[t]||[];for(let i=0,n=r.length;i<n;i++)r[i]?.(...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{this.events[t]=this.events[t]?.filter(r=>e!==r)}}off(t,e){this.events[t]=this.events[t]?.filter(r=>e!==r)}destroy(){this.events={}}};const Bs=100/6,Ot={passive:!1};function gr(t,e){return t===1?Bs:t===2?e:1}var Is=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Br;constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ot),this.element.addEventListener("touchstart",this.onTouchStart,Ot),this.element.addEventListener("touchmove",this.onTouchMove,Ot),this.element.addEventListener("touchend",this.onTouchEnd,Ot)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ot),this.element.removeEventListener("touchstart",this.onTouchStart,Ot),this.element.removeEventListener("touchmove",this.onTouchMove,Ot),this.element.removeEventListener("touchend",this.onTouchEnd,Ot)}onTouchStart=t=>{const{clientX:e,clientY:r}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})};onTouchMove=t=>{const{clientX:e,clientY:r}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.options.touchMultiplier,n=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=r,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:t})};onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})};onWheel=t=>{let{deltaX:e,deltaY:r,deltaMode:i}=t;const n=gr(i,this.window.width),s=gr(i,this.window.height);e*=n,r*=s,e*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:r,event:t})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const mr=t=>Math.min(1,1.001-2**(-10*t));var Ns=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Os;emitter=new Br;dimensions;virtualScroll;constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:r=t,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:s=.075,touchInertiaExponent:l=1.7,duration:o,easing:c,lerp:v=.1,infinite:y=!1,orientation:g="vertical",gestureOrientation:h=g==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:f=1,autoResize:O=!0,prevent:$,virtualScroll:W,overscroll:H=!0,autoRaf:X=!1,anchors:w=!1,autoToggle:he=!1,allowNestedScroll:B=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:ye=x,stopInertiaOnNavigate:xe=!1}={}){window.lenisVersion=pr,window.lenis||(window.lenis={}),window.lenis.version=pr,g==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof o=="number"&&typeof c!="function"?c=mr:typeof c=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:t,content:e,eventsTarget:r,smoothWheel:i,syncTouch:n,syncTouchLerp:s,touchInertiaExponent:l,duration:o,easing:c,lerp:v,infinite:y,gestureOrientation:h,orientation:g,touchMultiplier:d,wheelMultiplier:f,autoResize:O,prevent:$,virtualScroll:W,overscroll:H,autoRaf:X,anchors:w,autoToggle:he,allowNestedScroll:B,naiveDimensions:ye,stopInertiaOnNavigate:xe},this.dimensions=new Hs(t,e,{autoResize:O}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Is(r,{touchMultiplier:d,wheelMultiplier:f}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}onScrollEnd=t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=t=>{t.propertyName?.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()};setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}onClick=t=>{const e=t.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),r=new URL(window.location.href);if(this.options.anchors){const i=e.find(n=>r.host===n.host&&r.pathname===n.pathname&&n.hash);if(i){const n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,n);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>r.host===i.host&&r.pathname!==i.pathname)){this.reset();return}};onPointerDown=t=>{t.button===1&&this.reset()};isTouchOnSelectionHandle(t){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const r=t.targetTouches[0]??t.changedTouches[0];if(!r)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const n=i[0],s=i[i.length-1],l=40,o=Math.hypot(r.clientX-n.left,r.clientY-n.top)<=l,c=Math.hypot(r.clientX-s.right,r.clientY-s.bottom)<=l;return o||c}onVirtualScroll=t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:r,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:r,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const n=i.type.includes("touch"),s=i.type.includes("wheel");if(n&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const l=e===0&&r===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&l&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&e===0;if(l||o)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const v=this.options.prevent,y=Math.abs(e)>=Math.abs(r)?"horizontal":"vertical";if(c.find(f=>f instanceof HTMLElement&&(typeof v=="function"&&v?.(f)||f.hasAttribute?.("data-lenis-prevent")||y==="vertical"&&f.hasAttribute?.("data-lenis-prevent-vertical")||y==="horizontal"&&f.hasAttribute?.("data-lenis-prevent-horizontal")||n&&f.hasAttribute?.("data-lenis-prevent-touch")||s&&f.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(f,{deltaX:e,deltaY:r}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let g=r;this.options.gestureOrientation==="both"?g=Math.abs(r)>Math.abs(e)?r:e:this.options.gestureOrientation==="horizontal"&&(g=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const h=n&&this.options.syncTouch,d=n&&i.type==="touchend";d&&(g=Math.sign(g)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+g,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(t,{offset:e=0,immediate:r=!1,lock:i=!1,programmatic:n=!0,lerp:s=n?this.options.lerp:void 0,duration:l=n?this.options.duration:void 0,easing:o=n?this.options.easing:void 0,onStart:c,onComplete:v,force:y=!1,userData:g}={}){if((this.isStopped||this.isLocked)&&!y)return;let h=t,d=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let f=null;if(typeof h=="string"?(f=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),f||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&h?.nodeType&&(f=h),f){if(this.options.wrapper!==window){const w=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?w.left:w.top}const O=f.getBoundingClientRect(),$=getComputedStyle(f),W=this.isHorizontal?Number.parseFloat($.scrollMarginLeft):Number.parseFloat($.scrollMarginTop),H=getComputedStyle(this.rootElement),X=this.isHorizontal?Number.parseFloat(H.scrollPaddingLeft):Number.parseFloat(H.scrollPaddingTop);h=(this.isHorizontal?O.left:O.top)+this.animatedScroll-(Number.isNaN(W)?0:W)-(Number.isNaN(X)?0:X)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;const f=h-this.animatedScroll;f>this.limit/2?h-=this.limit:f<-this.limit/2&&(h+=this.limit)}}else h=Hr(0,h,this.limit);if(h===this.targetScroll){c?.(this),v?.(this);return}if(this.userData=g??{},r){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),v?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=h),typeof l=="number"&&typeof o!="function"?o=mr:typeof o=="function"&&typeof l!="number"&&(l=1),this.animate.fromTo(this.animatedScroll,h,{duration:l,easing:o,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",c?.(this)},onUpdate:(f,O)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),n&&(this.targetScroll=f),O||this.emit(),O&&(this.reset(),this.emit(),v?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:r}){const i=Date.now();t._lenis||(t._lenis={});const n=t._lenis;let s,l,o,c,v,y,g,h,d,f;if(i-(n.time??0)>2e3){n.time=Date.now();const B=window.getComputedStyle(t);if(n.computedStyle=B,s=["auto","overlay","scroll"].includes(B.overflowX),l=["auto","overlay","scroll"].includes(B.overflowY),v=["auto"].includes(B.overscrollBehaviorX),y=["auto"].includes(B.overscrollBehaviorY),n.hasOverflowX=s,n.hasOverflowY=l,!(s||l))return!1;g=t.scrollWidth,h=t.scrollHeight,d=t.clientWidth,f=t.clientHeight,o=g>d,c=h>f,n.isScrollableX=o,n.isScrollableY=c,n.scrollWidth=g,n.scrollHeight=h,n.clientWidth=d,n.clientHeight=f,n.hasOverscrollBehaviorX=v,n.hasOverscrollBehaviorY=y}else o=n.isScrollableX,c=n.isScrollableY,s=n.hasOverflowX,l=n.hasOverflowY,g=n.scrollWidth,h=n.scrollHeight,d=n.clientWidth,f=n.clientHeight,v=n.hasOverscrollBehaviorX,y=n.hasOverscrollBehaviorY;if(!(s&&o||l&&c))return!1;const O=Math.abs(e)>=Math.abs(r)?"horizontal":"vertical";let $,W,H,X,w,he;if(O==="horizontal")$=Math.round(t.scrollLeft),W=g-d,H=e,X=s,w=o,he=v;else if(O==="vertical")$=Math.round(t.scrollTop),W=h-f,H=r,X=l,w=c,he=y;else return!1;return!he&&($>=W||$<=0)?!0:(H>0?$<W:$>0)&&X&&w}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?Ds(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};function Ws(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Fs(t,e,r){return e&&Ws(t.prototype,e),t}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,hn,Ze,Ht,Bt,vi,Ir,jt,yi,Nr,kt,ct,Wr,Fr=function(){return we||typeof window<"u"&&(we=window.gsap)&&we.registerPlugin&&we},qr=1,mi=[],P=[],vt=[],Hi=Date.now,In=function(e,r){return r},qs=function(){var e=yi.core,r=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,P),n.push.apply(n,vt),P=i,vt=n,In=function(l,o){return r[l](o)}},It=function(e,r){return~vt.indexOf(e)&&vt[vt.indexOf(e)+1][r]},Bi=function(e){return!!~Nr.indexOf(e)},Be=function(e,r,i,n,s){return e.addEventListener(r,i,{passive:n!==!1,capture:!!s})},He=function(e,r,i,n){return e.removeEventListener(r,i,!!n)},Qi="scrollLeft",en="scrollTop",Nn=function(){return kt&&kt.isPressed||P.cache++},_n=function(e,r){var i=function n(s){if(s||s===0){qr&&(Ze.history.scrollRestoration="manual");var l=kt&&kt.isPressed;s=n.v=Math.round(s)||(kt&&kt.iOS?1:0),e(s),n.cacheID=P.cache,l&&In("ss",s)}else(r||P.cache!==n.cacheID||In("ref"))&&(n.cacheID=P.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},Fe={s:Qi,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_n(function(t){return arguments.length?Ze.scrollTo(t,ce.sc()):Ze.pageXOffset||Ht[Qi]||Bt[Qi]||vi[Qi]||0})},ce={s:en,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fe,sc:_n(function(t){return arguments.length?Ze.scrollTo(Fe.sc(),t):Ze.pageYOffset||Ht[en]||Bt[en]||vi[en]||0})},Xe=function(e,r){return(r&&r._ctx&&r._ctx.selector||we.utils.toArray)(e)[0]||(typeof e=="string"&&we.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ys=function(e,r){for(var i=r.length;i--;)if(r[i]===e||r[i].contains(e))return!0;return!1},Wt=function(e,r){var i=r.s,n=r.sc;Bi(e)&&(e=Ht.scrollingElement||Bt);var s=P.indexOf(e),l=n===ce.sc?1:2;!~s&&(s=P.push(e)-1),P[s+l]||Be(e,"scroll",Nn);var o=P[s+l],c=o||(P[s+l]=_n(It(e,i),!0)||(Bi(e)?n:_n(function(v){return arguments.length?e[i]=v:e[i]})));return c.target=e,o||(c.smooth=we.getProperty(e,"scrollBehavior")==="smooth"),c},Wn=function(e,r,i){var n=e,s=e,l=Hi(),o=l,c=r||50,v=Math.max(500,c*3),y=function(f,O){var $=Hi();O||$-l>c?(s=n,n=f,o=l,l=$):i?n+=f:n=s+(f-s)/($-o)*(l-o)},g=function(){s=n=i?0:n,o=l=0},h=function(f){var O=o,$=s,W=Hi();return(f||f===0)&&f!==n&&y(f),l===o||W-o>v?0:(n+(i?$:-$))/((i?W:l)-O)*1e3};return{update:y,reset:g,getVelocity:h}},Mi=function(e,r){return r&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},vr=function(e){var r=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(i)?r:i},Yr=function(){yi=we.core.globals().ScrollTrigger,yi&&yi.core&&qs()},Xr=function(e){return we=e||Fr(),!hn&&we&&typeof document<"u"&&document.body&&(Ze=window,Ht=document,Bt=Ht.documentElement,vi=Ht.body,Nr=[Ze,Ht,Bt,vi],we.utils.clamp,Wr=we.core.context||function(){},jt="onpointerenter"in vi?"pointer":"mouse",Ir=Q.isTouch=Ze.matchMedia&&Ze.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ze||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ct=Q.eventTypes=("ontouchstart"in Bt?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Bt?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return qr=0},500),hn=1),yi||Yr(),hn};Fe.op=ce;P.cache=0;var Q=(function(){function t(r){this.init(r)}var e=t.prototype;return e.init=function(i){hn||Xr(we)||console.warn("Please gsap.registerPlugin(Observer)"),yi||Yr();var n=i.tolerance,s=i.dragMinimum,l=i.type,o=i.target,c=i.lineHeight,v=i.debounce,y=i.preventDefault,g=i.onStop,h=i.onStopDelay,d=i.ignore,f=i.wheelSpeed,O=i.event,$=i.onDragStart,W=i.onDragEnd,H=i.onDrag,X=i.onPress,w=i.onRelease,he=i.onRight,B=i.onLeft,x=i.onUp,ye=i.onDown,xe=i.onChangeX,b=i.onChangeY,fe=i.onChange,E=i.onToggleX,yt=i.onToggleY,se=i.onHover,Pe=i.onHoverEnd,Ae=i.onMove,q=i.ignoreCheck,ee=i.isNormalizer,te=i.onGestureStart,a=i.onGestureEnd,oe=i.onWheel,qt=i.onEnable,Lt=i.onDisable,Qe=i.onClick,bt=i.scrollSpeed,Ee=i.capture,ie=i.allowClicks,De=i.lockAxis,Te=i.onLockAxis;this.target=o=Xe(o)||Bt,this.vars=i,d&&(d=we.utils.toArray(d)),n=n||1e-9,s=s||0,f=f||1,bt=bt||1,l=l||"wheel,touch,pointer",v=v!==!1,c||(c=parseFloat(Ze.getComputedStyle(vi).lineHeight)||22);var Mt,Oe,ze,z,K,Ye,Ue,u=this,Ge=0,_t=0,$t=i.passive||!y&&i.passive!==!1,V=Wt(o,Fe),wt=Wt(o,ce),Rt=V(),Yt=wt(),pe=~l.indexOf("touch")&&!~l.indexOf("pointer")&&ct[0]==="pointerdown",Pt=Bi(o),J=o.ownerDocument||Ht,rt=[0,0,0],et=[0,0,0],St=0,Ti=function(){return St=Hi()},ne=function(S,I){return(u.event=S)&&d&&Ys(S.target,d)||I&&pe&&S.pointerType!=="touch"||q&&q(S,I)},Ki=function(){u._vx.reset(),u._vy.reset(),Oe.pause(),g&&g(u)},xt=function(){var S=u.deltaX=vr(rt),I=u.deltaY=vr(et),p=Math.abs(S)>=n,T=Math.abs(I)>=n;fe&&(p||T)&&fe(u,S,I,rt,et),p&&(he&&u.deltaX>0&&he(u),B&&u.deltaX<0&&B(u),xe&&xe(u),E&&u.deltaX<0!=Ge<0&&E(u),Ge=u.deltaX,rt[0]=rt[1]=rt[2]=0),T&&(ye&&u.deltaY>0&&ye(u),x&&u.deltaY<0&&x(u),b&&b(u),yt&&u.deltaY<0!=_t<0&&yt(u),_t=u.deltaY,et[0]=et[1]=et[2]=0),(z||ze)&&(Ae&&Ae(u),ze&&($&&ze===1&&$(u),H&&H(u),ze=0),z=!1),Ye&&!(Ye=!1)&&Te&&Te(u),K&&(oe(u),K=!1),Mt=0},oi=function(S,I,p){rt[p]+=S,et[p]+=I,u._vx.update(S),u._vy.update(I),v?Mt||(Mt=requestAnimationFrame(xt)):xt()},li=function(S,I){De&&!Ue&&(u.axis=Ue=Math.abs(S)>Math.abs(I)?"x":"y",Ye=!0),Ue!=="y"&&(rt[2]+=S,u._vx.update(S,!0)),Ue!=="x"&&(et[2]+=I,u._vy.update(I,!0)),v?Mt||(Mt=requestAnimationFrame(xt)):xt()},At=function(S){if(!ne(S,1)){S=Mi(S,y);var I=S.clientX,p=S.clientY,T=I-u.x,_=p-u.y,k=u.isDragging;u.x=I,u.y=p,(k||(T||_)&&(Math.abs(u.startX-I)>=s||Math.abs(u.startY-p)>=s))&&(ze||(ze=k?2:1),k||(u.isDragging=!0),li(T,_))}},Xt=u.onPress=function(C){ne(C,1)||C&&C.button||(u.axis=Ue=null,Oe.pause(),u.isPressed=!0,C=Mi(C),Ge=_t=0,u.startX=u.x=C.clientX,u.startY=u.y=C.clientY,u._vx.reset(),u._vy.reset(),Be(ee?o:J,ct[1],At,$t,!0),u.deltaX=u.deltaY=0,X&&X(u))},A=u.onRelease=function(C){if(!ne(C,1)){He(ee?o:J,ct[1],At,!0);var S=!isNaN(u.y-u.startY),I=u.isDragging,p=I&&(Math.abs(u.x-u.startX)>3||Math.abs(u.y-u.startY)>3),T=Mi(C);!p&&S&&(u._vx.reset(),u._vy.reset(),y&&ie&&we.delayedCall(.08,function(){if(Hi()-St>300&&!C.defaultPrevented){if(C.target.click)C.target.click();else if(J.createEvent){var _=J.createEvent("MouseEvents");_.initMouseEvent("click",!0,!0,Ze,1,T.screenX,T.screenY,T.clientX,T.clientY,!1,!1,!1,!1,0,null),C.target.dispatchEvent(_)}}})),u.isDragging=u.isGesturing=u.isPressed=!1,g&&I&&!ee&&Oe.restart(!0),ze&&xt(),W&&I&&W(u),w&&w(u,p)}},Ut=function(S){return S.touches&&S.touches.length>1&&(u.isGesturing=!0)&&te(S,u.isDragging)},st=function(){return(u.isGesturing=!1)||a(u)},ot=function(S){if(!ne(S)){var I=V(),p=wt();oi((I-Rt)*bt,(p-Yt)*bt,1),Rt=I,Yt=p,g&&Oe.restart(!0)}},lt=function(S){if(!ne(S)){S=Mi(S,y),oe&&(K=!0);var I=(S.deltaMode===1?c:S.deltaMode===2?Ze.innerHeight:1)*f;oi(S.deltaX*I,S.deltaY*I,0),g&&!ee&&Oe.restart(!0)}},Gt=function(S){if(!ne(S)){var I=S.clientX,p=S.clientY,T=I-u.x,_=p-u.y;u.x=I,u.y=p,z=!0,g&&Oe.restart(!0),(T||_)&&li(T,_)}},ai=function(S){u.event=S,se(u)},Et=function(S){u.event=S,Pe(u)},ki=function(S){return ne(S)||Mi(S,y)&&Qe(u)};Oe=u._dc=we.delayedCall(h||.25,Ki).pause(),u.deltaX=u.deltaY=0,u._vx=Wn(0,50,!0),u._vy=Wn(0,50,!0),u.scrollX=V,u.scrollY=wt,u.isDragging=u.isGesturing=u.isPressed=!1,Wr(this),u.enable=function(C){return u.isEnabled||(Be(Pt?J:o,"scroll",Nn),l.indexOf("scroll")>=0&&Be(Pt?J:o,"scroll",ot,$t,Ee),l.indexOf("wheel")>=0&&Be(o,"wheel",lt,$t,Ee),(l.indexOf("touch")>=0&&Ir||l.indexOf("pointer")>=0)&&(Be(o,ct[0],Xt,$t,Ee),Be(J,ct[2],A),Be(J,ct[3],A),ie&&Be(o,"click",Ti,!0,!0),Qe&&Be(o,"click",ki),te&&Be(J,"gesturestart",Ut),a&&Be(J,"gestureend",st),se&&Be(o,jt+"enter",ai),Pe&&Be(o,jt+"leave",Et),Ae&&Be(o,jt+"move",Gt)),u.isEnabled=!0,u.isDragging=u.isGesturing=u.isPressed=z=ze=!1,u._vx.reset(),u._vy.reset(),Rt=V(),Yt=wt(),C&&C.type&&Xt(C),qt&&qt(u)),u},u.disable=function(){u.isEnabled&&(mi.filter(function(C){return C!==u&&Bi(C.target)}).length||He(Pt?J:o,"scroll",Nn),u.isPressed&&(u._vx.reset(),u._vy.reset(),He(ee?o:J,ct[1],At,!0)),He(Pt?J:o,"scroll",ot,Ee),He(o,"wheel",lt,Ee),He(o,ct[0],Xt,Ee),He(J,ct[2],A),He(J,ct[3],A),He(o,"click",Ti,!0),He(o,"click",ki),He(J,"gesturestart",Ut),He(J,"gestureend",st),He(o,jt+"enter",ai),He(o,jt+"leave",Et),He(o,jt+"move",Gt),u.isEnabled=u.isPressed=u.isDragging=!1,Lt&&Lt(u))},u.kill=u.revert=function(){u.disable();var C=mi.indexOf(u);C>=0&&mi.splice(C,1),kt===u&&(kt=0)},mi.push(u),ee&&Bi(o)&&(kt=u),u.enable(O)},Fs(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t})();Q.version="3.15.0";Q.create=function(t){return new Q(t)};Q.register=Xr;Q.getAll=function(){return mi.slice()};Q.getById=function(t){return mi.filter(function(e){return e.vars.id===t})[0]};Fr()&&we.registerPlugin(Q);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var m,pi,R,F,Je,N,Jn,wn,Ui,Ii,Pi,tn,Me,Cn,Fn,Ne,yr,br,gi,Ur,An,Gr,Ie,qn,Vr,jr,zt,Yn,Zn,bi,Qn,Ni,Xn,Dn,nn=1,$e=Date.now,On=$e(),nt=0,Ai=0,_r=function(e,r,i){var n=Ke(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+r+"Clamp"]=n,n?e.substr(6,e.length-7):e},wr=function(e,r){return r&&(!Ke(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Xs=function t(){return Ai&&requestAnimationFrame(t)},Sr=function(){return Cn=1},xr=function(){return Cn=0},pt=function(e){return e},Di=function(e){return Math.round(e*1e5)/1e5||0},Kr=function(){return typeof window<"u"},Jr=function(){return m||Kr()&&(m=window.gsap)&&m.registerPlugin&&m},ni=function(e){return!!~Jn.indexOf(e)},Zr=function(e){return(e==="Height"?Qn:R["inner"+e])||Je["client"+e]||N["client"+e]},Qr=function(e){return It(e,"getBoundingClientRect")||(ni(e)?function(){return vn.width=R.innerWidth,vn.height=Qn,vn}:function(){return Tt(e)})},Us=function(e,r,i){var n=i.d,s=i.d2,l=i.a;return(l=It(e,"getBoundingClientRect"))?function(){return l()[n]}:function(){return(r?Zr(s):e["client"+s])||0}},Gs=function(e,r){return!r||~vt.indexOf(e)?Qr(e):function(){return vn}},mt=function(e,r){var i=r.s,n=r.d2,s=r.d,l=r.a;return Math.max(0,(i="scroll"+n)&&(l=It(e,i))?l()-Qr(e)()[s]:ni(e)?(Je[i]||N[i])-Zr(n):e[i]-e["offset"+n])},rn=function(e,r){for(var i=0;i<gi.length;i+=3)(!r||~r.indexOf(gi[i+1]))&&e(gi[i],gi[i+1],gi[i+2])},Ke=function(e){return typeof e=="string"},Re=function(e){return typeof e=="function"},Oi=function(e){return typeof e=="number"},Kt=function(e){return typeof e=="object"},$i=function(e,r,i){return e&&e.progress(r?0:1)&&i&&e.pause()},ci=function(e,r,i){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return r(e,i)}):r(e,i);n&&n.totalTime&&(e.callbackAnimation=n)}},ui=Math.abs,es="left",ts="top",er="right",tr="bottom",Qt="width",ei="height",Wi="Right",Fi="Left",qi="Top",Yi="Bottom",re="padding",tt="margin",wi="Width",ir="Height",ae="px",it=function(e){return R.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Vs=function(e){var r=it(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},Er=function(e,r){for(var i in r)i in e||(e[i]=r[i]);return e},Tt=function(e,r){var i=r&&it(e)[Fn]!=="matrix(1, 0, 0, 1, 0, 0)"&&m.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},Sn=function(e,r){var i=r.d2;return e["offset"+i]||e["client"+i]||0},is=function(e){var r=[],i=e.labels,n=e.duration(),s;for(s in i)r.push(i[s]/n);return r},js=function(e){return function(r){return m.utils.snap(is(e),r)}},nr=function(e){var r=m.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,s){return n-s});return i?function(n,s,l){l===void 0&&(l=.001);var o;if(!s)return r(n);if(s>0){for(n-=l,o=0;o<i.length;o++)if(i[o]>=n)return i[o];return i[o-1]}else for(o=i.length,n+=l;o--;)if(i[o]<=n)return i[o];return i[0]}:function(n,s,l){l===void 0&&(l=.001);var o=r(n);return!s||Math.abs(o-n)<l||o-n<0==s<0?o:r(s<0?n-e:n+e)}},Ks=function(e){return function(r,i){return nr(is(e))(r,i.direction)}},sn=function(e,r,i,n){return i.split(",").forEach(function(s){return e(r,s,n)})},ve=function(e,r,i,n,s){return e.addEventListener(r,i,{passive:!n,capture:!!s})},me=function(e,r,i,n){return e.removeEventListener(r,i,!!n)},on=function(e,r,i){i=i&&i.wheelHandler,i&&(e(r,"wheel",i),e(r,"touchmove",i))},Tr={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ln={toggleActions:"play",anticipatePin:0},xn={top:0,left:0,center:.5,bottom:1,right:1},fn=function(e,r){if(Ke(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=r/100),e=e.substr(0,i-1)),e=n+(e in xn?xn[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},an=function(e,r,i,n,s,l,o,c){var v=s.startColor,y=s.endColor,g=s.fontSize,h=s.indent,d=s.fontWeight,f=F.createElement("div"),O=ni(i)||It(i,"pinType")==="fixed",$=e.indexOf("scroller")!==-1,W=O?N:i.tagName==="IFRAME"?i.contentDocument.body:i,H=e.indexOf("start")!==-1,X=H?v:y,w="border-color:"+X+";font-size:"+g+";color:"+X+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+(($||c)&&O?"fixed;":"absolute;"),($||c||!O)&&(w+=(n===ce?er:tr)+":"+(l+parseFloat(h))+"px;"),o&&(w+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),f._isStart=H,f.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),f.style.cssText=w,f.innerText=r||r===0?e+"-"+r:e,W.children[0]?W.insertBefore(f,W.children[0]):W.appendChild(f),f._offset=f["offset"+n.op.d2],pn(f,0,n,H),f},pn=function(e,r,i,n){var s={display:"block"},l=i[n?"os2":"p2"],o=i[n?"p2":"os2"];e._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+l+wi]=1,s["border"+o+wi]=0,s[i.p]=r+"px",m.set(e,s)},M=[],Un={},Gi,kr=function(){return $e()-nt>34&&(Gi||(Gi=requestAnimationFrame(Ct)))},di=function(){(!Ie||!Ie.isPressed||Ie.startX>N.clientWidth)&&(P.cache++,Ie?Gi||(Gi=requestAnimationFrame(Ct)):Ct(),nt||si("scrollStart"),nt=$e())},zn=function(){jr=R.innerWidth,Vr=R.innerHeight},zi=function(e){P.cache++,(e===!0||!Me&&!Gr&&!F.fullscreenElement&&!F.webkitFullscreenElement&&(!qn||jr!==R.innerWidth||Math.abs(R.innerHeight-Vr)>R.innerHeight*.25))&&wn.restart(!0)},ri={},Js=[],ns=function t(){return me(L,"scrollEnd",t)||Jt(!0)},si=function(e){return ri[e]&&ri[e].map(function(r){return r()})||Js},je=[],rs=function(e){for(var r=0;r<je.length;r+=5)(!e||je[r+4]&&je[r+4].query===e)&&(je[r].style.cssText=je[r+1],je[r].getBBox&&je[r].setAttribute("transform",je[r+2]||""),je[r+3].uncache=1)},ss=function(){return P.forEach(function(e){return Re(e)&&++e.cacheID&&(e.rec=e())})},rr=function(e,r){var i;for(Ne=0;Ne<M.length;Ne++)i=M[Ne],i&&(!r||i._ctx===r)&&(e?i.kill(1):i.revert(!0,!0));Ni=!0,r&&rs(r),r||si("revert")},os=function(e,r){P.cache++,(r||!We)&&P.forEach(function(i){return Re(i)&&i.cacheID++&&(i.rec=0)}),Ke(e)&&(R.history.scrollRestoration=Zn=e)},We,ti=0,Cr,Zs=function(){if(Cr!==ti){var e=Cr=ti;requestAnimationFrame(function(){return e===ti&&Jt(!0)})}},ls=function(){N.appendChild(bi),Qn=!Ie&&bi.offsetHeight||R.innerHeight,N.removeChild(bi)},Lr=function(e){return Ui(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},Jt=function(e,r){if(Je=F.documentElement,N=F.body,Jn=[R,F,Je,N],nt&&!e&&!Ni){ve(L,"scrollEnd",ns);return}ls(),We=L.isRefreshing=!0,Ni||ss();var i=si("refreshInit");Ur&&L.sort(),r||rr(),P.forEach(function(n){Re(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),M.slice(0).forEach(function(n){return n.refresh()}),Ni=!1,M.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",l=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-l),n.refresh()}}),Xn=1,Lr(!0),M.forEach(function(n){var s=mt(n.scroller,n._dir),l=n.vars.end==="max"||n._endClamp&&n.end>s,o=n._startClamp&&n.start>=s;(l||o)&&n.setPositions(o?s-1:n.start,l?Math.max(o?s:n.start+1,s):n.end,!0)}),Lr(!1),Xn=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),P.forEach(function(n){Re(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),os(Zn,1),wn.pause(),ti++,We=2,Ct(2),M.forEach(function(n){return Re(n.vars.onRefresh)&&n.vars.onRefresh(n)}),We=L.isRefreshing=!1,si("refresh")},Gn=0,gn=1,Xi,Ct=function(e){if(e===2||!We&&!Ni){L.isUpdating=!0,Xi&&Xi.update(0);var r=M.length,i=$e(),n=i-On>=50,s=r&&M[0].scroll();if(gn=Gn>s?-1:1,We||(Gn=s),n&&(nt&&!Cn&&i-nt>200&&(nt=0,si("scrollEnd")),Pi=On,On=i),gn<0){for(Ne=r;Ne-- >0;)M[Ne]&&M[Ne].update(0,n);gn=1}else for(Ne=0;Ne<r;Ne++)M[Ne]&&M[Ne].update(0,n);L.isUpdating=!1}Gi=0},Vn=[es,ts,tr,er,tt+Yi,tt+Wi,tt+qi,tt+Fi,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],mn=Vn.concat([Qt,ei,"boxSizing","max"+wi,"max"+ir,"position",tt,re,re+qi,re+Wi,re+Yi,re+Fi]),Qs=function(e,r,i){_i(i);var n=e._gsap;if(n.spacerIsNative)_i(n.spacerState);else if(e._gsap.swappedIn){var s=r.parentNode;s&&(s.insertBefore(e,r),s.removeChild(r))}e._gsap.swappedIn=!1},Hn=function(e,r,i,n){if(!e._gsap.swappedIn){for(var s=Vn.length,l=r.style,o=e.style,c;s--;)c=Vn[s],l[c]=i[c];l.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(l.display="inline-block"),o[tr]=o[er]="auto",l.flexBasis=i.flexBasis||"auto",l.overflow="visible",l.boxSizing="border-box",l[Qt]=Sn(e,Fe)+ae,l[ei]=Sn(e,ce)+ae,l[re]=o[tt]=o[ts]=o[es]="0",_i(n),o[Qt]=o["max"+wi]=i[Qt],o[ei]=o["max"+ir]=i[ei],o[re]=i[re],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},eo=/([A-Z])/g,_i=function(e){if(e){var r=e.t.style,i=e.length,n=0,s,l;for((e.t._gsap||m.core.getCache(e.t)).uncache=1;n<i;n+=2)l=e[n+1],s=e[n],l?r[s]=l:r[s]&&r.removeProperty(s.replace(eo,"-$1").toLowerCase())}},cn=function(e){for(var r=mn.length,i=e.style,n=[],s=0;s<r;s++)n.push(mn[s],i[mn[s]]);return n.t=e,n},to=function(e,r,i){for(var n=[],s=e.length,l=i?8:0,o;l<s;l+=2)o=e[l],n.push(o,o in r?r[o]:e[l+1]);return n.t=e.t,n},vn={left:0,top:0},Mr=function(e,r,i,n,s,l,o,c,v,y,g,h,d,f){Re(e)&&(e=e(c)),Ke(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?fn("0"+e.substr(3),i):0));var O=d?d.time():0,$,W,H;if(d&&d.seek(0),isNaN(e)||(e=+e),Oi(e))d&&(e=m.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&pn(o,i,n,!0);else{Re(r)&&(r=r(c));var X=(e||"0").split(" "),w,he,B,x;H=Xe(r,c)||N,w=Tt(H)||{},(!w||!w.left&&!w.top)&&it(H).display==="none"&&(x=H.style.display,H.style.display="block",w=Tt(H),x?H.style.display=x:H.style.removeProperty("display")),he=fn(X[0],w[n.d]),B=fn(X[1]||"0",i),e=w[n.p]-v[n.p]-y+he+s-B,o&&pn(o,B,n,i-B<20||o._isStart&&B>20),i-=i-B}if(f&&(c[f]=e||-.001,e<0&&(e=0)),l){var ye=e+i,xe=l._isStart;$="scroll"+n.d2,pn(l,ye,n,xe&&ye>20||!xe&&(g?Math.max(N[$],Je[$]):l.parentNode[$])<=ye+1),g&&(v=Tt(o),g&&(l.style[n.op.p]=v[n.op.p]-n.op.m-l._offset+ae))}return d&&H&&($=Tt(H),d.seek(h),W=Tt(H),d._caScrollDist=$[n.p]-W[n.p],e=e/d._caScrollDist*h),d&&d.seek(O),d?e:Math.round(e)},io=/(webkit|moz|length|cssText|inset)/i,$r=function(e,r,i,n){if(e.parentNode!==r){var s=e.style,l,o;if(r===N){e._stOrig=s.cssText,o=it(e);for(l in o)!+l&&!io.test(l)&&o[l]&&typeof s[l]=="string"&&l!=="0"&&(s[l]=o[l]);s.top=i,s.left=n}else s.cssText=e._stOrig;m.core.getCache(e).uncache=1,r.appendChild(e)}},as=function(e,r,i){var n=r,s=n;return function(l){var o=Math.round(e());return o!==n&&o!==s&&Math.abs(o-n)>3&&Math.abs(o-s)>3&&(l=o,i&&i()),s=n,n=Math.round(l),n}},un=function(e,r,i){var n={};n[r.p]="+="+i,m.set(e,n)},Rr=function(e,r){var i=Wt(e,r),n="_scroll"+r.p2,s=function l(o,c,v,y,g){var h=l.tween,d=c.onComplete,f={};v=v||i();var O=as(i,v,function(){h.kill(),l.tween=0});return g=y&&g||0,y=y||o-v,h&&h.kill(),c[n]=o,c.inherit=!1,c.modifiers=f,f[n]=function(){return O(v+y*h.ratio+g*h.ratio*h.ratio)},c.onUpdate=function(){P.cache++,l.tween&&Ct()},c.onComplete=function(){l.tween=0,d&&d.call(h)},h=l.tween=m.to(e,c),h};return e[n]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ve(e,"wheel",i.wheelHandler),L.isTouch&&ve(e,"touchmove",i.wheelHandler),s},L=(function(){function t(r,i){pi||t.register(m)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Yn(this),this.init(r,i)}var e=t.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ai){this.update=this.refresh=this.kill=pt;return}i=Er(Ke(i)||Oi(i)||i.nodeType?{trigger:i}:i,ln);var s=i,l=s.onUpdate,o=s.toggleClass,c=s.id,v=s.onToggle,y=s.onRefresh,g=s.scrub,h=s.trigger,d=s.pin,f=s.pinSpacing,O=s.invalidateOnRefresh,$=s.anticipatePin,W=s.onScrubComplete,H=s.onSnapComplete,X=s.once,w=s.snap,he=s.pinReparent,B=s.pinSpacer,x=s.containerAnimation,ye=s.fastScrollEnd,xe=s.preventOverlaps,b=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Fe:ce,fe=!g&&g!==0,E=Xe(i.scroller||R),yt=m.core.getCache(E),se=ni(E),Pe=("pinType"in i?i.pinType:It(E,"pinType")||se&&"fixed")==="fixed",Ae=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],q=fe&&i.toggleActions.split(" "),ee="markers"in i?i.markers:ln.markers,te=se?0:parseFloat(it(E)["border"+b.p2+wi])||0,a=this,oe=i.onRefreshInit&&function(){return i.onRefreshInit(a)},qt=Us(E,se,b),Lt=Gs(E,se),Qe=0,bt=0,Ee=0,ie=Wt(E,b),De,Te,Mt,Oe,ze,z,K,Ye,Ue,u,Ge,_t,$t,V,wt,Rt,Yt,pe,Pt,J,rt,et,St,Ti,ne,Ki,xt,oi,li,At,Xt,A,Ut,st,ot,lt,Gt,ai,Et;if(a._startClamp=a._endClamp=!1,a._dir=b,$*=45,a.scroller=E,a.scroll=x?x.time.bind(x):ie,Oe=ie(),a.vars=i,n=n||i.animation,"refreshPriority"in i&&(Ur=1,i.refreshPriority===-9999&&(Xi=a)),yt.tweenScroll=yt.tweenScroll||{top:Rr(E,ce),left:Rr(E,Fe)},a.tweenTo=De=yt.tweenScroll[b.p],a.scrubDuration=function(p){Ut=Oi(p)&&p,Ut?A?A.duration(p):A=m.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ut,paused:!0,onComplete:function(){return W&&W(a)}}):(A&&A.progress(1).kill(),A=0)},n&&(n.vars.lazy=!1,n._initted&&!a.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),a.animation=n.pause(),n.scrollTrigger=a,a.scrubDuration(g),At=0,c||(c=n.vars.id)),w&&((!Kt(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in N.style&&m.set(se?[N,Je]:E,{scrollBehavior:"auto"}),P.forEach(function(p){return Re(p)&&p.target===(se?F.scrollingElement||Je:E)&&(p.smooth=!1)}),Mt=Re(w.snapTo)?w.snapTo:w.snapTo==="labels"?js(n):w.snapTo==="labelsDirectional"?Ks(n):w.directional!==!1?function(p,T){return nr(w.snapTo)(p,$e()-bt<500?0:T.direction)}:m.utils.snap(w.snapTo),st=w.duration||{min:.1,max:2},st=Kt(st)?Ii(st.min,st.max):Ii(st,st),ot=m.delayedCall(w.delay||Ut/2||.1,function(){var p=ie(),T=$e()-bt<500,_=De.tween;if((T||Math.abs(a.getVelocity())<10)&&!_&&!Cn&&Qe!==p){var k=(p-z)/V,ge=n&&!fe?n.totalProgress():k,D=T?0:(ge-Xt)/($e()-Pi)*1e3||0,Z=m.utils.clamp(-k,1-k,ui(D/2)*D/.185),ke=k+(w.inertia===!1?0:Z),j,U,Y=w,at=Y.onStart,G=Y.onInterrupt,Ve=Y.onComplete;if(j=Mt(ke,a),Oi(j)||(j=ke),U=Math.max(0,Math.round(z+j*V)),p<=K&&p>=z&&U!==p){if(_&&!_._initted&&_.data<=ui(U-p))return;w.inertia===!1&&(Z=j-k),De(U,{duration:st(ui(Math.max(ui(ke-ge),ui(j-ge))*.185/D/.05||0)),ease:w.ease||"power3",data:ui(U-p),onInterrupt:function(){return ot.restart(!0)&&G&&ci(a,G)},onComplete:function(){a.update(),Qe=ie(),n&&!fe&&(A?A.resetTo("totalProgress",j,n._tTime/n._tDur):n.progress(j)),At=Xt=n&&!fe?n.totalProgress():a.progress,H&&H(a),Ve&&ci(a,Ve)}},p,Z*V,U-p-Z*V),at&&ci(a,at,De.tween)}}else a.isActive&&Qe!==p&&ot.restart(!0)}).pause()),c&&(Un[c]=a),h=a.trigger=Xe(h||d!==!0&&d),Et=h&&h._gsap&&h._gsap.stRevert,Et&&(Et=Et(a)),d=d===!0?h:Xe(d),Ke(o)&&(o={targets:h,className:o}),d&&(f===!1||f===tt||(f=!f&&d.parentNode&&d.parentNode.style&&it(d.parentNode).display==="flex"?!1:re),a.pin=d,Te=m.core.getCache(d),Te.spacer?wt=Te.pinState:(B&&(B=Xe(B),B&&!B.nodeType&&(B=B.current||B.nativeElement),Te.spacerIsNative=!!B,B&&(Te.spacerState=cn(B))),Te.spacer=pe=B||F.createElement("div"),pe.classList.add("pin-spacer"),c&&pe.classList.add("pin-spacer-"+c),Te.pinState=wt=cn(d)),i.force3D!==!1&&m.set(d,{force3D:!0}),a.spacer=pe=Te.spacer,li=it(d),Ti=li[f+b.os2],J=m.getProperty(d),rt=m.quickSetter(d,b.a,ae),Hn(d,pe,li),Yt=cn(d)),ee){_t=Kt(ee)?Er(ee,Tr):Tr,u=an("scroller-start",c,E,b,_t,0),Ge=an("scroller-end",c,E,b,_t,0,u),Pt=u["offset"+b.op.d2];var ki=Xe(It(E,"content")||E);Ye=this.markerStart=an("start",c,ki,b,_t,Pt,0,x),Ue=this.markerEnd=an("end",c,ki,b,_t,Pt,0,x),x&&(ai=m.quickSetter([Ye,Ue],b.a,ae)),!Pe&&!(vt.length&&It(E,"fixedMarkers")===!0)&&(Vs(se?N:E),m.set([u,Ge],{force3D:!0}),Ki=m.quickSetter(u,b.a,ae),oi=m.quickSetter(Ge,b.a,ae))}if(x){var C=x.vars.onUpdate,S=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){a.update(0,0,1),C&&C.apply(x,S||[])})}if(a.previous=function(){return M[M.indexOf(a)-1]},a.next=function(){return M[M.indexOf(a)+1]},a.revert=function(p,T){if(!T)return a.kill(!0);var _=p!==!1||!a.enabled,k=Me;_!==a.isReverted&&(_&&(lt=Math.max(ie(),a.scroll.rec||0),Ee=a.progress,Gt=n&&n.progress()),Ye&&[Ye,Ue,u,Ge].forEach(function(ge){return ge.style.display=_?"none":"block"}),_&&(Me=a,a.update(_)),d&&(!he||!a.isActive)&&(_?Qs(d,pe,wt):Hn(d,pe,it(d),ne)),_||a.update(_),Me=k,a.isReverted=_)},a.refresh=function(p,T,_,k){if(!((Me||!a.enabled)&&!T)){if(d&&p&&nt){ve(t,"scrollEnd",ns);return}!We&&oe&&oe(a),Me=a,De.tween&&!_&&(De.tween.kill(),De.tween=0),A&&A.pause(),O&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(Dt){return Dt.vars.immediateRender&&Dt.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),a.isReverted||a.revert(!0,!0),a._subPinOffset=!1;var ge=qt(),D=Lt(),Z=x?x.duration():mt(E,b),ke=V<=.01||!V,j=0,U=k||0,Y=Kt(_)?_.end:i.end,at=i.endTrigger||h,G=Kt(_)?_.start:i.start||(i.start===0||!h?0:d?"0 0":"0 100%"),Ve=a.pinnedContainer=i.pinnedContainer&&Xe(i.pinnedContainer,a),dt=h&&Math.max(0,M.indexOf(a))||0,be=dt,_e,Ce,Vt,Ji,Le,le,ht,Rn,fr,Ci,ft,Li,Zi;for(ee&&Kt(_)&&(Li=m.getProperty(u,b.p),Zi=m.getProperty(Ge,b.p));be-- >0;)le=M[be],le.end||le.refresh(0,1)||(Me=a),ht=le.pin,ht&&(ht===h||ht===d||ht===Ve)&&!le.isReverted&&(Ci||(Ci=[]),Ci.unshift(le),le.revert(!0,!0)),le!==M[be]&&(dt--,be--);for(Re(G)&&(G=G(a)),G=_r(G,"start",a),z=Mr(G,h,ge,b,ie(),Ye,u,a,D,te,Pe,Z,x,a._startClamp&&"_startClamp")||(d?-.001:0),Re(Y)&&(Y=Y(a)),Ke(Y)&&!Y.indexOf("+=")&&(~Y.indexOf(" ")?Y=(Ke(G)?G.split(" ")[0]:"")+Y:(j=fn(Y.substr(2),ge),Y=Ke(G)?G:(x?m.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,z):z)+j,at=h)),Y=_r(Y,"end",a),K=Math.max(z,Mr(Y||(at?"100% 0":Z),at,ge,b,ie()+j,Ue,Ge,a,D,te,Pe,Z,x,a._endClamp&&"_endClamp"))||-.001,j=0,be=dt;be--;)le=M[be]||{},ht=le.pin,ht&&le.start-le._pinPush<=z&&!x&&le.end>0&&(_e=le.end-(a._startClamp?Math.max(0,le.start):le.start),(ht===h&&le.start-le._pinPush<z||ht===Ve)&&isNaN(G)&&(j+=_e*(1-le.progress)),ht===d&&(U+=_e));if(z+=j,K+=j,a._startClamp&&(a._startClamp+=j),a._endClamp&&!We&&(a._endClamp=K||-.001,K=Math.min(K,mt(E,b))),V=K-z||(z-=.01)&&.001,ke&&(Ee=m.utils.clamp(0,1,m.utils.normalize(z,K,lt))),a._pinPush=U,Ye&&j&&(_e={},_e[b.a]="+="+j,Ve&&(_e[b.p]="-="+ie()),m.set([Ye,Ue],_e)),d&&!(Xn&&a.end>=mt(E,b)))_e=it(d),Ji=b===ce,Vt=ie(),et=parseFloat(J(b.a))+U,!Z&&K>1&&(ft=(se?F.scrollingElement||Je:E).style,ft={style:ft,value:ft["overflow"+b.a.toUpperCase()]},se&&it(N)["overflow"+b.a.toUpperCase()]!=="scroll"&&(ft.style["overflow"+b.a.toUpperCase()]="scroll")),Hn(d,pe,_e),Yt=cn(d),Ce=Tt(d,!0),Rn=Pe&&Wt(E,Ji?Fe:ce)(),f?(ne=[f+b.os2,V+U+ae],ne.t=pe,be=f===re?Sn(d,b)+V+U:0,be&&(ne.push(b.d,be+ae),pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=be+ae)),_i(ne),Ve&&M.forEach(function(Dt){Dt.pin===Ve&&Dt.vars.pinSpacing!==!1&&(Dt._subPinOffset=!0)}),Pe&&ie(lt)):(be=Sn(d,b),be&&pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=be+ae)),Pe&&(Le={top:Ce.top+(Ji?Vt-z:Rn)+ae,left:Ce.left+(Ji?Rn:Vt-z)+ae,boxSizing:"border-box",position:"fixed"},Le[Qt]=Le["max"+wi]=Math.ceil(Ce.width)+ae,Le[ei]=Le["max"+ir]=Math.ceil(Ce.height)+ae,Le[tt]=Le[tt+qi]=Le[tt+Wi]=Le[tt+Yi]=Le[tt+Fi]="0",Le[re]=_e[re],Le[re+qi]=_e[re+qi],Le[re+Wi]=_e[re+Wi],Le[re+Yi]=_e[re+Yi],Le[re+Fi]=_e[re+Fi],Rt=to(wt,Le,he),We&&ie(0)),n?(fr=n._initted,An(1),n.render(n.duration(),!0,!0),St=J(b.a)-et+V+U,xt=Math.abs(V-St)>1,Pe&&xt&&Rt.splice(Rt.length-2,2),n.render(0,!0,!0),fr||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),An(0)):St=V,ft&&(ft.value?ft.style["overflow"+b.a.toUpperCase()]=ft.value:ft.style.removeProperty("overflow-"+b.a));else if(h&&ie()&&!x)for(Ce=h.parentNode;Ce&&Ce!==N;)Ce._pinOffset&&(z-=Ce._pinOffset,K-=Ce._pinOffset),Ce=Ce.parentNode;Ci&&Ci.forEach(function(Dt){return Dt.revert(!1,!0)}),a.start=z,a.end=K,Oe=ze=We?lt:ie(),!x&&!We&&(Oe<lt&&ie(lt),a.scroll.rec=0),a.revert(!1,!0),bt=$e(),ot&&(Qe=-1,ot.restart(!0)),Me=0,n&&fe&&(n._initted||Gt)&&n.progress()!==Gt&&n.progress(Gt||0,!0).render(n.time(),!0,!0),(ke||Ee!==a.progress||x||O||n&&!n._initted)&&(n&&!fe&&(n._initted||Ee||n.vars.immediateRender!==!1)&&n.totalProgress(x&&z<-.001&&!Ee?m.utils.normalize(z,K,0):Ee,!0),a.progress=ke||(Oe-z)/V===Ee?0:Ee),d&&f&&(pe._pinOffset=Math.round(a.progress*St)),A&&A.invalidate(),isNaN(Li)||(Li-=m.getProperty(u,b.p),Zi-=m.getProperty(Ge,b.p),un(u,b,Li),un(Ye,b,Li-(k||0)),un(Ge,b,Zi),un(Ue,b,Zi-(k||0))),ke&&!We&&a.update(),y&&!We&&!$t&&($t=!0,y(a),$t=!1)}},a.getVelocity=function(){return(ie()-ze)/($e()-Pi)*1e3||0},a.endAnimation=function(){$i(a.callbackAnimation),n&&(A?A.progress(1):n.paused()?fe||$i(n,a.direction<0,1):$i(n,n.reversed()))},a.labelToScroll=function(p){return n&&n.labels&&(z||a.refresh()||z)+n.labels[p]/n.duration()*V||0},a.getTrailing=function(p){var T=M.indexOf(a),_=a.direction>0?M.slice(0,T).reverse():M.slice(T+1);return(Ke(p)?_.filter(function(k){return k.vars.preventOverlaps===p}):_).filter(function(k){return a.direction>0?k.end<=z:k.start>=K})},a.update=function(p,T,_){if(!(x&&!_&&!p)){var k=We===!0?lt:a.scroll(),ge=p?0:(k-z)/V,D=ge<0?0:ge>1?1:ge||0,Z=a.progress,ke,j,U,Y,at,G,Ve,dt;if(T&&(ze=Oe,Oe=x?ie():k,w&&(Xt=At,At=n&&!fe?n.totalProgress():D)),$&&d&&!Me&&!nn&&nt&&(!D&&z<k+(k-ze)/($e()-Pi)*$?D=1e-4:D===1&&K>k+(k-ze)/($e()-Pi)*$&&(D=.9999)),D!==Z&&a.enabled){if(ke=a.isActive=!!D&&D<1,j=!!Z&&Z<1,G=ke!==j,at=G||!!D!=!!Z,a.direction=D>Z?1:-1,a.progress=D,at&&!Me&&(U=D&&!Z?0:D===1?1:Z===1?2:3,fe&&(Y=!G&&q[U+1]!=="none"&&q[U+1]||q[U],dt=n&&(Y==="complete"||Y==="reset"||Y in n))),xe&&(G||dt)&&(dt||g||!n)&&(Re(xe)?xe(a):a.getTrailing(xe).forEach(function(Vt){return Vt.endAnimation()})),fe||(A&&!Me&&!nn?(A._dp._time-A._start!==A._time&&A.render(A._dp._time-A._start),A.resetTo?A.resetTo("totalProgress",D,n._tTime/n._tDur):(A.vars.totalProgress=D,A.invalidate().restart())):n&&n.totalProgress(D,!!(Me&&(bt||p)))),d){if(p&&f&&(pe.style[f+b.os2]=Ti),!Pe)rt(Di(et+St*D));else if(at){if(Ve=!p&&D>Z&&K+1>k&&k+1>=mt(E,b),he)if(!p&&(ke||Ve)){var be=Tt(d,!0),_e=k-z;$r(d,N,be.top+(b===ce?_e:0)+ae,be.left+(b===ce?0:_e)+ae)}else $r(d,pe);_i(ke||Ve?Rt:Yt),xt&&D<1&&ke||rt(et+(D===1&&!Ve?St:0))}}w&&!De.tween&&!Me&&!nn&&ot.restart(!0),o&&(G||X&&D&&(D<1||!Dn))&&Ui(o.targets).forEach(function(Vt){return Vt.classList[ke||X?"add":"remove"](o.className)}),l&&!fe&&!p&&l(a),at&&!Me?(fe&&(dt&&(Y==="complete"?n.pause().totalProgress(1):Y==="reset"?n.restart(!0).pause():Y==="restart"?n.restart(!0):n[Y]()),l&&l(a)),(G||!Dn)&&(v&&G&&ci(a,v),Ae[U]&&ci(a,Ae[U]),X&&(D===1?a.kill(!1,1):Ae[U]=0),G||(U=D===1?1:3,Ae[U]&&ci(a,Ae[U]))),ye&&!ke&&Math.abs(a.getVelocity())>(Oi(ye)?ye:2500)&&($i(a.callbackAnimation),A?A.progress(1):$i(n,Y==="reverse"?1:!D,1))):fe&&l&&!Me&&l(a)}if(oi){var Ce=x?k/x.duration()*(x._caScrollDist||0):k;Ki(Ce+(u._isFlipped?1:0)),oi(Ce)}ai&&ai(-k/x.duration()*(x._caScrollDist||0))}},a.enable=function(p,T){a.enabled||(a.enabled=!0,ve(E,"resize",zi),se||ve(E,"scroll",di),oe&&ve(t,"refreshInit",oe),p!==!1&&(a.progress=Ee=0,Oe=ze=Qe=ie()),T!==!1&&a.refresh())},a.getTween=function(p){return p&&De?De.tween:A},a.setPositions=function(p,T,_,k){if(x){var ge=x.scrollTrigger,D=x.duration(),Z=ge.end-ge.start;p=ge.start+Z*p/D,T=ge.start+Z*T/D}a.refresh(!1,!1,{start:wr(p,_&&!!a._startClamp),end:wr(T,_&&!!a._endClamp)},k),a.update()},a.adjustPinSpacing=function(p){if(ne&&p){var T=ne.indexOf(b.d)+1;ne[T]=parseFloat(ne[T])+p+ae,ne[1]=parseFloat(ne[1])+p+ae,_i(ne)}},a.disable=function(p,T){if(p!==!1&&a.revert(!0,!0),a.enabled&&(a.enabled=a.isActive=!1,T||A&&A.pause(),lt=0,Te&&(Te.uncache=1),oe&&me(t,"refreshInit",oe),ot&&(ot.pause(),De.tween&&De.tween.kill()&&(De.tween=0)),!se)){for(var _=M.length;_--;)if(M[_].scroller===E&&M[_]!==a)return;me(E,"resize",zi),se||me(E,"scroll",di)}},a.kill=function(p,T){a.disable(p,T),A&&!T&&A.kill(),c&&delete Un[c];var _=M.indexOf(a);_>=0&&M.splice(_,1),_===Ne&&gn>0&&Ne--,_=0,M.forEach(function(k){return k.scroller===a.scroller&&(_=1)}),_||We||(a.scroll.rec=0),n&&(n.scrollTrigger=null,p&&n.revert({kill:!1}),T||n.kill()),Ye&&[Ye,Ue,u,Ge].forEach(function(k){return k.parentNode&&k.parentNode.removeChild(k)}),Xi===a&&(Xi=0),d&&(Te&&(Te.uncache=1),_=0,M.forEach(function(k){return k.pin===d&&_++}),_||(Te.spacer=0)),i.onKill&&i.onKill(a)},M.push(a),a.enable(!1,!1),Et&&Et(a),n&&n.add&&!V){var I=a.update;a.update=function(){a.update=I,P.cache++,z||K||a.refresh()},m.delayedCall(.01,a.update),V=.01,z=K=0}else a.refresh();d&&Zs()},t.register=function(i){return pi||(m=i||Jr(),Kr()&&window.document&&t.enable(),pi=Ai),pi},t.defaults=function(i){if(i)for(var n in i)ln[n]=i[n];return ln},t.disable=function(i,n){Ai=0,M.forEach(function(l){return l[n?"kill":"disable"](i)}),me(R,"wheel",di),me(F,"scroll",di),clearInterval(tn),me(F,"touchcancel",pt),me(N,"touchstart",pt),sn(me,F,"pointerdown,touchstart,mousedown",Sr),sn(me,F,"pointerup,touchend,mouseup",xr),wn.kill(),rn(me);for(var s=0;s<P.length;s+=3)on(me,P[s],P[s+1]),on(me,P[s],P[s+2])},t.enable=function(){if(R=window,F=document,Je=F.documentElement,N=F.body,m){if(Ui=m.utils.toArray,Ii=m.utils.clamp,Yn=m.core.context||pt,An=m.core.suppressOverwrites||pt,Zn=R.history.scrollRestoration||"auto",Gn=R.pageYOffset||0,m.core.globals("ScrollTrigger",t),N){Ai=1,bi=document.createElement("div"),bi.style.height="100vh",bi.style.position="absolute",ls(),Xs(),Q.register(m),t.isTouch=Q.isTouch,zt=Q.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),qn=Q.isTouch===1,ve(R,"wheel",di),Jn=[R,F,Je,N],m.matchMedia?(t.matchMedia=function(y){var g=m.matchMedia(),h;for(h in y)g.add(h,y[h]);return g},m.addEventListener("matchMediaInit",function(){ss(),rr()}),m.addEventListener("matchMediaRevert",function(){return rs()}),m.addEventListener("matchMedia",function(){Jt(0,1),si("matchMedia")}),m.matchMedia().add("(orientation: portrait)",function(){return zn(),zn})):console.warn("Requires GSAP 3.11.0 or later"),zn(),ve(F,"scroll",di);var i=N.hasAttribute("style"),n=N.style,s=n.borderTopStyle,l=m.core.Animation.prototype,o,c;for(l.revert||Object.defineProperty(l,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Tt(N),ce.m=Math.round(o.top+ce.sc())||0,Fe.m=Math.round(o.left+Fe.sc())||0,s?n.borderTopStyle=s:n.removeProperty("border-top-style"),i||(N.setAttribute("style",""),N.removeAttribute("style")),tn=setInterval(kr,250),m.delayedCall(.5,function(){return nn=0}),ve(F,"touchcancel",pt),ve(N,"touchstart",pt),sn(ve,F,"pointerdown,touchstart,mousedown",Sr),sn(ve,F,"pointerup,touchend,mouseup",xr),Fn=m.utils.checkPrefix("transform"),mn.push(Fn),pi=$e(),wn=m.delayedCall(.2,Jt).pause(),gi=[F,"visibilitychange",function(){var y=R.innerWidth,g=R.innerHeight;F.hidden?(yr=y,br=g):(yr!==y||br!==g)&&zi()},F,"DOMContentLoaded",Jt,R,"load",Jt,R,"resize",zi],rn(ve),M.forEach(function(y){return y.enable(0,1)}),c=0;c<P.length;c+=3)on(me,P[c],P[c+1]),on(me,P[c],P[c+2])}else if(F){var v=function y(){t.enable(),F.removeEventListener("DOMContentLoaded",y)};F.addEventListener("DOMContentLoaded",v)}}},t.config=function(i){"limitCallbacks"in i&&(Dn=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(tn)||(tn=n)&&setInterval(kr,n),"ignoreMobileResize"in i&&(qn=t.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(rn(me)||rn(ve,i.autoRefreshEvents||"none"),Gr=(i.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(i,n){var s=Xe(i),l=P.indexOf(s),o=ni(s);~l&&P.splice(l,o?6:2),n&&(o?vt.unshift(R,n,N,n,Je,n):vt.unshift(s,n))},t.clearMatchMedia=function(i){M.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},t.isInViewport=function(i,n,s){var l=(Ke(i)?Xe(i):i).getBoundingClientRect(),o=l[s?Qt:ei]*n||0;return s?l.right-o>0&&l.left+o<R.innerWidth:l.bottom-o>0&&l.top+o<R.innerHeight},t.positionInViewport=function(i,n,s){Ke(i)&&(i=Xe(i));var l=i.getBoundingClientRect(),o=l[s?Qt:ei],c=n==null?o/2:n in xn?xn[n]*o:~n.indexOf("%")?parseFloat(n)*o/100:parseFloat(n)||0;return s?(l.left+c)/R.innerWidth:(l.top+c)/R.innerHeight},t.killAll=function(i){if(M.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=ri.killAll||[];ri={},n.forEach(function(s){return s()})}},t})();L.version="3.15.0";L.saveStyles=function(t){return t?Ui(t).forEach(function(e){if(e&&e.style){var r=je.indexOf(e);r>=0&&je.splice(r,5),je.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),m.core.getCache(e),Yn())}}):je};L.revert=function(t,e){return rr(!t,e)};L.create=function(t,e){return new L(t,e)};L.refresh=function(t){return t?zi(!0):(pi||L.register())&&Jt(!0)};L.update=function(t){return++P.cache&&Ct(t===!0?2:0)};L.clearScrollMemory=os;L.maxScroll=function(t,e){return mt(t,e?Fe:ce)};L.getScrollFunc=function(t,e){return Wt(Xe(t),e?Fe:ce)};L.getById=function(t){return Un[t]};L.getAll=function(){return M.filter(function(t){return t.vars.id!=="ScrollSmoother"})};L.isScrolling=function(){return!!nt};L.snapDirectional=nr;L.addEventListener=function(t,e){var r=ri[t]||(ri[t]=[]);~r.indexOf(e)||r.push(e)};L.removeEventListener=function(t,e){var r=ri[t],i=r&&r.indexOf(e);i>=0&&r.splice(i,1)};L.batch=function(t,e){var r=[],i={},n=e.interval||.016,s=e.batchMax||1e9,l=function(v,y){var g=[],h=[],d=m.delayedCall(n,function(){y(g,h),g=[],h=[]}).pause();return function(f){g.length||d.restart(!0),g.push(f.trigger),h.push(f),s<=g.length&&d.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&Re(e[o])&&o!=="onRefreshInit"?l(o,e[o]):e[o];return Re(s)&&(s=s(),ve(L,"refresh",function(){return s=e.batchMax()})),Ui(t).forEach(function(c){var v={};for(o in i)v[o]=i[o];v.trigger=c,r.push(L.create(v))}),r};var Pr=function(e,r,i,n){return r>n?e(n):r<0&&e(0),i>n?(n-r)/(i-r):i<0?r/(r-i):1},Bn=function t(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(Q.isTouch?" pinch-zoom":""):"none",e===Je&&t(N,r)},dn={auto:1,scroll:1},no=function(e){var r=e.event,i=e.target,n=e.axis,s=(r.changedTouches?r.changedTouches[0]:r).target,l=s._gsap||m.core.getCache(s),o=$e(),c;if(!l._isScrollT||o-l._isScrollT>2e3){for(;s&&s!==N&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(dn[(c=it(s)).overflowY]||dn[c.overflowX]));)s=s.parentNode;l._isScroll=s&&s!==i&&!ni(s)&&(dn[(c=it(s)).overflowY]||dn[c.overflowX]),l._isScrollT=o}(l._isScroll||n==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},cs=function(e,r,i,n){return Q.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:n=n&&no,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&ve(F,Q.eventTypes[0],Dr,!1,!0)},onDisable:function(){return me(F,Q.eventTypes[0],Dr,!0)}})},ro=/(input|label|select|textarea)/i,Ar,Dr=function(e){var r=ro.test(e.target.tagName);(r||Ar)&&(e._gsapAllow=!0,Ar=r)},so=function(e){Kt(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,i=r.normalizeScrollX,n=r.momentum,s=r.allowNestedScroll,l=r.onRelease,o,c,v=Xe(e.target)||Je,y=m.core.globals().ScrollSmoother,g=y&&y.get(),h=zt&&(e.content&&Xe(e.content)||g&&e.content!==!1&&!g.smooth()&&g.content()),d=Wt(v,ce),f=Wt(v,Fe),O=1,$=(Q.isTouch&&R.visualViewport?R.visualViewport.scale*R.visualViewport.width:R.outerWidth)/R.innerWidth,W=0,H=Re(n)?function(){return n(o)}:function(){return n||2.8},X,w,he=cs(v,e.type,!0,s),B=function(){return w=!1},x=pt,ye=pt,xe=function(){c=mt(v,ce),ye=Ii(zt?1:0,c),i&&(x=Ii(0,mt(v,Fe))),X=ti},b=function(){h._gsap.y=Di(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},fe=function(){if(w){requestAnimationFrame(B);var ee=Di(o.deltaY/2),te=ye(d.v-ee);if(h&&te!==d.v+d.offset){d.offset=te-d.v;var a=Di((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+a+", 0, 1)",h._gsap.y=a+"px",d.cacheID=P.cache,Ct()}return!0}d.offset&&b(),w=!0},E,yt,se,Pe,Ae=function(){xe(),E.isActive()&&E.vars.scrollY>c&&(d()>c?E.progress(1)&&d(c):E.resetTo("scrollY",c))};return h&&m.set(h,{y:"+=0"}),e.ignoreCheck=function(q){return zt&&q.type==="touchmove"&&fe()||O>1.05&&q.type!=="touchstart"||o.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){w=!1;var q=O;O=Di((R.visualViewport&&R.visualViewport.scale||1)/$),E.pause(),q!==O&&Bn(v,O>1.01?!0:i?!1:"x"),yt=f(),se=d(),xe(),X=ti},e.onRelease=e.onGestureStart=function(q,ee){if(d.offset&&b(),!ee)Pe.restart(!0);else{P.cache++;var te=H(),a,oe;i&&(a=f(),oe=a+te*.05*-q.velocityX/.227,te*=Pr(f,a,oe,mt(v,Fe)),E.vars.scrollX=x(oe)),a=d(),oe=a+te*.05*-q.velocityY/.227,te*=Pr(d,a,oe,mt(v,ce)),E.vars.scrollY=ye(oe),E.invalidate().duration(te).play(.01),(zt&&E.vars.scrollY>=c||a>=c-1)&&m.to({},{onUpdate:Ae,duration:te})}l&&l(q)},e.onWheel=function(){E._ts&&E.pause(),$e()-W>1e3&&(X=0,W=$e())},e.onChange=function(q,ee,te,a,oe){if(ti!==X&&xe(),ee&&i&&f(x(a[2]===ee?yt+(q.startX-q.x):f()+ee-a[1])),te){d.offset&&b();var qt=oe[2]===te,Lt=qt?se+q.startY-q.y:d()+te-oe[1],Qe=ye(Lt);qt&&Lt!==Qe&&(se+=Qe-Lt),d(Qe)}(te||ee)&&Ct()},e.onEnable=function(){Bn(v,i?!1:"x"),L.addEventListener("refresh",Ae),ve(R,"resize",Ae),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=f.smooth=!1),he.enable()},e.onDisable=function(){Bn(v,!0),me(R,"resize",Ae),L.removeEventListener("refresh",Ae),he.kill()},e.lockAxis=e.lockAxis!==!1,o=new Q(e),o.iOS=zt,zt&&!d()&&d(1),zt&&m.ticker.add(pt),Pe=o._dc,E=m.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:as(d,d(),function(){return E.pause()})},onUpdate:Ct,onComplete:Pe.vars.onComplete}),o};L.sort=function(t){if(Re(t))return M.sort(t);var e=R.pageYOffset||0;return L.getAll().forEach(function(r){return r._sortY=r.trigger?e+r.trigger.getBoundingClientRect().top:r.start+R.innerHeight}),M.sort(t||function(r,i){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};L.observe=function(t){return new Q(t)};L.normalizeScroll=function(t){if(typeof t>"u")return Ie;if(t===!0&&Ie)return Ie.enable();if(t===!1){Ie&&Ie.kill(),Ie=t;return}var e=t instanceof Q?t:so(t);return Ie&&Ie.target===e.target&&Ie.kill(),ni(e.target)&&(Ie=e),e};L.core={_getVelocityProp:Wn,_inputObserver:cs,_scrollers:P,_proxies:vt,bridge:{ss:function(){nt||si("scrollStart"),nt=$e()},ref:function(){return Me}}};Jr()&&m.registerPlugin(L);const oo=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,lo=`precision highp float;

uniform float uTime;
uniform float uScroll;
uniform vec2  uResolution;
uniform vec2  uMouse;
uniform vec2  uClickPos;
uniform float uClickTime;
uniform float uClickActive;

varying vec2 vUv;

// ── Hash & Noise ──────────────────────────────────────────

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

float fbm(vec2 p) {
    float v = 0.0, a = 0.5, f = 1.0;
    for (int i = 0; i < 5; i++) { v += a * noise(p * f); f *= 2.2; a *= 0.45; }
    return v;
}

// ── Ocean simulation — multi-scale wave physics ───────────

float oceanHeight(vec2 uv, float t) {
    float h = 0.0;
    // Deep swell — long, slow rollers
    h += sin(uv.x * 2.5 + t * 0.35 + cos(uv.y * 1.8 + t * 0.22) * 1.5) * 0.6;
    h += cos(uv.y * 2.2 - t * 0.30 + sin(uv.x * 1.5 + t * 0.18) * 1.8) * 0.5;
    // Mid-frequency — wind chop
    h += sin(uv.x * 5.5 + uv.y * 3.0 + t * 0.65) * 0.3;
    h += cos(uv.y * 6.0 - uv.x * 2.5 + t * 0.55) * 0.25;
    h += sin((uv.x + uv.y) * 7.0 + t * 0.7) * 0.2;
    // Surface ripple — high frequency capillary waves
    h += sin(uv.x * 15.0 + t * 1.2 + uv.y * 3.5) * 0.08;
    h += cos(uv.y * 14.0 - t * 1.1 + uv.x * 4.0) * 0.07;
    h += sin((uv.x + uv.y) * 18.0 + t * 1.5) * 0.05;
    // Organic noise texture
    h += fbm(uv * 3.5 + t * 0.1) * 0.35;
    return h;
}

// ── Caustic light — refracted by waves ────────────────────

float causticLight(vec2 uv, float t) {
    vec2 q = uv;
    // Wave-driven refraction
    float hx = oceanHeight(uv + vec2(0.01, 0.0), t);
    float hy = oceanHeight(uv + vec2(0.0, 0.01), t);
    q += vec2(hx - oceanHeight(uv, t), hy - oceanHeight(uv, t)) * 3.0;

    // Fine caustic mesh
    float c = 0.0;
    c += sin(q.x * 16.0 + t * 2.0) * sin(q.y * 15.0 - t * 1.8) * 0.5 + 0.5;
    c += sin(q.x * 20.0 + q.y * 12.0 + t * 1.5) * 0.45 + 0.5;
    c += sin(q.x * 24.0 - t * 2.2) * sin(q.y * 21.0 + t * 1.9) * 0.4 + 0.5;
    c += sin(q.x * 30.0 + q.y * 18.0 + t * 2.5) * 0.3 + 0.5;
    // Organic seabed texture
    c += fbm(q * 6.0 + t * 0.12) * 0.35;
    return clamp(c / 3.6, 0.0, 1.0);
}

// ── Foam / whitecaps ──────────────────────────────────────

float foam(vec2 uv, float t) {
    float h = oceanHeight(uv, t);
    // Whitecaps where wave steepness is high
    float steepness = abs(h - oceanHeight(uv + vec2(0.005, 0.0), t)) * 20.0;
    float foamMask = smoothstep(0.3, 0.7, steepness);
    // Noise variation in foam
    foamMask *= 0.5 + 0.5 * noise(uv * 12.0 + t * 0.5);
    // Only near wave peaks
    foamMask *= smoothstep(0.0, 0.2, h + 0.5);
    return foamMask * 0.6;
}

// ── Sun & reflection — Impression, Sunrise ────────────────

float sunGlow(vec2 uv, float t) {
    vec2 sunPos = vec2(0.42 + sin(t * 0.025) * 0.04, 0.24);
    float d = length(uv - sunPos);
    // Bright core
    float s = exp(-d * 30.0) * 1.0;
    // Glow
    s += exp(-d * 10.0) * 0.6;
    s += exp(-d * 4.0) * 0.3;
    s += exp(-d * 1.5) * 0.1;

    // Reflection path — broken light on water
    float r = 0.0;
    float yb = uv.y - sunPos.y;
    if (yb > 0.0 && yb < 0.65) {
        float hd = abs(uv.x - sunPos.x);
        float waveHeight = oceanHeight(uv * 2.0, t) * 0.3;
        float pw = 0.015 + yb * 0.10 + waveHeight * 0.04;
        float path = exp(-hd / pw);
        // Segmented reflection (waves break the light)
        path *= 1.0 - smoothstep(0.0, 0.06, abs(fract(yb * 10.0 + t * 0.35 + waveHeight * 2.0) - 0.5));
        // Shimmer
        path *= 0.5 + 0.5 * sin(yb * 50.0 + t * 2.5 + waveHeight * 8.0);
        path *= exp(-yb * 3.0);
        r = path * 0.75;
    }
    return s + r;
}

// ── Mist / atmosphere ─────────────────────────────────────

float mist(vec2 uv, float t) {
    float m = fbm(uv * 1.8 + t * 0.04) * 0.45;
    m += fbm(uv * 3.5 - t * 0.06) * 0.25;
    m *= 1.0 - smoothstep(0.25, 0.75, uv.y);
    return m;
}

// ── Click ripple ──────────────────────────────────────────

float clickRipple(vec2 uv) {
    if (uClickActive < 0.5) return 0.0;
    float elapsed = uTime - uClickTime;
    if (elapsed < 0.0 || elapsed > 3.5) return 0.0;
    float aspect = uResolution.x / uResolution.y;
    vec2 st = (uv - 0.5) * vec2(aspect, 1.0);
    vec2 cp = (uClickPos - 0.5) * vec2(aspect, 1.0);
    float dist = length(st - cp);
    float radius = elapsed * 0.42;
    float ring = exp(-abs(dist - radius) / (0.04 + elapsed * 0.01));
    float ring2 = exp(-abs(dist - radius * 0.5) / (0.10 + elapsed * 0.02)) * 0.3;
    return (ring + ring2) * exp(-elapsed * 0.75);
}

vec2 mousePerturb(vec2 uv) {
    float aspect = uResolution.x / uResolution.y;
    vec2 st = (uv - 0.5) * vec2(aspect, 1.0);
    vec2 mp = (uMouse - 0.5) * vec2(aspect, 1.0);
    float dist = length(st - mp);
    float influence = exp(-dist * 2.5) * 0.025;
    vec2 dir = normalize(st - mp + 0.001);
    float angle = atan(dir.y, dir.x) + uTime * 0.3;
    return vec2(cos(angle), sin(angle)) * influence + dir * exp(-dist * 1.2) * 0.01;
}

// ── Main ──────────────────────────────────────────────────

void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    float t = uScroll;

    vec2 flow = mousePerturb(uv);
    vec2 st = (uv - 0.5) * vec2(aspect, 1.0) + flow;

    float caustic = causticLight(st, uTime);
    float sun = sunGlow(uv, uTime);
    float mistVal = mist(uv, uTime);
    float foamVal = foam(st, uTime);
    float ripple = clickRipple(uv);

    // ── Bright Monet "Impression, Sunrise" palette ─────────
    // No muted colors — everything glows with light

    vec3 deepBlue   = vec3(0.03, 0.12, 0.30);
    vec3 oceanBlue  = vec3(0.05, 0.20, 0.42);
    vec3 tealWater  = vec3(0.08, 0.30, 0.48);
    vec3 brightTeal = vec3(0.12, 0.42, 0.52);
    vec3 aquamarine = vec3(0.18, 0.50, 0.55);
    vec3 seaGreen   = vec3(0.25, 0.55, 0.45);
    vec3 warmAqua   = vec3(0.35, 0.58, 0.42);
    vec3 goldenHaze = vec3(0.75, 0.52, 0.25);
    vec3 sunOrange  = vec3(1.00, 0.48, 0.15);
    vec3 brightOr   = vec3(1.00, 0.38, 0.08);
    vec3 fireReflect= vec3(1.00, 0.30, 0.05);
    vec3 warmRose   = vec3(0.80, 0.25, 0.22);
    vec3 violetHaze = vec3(0.50, 0.18, 0.35);

    float s0 = smoothstep(0.0,  0.10, t);
    float s1 = smoothstep(0.06, 0.20, t);
    float s2 = smoothstep(0.14, 0.30, t);
    float s3 = smoothstep(0.24, 0.40, t);
    float s4 = smoothstep(0.34, 0.50, t);
    float s5 = smoothstep(0.44, 0.60, t);
    float s6 = smoothstep(0.54, 0.70, t);
    float s7 = smoothstep(0.64, 0.80, t);
    float s8 = smoothstep(0.74, 0.90, t);
    float s9 = smoothstep(0.84, 1.0,  t);

    vec3 base = deepBlue;
    base = mix(base, oceanBlue,   s0); base = mix(base, tealWater,   s1);
    base = mix(base, brightTeal,  s2); base = mix(base, aquamarine,  s3);
    base = mix(base, seaGreen,    s4); base = mix(base, warmAqua,    s5);
    base = mix(base, goldenHaze,  s6); base = mix(base, sunOrange,   s7);
    base = mix(base, brightOr,    s8); base = mix(base, violetHaze,  s9);

    vec3 hl = oceanBlue;
    hl = mix(hl, tealWater,   s0); hl = mix(hl, brightTeal,  s1);
    hl = mix(hl, aquamarine,  s2); hl = mix(hl, seaGreen,    s3);
    hl = mix(hl, warmAqua,    s4); hl = mix(hl, goldenHaze,  s5);
    hl = mix(hl, sunOrange,   s6); hl = mix(hl, brightOr,    s7);
    hl = mix(hl, fireReflect, s8); hl = mix(hl, warmRose,    s9);

    // ── Compose scene ──────────────────────────────────────
    float bright = smoothstep(0.1, 0.85, caustic);
    vec3 color = mix(base, hl, bright * 0.6);

    // Sun dominates the scene
    vec3 sunCol = mix(sunOrange, vec3(1.0, 0.9, 0.5), sun * 0.4);
    color = mix(color, sunCol, sun * 0.85);

    // Reflection warms the water
    color += fireReflect * bright * sun * 0.35;

    // Foam / whitecaps catch the light
    color += vec3(0.9, 0.8, 0.6) * foamVal * 0.5;
    color += vec3(1.0, 0.7, 0.3) * foamVal * sun * 0.3;

    // Mist softens
    color = mix(color, warmAqua * 1.15, mistVal * 0.3);

    // Click ripple
    color += fireReflect * ripple * 0.55;

    // Caustic peaks
    float peak = pow(bright, 4.5);
    color += vec3(1.0, 0.7, 0.25) * peak * 0.3;

    // ── Chromatic aberration ───────────────────────────────
    float ab = pow(bright, 3.0) * 0.035;
    color.r += (causticLight(st + vec2(ab, 0.0), uTime) - caustic) * 0.07;
    color.b += (causticLight(st - vec2(ab * 0.5, ab * 0.5), uTime) - caustic) * 0.07;

    // ── Light droplets ─────────────────────────────────────
    float drop = 0.0;
    for (float j = 0.0; j < 2.0; j++) {
        vec2 dv = uv * uResolution * 0.15;
        vec2 cell = floor(dv + j * 43.0);
        float h = hash(cell + floor(uTime * 0.12 + j * 17.0));
        vec2 off = vec2(hash(cell + 53.0), hash(cell + 89.0));
        vec2 pos = (cell + off) / (uResolution * 0.15);
        pos.y += fract(uTime * 0.006 + j * 0.3);
        float d = length(uv - pos) * uResolution.y * 0.15;
        drop += exp(-d * 5.0) * h * 0.04;
    }
    color += drop * sunOrange;

    // ── Grain ──────────────────────────────────────────────
    color += hash(uv * uResolution + uTime * 80.0) * 0.02;

    // ── Vignette ───────────────────────────────────────────
    float vig = 1.0 - length(vUv - 0.5) * 1.0;
    vig = smoothstep(0.0, 0.94, vig);
    color *= 0.87 + 0.13 * vig;
    color *= vig;

    gl_FragColor = vec4(color, 1.0);
}
`,us=[{slug:"why-we-write",title:"我们为什么要写作",date:"2026-07-28",tags:["思考","写作"],description:"在短视频泛滥的时代，静下心来写点什么，本身就是一种抵抗。",content:`## 写作即思考

很多人以为写作是"把想好的东西写下来"。事实恰恰相反——**写作本身就是思考的过程**。

当你试图把一个观点写成文字，你会发现自己其实并没有真正理解它。那些似是而非的念头，在落笔的瞬间原形毕露。

> "If you're thinking without writing, you only think you're thinking." — Leslie Lamport

### 如何开始

不需要完美。不需要等到"想清楚了再写"。坐下来，打开编辑器，写下第一个句子。

\`\`\`
开始写作的三个建议：
1. 降低标准——先完成，再完美
2. 固定时间——每天 30 分钟
3. 公开分享——即使只有一个人看
\`\`\`

坚持三个月，你会惊讶于自己的变化。`},{slug:"css-grid-guide",title:"CSS Grid 布局完全指南",date:"2026-07-25",tags:["前端","CSS"],description:"Grid 是现代 CSS 最强大的布局系统。fr 单位、grid-template-areas、auto-fill 响应式——全在这里。",content:`## Grid 基础

Grid 把页面划分成由**行**和**列**组成的网格。

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
\`\`\`

### fr 单位

\`fr\` 是 "fraction" 的缩写，代表可用空间的一份。

| 写法 | 效果 |
|------|------|
| \`1fr 1fr 1fr\` | 三等分 |
| \`2fr 1fr 1fr\` | 2:1:1 |

### 自适应卡片布局

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
\`\`\`

不需要 media query，自动响应式。

## 实战：圣杯布局

经典的 Header-Content-Sidebar-Footer 布局，用 Grid 几行代码就能搞定：

\`\`\`css
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "main   sidebar"
    "footer footer";
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.header  { grid-area: header; }
.main    { grid-area: main; }
.sidebar { grid-area: sidebar; }
.footer  { grid-area: footer; }
\`\`\`

\`grid-template-areas\` 让布局一目了然。`},{slug:"hello-world",title:"Hello, World — 我的第一篇博客",date:"2026-07-20",tags:["生活","博客"],description:"搭建博客的第一天，记录一下开始写博客的初衷。",content:`## 为什么要写博客？

一直想找个地方记录自己的思考和学到的技术，折腾了很久终于把这个博客搭起来了。

## 技术选型

这个博客用到的技术很简单：

- **Vite** — 极速的前端构建工具
- **TypeScript** — 类型安全的 JavaScript
- **Three.js** — 3D 图形库，驱动背景 Shader
- **Lenis** — 丝滑平滑滚动
- **GSAP** — 动画引擎

## 代码示例

\`\`\`typescript
interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  content: string
}

function getPosts(): BlogPost[] {
  return posts.sort((a, b) =>
    a.date > b.date ? -1 : 1
  )
}
\`\`\`

> 写作是最好的思考方式。`},{slug:"beauty-of-simplicity",title:"简洁之美：少即是多",date:"2026-07-15",tags:["设计","哲学"],description:"好的设计不是没有东西可以添加，而是没有东西可以删减。",content:`## 复杂是自然的，简洁是刻意的

写第一稿代码时，我们倾向于堆砌。添加比删减更容易，因为添加不需要判断力。

**删减需要勇气。**

### 在代码中追求简洁

\`\`\`javascript
// 复杂 —— 11 行，6 个条件分支
function getDiscount(user) {
  if (user.isVip) {
    if (user.years > 5) return 0.3
    return 0.1
  }
  if (user.isStudent) return 0.15
  return 0
}

// 简洁 —— 数据驱动
const RULES = [
  [{ isVip: true, years: [5, Infinity] }, 0.3],
  [{ isVip: true }, 0.1],
  [{ isStudent: true }, 0.15],
]
\`\`\`

数据驱动替代条件嵌套——代码少了，逻辑反而更清晰。

> Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
> — Antoine de Saint-Exupéry`}],de={get(t,e){try{const r=localStorage.getItem(t);return r?JSON.parse(r):e}catch{return e}},set(t,e){localStorage.setItem(t,JSON.stringify(e))},remove(t){localStorage.removeItem(t)}},ds={nickname:"yeesy",bio:"热爱写作的开发者。相信文字的力量，相信简洁即是美。",avatarEmoji:"🌸"},Si=()=>({...ds,...de.get("blog_profile",{})}),Or=t=>de.set("blog_profile",t),Ln=()=>de.get("blog_admin",!1),ao=()=>{const t=!Ln();return de.set("blog_admin",t),t},sr=()=>new Set(de.get("blog_hidden",[])),hs=t=>{const e=sr();return e.has(t)?e.delete(t):e.add(t),de.set("blog_hidden",[...e]),e.has(t)},Nt=()=>de.get("blog_user_posts",[]),or=t=>de.set("blog_user_posts",t),fs=t=>{const e=Nt(),r=e.findIndex(i=>i.slug===t.slug);r>=0?e[r]=t:e.unshift(t),or(e)},co=t=>{const e=Nt(),r=e.find(i=>i.slug===t);r&&(ps(r,!1),or(e.filter(i=>i.slug!==t)))},lr=()=>{const t=de.get("blog_recycle",[]),e=Date.now(),r=720*60*60*1e3,i=t.filter(n=>e-n.deletedAt<r);return i.length!==t.length&&de.set("blog_recycle",i),i},ar=t=>de.set("blog_recycle",t),ps=(t,e)=>{const r=lr();r.some(i=>i.slug===t.slug)||r.push({slug:t.slug,title:t.title,date:t.date,deletedAt:Date.now(),isBuiltin:e,postData:e?void 0:{...t}}),ar(r)},zr=t=>ar(lr().filter(e=>e.slug!==t)),Mn=()=>new Set(de.get("blog_deleted_builtins",[])),uo=t=>{const e=Mn();e.add(t),de.set("blog_deleted_builtins",[...e])},ho=t=>{const e=Mn();e.delete(t),de.set("blog_deleted_builtins",[...e])},En=()=>de.get("blog_likes",{}),fo=t=>{const e=En();e[t]?delete e[t]:e[t]=1,de.set("blog_likes",e)},cr=t=>de.get(`blog_cmts_${t}`,[]),po=(t,e,r)=>{const i=cr(t);i.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),author:e||"匿名",content:r,createdAt:Date.now()}),de.set(`blog_cmts_${t}`,i)},go=(t,e)=>de.set(`blog_cmts_${t}`,cr(t).filter(r=>r.id!==e)),ji=()=>{const t=sr(),e=Mn(),r=us.filter(s=>!t.has(s.slug)&&!e.has(s.slug)),i=Nt(),n=new Set(r.map(s=>s.slug));return[...i.filter(s=>!n.has(s.slug)),...r].sort((s,l)=>s.date>l.date?-1:1)},gs=()=>{const t=sr(),e=Mn(),r=us.filter(s=>!e.has(s.slug)).map(s=>({...s,hidden:t.has(s.slug)})),i=Nt(),n=new Set(r.map(s=>s.slug));return[...i.filter(s=>!n.has(s.slug)),...r].sort((s,l)=>s.date>l.date?-1:1)},mo=t=>ji().find(e=>e.slug===t),ms=t=>gs().find(e=>e.slug===t),vo=()=>["全部",...new Set(ji().flatMap(t=>t.tags))],yo=t=>t.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"").slice(0,50),Se=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),vs=t=>t<1024?`${t}B`:t<1048576?`${(t/1024).toFixed(1)}KB`:`${(t/1048576).toFixed(1)}MB`,bo=t=>{const e=Date.now()-t;return e<6e4?"刚刚":e<36e5?`${Math.floor(e/6e4)}分钟前`:e<864e5?`${Math.floor(e/36e5)}小时前`:e<6048e5?`${Math.floor(e/864e5)}天前`:new Date(t).toISOString().slice(0,10)};function qe(t){const e=Object.assign(document.createElement("div"),{className:"toast",textContent:t});document.getElementById("toast-container").appendChild(e),setTimeout(()=>e.remove(),2600)}function _o(t){let e=t;e=e.replace(/```(\w*)\n([\s\S]*?)```/g,(l,o,c)=>`<pre><code class="lang-${o}">${Se(c.trim())}</code></pre>`),e=e.replace(/`([^`]+)`/g,"<code>$1</code>"),e=e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/(?<!\w)\*(.+?)\*(?!\w)/g,"<em>$1</em>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>'),e=e.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1">'),e=e.replace(/^> (.+)$/gm,"<blockquote><p>$1</p></blockquote>"),e=e.replace(/^---$/gm,"<hr>");const r=e.split(`
`),i=[],n=[];let s=!1;for(const l of r){if(/^\|(.+)\|$/.test(l)){const o=l.split("|").filter(c=>c.trim());if(o.every(c=>/^[-:\s]+$/.test(c)))continue;s||(s=!0,n.length=0),n.push("<tr>"+o.map(c=>`<td>${c.trim()}</td>`).join("")+"</tr>");continue}s&&(i.push("<table>"+n.join("")+"</table>"),s=!1),i.push(l)}return s&&i.push("<table>"+n.join("")+"</table>"),e=i.join(`
`),e=e.replace(/^### (.+)$/gm,"<h3>$1</h3>"),e=e.replace(/^## (.+)$/gm,"<h2>$1</h2>"),e=e.replace(/^- (.+)$/gm,"<li>$1</li>"),e=e.replace(/^\d+\. (.+)$/gm,"<li>$1</li>"),e=e.replace(/((?:<li>.*<\/li>\n?)+)/g,"<ul>$1</ul>"),e=e.replace(/^(?!<[a-zA-Z/!])(.+)$/gm,"<p>$1</p>"),e.replace(/<p>\s*<\/p>/g,"")}const wo=document.getElementById("bg-canvas"),xi=document.getElementById("main-content"),So=document.getElementById("nav"),$n=document.getElementById("nav-logo"),xo=document.getElementById("progress-bar"),ut=document.getElementById("footer"),ys=document.getElementById("back-to-top");let ii=null;$n.addEventListener("pointerdown",t=>{t.preventDefault(),ii=setTimeout(()=>{const e=ao(),r=Object.assign(document.createElement("div"),{className:"admin-toast",textContent:e?"博主模式已激活":"博主模式已退出"});document.body.appendChild(r),setTimeout(()=>r.remove(),2500),bs(),dr(!0)},3e3)});$n.addEventListener("pointerup",()=>{ii&&(clearTimeout(ii),ii=null)});$n.addEventListener("pointerleave",()=>{ii&&(clearTimeout(ii),ii=null)});$n.addEventListener("click",t=>{t.preventDefault(),location.hash="#/"});function bs(){const t=Ln();document.body.classList.toggle("admin-mode",t),document.querySelectorAll(".nav-link-admin").forEach(e=>e.style.display=t?"":"none")}const ur=new Ts({canvas:wo,antialias:!0,alpha:!1});ur.setPixelRatio(Math.min(devicePixelRatio,2));const _s=new ks,Eo=new Cs(-1,1,1,-1,0,1),gt={uTime:{value:0},uScroll:{value:0},uResolution:{value:new Pn(innerWidth,innerHeight)},uMouse:{value:new Pn(.5,.5)},uClickPos:{value:new Pn(.5,.5)},uClickTime:{value:0},uClickActive:{value:0}},To=new Ls({vertexShader:oo,fragmentShader:lo,uniforms:gt,depthWrite:!1,depthTest:!1});_s.add(new Ms(new $s(2,2),To));window.addEventListener("resize",()=>{ur.setSize(innerWidth,innerHeight),gt.uResolution.value.set(innerWidth,innerHeight)});let Tn={x:.5,y:.5},hi={x:.5,y:.5};window.addEventListener("mousemove",t=>{Tn.x=t.clientX/innerWidth,Tn.y=1-t.clientY/innerHeight});window.addEventListener("click",t=>{gt.uClickPos.value.set(t.clientX/innerWidth,1-t.clientY/innerHeight),gt.uClickTime.value=gt.uTime.value,gt.uClickActive.value=1,Vi.to(gt.uClickActive,{value:0,duration:.5,delay:3,ease:"power2.out"})});const ue=new Ns({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:!0,wheelMultiplier:.8,touchMultiplier:1.5});Vi.registerPlugin(L);ue.on("scroll",L.update);Vi.ticker.add(t=>ue.raf(t*1e3));Vi.ticker.lagSmoothing(0);function ws(){const t=ue.scroll??scrollY,e=ue.limit??Math.max(document.documentElement.scrollHeight-innerHeight,1);gt.uScroll.value=Math.min(t/e,1),xo.style.width=`${Math.min(t/e*100,100)}%`,So.classList.toggle("scrolled",t>20),ys.classList.toggle("visible",t>500)}ue.on("scroll",ws);ys.addEventListener("click",()=>ue.scrollTo(0,{duration:.8}));function ko(t){const e=t in En(),r=En()[t]||0;return`<span class="card-like${e?" liked":""}" data-like="${t}">${e?"♥":"♡"} ${r||""}</span>`}function Co(t){return t?.length?`<div class="attachments-list"><h4>📎 附件 (${t.length})</h4><div>${t.map(e=>`<a class="attachment-item" href="${e.data}" download="${Se(e.name)}" title="${Se(e.name)}"><span>📄</span><span>${Se(e.name)}</span><span class="att-size">${vs(e.size)}</span></a>`).join("")}</div></div>`:""}function Lo(t){const e=cr(t);return`<div class="comments-section">
    <h3>评论 <span class="comment-count">${e.length} 条</span></h3>
    <div class="comment-form">
      <input type="text" id="ca-${t}" placeholder="昵称" maxlength="30">
      <textarea id="cc-${t}" placeholder="写下想法..." maxlength="500"></textarea>
      <button class="btn-submit" data-submit="${t}">发表</button>
    </div>
    ${e.length===0?'<p style="color:var(--text-faint);text-align:center;padding:28px 0">还没有评论</p>':`<div class="comment-list">${e.map(r=>`<div class="comment-item"><div class="comment-header"><span class="comment-author">${Se(r.author)}</span><span class="comment-time">${bo(r.createdAt)}</span></div><div class="comment-body">${Se(r.content)}</div><button class="comment-delete" data-del="${t}:${r.id}">删除</button></div>`).join("")}</div>`}
  </div>`}function Mo(t){document.querySelector(`[data-submit="${t}"]`)?.addEventListener("click",()=>{const e=document.getElementById(`ca-${t}`),r=document.getElementById(`cc-${t}`);if(!r?.value.trim())return qe("请输入评论");po(t,e?.value.trim()||"",r.value.trim()),r.value="",qe("评论已发表"),kn(t)}),document.querySelectorAll("[data-del]").forEach(e=>e.addEventListener("click",()=>{const[r,i]=e.dataset.del.split(":");confirm("删除这条评论？")&&(go(r,i),qe("已删除"),kn(r))}))}function Ss(){document.querySelectorAll("[data-like]").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation();const r=t.dataset.like;fo(r);const i=location.hash.slice(1)||"/";i==="/"||i===""?Zt():i.startsWith("/post/")&&kn(i.split("/post/")[1])})})}function xs(){L.refresh(),document.querySelectorAll(".article-content h2,.article-content h3,.article-content p,.article-content pre,.article-content blockquote,.article-content ul,.article-content ol,.article-content table").forEach((e,r)=>{Vi.fromTo(e,{opacity:0,y:28},{opacity:1,y:0,duration:.55,delay:r*.025,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 92%"}})})}function jn(t,e){const r=ms(t);if(!r||!confirm(`确定删除「${r.title}」？`))return;Nt().some(n=>n.slug===t)?co(t):(ps(r,!0),uo(t)),qe("已删除，可在回收站恢复"),e()}let Ri="全部",fi="";function Zt(){const t=Ln(),e=Si(),r=ji(),i=vo();let n=Ri==="全部"?r:r.filter(l=>l.tags.includes(Ri));if(fi){const l=fi.toLowerCase();n=n.filter(o=>o.title.toLowerCase().includes(l)||o.description.toLowerCase().includes(l)||o.tags.some(c=>c.toLowerCase().includes(l)))}const s=n.length===0?`<div class="empty-state"><div class="icon">·</div><p>${fi?"没有匹配":"还没有文章"}</p></div>`:n.map(l=>`<a class="post-card" href="#/post/${l.slug}">
        <div class="post-date">${l.date}</div><h2>${l.title}</h2><p class="post-desc">${l.description}</p>
        <div class="post-meta">
          ${l.tags.map(o=>`<span class="post-tag">${o}</span>`).join("")}
          <span class="read-time">${Math.ceil(l.content.length/500)||1}min</span>
          ${t?`<span class="card-admin-actions"><button data-hp="${l.slug}">${l.hidden?"显示":"隐藏"}</button><button data-ep="${l.slug}">编辑</button><button class="danger" data-dp="${l.slug}">删除</button></span>`:""}
          ${ko(l.slug)}
        </div></a>`).join("");xi.innerHTML=`<div class="container">
    <div class="hero"><h1><span class="hl">Simplification</span><br>is the ultimate<br><span class="hl">Sophistication</span></h1><p>关于代码、设计、阅读，以及生活中值得被记录下来的瞬间。</p></div>
    <div class="tags-row">${i.map(l=>`<button class="tag-chip${l===Ri?" active":""}" data-tag="${l}">${l}</button>`).join("")}</div>
    <div style="text-align:center;margin-bottom:40px"><input type="text" id="si" placeholder="搜索..." value="${Se(fi)}" style="background:none;border:1px solid var(--border);border-radius:20px;padding:8px 20px;color:var(--text);font-size:.88rem;outline:none;width:200px;text-align:center"></div>
    <div class="posts-grid">${s}</div></div>`,ut.innerHTML=`<p>© 2026 ${e.nickname} · 这里什么都没有，但你来了</p>`,ut.style.display="",document.querySelectorAll(".tag-chip").forEach(l=>l.addEventListener("click",()=>{Ri=l.dataset.tag??"全部",fi="",Zt(),ue.scrollTo(0,{immediate:!0})})),document.getElementById("si")?.addEventListener("input",l=>{fi=l.target.value,Ri="全部",Zt()}),document.querySelectorAll("[data-hp]").forEach(l=>l.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),hs(l.dataset.hp),qe("已切换"),Zt()})),document.querySelectorAll("[data-ep]").forEach(l=>l.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),location.hash=`#/write?edit=${l.dataset.ep}`})),document.querySelectorAll("[data-dp]").forEach(l=>l.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),jn(l.dataset.dp,()=>{const c=ue.scroll;Zt(),requestAnimationFrame(()=>ue.scrollTo(c,{immediate:!0}))})})),Ss(),requestAnimationFrame(()=>ue.scrollTo(0,{immediate:!0})),Ft="/",Ei("/"),document.title=`${e.nickname} 的博客`}function kn(t){const e=mo(t);if(!e){location.hash="#/";return}const r=Ln(),i=Si(),n=Math.ceil(e.content.length/500)||1,s=En(),l=t in s;xi.innerHTML=`<div class="container container-narrow">
    <a href="#/" class="back-link">← 返回</a>
    <div class="article-header">
      <div class="article-tags">${e.tags.map(o=>`<span>${o}</span>`).join("")}</div>
      <h1>${e.title}</h1>
      <div class="article-meta"><span>${e.date}</span><span>·</span><span>${n} 分钟阅读</span></div>
    </div>
    ${Co(e.attachments)}
    <div class="article-content">${_o(e.content)}</div>
    <div class="article-actions">
      <button class="art-act${l?" liked":""}" data-like="${t}">${l?"♥":"♡"} ${l?"已喜欢":"喜欢"} ${s[t]||""}</button>
      ${r?`<a href="#/write?edit=${t}" class="art-act">编辑</a>`:""}
    </div>
    ${Lo(t)}</div>`,ut.innerHTML=`<p>© 2026 ${i.nickname} · 这里什么都没有，但你来了</p>`,ut.style.display="",Ss(),Mo(t),requestAnimationFrame(()=>{ue.scrollTo(0,{immediate:!0}),xs()}),Ft=`/post/${t}`,Ei("/"),document.title=`${e.title} - ${i.nickname}`}function $o(){const t=Si();xi.innerHTML=`<div class="container container-narrow"><div class="about-section">
    <div class="about-profile">
      <div class="about-avatar">${t.avatarUrl?`<img src="${Se(t.avatarUrl)}" alt="${Se(t.nickname)}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`:t.avatarEmoji}</div>
      <div class="about-info">
        <h1>你好，我是 ${t.nickname}</h1>
        <p>${Se(t.bio)}</p>
        <p>没有广告，没有追踪，只有纯粹的内容与光影。</p>
        <div class="about-skills">${["JavaScript","TypeScript","React","Three.js","CSS","设计","写作","开源"].map(e=>`<span>${e}</span>`).join("")}</div>
      </div>
    </div>
    <div class="article-content">
      <h2>关于这个博客</h2>
      <p>每一行代码都写在 <strong>Vite + TypeScript</strong> 上。背景是一个用 <strong>Three.js + 自定义 GLSL Shader</strong> 实现的深海光影——从幽蓝深渊到金色海面，随着滚动缓缓上升。</p>
      <p><strong>Lenis</strong> 提供丝滑的平滑滚动，<strong>GSAP</strong> 驱动内容的淡入动画。没有玻璃拟态，没有多余的装饰——只有光与文字的对话。</p>
      <h2>技术</h2>
      <table>
        <tr><td><strong>构建</strong></td><td>Vite + TypeScript</td></tr>
        <tr><td><strong>Shader</strong></td><td>Three.js + 自定义 GLSL</td></tr>
        <tr><td><strong>滚动</strong></td><td>Lenis + GSAP ScrollTrigger</td></tr>
        <tr><td><strong>存储</strong></td><td>localStorage 全持久化</td></tr>
      </table>
      <blockquote><p>好的设计不是装饰，而是让内容发光。</p></blockquote>
    </div>
  </div></div>`,ut.innerHTML=`<p>© 2026 ${t.nickname} · 这里什么都没有，但你来了</p>`,ut.style.display="",requestAnimationFrame(()=>{ue.scrollTo(0,{immediate:!0}),xs()}),Ft="/about",Ei("/about"),document.title=`关于 - ${t.nickname}`}function Kn(){const t=Si(),e=["🌸","✨","🌊","🔥","💻","📖","🎨","🚀","🌙","⭐","🦊","🐱"];xi.innerHTML=`<div class="container container-narrow"><div class="settings-section"><h1>设置</h1><p class="settings-subtitle">修改个人资料，数据保存在本地。</p>
    <div class="settings-card"><h2>个人资料</h2>
      <div class="form-group"><label>昵称</label><input type="text" id="sn" value="${Se(t.nickname)}" maxlength="20"></div>
      <div class="form-group"><label>简介</label><textarea id="sb" rows="3" maxlength="200">${Se(t.bio)}</textarea></div>
      <div class="form-group"><label>头像 Emoji</label><div class="emoji-picker">${e.map(i=>`<button class="emoji-option${i===t.avatarEmoji&&!t.avatarUrl?" selected":""}" data-emoji="${i}">${i}</button>`).join("")}</div></div>
      <div class="form-group"><label>头像图片 URL</label><input type="text" id="sau" value="${Se(t.avatarUrl??"")}" placeholder="https://..."></div>
      <div class="btn-row"><button class="btn btn-primary" id="sp">保存</button><button class="btn btn-outline" id="sr">恢复默认</button></div>
    </div>
    <div class="settings-card"><h2>数据</h2><p style="color:var(--text-dim);font-size:.9rem">共 <strong>${ji().length}</strong> 篇文章 · localStorage 持久化</p></div>
  </div></div>`,ut.innerHTML=`<p>© 2026 ${t.nickname} · 这里什么都没有，但你来了</p>`,ut.style.display="";let r=t.avatarEmoji;document.querySelectorAll(".emoji-option").forEach(i=>i.addEventListener("click",()=>{document.querySelectorAll(".emoji-option").forEach(n=>n.classList.remove("selected")),i.classList.add("selected"),r=i.dataset.emoji})),document.getElementById("sp").addEventListener("click",()=>{Or({nickname:document.getElementById("sn").value.trim()||t.nickname,bio:document.getElementById("sb").value.trim()||t.bio,avatarEmoji:r,avatarUrl:document.getElementById("sau").value.trim()||void 0}),qe("已保存"),Kn()}),document.getElementById("sr").addEventListener("click",()=>{confirm("恢复默认？")&&(Or({...ds}),qe("已恢复"),Kn())}),requestAnimationFrame(()=>ue.scrollTo(0,{immediate:!0})),Ft="/settings",Ei("/settings"),document.title=`设置 - ${t.nickname}`}function yn(t){const e=t?ms(t)??Nt().find(o=>o.slug===t):null;xi.innerHTML=`<div class="container container-narrow"><div class="write-section">
    <h1>${e?"编辑文章":"写新文章"}</h1><p class="write-subtitle">${e?"修改已有内容":"Markdown 写作。支持拖拽上传附件。"}</p>
    <div class="write-card">
      <div class="form-row"><div class="form-group" style="flex:2"><label>标题</label><input type="text" id="wt" value="${e?Se(e.title):""}" maxlength="100"></div><div class="form-group" style="flex:1"><label>标签（逗号分隔）</label><input type="text" id="wg" value="${e?e.tags.join(","):""}"></div></div>
      <div class="form-group"><label>摘要</label><input type="text" id="we" value="${e?Se(e.description):""}" maxlength="200"></div>
      <div class="form-group"><label>正文（Markdown）</label><textarea id="wc" rows="18" placeholder="## 标题&#10;&#10;开始写...">${e?e.content:""}</textarea></div>
      <div class="form-group"><label>附件（拖拽到下方）</label><div class="file-drop-zone" id="dz"><div class="drop-icon">+</div><p>拖拽文件或点击选择</p><p class="drop-hint">最大 10MB/个</p></div><input type="file" id="fi" multiple style="display:none"><div class="file-list" id="fl"></div></div>
      <div class="btn-row" style="margin-top:20px"><button class="btn btn-primary" id="pb">${e?"更新":"发布"}</button><button class="btn btn-outline" id="cb">取消</button>${e?'<button class="btn btn-danger" id="db">删除</button>':""}</div>
    </div>
    ${(()=>{const o=gs();return o.length>0?`<div class="write-card"><h2 style="font-size:1.1rem;font-weight:700;margin-bottom:20px">所有文章 (${o.length})</h2><div class="admin-post-list">${o.map(c=>`<div class="admin-post-item${c.hidden?" hidden-post":""}"><div class="admin-post-info"><div class="admin-post-title">${c.hidden?"· ":""}${c.title}</div><div class="admin-post-meta">${c.date} · ${c.tags.join(", ")}${c.hidden?" · 已隐藏":""}</div></div><div class="admin-post-actions"><button class="btn btn-outline" style="padding:5px 12px;font-size:.8rem" data-ha="${c.slug}">${c.hidden?"显示":"隐藏"}</button><button class="btn btn-outline" style="padding:5px 12px;font-size:.8rem" data-ea="${c.slug}">编辑</button><button class="btn btn-danger" style="padding:5px 12px;font-size:.8rem" data-da="${c.slug}">删除</button></div></div>`).join("")}</div></div>`:""})()}
  </div></div>`,ut.style.display="",requestAnimationFrame(()=>ue.scrollTo(0,{immediate:!0}));let r=e?.attachments?[...e.attachments]:[];const i=()=>{const o=document.getElementById("fl");o.innerHTML=r.length===0?'<p style="color:var(--text-faint);font-size:.82rem">暂无附件</p>':r.map((c,v)=>`<span class="file-chip">📄 ${Se(c.name)} (${vs(c.size)})<button class="file-remove" data-fi="${v}">×</button></span>`).join(""),document.querySelectorAll(".file-remove").forEach(c=>c.addEventListener("click",()=>{r.splice(+c.dataset.fi,1),i()}))},n=document.getElementById("dz"),s=document.getElementById("fi");n.addEventListener("click",()=>s.click()),n.addEventListener("dragover",o=>{o.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>n.classList.remove("drag-over")),n.addEventListener("drop",o=>{o.preventDefault(),n.classList.remove("drag-over"),l(o.dataTransfer.files)}),s.addEventListener("change",()=>{s.files&&l(s.files),s.value=""});const l=o=>{Array.from(o).forEach(c=>{if(c.size>10485760)return qe(`"${c.name}" 超 10MB`);const v=new FileReader;v.onload=()=>{r.push({name:c.name,type:c.type,size:c.size,data:v.result}),i()},v.readAsDataURL(c)})};i(),document.getElementById("pb").addEventListener("click",()=>{const o=document.getElementById("wt").value.trim(),c=e?e.date:new Date().toISOString().slice(0,16).replace("T"," "),v=document.getElementById("wg").value.split(",").map(d=>d.trim()).filter(Boolean),y=document.getElementById("we").value.trim(),g=document.getElementById("wc").value;if(!o||!g){qe("标题和正文不能为空");return}const h=e?e.slug:yo(o)+"-"+Date.now().toString(36);fs({slug:h,title:o,date:c,description:y||g.slice(0,100),content:g,tags:v,attachments:r.length>0?r:void 0}),qe(e?"已更新":"已发布"),setTimeout(()=>{location.hash="#/"},400)}),document.getElementById("cb").addEventListener("click",()=>{location.hash="#/"}),document.getElementById("db")?.addEventListener("click",()=>{e&&jn(e.slug,()=>{qe("已删除"),setTimeout(()=>{location.hash="#/"},300)})}),document.querySelectorAll("[data-ea]").forEach(o=>o.addEventListener("click",()=>{yn(o.dataset.ea),ue.scrollTo(0,{immediate:!0})})),document.querySelectorAll("[data-da]").forEach(o=>o.addEventListener("click",()=>{jn(o.dataset.da,()=>{const c=ue.scroll;yn(),requestAnimationFrame(()=>ue.scrollTo(c,{immediate:!0}))})})),document.querySelectorAll("[data-ha]").forEach(o=>o.addEventListener("click",()=>{const c=o.dataset.ha;if(Nt().some(y=>y.slug===c)){const y=Nt(),g=y.find(h=>h.slug===c);g&&(g.hidden=!g.hidden,or(y))}else hs(c);qe("已切换"),yn(),ue.scrollTo(0,{immediate:!0})})),Ft="/write",Ei("/write"),document.title=`写文章 - ${Si().nickname}`}function bn(){const t=lr(),e=Si(),r=720*60*60*1e3,i=t.length===0?'<div class="empty-state"><div class="icon">🗑️</div><p>回收站为空</p></div>':`<div class="recycle-list">${t.map(n=>{const s=Math.max(0,Math.ceil((r-(Date.now()-n.deletedAt))/864e5));return`<div class="recycle-item">
          <div class="recycle-info">
            <div class="recycle-title">${Se(n.title)}</div>
            <div class="recycle-meta"><span>删除于 ${new Date(n.deletedAt).toISOString().slice(0,10)}</span><span class="recycle-remaining">剩余 ${s} 天</span></div>
          </div>
          <div class="recycle-actions">
            <button class="btn btn-outline" data-restore="${n.slug}">恢复</button>
            <button class="btn btn-danger" data-purge="${n.slug}">彻底删除</button>
          </div></div>`}).join("")}</div>`;xi.innerHTML=`<div class="container container-narrow"><div class="recycle-section">
    <h1>回收站</h1><p class="recycle-subtitle">删除的文章会保留 30 天，之后自动清除。</p>
    ${t.length>0?'<div style="text-align:right;margin-bottom:16px"><button class="btn btn-danger" id="empty-all">全部清空</button></div>':""}
    ${i}
  </div></div>`,ut.innerHTML=`<p>© 2026 ${e.nickname} · 这里什么都没有，但你来了</p>`,ut.style.display="",document.querySelectorAll("[data-restore]").forEach(n=>n.addEventListener("click",()=>{const s=n.dataset.restore,l=t.find(o=>o.slug===s);l&&(l.isBuiltin?ho(s):l.postData&&fs(l.postData),zr(s),qe("已恢复"),bn())})),document.querySelectorAll("[data-purge]").forEach(n=>n.addEventListener("click",()=>{const s=n.dataset.purge;confirm("确定彻底删除？此操作不可撤销。")&&(zr(s),qe("已彻底删除"),bn())})),document.getElementById("empty-all")?.addEventListener("click",()=>{confirm("确定清空回收站？所有文章将被永久删除，无法恢复。")&&(ar([]),qe("回收站已清空"),bn())}),requestAnimationFrame(()=>ue.scrollTo(0,{immediate:!0})),Ft="/recycle",Ei("/recycle"),document.title=`回收站 - ${e.nickname}`}let Ft="";function Ei(t){document.querySelectorAll(".nav-link").forEach(e=>{e.classList.toggle("active",e.getAttribute("data-route")===t)})}function dr(t=!1){const e=location.hash.slice(1)||"/",[r,i]=e.split("?"),n=new URLSearchParams(i||"");r===Ft&&!n.has("edit")&&!t||(L.getAll().forEach(s=>s.kill()),setTimeout(()=>{r==="/"||r===""?Zt():r.startsWith("/post/")?kn(r.split("/post/")[1]):r==="/about"?$o():r==="/settings"?Kn():r==="/write"?yn(n.get("edit")??void 0):r==="/recycle"?bn():Zt()},120),Ft=r)}window.addEventListener("hashchange",()=>dr());const Ro=new Rs;function Es(){requestAnimationFrame(Es),gt.uTime.value=Ro.getElapsedTime(),hi.x+=(Tn.x-hi.x)*.04,hi.y+=(Tn.y-hi.y)*.04,gt.uMouse.value.set(hi.x,hi.y),ur.render(_s,Eo)}const hr=Object.assign(document.createElement("a"),{href:"#/recycle",className:"nav-link nav-link-admin",textContent:"回收"});hr.setAttribute("data-route","/recycle");hr.style.display="none";document.getElementById("nav-links").appendChild(hr);bs();dr();requestAnimationFrame(Es);window.addEventListener("load",()=>{L.refresh(),ws()});console.log("%c🌊 %c深海","font-size:1.2em;color:#e0b88c;","color:#888");console.log(`%c  ${ji().length} posts · Three.js + Lenis + GSAP`,"color:#888");

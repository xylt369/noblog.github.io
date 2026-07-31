import{W as vs,S as _s,O as ws,a as bs,V as $n,M as ys,P as Ss,C as xs}from"./three-BBlaNamj.js";import{g as Xi}from"./gsap-CzGW6FVa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var cr="1.3.25";function Pr(t,e,r){return Math.max(t,Math.min(e,r))}function Es(t,e,r){return(1-r)*t+r*e}function Ts(t,e,r,n){return Es(t,e,1-Math.exp(-r*n))}function ks(t,e){return(t%e+e)%e}var Cs=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(t){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const r=Pr(0,this.currentTime/this.duration,1);e=r>=1;const n=e?1:this.easing(r);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Ts(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:r,duration:n,easing:i,onStart:s,onUpdate:l}){this.from=this.value=t,this.to=e,this.lerp=r,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=l}};function Ls(t,e){let r;return function(...n){clearTimeout(r),r=setTimeout(()=>{r=void 0,t.apply(this,n)},e)}}var Ms=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(t,e,{autoResize:r=!0,debounce:n=250}={}){this.wrapper=t,this.content=e,r&&(this.debouncedResize=Ls(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Rr=class{events={};emit(t,...e){const r=this.events[t]||[];for(let n=0,i=r.length;n<i;n++)r[n]?.(...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{this.events[t]=this.events[t]?.filter(r=>e!==r)}}off(t,e){this.events[t]=this.events[t]?.filter(r=>e!==r)}destroy(){this.events={}}};const $s=100/6,Dt={passive:!1};function ur(t,e){return t===1?$s:t===2?e:1}var Ps=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Rr;constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Dt),this.element.addEventListener("touchstart",this.onTouchStart,Dt),this.element.addEventListener("touchmove",this.onTouchMove,Dt),this.element.addEventListener("touchend",this.onTouchEnd,Dt)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Dt),this.element.removeEventListener("touchstart",this.onTouchStart,Dt),this.element.removeEventListener("touchmove",this.onTouchMove,Dt),this.element.removeEventListener("touchend",this.onTouchEnd,Dt)}onTouchStart=t=>{const{clientX:e,clientY:r}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})};onTouchMove=t=>{const{clientX:e,clientY:r}=t.targetTouches?t.targetTouches[0]:t,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=r,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:t})};onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})};onWheel=t=>{let{deltaX:e,deltaY:r,deltaMode:n}=t;const i=ur(n,this.window.width),s=ur(n,this.window.height);e*=i,r*=s,e*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:r,event:t})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const dr=t=>Math.min(1,1.001-2**(-10*t));var Rs=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Cs;emitter=new Rr;dimensions;virtualScroll;constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:r=t,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:l=1.7,duration:o,easing:c,lerp:v=.1,infinite:_=!1,orientation:g="vertical",gestureOrientation:h=g==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:f=1,autoResize:D=!0,prevent:$,virtualScroll:W,overscroll:H=!0,autoRaf:X=!1,anchors:y=!1,autoToggle:ue=!1,allowNestedScroll:I=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:me=x,stopInertiaOnNavigate:be=!1}={}){window.lenisVersion=cr,window.lenis||(window.lenis={}),window.lenis.version=cr,g==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof o=="number"&&typeof c!="function"?c=dr:typeof c=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:t,content:e,eventsTarget:r,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:l,duration:o,easing:c,lerp:v,infinite:_,gestureOrientation:h,orientation:g,touchMultiplier:d,wheelMultiplier:f,autoResize:D,prevent:$,virtualScroll:W,overscroll:H,autoRaf:X,anchors:y,autoToggle:ue,allowNestedScroll:I,naiveDimensions:me,stopInertiaOnNavigate:be},this.dimensions=new Ms(t,e,{autoResize:D}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Ps(r,{touchMultiplier:d,wheelMultiplier:f}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}onScrollEnd=t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=t=>{t.propertyName?.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()};setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}onClick=t=>{const e=t.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),r=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>r.host===i.host&&r.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>r.host===n.host&&r.pathname!==n.pathname)){this.reset();return}};onPointerDown=t=>{t.button===1&&this.reset()};isTouchOnSelectionHandle(t){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const r=t.targetTouches[0]??t.changedTouches[0];if(!r)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],l=40,o=Math.hypot(r.clientX-i.left,r.clientY-i.top)<=l,c=Math.hypot(r.clientX-s.right,r.clientY-s.bottom)<=l;return o||c}onVirtualScroll=t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:r,event:n}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:r,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const l=e===0&&r===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&l&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&r===0||this.options.gestureOrientation==="horizontal"&&e===0;if(l||o)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const v=this.options.prevent,_=Math.abs(e)>=Math.abs(r)?"horizontal":"vertical";if(c.find(f=>f instanceof HTMLElement&&(typeof v=="function"&&v?.(f)||f.hasAttribute?.("data-lenis-prevent")||_==="vertical"&&f.hasAttribute?.("data-lenis-prevent-vertical")||_==="horizontal"&&f.hasAttribute?.("data-lenis-prevent-horizontal")||i&&f.hasAttribute?.("data-lenis-prevent-touch")||s&&f.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(f,{deltaX:e,deltaY:r}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let g=r;this.options.gestureOrientation==="both"?g=Math.abs(r)>Math.abs(e)?r:e:this.options.gestureOrientation==="horizontal"&&(g=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&r>0||this.animatedScroll===this.limit&&r<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(g=Math.sign(g)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+g,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(t,{offset:e=0,immediate:r=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:l=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:c,onComplete:v,force:_=!1,userData:g}={}){if((this.isStopped||this.isLocked)&&!_)return;let h=t,d=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let f=null;if(typeof h=="string"?(f=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),f||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&h?.nodeType&&(f=h),f){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?y.left:y.top}const D=f.getBoundingClientRect(),$=getComputedStyle(f),W=this.isHorizontal?Number.parseFloat($.scrollMarginLeft):Number.parseFloat($.scrollMarginTop),H=getComputedStyle(this.rootElement),X=this.isHorizontal?Number.parseFloat(H.scrollPaddingLeft):Number.parseFloat(H.scrollPaddingTop);h=(this.isHorizontal?D.left:D.top)+this.animatedScroll-(Number.isNaN(W)?0:W)-(Number.isNaN(X)?0:X)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const f=h-this.animatedScroll;f>this.limit/2?h-=this.limit:f<-this.limit/2&&(h+=this.limit)}}else h=Pr(0,h,this.limit);if(h===this.targetScroll){c?.(this),v?.(this);return}if(this.userData=g??{},r){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),v?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof l=="number"&&typeof o!="function"?o=dr:typeof o=="function"&&typeof l!="number"&&(l=1),this.animate.fromTo(this.animatedScroll,h,{duration:l,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",c?.(this)},onUpdate:(f,D)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),i&&(this.targetScroll=f),D||this.emit(),D&&(this.reset(),this.emit(),v?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:r}){const n=Date.now();t._lenis||(t._lenis={});const i=t._lenis;let s,l,o,c,v,_,g,h,d,f;if(n-(i.time??0)>2e3){i.time=Date.now();const I=window.getComputedStyle(t);if(i.computedStyle=I,s=["auto","overlay","scroll"].includes(I.overflowX),l=["auto","overlay","scroll"].includes(I.overflowY),v=["auto"].includes(I.overscrollBehaviorX),_=["auto"].includes(I.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=l,!(s||l))return!1;g=t.scrollWidth,h=t.scrollHeight,d=t.clientWidth,f=t.clientHeight,o=g>d,c=h>f,i.isScrollableX=o,i.isScrollableY=c,i.scrollWidth=g,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=f,i.hasOverscrollBehaviorX=v,i.hasOverscrollBehaviorY=_}else o=i.isScrollableX,c=i.isScrollableY,s=i.hasOverflowX,l=i.hasOverflowY,g=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,f=i.clientHeight,v=i.hasOverscrollBehaviorX,_=i.hasOverscrollBehaviorY;if(!(s&&o||l&&c))return!1;const D=Math.abs(e)>=Math.abs(r)?"horizontal":"vertical";let $,W,H,X,y,ue;if(D==="horizontal")$=Math.round(t.scrollLeft),W=g-d,H=e,X=s,y=o,ue=v;else if(D==="vertical")$=Math.round(t.scrollTop),W=h-f,H=r,X=l,y=c,ue=_;else return!1;return!ue&&($>=W||$<=0)?!0:(H>0?$<W:$>0)&&X&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?ks(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};function As(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Os(t,e,r){return e&&As(t.prototype,e),t}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,hn,Ke,Ht,It,vi,Ar,Vt,_i,Or,Tt,ct,Dr,zr=function(){return we||typeof window<"u"&&(we=window.gsap)&&we.registerPlugin&&we},Hr=1,mi=[],R=[],mt=[],Oi=Date.now,Hn=function(e,r){return r},Ds=function(){var e=_i.core,r=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,R),i.push.apply(i,mt),R=n,mt=i,Hn=function(l,o){return r[l](o)}},Nt=function(e,r){return~mt.indexOf(e)&&mt[mt.indexOf(e)+1][r]},Di=function(e){return!!~Or.indexOf(e)},ze=function(e,r,n,i,s){return e.addEventListener(r,n,{passive:i!==!1,capture:!!s})},De=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},Qi="scrollLeft",en="scrollTop",In=function(){return Tt&&Tt.isPressed||R.cache++},wn=function(e,r){var n=function i(s){if(s||s===0){Hr&&(Ke.history.scrollRestoration="manual");var l=Tt&&Tt.isPressed;s=i.v=Math.round(s)||(Tt&&Tt.iOS?1:0),e(s),i.cacheID=R.cache,l&&Hn("ss",s)}else(r||R.cache!==i.cacheID||Hn("ref"))&&(i.cacheID=R.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Be={s:Qi,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:wn(function(t){return arguments.length?Ke.scrollTo(t,ce.sc()):Ke.pageXOffset||Ht[Qi]||It[Qi]||vi[Qi]||0})},ce={s:en,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Be,sc:wn(function(t){return arguments.length?Ke.scrollTo(Be.sc(),t):Ke.pageYOffset||Ht[en]||It[en]||vi[en]||0})},Ye=function(e,r){return(r&&r._ctx&&r._ctx.selector||we.utils.toArray)(e)[0]||(typeof e=="string"&&we.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},zs=function(e,r){for(var n=r.length;n--;)if(r[n]===e||r[n].contains(e))return!0;return!1},Wt=function(e,r){var n=r.s,i=r.sc;Di(e)&&(e=Ht.scrollingElement||It);var s=R.indexOf(e),l=i===ce.sc?1:2;!~s&&(s=R.push(e)-1),R[s+l]||ze(e,"scroll",In);var o=R[s+l],c=o||(R[s+l]=wn(Nt(e,n),!0)||(Di(e)?i:wn(function(v){return arguments.length?e[n]=v:e[n]})));return c.target=e,o||(c.smooth=we.getProperty(e,"scrollBehavior")==="smooth"),c},Nn=function(e,r,n){var i=e,s=e,l=Oi(),o=l,c=r||50,v=Math.max(500,c*3),_=function(f,D){var $=Oi();D||$-l>c?(s=i,i=f,o=l,l=$):n?i+=f:i=s+(f-s)/($-o)*(l-o)},g=function(){s=i=n?0:i,o=l=0},h=function(f){var D=o,$=s,W=Oi();return(f||f===0)&&f!==i&&_(f),l===o||W-o>v?0:(i+(n?$:-$))/((n?W:l)-D)*1e3};return{update:_,reset:g,getVelocity:h}},ki=function(e,r){return r&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},hr=function(e){var r=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(n)?r:n},Ir=function(){_i=we.core.globals().ScrollTrigger,_i&&_i.core&&Ds()},Nr=function(e){return we=e||zr(),!hn&&we&&typeof document<"u"&&document.body&&(Ke=window,Ht=document,It=Ht.documentElement,vi=Ht.body,Or=[Ke,Ht,It,vi],we.utils.clamp,Dr=we.core.context||function(){},Vt="onpointerenter"in vi?"pointer":"mouse",Ar=Q.isTouch=Ke.matchMedia&&Ke.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ke||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ct=Q.eventTypes=("ontouchstart"in It?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in It?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Hr=0},500),hn=1),_i||Ir(),hn};Be.op=ce;R.cache=0;var Q=(function(){function t(r){this.init(r)}var e=t.prototype;return e.init=function(n){hn||Nr(we)||console.warn("Please gsap.registerPlugin(Observer)"),_i||Ir();var i=n.tolerance,s=n.dragMinimum,l=n.type,o=n.target,c=n.lineHeight,v=n.debounce,_=n.preventDefault,g=n.onStop,h=n.onStopDelay,d=n.ignore,f=n.wheelSpeed,D=n.event,$=n.onDragStart,W=n.onDragEnd,H=n.onDrag,X=n.onPress,y=n.onRelease,ue=n.onRight,I=n.onLeft,x=n.onUp,me=n.onDown,be=n.onChangeX,w=n.onChangeY,de=n.onChange,E=n.onToggleX,vt=n.onToggleY,se=n.onHover,$e=n.onHoverEnd,Pe=n.onMove,Y=n.ignoreCheck,ee=n.isNormalizer,te=n.onGestureStart,a=n.onGestureEnd,oe=n.onWheel,Ft=n.onEnable,Lt=n.onDisable,Qe=n.onClick,_t=n.scrollSpeed,ye=n.capture,ie=n.allowClicks,Re=n.lockAxis,Se=n.onLockAxis;this.target=o=Ye(o)||It,this.vars=n,d&&(d=we.utils.toArray(d)),i=i||1e-9,s=s||0,f=f||1,_t=_t||1,l=l||"wheel,touch,pointer",v=v!==!1,c||(c=parseFloat(Ke.getComputedStyle(vi).lineHeight)||22);var Mt,Ae,Oe,z,K,Fe,qe,u=this,Xe=0,wt=0,$t=n.passive||!_&&n.passive!==!1,V=Wt(o,Be),bt=Wt(o,ce),Pt=V(),Yt=bt(),he=~l.indexOf("touch")&&!~l.indexOf("pointer")&&ct[0]==="pointerdown",Rt=Di(o),J=o.ownerDocument||Ht,rt=[0,0,0],et=[0,0,0],yt=0,Si=function(){return yt=Oi()},ne=function(S,N){return(u.event=S)&&d&&zs(S.target,d)||N&&he&&S.pointerType!=="touch"||Y&&Y(S,N)},Ki=function(){u._vx.reset(),u._vy.reset(),Ae.pause(),g&&g(u)},St=function(){var S=u.deltaX=hr(rt),N=u.deltaY=hr(et),p=Math.abs(S)>=i,T=Math.abs(N)>=i;de&&(p||T)&&de(u,S,N,rt,et),p&&(ue&&u.deltaX>0&&ue(u),I&&u.deltaX<0&&I(u),be&&be(u),E&&u.deltaX<0!=Xe<0&&E(u),Xe=u.deltaX,rt[0]=rt[1]=rt[2]=0),T&&(me&&u.deltaY>0&&me(u),x&&u.deltaY<0&&x(u),w&&w(u),vt&&u.deltaY<0!=wt<0&&vt(u),wt=u.deltaY,et[0]=et[1]=et[2]=0),(z||Oe)&&(Pe&&Pe(u),Oe&&($&&Oe===1&&$(u),H&&H(u),Oe=0),z=!1),Fe&&!(Fe=!1)&&Se&&Se(u),K&&(oe(u),K=!1),Mt=0},oi=function(S,N,p){rt[p]+=S,et[p]+=N,u._vx.update(S),u._vy.update(N),v?Mt||(Mt=requestAnimationFrame(St)):St()},li=function(S,N){Re&&!qe&&(u.axis=qe=Math.abs(S)>Math.abs(N)?"x":"y",Fe=!0),qe!=="y"&&(rt[2]+=S,u._vx.update(S,!0)),qe!=="x"&&(et[2]+=N,u._vy.update(N,!0)),v?Mt||(Mt=requestAnimationFrame(St)):St()},At=function(S){if(!ne(S,1)){S=ki(S,_);var N=S.clientX,p=S.clientY,T=N-u.x,b=p-u.y,k=u.isDragging;u.x=N,u.y=p,(k||(T||b)&&(Math.abs(u.startX-N)>=s||Math.abs(u.startY-p)>=s))&&(Oe||(Oe=k?2:1),k||(u.isDragging=!0),li(T,b))}},qt=u.onPress=function(C){ne(C,1)||C&&C.button||(u.axis=qe=null,Ae.pause(),u.isPressed=!0,C=ki(C),Xe=wt=0,u.startX=u.x=C.clientX,u.startY=u.y=C.clientY,u._vx.reset(),u._vy.reset(),ze(ee?o:J,ct[1],At,$t,!0),u.deltaX=u.deltaY=0,X&&X(u))},A=u.onRelease=function(C){if(!ne(C,1)){De(ee?o:J,ct[1],At,!0);var S=!isNaN(u.y-u.startY),N=u.isDragging,p=N&&(Math.abs(u.x-u.startX)>3||Math.abs(u.y-u.startY)>3),T=ki(C);!p&&S&&(u._vx.reset(),u._vy.reset(),_&&ie&&we.delayedCall(.08,function(){if(Oi()-yt>300&&!C.defaultPrevented){if(C.target.click)C.target.click();else if(J.createEvent){var b=J.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,Ke,1,T.screenX,T.screenY,T.clientX,T.clientY,!1,!1,!1,!1,0,null),C.target.dispatchEvent(b)}}})),u.isDragging=u.isGesturing=u.isPressed=!1,g&&N&&!ee&&Ae.restart(!0),Oe&&St(),W&&N&&W(u),y&&y(u,p)}},Xt=function(S){return S.touches&&S.touches.length>1&&(u.isGesturing=!0)&&te(S,u.isDragging)},st=function(){return(u.isGesturing=!1)||a(u)},ot=function(S){if(!ne(S)){var N=V(),p=bt();oi((N-Pt)*_t,(p-Yt)*_t,1),Pt=N,Yt=p,g&&Ae.restart(!0)}},lt=function(S){if(!ne(S)){S=ki(S,_),oe&&(K=!0);var N=(S.deltaMode===1?c:S.deltaMode===2?Ke.innerHeight:1)*f;oi(S.deltaX*N,S.deltaY*N,0),g&&!ee&&Ae.restart(!0)}},Ut=function(S){if(!ne(S)){var N=S.clientX,p=S.clientY,T=N-u.x,b=p-u.y;u.x=N,u.y=p,z=!0,g&&Ae.restart(!0),(T||b)&&li(T,b)}},ai=function(S){u.event=S,se(u)},xt=function(S){u.event=S,$e(u)},xi=function(S){return ne(S)||ki(S,_)&&Qe(u)};Ae=u._dc=we.delayedCall(h||.25,Ki).pause(),u.deltaX=u.deltaY=0,u._vx=Nn(0,50,!0),u._vy=Nn(0,50,!0),u.scrollX=V,u.scrollY=bt,u.isDragging=u.isGesturing=u.isPressed=!1,Dr(this),u.enable=function(C){return u.isEnabled||(ze(Rt?J:o,"scroll",In),l.indexOf("scroll")>=0&&ze(Rt?J:o,"scroll",ot,$t,ye),l.indexOf("wheel")>=0&&ze(o,"wheel",lt,$t,ye),(l.indexOf("touch")>=0&&Ar||l.indexOf("pointer")>=0)&&(ze(o,ct[0],qt,$t,ye),ze(J,ct[2],A),ze(J,ct[3],A),ie&&ze(o,"click",Si,!0,!0),Qe&&ze(o,"click",xi),te&&ze(J,"gesturestart",Xt),a&&ze(J,"gestureend",st),se&&ze(o,Vt+"enter",ai),$e&&ze(o,Vt+"leave",xt),Pe&&ze(o,Vt+"move",Ut)),u.isEnabled=!0,u.isDragging=u.isGesturing=u.isPressed=z=Oe=!1,u._vx.reset(),u._vy.reset(),Pt=V(),Yt=bt(),C&&C.type&&qt(C),Ft&&Ft(u)),u},u.disable=function(){u.isEnabled&&(mi.filter(function(C){return C!==u&&Di(C.target)}).length||De(Rt?J:o,"scroll",In),u.isPressed&&(u._vx.reset(),u._vy.reset(),De(ee?o:J,ct[1],At,!0)),De(Rt?J:o,"scroll",ot,ye),De(o,"wheel",lt,ye),De(o,ct[0],qt,ye),De(J,ct[2],A),De(J,ct[3],A),De(o,"click",Si,!0),De(o,"click",xi),De(J,"gesturestart",Xt),De(J,"gestureend",st),De(o,Vt+"enter",ai),De(o,Vt+"leave",xt),De(o,Vt+"move",Ut),u.isEnabled=u.isPressed=u.isDragging=!1,Lt&&Lt(u))},u.kill=u.revert=function(){u.disable();var C=mi.indexOf(u);C>=0&&mi.splice(C,1),Tt===u&&(Tt=0)},mi.push(u),ee&&Di(o)&&(Tt=u),u.enable(D)},Os(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t})();Q.version="3.15.0";Q.create=function(t){return new Q(t)};Q.register=Nr;Q.getAll=function(){return mi.slice()};Q.getById=function(t){return mi.filter(function(e){return e.vars.id===t})[0]};zr()&&we.registerPlugin(Q);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var m,pi,P,F,je,B,jn,bn,Yi,zi,Mi,tn,ke,kn,Bn,Ie,fr,pr,gi,Br,Pn,Wr,He,Wn,Fr,Yr,zt,Fn,Kn,wi,Jn,Hi,Yn,Rn,nn=1,Ce=Date.now,An=Ce(),nt=0,$i=0,gr=function(e,r,n){var i=Ve(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+r+"Clamp"]=i,i?e.substr(6,e.length-7):e},mr=function(e,r){return r&&(!Ve(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Hs=function t(){return $i&&requestAnimationFrame(t)},vr=function(){return kn=1},_r=function(){return kn=0},ft=function(e){return e},Pi=function(e){return Math.round(e*1e5)/1e5||0},qr=function(){return typeof window<"u"},Xr=function(){return m||qr()&&(m=window.gsap)&&m.registerPlugin&&m},ii=function(e){return!!~jn.indexOf(e)},Ur=function(e){return(e==="Height"?Jn:P["inner"+e])||je["client"+e]||B["client"+e]},Gr=function(e){return Nt(e,"getBoundingClientRect")||(ii(e)?function(){return vn.width=P.innerWidth,vn.height=Jn,vn}:function(){return Et(e)})},Is=function(e,r,n){var i=n.d,s=n.d2,l=n.a;return(l=Nt(e,"getBoundingClientRect"))?function(){return l()[i]}:function(){return(r?Ur(s):e["client"+s])||0}},Ns=function(e,r){return!r||~mt.indexOf(e)?Gr(e):function(){return vn}},gt=function(e,r){var n=r.s,i=r.d2,s=r.d,l=r.a;return Math.max(0,(n="scroll"+i)&&(l=Nt(e,n))?l()-Gr(e)()[s]:ii(e)?(je[n]||B[n])-Ur(i):e[n]-e["offset"+i])},rn=function(e,r){for(var n=0;n<gi.length;n+=3)(!r||~r.indexOf(gi[n+1]))&&e(gi[n],gi[n+1],gi[n+2])},Ve=function(e){return typeof e=="string"},Le=function(e){return typeof e=="function"},Ri=function(e){return typeof e=="number"},jt=function(e){return typeof e=="object"},Ci=function(e,r,n){return e&&e.progress(r?0:1)&&n&&e.pause()},ci=function(e,r,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return r(e,n)}):r(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},ui=Math.abs,Vr="left",jr="top",Zn="right",Qn="bottom",Zt="width",Qt="height",Ii="Right",Ni="Left",Bi="Top",Wi="Bottom",re="padding",tt="margin",yi="Width",er="Height",ae="px",it=function(e){return P.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Bs=function(e){var r=it(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},wr=function(e,r){for(var n in r)n in e||(e[n]=r[n]);return e},Et=function(e,r){var n=r&&it(e)[Bn]!=="matrix(1, 0, 0, 1, 0, 0)"&&m.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},yn=function(e,r){var n=r.d2;return e["offset"+n]||e["client"+n]||0},Kr=function(e){var r=[],n=e.labels,i=e.duration(),s;for(s in n)r.push(n[s]/i);return r},Ws=function(e){return function(r){return m.utils.snap(Kr(e),r)}},tr=function(e){var r=m.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,l){l===void 0&&(l=.001);var o;if(!s)return r(i);if(s>0){for(i-=l,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=l;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,l){l===void 0&&(l=.001);var o=r(i);return!s||Math.abs(o-i)<l||o-i<0==s<0?o:r(s<0?i-e:i+e)}},Fs=function(e){return function(r,n){return tr(Kr(e))(r,n.direction)}},sn=function(e,r,n,i){return n.split(",").forEach(function(s){return e(r,s,i)})},ge=function(e,r,n,i,s){return e.addEventListener(r,n,{passive:!i,capture:!!s})},pe=function(e,r,n,i){return e.removeEventListener(r,n,!!i)},on=function(e,r,n){n=n&&n.wheelHandler,n&&(e(r,"wheel",n),e(r,"touchmove",n))},br={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ln={toggleActions:"play",anticipatePin:0},Sn={top:0,left:0,center:.5,bottom:1,right:1},fn=function(e,r){if(Ve(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=r/100),e=e.substr(0,n-1)),e=i+(e in Sn?Sn[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},an=function(e,r,n,i,s,l,o,c){var v=s.startColor,_=s.endColor,g=s.fontSize,h=s.indent,d=s.fontWeight,f=F.createElement("div"),D=ii(n)||Nt(n,"pinType")==="fixed",$=e.indexOf("scroller")!==-1,W=D?B:n.tagName==="IFRAME"?n.contentDocument.body:n,H=e.indexOf("start")!==-1,X=H?v:_,y="border-color:"+X+";font-size:"+g+";color:"+X+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+(($||c)&&D?"fixed;":"absolute;"),($||c||!D)&&(y+=(i===ce?Zn:Qn)+":"+(l+parseFloat(h))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),f._isStart=H,f.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),f.style.cssText=y,f.innerText=r||r===0?e+"-"+r:e,W.children[0]?W.insertBefore(f,W.children[0]):W.appendChild(f),f._offset=f["offset"+i.op.d2],pn(f,0,i,H),f},pn=function(e,r,n,i){var s={display:"block"},l=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+l+yi]=1,s["border"+o+yi]=0,s[n.p]=r+"px",m.set(e,s)},M=[],qn={},qi,yr=function(){return Ce()-nt>34&&(qi||(qi=requestAnimationFrame(kt)))},di=function(){(!He||!He.isPressed||He.startX>B.clientWidth)&&(R.cache++,He?qi||(qi=requestAnimationFrame(kt)):kt(),nt||ri("scrollStart"),nt=Ce())},On=function(){Yr=P.innerWidth,Fr=P.innerHeight},Ai=function(e){R.cache++,(e===!0||!ke&&!Wr&&!F.fullscreenElement&&!F.webkitFullscreenElement&&(!Wn||Yr!==P.innerWidth||Math.abs(P.innerHeight-Fr)>P.innerHeight*.25))&&bn.restart(!0)},ni={},Ys=[],Jr=function t(){return pe(L,"scrollEnd",t)||Kt(!0)},ri=function(e){return ni[e]&&ni[e].map(function(r){return r()})||Ys},Ge=[],Zr=function(e){for(var r=0;r<Ge.length;r+=5)(!e||Ge[r+4]&&Ge[r+4].query===e)&&(Ge[r].style.cssText=Ge[r+1],Ge[r].getBBox&&Ge[r].setAttribute("transform",Ge[r+2]||""),Ge[r+3].uncache=1)},Qr=function(){return R.forEach(function(e){return Le(e)&&++e.cacheID&&(e.rec=e())})},ir=function(e,r){var n;for(Ie=0;Ie<M.length;Ie++)n=M[Ie],n&&(!r||n._ctx===r)&&(e?n.kill(1):n.revert(!0,!0));Hi=!0,r&&Zr(r),r||ri("revert")},es=function(e,r){R.cache++,(r||!Ne)&&R.forEach(function(n){return Le(n)&&n.cacheID++&&(n.rec=0)}),Ve(e)&&(P.history.scrollRestoration=Kn=e)},Ne,ei=0,Sr,qs=function(){if(Sr!==ei){var e=Sr=ei;requestAnimationFrame(function(){return e===ei&&Kt(!0)})}},ts=function(){B.appendChild(wi),Jn=!He&&wi.offsetHeight||P.innerHeight,B.removeChild(wi)},xr=function(e){return Yi(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},Kt=function(e,r){if(je=F.documentElement,B=F.body,jn=[P,F,je,B],nt&&!e&&!Hi){ge(L,"scrollEnd",Jr);return}ts(),Ne=L.isRefreshing=!0,Hi||Qr();var n=ri("refreshInit");Br&&L.sort(),r||ir(),R.forEach(function(i){Le(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),M.slice(0).forEach(function(i){return i.refresh()}),Hi=!1,M.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",l=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-l),i.refresh()}}),Yn=1,xr(!0),M.forEach(function(i){var s=gt(i.scroller,i._dir),l=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(l||o)&&i.setPositions(o?s-1:i.start,l?Math.max(o?s:i.start+1,s):i.end,!0)}),xr(!1),Yn=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),R.forEach(function(i){Le(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),es(Kn,1),bn.pause(),ei++,Ne=2,kt(2),M.forEach(function(i){return Le(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ne=L.isRefreshing=!1,ri("refresh")},Xn=0,gn=1,Fi,kt=function(e){if(e===2||!Ne&&!Hi){L.isUpdating=!0,Fi&&Fi.update(0);var r=M.length,n=Ce(),i=n-An>=50,s=r&&M[0].scroll();if(gn=Xn>s?-1:1,Ne||(Xn=s),i&&(nt&&!kn&&n-nt>200&&(nt=0,ri("scrollEnd")),Mi=An,An=n),gn<0){for(Ie=r;Ie-- >0;)M[Ie]&&M[Ie].update(0,i);gn=1}else for(Ie=0;Ie<r;Ie++)M[Ie]&&M[Ie].update(0,i);L.isUpdating=!1}qi=0},Un=[Vr,jr,Qn,Zn,tt+Wi,tt+Ii,tt+Bi,tt+Ni,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],mn=Un.concat([Zt,Qt,"boxSizing","max"+yi,"max"+er,"position",tt,re,re+Bi,re+Ii,re+Wi,re+Ni]),Xs=function(e,r,n){bi(n);var i=e._gsap;if(i.spacerIsNative)bi(i.spacerState);else if(e._gsap.swappedIn){var s=r.parentNode;s&&(s.insertBefore(e,r),s.removeChild(r))}e._gsap.swappedIn=!1},Dn=function(e,r,n,i){if(!e._gsap.swappedIn){for(var s=Un.length,l=r.style,o=e.style,c;s--;)c=Un[s],l[c]=n[c];l.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(l.display="inline-block"),o[Qn]=o[Zn]="auto",l.flexBasis=n.flexBasis||"auto",l.overflow="visible",l.boxSizing="border-box",l[Zt]=yn(e,Be)+ae,l[Qt]=yn(e,ce)+ae,l[re]=o[tt]=o[jr]=o[Vr]="0",bi(i),o[Zt]=o["max"+yi]=n[Zt],o[Qt]=o["max"+er]=n[Qt],o[re]=n[re],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},Us=/([A-Z])/g,bi=function(e){if(e){var r=e.t.style,n=e.length,i=0,s,l;for((e.t._gsap||m.core.getCache(e.t)).uncache=1;i<n;i+=2)l=e[i+1],s=e[i],l?r[s]=l:r[s]&&r.removeProperty(s.replace(Us,"-$1").toLowerCase())}},cn=function(e){for(var r=mn.length,n=e.style,i=[],s=0;s<r;s++)i.push(mn[s],n[mn[s]]);return i.t=e,i},Gs=function(e,r,n){for(var i=[],s=e.length,l=n?8:0,o;l<s;l+=2)o=e[l],i.push(o,o in r?r[o]:e[l+1]);return i.t=e.t,i},vn={left:0,top:0},Er=function(e,r,n,i,s,l,o,c,v,_,g,h,d,f){Le(e)&&(e=e(c)),Ve(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?fn("0"+e.substr(3),n):0));var D=d?d.time():0,$,W,H;if(d&&d.seek(0),isNaN(e)||(e=+e),Ri(e))d&&(e=m.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&pn(o,n,i,!0);else{Le(r)&&(r=r(c));var X=(e||"0").split(" "),y,ue,I,x;H=Ye(r,c)||B,y=Et(H)||{},(!y||!y.left&&!y.top)&&it(H).display==="none"&&(x=H.style.display,H.style.display="block",y=Et(H),x?H.style.display=x:H.style.removeProperty("display")),ue=fn(X[0],y[i.d]),I=fn(X[1]||"0",n),e=y[i.p]-v[i.p]-_+ue+s-I,o&&pn(o,I,i,n-I<20||o._isStart&&I>20),n-=n-I}if(f&&(c[f]=e||-.001,e<0&&(e=0)),l){var me=e+n,be=l._isStart;$="scroll"+i.d2,pn(l,me,i,be&&me>20||!be&&(g?Math.max(B[$],je[$]):l.parentNode[$])<=me+1),g&&(v=Et(o),g&&(l.style[i.op.p]=v[i.op.p]-i.op.m-l._offset+ae))}return d&&H&&($=Et(H),d.seek(h),W=Et(H),d._caScrollDist=$[i.p]-W[i.p],e=e/d._caScrollDist*h),d&&d.seek(D),d?e:Math.round(e)},Vs=/(webkit|moz|length|cssText|inset)/i,Tr=function(e,r,n,i){if(e.parentNode!==r){var s=e.style,l,o;if(r===B){e._stOrig=s.cssText,o=it(e);for(l in o)!+l&&!Vs.test(l)&&o[l]&&typeof s[l]=="string"&&l!=="0"&&(s[l]=o[l]);s.top=n,s.left=i}else s.cssText=e._stOrig;m.core.getCache(e).uncache=1,r.appendChild(e)}},is=function(e,r,n){var i=r,s=i;return function(l){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(l=o,n&&n()),s=i,i=Math.round(l),i}},un=function(e,r,n){var i={};i[r.p]="+="+n,m.set(e,i)},kr=function(e,r){var n=Wt(e,r),i="_scroll"+r.p2,s=function l(o,c,v,_,g){var h=l.tween,d=c.onComplete,f={};v=v||n();var D=is(n,v,function(){h.kill(),l.tween=0});return g=_&&g||0,_=_||o-v,h&&h.kill(),c[i]=o,c.inherit=!1,c.modifiers=f,f[i]=function(){return D(v+_*h.ratio+g*h.ratio*h.ratio)},c.onUpdate=function(){R.cache++,l.tween&&kt()},c.onComplete=function(){l.tween=0,d&&d.call(h)},h=l.tween=m.to(e,c),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ge(e,"wheel",n.wheelHandler),L.isTouch&&ge(e,"touchmove",n.wheelHandler),s},L=(function(){function t(r,n){pi||t.register(m)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Fn(this),this.init(r,n)}var e=t.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$i){this.update=this.refresh=this.kill=ft;return}n=wr(Ve(n)||Ri(n)||n.nodeType?{trigger:n}:n,ln);var s=n,l=s.onUpdate,o=s.toggleClass,c=s.id,v=s.onToggle,_=s.onRefresh,g=s.scrub,h=s.trigger,d=s.pin,f=s.pinSpacing,D=s.invalidateOnRefresh,$=s.anticipatePin,W=s.onScrubComplete,H=s.onSnapComplete,X=s.once,y=s.snap,ue=s.pinReparent,I=s.pinSpacer,x=s.containerAnimation,me=s.fastScrollEnd,be=s.preventOverlaps,w=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Be:ce,de=!g&&g!==0,E=Ye(n.scroller||P),vt=m.core.getCache(E),se=ii(E),$e=("pinType"in n?n.pinType:Nt(E,"pinType")||se&&"fixed")==="fixed",Pe=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=de&&n.toggleActions.split(" "),ee="markers"in n?n.markers:ln.markers,te=se?0:parseFloat(it(E)["border"+w.p2+yi])||0,a=this,oe=n.onRefreshInit&&function(){return n.onRefreshInit(a)},Ft=Is(E,se,w),Lt=Ns(E,se),Qe=0,_t=0,ye=0,ie=Wt(E,w),Re,Se,Mt,Ae,Oe,z,K,Fe,qe,u,Xe,wt,$t,V,bt,Pt,Yt,he,Rt,J,rt,et,yt,Si,ne,Ki,St,oi,li,At,qt,A,Xt,st,ot,lt,Ut,ai,xt;if(a._startClamp=a._endClamp=!1,a._dir=w,$*=45,a.scroller=E,a.scroll=x?x.time.bind(x):ie,Ae=ie(),a.vars=n,i=i||n.animation,"refreshPriority"in n&&(Br=1,n.refreshPriority===-9999&&(Fi=a)),vt.tweenScroll=vt.tweenScroll||{top:kr(E,ce),left:kr(E,Be)},a.tweenTo=Re=vt.tweenScroll[w.p],a.scrubDuration=function(p){Xt=Ri(p)&&p,Xt?A?A.duration(p):A=m.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Xt,paused:!0,onComplete:function(){return W&&W(a)}}):(A&&A.progress(1).kill(),A=0)},i&&(i.vars.lazy=!1,i._initted&&!a.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),a.animation=i.pause(),i.scrollTrigger=a,a.scrubDuration(g),At=0,c||(c=i.vars.id)),y&&((!jt(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in B.style&&m.set(se?[B,je]:E,{scrollBehavior:"auto"}),R.forEach(function(p){return Le(p)&&p.target===(se?F.scrollingElement||je:E)&&(p.smooth=!1)}),Mt=Le(y.snapTo)?y.snapTo:y.snapTo==="labels"?Ws(i):y.snapTo==="labelsDirectional"?Fs(i):y.directional!==!1?function(p,T){return tr(y.snapTo)(p,Ce()-_t<500?0:T.direction)}:m.utils.snap(y.snapTo),st=y.duration||{min:.1,max:2},st=jt(st)?zi(st.min,st.max):zi(st,st),ot=m.delayedCall(y.delay||Xt/2||.1,function(){var p=ie(),T=Ce()-_t<500,b=Re.tween;if((T||Math.abs(a.getVelocity())<10)&&!b&&!kn&&Qe!==p){var k=(p-z)/V,fe=i&&!de?i.totalProgress():k,O=T?0:(fe-qt)/(Ce()-Mi)*1e3||0,Z=m.utils.clamp(-k,1-k,ui(O/2)*O/.185),xe=k+(y.inertia===!1?0:Z),j,U,q=y,at=q.onStart,G=q.onInterrupt,Ue=q.onComplete;if(j=Mt(xe,a),Ri(j)||(j=xe),U=Math.max(0,Math.round(z+j*V)),p<=K&&p>=z&&U!==p){if(b&&!b._initted&&b.data<=ui(U-p))return;y.inertia===!1&&(Z=j-k),Re(U,{duration:st(ui(Math.max(ui(xe-fe),ui(j-fe))*.185/O/.05||0)),ease:y.ease||"power3",data:ui(U-p),onInterrupt:function(){return ot.restart(!0)&&G&&ci(a,G)},onComplete:function(){a.update(),Qe=ie(),i&&!de&&(A?A.resetTo("totalProgress",j,i._tTime/i._tDur):i.progress(j)),At=qt=i&&!de?i.totalProgress():a.progress,H&&H(a),Ue&&ci(a,Ue)}},p,Z*V,U-p-Z*V),at&&ci(a,at,Re.tween)}}else a.isActive&&Qe!==p&&ot.restart(!0)}).pause()),c&&(qn[c]=a),h=a.trigger=Ye(h||d!==!0&&d),xt=h&&h._gsap&&h._gsap.stRevert,xt&&(xt=xt(a)),d=d===!0?h:Ye(d),Ve(o)&&(o={targets:h,className:o}),d&&(f===!1||f===tt||(f=!f&&d.parentNode&&d.parentNode.style&&it(d.parentNode).display==="flex"?!1:re),a.pin=d,Se=m.core.getCache(d),Se.spacer?bt=Se.pinState:(I&&(I=Ye(I),I&&!I.nodeType&&(I=I.current||I.nativeElement),Se.spacerIsNative=!!I,I&&(Se.spacerState=cn(I))),Se.spacer=he=I||F.createElement("div"),he.classList.add("pin-spacer"),c&&he.classList.add("pin-spacer-"+c),Se.pinState=bt=cn(d)),n.force3D!==!1&&m.set(d,{force3D:!0}),a.spacer=he=Se.spacer,li=it(d),Si=li[f+w.os2],J=m.getProperty(d),rt=m.quickSetter(d,w.a,ae),Dn(d,he,li),Yt=cn(d)),ee){wt=jt(ee)?wr(ee,br):br,u=an("scroller-start",c,E,w,wt,0),Xe=an("scroller-end",c,E,w,wt,0,u),Rt=u["offset"+w.op.d2];var xi=Ye(Nt(E,"content")||E);Fe=this.markerStart=an("start",c,xi,w,wt,Rt,0,x),qe=this.markerEnd=an("end",c,xi,w,wt,Rt,0,x),x&&(ai=m.quickSetter([Fe,qe],w.a,ae)),!$e&&!(mt.length&&Nt(E,"fixedMarkers")===!0)&&(Bs(se?B:E),m.set([u,Xe],{force3D:!0}),Ki=m.quickSetter(u,w.a,ae),oi=m.quickSetter(Xe,w.a,ae))}if(x){var C=x.vars.onUpdate,S=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){a.update(0,0,1),C&&C.apply(x,S||[])})}if(a.previous=function(){return M[M.indexOf(a)-1]},a.next=function(){return M[M.indexOf(a)+1]},a.revert=function(p,T){if(!T)return a.kill(!0);var b=p!==!1||!a.enabled,k=ke;b!==a.isReverted&&(b&&(lt=Math.max(ie(),a.scroll.rec||0),ye=a.progress,Ut=i&&i.progress()),Fe&&[Fe,qe,u,Xe].forEach(function(fe){return fe.style.display=b?"none":"block"}),b&&(ke=a,a.update(b)),d&&(!ue||!a.isActive)&&(b?Xs(d,he,bt):Dn(d,he,it(d),ne)),b||a.update(b),ke=k,a.isReverted=b)},a.refresh=function(p,T,b,k){if(!((ke||!a.enabled)&&!T)){if(d&&p&&nt){ge(t,"scrollEnd",Jr);return}!Ne&&oe&&oe(a),ke=a,Re.tween&&!b&&(Re.tween.kill(),Re.tween=0),A&&A.pause(),D&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ot){return Ot.vars.immediateRender&&Ot.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),a.isReverted||a.revert(!0,!0),a._subPinOffset=!1;var fe=Ft(),O=Lt(),Z=x?x.duration():gt(E,w),xe=V<=.01||!V,j=0,U=k||0,q=jt(b)?b.end:n.end,at=n.endTrigger||h,G=jt(b)?b.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Ue=a.pinnedContainer=n.pinnedContainer&&Ye(n.pinnedContainer,a),ut=h&&Math.max(0,M.indexOf(a))||0,ve=ut,_e,Ee,Gt,Ji,Te,le,dt,Mn,ar,Ei,ht,Ti,Zi;for(ee&&jt(b)&&(Ti=m.getProperty(u,w.p),Zi=m.getProperty(Xe,w.p));ve-- >0;)le=M[ve],le.end||le.refresh(0,1)||(ke=a),dt=le.pin,dt&&(dt===h||dt===d||dt===Ue)&&!le.isReverted&&(Ei||(Ei=[]),Ei.unshift(le),le.revert(!0,!0)),le!==M[ve]&&(ut--,ve--);for(Le(G)&&(G=G(a)),G=gr(G,"start",a),z=Er(G,h,fe,w,ie(),Fe,u,a,O,te,$e,Z,x,a._startClamp&&"_startClamp")||(d?-.001:0),Le(q)&&(q=q(a)),Ve(q)&&!q.indexOf("+=")&&(~q.indexOf(" ")?q=(Ve(G)?G.split(" ")[0]:"")+q:(j=fn(q.substr(2),fe),q=Ve(G)?G:(x?m.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,z):z)+j,at=h)),q=gr(q,"end",a),K=Math.max(z,Er(q||(at?"100% 0":Z),at,fe,w,ie()+j,qe,Xe,a,O,te,$e,Z,x,a._endClamp&&"_endClamp"))||-.001,j=0,ve=ut;ve--;)le=M[ve]||{},dt=le.pin,dt&&le.start-le._pinPush<=z&&!x&&le.end>0&&(_e=le.end-(a._startClamp?Math.max(0,le.start):le.start),(dt===h&&le.start-le._pinPush<z||dt===Ue)&&isNaN(G)&&(j+=_e*(1-le.progress)),dt===d&&(U+=_e));if(z+=j,K+=j,a._startClamp&&(a._startClamp+=j),a._endClamp&&!Ne&&(a._endClamp=K||-.001,K=Math.min(K,gt(E,w))),V=K-z||(z-=.01)&&.001,xe&&(ye=m.utils.clamp(0,1,m.utils.normalize(z,K,lt))),a._pinPush=U,Fe&&j&&(_e={},_e[w.a]="+="+j,Ue&&(_e[w.p]="-="+ie()),m.set([Fe,qe],_e)),d&&!(Yn&&a.end>=gt(E,w)))_e=it(d),Ji=w===ce,Gt=ie(),et=parseFloat(J(w.a))+U,!Z&&K>1&&(ht=(se?F.scrollingElement||je:E).style,ht={style:ht,value:ht["overflow"+w.a.toUpperCase()]},se&&it(B)["overflow"+w.a.toUpperCase()]!=="scroll"&&(ht.style["overflow"+w.a.toUpperCase()]="scroll")),Dn(d,he,_e),Yt=cn(d),Ee=Et(d,!0),Mn=$e&&Wt(E,Ji?Be:ce)(),f?(ne=[f+w.os2,V+U+ae],ne.t=he,ve=f===re?yn(d,w)+V+U:0,ve&&(ne.push(w.d,ve+ae),he.style.flexBasis!=="auto"&&(he.style.flexBasis=ve+ae)),bi(ne),Ue&&M.forEach(function(Ot){Ot.pin===Ue&&Ot.vars.pinSpacing!==!1&&(Ot._subPinOffset=!0)}),$e&&ie(lt)):(ve=yn(d,w),ve&&he.style.flexBasis!=="auto"&&(he.style.flexBasis=ve+ae)),$e&&(Te={top:Ee.top+(Ji?Gt-z:Mn)+ae,left:Ee.left+(Ji?Mn:Gt-z)+ae,boxSizing:"border-box",position:"fixed"},Te[Zt]=Te["max"+yi]=Math.ceil(Ee.width)+ae,Te[Qt]=Te["max"+er]=Math.ceil(Ee.height)+ae,Te[tt]=Te[tt+Bi]=Te[tt+Ii]=Te[tt+Wi]=Te[tt+Ni]="0",Te[re]=_e[re],Te[re+Bi]=_e[re+Bi],Te[re+Ii]=_e[re+Ii],Te[re+Wi]=_e[re+Wi],Te[re+Ni]=_e[re+Ni],Pt=Gs(bt,Te,ue),Ne&&ie(0)),i?(ar=i._initted,Pn(1),i.render(i.duration(),!0,!0),yt=J(w.a)-et+V+U,St=Math.abs(V-yt)>1,$e&&St&&Pt.splice(Pt.length-2,2),i.render(0,!0,!0),ar||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Pn(0)):yt=V,ht&&(ht.value?ht.style["overflow"+w.a.toUpperCase()]=ht.value:ht.style.removeProperty("overflow-"+w.a));else if(h&&ie()&&!x)for(Ee=h.parentNode;Ee&&Ee!==B;)Ee._pinOffset&&(z-=Ee._pinOffset,K-=Ee._pinOffset),Ee=Ee.parentNode;Ei&&Ei.forEach(function(Ot){return Ot.revert(!1,!0)}),a.start=z,a.end=K,Ae=Oe=Ne?lt:ie(),!x&&!Ne&&(Ae<lt&&ie(lt),a.scroll.rec=0),a.revert(!1,!0),_t=Ce(),ot&&(Qe=-1,ot.restart(!0)),ke=0,i&&de&&(i._initted||Ut)&&i.progress()!==Ut&&i.progress(Ut||0,!0).render(i.time(),!0,!0),(xe||ye!==a.progress||x||D||i&&!i._initted)&&(i&&!de&&(i._initted||ye||i.vars.immediateRender!==!1)&&i.totalProgress(x&&z<-.001&&!ye?m.utils.normalize(z,K,0):ye,!0),a.progress=xe||(Ae-z)/V===ye?0:ye),d&&f&&(he._pinOffset=Math.round(a.progress*yt)),A&&A.invalidate(),isNaN(Ti)||(Ti-=m.getProperty(u,w.p),Zi-=m.getProperty(Xe,w.p),un(u,w,Ti),un(Fe,w,Ti-(k||0)),un(Xe,w,Zi),un(qe,w,Zi-(k||0))),xe&&!Ne&&a.update(),_&&!Ne&&!$t&&($t=!0,_(a),$t=!1)}},a.getVelocity=function(){return(ie()-Oe)/(Ce()-Mi)*1e3||0},a.endAnimation=function(){Ci(a.callbackAnimation),i&&(A?A.progress(1):i.paused()?de||Ci(i,a.direction<0,1):Ci(i,i.reversed()))},a.labelToScroll=function(p){return i&&i.labels&&(z||a.refresh()||z)+i.labels[p]/i.duration()*V||0},a.getTrailing=function(p){var T=M.indexOf(a),b=a.direction>0?M.slice(0,T).reverse():M.slice(T+1);return(Ve(p)?b.filter(function(k){return k.vars.preventOverlaps===p}):b).filter(function(k){return a.direction>0?k.end<=z:k.start>=K})},a.update=function(p,T,b){if(!(x&&!b&&!p)){var k=Ne===!0?lt:a.scroll(),fe=p?0:(k-z)/V,O=fe<0?0:fe>1?1:fe||0,Z=a.progress,xe,j,U,q,at,G,Ue,ut;if(T&&(Oe=Ae,Ae=x?ie():k,y&&(qt=At,At=i&&!de?i.totalProgress():O)),$&&d&&!ke&&!nn&&nt&&(!O&&z<k+(k-Oe)/(Ce()-Mi)*$?O=1e-4:O===1&&K>k+(k-Oe)/(Ce()-Mi)*$&&(O=.9999)),O!==Z&&a.enabled){if(xe=a.isActive=!!O&&O<1,j=!!Z&&Z<1,G=xe!==j,at=G||!!O!=!!Z,a.direction=O>Z?1:-1,a.progress=O,at&&!ke&&(U=O&&!Z?0:O===1?1:Z===1?2:3,de&&(q=!G&&Y[U+1]!=="none"&&Y[U+1]||Y[U],ut=i&&(q==="complete"||q==="reset"||q in i))),be&&(G||ut)&&(ut||g||!i)&&(Le(be)?be(a):a.getTrailing(be).forEach(function(Gt){return Gt.endAnimation()})),de||(A&&!ke&&!nn?(A._dp._time-A._start!==A._time&&A.render(A._dp._time-A._start),A.resetTo?A.resetTo("totalProgress",O,i._tTime/i._tDur):(A.vars.totalProgress=O,A.invalidate().restart())):i&&i.totalProgress(O,!!(ke&&(_t||p)))),d){if(p&&f&&(he.style[f+w.os2]=Si),!$e)rt(Pi(et+yt*O));else if(at){if(Ue=!p&&O>Z&&K+1>k&&k+1>=gt(E,w),ue)if(!p&&(xe||Ue)){var ve=Et(d,!0),_e=k-z;Tr(d,B,ve.top+(w===ce?_e:0)+ae,ve.left+(w===ce?0:_e)+ae)}else Tr(d,he);bi(xe||Ue?Pt:Yt),St&&O<1&&xe||rt(et+(O===1&&!Ue?yt:0))}}y&&!Re.tween&&!ke&&!nn&&ot.restart(!0),o&&(G||X&&O&&(O<1||!Rn))&&Yi(o.targets).forEach(function(Gt){return Gt.classList[xe||X?"add":"remove"](o.className)}),l&&!de&&!p&&l(a),at&&!ke?(de&&(ut&&(q==="complete"?i.pause().totalProgress(1):q==="reset"?i.restart(!0).pause():q==="restart"?i.restart(!0):i[q]()),l&&l(a)),(G||!Rn)&&(v&&G&&ci(a,v),Pe[U]&&ci(a,Pe[U]),X&&(O===1?a.kill(!1,1):Pe[U]=0),G||(U=O===1?1:3,Pe[U]&&ci(a,Pe[U]))),me&&!xe&&Math.abs(a.getVelocity())>(Ri(me)?me:2500)&&(Ci(a.callbackAnimation),A?A.progress(1):Ci(i,q==="reverse"?1:!O,1))):de&&l&&!ke&&l(a)}if(oi){var Ee=x?k/x.duration()*(x._caScrollDist||0):k;Ki(Ee+(u._isFlipped?1:0)),oi(Ee)}ai&&ai(-k/x.duration()*(x._caScrollDist||0))}},a.enable=function(p,T){a.enabled||(a.enabled=!0,ge(E,"resize",Ai),se||ge(E,"scroll",di),oe&&ge(t,"refreshInit",oe),p!==!1&&(a.progress=ye=0,Ae=Oe=Qe=ie()),T!==!1&&a.refresh())},a.getTween=function(p){return p&&Re?Re.tween:A},a.setPositions=function(p,T,b,k){if(x){var fe=x.scrollTrigger,O=x.duration(),Z=fe.end-fe.start;p=fe.start+Z*p/O,T=fe.start+Z*T/O}a.refresh(!1,!1,{start:mr(p,b&&!!a._startClamp),end:mr(T,b&&!!a._endClamp)},k),a.update()},a.adjustPinSpacing=function(p){if(ne&&p){var T=ne.indexOf(w.d)+1;ne[T]=parseFloat(ne[T])+p+ae,ne[1]=parseFloat(ne[1])+p+ae,bi(ne)}},a.disable=function(p,T){if(p!==!1&&a.revert(!0,!0),a.enabled&&(a.enabled=a.isActive=!1,T||A&&A.pause(),lt=0,Se&&(Se.uncache=1),oe&&pe(t,"refreshInit",oe),ot&&(ot.pause(),Re.tween&&Re.tween.kill()&&(Re.tween=0)),!se)){for(var b=M.length;b--;)if(M[b].scroller===E&&M[b]!==a)return;pe(E,"resize",Ai),se||pe(E,"scroll",di)}},a.kill=function(p,T){a.disable(p,T),A&&!T&&A.kill(),c&&delete qn[c];var b=M.indexOf(a);b>=0&&M.splice(b,1),b===Ie&&gn>0&&Ie--,b=0,M.forEach(function(k){return k.scroller===a.scroller&&(b=1)}),b||Ne||(a.scroll.rec=0),i&&(i.scrollTrigger=null,p&&i.revert({kill:!1}),T||i.kill()),Fe&&[Fe,qe,u,Xe].forEach(function(k){return k.parentNode&&k.parentNode.removeChild(k)}),Fi===a&&(Fi=0),d&&(Se&&(Se.uncache=1),b=0,M.forEach(function(k){return k.pin===d&&b++}),b||(Se.spacer=0)),n.onKill&&n.onKill(a)},M.push(a),a.enable(!1,!1),xt&&xt(a),i&&i.add&&!V){var N=a.update;a.update=function(){a.update=N,R.cache++,z||K||a.refresh()},m.delayedCall(.01,a.update),V=.01,z=K=0}else a.refresh();d&&qs()},t.register=function(n){return pi||(m=n||Xr(),qr()&&window.document&&t.enable(),pi=$i),pi},t.defaults=function(n){if(n)for(var i in n)ln[i]=n[i];return ln},t.disable=function(n,i){$i=0,M.forEach(function(l){return l[i?"kill":"disable"](n)}),pe(P,"wheel",di),pe(F,"scroll",di),clearInterval(tn),pe(F,"touchcancel",ft),pe(B,"touchstart",ft),sn(pe,F,"pointerdown,touchstart,mousedown",vr),sn(pe,F,"pointerup,touchend,mouseup",_r),bn.kill(),rn(pe);for(var s=0;s<R.length;s+=3)on(pe,R[s],R[s+1]),on(pe,R[s],R[s+2])},t.enable=function(){if(P=window,F=document,je=F.documentElement,B=F.body,m){if(Yi=m.utils.toArray,zi=m.utils.clamp,Fn=m.core.context||ft,Pn=m.core.suppressOverwrites||ft,Kn=P.history.scrollRestoration||"auto",Xn=P.pageYOffset||0,m.core.globals("ScrollTrigger",t),B){$i=1,wi=document.createElement("div"),wi.style.height="100vh",wi.style.position="absolute",ts(),Hs(),Q.register(m),t.isTouch=Q.isTouch,zt=Q.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Wn=Q.isTouch===1,ge(P,"wheel",di),jn=[P,F,je,B],m.matchMedia?(t.matchMedia=function(_){var g=m.matchMedia(),h;for(h in _)g.add(h,_[h]);return g},m.addEventListener("matchMediaInit",function(){Qr(),ir()}),m.addEventListener("matchMediaRevert",function(){return Zr()}),m.addEventListener("matchMedia",function(){Kt(0,1),ri("matchMedia")}),m.matchMedia().add("(orientation: portrait)",function(){return On(),On})):console.warn("Requires GSAP 3.11.0 or later"),On(),ge(F,"scroll",di);var n=B.hasAttribute("style"),i=B.style,s=i.borderTopStyle,l=m.core.Animation.prototype,o,c;for(l.revert||Object.defineProperty(l,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Et(B),ce.m=Math.round(o.top+ce.sc())||0,Be.m=Math.round(o.left+Be.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(B.setAttribute("style",""),B.removeAttribute("style")),tn=setInterval(yr,250),m.delayedCall(.5,function(){return nn=0}),ge(F,"touchcancel",ft),ge(B,"touchstart",ft),sn(ge,F,"pointerdown,touchstart,mousedown",vr),sn(ge,F,"pointerup,touchend,mouseup",_r),Bn=m.utils.checkPrefix("transform"),mn.push(Bn),pi=Ce(),bn=m.delayedCall(.2,Kt).pause(),gi=[F,"visibilitychange",function(){var _=P.innerWidth,g=P.innerHeight;F.hidden?(fr=_,pr=g):(fr!==_||pr!==g)&&Ai()},F,"DOMContentLoaded",Kt,P,"load",Kt,P,"resize",Ai],rn(ge),M.forEach(function(_){return _.enable(0,1)}),c=0;c<R.length;c+=3)on(pe,R[c],R[c+1]),on(pe,R[c],R[c+2])}else if(F){var v=function _(){t.enable(),F.removeEventListener("DOMContentLoaded",_)};F.addEventListener("DOMContentLoaded",v)}}},t.config=function(n){"limitCallbacks"in n&&(Rn=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(tn)||(tn=i)&&setInterval(yr,i),"ignoreMobileResize"in n&&(Wn=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(rn(pe)||rn(ge,n.autoRefreshEvents||"none"),Wr=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,i){var s=Ye(n),l=R.indexOf(s),o=ii(s);~l&&R.splice(l,o?6:2),i&&(o?mt.unshift(P,i,B,i,je,i):mt.unshift(s,i))},t.clearMatchMedia=function(n){M.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},t.isInViewport=function(n,i,s){var l=(Ve(n)?Ye(n):n).getBoundingClientRect(),o=l[s?Zt:Qt]*i||0;return s?l.right-o>0&&l.left+o<P.innerWidth:l.bottom-o>0&&l.top+o<P.innerHeight},t.positionInViewport=function(n,i,s){Ve(n)&&(n=Ye(n));var l=n.getBoundingClientRect(),o=l[s?Zt:Qt],c=i==null?o/2:i in Sn?Sn[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(l.left+c)/P.innerWidth:(l.top+c)/P.innerHeight},t.killAll=function(n){if(M.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ni.killAll||[];ni={},i.forEach(function(s){return s()})}},t})();L.version="3.15.0";L.saveStyles=function(t){return t?Yi(t).forEach(function(e){if(e&&e.style){var r=Ge.indexOf(e);r>=0&&Ge.splice(r,5),Ge.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),m.core.getCache(e),Fn())}}):Ge};L.revert=function(t,e){return ir(!t,e)};L.create=function(t,e){return new L(t,e)};L.refresh=function(t){return t?Ai(!0):(pi||L.register())&&Kt(!0)};L.update=function(t){return++R.cache&&kt(t===!0?2:0)};L.clearScrollMemory=es;L.maxScroll=function(t,e){return gt(t,e?Be:ce)};L.getScrollFunc=function(t,e){return Wt(Ye(t),e?Be:ce)};L.getById=function(t){return qn[t]};L.getAll=function(){return M.filter(function(t){return t.vars.id!=="ScrollSmoother"})};L.isScrolling=function(){return!!nt};L.snapDirectional=tr;L.addEventListener=function(t,e){var r=ni[t]||(ni[t]=[]);~r.indexOf(e)||r.push(e)};L.removeEventListener=function(t,e){var r=ni[t],n=r&&r.indexOf(e);n>=0&&r.splice(n,1)};L.batch=function(t,e){var r=[],n={},i=e.interval||.016,s=e.batchMax||1e9,l=function(v,_){var g=[],h=[],d=m.delayedCall(i,function(){_(g,h),g=[],h=[]}).pause();return function(f){g.length||d.restart(!0),g.push(f.trigger),h.push(f),s<=g.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Le(e[o])&&o!=="onRefreshInit"?l(o,e[o]):e[o];return Le(s)&&(s=s(),ge(L,"refresh",function(){return s=e.batchMax()})),Yi(t).forEach(function(c){var v={};for(o in n)v[o]=n[o];v.trigger=c,r.push(L.create(v))}),r};var Cr=function(e,r,n,i){return r>i?e(i):r<0&&e(0),n>i?(i-r)/(n-r):n<0?r/(r-n):1},zn=function t(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(Q.isTouch?" pinch-zoom":""):"none",e===je&&t(B,r)},dn={auto:1,scroll:1},js=function(e){var r=e.event,n=e.target,i=e.axis,s=(r.changedTouches?r.changedTouches[0]:r).target,l=s._gsap||m.core.getCache(s),o=Ce(),c;if(!l._isScrollT||o-l._isScrollT>2e3){for(;s&&s!==B&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(dn[(c=it(s)).overflowY]||dn[c.overflowX]));)s=s.parentNode;l._isScroll=s&&s!==n&&!ii(s)&&(dn[(c=it(s)).overflowY]||dn[c.overflowX]),l._isScrollT=o}(l._isScroll||i==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},ns=function(e,r,n,i){return Q.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:i=i&&js,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ge(F,Q.eventTypes[0],Mr,!1,!0)},onDisable:function(){return pe(F,Q.eventTypes[0],Mr,!0)}})},Ks=/(input|label|select|textarea)/i,Lr,Mr=function(e){var r=Ks.test(e.target.tagName);(r||Lr)&&(e._gsapAllow=!0,Lr=r)},Js=function(e){jt(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,n=r.normalizeScrollX,i=r.momentum,s=r.allowNestedScroll,l=r.onRelease,o,c,v=Ye(e.target)||je,_=m.core.globals().ScrollSmoother,g=_&&_.get(),h=zt&&(e.content&&Ye(e.content)||g&&e.content!==!1&&!g.smooth()&&g.content()),d=Wt(v,ce),f=Wt(v,Be),D=1,$=(Q.isTouch&&P.visualViewport?P.visualViewport.scale*P.visualViewport.width:P.outerWidth)/P.innerWidth,W=0,H=Le(i)?function(){return i(o)}:function(){return i||2.8},X,y,ue=ns(v,e.type,!0,s),I=function(){return y=!1},x=ft,me=ft,be=function(){c=gt(v,ce),me=zi(zt?1:0,c),n&&(x=zi(0,gt(v,Be))),X=ei},w=function(){h._gsap.y=Pi(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},de=function(){if(y){requestAnimationFrame(I);var ee=Pi(o.deltaY/2),te=me(d.v-ee);if(h&&te!==d.v+d.offset){d.offset=te-d.v;var a=Pi((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+a+", 0, 1)",h._gsap.y=a+"px",d.cacheID=R.cache,kt()}return!0}d.offset&&w(),y=!0},E,vt,se,$e,Pe=function(){be(),E.isActive()&&E.vars.scrollY>c&&(d()>c?E.progress(1)&&d(c):E.resetTo("scrollY",c))};return h&&m.set(h,{y:"+=0"}),e.ignoreCheck=function(Y){return zt&&Y.type==="touchmove"&&de()||D>1.05&&Y.type!=="touchstart"||o.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){y=!1;var Y=D;D=Pi((P.visualViewport&&P.visualViewport.scale||1)/$),E.pause(),Y!==D&&zn(v,D>1.01?!0:n?!1:"x"),vt=f(),se=d(),be(),X=ei},e.onRelease=e.onGestureStart=function(Y,ee){if(d.offset&&w(),!ee)$e.restart(!0);else{R.cache++;var te=H(),a,oe;n&&(a=f(),oe=a+te*.05*-Y.velocityX/.227,te*=Cr(f,a,oe,gt(v,Be)),E.vars.scrollX=x(oe)),a=d(),oe=a+te*.05*-Y.velocityY/.227,te*=Cr(d,a,oe,gt(v,ce)),E.vars.scrollY=me(oe),E.invalidate().duration(te).play(.01),(zt&&E.vars.scrollY>=c||a>=c-1)&&m.to({},{onUpdate:Pe,duration:te})}l&&l(Y)},e.onWheel=function(){E._ts&&E.pause(),Ce()-W>1e3&&(X=0,W=Ce())},e.onChange=function(Y,ee,te,a,oe){if(ei!==X&&be(),ee&&n&&f(x(a[2]===ee?vt+(Y.startX-Y.x):f()+ee-a[1])),te){d.offset&&w();var Ft=oe[2]===te,Lt=Ft?se+Y.startY-Y.y:d()+te-oe[1],Qe=me(Lt);Ft&&Lt!==Qe&&(se+=Qe-Lt),d(Qe)}(te||ee)&&kt()},e.onEnable=function(){zn(v,n?!1:"x"),L.addEventListener("refresh",Pe),ge(P,"resize",Pe),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=f.smooth=!1),ue.enable()},e.onDisable=function(){zn(v,!0),pe(P,"resize",Pe),L.removeEventListener("refresh",Pe),ue.kill()},e.lockAxis=e.lockAxis!==!1,o=new Q(e),o.iOS=zt,zt&&!d()&&d(1),zt&&m.ticker.add(ft),$e=o._dc,E=m.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:is(d,d(),function(){return E.pause()})},onUpdate:kt,onComplete:$e.vars.onComplete}),o};L.sort=function(t){if(Le(t))return M.sort(t);var e=P.pageYOffset||0;return L.getAll().forEach(function(r){return r._sortY=r.trigger?e+r.trigger.getBoundingClientRect().top:r.start+P.innerHeight}),M.sort(t||function(r,n){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};L.observe=function(t){return new Q(t)};L.normalizeScroll=function(t){if(typeof t>"u")return He;if(t===!0&&He)return He.enable();if(t===!1){He&&He.kill(),He=t;return}var e=t instanceof Q?t:Js(t);return He&&He.target===e.target&&He.kill(),ii(e.target)&&(He=e),e};L.core={_getVelocityProp:Nn,_inputObserver:ns,_scrollers:R,_proxies:mt,bridge:{ss:function(){nt||ri("scrollStart"),nt=Ce()},ref:function(){return ke}}};Xr()&&m.registerPlugin(L);const Zs=`varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Qs=`precision highp float;

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
`,rs=[{slug:"why-we-write",title:"我们为什么要写作",date:"2026-07-28",tags:["思考","写作"],description:"在短视频泛滥的时代，静下心来写点什么，本身就是一种抵抗。",content:`## 写作即思考

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
> — Antoine de Saint-Exupéry`}],Ze={get(t,e){try{const r=localStorage.getItem(t);return r?JSON.parse(r):e}catch{return e}},set(t,e){localStorage.setItem(t,JSON.stringify(e))},remove(t){localStorage.removeItem(t)}},ss={nickname:"yeesy",bio:"热爱写作的开发者。相信文字的力量，相信简洁即是美。",avatarEmoji:"🌸"},Ui=()=>({...ss,...Ze.get("blog_profile",{})}),$r=t=>Ze.set("blog_profile",t),Cn=()=>Ze.get("blog_admin",!1),eo=()=>{const t=!Cn();return Ze.set("blog_admin",t),t},nr=()=>new Set(Ze.get("blog_hidden",[])),os=t=>{const e=nr();return e.has(t)?e.delete(t):e.add(t),Ze.set("blog_hidden",[...e]),e.has(t)},Bt=()=>Ze.get("blog_user_posts",[]),rr=t=>Ze.set("blog_user_posts",t),to=t=>{const e=Bt(),r=e.findIndex(n=>n.slug===t.slug);r>=0?e[r]=t:e.unshift(t),rr(e)},io=t=>rr(Bt().filter(e=>e.slug!==t)),xn=()=>Ze.get("blog_likes",{}),no=t=>{const e=xn();e[t]?delete e[t]:e[t]=1,Ze.set("blog_likes",e)},sr=t=>Ze.get(`blog_cmts_${t}`,[]),ro=(t,e,r)=>{const n=sr(t);n.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),author:e||"匿名",content:r,createdAt:Date.now()}),Ze.set(`blog_cmts_${t}`,n)},so=(t,e)=>Ze.set(`blog_cmts_${t}`,sr(t).filter(r=>r.id!==e)),Gi=()=>{const t=nr(),e=rs.filter(i=>!t.has(i.slug)),r=Bt(),n=new Set(e.map(i=>i.slug));return[...r.filter(i=>!n.has(i.slug)),...e].sort((i,s)=>i.date>s.date?-1:1)},ls=()=>{const t=nr(),e=rs.map(i=>({...i,hidden:t.has(i.slug)})),r=Bt(),n=new Set(e.map(i=>i.slug));return[...r.filter(i=>!n.has(i.slug)),...e].sort((i,s)=>i.date>s.date?-1:1)},oo=t=>Gi().find(e=>e.slug===t),as=t=>ls().find(e=>e.slug===t),lo=()=>["全部",...new Set(Gi().flatMap(t=>t.tags))],ao=t=>t.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]/g,"").slice(0,50),Me=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),cs=t=>t<1024?`${t}B`:t<1048576?`${(t/1024).toFixed(1)}KB`:`${(t/1048576).toFixed(1)}MB`,co=t=>{const e=Date.now()-t;return e<6e4?"刚刚":e<36e5?`${Math.floor(e/6e4)}分钟前`:e<864e5?`${Math.floor(e/36e5)}小时前`:e<6048e5?`${Math.floor(e/864e5)}天前`:new Date(t).toISOString().slice(0,10)};function Je(t){const e=Object.assign(document.createElement("div"),{className:"toast",textContent:t});document.getElementById("toast-container").appendChild(e),setTimeout(()=>e.remove(),2600)}function uo(t){let e=t;e=e.replace(/```(\w*)\n([\s\S]*?)```/g,(l,o,c)=>`<pre><code class="lang-${o}">${Me(c.trim())}</code></pre>`),e=e.replace(/`([^`]+)`/g,"<code>$1</code>"),e=e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/(?<!\w)\*(.+?)\*(?!\w)/g,"<em>$1</em>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>'),e=e.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img src="$2" alt="$1">'),e=e.replace(/^> (.+)$/gm,"<blockquote><p>$1</p></blockquote>"),e=e.replace(/^---$/gm,"<hr>");const r=e.split(`
`),n=[],i=[];let s=!1;for(const l of r){if(/^\|(.+)\|$/.test(l)){const o=l.split("|").filter(c=>c.trim());if(o.every(c=>/^[-:\s]+$/.test(c)))continue;s||(s=!0,i.length=0),i.push("<tr>"+o.map(c=>`<td>${c.trim()}</td>`).join("")+"</tr>");continue}s&&(n.push("<table>"+i.join("")+"</table>"),s=!1),n.push(l)}return s&&n.push("<table>"+i.join("")+"</table>"),e=n.join(`
`),e=e.replace(/^### (.+)$/gm,"<h3>$1</h3>"),e=e.replace(/^## (.+)$/gm,"<h2>$1</h2>"),e=e.replace(/^- (.+)$/gm,"<li>$1</li>"),e=e.replace(/^\d+\. (.+)$/gm,"<li>$1</li>"),e=e.replace(/((?:<li>.*<\/li>\n?)+)/g,"<ul>$1</ul>"),e=e.replace(/^(?!<[a-zA-Z/!])(.+)$/gm,"<p>$1</p>"),e.replace(/<p>\s*<\/p>/g,"")}const ho=document.getElementById("bg-canvas"),Vi=document.getElementById("main-content"),fo=document.getElementById("nav"),Ln=document.getElementById("nav-logo"),po=document.getElementById("progress-bar"),Ct=document.getElementById("footer"),us=document.getElementById("back-to-top");let ti=null;Ln.addEventListener("pointerdown",t=>{t.preventDefault(),ti=setTimeout(()=>{const e=eo(),r=Object.assign(document.createElement("div"),{className:"admin-toast",textContent:e?"博主模式已激活":"博主模式已退出"});document.body.appendChild(r),setTimeout(()=>r.remove(),2500),ds(),lr(!0)},3e3)});Ln.addEventListener("pointerup",()=>{ti&&(clearTimeout(ti),ti=null)});Ln.addEventListener("pointerleave",()=>{ti&&(clearTimeout(ti),ti=null)});Ln.addEventListener("click",t=>{t.preventDefault(),location.hash="#/"});function ds(){const t=Cn();document.body.classList.toggle("admin-mode",t),document.querySelectorAll(".nav-link-admin").forEach(e=>e.style.display=t?"":"none")}const or=new vs({canvas:ho,antialias:!0,alpha:!1});or.setPixelRatio(Math.min(devicePixelRatio,2));const hs=new _s,go=new ws(-1,1,1,-1,0,1),pt={uTime:{value:0},uScroll:{value:0},uResolution:{value:new $n(innerWidth,innerHeight)},uMouse:{value:new $n(.5,.5)},uClickPos:{value:new $n(.5,.5)},uClickTime:{value:0},uClickActive:{value:0}},mo=new bs({vertexShader:Zs,fragmentShader:Qs,uniforms:pt,depthWrite:!1,depthTest:!1});hs.add(new ys(new Ss(2,2),mo));window.addEventListener("resize",()=>{or.setSize(innerWidth,innerHeight),pt.uResolution.value.set(innerWidth,innerHeight)});let En={x:.5,y:.5},hi={x:.5,y:.5};window.addEventListener("mousemove",t=>{En.x=t.clientX/innerWidth,En.y=1-t.clientY/innerHeight});window.addEventListener("click",t=>{pt.uClickPos.value.set(t.clientX/innerWidth,1-t.clientY/innerHeight),pt.uClickTime.value=pt.uTime.value,pt.uClickActive.value=1,Xi.to(pt.uClickActive,{value:0,duration:.5,delay:3,ease:"power2.out"})});const We=new Rs({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:!0,wheelMultiplier:.8,touchMultiplier:1.5});Xi.registerPlugin(L);We.on("scroll",L.update);Xi.ticker.add(t=>We.raf(t*1e3));Xi.ticker.lagSmoothing(0);function fs(){const t=We.scroll??scrollY,e=We.limit??Math.max(document.documentElement.scrollHeight-innerHeight,1);pt.uScroll.value=Math.min(t/e,1),po.style.width=`${Math.min(t/e*100,100)}%`,fo.classList.toggle("scrolled",t>20),us.classList.toggle("visible",t>500)}We.on("scroll",fs);us.addEventListener("click",()=>We.scrollTo(0,{duration:.8}));function vo(t){const e=t in xn(),r=xn()[t]||0;return`<span class="card-like${e?" liked":""}" data-like="${t}">${e?"♥":"♡"} ${r||""}</span>`}function _o(t){return t?.length?`<div class="attachments-list"><h4>📎 附件 (${t.length})</h4><div>${t.map(e=>`<a class="attachment-item" href="${e.data}" download="${Me(e.name)}" title="${Me(e.name)}"><span>📄</span><span>${Me(e.name)}</span><span class="att-size">${cs(e.size)}</span></a>`).join("")}</div></div>`:""}function wo(t){const e=sr(t);return`<div class="comments-section">
    <h3>评论 <span class="comment-count">${e.length} 条</span></h3>
    <div class="comment-form">
      <input type="text" id="ca-${t}" placeholder="昵称" maxlength="30">
      <textarea id="cc-${t}" placeholder="写下想法..." maxlength="500"></textarea>
      <button class="btn-submit" data-submit="${t}">发表</button>
    </div>
    ${e.length===0?'<p style="color:var(--text-faint);text-align:center;padding:28px 0">还没有评论</p>':`<div class="comment-list">${e.map(r=>`<div class="comment-item"><div class="comment-header"><span class="comment-author">${Me(r.author)}</span><span class="comment-time">${co(r.createdAt)}</span></div><div class="comment-body">${Me(r.content)}</div><button class="comment-delete" data-del="${t}:${r.id}">删除</button></div>`).join("")}</div>`}
  </div>`}function bo(t){document.querySelector(`[data-submit="${t}"]`)?.addEventListener("click",()=>{const e=document.getElementById(`ca-${t}`),r=document.getElementById(`cc-${t}`);if(!r?.value.trim())return Je("请输入评论");ro(t,e?.value.trim()||"",r.value.trim()),r.value="",Je("评论已发表"),Tn(t)}),document.querySelectorAll("[data-del]").forEach(e=>e.addEventListener("click",()=>{const[r,n]=e.dataset.del.split(":");confirm("删除这条评论？")&&(so(r,n),Je("已删除"),Tn(r))}))}function ps(){document.querySelectorAll("[data-like]").forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation();const r=t.dataset.like;no(r);const n=location.hash.slice(1)||"/";n==="/"||n===""?Jt():n.startsWith("/post/")&&Tn(n.split("/post/")[1])})})}function gs(){L.refresh(),document.querySelectorAll(".article-content h2,.article-content h3,.article-content p,.article-content pre,.article-content blockquote,.article-content ul,.article-content ol,.article-content table").forEach((e,r)=>{Xi.fromTo(e,{opacity:0,y:28},{opacity:1,y:0,duration:.55,delay:r*.025,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 92%"}})})}function Gn(t,e){const r=as(t);if(!r)return;if(!Bt().some(i=>i.slug===t)){Je("内置文章不可删除，但可以隐藏");return}confirm(`确定删除「${r.title}」？`)&&(io(t),Je("已删除"),e())}let Li="全部",fi="";function Jt(){const t=Cn(),e=Ui(),r=Gi(),n=lo();let i=Li==="全部"?r:r.filter(l=>l.tags.includes(Li));if(fi){const l=fi.toLowerCase();i=i.filter(o=>o.title.toLowerCase().includes(l)||o.description.toLowerCase().includes(l)||o.tags.some(c=>c.toLowerCase().includes(l)))}const s=i.length===0?`<div class="empty-state"><div class="icon">·</div><p>${fi?"没有匹配":"还没有文章"}</p></div>`:i.map(l=>`<a class="post-card" href="#/post/${l.slug}">
        <div class="post-date">${l.date}</div><h2>${l.title}</h2><p class="post-desc">${l.description}</p>
        <div class="post-meta">
          ${l.tags.map(o=>`<span class="post-tag">${o}</span>`).join("")}
          <span class="read-time">${Math.ceil(l.content.length/500)||1}min</span>
          ${t?`<span class="card-admin-actions"><button data-hp="${l.slug}">${l.hidden?"显示":"隐藏"}</button><button data-ep="${l.slug}">编辑</button><button class="danger" data-dp="${l.slug}">删除</button></span>`:""}
          ${vo(l.slug)}
        </div></a>`).join("");Vi.innerHTML=`<div class="container">
    <div class="hero"><h1><span class="hl">Simplification</span><br>is the ultimate<br><span class="hl">Sophistication</span></h1><p>关于代码、设计、阅读，以及生活中值得被记录下来的瞬间。</p></div>
    <div class="tags-row">${n.map(l=>`<button class="tag-chip${l===Li?" active":""}" data-tag="${l}">${l}</button>`).join("")}</div>
    <div style="text-align:center;margin-bottom:40px"><input type="text" id="si" placeholder="搜索..." value="${Me(fi)}" style="background:none;border:1px solid var(--border);border-radius:20px;padding:8px 20px;color:var(--text);font-size:.88rem;outline:none;width:200px;text-align:center"></div>
    <div class="posts-grid">${s}</div></div>`,Ct.innerHTML=`<p>© 2026 ${e.nickname} · 这里什么都没有，但你来了</p>`,Ct.style.display="",document.querySelectorAll(".tag-chip").forEach(l=>l.addEventListener("click",()=>{Li=l.dataset.tag??"全部",fi="",Jt(),We.scrollTo(0,{immediate:!0})})),document.getElementById("si")?.addEventListener("input",l=>{fi=l.target.value,Li="全部",Jt()}),document.querySelectorAll("[data-hp]").forEach(l=>l.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),os(l.dataset.hp),Je("已切换"),Jt()})),document.querySelectorAll("[data-ep]").forEach(l=>l.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),location.hash=`#/write?edit=${l.dataset.ep}`})),document.querySelectorAll("[data-dp]").forEach(l=>l.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),Gn(l.dataset.dp,()=>Jt())})),ps(),requestAnimationFrame(()=>We.scrollTo(0,{immediate:!0})),si="/",ji("/"),document.title=`${e.nickname} 的博客`}function Tn(t){const e=oo(t);if(!e){location.hash="#/";return}const r=Cn(),n=Ui(),i=Math.ceil(e.content.length/500)||1,s=xn(),l=t in s;Vi.innerHTML=`<div class="container container-narrow">
    <a href="#/" class="back-link">← 返回</a>
    <div class="article-header">
      <div class="article-tags">${e.tags.map(o=>`<span>${o}</span>`).join("")}</div>
      <h1>${e.title}</h1>
      <div class="article-meta"><span>${e.date}</span><span>·</span><span>${i} 分钟阅读</span></div>
    </div>
    ${_o(e.attachments)}
    <div class="article-content">${uo(e.content)}</div>
    <div class="article-actions">
      <button class="art-act${l?" liked":""}" data-like="${t}">${l?"♥":"♡"} ${l?"已喜欢":"喜欢"} ${s[t]||""}</button>
      ${r?`<a href="#/write?edit=${t}" class="art-act">编辑</a>`:""}
    </div>
    ${wo(t)}</div>`,Ct.innerHTML=`<p>© 2026 ${n.nickname} · 这里什么都没有，但你来了</p>`,Ct.style.display="",ps(),bo(t),requestAnimationFrame(()=>{We.scrollTo(0,{immediate:!0}),gs()}),si=`/post/${t}`,ji("/"),document.title=`${e.title} - ${n.nickname}`}function yo(){const t=Ui();Vi.innerHTML=`<div class="container container-narrow"><div class="about-section">
    <div class="about-profile">
      <div class="about-avatar">${t.avatarUrl?`<img src="${Me(t.avatarUrl)}" alt="${Me(t.nickname)}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`:t.avatarEmoji}</div>
      <div class="about-info">
        <h1>你好，我是 ${t.nickname}</h1>
        <p>${Me(t.bio)}</p>
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
  </div></div>`,Ct.innerHTML=`<p>© 2026 ${t.nickname} · 这里什么都没有，但你来了</p>`,Ct.style.display="",requestAnimationFrame(()=>{We.scrollTo(0,{immediate:!0}),gs()}),si="/about",ji("/about"),document.title=`关于 - ${t.nickname}`}function Vn(){const t=Ui(),e=["🌸","✨","🌊","🔥","💻","📖","🎨","🚀","🌙","⭐","🦊","🐱"];Vi.innerHTML=`<div class="container container-narrow"><div class="settings-section"><h1>设置</h1><p class="settings-subtitle">修改个人资料，数据保存在本地。</p>
    <div class="settings-card"><h2>个人资料</h2>
      <div class="form-group"><label>昵称</label><input type="text" id="sn" value="${Me(t.nickname)}" maxlength="20"></div>
      <div class="form-group"><label>简介</label><textarea id="sb" rows="3" maxlength="200">${Me(t.bio)}</textarea></div>
      <div class="form-group"><label>头像 Emoji</label><div class="emoji-picker">${e.map(n=>`<button class="emoji-option${n===t.avatarEmoji&&!t.avatarUrl?" selected":""}" data-emoji="${n}">${n}</button>`).join("")}</div></div>
      <div class="form-group"><label>头像图片 URL</label><input type="text" id="sau" value="${Me(t.avatarUrl??"")}" placeholder="https://..."></div>
      <div class="btn-row"><button class="btn btn-primary" id="sp">保存</button><button class="btn btn-outline" id="sr">恢复默认</button></div>
    </div>
    <div class="settings-card"><h2>数据</h2><p style="color:var(--text-dim);font-size:.9rem">共 <strong>${Gi().length}</strong> 篇文章 · localStorage 持久化</p></div>
  </div></div>`,Ct.innerHTML=`<p>© 2026 ${t.nickname} · 这里什么都没有，但你来了</p>`,Ct.style.display="";let r=t.avatarEmoji;document.querySelectorAll(".emoji-option").forEach(n=>n.addEventListener("click",()=>{document.querySelectorAll(".emoji-option").forEach(i=>i.classList.remove("selected")),n.classList.add("selected"),r=n.dataset.emoji})),document.getElementById("sp").addEventListener("click",()=>{$r({nickname:document.getElementById("sn").value.trim()||t.nickname,bio:document.getElementById("sb").value.trim()||t.bio,avatarEmoji:r,avatarUrl:document.getElementById("sau").value.trim()||void 0}),Je("已保存"),Vn()}),document.getElementById("sr").addEventListener("click",()=>{confirm("恢复默认？")&&($r({...ss}),Je("已恢复"),Vn())}),requestAnimationFrame(()=>We.scrollTo(0,{immediate:!0})),si="/settings",ji("/settings"),document.title=`设置 - ${t.nickname}`}function _n(t){const e=t?as(t)??Bt().find(o=>o.slug===t):null;Vi.innerHTML=`<div class="container container-narrow"><div class="write-section">
    <h1>${e?"编辑文章":"写新文章"}</h1><p class="write-subtitle">${e?"修改已有内容":"Markdown 写作。支持拖拽上传附件。"}</p>
    <div class="write-card">
      <div class="form-row"><div class="form-group"><label>标题</label><input type="text" id="wt" value="${e?Me(e.title):""}" maxlength="100"></div><div class="form-group"><label>日期</label><input type="date" id="wd" value="${e?e.date:new Date().toISOString().slice(0,10)}"></div></div>
      <div class="form-row"><div class="form-group"><label>标签（逗号分隔）</label><input type="text" id="wg" value="${e?e.tags.join(","):""}"></div><div class="form-group"><label>摘要</label><input type="text" id="we" value="${e?Me(e.description):""}" maxlength="200"></div></div>
      <div class="form-group"><label>正文（Markdown）</label><textarea id="wc" rows="18" placeholder="## 标题&#10;&#10;开始写...">${e?e.content:""}</textarea></div>
      <div class="form-group"><label>附件（拖拽到下方）</label><div class="file-drop-zone" id="dz"><div class="drop-icon">+</div><p>拖拽文件或点击选择</p><p class="drop-hint">最大 10MB/个</p></div><input type="file" id="fi" multiple style="display:none"><div class="file-list" id="fl"></div></div>
      <div class="btn-row" style="margin-top:20px"><button class="btn btn-primary" id="pb">${e?"更新":"发布"}</button><button class="btn btn-outline" id="cb">取消</button>${e?'<button class="btn btn-danger" id="db">删除</button>':""}</div>
    </div>
    ${(()=>{const o=ls();return o.length>0?`<div class="write-card"><h2 style="font-size:1.1rem;font-weight:700;margin-bottom:20px">所有文章 (${o.length})</h2><div class="admin-post-list">${o.map(c=>`<div class="admin-post-item${c.hidden?" hidden-post":""}"><div class="admin-post-info"><div class="admin-post-title">${c.hidden?"· ":""}${c.title}</div><div class="admin-post-meta">${c.date} · ${c.tags.join(", ")}${c.hidden?" · 已隐藏":""}</div></div><div class="admin-post-actions"><button class="btn btn-outline" style="padding:5px 12px;font-size:.8rem" data-ha="${c.slug}">${c.hidden?"显示":"隐藏"}</button><button class="btn btn-outline" style="padding:5px 12px;font-size:.8rem" data-ea="${c.slug}">编辑</button><button class="btn btn-danger" style="padding:5px 12px;font-size:.8rem" data-da="${c.slug}">删除</button></div></div>`).join("")}</div></div>`:""})()}
  </div></div>`,Ct.style.display="",requestAnimationFrame(()=>We.scrollTo(0,{immediate:!0}));let r=e?.attachments?[...e.attachments]:[];const n=()=>{const o=document.getElementById("fl");o.innerHTML=r.length===0?'<p style="color:var(--text-faint);font-size:.82rem">暂无附件</p>':r.map((c,v)=>`<span class="file-chip">📄 ${Me(c.name)} (${cs(c.size)})<button class="file-remove" data-fi="${v}">×</button></span>`).join(""),document.querySelectorAll(".file-remove").forEach(c=>c.addEventListener("click",()=>{r.splice(+c.dataset.fi,1),n()}))},i=document.getElementById("dz"),s=document.getElementById("fi");i.addEventListener("click",()=>s.click()),i.addEventListener("dragover",o=>{o.preventDefault(),i.classList.add("drag-over")}),i.addEventListener("dragleave",()=>i.classList.remove("drag-over")),i.addEventListener("drop",o=>{o.preventDefault(),i.classList.remove("drag-over"),l(o.dataTransfer.files)}),s.addEventListener("change",()=>{s.files&&l(s.files),s.value=""});const l=o=>{Array.from(o).forEach(c=>{if(c.size>10485760)return Je(`"${c.name}" 超 10MB`);const v=new FileReader;v.onload=()=>{r.push({name:c.name,type:c.type,size:c.size,data:v.result}),n()},v.readAsDataURL(c)})};n(),document.getElementById("pb").addEventListener("click",()=>{const o=document.getElementById("wt").value.trim(),c=document.getElementById("wd").value,v=document.getElementById("wg").value.split(",").map(d=>d.trim()).filter(Boolean),_=document.getElementById("we").value.trim(),g=document.getElementById("wc").value;if(!o||!g){Je("标题和正文不能为空");return}const h=e?e.slug:ao(o)+"-"+Date.now().toString(36);to({slug:h,title:o,date:c,description:_||g.slice(0,100),content:g,tags:v,attachments:r.length>0?r:void 0}),Je(e?"已更新":"已发布"),setTimeout(()=>{location.hash="#/"},400)}),document.getElementById("cb").addEventListener("click",()=>{location.hash="#/"}),document.getElementById("db")?.addEventListener("click",()=>{e&&Gn(e.slug,()=>{Je("已删除"),setTimeout(()=>{location.hash="#/"},300)})}),document.querySelectorAll("[data-ea]").forEach(o=>o.addEventListener("click",()=>{_n(o.dataset.ea),We.scrollTo(0,{immediate:!0})})),document.querySelectorAll("[data-da]").forEach(o=>o.addEventListener("click",()=>{Gn(o.dataset.da,()=>_n()),We.scrollTo(0,{immediate:!0})})),document.querySelectorAll("[data-ha]").forEach(o=>o.addEventListener("click",()=>{const c=o.dataset.ha;if(Bt().some(_=>_.slug===c)){const _=Bt(),g=_.find(h=>h.slug===c);g&&(g.hidden=!g.hidden,rr(_))}else os(c);Je("已切换"),_n(),We.scrollTo(0,{immediate:!0})})),si="/write",ji("/write"),document.title=`写文章 - ${Ui().nickname}`}let si="";function ji(t){document.querySelectorAll(".nav-link").forEach(e=>{e.classList.toggle("active",e.getAttribute("data-route")===t)})}function lr(t=!1){const e=location.hash.slice(1)||"/",[r,n]=e.split("?"),i=new URLSearchParams(n||"");r===si&&!i.has("edit")&&!t||(L.getAll().forEach(s=>s.kill()),setTimeout(()=>{r==="/"||r===""?Jt():r.startsWith("/post/")?Tn(r.split("/post/")[1]):r==="/about"?yo():r==="/settings"?Vn():r==="/write"?_n(i.get("edit")??void 0):Jt()},120),si=r)}window.addEventListener("hashchange",()=>lr());const So=new xs;function ms(){requestAnimationFrame(ms),pt.uTime.value=So.getElapsedTime(),hi.x+=(En.x-hi.x)*.04,hi.y+=(En.y-hi.y)*.04,pt.uMouse.value.set(hi.x,hi.y),or.render(hs,go)}ds();lr();requestAnimationFrame(ms);window.addEventListener("load",()=>{L.refresh(),fs()});console.log("%c🌊 %c深海","font-size:1.2em;color:#e0b88c;","color:#888");console.log(`%c  ${Gi().length} posts · Three.js + Lenis + GSAP`,"color:#888");

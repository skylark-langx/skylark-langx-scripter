/**
 * skylark-langx-scripter - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,r){var t=r.define,require=r.require,a="function"==typeof t&&t.amd,n=!a&&"undefined"!=typeof exports;if(!a&&!t){var o={};t=r.define=function(e,r,t){"function"==typeof t?(o[e]={factory:t,deps:r.map(function(r){return function(e,r){if("."!==e[0])return e;var t=r.split("/"),a=e.split("/");t.pop();for(var n=0;n<a.length;n++)"."!=a[n]&&(".."==a[n]?t.pop():t.push(a[n]));return t.join("/")}(r,e)}),resolved:!1,exports:null},require(e)):o[e]={factory:null,resolved:!0,exports:t}},require=r.require=function(e){if(!o.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=o[e];if(!module.resolved){var t=[];module.deps.forEach(function(e){t.push(require(e))}),module.exports=module.factory.apply(r,t)||null,module.resolved=!0}return module.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-langx-scripter/scripter",["skylark-langx/skylark","skylark-langx"],function(e,r){var t=document.getElementsByTagName("head")[0],a={},n={},o=0;function l(){return l}var i={type:!0,src:!0,nonce:!0,noModule:!0};return r.mixin(l,{loadJavaScript:function(e,r,l){var i=a[e];if(i||(i=a[e]={state:0,loadedCallbacks:[],errorCallbacks:[]}),i.loadedCallbacks.push(r),i.errorCallbacks.push(l),1===i.state)i.node.onload();else if(-1===i.state)i.node.onerror();else{var s=i.node=document.createElement("script"),c=i.id=o++;s.type="text/javascript",s.async=!1,s.defer=!1,startTime=(new Date).getTime(),t.appendChild(s),s.onload=function(){i.state=1;for(var e=i.loadedCallbacks,r=e.length;r--;)e[r]();i.loadedCallbacks=[],i.errorCallbacks=[]},s.onerror=function(){i.state=-1;for(var e=i.errorCallbacks,r=e.length;r--;)e[r]();i.loadedCallbacks=[],i.errorCallbacks=[]},s.src=e,n[c]=s}return i.id},deleteJavaScript:function(e){var r=n[e];if(r){var t=r.src;r.parentNode&&r.parentNode.remove(r),delete n[e],delete a[t]}},evaluate:function(e,r,t){var a,n,o=(t=t||document).createElement("script");if(o.text=e,r)for(a in i)(n=r[a]||r.getAttribute&&r.getAttribute(a))&&o.setAttribute(a,n);return t.head.appendChild(o).parentNode.removeChild(o),this},loadScript:function(e){var t=new r.Deferred;return t.promise.scriptId=this.loadJavaScript(e,function(){t.resolve()},function(e){t.reject(e)}),t.promise}}),e.attach("langx.scripter",l)}),e("skylark-langx-scripter/main",["./scripter"],function(e){return e}),e("skylark-langx-scripter",["skylark-langx-scripter/main"],function(e){return e})}(t),!a){var l=require("skylark-langx-ns");n?module.exports=l:r.skylarkjs=l}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-scripter.js.map

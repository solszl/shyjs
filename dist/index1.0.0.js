!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VHShyJS=e():t.VHShyJS=e()}(window,function(){return function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=15)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}e.exports=n},function(t,e,n){"use strict";n.d(e,"a",function(){return y});var r=n(0),o=n.n(r),i=n(1),u=n.n(i),c=n(4),l=n.n(c),a=n(2),s=n.n(a),f=n(5),h=n.n(f),y=function(t){function e(){var t;return o()(this,e),(t=l()(this,s()(e).call(this))).children=[],t}return h()(e,t),u()(e,[{key:"addChild",value:function(t){return this.children.push(t)}},{key:"addChildAt",value:function(t,e){return this.children.splice(e,0,t),t}},{key:"getChildAt",value:function(t){var e=this.children;return e.length<t?null:e[t]}},{key:"getChildByName",value:function(e){var t=this.children.filter(function(t){return t.name===e});return t.length?t[0]:null}},{key:"getChildIndex",value:function(t){return this.children.indexOf(t)}},{key:"getObjectsUnderPoint",value:function(t){return[]}},{key:"removeChild",value:function(t){var e=this.children.indexOf(t);return-1===e?t:this.children.splice(e,1)}},{key:"removeChildAt",value:function(t){return t>this.children.length?null:this.children.splice(t,1)}},{key:"removeChildren",value:function(t,e){return t<e?[]:this.children.splice(t,e-t+1)}},{key:"setChildIndex",value:function(t,e){var n=this.children;if(e>n.length&&(e=n.length),e<0&&(e=0),!n.includes(t))return n.splice(e,0,t);var r=n.indexOf(t);return n.splice(r,1),n.splice(e,0,t),t}},{key:"swapChildren",value:function(t,e){var n=this.children;if(!n.includes(t)||!n.includes(e))return!1;var r=t,o=n.indexOf(t),i=n.indexOf(e);return n[o]=e,n[i]=r,!0}},{key:"swapChildrenAt",value:function(t,e){var n=this.children;if(t<0||t>n.length)return!1;if(e<0||e>n.length)return!1;var r=n[t],o=n[e];return n[t]=o,n[e]=r,!0}},{key:"destroy",value:function(){var t=this.children;t.forEach(function(t){t.destroy()}),t=[]}}]),e}(n(8).a)},function(t,e,n){var r=n(16),o=n(17);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e,n){var r=n(18);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(r,t,e){e(2);var i=e(19);function o(t,e,n){return"undefined"!=typeof Reflect&&Reflect.get?r.exports=o=Reflect.get:r.exports=o=function(t,e,n){var r=i(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}},o(t,e,n||t)}r.exports=o},function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(0),o=n.n(r),i=n(1),u=n.n(i),c=n(9),l=function(){function t(){o()(this,t),this._name="",this._width=0,this._height=0,this._stage=null,this._filters=[],this._mouseX=0,this._mouseY=0,this._parent=null,this._rotation=0,this._scaleX=1,this._scaleY=1,this._transform=null,this._visible=!0,this._x=0,this._y=0,this._nestLevel=0,this._uuid=c.a.create()}return u()(t,[{key:"addEventListener",value:function(){}},{key:"dispatchEvent",value:function(){}},{key:"hasEventListener",value:function(t){}},{key:"removeEventListener",value:function(t,e){}},{key:"removeEventListeners",value:function(){}},{key:"getBounds",value:function(){}},{key:"toString",value:function(){}},{key:"localToGlobal",value:function(t){}},{key:"globalToLocal",value:function(t){}},{key:"hitTest",value:function(t,e){}},{key:"hitTestObject",value:function(t){}},{key:"destroy",value:function(){}}]),t}()},function(t,u,c){"use strict";(function(t){c.d(u,"a",function(){return i});var e=c(0),n=c.n(e),r=c(1),o=c.n(r),i=function(){function t(){n()(this,t)}return o()(t,null,[{key:"create",value:function(){var n=(new Date).getTime();return"xxxxx".replace(/[xy]/g,function(t){var e=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===t?e:3&e|8).toString(16)})}}]),t}();t.exports={UUID:i}}).call(this,c(6)(t))},function(t,u,c){"use strict";(function(t){c.d(u,"a",function(){return i});var e=c(0),r=c.n(e),n=c(1),o=c.n(n),i=function(){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;r()(this,n),this.type=t,this.data=e}return o()(n,[{key:"clone",value:function(){return new n(this.type,this.data)}},{key:"toString",value:function(){return"[Event type=".concat(this.type," data=").concat(this.data?JSON.stringify(this.data):"","]")}}]),n}();t.exports={Event:i,Added:"Shy.Added",AddedToStage:"Shy.AddedToStage",EnterFrame:"Shy.EnterFrame",WillRemove:"Shy.WillRemove",RemoveFromStage:"Shy.RemoveFromStage",Render:"Shy.Render"}}).call(this,c(6)(t))},function(t,u,c){"use strict";(function(t){c.d(u,"a",function(){return i});var e=c(0),r=c.n(e),n=c(1),o=c.n(n),i=function(){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;r()(this,n),this.x=t,this.y=e}return o()(n,[{key:"add",value:function(t){return new n(this.x+t.x,this.y+t.y)}},{key:"clone",value:function(){return new n(this.x,this.y)}},{key:"copyFrom",value:function(t){this.x=t.x,this.y=t.y}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"offset",value:function(t,e){this.x+=t,this.y+=e}},{key:"setTo",value:function(t,e){this.x=t,this.y=e}},{key:"subtract",value:function(t){return new n(this.x-t.x,this.y-t.y)}},{key:"toString",value:function(){return"(x=".concat(this.x,", y=").concat(this.y,")")}},{key:"x",set:function(t){this._x=t},get:function(){return this._x}},{key:"y",set:function(t){this._y=t},get:function(){return this._y}}],[{key:"distance",value:function(t,e){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n,r*r)}},{key:"length",get:function(){return Math.sqrt(this.x*this.x,this.y*this.y)}}]),n}();t.exports={Point:i}}).call(this,c(6)(t))},function(t,e,n){"use strict";n.d(e,"a",function(){return v});var r=n(0),o=n.n(r),i=n(1),u=n.n(i),c=n(4),l=n.n(c),a=n(2),s=n.n(a),f=n(5),h=n.n(f),y=n(3),d=n(13),v=function(t){function e(){var t;return o()(this,e),(t=l()(this,s()(e).call(this)))._buttonMode=!1,t._graphics=new d.a,t}return h()(e,t),u()(e,[{key:"startDrag",value:function(t,e){}},{key:"stopDrag",value:function(){}},{key:"buttonMode",set:function(t){this._buttonMode=t},get:function(){return this._buttonMode}},{key:"dropTarget",get:function(){}},{key:"graphics",get:function(){return this._graphics}},{key:"stage",get:function(){return this._stage}}]),e}(y.a)},function(t,o,i){"use strict";(function(t){i.d(o,"a",function(){return r});var e=i(0),n=i.n(e),r=function t(){n()(this,t)};t.exports={Graphics:r,LineCap:{None:"butt",Round:"round",Square:"square"},LineJoin:{Miter:"miter",Bevel:"bevel",Round:"round"}}}).call(this,i(6)(t))},function(t,e,n){"use strict";n.d(e,"a",function(){return v});var r=n(0),o=n.n(r),i=n(1),u=n.n(i),c=n(4),l=n.n(c),a=n(2),s=n.n(a),f=n(7),h=n.n(f),y=n(5),d=n.n(y),v=function(t){function n(){var t;return o()(this,n),(t=l()(this,s()(n).call(this)))._color=null,t._frameRate=30,t}return d()(n,t),u()(n,[{key:"addChild",value:function(t){return t._stage=this,h()(s()(n.prototype),"addChild",this).call(this,t)}},{key:"addChildAt",value:function(t,e){return t._stage=this,h()(s()(n.prototype),"addChildAt",this).call(this,t,e)}},{key:"removeChild",value:function(t){var e=h()(s()(n.prototype),"removeChild",this).call(this,t);return e._stage=null,e}},{key:"removeChildAt",value:function(t){var e=h()(s()(n.prototype),"removeChildAt",this).call(this,t);return e._stage=null,e}},{key:"invalidate",value:function(){}},{key:"stageWidth",get:function(){return 0}},{key:"stageHeight",get:function(){return 0}},{key:"frameRate",set:function(t){this._frameRate=t},get:function(){return this._frameRate}},{key:"color",set:function(t){this._color=t},get:function(){return this._color}}]),n}(n(3).a)},function(t,e,n){"use strict";n.r(e),function(t){var e=n(0),l=n.n(e),a=n(8),s=n(3),f=n(12),h=n(14),y=n(10),d=n(11),v=n(9);t.exports=function t(){l()(this,t);var e=new d.a,n=e.add(new d.a(10,10));console.log(e.x,e.y),console.log(n,n.x),console.log(e.toString());for(var r=0;r<10;)console.log(v.a.create()),r+=1;var o=new a.a;console.log(o),console.log(y.a.Added),console.log(y.a.AddedToStage),console.log(y.a.EnterFrame);var i=new s.a;console.log(i);var u=new h.a,c=new f.a;console.log(c.stage),u.addChild(c),console.log(c.stage)}}.call(this,n(6)(t))},function(e,t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(t){return n(t)}:e.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(t)}e.exports=r},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(n,t){function r(t,e){return n.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}n.exports=r},function(t,e,n){var r=n(2);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}}])});
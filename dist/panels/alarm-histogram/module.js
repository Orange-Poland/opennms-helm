define(["lodash","jquery","app/plugins/sdk","jquery.flot","jquery.flot.selection","jquery.flot.crosshair"],function(e,t,o,n,r,i){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=97)}({0:function(t,o){t.exports=e},10:function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?e.exports=n=function(e){return o(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)},n(t)}e.exports=n},11:function(e,t){function o(t,n){return e.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(t,n)}e.exports=o},2:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},3:function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}},38:function(e,t){e.exports=n},39:function(e,t){e.exports=r},4:function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(t)}e.exports=o},40:function(e,t){e.exports=i},41:function(e,t){!function(e){function t(e,t,o,n){var r="categories"==t.xaxis.options.mode,i="categories"==t.yaxis.options.mode;if(r||i){var a=n.format;if(!a){var s=t;if((a=[]).push({x:!0,number:!0,required:!0}),a.push({y:!0,number:!0,required:!0}),s.bars.show||s.lines.show&&s.lines.fill){var u=!!(s.bars.show&&s.bars.zero||s.lines.show&&s.lines.zero);a.push({y:!0,number:!0,required:!1,defaultValue:0,autoscale:u}),s.bars.horizontal&&(delete a[a.length-1].y,a[a.length-1].x=!0)}n.format=a}for(var c=0;c<a.length;++c)a[c].x&&r&&(a[c].number=!1),a[c].y&&i&&(a[c].number=!1)}}function o(e){var t=[];for(var o in e.categories){var n=e.categories[o];n>=e.min&&n<=e.max&&t.push([n,o])}return t.sort(function(e,t){return e[0]-t[0]}),t}function n(t,n,r){if("categories"==t[n].options.mode){if(!t[n].categories){var i={},a=t[n].options.categories||{};if(e.isArray(a))for(var s=0;s<a.length;++s)i[a[s]]=s;else for(var u in a)i[u]=a[u];t[n].categories=i}t[n].options.ticks||(t[n].options.ticks=o),function(e,t,o){for(var n=e.points,r=e.pointsize,i=e.format,a=t.charAt(0),s=function(e){var t=-1;for(var o in e)e[o]>t&&(t=e[o]);return t+1}(o),u=0;u<n.length;u+=r)if(null!=n[u])for(var c=0;c<r;++c){var l=n[u+c];null!=l&&i[c][a]&&(l in o||(o[l]=s,++s),n[u+c]=o[l])}}(r,n,t[n].categories)}}function r(e,t,o){n(t,"xaxis",o),n(t,"yaxis",o)}e.plot.plugins.push({init:function(e){e.hooks.processRawData.push(t),e.hooks.processDatapoints.push(r)},options:{xaxis:{categories:null},yaxis:{categories:null}},name:"categories",version:"1.0"})}(jQuery)},5:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},6:function(e,t,o){var n=o(10),r=o(5);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},7:function(e,t,o){var n=o(11);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},8:function(e,o){e.exports=t},9:function(e,t){e.exports=o},97:function(e,t,o){"use strict";o.r(t);var n=o(2),r=o.n(n),i=o(3),a=o.n(i),s=o(6),u=o.n(s),c=o(4),l=o.n(c),f=o(5),p=o.n(f),d=o(7),h=o.n(d),y=o(9),m=o(0),b=o.n(m),g=o(8),v=o.n(g),x=(o(38),o(39),o(40),o(41),function(e){function t(e,o,n){var i;return r()(this,t),(i=u()(this,l()(t).call(this,e,o))).scope=e,i.$timeout=n,i._renderRetries=0,b.a.defaults(i.panel,{groupProperty:"acknowledged",direction:"horizontal"}),i.retryTimes=10,i.retryDelay=100,i.events.on("init-edit-mode",i.onInitEditMode.bind(p()(i))),i.events.on("data-received",i.onDataReceived.bind(p()(i))),i.events.on("data-error",i.onDataError.bind(p()(i))),i.events.on("data-snapshot-load",i.onDataReceived.bind(p()(i))),i.events.on("render",i.onRender.bind(p()(i))),i}return t.$inject=["$scope","$injector","$timeout"],h()(t,e),a()(t,[{key:"link",value:function(e,t,o,n){this.elem=t.find(".histogram-chart"),this.ctrl=n}},{key:"onInitEditMode",value:function(){this.addEditorTab("Grouping","public/plugins/opennms-helm-app/panels/alarm-histogram/editor.html",2)}},{key:"onDataReceived",value:function(e){switch(this.panel.groupProperty){case"acknowledged":var t=b.a.countBy(this.query(e,"Acked By"),b.a.isNil);this.series=[{name:"Outstanding",count:b.a.defaultTo(t[!0],0),color:this.scope.$root.colors[0]},{name:"Acknowledged",count:b.a.defaultTo(t[!1],0),color:this.scope.$root.colors[4]}];break;case"severity":var o=b.a.countBy(this.query(e,"Severity"));this.series=[{name:"Cleared",count:b.a.defaultTo(o.CLEARED,0),color:"#EEE000"},{name:"Normal",count:b.a.defaultTo(o.NORMAL,0),color:"#86B15B"},{name:"Indeterm.",count:b.a.defaultTo(o.INDETERMINATE,0),color:"#990000"},{name:"Warning",count:b.a.defaultTo(o.WARNING,0),color:"#FCCC3B"},{name:"Minor",count:b.a.defaultTo(o.MINOR,0),color:"#EE901C"},{name:"Major",count:b.a.defaultTo(o.MAJOR,0),color:"#E3692F"},{name:"Critical",count:b.a.defaultTo(o.CRITICAL,0),color:"#DB4345"}]}this.render()}},{key:"onDataError",value:function(){this.series=[],this.render()}},{key:"onRender",value:function(){var e=this,t=this.ctrl.height||this.ctrl.panel.height||this.ctrl.row&&this.ctrl.row.height;if(b.a.isString(t)&&(t=parseInt(t.replace("px",""),10)),0===this.elem.width()||0===t||void 0===t)return this._renderRetries>this.retryTimes?(console.log("onRender: still unable to determine height, and we ran out of retries"),!1):(this._renderRetries++,console.log("onRender: unable to determine height, retrying again in "+this.retryDelay+"ms"),this.$timeout(function(){e.onRender()},this.retryDelay),!0);switch(t-=5,t-=this.ctrl.panel.title?24:9,this.elem.css("height",t+"px"),this.panel.direction){case"horizontal":v.a.plot(this.elem,b.a.map(this.series,function(e){return{data:[[e.count,e.name]],color:e.color}}),{series:{bars:{show:!0,barWidth:.6,align:"center",fill:.8,lineWidth:1,horizontal:!0}},yaxis:{mode:"categories",tickLength:0,autoscaleMargin:.02},grid:{borderWidth:0}});break;case"vertical":v.a.plot(this.elem,b.a.map(this.series,function(e){return{data:[[e.name,e.count]],color:e.color}}),{series:{bars:{show:!0,barWidth:.5,align:"center",fill:.8,lineWidth:1,horizontal:!1}},xaxis:{mode:"categories",tickLength:0,autoscaleMargin:.02},grid:{borderWidth:0}})}this.ctrl.renderingCompleted()}},{key:"query",value:function(e,t){for(var o=[],n=0;n<e.length;n++)for(var r=b.a.findIndex(e[n].columns,{text:t}),i=e[n]&&e[n].rows?e[n].rows:[],a=0;a<i.length;a++)o.push(e[n].rows[a][r]);return o}}]),t}(y.MetricsPanelCtrl));x.templateUrl="panels/alarm-histogram/module.html",o.d(t,"PanelCtrl",function(){return x})}})});
//# sourceMappingURL=module.js.map
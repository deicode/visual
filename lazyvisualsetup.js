/* lazyload + visual */

/*
LazyLoad makes it easy and painless to lazily load one or more external
JavaScript or CSS files on demand either during or after the rendering of a web
page.

Supported browsers include Firefox 2+, IE6+, Safari 3+ (including Mobile
Safari), Google Chrome, and Opera 9+. Other browsers may or may not work and
are not officially supported.

Visit https://github.com/rgrove/lazyload/ for more info.

Copyright (c) 2011 Ryan Grove <ryan@wonko.com>
All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@module lazyload
@class LazyLoad
@static
*/
LazyLoad=function(a){function h(b,c){var e,d=a.createElement(b);for(e in c)c.hasOwnProperty(e)&&d.setAttribute(e,c[e]);return d}function i(a){var c,g,b=d[a];b&&(c=b.callback,g=b.urls,g.shift(),e=0,g.length||(c&&c.call(b.context,b.obj),d[a]=null,f[a].length&&k(a)))}function j(){var c=navigator.userAgent;b={async:a.createElement("script").async===!0},(b.webkit=/AppleWebKit\//.test(c))||(b.ie=/MSIE|Trident/.test(c))||(b.opera=/Opera/.test(c))||(b.gecko=/Gecko\//.test(c))||(b.unknown=!0)}function k(e,g,k,n,o){var s,t,u,v,w,x,p=function(){i(e)},q="css"===e,r=[];if(b||j(),g)if(g="string"==typeof g?[g]:g.concat(),q||b.async||b.gecko||b.opera)f[e].push({urls:g,callback:k,obj:n,context:o});else for(s=0,t=g.length;t>s;++s)f[e].push({urls:[g[s]],callback:s===t-1?k:null,obj:n,context:o});if(!d[e]&&(v=d[e]=f[e].shift())){for(c||(c=a.head||a.getElementsByTagName("head")[0]),w=v.urls,s=0,t=w.length;t>s;++s)x=w[s],q?u=b.gecko?h("style"):h("link",{href:x,rel:"stylesheet"}):(u=h("script",{src:x}),u.async=!1),u.className="lazyload",u.setAttribute("charset","utf-8"),b.ie&&!q&&"onreadystatechange"in u&&!("draggable"in u)?u.onreadystatechange=function(){/loaded|complete/.test(u.readyState)&&(u.onreadystatechange=null,p())}:q&&(b.gecko||b.webkit)?b.webkit?(v.urls[s]=u.href,m()):(u.innerHTML='@import "'+x+'";',l(u)):u.onload=u.onerror=p,r.push(u);for(s=0,t=r.length;t>s;++s)c.appendChild(r[s])}}function l(a){var b;try{b=!!a.sheet.cssRules}catch(c){return e+=1,200>e?setTimeout(function(){l(a)},50):b&&i("css"),void 0}i("css")}function m(){var b,a=d.css;if(a){for(b=g.length;--b>=0;)if(g[b].href===a.urls[0]){i("css");break}e+=1,a&&(200>e?setTimeout(m,50):i("css"))}}var b,c,d={},e=0,f={css:[],js:[]},g=a.styleSheets;return{css:function(a,b,c,d){k("css",a,b,c,d)},js:function(a,b,c,d){k("js",a,b,c,d)}}}(this.document);

/*
Visual
Copyright (c) 2014 Institut d'Estadistica de Catalunya (Idescat)
http://www.idescat.cat (https://github.com/idescat/visual)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var VisualJS={version:"0.10.3",show:!0,old:!1,fixed:null,width:500,bwidth:500,height:500,normal:500,scripts:[],map:{},container:{},"public":{},func:{},callback:null,getSize:function(e){var t=VisualJS.setup,a=t.html,i=a.heading,n=a.footer,l=window,r=document,s=r.documentElement,o=r.getElementsByTagName("body")[0],u=r.getElementById(e),d=u.getElementsByTagName(i)[0].clientHeight,c=u.getElementsByTagName(n)[0].clientHeight,p=l.innerHeight||s.clientHeight||o.clientHeight,f=0
d||(f+=11),c||(f+=11),"undefined"!=typeof p&&"undefined"!=typeof d&&"undefined"!=typeof c&&(null===VisualJS.fixed?(VisualJS.bwidth=l.innerWidth||s.clientWidth||o.clientWidth,VisualJS.width=VisualJS.bwidth-t.padding.w,VisualJS.height=p-t.padding.h-d-c+f):(VisualJS.bwidth=s.clientWidth||o.clientWidth,VisualJS.width=VisualJS.fixed[0]-t.padding.w,VisualJS.height=VisualJS.fixed[1]-t.padding.h-d-c+f)),VisualJS.visualsize=VisualJS.width<VisualJS.normal?t.mini:t.normal},iframe:function(e,t){var a=VisualJS.setup,i="string"==typeof e.clas?e.clas:a.clas,n='<!DOCTYPE html>\n<!--[if lt IE 7]><html class="lt-ie9 lt-ie8 lt-ie7"> <![endif]-->\n<!--[if IE 7]><html class="lt-ie9 lt-ie8"> <![endif]-->\n<!--[if IE 8]><html class="lt-ie9"> <![endif]-->\n<!--[if gt IE 8]><!--> <html> <!--<![endif]-->\n<head>',l=function(){var t=document,a=t.createElement("iframe"),i=t.getElementById(e.id)
return a.frameBorder="0",a.scrolling="no",i.parentNode.insertBefore(a,i.nextSibling),a},r=function(e,t){if("undefined"!=typeof e){var a
e.contentDocument?a=e.contentDocument:e.contentWindow?a=e.contentWindow.document:window.frames[e.name]&&(a=window.frames[e.name].document),a&&(a.open(),a.write(t),a.close())}}
"string"==typeof t&&(n+=-1===t.indexOf("{")?'<link href="'+t+'" rel="stylesheet" type="text/css"/>':'<style type="text/css">'+t+"</style>"),n+='<script type="text/javascript" src="'+VisualJS.setup.main.visual+'"></script>',n+='<script type="text/javascript" src="'+VisualJS.setup.main.setup+'"></script>',n+='<script type="text/javascript" src="'+VisualJS.setup.main.lazy+'"></script>',n+='</head><body><div id="'+e.id+'" class="'+i+'"></div><script>window.setTimeout(function(){visual('+JSON.stringify(e)+");},1);</script></body></html>",r(l(),n)},compare:function(e){var t=VisualJS.setup,a=VisualJS.setup.separator,i="string"==typeof e.id?e.id:t.id,n="[object Array]"===Object.prototype.toString.call(e.css)?0===e.css.length?["",""]:1===e.css.length?[e.css[0],e.css[0]]:e.css:[e.css,e.css],l=document,r=l.createElement(t.html.heading),s=l.createElement(t.html.footer),o=l.getElementById(i),u=l.createElement("div"),d=l.createElement("style"),c=function(){VisualJS.getSize(i)
var n=VisualJS.height+("string"==typeof e.footer&&""!==e.footer?14:0),l=VisualJS.width+t.margin,r="iframe{ float: left; width: "+Math.floor((l-a)/2-t.margin)+"px; height:"+n+"px; }"
d.styleSheet?d.styleSheet.cssText=r:d.innerHTML=r,u.style.height=n+"px"}
r.innerHTML="string"==typeof e.title?e.title:"",s.innerHTML="string"==typeof e.footer?e.footer:"",s.style.clear="both",o.appendChild(r),o.appendChild(s),l.getElementsByTagName("head")[0].appendChild(d),u.style.width=a+"px","styleFloat"in u.style?u.style.styleFloat="left":u.style.cssFloat="left"
for(var p=0;2>p;p++){var f=l.createElement("span")
"string"!=typeof e.load[p].id&&(e.load[p].id=t.compareids[p]),f.id=e.load[p].id,o.insertBefore(f,s),VisualJS.iframe(e.load[p],n[p])}o.insertBefore(u,f),c(),"undefined"!=typeof window.onorientationchange?window.onorientationchange=c:window.onresize=c},load:function(e){var t=function(e){var t=JSON.parse(e.data),a=function(t){e.source.postMessage(JSON.stringify(t),"*")}
if("undefined"==typeof t.action)a({type:"error",data:[{id:"400",label:'"action" is required.'}]})
else if("send"===t.action){var i=t.id||VisualJS.id,n=VisualJS.container[i]||VisualJS.container[i]
if(n){if("cmap"===n.type&&!n.data[0].hasOwnProperty("label")){for(var l=[],r=VisualJS.map[n.by],s=r.features.length;s--;)l[r.features[s].properties[r.id]]=r.features[s].properties[r.label]
for(var o=n.data,s=o.length;s--;)o[s].label=l[o[s].id]}a(n)}else a({type:"error",data:[{id:"404",label:'A visualisation with the specified "id" was not found'}]})}else a({type:"error",data:[{id:"400",label:'"action" value is not correct.'}]})}
if("undefined"==typeof VisualJS.setup&&window.alert("Visual: Setup not found (visual.setup.js)!"),"[object Array]"!==Object.prototype.toString.call(e))VisualJS.get(e)
else for(var a=0,i=e.length;i>a;a++)VisualJS.get(e[a])
VisualJS.container[VisualJS.id].listen&&(window.addEventListener?addEventListener("message",t,!1):attachEvent("onmessage",t))},get:function(e){for(var t=VisualJS.setup,a=t.html,i=t.canvas,n=a.heading,l=a.footer,r=VisualJS.old||t.func.old("ie9"),s=function(e){return"undefined"!=typeof e&&"[object Array]"===Object.prototype.toString.call(e)&&2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]&&e[0]<e[1]?!0:!1},o=function(t,a,i){"string"==typeof t?typeof e[t]!==a&&(e[t]=i[t]):typeof e[t[0]][t[1]]!==a&&(e[t[0]][t[1]]=i[t[0]][t[1]])},u=[["show","boolean",VisualJS],["callback","function",VisualJS],["id","string",t],["listen","boolean",t],["dec","number",i],["heading","boolean",i],["legend","boolean",i],["grid","object",i],[["grid","border"],"number",i],[["grid","shadow"],"number",i],[["grid","line"],"number",i],[["grid","point"],"number",i],["axis","object",i],[["axis","x"],"boolean",i],[["axis","y"],"boolean",i]],d=0;d<u.length;d++)o(u[d][0],u[d][1],u[d][2])
VisualJS.id=e.id,VisualJS.public[VisualJS.id]={heading:null,legend:null},"object"==typeof e.fixed&&(VisualJS.fixed=e.fixed),"object"==typeof e.unit&&null!==e.unit?(o(["unit","label"],"string",i),o(["unit","symbol"],"string",i),o(["unit","position"],"string",i)):e.unit=i.unit,e.lang=e.lang||t.i18n.lang,"number"==typeof e.range||s(e.range)||(e.range=i.range.hasOwnProperty(e.type)&&"number"==typeof i.range[e.type]?i.range[e.type]:null),VisualJS.container[VisualJS.id]=e
var c,p="#"+VisualJS.id,f=p+" ."+t.canvasclass,g=VisualJS.container[VisualJS.id],h=function(){if(g.autoheading===!1)return g.title
var e=[],t=function(t,a){"string"==typeof t&&""!==t&&(a===!0&&(t='<span class="'+VisualJS.setup.nowrapclass+'">'+t+"</span>"),e.push(t))}
if(null!==g.time&&"object"==typeof g.time)var a=J(g.time[0],VisualJS.id),i=J(g.time[g.time.length-1],VisualJS.id),n=a+"&ndash;"+i
else var n=J(g.time,VisualJS.id)
return t(g.title,!1),t(g.geo,!0),t(n,!0),m(e.join(". "))},y=function(){var e=!1
"function"==typeof VisualJS.chart&&(x(),g.show&&VisualJS.chart(),"undefined"!=typeof window.onorientationchange?window.onorientationchange=c:window.onresize=c,e=!0),null!==g.callback&&g.callback.call({id:VisualJS.id,chart:e,heading:VisualJS.public[VisualJS.id].heading,legend:VisualJS.public[VisualJS.id].legend})},m=function(e){return String(e).replace(/&amp;/g,"&")},b=function(e,t){return t&&e.exists.call()?!1:(VisualJS.scripts.push(e.js),!0)},S=function(e,t,a){var i="number"==typeof a&&""!==VisualJS.container[e].unit.label?" "+VisualJS.container[e].unit.label:"",n="number"==typeof a?VisualJS.container[e].unit.symbol:"",l=v(a,e),r=l!==VisualJS.setup.i18n.text.na[VisualJS.container[e].lang]?"end"===VisualJS.container[e].unit.position?l+i+(""!==n?" "+n:n):n+l+i:l
return t?"<strong>"+r+"</strong> "+t:r},v=function(e,t){if("undefined"==typeof e||null===e)return VisualJS.setup.i18n.text.na[VisualJS.container[t].lang]
if("number"==typeof e){for(var a=e.toFixed(VisualJS.container[t].dec),i=/(\d+)(\d{3})/,n=a.split("."),l=n[0],r=n.length>1?VisualJS.setup.i18n.text.dec[VisualJS.container[t].lang]+n[1]:"";i.test(l);)l=l.replace(i,"$1"+VisualJS.setup.i18n.text.k[VisualJS.container[t].lang]+"$2")
return l+r}return""},J=function(e,t){if(!e)return null
if(isNaN(e))return e
switch(e.length){case 5:var a="quarter"
break
case 6:var a="month"
break
default:return e}var i=VisualJS.setup.i18n.text[a]
if("undefined"==typeof i)return e
var n=i[VisualJS.container[t].lang]
if("undefined"==typeof n)return e
var l=n[e.slice(4)-1]
return"undefined"==typeof l?e:l+" <span>"+e.slice(0,4)+"</span>"},V=function(e,t,a){var i=document.getElementById(VisualJS.setup.tooltipid),n=VisualJS.bwidth-VisualJS.setup.margin,l={}
i.innerHTML=e,i.style.display="block"
var r=i.clientWidth/2
l.x=t-r,l.y=a-i.clientHeight-5,t+r>n?l.x-=t+r-n:l.x<VisualJS.setup.margin&&(l.x+=VisualJS.setup.margin-l.x),l.y<VisualJS.setup.margin&&(l.y+=1.75*i.clientHeight),i.style.left=l.x+"px",i.style.top=l.y+"px"},x=function(){var e=document
if(!e.getElementById(VisualJS.setup.tooltipid)){var t=e.createElement("div")
t.id=VisualJS.setup.tooltipid,t.style.display="none",e.body.appendChild(t)}}
if("cmap"===e.type)if(r)document.getElementById(VisualJS.id).innerHTML="<p>"+t.i18n.text.oldbrowser[g.lang]+"</p>"
else{if("string"!=typeof e.by)return
b(t.lib.maps,!0),b(t.lib.d3,!0),b(t.map[e.by],!0),VisualJS.chart=function(){var a=h(),i=VisualJS.map[e.by],r=i.area[0],s=i.area[1],o="object"==typeof e.grouped&&"object"==typeof e.grouped.label&&e.grouped.label.length>0&&e.data[0].hasOwnProperty("group"),u=e.data[0].hasOwnProperty("val"),d=o?e.grouped.label.length:u?t.colors.map.max:1,f=t.colorclassprefix,y=VisualJS.func.colors(t.colors.map.base,d,"fill",f,o&&"object"==typeof e.grouped.color&&e.grouped.color.length===e.grouped.label.length?e.grouped.color:[],VisualJS.id),b=d3.select(p),J=d3.geo[i.projection](),x="object"==typeof i.center&&"function"==typeof J.center?J.center(i.center):J,w=x.scale(i.scale).translate([r/2,s/2]),k=d3.geo.path().projection(w),j=d3.select("#"+t.tooltipid);(c=function(){b.html("<"+n+"></"+n+"><"+l+"></"+l+">"),d3.select(p+" "+n).html(a),d3.select(p+" "+l).html(m(e.footer||"")),VisualJS.getSize(VisualJS.id)
var c,h,J,x,w,E=VisualJS.id,M=d3.map(),I=d3.map(),W=e.data[0].hasOwnProperty("label"),z=[],B=function(){},O=function(){},T=VisualJS.height/s,$=VisualJS.width/r,L=Math.min(Math.round(r*T),VisualJS.width),q=Math.min(Math.round(s*$),VisualJS.height),H=Math.floor((VisualJS.width-L)/2),N=Math.floor((VisualJS.height-q)/2),A=$>T?T:$,F=b.insert("svg:svg",l).attr("width",L).attr("height",q)
o?(c=d3.map(),B=function(e,t){e.set(t.id,t.group)},J=function(e,t,a){return f+(e.get(a[i.id])-1)},h=function(t,a){var n=e.grouped.label[t.get(a[i.id])-1],l=W?I.get(a[i.id]):a[i.label]
return"undefined"!=typeof n&&(l+=" <em>"+n+"</em>"),l}):(u?(J=function(e,t,a,n,l){var r=t.get(a[i.id])
if("undefined"==typeof r)return""
if(n===l)return f+(d/2).toFixed(0)
var s=d3.scale.quantize().domain([n,l]).range(d3.range(d).map(function(e){return f+e}))
return s(r)},O=VisualJS.func.legend):J=function(e,t,a){return""!==t.get(a[i.id])?"":f+(d-1)},h=function(e,t){return W?I.get(t[i.id]):t[i.label]})
for(var P=0,C=e.data,D=C.length;D>P;P++){var Y=C[P]
Y.hasOwnProperty("val")?null!==Y.val&&(M.set(Y.id,Y.val),z.push(Y.val)):M.set(Y.id,""),W&&I.set(Y.id,Y.label),B(c,Y)}z.sort(function(e,t){return e-t})
var U=z[0],X=z[D-1]
if("number"==typeof g.range?(x=d3.quantile(z,g.range),w=d3.quantile(z,1-g.range)):(x=g.range[0],w=g.range[1]),F.style("margin-left",H+"px"),F.style("margin-top",N+"px"),F.style("margin-bottom",N+"px"),F.append("svg:g").attr("class",t.areaclass).attr("transform","scale("+A+")").selectAll("path").data(i.features).enter().append("svg:path").attr("class",function(e){return""===e.properties[i.id]||""===e.properties[i.label]||!u&&"undefined"==typeof M.get(e.properties[i.id])?f+"nohover":J(c,M,e.properties,x,w)}).attr("d",k).on("mousemove",function(e){""!==e.properties[i.id]&&""!==e.properties[i.label]&&(u||o||"undefined"!=typeof M.get(e.properties[i.id]))&&V(S(E,h(c,e.properties),M.get(e.properties[i.id])),d3.event.pageX,d3.event.pageY)}).on("mouseout",function(){return j.style("display","none")}),"undefined"!=typeof U){var R=[S(E,null,x),S(E,null,w)],G=[y[y.length-1],y[0]],K=[U>x||v(x,E)===v(U,E),w>X||v(w,E)===v(X,E)]
VisualJS.public[VisualJS.id].legend={color:G,text:R,symbol:[K[0]?"==":"<=",K[1]?"==":">="]},g.legend&&"object"==typeof i.legend&&O(R,G,F,j,i.area,i.legend,K)}VisualJS.public[VisualJS.id].heading=a})()}}else{if(b(t.lib.jquery,!0)){var w=!1
b(t.lib.jquery.flot,!1)}else if(b(t.lib.jquery.flot,!0))var w=!1
else var w=!0
r&&b(t.lib.excanvas,!0)
var k=function(){},j=[],E=[],M=[],I=e.stacked||!1,W=function(){if(g.autoheading){var a=e.time.length,i=e.data.length
if(null===e.data[0].val[0]){for(var n=0,l=!0,r=[];a>n;n++){for(var s=0;i>s;s++)l=l&&null===e.data[s].val[n]
if(!l)break
r.push(l)}for(var o=0,u=r.length;u>o;o++)if(r[o]){e.time.shift()
for(var s=0;i>s;s++)e.data[s].val.shift()}a=e.time.length}if(null===e.data[0].val[a-1]){for(var n=a,l=!0,r=[];n--;){for(var s=0,i=e.data.length;i>s;s++)l=l&&null===e.data[s].val[n]
if(!l)break
r.push(l)}for(var o=r.length;o--;)if(r[o]){e.time.pop()
for(var s=0;i>s;s++)e.data[s].val.pop()}}}var d=function(){}
if(I)b(t.lib.jquery.flot.stack,w)
else if("tsbar"===e.type){b(t.lib.jquery.flot.orderbars,w)
var d=function(e){return e.bars}}return k=function(t,a){VisualJS.ticks=[]
for(var i=0,n=a.length;n>i;i++)E.push([i,a[i]]),VisualJS.ticks.push([i,a[i]])
for(var i=0,n=t.length;n>i;i++){for(var l=[],r=t[i].val,s=r.length,o=0;s>o;o++)l.push([o,r[o]])
j.push("tsbar"!==e.type||I||1===n?{label:t[i].label,data:l}:{label:t[i].label,data:l,bars:{show:!0,barWidth:.2,order:i+1,lineWidth:2}})}for(var i=0,u=j.length;u>i;i++)M.push({data:j[i].data,label:j[i].label,bars:d(j[i]),shadowSize:g.grid.shadow})
B=u>1},h()}
switch(e.type){case"pyram":b(t.lib.jquery.flot.pyramid,w),Array.max=function(e){return Math.max.apply(Math,e)}
var z,k=function(e,t,a){z=Math.max(Array.max(e[0].val),Array.max(e[1].val)),j[0]={label:e[0].label,data:[],pyramid:{direction:"L"}},j[1]={label:e[1].label,data:[]}
for(var i=0,n=a.length;n>i;i++)j[0].data[i]=[a[i],e[0].val[i]],j[1].data[i]=[a[i],e[1].val[i]]},B=!0,O=!1,I=!1,T=!1,L=!1,q=!1,H=h()
break
case"rank":var N=[],k=function(e){for(var t=0,a=e.length;a>t;t++)E[t]=[t,e[a-t-1][0]],N[t]=[e[a-t-1][1],t]
j={data:N}},B=!1,O=!1,T=!1,L=!1,q=!0,H=h()
break
case"bar":b(t.lib.jquery.flot.categories,w)
var k=function(e,t,a){if("object"!=typeof a||null===a)for(var i=0,n=e.length;n>i;i++)null!==e[i][1]&&j.push(["<span>"+e[i][0]+"</span>",e[i][1]])
else if("number"==typeof e[0])for(var i=0,n=a.length;n>i;i++)null!==e[i]&&j.push(['<span">'+a[i]+"</span>",e[i]])
B=j.length>1},O=!0,T=!1,L=!1,q=!0,H=h()
break
case"tsline":var H=W(),O=null,T=!0,L=!0,q=!1
break
case"tsbar":var H=W(),O=!0,T=!1,L=!1,q=!0}VisualJS.chart=function(){k(e.data,e.time,e.by),$.fn.UseTooltip=function(a){var i=[]
$(this).bind("plothover",function(n,l,r){if(r){if(i!=[r.seriesIndex,r.dataIndex]){i=[r.seriesIndex,r.dataIndex]
var s=r.datapoint[0],o=r.datapoint[1],u="bar"!==e.type?r.series.label:j[s][0],d="rank"!==e.type?u:E[o][1],c="rank"!==e.type&&"bar"!==e.type?I||1===j.length?E[s][1]:"pyram"===e.type?j[l.x<0?0:1].data[r.dataIndex][0]:E[r.dataIndex][1]:!1,p="pyram"===e.type?Math.abs(s):"rank"!==e.type?"tsbar"!==e.type?o:I||1===j.length?j[r.seriesIndex].data[s][1]:o:s
V(S(a,c?d+" ("+c+")":d,p),l.pageX,l.pageY)}}else $("#"+t.tooltipid).hide(),i=[]})},B=g.legend&&B
var a={colors:t.colors.series,series:{stack:O,bars:{show:q,barWidth:.7,align:"center",fill:.9},lines:{show:T,lineWidth:g.grid.line},points:{show:L,radius:g.grid.point}},legend:{show:B},grid:{borderWidth:g.grid.border,hoverable:!0,clickable:!1,mouseActiveRadius:10},xaxis:{show:g.axis.x},yaxis:{show:g.axis.y}};(c=function(){var i=VisualJS.id,r=E.length
switch($(p).html("<"+n+"></"+n+"><"+l+"></"+l+">"),$(p+" "+n).html(H),$(p+" "+l).html(m(e.footer||"")),VisualJS.getSize(i),$(p+" "+n).after('<div class="'+t.canvasclass+" "+VisualJS.visualsize+'" style="width: '+VisualJS.width+"px; height: "+VisualJS.height+'px;"></div>'),e.type){case"pyram":a.series.pyramid={show:!0,barWidth:1},a.yaxis.show=VisualJS.height/j[0].data.length>11?g.axis.y:!1,a.xaxis.max="number"==typeof g.range?z*g.range:g.range[1],a.xaxis.tickFormatter=function(e){return v(e,i)},$.plot(f,j,a)
break
case"rank":a.series.bars.horizontal=!0,a.yaxis.ticks=VisualJS.height/r>11?E.slice(0):0,"number"==typeof g.range?a.xaxis.max=e.data[0][1]*g.range:(a.xaxis.min=g.range[0],a.xaxis.max=g.range[1]),a.xaxis.tickFormatter=function(e){return v(e,i)},a.yaxis.autoscaleMargin=0,a.series.bars.barWidth=.5,$.plot(f,[j],a)
break
case"bar":a.xaxis.mode="categories",a.xaxis.tickLength=0,a.yaxis.tickFormatter=function(e){return v(e,i)},"number"!=typeof g.range&&null!==g.range&&(a.yaxis.min=g.range[0],a.yaxis.max=g.range[1]),$.plot(f,[j],a)
break
case"tsline":a.grid.markings=[{color:"#999",lineWidth:.5,yaxis:{from:0,to:0}}]
case"tsbar":a.yaxis.tickFormatter=function(e){return v(e,i)}
var s=VisualJS.width/r,o=[],u="01"
switch("number"!=typeof g.range&&null!==g.range&&(a.yaxis.min=g.range[0],a.yaxis.max=g.range[1]),VisualJS.ticks[0][1].length){case 4:if(30>s){for(var d=s>15?2:s>8?3:4,c=0;r>c;c++)o[c]=c%d?[E[c][0],""]:[E[c][0],E[c][1]]
a.xaxis.ticks=o}else a.xaxis.ticks=E
break
case 5:u="1"
case 6:if(35>s){for(var c=0;r>c;c++)o[c]=VisualJS.ticks[c][1].slice(4)!==u?[VisualJS.ticks[c][0],""]:[VisualJS.ticks[c][0],VisualJS.ticks[c][1].slice(0,4)],E[c][1]=J(VisualJS.ticks[c][1],VisualJS.id)
a.xaxis.ticks=o}else{for(var c=0;r>c;c++)E[c][1]=J(VisualJS.ticks[c][1],VisualJS.id)
a.xaxis.ticks=E}break
default:a.xaxis.ticks=E}$.plot(f,M,a)}$(f).UseTooltip(VisualJS.id),VisualJS.public[VisualJS.id].heading=H})()}}VisualJS.scripts.length&&"object"==typeof LazyLoad?LazyLoad.js(VisualJS.scripts,y):y()}}
if("function"!=typeof visual)var visual=VisualJS.load

/*
Copyright (c) 2014 Institut d'Estadistica de Catalunya (Idescat)
http://www.idescat.cat (https://github.com/idescat/visual)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

VisualJS.setup={ //v.0.10.0
	//Colors for maps and series
	colors: {
		map: {
			max: 100, //If not enough colors, legend is deceiving and it's better to remove it
			base: "#09111a"
		},
		series: ["#2b527b", "#a52a2a", "#008000", "#ffbf00", "#5959ff", "#ff5959", "#9acd32", "#af8d26"]
	},
	//Default options (They can be dynamically modified thru visual().)
	canvas: {
		unit : {
			label: "", 
			symbol: "",
			position: "end"
		},
		legend: true,
		grid: {
			border: 0, //grid border width
			shadow: 4, //line shadow width
			line: 2, //line width
			point: 1 //point radius
		},
		axis: { //show axes?
			x: true,
			y: true
		},
		dec: null, //Show only needed decimals (remove ending zeros) unless (recommended) valid dec has been specified by user
		autoheading: true,

		//Arrays are not accepted here. "bar", "tsline" and "tsbar" currently don't accept a number.
		range: {
			//Quantile. No filtering: 0
			cmap: 0.05, //Used in color assignation in maps

			//Multiplier. No filtering: 1
			rank: 1.02, //Increase area horizontally by 2% of the longest bar
			pyram: 1.02 //Increase area horizontally by 2% of the longest bar
		}
	},

	//Internationalization options
	i18n: {
		lang: "ca", //default lang when no lang is specified
		text: {
			dec: { //decimal separator
				ca: ",",
				es: ",",
				en:  "."
			},
			k: { //thousands separator
				ca: ".",
				es: ".",
				en:  ","
			},
			month: { //Month axis labels
				ca: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
				es:  ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
				en:  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
			},
			quarter: { //Quarter axis labels
				ca: ["I", "II", "III", "IV"],
				es:  ["I", "II", "III", "IV"],
				en:  ["Q1", "Q2", "Q3", "Q4"]
			},
			na: { //text in tooltip when value is not available 
				ca: "Valor no disponible",
				es: "Valor no disponible",
				en:  "Value not available"
			},
			oldbrowser: { //Warning message when IE<9 (maps)
				ca: "Per visualitzar el mapa cal un navegador m&eacute;s modern.",
				es: "Para visualizar el mapa es preciso un navegador m&aacute;s moderno.",
				en:  "To view the map you must use a modern browser."
			}
		}
	},

	//Classes and ids of elements created by visual
	id: "visual", //id to style the container
	clas: "visual", //class to style the container
	compareids: ["VisualJSleft", "VisualJSright"], //ids to style each VisualJS.compare containers
	tooltipid: "VisualJSTooltip", //id to style the tooltip
	nowrapclass: "VisualJSnw", //class to define blocks of wrappable content in the title
	canvasclass: "VisualJScanvas", //canvas container (Flot)
	areaclass: "VisualJSarea", //svg:g class (D3 maps)
	legendclass: "VisualJSlegend", //svg:g class (D3 maps)
	normal: "VisualJSnormal", //visualitzation's normal size class
	mini: "VisualJSmini", //visualitzation's small size class
	colorclassprefix: "c", //prefix for color class in maps: cnohover, c0, c1, c2...

	//Markup created by visual
	html: {
		heading: "h1",
		footer: "p" //"footer" element not supported by IE8
	},

	//Libraries: path and existence function
	main: { //Do not use relative paths for main files in production: they'll be relative to the path where VisualJS.iframe is executed.
		visual: "http://idescat.github.io/visual/visual.js",
		setup: "http://idescat.github.io/visual/visual.setup.js",
		lazy: "http://idescat.github.io/visual/lib/lazyload.js"
	},
	lib: {
		d3: {
			js: "http://idescat.github.io/visual/lib/d3.v3.js",
			exists: function(){ return typeof d3==="object"; }
		},
		jquery: {
			js: "http://idescat.github.io/visual/lib/jquery.1.8.3.js",
			exists: function(){ return typeof jQuery==="function"; },

			flot: {
				js: "http://idescat.github.io/visual/lib/jquery.flot.js",
				exists: function(){ return typeof jQuery.plot==="function"; },

				stack: {
					js: "http://idescat.github.io/visual/lib/jquery.flot.stack.js",
					exists: function(){ return typeof jQuery.plot.plugins==="object" && typeof jQuery.plot.plugins[0]==="object" && jQuery.plot.plugins[0].name==="stack";  }
				},
				orderbars: {
					js: "http://idescat.github.io/visual/lib/jquery.flot.orderbars.js",
					exists: function(){ return typeof jQuery.plot.plugins==="object" && typeof jQuery.plot.plugins[0]==="object" && jQuery.plot.plugins[0].name==="orderBars"; }
				},
				pyramid: {
					js: "http://idescat.github.io/visual/lib/jquery.flot.pyramid.js",
					exists: function(){ return typeof FlotPyramid==="object"; }
				},
				categories: {
					js: "http://idescat.github.io/visual/lib/jquery.flot.categories.js",
					exists: function(){ return typeof jQuery.plot.plugins==="object" && typeof jQuery.plot.plugins[0]==="object" && jQuery.plot.plugins[0].name==="categories"; }
				}
			}
		},
		maps: {
			js: "http://idescat.github.io/visual/maps/visual.maps.js",
			exists: function(){ return typeof VisualJS.func.colors==="function" && typeof VisualJS.func.legend==="function";}
		},
		excanvas: {
			js: "http://idescat.github.io/visual/lib/excanvas.js",
			exists: function(){ return typeof G_vmlCanvasManager!=="undefined"; }
		}
	},

	//Maps: path and existence function
	map: {
		mun: {
			js: "http://idescat.github.io/visual/maps/cat2013mun.js",
			exists: function(){ return typeof VisualJS.map.mun!=="undefined"; }
		},
		com: {
			js: "http://idescat.github.io/visual/maps/cat2013com.js",
			exists: function(){ return typeof VisualJS.map.com!=="undefined"; }
		},
		prov: {
			js: "http://idescat.github.io/visual/maps/cat2013prov.js",
			exists: function(){ return typeof VisualJS.map.prov!=="undefined"; }
		},
		usastates: {
			js: "http://idescat.github.io/visual/maps/usa2013states.js",
			exists: function(){ return typeof VisualJS.map.usastates!=="undefined"; }
		},
		com01: {
			js: "http://idescat.github.io/visual/maps/com012013mun.js",
			exists: function(){ return typeof VisualJS.map.com01!=="undefined"; }
		},
		com02: {
			js: "http://idescat.github.io/visual/maps/com022013mun.js",
			exists: function(){ return typeof VisualJS.map.com02!=="undefined"; }
		},
		com03: {
			js: "http://idescat.github.io/visual/maps/com032013mun.js",
			exists: function(){ return typeof VisualJS.map.com03!=="undefined"; }
		},
		com04: {
			js: "http://idescat.github.io/visual/maps/com042013mun.js",
			exists: function(){ return typeof VisualJS.map.com04!=="undefined"; }
		},
		com05: {
			js: "http://idescat.github.io/visual/maps/com052013mun.js",
			exists: function(){ return typeof VisualJS.map.com05!=="undefined"; }
		},
		com06: {
			js: "http://idescat.github.io/visual/maps/com062013mun.js",
			exists: function(){ return typeof VisualJS.map.com06!=="undefined"; }
		},
		com07: {
			js: "http://idescat.github.io/visual/maps/com072013mun.js",
			exists: function(){ return typeof VisualJS.map.com07!=="undefined"; }
		},
		com08: {
			js: "http://idescat.github.io/visual/maps/com082013mun.js",
			exists: function(){ return typeof VisualJS.map.com08!=="undefined"; }
		},
		com09: {
			js: "http://idescat.github.io/visual/maps/com092013mun.js",
			exists: function(){ return typeof VisualJS.map.com09!=="undefined"; }
		},
		com10: {
			js: "http://idescat.github.io/visual/maps/com102013mun.js",
			exists: function(){ return typeof VisualJS.map.com10!=="undefined"; }
		},
		com11: {
			js: "http://idescat.github.io/visual/maps/com112013mun.js",
			exists: function(){ return typeof VisualJS.map.com11!=="undefined"; }
		},
		com12: {
			js: "http://idescat.github.io/visual/maps/com122013mun.js",
			exists: function(){ return typeof VisualJS.map.com12!=="undefined"; }
		},
		com13: {
			js: "http://idescat.github.io/visual/maps/com132013mun.js",
			exists: function(){ return typeof VisualJS.map.com13!=="undefined"; }
		},
		com14: {
			js: "http://idescat.github.io/visual/maps/com142013mun.js",
			exists: function(){ return typeof VisualJS.map.com14!=="undefined"; }
		},
		com15: {
			js: "http://idescat.github.io/visual/maps/com152013mun.js",
			exists: function(){ return typeof VisualJS.map.com15!=="undefined"; }
		},
		com16: {
			js: "http://idescat.github.io/visual/maps/com162013mun.js",
			exists: function(){ return typeof VisualJS.map.com16!=="undefined"; }
		},
		com17: {
			js: "http://idescat.github.io/visual/maps/com172013mun.js",
			exists: function(){ return typeof VisualJS.map.com17!=="undefined"; }
		},
		com18: {
			js: "http://idescat.github.io/visual/maps/com182013mun.js",
			exists: function(){ return typeof VisualJS.map.com18!=="undefined"; }
		},
		com19: {
			js: "http://idescat.github.io/visual/maps/com192013mun.js",
			exists: function(){ return typeof VisualJS.map.com19!=="undefined"; }
		},		
		com20: {
			js: "http://idescat.github.io/visual/maps/com202013mun.js",
			exists: function(){ return typeof VisualJS.map.com20!=="undefined"; }
		},
		com21: {
			js: "http://idescat.github.io/visual/maps/com212013mun.js",
			exists: function(){ return typeof VisualJS.map.com21!=="undefined"; }
		},
		com22: {
			js: "http://idescat.github.io/visual/maps/com222013mun.js",
			exists: function(){ return typeof VisualJS.map.com22!=="undefined"; }
		},
		com23: {
			js: "http://idescat.github.io/visual/maps/com232013mun.js",
			exists: function(){ return typeof VisualJS.map.com23!=="undefined"; }
		},
		com24: {
			js: "http://idescat.github.io/visual/maps/com242013mun.js",
			exists: function(){ return typeof VisualJS.map.com24!=="undefined"; }
		},
		com25: {
			js: "http://idescat.github.io/visual/maps/com252013mun.js",
			exists: function(){ return typeof VisualJS.map.com25!=="undefined"; }
		},
		com26: {
			js: "http://idescat.github.io/visual/maps/com262013mun.js",
			exists: function(){ return typeof VisualJS.map.com26!=="undefined"; }
		},
		com27: {
			js: "http://idescat.github.io/visual/maps/com272013mun.js",
			exists: function(){ return typeof VisualJS.map.com27!=="undefined"; }
		},
		com28: {
			js: "http://idescat.github.io/visual/maps/com282013mun.js",
			exists: function(){ return typeof VisualJS.map.com28!=="undefined"; }
		},
		com29: {
			js: "http://idescat.github.io/visual/maps/com292013mun.js",
			exists: function(){ return typeof VisualJS.map.com29!=="undefined"; }
		},
		com30: {
			js: "http://idescat.github.io/visual/maps/com302013mun.js",
			exists: function(){ return typeof VisualJS.map.com30!=="undefined"; }
		},
		com31: {
			js: "http://idescat.github.io/visual/maps/com312013mun.js",
			exists: function(){ return typeof VisualJS.map.com31!=="undefined"; }
		},
		com32: {
			js: "http://idescat.github.io/visual/maps/com322013mun.js",
			exists: function(){ return typeof VisualJS.map.com32!=="undefined"; }
		},
		com33: {
			js: "http://idescat.github.io/visual/maps/com332013mun.js",
			exists: function(){ return typeof VisualJS.map.com33!=="undefined"; }
		},
		com34: {
			js: "http://idescat.github.io/visual/maps/com342013mun.js",
			exists: function(){ return typeof VisualJS.map.com34!=="undefined"; }
		},
		com35: {
			js: "http://idescat.github.io/visual/maps/com352013mun.js",
			exists: function(){ return typeof VisualJS.map.com35!=="undefined"; }
		},
		com36: {
			js: "http://idescat.github.io/visual/maps/com362013mun.js",
			exists: function(){ return typeof VisualJS.map.com36!=="undefined"; }
		},
		com37: {
			js: "http://idescat.github.io/visual/maps/com372013mun.js",
			exists: function(){ return typeof VisualJS.map.com37!=="undefined"; }
		},
		com38: {
			js: "http://idescat.github.io/visual/maps/com382013mun.js",
			exists: function(){ return typeof VisualJS.map.com38!=="undefined"; }
		},
		com39: {
			js: "http://idescat.github.io/visual/maps/com392013mun.js",
			exists: function(){ return typeof VisualJS.map.com39!=="undefined"; }
		},
		com40: {
			js: "http://idescat.github.io/visual/maps/com402013mun.js",
			exists: function(){ return typeof VisualJS.map.com40!=="undefined"; }
		},
		com41: {
			js: "http://idescat.github.io/visual/maps/com412013mun.js",
			exists: function(){ return typeof VisualJS.map.com41!=="undefined"; }
		},
		prov08: {
			js: "http://idescat.github.io/visual/maps/prov082013mun.js",
			exists: function(){ return typeof VisualJS.map.prov08!=="undefined"; }
		},
		prov17: {
			js: "http://idescat.github.io/visual/maps/prov172013mun.js",
			exists: function(){ return typeof VisualJS.map.prov17!=="undefined"; }
		},
		prov25: {
			js: "http://idescat.github.io/visual/maps/prov252013mun.js",
			exists: function(){ return typeof VisualJS.map.prov25!=="undefined"; }
		},
		prov43: {
			js: "http://idescat.github.io/visual/maps/prov432013mun.js",
			exists: function(){ return typeof VisualJS.map.prov43!=="undefined"; }
		},
		spainnuts2: {
			js: "http://idescat.github.io/visual/maps/spain2014nuts2.js",
			exists: function(){ return typeof VisualJS.map.spainnuts2!=="undefined"; }
		},
		spainnuts3: {
			js: "http://idescat.github.io/visual/maps/spain2014nuts3.js",
			exists: function(){ return typeof VisualJS.map.spainnuts3!=="undefined"; }
		},
		norwaymun: {
			js: "http://idescat.github.io/visual/maps/norway2013mun.js",
			exists: function(){ return typeof VisualJS.map.norwaymun!=="undefined"; }
		}		
	},

	//IE check
	func: {
		old: function(ie) { return RegExp("(^|\\s)lt-"+ie+"(\\s|$)").test(document.documentElement.className); }
	},

	//Attach event listener? 0.10.*
	listen: false, 

	//Margins and paddings used in container
	margin: 10,
	padding: {
		w: 30,
		h: 45
	},
	//VisualJS.compare separator width
	separator: 0
};
/*
* myFocus JavaScript Library v2.0.4
* Open source under the BSD & GPL License
* 
* Copyright 2016, Koen Lee
* http://cosmissy.com/
* 
* Date: 2016/10/28
*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(6(){7 $k=6(k){9 X k===\'24\'?1d.4q(k):k},$D=6(D,G){9($k(G)||1d).4d(D)},$3q=6(D,G){9 $3b(D,G,\'D\')},$1i=6(z,G){7 12=$D(\'*\',G),J=[];L(7 i=0,l=12.S;i<l;i++){8(2z(z,12[i])){J.H(12[i])}}9 J},$3t=6(z,G){9 $3b(z,G)},$3b=6(1v,G,u){7 J=[],f=u===\'D\'?$D:$1i,12=f(1v,G),y=12.S;L(7 i=0;i<y;i++){8(12[i].G===G)J.H(12[i]);i+=f(1v,12[i]).S}9 J},2z=6(z,3V){9 3R(\'/(^|\\\\s)\'+z+\'(\\\\s|$)/\').2x(3V.z)};q=6(1j){9 1y q.2k(1j)};q.W=6(){7 1W=48,y=1W.S;8(3===q){8(y===1)1Y=q,i=0;P 1Y=1W[0],i=1}P{1Y=3,i=0}L(i;i<y;i++){L(7 p 26 1W[i]){1Y[p]=1W[i][p]}}9 1Y};q.W({2s:{Q:\'4m\',2V:\'2J\',3L:\'33\',1t:E,2N:E,B:4,1E:0,4g:E,1Q:2C,32:K,2M:1z,2P:\'\',3E:E},2k:6(1j){7 e=1j,y=e&&e.S;8(e 4o q.2k)9 e;3.S=0;8(!e||(e.4r&&!y)||(e.3j&&!y)){1N.1P.H.V(3)}P 8(e.3E){e=$k(e.k);1N.1P.H.V(3,e);3.1j=1j;3.1K=$D(\'18\',$D(\'1q\',e)[0]);3.23=3.1K.S}P 8(y){L(7 i=0;i<y;i++)1N.1P.H.V(3,e[i])}P{1N.1P.H.V(3,e)}9 3},f:{3K:[].3K},Q:{},2y:{}});q.2k.1P=q.f;q.f.W=q.Q.W=q.2y.W=q.W;q.f.W({29:6(1v){7 1b=3,1f=K,$=q;7 J=3.4h(1v);8(3.S)L(7 i=0,y=J.S;i<y;i++){7 1c=[],s=J[i];3m(s.4K(0)){1C\'>\':1f=E;1e;1C\'.\':7 1g=s.2u(1);7 f=1f?$3t:$1i;$(1b).1S(6(){1c=1c.4J(f(1g,3))});1f=K;1e;1C\'#\':7 k=s.2u(1),e=$k(k);8(e)1c.H($k(k));1f=K;1e;33:7 f=1f?$3q:$D,2T=s.4N(\'.\');7 D=2T[0],1g=2T[1];$(1b).1S(6(){7 J=f(D,3);L(7 i=0,y=J.S;i<y;i++){8(1g&&!2z(1g,J[i]))31;1c.H(J[i])}});1f=K}8(!1f)1b=1c}9 $(1b)},1b:6(){9 q(3[0].G)},M:6(s){8(X s!==\'2G\'){3[0].11=s;9 3}P 9 3[0].11},1S:6(f){7 12=3;L(7 i=0,y=12.S;i<y;i++){7 1O=f.V(12[i],i);8(1O===K)1e;8(1O===E)31}9 3},4S:6(n){9 q(3[n])},4h:6(1v){7 3W=/(([^[\\]\'"]+)+\\]|\\\\.|([^ >+~,(\\[\\\\]+)+|[>+~])(\\s*,\\s*)?/g;7 2A=[],m;4Q((m=3W.4H(1v))!==1z){2A.H(m[1])}9 2A},1t:6(M){7 o=3[0],e=1d.1L(\'19\');e.11=M;7 1t=e.3D;o.G.4G(1t,o);1t.2d(o);9 3},3k:6(M){7 1b=3[0];7 e=1d.1L(\'19\');e.11=M;7 1c=e.4x[0];1b.2d(1c);9 q(1c)},20:6(z,u){7 18=3.1K,n=3.23;7 2j=[\'<19 1i="\'+z+\'"><1q>\'];L(7 i=0;i<n;i++){7 O=$D(\'O\',18[i])[0],M;3m(u){1C\'2t\':M=\'<a>\'+(i+1)+\'</a><b></b>\';1e;1C\'22\':M=O?18[i].11.1J(/\\<O(.|\\n|\\r)*?\\>/i,O.3v)+\'<p>\'+O.1r("1p")+\'</p><b></b>\':\'\';1e;1C\'3a\':M=O?\'<a><O U=\'+(O.1r("2U")||O.U)+\' /></a><b></b>\':\'\';1e;33:M=\'<a></a><b></b>\'}2j.H(\'<18>\'+M+\'</18>\')}2j.H(\'</1q></19>\');9 3.3k(2j.1A(\'\'))},4C:6(z){9 3.20(z||\'2t\',\'2t\')},4B:6(z){9 3.20(z||\'22\',\'22\')},4D:6(z){9 3.20(z||\'3a\',\'3a\')},4f:6(){7 o=3[0];8(o)o.G.4E(o)},4F:6(n){7 n=n||2,21=3[0].G,M=21.11,s=[];L(7 i=0;i<n;i++)s.H(M);21.11=s.1A(\'\');9 q(21).29(3[0].4A)}});q.f.W({j:6(j){7 o=3[0],v,J=[\';\'],1x=q.1x;8(!o)9 3;8(X j===\'24\'){8(j===\'1h\')j=1x?\'4z\':\'4u\';8(!(v=o.15[j]))v=(1x?o.4t:4v(o,\'\'))[j];8(j===\'16\'&&v===2G)v=1;8(v===\'2N\'&&(j===\'I\'||j===\'C\'))v=o[\'4w\'+j.1J(/\\w/i,6(a){9 a.4y()})];7 2S=3h(v);9 3o(2S)?v:2S}P{L(7 p 26 j){8(X j[p]===\'28\'&&!3.3P[p])j[p]+=\'T\';J.H(p.1J(/([A-Z])/g,\'-$1\')+\':\'+j[p]+\';\');8(p===\'16\')J.H(\'3i:47(16=\'+j[p]*2C+\')\')}o.15.2m+=J.1A(\'\');9 3}},4b:6(v){3[0].15.16=v,3[0].15.3i=\'47(16=\'+v*2C+\')\'},45:6(v,41,m){3[0].15[41]=2q[m](v)+\'T\'},2E:6(z){3[0].z+=\' \'+z;9 3},3J:6(z){7 o=3[0],1g=z&&o.z,3Q="/\\\\s*\\\\b"+z+"\\\\b/g";o.z=1g?1g.1J(3R(3Q),\'\'):\'\';9 3},3P:{4P:E,4R:E,4s:E,16:E,4T:E,4O:E,4I:E,4L:E}});q.f.W({27:6(1B,v,B,u,2X,3g){7 $o=3,o=$o[0],3M=1B===\'16\',2K=K;2X&&2X.V(o);8(X v===\'24\'){8(/^[+-]=\\d+/.2x(v))v=v.1J(\'=\',\'\'),2K=E;v=3h(v)}7 2I=$o.j(1B),b=3o(2I)?0:2I,c=2K?v:v-b,d=B,e=3.3p[u],m=c>0?\'4M\':\'4U\',1H=\'3w\'+1B,2D=$o[3M?\'4b\':\'45\'],42=(1y 3S)*1;o[1H]&&25(o[1H]);o[1H]=2O(6(){7 t=(1y 3S)-42;8(t<=d){2D.V($o,e(t,b,c,d),1B,m)}P{2D.V($o,b+c,1B,m);25(o[1H]),o[1H]=1z;3g&&3g.V(o)}},13);9 3},4n:6(B,u,f){8(X B!==\'28\')f=B,B=3u;8(X u===\'6\')f=u,u=\'\';3.27(\'16\',1,B,u||\'3c\',6(){q(3).j({37:\'4l\',16:0})},f);9 3},4p:6(B,u,f){8(X B!==\'28\')f=B,B=3u;8(X u===\'6\')f=u,u=\'\';3.27(\'16\',0,B,u||\'3c\',1z,6(){3.15.37=\'3e\';f&&f.V(3)});9 3},4j:6(1T,B,u,f){8(X B!==\'28\')f=B,B=5b;8(X u===\'6\')f=u,u=\'\';L(7 p 26 1T)3.27(p,1T[p],B,u||\'2r\',1z,f);9 3},5N:6(){7 o=3[0];L(7 p 26 o)8(p.44(\'3w\')!==-1)o[p]&&25(o[p]);9 3},3p:{3c:6(t,b,c,d){9 c*t/d+b},5M:6(t,b,c,d){9-c/2*(2q.5L(2q.5O*t/d)-1)+b},5P:6(t,b,c,d){9 c*(t/=d)*t*t*t+b},2r:6(t,b,c,d){9-c*((t=t/d-1)*t*t*t-1)+b},5R:6(t,b,c,d){9((t/=d/2)<1)?(c/2*t*t*t*t+b):(-c/2*((t-=2)*t*t*t-2)+b)}}});q.f.W({1m:6(u,f){q.30(3[0],u,f);9 3},5Q:6(2v,2L,1D){7 x=3,p=x.1j,n=x.23,t=p.B*3X,1D=1D||K,1h=q(x.1K).j(\'1h\'),1I=1h===\'1R\',2Y=1I?\'1R\':\'1s\',1X=1I?p.I:p.C,1F=0,R=p.1E;x.29(\'.3r\').4f();x.17=6(v){2v&&2v(1F,n);R=X v===\'24\'?1F+5K(v.1J(\'=\',\'\')):v;8(R<=-1){R=n-1;8(1D)x.1K[0].G.15[2Y]=-n*1X+\'T\'}8(R>=n){8(!1D)R=0;8(R>=2*n){x.1K[0].G.15[2Y]=-(n-1)*1X+\'T\';R=n}}8(1D&&1F>=n&&R<n)R+=n;2L&&2L(R,n,1F);x.3G=1F=R;p.2M&&p.2M.V(x,R)};2o{x.17(R)}2l(e){2c(6(){x.17(R)},0)};8(p.2N&&n>1){x.1Z=2O(6(){x.17(\'+=1\')},t);x.1m(\'2a\',6(){25(x.1Z);x.1Z=\'3B\'}).1m(\'2Q\',6(){8(!x.5J&&x.1Z===\'3B\')x.1Z=2O(6(){x.17(\'+=1\')},t)})}x.29(\'a\').1S(6(){3.5D=6(){3.5C()}})},5B:6($N,1T){7 x=3,p=x.1j,u=p.2V,1Q=p.1Q,2H=1T||{},2f=2H.3F||p.3F;7 17=6(){8(3.1E!==x.3G&&!2H.5E){x.17(3.1E);9 K}};$N.1S(6(i){3.1E=i;7 o=3,$o=q(o);8(u===\'2J\'){$o.1m(\'2a\',6(){$o.2E(\'3H\')}).1m(\'2Q\',6(){$o.3J(\'3H\')}).1m(\'2J\',17)}P 8(u===\'2a\'){$o.1m(\'2a\',6(){8(1Q===0)17.V(o);P $N.2W=2c(6(){17.V(o)},1Q)}).1m(\'2Q\',6(){$N.2W&&5F($N.2W)})}P{5T(\'q 5I 5H(2V) : \\"\'+u+\'\\"\');9 K}});8(2f){7 1h=$N.j(\'1h\'),1I=1h===\'1R\'||1h===\'5G\';$N.2e=1I?\'1R\':\'1s\';$N.n=x.23;$N.2Z=2f;$N.1o=p.1E;$N.1V=$N.1o+2f-1;$N.1X=$N.j(1I?\'I\':\'C\');$N.49=$N.1b()}},5S:6(i,B){7 n=3.n,2e=3.2e,$1q=3.49,j={};8(i>=3.1V){3.1V=i<n-1?i+1:i;3.1o=3.1V-3.2Z+1}P 8(i<=3.1o){3.1o=i>0?i-1:0;3.1V=3.1o+3.2Z-1}j[2e]=-3.1o*3.1X;$1q.4j(j,B||62,\'2r\');9 3}});q.W({3l:6(p,1a){7 F=3,k=p.k,14=F.3n(k);p.Q=p.Q||F.2s.Q;p.1u=p.Q+\'63\'+k;F.30(2R,\'64\',6(){F.2w=E});F.3T(p,6(){p=F.W({},F.2s,F.2y[p.Q],p);F.4k(p,6(){7 $o=F($k(k));p.$o=$o;p.2P&&F.3O(p);p.2h=$1i(\'2i\',$o[0])[0];p.I=p.I||$o.j(\'I\'),p.C=p.C||$o.j(\'C\');F.4c(p,14);$o.2E(p.Q+\' \'+p.1u);F.3C(p,6(1l){8(p.32)F.3U(p,1l);F.Q[p.Q](p,F);1a&&1a()})})})},2w:K,3T:6(p,1a){8(3.Q[p.Q]){1a();9}7 1w=3.3Z()+\'Q/\'+p.Q;7 Y=1d.1L("4a"),j=1d.1L("4V"),U=1w+\'.Y\',1U=1w+\'.j\';Y.u="1p/60",Y.U=U;j.61="5U",j.1U=1U;7 1M=$D(\'1M\')[0],2b=K,3Y=10*3X;1M.2d(j);1M.2d(Y);Y.3d=Y.40=6(){8(2b)9;8(!Y.2F||Y.2F=="5W"||Y.2F=="5Z"){2b=E;1a();Y.3d=Y.40=1z}};2c(6(){8(!2b)$k(p.k).11=\'加载失败: \'+U},3Y)},3Z:6(){7 1w=\'\';7 2B=$D("4a");L(7 i=0,y=2B.S;i<y;i++){7 U=2B[i].U;8(U&&/5V([\\.-].*)?\\.Y/i.2x(U)){1w=U;1e}};9 1w.2u(0,1w.5Y(\'/\')+1)},4k:6(p,f){7 F=3;(6(){2o{8(F.1x)$k(p.k).5X();P $k(p.k).11;f()}2l(e){8(!F.2w)2c(48.5z,0)}})()},3C:6(p,1a){7 43=p.4g;7 59=$k(p.k),O=$D(\'O\',p.2h),y=O.S,35=0,34=K,1l=1y 1N(y);8(!43||!y){1a();9}L(7 i=0;i<y;i++){7 2g=1y 58();2g.i=i;2g.3d=6(){35+=1;1l[3.i]={w:3.I,h:3.C};8(35==y&&!34){34=E,1a(1l)}};2g.U=O[i].U}},3U:6(p,1l){7 36=$D(\'O\',p.2h),y=36.S,1G=p.I,1k=p.C;L(7 i=0;i<y;i++){7 w=1l[i].w,h=1l[i].h;8(w==1G&&h==1k)31;8(w<1G&&h<1k){7 I=w,C=h,1s=(1k-C)/2}P 8(w/h>=1G/1k){7 I=1G,C=1G/w*h,1s=(1k-C)/2}P{7 I=1k/h*w,C=1k,1s=0}36[i].15.2m=\';I:\'+I+\'T;C:\'+C+\'T;46-1s:\'+1s+\'T;\'}},4c:6(p,14){7 j=[],w=p.I||\'\',h=p.C||\'\';8(p.2h){j.H(\'.\'+p.1u+\' *{46:0;57:0;5a:0;5A-15:3e;}.\'+p.1u+\'{3N:3x;I:\'+w+\'T;C:\'+h+\'T;38:39;5e:5d/1.5 5c;1p-3s:1R;56:#55;4Z:4Y!3y;}.\'+p.1u+\' .2i{3N:3x;I:\'+w+\'T;C:\'+h+\'T;38:39;}.\'+p.1u+\' .22 18{I:\'+w+\'T;C:\'+p.3L+\'T!3y;38:39;}\');8(p.1t)p.$o.1t(\'<19 1i="\'+p.Q+\'4X"></19>\');8(p.32)j.H(\'.\'+p.1u+\' .2i 18{1p-3s:4W;I:\'+w+\'T;C:\'+h+\'T;}\')}2o{14.4e.2m=j.1A(\'\')}2l(e){14.11=j.1A(\'\')}},3n:6(k){7 s=\'#\'+k+\' *{37:3e}\',14=1d.1L(\'15\');14.u=\'1p/j\';2o{14.4e.2m=s}2l(e){14.11=s}7 3f=$D(\'1M\',1d)[0];3f.50(14,3f.3D);9 14}});q.W({1x:!!(1d.51&&54.53.44(\'52\')===-1),30:6(o,u,f){7 2n=3.1x,e=2n?\'5f\':\'5g\',t=(2n?\'5t\':\'\')+u;o[e](t,6(e){7 e=e||2R.5s,1O=f.V(o,e);8(1O===K){8(2n)e.5r=E,e.5u=K;P e.5v(),e.5y()}},K)},3O:6(p){7 2p=2R.3I?1y 3I():1y 5x("5w.5q");2p.5p("5j",p.2P+"?"+2q.5i(),K);2p.5h(1z);3.3A(2p.5k,p)},3A:6(3z,p){7 1n=3z.5l.4d("3j"),y=1n.S;7 M=[\'<19 1i="3r"></19><19 1i="2i"><1q>\'];L(7 i=0;i<y;i++){M.H(\'<18><a 1U="\'+1n[i].1r(\'1U\')+\'"><O U="\'+1n[i].1r(\'5o\')+\'" 2U="\'+1n[i].1r(\'2U\')+\'" 3v="\'+1n[i].1r(\'5n\')+\'" 1p="\'+1n[i].1r(\'1p\')+\'" /></a></18>\')}M.H(\'</1q></19>\');p.$o[0].11=M.1A(\'\')}});8(X 4i!==\'2G\'){4i.f.W({q:6(p,f){8(!p)p={};p.k=3[0].k;8(!p.k)p.k=3[0].k=\'5m\';q.3l(p,f)}})}})();',62,377,'|||this|||function|var|if|return||||||fn||||css|id||||||myFocus||||type|value||this_|len|className||time|height|tag|true||parentNode|push|width|arr|false|for|html|btnList|img|else|pattern|indexCurrent|length|px|src|call|extend|typeof|js|||innerHTML|doms||oStyle|style|opacity|run|li|div|callback|parent|dom|document|break|isChild|cls|float|class|settings|boxHeight|arrSize|bind|items|showStart|text|ul|getAttribute|top|wrap|__clsName|selector|path|isIE|new|null|join|attr|case|seamless|index|indexLast|boxWidth|timerId|isLevel|replace|HTMLUList|createElement|head|Array|flag|prototype|delay|left|each|params|href|showEnd|arg|distance|dest|runTimer|addList|pNode|__txt|HTMLUListLength|string|clearInterval|in|animate|number|find|mouseover|isSuccess|setTimeout|appendChild|dir|tsNum|IMG|pic|__pic|strArr|constr|catch|cssText|ie|try|xmlhttp|Math|easeOut|defConfig|__num|slice|funcLastFrame|onloadWindow|test|config|hasClass|parts|scripts|100|setProperty|addClass|readyState|undefined|par|oriVal|click|diffValue|funcCurrentFrame|onChange|auto|setInterval|xmlFile|mouseout|window|numVal|sArr|thumb|trigger|mouseoverTimer|funcBefore|direction|showNum|addEvent|continue|autoZoom|default|done|count|imgs|display|overflow|hidden|__thumb|getChild|linear|onload|none|oHead|funcAfter|parseFloat|filter|item|addHtml|set|switch|initBaseCSS|isNaN|easing|tag_|__loading|align|class_|400|alt|__myFocusTimer__|relative|important|xml|appendXML|pause|getIMGReady|firstChild|__focusConstr__|thumbShowNum|runIndex|hover|XMLHttpRequest|removeClass|splice|txtHeight|isOpacity|position|loadXML|cssNumber|reg|eval|Date|loadPattern|zoomIMG|node|chunker|1000|timeout|getFilePath|onreadystatechange|prop|origTime|isShow|indexOf|setAnimateStyle|margin|alpha|arguments|slideBody|script|setOpacity|initCSS|getElementsByTagName|styleSheet|remove|loadingShow|parseSelector|jQuery|slide|getBoxReady|block|mF_fancy|fadeIn|instanceof|fadeOut|getElementById|sort|lineHeight|currentStyle|cssFloat|getComputedStyle|offset|childNodes|toUpperCase|styleFloat|nodeName|addListTxt|addListNum|addListThumb|removeChild|repeat|replaceChild|exec|zIndex|concat|charAt|zoom|ceil|split|widows|fillOpacity|while|fontWeight|eq|orphans|floor|link|center|_wrap|visible|visibility|insertBefore|all|Opera|userAgent|navigator|fff|background|padding|Image|box|border|800|Verdana|12px|font|attachEvent|addEventListener|send|random|GET|responseXML|documentElement|mF__ID__|title|image|open|XMLDOM|cancelBubble|event|on|returnValue|stopPropagation|Microsoft|ActiveXObject|preventDefault|callee|list|bindControl|blur|onfocus|isRunning|clearTimeout|right|Setting|Error|isStop|parseInt|cos|swing|stop|PI|easeIn|play|easeInOut|scrollTo|alert|stylesheet|myfocus|loaded|doScroll|lastIndexOf|complete|javascript|rel|500|_|load'.split('|'),0,{}))

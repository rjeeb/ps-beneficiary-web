$wnd.app.runAsyncCallback2("var AE='Error parsing JSON: ',CE='com.progressoft.workshop.layout.client.ui.views',DE='contentDiv',EE='[data-element=';function gb(b){var c=ib();var d=b.replace(/[\\xad\\u0600-\\u0603\\u06dd\\u070f\\u17b4\\u17b5\\u200b-\\u200f\\u2028-\\u202e\\u2060-\\u2064\\u206a-\\u206f\\ufeff\\ufff9-\\ufffb]/g,function(a){return fb(a,c)});return d}\nem(319,1,{});_.M=function Qd(){return null};_.N=function Rd(){return null};_.O=function Sd(){return null};_.P=function Td(){return null};_.Q=function Ud(){return null};em(105,319,{});_.M=function ie(){return this};function me(a){w(this);this.g=!a?null:F(a,a.v());this.f=a;B(this);this.w()}\nem(73,4,iD,me);em(256,319,{});_.N=function re(){if(this!=ne){return null}return this};em(39,319,{39:1});_.O=function ye(){return this};em(30,319,{30:1});_.P=function Ke(){return this};function Ue(b,c){var d;if(c){try{d=JSON.parse(b)}catch(a){return We(AE+a)}}else{b=gb(b);try{d=eval('('+b+')')}catch(a){return We(AE+a)}}var e=Ne[typeof d];return e?e(d):Xe(typeof d)}\nfunction Ve(b){Oe();var c;if(b==null){throw Pl(new Nt)}if(b.length==0){throw Pl(new st('empty argument'))}try{return Ue(b,false)}catch(a){a=Ol(a);if($f(a,19)){c=a;throw Pl(new me(c))}else throw Pl(a)}}\nfunction We(a){throw Pl(new le(a))}\nem(49,319,{49:1});_.Q=function af(){return this};function Am(a){if(a==null){throw Pl(new Ot('html is null'))}this.a=a}\nem(59,1,{59:1,332:1,3:1},Am);_.r=function Bm(a){if(!$f(a,59)){return false}return Vt(this.a,Tf(Tf(a,332),59).a)};_.s=function Cm(){return lC(this.a)};var jh=$s('com.google.gwt.safehtml.shared','OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml',59);em(148,1,{});_.D=function _n(){wn();Bo((Tf(this.a,330),new ps))};function ao(){}\nem(74,1,{74:1},ao);var zh=$s(VD,'DynamicServiceRoot',74);function eo(){eo=fm;co=new ao}\nvar co;function fo(){}\nem(279,1,{},fo);_.bb=function go(a){return eo(),eo(),true};var Ah=$s(VD,'ServiceRootMatcher/lambda$2$Type',279);function ko(){ko=fm;jo=UC((Us(Eh),Eh.j))}\nfunction lo(a,b){xn((wn(),a),b)}\nfunction mo(a){a.b=a.c;a.b.db();return a}\nfunction no(a){a.d=(wn(),Vq(Tf(vn.a,287),Qq(Tf(rn.a,108),(Us(fj),fj.b))));a.b=a.a}\nem(137,1,{});var jo;var Eh=$s(XD,'BaseClientPresenter',137);function oo(){}\nem(209,1,{},oo);_.db=function po(){WC((ko(),jo),'Presenter '+fj+' Have already been initialized.')};var Ch=$s(XD,'BaseClientPresenter/lambda$0$Type',209);function qo(a){this.a=a}\nem(210,1,{},qo);_.db=function ro(){no(this.a)};var Dh=$s(XD,'BaseClientPresenter/lambda$1$Type',210);function so(a){!a.c&&(a.c=mo(new bs));return a.c}\nfunction wo(a){O.call(this,a)}\nem(85,4,iD,wo);var Hh=$s(XD,'PresentersRepository/PresenterNotFoundException',85);function xo(a){!a.b&&(a.b=new rs);return a.b}\nfunction zo(a){O.call(this,a)}\nem(165,4,iD,zo);var Kh=$s(YD,'ViewsRepository/ViewNotFoundException',165);function Bo(a){if(!r(a.e,a.d))throw Pl(new No('Request have already been sent'));a.e.eb(new Mo)}\nfunction Co(){throw Pl(new No('This request have already been completed!.'))}\nem(139,1,{});var Nh=$s(ZD,'BaseRequest',139);function Do(a){this.a=a}\nem(211,1,{},Do);_.eb=function Eo(a){Io(this.a)};var Lh=$s(ZD,'BaseRequest/lambda$0$Type',211);function Fo(){}\nem(212,1,{},Fo);_.eb=function Go(a){Co()};var Mh=$s(ZD,'BaseRequest/lambda$1$Type',212);function Ho(a){as(Rq(Tf((wn(),rn).a,108),or(Tf(sn.a,286),a.c).a));a.e=a.b}\nfunction Io(a){a.e=a.a;Tf((wn(),kn).a,291).fb(a)}\nem(140,139,{});var Ph=$s(ZD,'ClientRequest',140);function Jo(a){this.a=a}\nem(213,1,{},Jo);_.eb=function Ko(a){Ho(this.a)};var Oh=$s(ZD,'ClientRequest/lambda$0$Type',213);function Lo(a){!a.a&&(a.a=new es);return a.a}\nfunction No(a){O.call(this,a)}\nem(89,4,iD,No);var Sh=$s(ZD,'Request/InvalidRequestState',89);function So(a){O.call(this,a)}\nem(171,4,iD,So);var Vh=$s(ZD,'RequestRestSendersRepository/SenderNotFoundException',171);function Uo(a){O.call(this,a)}\nem(160,4,iD,Uo);var Xh=$s(ZD,'RequestsRepository/RequestKeyNotFoundException',160);function Vo(){N.call(this)}\nem(263,4,iD,Vo);var Zh=$s('com.progressoft.brix.domino.api.shared.history','HistoryToken/TokenCannotBeNullException',263);function Xo(a){if(a==null)return null;return a}\nfunction $o(a){var b;b=a.P();if(!b){throw Pl(new AC('Expected a json object, but was given: null'))}return b}\nem(324,1,mD);var bi=$s('com.progressoft.brix.domino.api.shared.request','ServerResponse',324);em(68,1,bE);_.D=function mp(){this.a.D()};em(323,321,{});_.T=function yp(){return wp};var ni=$s(cE,'ServerFailedRequestGwtEvent',323);function zp(a){Pp((Tf((wn(),nn).a,111),new Cp(a)))}\nfunction Ap(){xp();wn()}\nem(106,323,{},Ap);_.S=function Bp(a){Tf(a,110);null.$b()};var mi=$s(cE,'ServerFailedRequestEvent',106);function Cp(a){this.a=a}\nem(276,1,{},Cp);_.cb=function Dp(){return this.a};var li=$s(cE,'ServerFailedRequestEvent/GWTRequestEvent',276);em(325,321,{});_.T=function Gp(){return Ep};var qi=$s(cE,'ServerSuccessRequestGwtEvent',325);function Hp(a){Pp((Tf((wn(),nn).a,111),new Kp(a)))}\nfunction Ip(){Fp();wn()}\nem(283,325,{},Ip);_.S=function Jp(a){Tf(a,110);null.$b()};var pi=$s(cE,'ServerSuccessRequestEvent',283);function Kp(a){this.a=a}\nem(284,1,{},Kp);_.cb=function Lp(){return this.a};var oi=$s(cE,'ServerSuccessRequestEvent/GWTRequestEvent',284);function cq(a){new pq(a)}\nem(173,1,{},cq);var wi=$s(eE,'StateHistory/DominoHistoryState',173);em(176,1,{});_.D=function lq(){null.$b(new cq(this.a))};function mq(a,b){if(b==null)return mq(a,lD);return Tf(tB(uB(ow(bu(bu(bu(_t(b,'!',''),'\\\\?',0)[0],'\\\\#',0)[0],'/',0)),new sq),SA(new qq,new _A,new jB,lf(ef(el,1),pD,23,0,[(WA(),UA)]))),9)}\nfunction nq(a){if(a.indexOf('?')==-1)return new Rx;return Tf(tB(xB(ow(bu(bu(bu(a,'\\\\?',0)[1],'\\\\#',0)[0],'&',0)),new uq),SA(new dB,new kB,new mB,lf(ef(el,1),pD,23,0,[(WA(),UA)]))),31)}\nfunction oq(a){if(a.indexOf('#')!=-1)return bu(a,'\\\\#',0)[1];return ''}\nfunction pq(a){this.a=new Hy;this.b=new Rx;if(a==null)throw Pl(new Vo);qu(this.a,mq(this,a));Cu(this.b,nq(a));oq(a)}\nem(264,1,{},pq);var Ei=$s(eE,'StateHistoryToken',264);function qq(){}\nem(266,1,{},qq);_.hb=function rq(){return new Hy};var Bi=$s(eE,'StateHistoryToken/0methodref$ctor$Type',266);function sq(){}\nem(265,1,{},sq);_.bb=function tq(a){return Yf(a).length!=0};var Ci=$s(eE,'StateHistoryToken/lambda$5$Type',265);function uq(){}\nem(267,1,{},uq);_.gb=function vq(a){return bu(Yf(a),'=',0)};var Di=$s(eE,'StateHistoryToken/lambda$6$Type',267);function Qq(a,b){if(Pu(a.a,b))return Yf(Ou(a.a,b));throw Pl(new wo(b))}\nfunction Rq(a,b){if(Pu(a.b,b))return so(Tf(Ou(a.b,b),35));throw Pl(new wo(b))}\nfunction Vq(a,b){if(Pu(a.a,b))return xo(Tf(Ou(a.a,b),55));throw Pl(new zo(b))}\nem(153,1,iE);_.fb=function br(a){Gb(1,new cr(a))};function fr(a,b){a.a=b}\nfunction lr(a,b){if(Mu(a.a,b))return Lo(Tf(Nu(a.a,b),66));throw Pl(new So(b))}\nfunction or(a,b){if(Pu(a.a,b))return Tf(Ou(a.a,b),46);throw Pl(new Uo('Request Key ['+b+']'))}\nfunction ur(a,b){wn();Gb(2,new kp((Tf(jn.a,109),new wr(a,b))))}\nfunction wr(a,b){this.b=a;this.a=b}\nem(196,1,{},wr);_.W=function xr(a){VC((tr(),sr),BE+this.a+']',a)};_.D=function yr(){var a;fr(this.b.a,null.$b());wn();ds((a=lr(Tf(tn.a,289),null.$b().$b()),null.$b(),a))};var Ui=$s(jE,'RequestAsyncRunner/RequestAsyncTask',196);function zr(a,b){ur(a.a,b)}\nem(155,1,iE);_.fb=function Br(a){zr(this,ig(a))};function _r(){_r=fm;ko();$r=UC((Us(fj),fj.j))}\nfunction as(a){WC($r,(Us(fj),'Main context received at presenter '+fj.g));qs(a.d);lo(qj,new cs)}\nfunction bs(){_r();this.a=new oo;this.c=new qo(this)}\nem(138,137,{},bs);var $r;var qj=at('com.progressoft.workshop.layout.shared.extension','LayoutExtensionPoint');function cs(){}\nem(208,1,{290:1},cs);var ej=$s(lE,'DefaultLayoutPresenter/lambda$0$Type',208);function ds(a){var b;ks(a.a,new KC((eo(),b=(wn(),Tf(Tf(mn.a,77),44).b),Tf(ez(vB(uB(new zB(null,new Bz(b,16)),new fo)),co),74),eo(),wn(),Tf(Tf(mn.a,77),44).a)));js(a.a,new fs)}\nfunction es(){this.a=new ls}\nem(274,1,{},es);var kj=$s(mE,'LayoutServerRequestSender',274);function fs(){}\nem(275,1,{},fs);_.jb=function hs(a,b){Hp(new Ip)};_.ib=function gs(a,b){zp(new Ap)};var hj=$s(mE,'LayoutServerRequestSender/1',275);function is(a){var b;if(!a.a){b=(uC(),uC(),tC);a.a=new KC(b)}return a.a}\nfunction js(b,c){var d;d=IC(JC(is(b),'LayoutRequest'));Cd(d.b,'Accept',gE);Cd(d.b,yD,gE);DC(d,(uC(),oe(),oe(),ne));try{EC(d,new ns(d,c,d))}catch(a){a=Ol(a);if($f(a,22)){zp(new Ap)}else throw Pl(a)}}\nfunction ks(a,b){a.a=b}\nfunction ls(){}\nem(277,1,{},ls);_.a=null;var jj=$s(mE,'LayoutServerRequestSender_LayoutServerRequestService_Generated_RestServiceProxy_',277);function ms(b){var c;try{return us((Oe(),Ve(b.a.d.a.responseText)))}catch(a){a=Ol(a);if($f(a,5)){c=a;throw Pl(new NC(c))}else throw Pl(a)}}\nfunction ns(a,b,c){this.a=c;Nq.call(this,a,b)}\nem(278,99,{},ns);_.kb=function os(){return ms(this)};var ij=$s(mE,'LayoutServerRequestSender_LayoutServerRequestService_Generated_RestServiceProxy_/1',278);function ps(){wn();this.d=new Do(this);this.b=new Fo;this.c=(Us(mj),mj.b);this.e=this.d;this.a=new Jo(this)}\nem(141,140,{},ps);function qs(a){(Ls(),Js).body.appendChild(a.a.a)}\nfunction rs(){this.a=new ss}\nem(281,1,{},rs);var nj=$s(CE,'DefaultLayoutView',281);em(326,1,{});var oj=$s(CE,'Layout',326);function ss(){var a;this.a=Xf((Ls(),Js).createElement('div'),$wnd.HTMLElement);this.a.innerHTML=(a=new mu,a.a+='<style is=\"custom-style\">    html, body {      margin: 0;      font-family: \\'Roboto\\', \\'Noto\\', sans-serif;      -webkit-font-smoothing: antialiased;      background: #f1f1f1;      max-height: 368px;    }    app-toolbar {      background-color: #4285f4;      color: #fff;    }    paper-icon-button {      --paper-icon-button-ink-color: white;    }    paper-icon-button + [main-title] {      margin-left: 24px;    }    paper-progress {      display: block;      width: 100%;      --paper-progress-active-color: rgba(255, 255, 255, 0.5);      --paper-progress-container-color: transparent;    }    app-header {      @apply --layout-fixed-top;      color: #fff;      --app-header-background-rear-layer: {        background-color: #ef6c00;      };    }    app-drawer {      --app-drawer-scrim-background: rgba(0, 0, 100, 0.8);      --app-drawer-content-container: {        background-color: #B0BEC5;      }    }       #contentDiv{            margin-top: 64px !important;       }    <\\/style> <app-header reveals data-element=\"header\">  <app-toolbar>   <div main-title>   Beneficiary  <\\/div>  <\\/app-toolbar> <\\/app-header> <div id=\"contentDiv\" data-element=\"contentDiv\">  <dom-bind>   <template is=\"dom-bind\">    <vaadin-grid items=\"[{&quot;name&quot;: &quot;John&quot;, &quot;surname&quot;: &quot;Lennon&quot;, &quot;role&quot;: &quot;singer&quot;}, {&quot;name&quot;: &quot;Ringo&quot;, &quot;surname&quot;: &quot;Starr&quot;, &quot;role&quot;: &quot;drums&quot;}]\" visible-rows=\"8\">     <table>      <colgroup>       <col name=\"name.first\" width=\"150px\">       <col name=\"name.last\" width=\"150px\">       <col name=\"email\" flex width=\"150px\">      <\\/colgroup>     <\\/table>    <\\/vaadin-grid>   <\\/template>  <\\/dom-bind> <\\/div>',new Am(a.a)).a;this.c==null?(this.c=Xf(TC(this.a,AD),$wnd.HTMLElement)):SC(this.a,AD,this.c);this.b==null?(this.b=Xf(TC(this.a,DE),$wnd.HTMLDivElement)):SC(this.a,DE,this.b)}\nem(285,326,{},ss);var pj=$s(CE,'Templated_Layout',285);function ts(){}\nem(280,324,mD,ts);var rj=$s('com.progressoft.workshop.layout.shared.response','LayoutResponse',280);function us(a){var b,c;if(!a||!!a.N()){return null}b=$o(a);c=new ts;Xo(pC(Ce(b,'serverMessage')));return c}\nfunction mu(){Ms.call(this,'')}\nem(43,82,{115:1},mu);function qu(a,b){var c,d,e;ZB(b);c=false;for(e=b.vb();e.Hb();){d=e.Ib();c=c|(Gy(a,d,a.c.b,a.c),true)}return c}\nfunction Cu(a,b){var c,d;ZB(b);for(d=b.Db().vb();d.Hb();){c=Tf(d.Ib(),10);Qu(a,c.Qb(),c.Rb())}}\nem(310,1,pE);_.Cb=function Eu(a){return !!Bu(this,a)};em(180,310,pE);_.Cb=function Uu(a){return Mu(this,a)};function ow(a){return new zB(null,nw(a,a.length))}\nem(217,1,pE);_.Cb=function mx(a){return this.b.Cb(a)};function ez(a,b){return a.a!=null?a.a:b}\nfunction $A(){throw Pl(new tt(\"Can't assign multiple values to the same key\"))}\nfunction dB(){}\nem(229,1,{},dB);_.hb=function eB(){return new Rx};var il=$s(xE,'Collectors/22methodref$ctor$Type',229);function kB(){}\nem(230,1,{},kB);_.mb=function lB(a,b){var c,d;c=Tf(b,51)[0];d=Tf(b,51)[1];a.Cb(c)?a.Fb(c,(a.Eb(c),$A())):a.Fb(c,d)};var ml=$s(xE,'Collectors/lambda$23$Type',230);function mB(){}\nem(231,1,{},mB);var nl=$s(xE,'Collectors/lambda$24$Type',231);function vB(a){var b;qB(a);b=new NB;if(a.a.Vb(b)){return dz(),new gz(ZB(b.a))}return dz(),dz(),cz}\nfunction pC(a){var b;if(!a||!!a.N()){return null}b=a.Q();if(!b){if(!!a.M()||!!a.O()){return a.t()}throw Pl(new AC('Expected a json string, but was given: '+a))}return b.a}\nfunction AC(a){O.call(this,a)}\nem(104,4,iD,AC);var Cl=$s(hE,'JsonEncoderDecoder/DecodingException',104);function NC(a){P.call(this,'Response was NOT a valid JSON document',a)}\nem(282,4,iD,NC);var Gl=$s(hE,'ResponseFormatException',282);function SC(a,b,c){var d,e;if(c==null){throw Pl(new Ot('New element must not be null in TemplateUtils.replaceElement()'))}d=(e=a.querySelector(EE+b+']'),Xf(e,$wnd.HTMLElement));d!=null&&d.parentNode!=null&&d.parentNode.replaceChild(c,d)}\nfunction TC(a,b){var c,d;c=a.querySelector(EE+b+']');d=Xf(c,$wnd.HTMLElement);return d}\nbD(Fb)(2);\n//# sourceMappingURL=src/863B6B7C66B67BECAC488135E7124411_sourceMap2.json \n//# sourceURL=app-2.js\n")

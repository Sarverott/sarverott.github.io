var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && !!window.chrome.webstore;
var isBlink = (isChrome || isOpera) && !!window.CSS;
function getBrowserName(){
	var name='';
	if(isOpera){
		name+='Opera';
	}
	if(isFirefox){
		name+='Firefox';
	}
	if(isSafari){
		name+='Safari';
	}
	if(isIE){
		name+='IE';
	}
	if(isEdge){
		name+='Edge';
	}
	if(isChrome){
		name+='Chrome';
	}
	return name;
}

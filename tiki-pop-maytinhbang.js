﻿function addEvent(obj,eventName,func){if(obj.attachEvent){obj.attachEvent("on"+eventName,func)}else if(obj.addEventListener){obj.addEventListener(eventName,func,true)}else{obj["on"+eventName]=func}}function Get_Cookie(name){var start=document.cookie.indexOf(name+"=");var len=start+name.length+1;if((!start)&&(name!=document.cookie.substring(0,name.length))){return null}if(start==-1)return null;var end=document.cookie.indexOf(";",len);if(end==-1)end=document.cookie.length;return unescape(document.cookie.substring(len,end))}addEvent(window,"load",function(e){addEvent(document,"click",function(e){var height=screen.availHeight;var width=screen.availWidth;width=width-150;height=height-100;var params="left=10,top=10,location=1,toolbar=1,status=1,menubar=1,scrollbars=1,resizable=1,width="+width+", height="+height+"";if(Get_Cookie("itexpressvn")!=1){var w=window.open("http://bit.ly/2W9pa0N",'itexpressvn',params);if(w){var today=new Date();var expires=360000*7*20;var expires_date=new Date(today.getTime()+(expires));document.cookie="itexpressvn=1;expires="+expires_date.toGMTString();w.blur();window.focus()}}})});
// build time:Tue Mar 01 2022 19:14:09 GMT+0800 (中国标准时间)
var e=function(e,t,r){"use strict";var a="<i id='local-search-close' class='fas fa-times' aria-hidden='true'></i>";var i=document.getElementById(t);var l=document.getElementById(r);$.ajax({url:e,dataType:"xml",success:function(e){var t=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();l.innerHTML="";i.addEventListener("input",function(){var e='<ul class="search-result-list">';var r=this.value.trim().toLowerCase().split(/[\s\-]+/);l.innerHTML="";if(this.value.trim().length<=0){return}t.forEach(function(t){var a=true;var i=[];if(!t.title||t.title.trim()===""){t.title="Untitled"}var l=t.title.trim();var n=l.toLowerCase();var s=t.content.trim().replace(/<[^>]+>/g,"");var c=s.toLowerCase();var o=t.url;var u=-1;var f=-1;var v=-1;if(c!==""){r.forEach(function(e,t){u=n.indexOf(e);f=c.indexOf(e);if(u<0&&f<0){a=false}else{if(f<0){f=0}if(t==0){v=f}}})}else{a=false}if(a){e+="<li><a href='"+o+"' class='search-result-title color-primary'>"+l+"</a>";var h=s;if(v>=0){var p=v-20;var d=v+80;if(p<0){p=0}if(p==0){d=100}if(d>h.length){d=h.length}var m=h.substr(p,d);r.forEach(function(e){var t=new RegExp(e,"gi");m=m.replace(t,'<span class="search-keyword">'+e+"</span>")});e+='<p class="search-result">'+m+"...</p>"}e+="</li>"}});e+="</ul>";if(e.indexOf("<li>")===-1){return l.innerHTML="<ul><span class='local-search-empty'>没有找到内容，请尝试更换检索词。<span></ul>"}l.innerHTML=e;window.pjax&&window.pjax.refresh(l)})}});$(document).on("click","#local-search-close",function(){$("#local-search-input").val("");$("#local-search-result").html("")})};var t=function(t){e(t,"local-search-input","local-search-result")};
//rebuild by hrmmi 
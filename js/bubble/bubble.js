// build time:Tue Mar 01 2022 19:06:26 GMT+0800 (中国标准时间)
(function(){var a,n,e,t,o,h=true;i();function i(){a=document.getElementById("header_canvas");c();n=a.getContext("2d");o=[];var t=e*.04;for(var h=0;h<t;h++){var i=new s;o.push(i)}r()}function r(){if(h){n.clearRect(0,0,e,t);for(var a in o){o[a].draw()}}requestAnimationFrame(r)}function c(){var n=document.getElementById("thumbnail_canvas");e=n?n.offsetWidth:0;t=n?n.offsetHeight:0;a.width=e;a.height=t}window.onresize=function(){c()};function s(){var a=this;(function(){a.pos={};o()})();function o(){a.pos.x=Math.random()*e;a.pos.y=t+Math.random()*100;a.alpha=.1+Math.random()*.3;a.alpha_change=2e-4+Math.random()*5e-4;a.scale=.2+Math.random()*.2;a.scale_change=Math.random()*.002;a.speed=.1+Math.random()*1.5}this.draw=function(){if(a.alpha<=0){o()}a.pos.y-=a.speed;a.alpha-=a.alpha_change;a.scale+=a.scale_change;n.beginPath();n.arc(a.pos.x,a.pos.y,a.scale*10,0,2*Math.PI,false);n.fillStyle="rgba(255,255,255,"+a.alpha+")";n.fill()}}})();
//rebuild by hrmmi 
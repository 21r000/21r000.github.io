// build time:Tue Mar 01 2022 19:06:26 GMT+0800 (中国标准时间)
var e=0;jQuery(document).ready(function(a){a("body").click(function(n){var o=new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善");var t=a("<span/>").text(o[e]);var r=n.pageX,c=n.pageY;t.css({"z-index":99999,top:c-28,left:r-o[e].length*8,position:"absolute",color:"#ff7a45"});a("body").append(t);t.animate({top:c-180,opacity:0},1500,function(){t.remove()});e=(e+1)%o.length})});
//rebuild by hrmmi 
!function(a){wp.customize("blogname",function(b){b.bind(function(b){a(".site-title a").text(b)})}),wp.customize("blogdescription",function(b){b.bind(function(b){a(".site-description").text(b)})}),wp.customize("header_textcolor",function(b){b.bind(function(b){"blank"===b?a(".site-title, .site-description").css({clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}):a(".site-title, .site-description").css({clip:"auto",color:b,position:"relative"})})})}(jQuery),jQuery(document).ready(function(a){a(".search-toggle").click(function(){return a(".search-toggle").toggleClass("active"),a("#search-container").slideToggle("slow",function(){}),!1})}),function(){function a(){for(var a=this;-1===a.className.indexOf("nav-menu");)"li"===a.tagName.toLowerCase()&&(-1!==a.className.indexOf("focus")?a.className=a.className.replace(" focus",""):a.className+=" focus"),a=a.parentElement}var b,c,d,e,f;if(b=document.getElementById("site-navigation"),b&&(c=b.getElementsByTagName("button")[0],"undefined"!=typeof c)){if(d=b.getElementsByTagName("ul")[0],"undefined"==typeof d)return void(c.style.display="none");d.setAttribute("aria-expanded","false"),-1===d.className.indexOf("nav-menu")&&(d.className+=" nav-menu"),c.onclick=function(){-1!==b.className.indexOf("toggled")?(b.className=b.className.replace(" toggled",""),c.setAttribute("aria-expanded","false"),d.setAttribute("aria-expanded","false")):(b.className+=" toggled",c.setAttribute("aria-expanded","true"),d.setAttribute("aria-expanded","true"))},e=d.getElementsByTagName("a"),f=d.getElementsByTagName("ul");for(var g=0,h=f.length;h>g;g++)f[g].parentNode.setAttribute("aria-haspopup","true");for(g=0,h=e.length;h>g;g++)e[g].addEventListener("focus",a,!0),e[g].addEventListener("blur",a,!0)}}(),function(){var a=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,b=navigator.userAgent.toLowerCase().indexOf("opera")>-1,c=navigator.userAgent.toLowerCase().indexOf("msie")>-1;(a||b||c)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var a,b=location.hash.substring(1);/^[A-z0-9_-]+$/.test(b)&&(a=document.getElementById(b),a&&(/^(?:a|select|input|button|textarea)$/i.test(a.tagName)||(a.tabIndex=-1),a.focus()))},!1)}();
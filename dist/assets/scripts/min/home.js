!function(o){o(window).scroll(function(e){var t=o(window).scrollTop();100<t?o(".fl-social").addClass("fl-scrolled"):o(".fl-social").removeClass("fl-scrolled"),5<t?o("body").addClass("scrolled"):o("body").removeClass("scrolled")}),o(document).ready(function(){pgs_.hash_scroll(),pgs_.menuscrollToDiv(),pgs_.scroll_menu_active(),pgs_.burgger_menu(),pgs_.scroll_progress(),pgs_.window_hash_smooth_scroll(),o(window).width()<=1024&&setInterval(function(){o("header").toggleClass("logo_swap")},5e3),console.log("%c Developed by PGS (http://pgsuae.com/)","background: #45d98e; color: #fff;")})}(jQuery);var viewport=window.innerWidth,pgs_={number_counter:function(e){var t=0,o=e.dataset.number,n=Math.abs(Math.floor(3e3/o)),s=setInterval(function(){t+=1,(e.textContent=t)==e.dataset.number&&clearInterval(s)},n)},hash_scroll:function(){$("[data-scroll]").on("click",function(e){var t=$(this).data("scroll");$(t).length&&($("html, body").stop().animate({scrollTop:$(t).offset().top-100},500),e.preventDefault())})},burgger_menu:function(){$("body").on("click",".menu_trigger",function(e){var t=$(this),o=t.data("traget");t.toggleClass("active_"),$("body").toggleClass("menu_open"),$("#"+o).toggleClass("show")})},menuscrollToDiv:function(){var n=100;1024<viewport?n=100:viewport<1024&&(n=$("header").outerHeight()),$("body").on("click",".nav-link.scroll",function(e){e.preventDefault(),$(document).off("scroll"),$(this).closest(".navbar-nav").length&&($(".navbar-nav a.scroll").each(function(){$(this).parent().removeClass("active")}),$(this).parent().addClass("active"));var t=$(this).attr("data-href"),o=$(t);$(t).length?$("html, body").stop().animate({scrollTop:o.offset().top-n},500,"swing",function(){$(document).on("scroll"),$("body").hasClass("menu_open")&&$(".menu_trigger").trigger("click")}):window.location.href=$(this).attr("href")})},scroll_menu_active:function(){var n,s=$(".navbar-nav").find("a"),r=s.map(function(){var e=$($(this).attr("data-href"));if(e.length)return e}),a=100;1024<viewport?a=300:viewport<1024&&(a=300),$(window).scroll(function(){var e=$(this).scrollTop()+a,t=r.map(function(){if($(this).offset().top<e)return this}),o=(t=t[t.length-1])&&t.length?t[0].id:"";n!==o&&(n=o,s.parent().removeClass("active").end().filter("[data-href='#"+o+"']").parent().addClass("active"))})},scroll_progress:function(){var n=document.querySelector(".progress-wrap path"),s=n.getTotalLength();n.style.transition=n.style.WebkitTransition="none",n.style.strokeDasharray=s+" "+s,n.style.strokeDashoffset=s,n.getBoundingClientRect(),n.style.transition=n.style.WebkitTransition="stroke-dashoffset 10ms linear";var e=function(){var e=$(window).scrollTop(),t=$(document).height()-$(window).height(),o=s-e*s/t;n.style.strokeDashoffset=o};e(),$(window).scroll(e);jQuery(window).on("scroll",function(){50<jQuery(this).scrollTop()?jQuery(".progress-wrap").addClass("active-progress"):jQuery(".progress-wrap").removeClass("active-progress")}),jQuery(".progress-wrap").on("click",function(e){return e.preventDefault(),jQuery("html, body").animate({scrollTop:0},550),!1})},progress_circle:function(){$(".footer_box").find("[data-percentage]").each(function(){var e=$(this),t=parseFloat(e.attr("data-percentage")),o=e.find(".number_ span"),n=(185-185*t/100).toFixed(2);e.hasClass("anim_done")||(e.find(".progress_").removeAttr("style"),setTimeout(function(){e.find(".progress_").css("stroke-dashoffset",n)},800),o.empty(),$({percentage:0}).stop(!0).animate({percentage:t},{duration:2e3,step:function(){var e=Math.round(10*this.percentage)/10;o.text(e)}}).promise().done(function(){o.text(t),e.addClass("anim_done")}))})},word_count:function(e){var t=e.match(/\S+/g);return{charactersNoSpaces:e.replace(/\s+/g,"").length,characters:e.length,words:t?t.length:0,lines:e.split(/\r*\n/).length}},word_lenght:function(){$("[data-length]").each(function(){var t=$(this),o=t.data("length");t.on("change paste keyup",function(){var e=pgs_.word_count(this.value);t.closest(".input-field").find(".character-counter").text(e.words+"/"+o),o<e.words?t.addClass("invalid"):t.removeClass("invalid")})})},height_into_width:function(){$("[data-h_into_w]").each(function(){var e=$(this),t=e.height();e.css("width",t)})},window_hash_smooth_scroll:function(){var e=window.location.hash,t=$(e);t.length&&$("html, body").stop().animate({scrollTop:t.offset().top-100},500)}};$(document).ready(function(){$("body").css("--top_off",$("header").outerHeight()+"px")}),function(e){e(document).ready(function(){e(window).width(),e(".home-section").viewportChecker({classToAdd:"inView",offset:"30%"}),e(".comunity_sec ").viewportChecker({classToAdd:"inView",offset:"15%"}),e(".comn_box").viewportChecker({classToAdd:"inView",offset:"10%"}),e(".inspire_sec .inner_").viewportChecker({classToAdd:"inView",offset:"20%"}),setTimeout(function(){e("body").addClass("is-loaded")},50)})}(jQuery);
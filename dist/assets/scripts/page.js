!function($) {
    $(window).scroll(function(e) {
        var scrollY = $(window).scrollTop();
        100 < scrollY ? $(".fl-social").addClass("fl-scrolled") : $(".fl-social").removeClass("fl-scrolled"), 
        5 < scrollY ? $("body").addClass("scrolled") : $("body").removeClass("scrolled");
    }), $(document).ready(function() {
        pgs_.hash_scroll(), pgs_.menuscrollToDiv(), pgs_.scroll_menu_active(), pgs_.burgger_menu(), 
        pgs_.scroll_progress(), pgs_.window_hash_smooth_scroll(), $(window).width() <= 1024 && setInterval(function() {
            $("header").toggleClass("logo_swap");
        }, 5e3), console.log("%c Developed by PGS (http://pgsuae.com/)", "background: #45d98e; color: #fff;");
    });
}(jQuery);

var viewport = window.innerWidth, pgs_ = {
    number_counter: function(el) {
        var current = 0, range = el.dataset.number, step = Math.abs(Math.floor(3e3 / range)), timer = setInterval(function() {
            current += 1, (el.textContent = current) == el.dataset.number && clearInterval(timer);
        }, step);
    },
    hash_scroll: function() {
        $("[data-scroll]").on("click", function(e) {
            var target_ = $(this).data("scroll");
            $(target_).length && ($("html, body").stop().animate({
                scrollTop: $(target_).offset().top - 100
            }, 500), e.preventDefault());
        });
    },
    burgger_menu: function() {
        $("body").on("click", ".menu_trigger", function(e) {
            var this_ = $(this), target_ = this_.data("traget");
            this_.toggleClass("active_"), $("body").toggleClass("menu_open"), $("#" + target_).toggleClass("show");
        });
    },
    menuscrollToDiv: function() {
        var offset = 100;
        1024 < viewport ? offset = 100 : viewport < 1024 && (offset = $("header").outerHeight()), 
        $("body").on("click", ".nav-link.scroll", function(e) {
            e.preventDefault(), $(document).off("scroll"), $(this).closest(".navbar-nav").length && ($(".navbar-nav a.scroll").each(function() {
                $(this).parent().removeClass("active");
            }), $(this).parent().addClass("active"));
            var target = $(this).attr("data-href"), $target = $(target);
            $(target).length ? $("html, body").stop().animate({
                scrollTop: $target.offset().top - offset
            }, 500, "swing", function() {
                $(document).on("scroll"), $("body").hasClass("menu_open") && $(".menu_trigger").trigger("click");
            }) : window.location.href = $(this).attr("href");
        });
    },
    scroll_menu_active: function() {
        var lastId, menuItems = $(".navbar-nav").find("a"), scrollItems = menuItems.map(function() {
            var item = $($(this).attr("data-href"));
            if (item.length) return item;
        }), offset = 100;
        1024 < viewport ? offset = 300 : viewport < 1024 && (offset = 300), $(window).scroll(function() {
            var fromTop = $(this).scrollTop() + offset, cur = scrollItems.map(function() {
                if ($(this).offset().top < fromTop) return this;
            }), id = (cur = cur[cur.length - 1]) && cur.length ? cur[0].id : "";
            lastId !== id && (lastId = id, menuItems.parent().removeClass("active").end().filter("[data-href='#" + id + "']").parent().addClass("active"));
        });
    },
    scroll_progress: function() {
        var progressPath = document.querySelector(".progress-wrap path"), pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = "none", progressPath.style.strokeDasharray = pathLength + " " + pathLength, 
        progressPath.style.strokeDashoffset = pathLength, progressPath.getBoundingClientRect(), 
        progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        var updateProgress = function() {
            var scroll = $(window).scrollTop(), height = $(document).height() - $(window).height(), progress = pathLength - scroll * pathLength / height;
            progressPath.style.strokeDashoffset = progress;
        };
        updateProgress(), $(window).scroll(updateProgress);
        jQuery(window).on("scroll", function() {
            50 < jQuery(this).scrollTop() ? jQuery(".progress-wrap").addClass("active-progress") : jQuery(".progress-wrap").removeClass("active-progress");
        }), jQuery(".progress-wrap").on("click", function(event) {
            return event.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, 550), !1;
        });
    },
    progress_circle: function() {
        $(".footer_box").find("[data-percentage]").each(function() {
            var this_ = $(this), val = parseFloat(this_.attr("data-percentage")), number_place = this_.find(".number_ span"), calc_per = (185 - 185 * val / 100).toFixed(2);
            this_.hasClass("anim_done") || (this_.find(".progress_").removeAttr("style"), setTimeout(function() {
                this_.find(".progress_").css("stroke-dashoffset", calc_per);
            }, 800), number_place.empty(), $({
                percentage: 0
            }).stop(!0).animate({
                percentage: val
            }, {
                duration: 2e3,
                step: function() {
                    var percentageVal = Math.round(10 * this.percentage) / 10;
                    number_place.text(percentageVal);
                }
            }).promise().done(function() {
                number_place.text(val), this_.addClass("anim_done");
            }));
        });
    },
    word_count: function(val) {
        var wom = val.match(/\S+/g);
        return {
            charactersNoSpaces: val.replace(/\s+/g, "").length,
            characters: val.length,
            words: wom ? wom.length : 0,
            lines: val.split(/\r*\n/).length
        };
    },
    word_lenght: function() {
        $("[data-length]").each(function() {
            var this_ = $(this), max_ch = this_.data("length");
            this_.on("change paste keyup", function() {
                var v = pgs_.word_count(this.value);
                this_.closest(".input-field").find(".character-counter").text(v.words + "/" + max_ch), 
                max_ch < v.words ? this_.addClass("invalid") : this_.removeClass("invalid");
            });
        });
    },
    height_into_width: function() {
        $("[data-h_into_w]").each(function() {
            var this_ = $(this), h_ = this_.height();
            this_.css("width", h_);
        });
    },
    window_hash_smooth_scroll: function() {
        var hash = window.location.hash, this_ = $(hash);
        this_.length && $("html, body").stop().animate({
            scrollTop: this_.offset().top - 100
        }, 500);
    }
};

$(document).ready(function() {
    $("body").css("--top_off", $("header").outerHeight() + "px");
}), function($) {
    $(document).ready(function() {
        $(".page-section").viewportChecker({
            classToAdd: "inView"
        }), $(".footer").viewportChecker({
            classToAdd: "inView",
            offset: "20%"
        }), $("body").addClass("is-loaded");
    });
}(jQuery);
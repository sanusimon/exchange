(function ($) {
  $(document).ready(function () {
    if ($(window).width() > 767) {
      $(".home-section").viewportChecker({
        classToAdd: "inView",
        offset: "50%",
      });
    } else {
      $(".home-section").viewportChecker({
        classToAdd: "inView",
        offset: "30%",
      });
    }

    setTimeout(function () {
      $("body").addClass("is-loaded");
    }, 50);
  });
})(jQuery);

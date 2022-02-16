(function ($) {
  $(document).ready(function () {
    if ($(window).width() > 767) {
      $(".home-section").viewportChecker({
        classToAdd: "inView",
        offset: "30%",
      });
      $(".comunity_sec ").viewportChecker({
        classToAdd: "inView",
        offset: "15%",
      });
      $(".comn_box").viewportChecker({
        classToAdd: "inView",
        offset: "10%",
      });
      $(".inspire_sec .inner_").viewportChecker({
        classToAdd: "inView",
        offset: "20%",
      });
    } else {
      $(".home-section").viewportChecker({
        classToAdd: "inView",
        offset: "30%",
      });
      $(".comunity_sec ").viewportChecker({
        classToAdd: "inView",
        offset: "15%",
      });
      $(".comn_box").viewportChecker({
        classToAdd: "inView",
        offset: "10%",
      });
      $(".inspire_sec .inner_").viewportChecker({
        classToAdd: "inView",
        offset: "20%",
      });
    }

    setTimeout(function () {
      $("body").addClass("is-loaded");
    }, 50);
  });
})(jQuery);

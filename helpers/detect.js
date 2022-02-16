module.exports.register = function (Handlebars, options, params) {
  Handlebars.registerHelper("bodyClass", function (options) {
    var bodyClass = "";
    if (this.page.basename === "index" || this.page.basename === "index_ar") {
      bodyClass = "home__page";
    } else {
      bodyClass = "inner__page";
    }
    return bodyClass;
  });

  Handlebars.registerHelper("pageClass", function (options) {
    var pageClass = "__" + this.page.basename;
    return pageClass;
  });

  Handlebars.registerHelper("dir", function (options) {
    var page = this.page.basename,
      rtl = "";
    if (page.lastIndexOf("_ar") > 0) {
      rtl = "rtl";
    } else {
      rtl = "ltr";
    }
    return rtl;
  });

  Handlebars.registerHelper("isRTL", function (condition, options) {
    var pName = this.page.basename;
    if (pName.lastIndexOf("_ar") > 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("isPage", function (condition, options) {
    if (this.page.basename === "index" || this.page.basename === "index_ar") {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Handlebars.registerHelper("style", function (options) {
    var style = "";
    if (this.page.basename === "index" || this.page.basename === "index_ar") {
      style = "main";
    } else {
      style = "page";
    }
    return style;
  });
  Handlebars.registerHelper("lang_switch", function (options) {
    var page = this.page.basename;

    if (page.lastIndexOf("_ar") > 0) {
      return page.slice(0, -3) + ".html";
    } else {
      return page + "_ar.html";
    }
  });
};


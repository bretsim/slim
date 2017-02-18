jQuery.noConflict();
(function ($) {
  $(document).ready(function () {
    $("#navbar-toggle").click(function() {
      $("#navbar-collapse").slideToggle();
    });
  });
})(jQuery);
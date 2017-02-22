jQuery.noConflict();

(function ($) {
  $(document).ready(function() {
    var currentPathname = window.location.pathname;
    var activeLink = $('.archive-list a[href="'+ currentPathname+'"]');
    activeLink.addClass('active');
  });
})(jQuery);
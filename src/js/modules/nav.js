(function($) {
  function toggleNav() {
    var navBtn = $('.nav-toggle-btn'),
      nav      = $('.mobile-nav');

    if ($(window).width() < 769) {
      navBtn.on('click', function() {
        $(this).toggleClass('open');
        nav.toggleClass('open');
      });
    }
  }
  toggleNav();

  function toggleSubMenu() {
    var subNav      = $('.mobile-nav .sub-nav'),
      subNavItem    = subNav.find('.sub-nav__item.expandable a'),
      aside         = $('.mobile-nav__aside'),
      closeAsideBtn = $('.mobile-nav___aside-close');

    subNavItem.on('click', function(e) {
      var href = $(this).attr('href').slice(1),
        subMenu = aside.find('.sub-menu#' + href);

      $('.sub-menu').removeClass('visible');

      if (subMenu.hasClass('visible')) return;
      setTimeout(function() {
        subMenu.addClass('visible');
      }, 250);

      if (aside.hasClass('open')) return;
      aside.addClass('open');

      e.preventDefault();
    });

    closeAsideBtn.on('click', function() {
      aside.removeClass('open');
      $('.sub-menu').removeClass('visible');
    });
  }
  toggleSubMenu();
}(jQuery));

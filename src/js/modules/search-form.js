(function($) {
  var searchForm = $('.header').find('.search-form'),
    openFormBtn  = $('.header').find('.header__search-text'),
    closeFormBtn = searchForm.find('.search-form__close');

  openFormBtn.on('click', function() {
    searchForm.addClass('open');
    $('.main').css('opacity', 0.2);
    $('.header__bottom').css('opacity', 0.2);
  });

  closeFormBtn.on('click', function() {
    searchForm.removeClass('open');
    $('.main').css('opacity', 1);
    $('.header__bottom').css('opacity', 1);
  });
}(jQuery));

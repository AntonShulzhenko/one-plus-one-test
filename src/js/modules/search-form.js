(function($) {
  var searchForm = $('.header').find('.search-form'),
    openFormBtn  = $('.header').find('.header__search-text'),
    closeFormBtn = searchForm.find('.search-form__close');

  openFormBtn.on('click', function() {
    searchForm.addClass('open');
  });

  closeFormBtn.on('click', function() {
    searchForm.removeClass('open');
  });
}(jQuery));

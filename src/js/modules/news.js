(function($) {
  var programsItem = $('.programs__item');

  programsItem.each(function(i) {
    var programShort    = $(this).find('.program-short'),
      programShortTitle = programShort.find('.program-short__title'),

      programFull       = $(this).find('.program-full'),
      closeBtn          = programFull.find('.program-full__close'),
      upBtn             = programFull.find('.control.before'),
      downBtn           = programFull.find('.control.after'),
      programShortOffset = programShort.offset().top;

    function removeAllActiveClasses() {
      $('.program-full').removeClass('open');
      $('.program-short').removeClass('close');
    }

    function removeActiveClasses() {
      programFull.removeClass('open');
      programShort.removeClass('close');
    }

    function addActiveClasses() {
      programShort.addClass('close');
      programFull.addClass('open');
    }

    function scrollTo(offset) {
      var value = programShortOffset + offset;
      $('html:not(:animated),body:not(:animated)').animate({scrollTop: value}, 500);
    }

    programShortTitle.on('click', function(e) {
      removeAllActiveClasses();
      addActiveClasses();
      scrollTo(-100);

      if (programFull.parent().index() === programsItem.length - 1) {
        programFull.parent().find('.program-full__time-switcher .control.after').css('display', 'none');
      }

      if (programFull.parent().index() === 0) {
        programFull.parent().find('.program-full__time-switcher .control.before').css('display', 'none');
      }

      e.preventDefault();
    });

    closeBtn.on('click', function(e) {
      removeActiveClasses();
      e.preventDefault();
    });

    downBtn.on('click', function(e) {
      removeAllActiveClasses();
      scrollTo(0);

      programFull.parent().next().find('.program-full').addClass('open');
      programFull.parent().next().find('.program-short').addClass('close');

      if (programFull.parent().next().index() === programsItem.length - 1) {
        programFull.parent().next().find('.program-full__time-switcher .control.after').css('display', 'none');
      }

      e.preventDefault();
    });

    upBtn.on('click', function(e) {
      removeAllActiveClasses();
      scrollTo(-300);

      programFull.parent().prev().find('.program-full').addClass('open');
      programFull.parent().prev().find('.program-short').addClass('close');

      if (programFull.parent().prev().index() === 0) {
        programFull.parent().prev().find('.program-full__time-switcher .control.before').css('display', 'none');
      }

      e.preventDefault();
    });
  });
}(jQuery));

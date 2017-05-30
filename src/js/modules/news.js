(function($) {
  var programsItem = $('.programs__item');

  programsItem.each(function(i) {
    var programShort    = $(this).find('.program-short'),
      programFull       = $(this).find('.program-full'),
      programShortTitle = programShort.find('.program-short__title'),
      closeBtn          = programFull.find('.program-full__close'),
      upBtn             = programFull.find('.program-full__time-switcher .control.before'),
      downBtn           = programFull.find('.program-full__time-switcher .control.after');

    programShortTitle.on('click', function(e) {
      $('.program-full').removeClass('open');
      programShort.addClass('close');
      programFull.addClass('open');

      if (programFull.parent().index() === programsItem.length - 1) {
        programFull.parent().find('.program-full__time-switcher .control.after').css('display', 'none');
      }

      if (programFull.parent().index() === 0) {
        programFull.parent().find('.program-full__time-switcher .control.before').css('display', 'none');
      }

      e.preventDefault();
    });

    closeBtn.on('click', function(e) {
      programFull.removeClass('open');
      programShort.removeClass('close');

      e.preventDefault();
    });

    downBtn.on('click', function(e) {
      $('.program-full').removeClass('open');
      $('.program-short').removeClass('close');
      programFull.parent().next().find('.program-full').addClass('open');
      programFull.parent().next().find('.program-short').addClass('close');

      if (programFull.parent().next().index() === programsItem.length - 1) {
        programFull.parent().next().find('.program-full__time-switcher .control.after').css('display', 'none');
      }

      e.preventDefault();
    });

    upBtn.on('click', function(e) {
      $('.program-full').removeClass('open');
      $('.program-short').removeClass('close');
      programFull.parent().prev().find('.program-full').addClass('open');
      programFull.parent().prev().find('.program-short').addClass('close');

      if (programFull.parent().prev().index() === 0) {
        programFull.parent().prev().find('.program-full__time-switcher .control.before').css('display', 'none');
      }

      e.preventDefault();
    });
  });
}(jQuery));

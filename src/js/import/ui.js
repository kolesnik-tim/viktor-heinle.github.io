//якорь
$('.header__nav, .mobile-menu, .intro__btn').on('click','a', function(event) {

  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
  $('.mobile-menu').removeClass('active');
  $('.bg').fadeOut();
});


//mobile menu
$('.open-menu').on('click', function() {
  $('.mobile-menu').addClass('active');
  $('.bg').fadeIn();
});
//close
$('.close-menu, .bg').on('click', function() {
  $('.mobile-menu').removeClass('active');
  $('.bg').fadeOut();
});

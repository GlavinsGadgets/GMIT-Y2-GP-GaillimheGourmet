$(window).scroll(function() {
  if ($(document).scrollTop() > 45) {
    $('nav').addClass('shrink')
    $('.navlia').addClass('shrinka')	
    $('.logo').addClass('shrinkb')	
	
  } else {
    $('nav').removeClass('shrink')
    $('.navlia').removeClass('shrinka')
    $('.logo').removeClass('shrinkb')
  }
});
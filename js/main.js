var handle = ally.style.focusWithin();

$(function() {

$('.js-menu-btn').click(function() {
  $(this).toggleClass('active');
  $('.nav').toggleClass('nav--active');
});

$('.js-like-btn').click(function() {
  $(this).toggleClass('btn-like--active');
  $('#like-icon').css({
    transform: 'scale(1.5)'
  });
});

});

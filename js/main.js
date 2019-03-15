var handle = ally.style.focusWithin();

$(function() {

$('a[href^="#"]').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 80 + 'px'
  }, 500);
});

$('[type="tel"]').mask('+7 (999) 999-99-99');

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

// Feedback slider
$('.feedback-wrap').slick({
  infinite: true,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [{
    breakpoint: 992,
    settings: 'unslick'
  }]
});

$('#map a').click(function(e) {
  e.preventDefault();

  var iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', 'https://yandex.ru/map-widget/v1/-/CCeqiENO');

  $(this).parent().append(iframe);
  $(this).remove();
});

document.addEventListener('click', function(e) {
  var map = document.querySelector('#map iframe')
  if(e.target.id === 'map') {
    map.style.pointerEvents = 'all';
  }
  else {
    map.style.pointerEvents = 'none';
  }
});

// twentytwenty
$('.compare-slider__slide').twentytwenty({
  before_label: 'Без скинали',
  after_label: 'Со скинали'
});

$('.compare-slider').slick({
  infinite: true,
  slidesToScroll: 1,
  draggable: false,
  dots: true,
});

});

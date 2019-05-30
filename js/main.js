var handle = ally.style.focusWithin();

$(function() {

new WOW().init();

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

$('.form__select').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
}).blur(function() {
  $(this).removeClass('active');
});

$('.form__select-item').click(function(e) {
  var text = $(this).text();
  console.log(text);
  $(this).parents('.form__select').find('span').text(text);
});

// Feedback slider
$(".feedback-wrap").owlCarousel({
  responsive: {
    0: {
      margin: 15,
      stagePadding: 30,
      loop: true,
      items: 1,
    },
    768: {
      stagePadding: 0,
      margin: 15,
      items: 2,
      loop: true,
      mouseDrag: true,
    },
    992: {
      loop: false,
      mouseDrag: false,
      stagePadding: 0,
      margin: 30,
      items: 3,
    },
  }
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

$('.compare-slider').owlCarousel({
  loop: true,
  nav: true,
  items: 1,
  margin: 0,
  stagePadding: 0,
  responsive: {
    0: {
      mouseDrag: false,
      touchDrag: false
    },
    768: {
      mouseDrag: false,
    },
    992: {
      mouseDrag: false,
    },
  }
});

});

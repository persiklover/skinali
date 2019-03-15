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

function createIframe(id) {
  // body...
}

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
})

});

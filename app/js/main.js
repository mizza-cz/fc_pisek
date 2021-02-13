$(function () {
  $('.menu__btn').on('click', function () {
    $('.menu').slideToggle();
  });
  $('.nav__link').on('click', function () {
    $(this).closest('.nav__list').toggleClass('active');
  });
});

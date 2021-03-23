$(function () {
  $('select').styler();
  //presmerovani pomoci selectu
  $('.select__redirect').change(function () {
    location.href = $(this).val();
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  $('.menu__btn').on('click', function () {
    $('.header__row').slideToggle();
  });
  $('.nav__link').on('click', function () {
    $(this).closest('.nav__list').toggleClass('active');
  });
  // gallery
  $('.gallery__inner').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });
});

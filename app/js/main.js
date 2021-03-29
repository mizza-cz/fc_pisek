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
  //tabs
  $('.statistiky__active .statistiky__tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.statistiky__active').find('.statistiky__content').removeClass('tab-active').hide();
    $('.statistiky__active .statistiky__tabs').find('.statistiky__tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id)
      .addClass('tab-active')
      .fadeIn();
    return false;
  });
});

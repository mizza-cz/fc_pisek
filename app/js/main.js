$(function () {
  $('select, .shop__check').styler();
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



const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__value');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

      inp.value = newValue;
    })
  })

}

counter();
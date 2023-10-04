// Функция для обновления высоты элементов при изменении размера окна браузера
function updateHeights() {
  var feedHeight = $('.main-wrapper__feed').height();
  var bannerHeight = $('.content-sidebar__bnr').height();

  $('.content-news').css('height', feedHeight + 'px');
  $('.content-sidebar__wrapper').css('height', feedHeight - bannerHeight - 36 + 'px');
}

$(document).ready(function(){
  // Выбор города
  $(document).on('click','.js-show-city',function(e){
    $('.header-city__all').toggleClass('active');
    e.stopPropagation();  // предотвращаем всплытие события, чтобы следующий обработчик не сработал сразу
  });

  $(document).on('click', function(e) {
    // если клик произошел вне области .header-city__all и вне .js-show-city
    if (!$(e.target).closest('.header-city__all').length && !$(e.target).closest('.js-show-city').length) {
      $('.header-city__all').removeClass('active');
    }
  });

  // Мобильное меню
  $(document).on('click','.js-show-menu',function(){
    $('html, body').addClass('overlay');
    $('nav').addClass('active');
  });
  $(document).on('click','.js-hide-menu',function(){
    $('html, body').removeClass('overlay');
    $('nav').removeClass('active');
  });

  // Вызываем функцию при загрузке страницы и после полной загрузки всех ресурсов
  $(window).on('load', function() {
    updateHeights(); // Вызываем после полной загрузки страницы
    $(window).resize(updateHeights); // Вызываем при изменении размера окна
  });

});

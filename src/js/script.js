const slider = tns({      
  container: '.carousel__inner',
  // mode: 'carousel',  //Тип карусели
  items: 1,
  slideBy: 'page',
  // center: true,           // Расположение по центру в контейнере
  autoplay: false,        //Отключаем автопроигрывание
  controls: false,        //удаляем нативные стрелки
  navPosition: 'bottom', //расположение точек внизу
  // lazyload: true,        //"ленивая загрузка"
  // navAsThumbnails: true,  //являются ли точки миниатюрами
  nav: false,         //Отображение точек
  // gutter: 1,
  // fixedWidth: true,
  // autoWidth: true,
  // axis: "vertical"  // вертикальная прокрутка слайдов
  // controlsText: [
  //   '<img src="../icons/slider/arrowLeft.png">',
  //   '<img src="../icons/slider/arrowRight.png">'   
  // ]
  responsive: {
     412: {
    //   fixedWidth: true,
      edgePadding: 10,
      gutter: 10
     },
    640: {
      // autoWidth: true,
      edgePadding: 20,
      gutter: 20
      // items: 1
    },
    700: {
      // autoWidth: true,
      edgePadding: 30,
      gutter: 30
    },
    900: {
      // autoWidth: true,
      // items: 1
    }
  }
});
document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
}); 
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
}); 

// $(document).ready(function(){     /* Слайсер заработал после того, как запись началась с первой строки  */
//   $('.carousel__inner').slick({
//     // infinite: true,     /* Движение карусели по-кругу, значение по-умолчанию*/
//     // slidesToShow: 1,    /* Количество одновременно демонстрируемых слайдов */
//     // slidesToScroll: 1   /* Количество одновременно обновляемых слайдов */
//     // dots: true,           /* Точки внизу слайдера */
//     speed: 1200,          /* Скорость обновления слайда в ms */
//     // adaptiveHeight: true, /* Автоадаптация высоту картинки */
//     // autoplay: true,       /* Автоматическое движение карусели */
//     // autoplaySpeed: 2000,   /* Скорость изменения кадров */
//     // fade: true,           /* Проявление одной картинки сквозь другую */
//     // cssEase: 'linear'     /* Тип "проявления контента" */
//     // arrows: false         /* Отключаем стрелки */
//     prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/arrowLeft.png"></img></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/arrowRight.png"></img></button>',
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           dots: true,
//           arrows: false
//         }
//       }
//     ]
//   });
// });

$(document).ready(function() {
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide (item) {
    $(item).each(function(i) {		        /*перебираем все элементы*/
      $(this).on('click', function(e)  {		/*при нажатии на выбранную ссылку, вызывает фукцию с аргументом e*/
          e.preventDefault();		            /*отмена стандартного действия при нажатии на e для e*/
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');  /*toggleClas "тоглит" классы заменяя на противоположны удаляя при наличии и добавляя при отсутствии*/
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active'); /*"тогглим" класс активности для list, одновременно &__content и &__list не могут быть активными*/
      }) 			
    })
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

});
    

    




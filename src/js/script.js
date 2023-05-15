const slider = tns({      //tiny-slider
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  center: true,
  autoplay: false,
  controls: false,
  nav: false,
  // gutter: 1,
  // fixedWidth: true,
  // autoWidth: true,
  // axis: "vertical"  // вертикальная прокрутка слайдов
  // controlsText: [
  //   '<img src="../icons/slider/arrowLeft.png">',
  //   '<img src="../icons/slider/arrowRight.png">'   
  // ]
  responsive: {
    //  412: {
    //   fixedWidth: true,
    // },
    640: {
      // autoWidth: true,
      edgePadding: 20,
      gutter: 20,
      items: 1
    },
    700: {
      // autoWidth: true,
      gutter: 30
    },
    900: {
      // autoWidth: true,
      items: 1
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



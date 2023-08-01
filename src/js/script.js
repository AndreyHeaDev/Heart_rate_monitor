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

  //Модальные окна

  $('[data-modal=consultation]').on('click', function(){ //медленное появление затемнения и первого модальногокна
    $('.fogging, #consultation').fadeIn('slow'); 
  });
  $('.modalW__close').on('click', function(){
    $('.fogging, #consultation, #order, #thanks').fadeOut('slow');
  });

/*     $('.btn_catalog').on('click',function(){
        $('.fogging, #order').fadeIn('slow');
  }); */

  $('.btn_catalog').each(function(i){
    $(this).on('click', function(){
      $('#order .modalW__descr').text($('.catalog-item__subheader').eq(i).text());
      $('.fogging, #order').fadeIn('slow');
    });
  });

  //Валидация

/*  $('#consultation-form').validate();
 $('#consultation form').validate({
    rules: {
      name: {
        required: true,
        // text: true,
        minlength: 2
      },
      phone: {
        required: true,
        phone: true

      }, 
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Пожалуйста введите имя",
        minlength: jQuery.validator.format("Должно быть не менее {0}-х символов!")
      },
      phone: "Пожалуйста введите телефон",
      email: {
        required: "Пожалуйста введите почту",
        email: "Адрес должен быть в формате name@domain.com"
      }
    }
  }); 

  $('#order form').validate(); */

  function validateForm(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          // text: true,
          minlength: 2
        },
        phone: {
          required: true,
          // phone: true
  
        }, 
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста введите имя",
          minlength: jQuery.validator.format("Должно быть не менее {0}-х символов!")
        },
        phone: "Пожалуйста введите телефон",
        email: {
          required: "Пожалуйста введите почту",
          email: "Адрес должен быть в формате name@domain.com"
        }
      }
    });  
  };

  validateForm('#consultation-form');
  validateForm('#consultation form');
  validateForm('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  $('form').submit(function(e){
    e.preventDefault();         //отменяем стандартное поведение браузера на отсылку данных
    $.ajax({                    //формирование запроса на сервер                    
        type: "POST",           //тип запроса на сервер отдаём (?) почту
        url: "mailer/smart.php", //куда идёт обращение, в этом случае к скрипту smart.php
        data: $(this).serialize(),   //данные, работаем с выбранным окном (this) и отправляем методом .serialize
    }).done(function(){          //если успешно выполнено (.done) то выполнить                     
        $(this).find("input").val(""); //в форме с которой работаем (this), ищем поля (.find("input") и выставляем их в "" (.val(""))                             
        $('#consultation, #order').fadeOut(); //закрываем все возможные модальные окна
        $('.fogging, #thanks').fadeIn('slow');//отрываем окно благодарности на фоне затемнения
        $('form').trigger('reset'); //все формы (form) методом (.trigger()) сбрасываем ('reset')
    });
    return false;               //закрываем запрос (?)
  });

  //Smooth scroll and pageUp

  $(window).scroll(function(){			    //window - объект всё окно, при событии scroll выполнять function
    if ($(this).scrollTop() > 1600) {		//если текущий объект (this) имеет свойство scrollTop (отступ сверху) более 1600px
      $('.up_shevron').fadeIn();		        //класс .pageup проявляется
    } else {
      $('.up_shevron').fadeOut();		          //класс .pageup скрывается
    }
  });
  
  // This smooth scroll
  
  $("a[href^='#']").click(function(){		//"a[href^="#"]" объект это ссылка с аттрибутом href  начинающимся на "#" при клике выполняется function
    const _href=$(this).attr("href");		//константе _href присваивается значение аттрибута href из кликнутой ссылки (this)
    $("html, body").animate({scrollTop:$(_href).offset().top+"px"});	//анимируется html, body вверх (scrollTop) 
    return false;			//на значение сдвига вверх (.offcet().top) полученное из _html в "px"
  });
});
    

    




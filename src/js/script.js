$(document).ready(function(){
    $('.carusel__pulse').slick({ 
      prevArrow:'<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
	  responsive: [
		{
		  breakpoint: 992,
		  settings: {
			arrows: false,
			infinite: true,
			dots: true
		  }
		}
	  ]
    });
  

      
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

	$('.catalog-item__link').each(function(i){
		$(this).on('click',function(e){
			e.preventDefault();
			$('.catalog-item__main').eq(i).toggleClass('catalog-item__main_active');
			$('.catalog-item__expl').eq(i).toggleClass('catalog-item__expl_active');			
		})
	});

	$('.catalog-item__back').each(function(i){
		$(this).on('click',function(e){
			e.preventDefault();
			$('.catalog-item__main').eq(i).toggleClass('catalog-item__main_active');
			$('.catalog-item__expl').eq(i).toggleClass('catalog-item__expl_active');			
		})
	});
	
	//МОДАЛЬНЫЕ ОКНА

	$('[data-modal=consultation]').on('click',function(){
		$('.overlay, #consultation').fadeIn("slow");
	} );
	$('.modal__close').on('click', function(){
		$('.overlay, #consultation, #order, #thanks').fadeOut("slow");
	});


	$('.button_mini').each(function(i){
		$(this).on('click',function(){
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn("slow");
		})
	});

	// ВАЛИДАЦИЯ ФОРМ

	function ValidateForm(form){
		$(form).validate({
			rules:{
				name:"required",
				phone:"required",
				email:"required",
			},
				messages:{
				name: "Пожалуйста, введите свое имя",
				phone:"Пожалуйста, введите свой номер телефона",
				email: {
				required: "Пожалуйста, введите свой Email",
				email:"Email введен не верно"
				}
				}
			
		});
	};

	ValidateForm('#consultation form');
	ValidateForm('#order form');
	ValidateForm('#consultation-form');


	$("input[name=phone]").mask("+38 (999) 99-99-99-9");

		//ОТПРАВКА ПИСЕМ

		$('form').submit(function(e) {
			e.preventDefault();
	
			if(!$(this).valid()) {
				return;
			}
	
			$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function(){
					$(this).find("input").val("");
					$('#consultation, #order').fadeOut('fast');
					$('.overlay, #thanks').fadeIn('slow');
	
					$('form').trigger('reset');
			});
			return false;
		});

		//SMOOTH SCROLL AND PAGEUP

	$(window).scroll(function(){
		if($(this).scrollTop()> 1600){
			$('.UP').fadeIn()
		}
		else{
			$('.UP').fadeOut()
		}
	});

	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html,body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

  });


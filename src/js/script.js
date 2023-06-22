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
  });
      
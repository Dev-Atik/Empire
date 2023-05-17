(function ($) {
    "use strict";

	/*----------------------------------------
	   Canvas Nav
	------------------------------------------*/
	$('.nav-wrapper ul li.nav-children span.canvas-arrow').on('click', function(){
		$(this).toggleClass('rotate');
		$(this).next('ul.child-submenu').slideToggle();
	});

    /*----------------------------------------
	   Hero Slick
	------------------------------------------*/
	$('.slide-wrapper').slick({
		'type': true,
		'autoplay': false,
		'arrows': true,
		'prevArrow': '<div class="slide-arrow-left"><i class="ri-arrow-left-s-line"></i></div>',
		'nextArrow': '<div class="slide-arrow-right"><i class="ri-arrow-right-s-line"></i></div>',
		'dots': true,
		'fade': false,
		'infinite': true,
		'pauseOnHover': true,
		'slidesToScroll': 1,
		'speed': 300,
	});

    /*----------------------------------------
	   Testimonial Slick
	------------------------------------------*/
	$('.testimonial_wrapper').slick({
		'type': true,
		'autoplay': false,
		'arrows': true,
		'prevArrow': '<div class="slide-arrow-left"><i class="ri-arrow-left-s-line"></i></div>',
		'nextArrow': '<div class="slide-arrow-right"><i class="ri-arrow-right-s-line"></i></div>',
		'dots': true,
		'fade': false,
		'infinite': false,
		'pauseOnHover': true,
		'slidesToShow': 3,
		'slidesToScroll': 3,
		'speed': 300,

		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});

    /*----------------------------------------
	   Shoppable Product Slick
	------------------------------------------*/
	$('.shoppable_product_item_wrapper').slick({
		'type': true,
		'autoplay': false,
		'arrows': true,
		'prevArrow': '<div class="slide-arrow-left"><i class="ri-arrow-left-s-line"></i></div>',
		'nextArrow': '<div class="slide-arrow-right"><i class="ri-arrow-right-s-line"></i></div>',
		'dots': false,
		'fade': false,
		'infinite': false,
		'pauseOnHover': true,
		'slidesToShow': 5,
		'slidesToScroll': 4,
		'speed': 300,
		'centerMode': false,

		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 320,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});


	/*----------------------------------------
	   Countdown Timer
	------------------------------------------*/
    var d = new Date(new Date().getTime() + 1000 * 120 * 120 * 2000);

    simplyCountdown('.simply-countdown-one', {
        year: 2023, 
		month: 3, 
		day: 29,
    });


	/*----------------------------------------
	   Sticky nav
	------------------------------------------*/

	var $headerStick = $('.header-main');
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 80) {
			$headerStick.addClass("stick");
			// $('.site-header-menu-toggle--button').css({'display':'block'});
		} else {
			$headerStick.removeClass("stick");
			// $('.site-header-menu-toggle--button').css({'display':'none'});
		};
	});

	var $navStick = $('.main-navigation');
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 80) {
			$navStick.addClass("stick");
		} else {
			$navStick.removeClass("stick");
			$('.main-navigation').slideDown();
		};
	});

	// $('.site-header-menu-toggle--button').on('click', function(){
	// 	$('.main-navigation').slideToggle();
	// });

	/*----------------------------------------
	   Login Form Changer
	------------------------------------------*/
	$('.forgot-password').on('click', function(){
		$('.sign-in-form').hide();
		$('.forgot-password-form').css({'display':'block'});
	});

	/*----------------------------------------
	   Category Single
	------------------------------------------*/

	//Grid and List View
	$('.view-btn .list').on('click', function(){
		$('.single_cateogry_wrapper.grid').hide();
		$('.single_cateogry_wrapper.list').css({'display':'block'});
		$('.view-btn .list').addClass('active');
		$('.view-btn .grid').removeClass('active');
	});

	$('.view-btn .grid').on('click', function(){
		$('.single_cateogry_wrapper.list').hide();
		$('.single_cateogry_wrapper.grid').show();
		$('.view-btn .list').removeClass('active');
		$('.view-btn .grid').addClass('active');
	});

	$('.compare-btn input.compare').on('click', function(){
		$('.deal-product .dealing-form').css({
			'top': '15px',
			'opacity': '1',
			'visibility': 'visible',
		});
		$('.compare-btn input.compare').toggleClass('removeCompare');
		$('.deal-product').toggleClass('removeCompare');

		if( $('.compare-btn input.compare.removeCompare')[0] ){
			$('.compare-btn input.compare').click(function(){
				$('.deal-product .dealing-form').css({
					'top': '0',
					'opacity': '0',
					'visibility': 'hidden',
				});
			});
		}

	});

	/*----------------------------------------
	   Cart Button Increament Decreament
	------------------------------------------*/
	$('.input-number-increment').on('click', function () {
		increament();
	});

	$('.input-number-decrement').on('click', function () {
		decreament();
	});

	function increament() {
		var a = $(".demoInput").val();
		a++;
		if (a >= 1) {
			$(".input-number-decrement").removeAttr("disabled");
		}
		$(".demoInput").val(a);
	}

	function decreament() {
		var b = $(".demoInput").val();
			if (b.length > 0 && b >= 1) {
			b--;
			$(".demoInput").val(b);
		} else {
			$(".input-number-decrement").attr("disabled", "disabled");
		}
	}

	/*----------------------------------------
	   Cart Button Increament Decreament 2
	------------------------------------------*/
	$('.input-number-increment2').on('click', function () {
		increament2();
	});

	$('.input-number-decrement2').on('click', function () {
		decreament2();
	});

	function increament2() {
		var a = $(".demoInput2").val();
		a++;
		if (a >= 1) {
			$(".input-number-decrement2").removeAttr("disabled");
		}
		$(".demoInput2").val(a);
	}

	function decreament2() {
		var b = $(".demoInput2").val();
			if (b.length > 0 && b >= 1) {
			b--;
			$(".demoInput2").val(b);
		} else {
			$(".input-number-decrement2").attr("disabled", "disabled");
		}
	}

	/*----------------------------------------
	   Compare Product
	------------------------------------------*/
	$('.product-compare-table-description .see-more-btn').on('click', function(){
		$('.product-compare-table-description').css({'height':'100%', 'padding-bottom':'30px'});
	});

	//WOW Js
	new WOW().init();



})(jQuery);
  
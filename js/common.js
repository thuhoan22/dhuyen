;(function (win, $) {
    'use strict';

	// Sticky Header
	var stickyHeader = function(){
		var initPosition = $(window).scrollTop();
		if(initPosition > 0){
			$('header').addClass("header-sticky");
		} else {
			$('header').removeClass("header-sticky");
		};
	};

	// Back to top
	var backToTop = function (){
		var $backToTop = $('.back-to-top');
		$backToTop.hide();

		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$backToTop.addClass('is-show').fadeIn();
			} else {
				$backToTop.removeClass('is-show').fadeOut();
			}
		});

		$backToTop.on('click', function(e) {
			$("html, body").animate({scrollTop: 0}, 500);
		});
	};

	// Load more item
	var loadMore = function() {
		var $itemShow = $('.card-prj li'),
			x = 9;

		$itemShow.slice(0, x).show();
		$('.js-loadmore').on('click', function (e) {
			e.preventDefault();

			x = x + 6;
			$itemShow.slice(0, x).slideDown();

			// if ($('.card-prj li:hidden').length == 0) {
			// 	$("#load").fadeOut('slow');
			// 	$('#js-loadmore').replaceWith("<p class='p'>No More</p>");
			// }
			// $('html,body').animate({
			// 	scrollTop: $(this).offset().top
			// }, 1500);
		});



		// initAnimationScroll();
	};

	var mobileNavMn = function () {
		$('.menu-bar').on('click', function() {
			$('.bar').toggleClass('animate');
			var mobileNav = $('.mobile-nav');
			mobileNav.toggleClass('hide show');

			if(mobileNav.hasClass('show')){
				$(this).parents('body').css('overflow', 'hidden')
			} else {
				$('body').css('overflow', 'unset')
			}
		})
	};

	// Menu bar - open Nav
	var navMenuResponsive = function () {
		var $menuNav = $('.wraper'),
			$menuBarBtn = $('.js-btn-menu');

		$menuBarBtn.click(function (){
			$menuNav.toggleClass('open');

			// menubar
			if($menuNav.hasClass('open')){
				$(this).parents('body').css('overflow', 'hidden');
			} else {
				$('body').css('overflow', 'unset')
			}

			// when open nav
			if($menuNav.hasClass('open')){
				$(this).parents('.wraper').find('header').removeClass('header-sticky');
			} else {
				$('.wraper').find('header').addClass('header-sticky');
			}
		});
	};

	$(window).on('scroll', function(){
		stickyHeader();
	});


	$(win).on('load', function () {
		backToTop();
		loadMore();
		navMenuResponsive();
		lazyloadItem();
	});
})(window, window.jQuery);
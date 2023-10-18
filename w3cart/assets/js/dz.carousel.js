
/* JavaScript Document */
jQuery(document).ready(function() {
    // 'use strict';
	
	if(jQuery('.banner-swiper').length > 0){
		var swiperBannerSwiper = new Swiper('.banner-swiper', {
			speed: 500,
			slidesPerView: 1,
			spaceBetween: 0,
			autoplay: {
			   delay: 5000,
			},
			loop: true,
			pagination: {
                el: ".swiper-pagination",
                clickable: true,
			},
			breakpoints: {
				575: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,				  
				},
				1024: {
					slidesPerView: 1,
				},
			},
		});
	}
	
	if(jQuery('.category-swiper').length > 0){
		var swipercategorySwiper = new Swiper('.category-swiper', {
			speed: 500,
			slidesPerView: 4.5,
			spaceBetween: 12,
			loop: false,
		});
	}
	
	if(jQuery('.trending-swiper').length > 0){
		var swipertrendingSwiper = new Swiper('.trending-swiper', {
			speed: 500,
			slidesPerView: 2,
			spaceBetween: 15,
			autoplay: {
			   delay: 1500,
			},
			loop: true,
			breakpoints: {
				575: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,				  
				},
				1024: {
					slidesPerView: 3,
				},
			},
		});
	}
	if(jQuery('.product-detail-swiper').length > 0){
		var swiper = new Swiper(".product-detail-swiper", {
			spaceBetween: 10,
			slidesPerView: "auto",
			freeMode: true,
			watchSlidesProgress: true,
		});
		var swiper2 = new Swiper(".product-detail-swiper-2", {
			loop: true,
			spaceBetween: 0,
			autoplay: {
			   delay: 1500,
			},
			thumbs: {
			  swiper: swiper,
			},
		});
	}
	
});

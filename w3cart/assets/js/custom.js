w3cart = function(){
	
	"use strict"
	
	var screenWidth = $( window ).width();
	var screenHeight = $( window ).height();
	
	// Preloader ============
	var handlePreloader = function(){
		setTimeout(function() {
            jQuery('#preloader').fadeOut(300);
		},300);
	}
    
	// Show Pass ============
    var handleShowPass = function(){
		jQuery('.show-pass').on('click',function(){
			jQuery(this).toggleClass('active');
			if(jQuery(this).parent().find('.dz-password').attr('type') == 'password'){
				jQuery(this).parent().find('.dz-password').attr('type','text');
			}else if(jQuery(this).parent().find('.dz-password').attr('type') == 'text'){
				jQuery(this).parent().find('.dz-password').attr('type','password');
			}
		});
	}
    
	// Default Select ============
	var handleSelectpicker = function(){
		if(jQuery('.default-select').length > 0 ){
			jQuery('.default-select').selectpicker();
		}
	}
      
   
	// Progressive Web App Modal ============
	var handlePWAModal = function (){
		if (!window.matchMedia('(display-mode: standalone)').matches) {
		    setTimeout(function(){
    			jQuery('.pwa-offcanvas').addClass('show');
    			jQuery('.pwa-backdrop').addClass('fade show');
    		}, 3000);
    		jQuery('.pwa-backdrop, .pwa-close, .pwa-btn').on('click',function(){
    			jQuery('.pwa-offcanvas').slideUp(500, function() {
    				jQuery(this).removeClass('show');
    			});
    			setTimeout(function(){
    				jQuery('.pwa-backdrop').removeClass('show');
    			}, 500);
    		}); 
		}
	}
    

	
	// Theme Version ============
	var handleThemeVersion = function() {
		jQuery('.theme-btn').on('click',function(){
			jQuery('body').toggleClass('theme-dark');
			jQuery('.theme-btn').toggleClass('active');
		});
	}
	
	var handleThemeVersion2 = function() {
		jQuery('.dz-list-group ul li a').on('click',function(){
			if($(this).hasClass('theme-change'))
			{				
				jQuery('body').toggleClass('theme-dark');
				jQuery('.theme-btn').toggleClass('active');
			}
		});
	}
    
    // Theme Version ============
	var handleRemoveClass = function() {
		jQuery('.nav-color').on('click',function(){
			jQuery('.sidebar, .menu-toggler').removeClass('show');
		});
	}
    
    // Theme Version ============
	var handleToggleButton = function() {
		jQuery('.dz-treeview-item').on('click',function(){
			jQuery(this).toggleClass('open');
		});
	}
	
    
    // Tab Slide ============ 
	var handleTabSlide = function() {
		if(jQuery('.tab-slide-effect').length > 0){
			var a =  $('.tab-slide-effect li.active').width();
			var b =  $('.tab-slide-effect li.active').position().left;
			$('.tab-active-indicator').css({'width' : a,'transform': 'translateX('+b+'px)'});
			$('.tab-slide-effect li').on('click',function(){
                var tabItem = $(this).parent().find('li');
				$(tabItem).removeClass('active');
                $(this).addClass('active');
				var x = $(this).width();
				var y = $(this).position().left;
                var indicator = $(this).parent().find('.tab-active-indicator');
				$(indicator).css({'width' : x,'transform': 'translateX('+y+'px)'});
			})
		}
	}
	
	
	// Like Button ============
	var handleLikeButton = function (){
		$(".item-bookmark").on('click', function(){
			$(this).toggleClass("active");
		});
	}
	
	// TouchSpin ============
	var handleTouchSpin = function (){
		if(jQuery('.stepper').length > 0){	
			$(".stepper").TouchSpin({
				initval: 1
			});
		}
	}

	var onePageLayout = function() {
		'use strict';
		var headerHeight =   parseInt($('.onepage').css('height'), 10);
		$(".scroll").unbind().on('click',function(event) 
		{
			event.preventDefault();
			
			if (this.hash !== "") {
				var hash = this.hash;	
				var seactionPosition = $(hash).offset().top;
				var headerHeight =   parseInt($('.onepage').css('height'), 10);
				
				
				$('body').scrollspy({target: ".header, .scroll-bx", offset: headerHeight+2}); 
				
				var scrollTopPosition = seactionPosition - (headerHeight + 10);
				
				$('html, body').animate({
					scrollTop: scrollTopPosition
				}, 800, function(){
					
				});
			}   
		});
		$('body').scrollspy({target: ".header, .scroll-bx", offset: headerHeight + 2});  
	}
	
	/* Function ============ */
	return {
		init:function(){
			handleThemeVersion2();
			handleToggleButton();
			handleLikeButton();
			handleShowPass();
            handlePWAModal();
            handleRemoveClass();
			handleTabSlide();
			handleTouchSpin();
			onePageLayout();
		},

		load:function(){
			handlePreloader();
			handleSelectpicker();
		},
		
		resize:function(){
			screenWidth = $( window ).width();
			handleTabSlide();
		},
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	w3cart.init();
	
	$('[data-bs-toggle="popover"]').popover();
    $('.theme-dark .custom-switch input').prop('checked', true);
	
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
	'use strict'; 
	w3cart.load();
    
	setTimeout(function(){
		jQuery('#splashscreen').addClass('active');
	 	jQuery('#splashscreen').fadeOut(1500);
	}, 1500);
	
    $('.theme-dark .custom-switch input').prop('checked', true).addClass('active');
	
});
/*  Window Load END */

/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	
	w3cart.resize();
});

jQuery(document).ready(function($) {
/*-----------------------------------------------------------------------------------*/
/*	Superfish Settings - http://users.tpg.com.au/j_birch/plugins/superfish/
/*-----------------------------------------------------------------------------------*/

	if (jQuery().superfish) {
		  jQuery('#primary-nav ul').superfish({
			  delay: 500,
			  animation: {opacity:'show', height:'show'},
			  speed: 'fast',
			  autoArrows:false,
			  dropShadows: false
		  }); 
	}; 

	//This code makes sidebar and main posting area equal in length so as to make dotted divider line extend to full height
	jQuery(window).load(function() {
		var h1 = jQuery(".post-content").height();
		var h2 = jQuery("#sidebar").height();
		if(h1>h2){
			jQuery(".post-content").addClass('bigger_section');
			jQuery("#sidebar").addClass('smaller_section');
		}else{
			jQuery(".post-content").addClass('smaller_section');
			jQuery("#sidebar").addClass('bigger_section');
		}
	}); 

	
	jQuery('.header-top.mobile').prepend('<div id="menu-icon">Touch to Search</div>');
	jQuery(".header-top.mobile #menu-icon").next().css({'display':'none'});	
	
	/* toggle nav */
	jQuery(".header-top.mobile #menu-icon").click(function(){
		jQuery(this).next().slideToggle();
		jQuery(this).next().toggleClass("active");
		jQuery(this).toggleClass("active");
	});

	/* prepend menu icon */
	jQuery('.header-bottom #mobile-nav').prepend('<div id="menu-icon">Navigation Menu</div>');
	jQuery(".header-bottom #menu-icon").next().css({'display':'none'});	
	
	/* toggle nav */
	jQuery(".header-bottom #menu-icon").click(function(){
		jQuery(this).next().slideToggle();
		jQuery(this).next().toggleClass("active");
	});
	
/*-----------------------------------------------------------------------------------*/
/*	Overlay Effect
/*-----------------------------------------------------------------------------------*/
	//Flickr widget images hover function
	jQuery('#flickr_badge_wrapper .flickr_badge_image a').hover( function () {
		jQuery(this).find('img').stop().animate({opacity:0.7}, 500);
	}, function () {
		jQuery(this).find('img').stop().animate({opacity:1}, 500);
	});
	
/*-----------------------------------------------------------------------------------*/
/*	Contact From Validation
/*-----------------------------------------------------------------------------------*/
	if (jQuery().validate) {
		jQuery("#contactForm").validate();
	}

/*-----------------------------------------------------------------------------------*/
/*	Jquery Scroll to top
/*-----------------------------------------------------------------------------------*/
	jQuery('.top_scroll a').click(function(){
		jQuery(this).stop().animate({opacity: '0'}, 200 ,function(){
				jQuery('html, body').animate({scrollTop: '0'} ,600,function(){
					jQuery('.top_scroll a').stop().animate({opacity: '1'});					
				});
			});
		return false;
	});
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 200) {
			jQuery('a[href=#top]').fadeIn();
		} else {
			jQuery('a[href=#top]').fadeOut();
		}
	});

	/*----------------------------------------------------------------*/
	/*	Tipsy @since v1.3
	/*----------------------------------------------------------------*/
	if (jQuery().tipsy) {
		jQuery('#social_sharing a').tipsy({
			fade: true,
			gravity: 's',
			opacity: 0.8,
			offset: 5,
		});
	}

	jQuery('#footer .widget_categories li:nth-child(2n),.cat-container div.item:nth-child(2n)').css({'margin-right':0});
			
}); //End of jquery ready
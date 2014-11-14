//==================================
//! Plugin Name: jQuery Infinite Scrolling with Better Pagination and Expression Engine
//! Author: Matt Bulfair // mbulfair@allwebcafe.com
//! Contributors: Brandon Morse, Adam Plante 
//==================================

(function($){
	
	$.fn.awcinfinitescroll = function(options) {
		var element = $(this);
		var defaults = {
			theParent: 'body',
			nextSelector: '',
			nextPageSelector: '.page-next',
			singleItemSelector: '.post',
			preloadSelector: '.loading',
			paginationParentSelector: '.pagination',
			debug: false
		};
		

		
		/* Sets Custom Options */
		defaults = $.extend(defaults, options);
		
		var element = this;
		//var nextSelector = "";
		var imWorkingHere = false;
		
		
		$(window).bind("scroll",function(){
			var extraspace = '0';
			
			/* Check if mobile device, and add extra spacing */
			if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
				extraspace = '60'; // pixels
			}
			
			/* When at the bottom of the page */
			//if ($(window).scrollTop() == $(document).height() - $(window).height() - extraspace) { 
			if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
				
				//Debug Information
				if(defaults.debug){
					console.log('You\'ve reached the bottom of the window');
					console.log('Next Selector is Set at:'+ defaults.nextSelector);
				}
				
				if ( ! imWorkingHere) {
					
					if (defaults.nextSelector == "") {
						// this is the link to the next page in EE pagination
						
						var checkforNext =  $(defaults.nextPageSelector).length;
						
						if(defaults.debug){
							console.log('Total Number of Links on the page '+ checkforNext);
						}
						
						if(checkforNext != 0) {
							defaults.nextSelector = $(defaults.nextPageSelector).attr('href');
							
							if(defaults.debug){
								console.log('A next button is on the page and the link goes to:'+ defaults.nextSelector);
							}
						} else {
							defaults.nextSelector = 'done';
						}
					}
					
					function params(n) {
						defaults.nextSelector = n;
						
						if (n == 'end') {
							defaults.nextSelector = 'done';
						}
					}
					
					if(defaults.nextSelector != 'done') {
					
						$.ajax({
							url: defaults.nextSelector,
							type : "GET",
							dataType: "html",
							
							beforeSend: function(){
								imWorkingHere = true;
								$(defaults.preloadSelector).fadeIn('fast');
								
							},
							
							success: function(data) {
								
								var results = $(data).find(defaults.theParent).find(defaults.singleItemSelector);
								var nextGroup = $(data).find('a'+defaults.nextPageSelector).attr('href');
								
								if(defaults.debug){
									console.log('SM // The AJAX PARENT: ' + defaults.theParent);
									console.log('SM // The AJAX Selector: '+ defaults.singleItemSelector);
									console.log('SM // The AJAX Next Page Selector: '+ defaults.nextPageSelector);
									console.log('SM // AJAX Results: '+ results);
									console.log('SM // Next Group URL: '+ nextGroup);
								}
								
								if(typeof nextGroup == "undefined") {
									
								$.each(results, function(index,value){
									
									$(defaults.theParent).append(value);
								});
		
								params('end');
								
								} else {
									params(nextGroup);
									$.each(results, function(index,value){
									
										$(defaults.theParent).append(value);
									});
								}
							},
		
							complete: function(data) {
								//addthis.toolbox('.addthis_toolbox');
								$(defaults.preloadSelector).fadeOut('fast');
								imWorkingHere = false;
								/*This Cleans up any reference of the pagination div mainly a fix for IE8 */
								element.find(defaults.paginationParentSelector).remove();
								
							}
							
						});
					}
				}
			}
		
			
		});
		
	}
	
})(jQuery);
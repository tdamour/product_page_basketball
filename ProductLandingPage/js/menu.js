(function($) {
	var toggleClick = 0; 
		$('.nav-toggle-label').click(function(){
				$('.nav-toggle-label').toggleClass('active');
				$('.content_section').css("margin-top","25px"); 
				toggleClick++;
		})
		
		$('.nav-link a').bind('click',(function(event){
		var $anchor = $(this);
			if(toggleClick != 0)
			{
				toggleClick = 0;
				$('#nav-toggle').prop("checked", false);
					$('.nav-toggle-label').toggleClass('active');
					//$('.content_section h1').css("margin-top","40%"); 
					 $('html, body').stop().animate({
					scrollTop: ($($anchor.attr('href')).offset().top - 120)
				}, 1250, 'linear');
				 
				 event.preventDefault();
			}
				
		}));
		/* else if(windowWidth > largestmobile)
		{
			$('#nav-toggle').prop("checked", true);
		} */
	})(jQuery); // End of use strict
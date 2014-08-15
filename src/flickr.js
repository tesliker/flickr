

(function ($) {  

  Drupal.behaviors.flickr = {

    attach: function (context, settings) {            

     // All our js code here
	$(document).ready(function() {
// simplest example
		$('.slideShow').slideShow({
			interval: 3
		});
	});
     // end our js code

   }

 };})(jQuery);

$(function() {


	$(document).on('keydown', function(e) {
		console.log(e.keyCode);

		var boxMan = $('#boxMan');

		if(e.keyCode === 39) {
						
			var oldPosition = parseInt(boxMan.css('left'));
			
			var newPosition = oldPosition + 10 + 'px';

			boxMan.css('left', newPosition);
			
		} else if (e.keyCode === 40) {

                         var oldPosition = parseInt(boxMan.css('top'));
                         var newPosition = oldPosition + 10 + 'px';
                         boxMan.css('top', newPosition);

		} else if (e.keyCode === 37) {
                          var oldPosition = parseInt(boxMan.css('left'));
                          var newPosition = oldPosition - 10 + 'px';
                          boxMan.css('left', newPosition);

		} else if (e.keyCode === 38) {
                         var oldPosition = parseInt(boxMan.css('top'));
                         var newPosition = oldPosition - 10 + 'px';
                         boxMan.css('top', newPosition);
		}

	});

});

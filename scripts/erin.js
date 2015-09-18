$(function() {


	$(document).on('keydown', function(e) {
		console.log(e.keyCode);

		var boxMan = $('#boxMan');

		if(e.keyCode === 39) {
						
			var oldPosition = parseInt(boxMan.css('left'));
			
			var newPosition = oldPosition + 10 + 'px';

			boxMan.css('left', newPosition);
			
		} else if (e.keyCode === 40) {

		} else if (e.keyCode === 38) {

		} else if (e.keyCode === 37) {

		}

	});

});

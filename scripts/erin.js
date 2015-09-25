$(function() {


	$(document).on('keydown', function(e) {
		console.log(e.keyCode);

		var deathStar = $('#deathStar');

		if(e.keyCode === 39) {
						
			var oldPosition = parseInt(deathStar.css('left'));
			
			var newPosition = oldPosition + 50 + 'px';

			deathStar.css('left', newPosition);
			
		} else if (e.keyCode === 40) {

                         var oldPosition = parseInt(deathStar.css('top'));
                         var newPosition = oldPosition + 50 + 'px';
                         deathStar.css('top', newPosition);

		} else if (e.keyCode === 37) {
                          var oldPosition = parseInt(deathStar.css('left'));
                          var newPosition = oldPosition - 50 + 'px';
                          deathStar.css('left', newPosition);

		} else if (e.keyCode === 38) {
                         var oldPosition = parseInt(deathStar.css('top'));
                         var newPosition = oldPosition - 50 + 'px';
                         deathStar.css('top', newPosition);
		}

	});

	$(function() {
    	$('#deathStar').draggable();

  });

});

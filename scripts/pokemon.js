$(function() {

	window.navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position);

		var lat = position.coords.latitude;
		var lon = position.coords.longitude;

		$.ajax({
			 url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon+ '&units=imperial'
		}).done(function(data) {
			
		$('#name').html(data.name)
		$('#temperature').html(data.main.temp);	

		});
				
	});		

});
	
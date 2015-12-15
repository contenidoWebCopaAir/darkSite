$(document).ready(function(){
	var reserve = $("#subpanel_reserve_flights"),
		tabFlights = $("#tab_flights"),
		tabReserve = $("#tab_reserve");

	reserve.hide();

	tabFlights.removeClass('selected');
	tabReserve.removeClass('selected');

	tabFlights.click(function(){
		reserve.slideToggle();
	});

	tabReserve.click(function(){
		reserve.slideToggle();
	});

});
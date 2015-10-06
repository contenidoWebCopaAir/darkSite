(function(){
	var data = {
		menu: {
			en: [
				{text: 'Book Your Trip',
				url: 'https://bookings.copaair.com/CMGS/AirSearchExternalForward.do?tripType=RT&pos=CMGS&lang=en'},
				{text: 'Web Check-In', url: 'http://checkin.copaair.com/web/' },
				{text: 'Manage your booking', url: 'http://www.copaair.com/sites/CC/en/manage-your-reservation/Pages/landing-page.aspx' },
				{text: 'Flight Information', url: 'http://www.copaair.com/sites/CC/en/manage-your-reservation/Pages/landing-page.aspx'},
				{text: 'Mileage Plus', url: 'http://www.copaair.com/sites/CC/en/MileagePlus/Pages/MileagePlus.aspx'},
				{text: 'Promotions', url: 'http://www.copaair.com/sites/gs/en/deals-and-offers/pages/web-deals.aspx'}
			],
			es: [
				{text: 'Reserve Su Viaje', url: 'https://bookings.copaair.com/CMGS/AirSearchExternalForward.do?tripType=RT&pos=CMGS&lang=es'},
				{text: 'Web Check-In', url: 'http://checkin.copaair.com/web/' },
				{text: 'Maneje su Reserva', url: 'http://www.copaair.com/sites/CC/es/manage-your-reservation/Pages/landing-page.aspx' },
				{text: 'Información de Vuelos', url: 'http://www.copaair.com/sites/CC/es/manage-your-reservation/Pages/landing-page.aspx'},
				{text: 'ConnectMiles', url: 'https://connectmiles.copaair.com/es?utm_source=copaair.com&utm_medium=referral&utm_campaign=copaairESmenu'},
				{text: 'Promociones', url: 'http://www.copaair.com/sites/gs/es/deals-and-offers/pages/web-deals.aspx'}
			],

			pt: [
				{text: 'Reserve a sua viagem', url: 'https://bookings.copaair.com/CMGS/AirSearchExternalForward.do?tripType=RT&pos=CMGS&lang=pt'},
				{text: 'Web Check-In', url: 'http://checkin.copaair.com/web/' },
				{text: 'Administre a sua reserva', url: 'http://www.copaair.com/sites/CC/pt/manage-your-reservation/Pages/landing-page.aspx' },
				{text: 'Informações de voos', url: 'http://www.copaair.com/sites/CC/pt/manage-your-reservation/Pages/landing-page.aspx'},
				{text: 'MileagePlus®', url: 'https://connectmiles.copaair.com/pt?utm_source=copaair.com&utm_medium=referral&utm_campaign=copaairESmenu'},
				{text: 'Promoções', url: 'http://www.copaair.com/sites/gs/pt/deals-and-offers/pages/web-deals.aspx'}
			]
		}

	};
	var app = angular.module('darkSite', []);

	app.controller('MenuController', ['$scope', function($scope){
			//Cambiar el menú segun el selector de idioma
			$scope.current_lang = [];
			$scope.change = function(){
				alert($scope.current_lang);
			};

	}]);

})();
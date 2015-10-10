(function(){
	var data = {
		select:{
			en: [
				{ value: 'en', label: 'English' },
				{ value: 'es', label: 'Spanish' },
				{ value: 'pt', label: 'Portuguese'}
			],  
			es: [
				{ value: 'en', label: 'Inglés' }, 
				{ value: 'es', label: 'Español' },
				{ value: 'pt', label: 'Portugués' }
			],
			pt: [
				{ value: 'en', label: 'Inglês' }, 
				{ value: 'es', label: 'Espanhol' },
				{ value: 'pt', label: 'Português' } 
			]
		},
		menu_top: {
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
		},
		menu_left: {			
			en: {
				title: 'Aditional Info',
				items: [
					{ text: 'Latest News', url: 'content/en/latest-news-en.html' },
					{ text: 'Press Releases', url: 'content/en/press-releases-en.html' },
					{ text: 'Contact Numbers', url: 'content/en/contact-numbers.html' },
					{ text: 'Assistance to Family', url: 'content/en/assistance-to-family.html' },
					{ text: 'Corporate', url: 'content/en/corporate.html' }
				]
			},
			es: {
				title: 'Información Adicional',
				items: [
					{ text: 'Ultimas Noticias', url: 'content/es/latest-news-en.html' },
					{ text: 'Comunicados de Prensa', url: 'content/es/press-releases-en.html' },
					{ text: 'Números de Contacto', url: 'content/es/contact-numbers.html' },
					{ text: 'Asistencia Familiar', url: 'content/es/assistance-to-family.html' },
					{ text: 'Corporativo', url: 'content/es/corporate.html' }
				]
			},
			pt: {
				title: 'Informação Adicional',
				items: [
					{ text: 'Últimas Notícias', url: 'content/pt/latest-news-en.html' },
					{ text: 'Comunicados da imprensa', url: 'content/pt/press-releases-en.html' },
					{ text: 'Números de Contato', url: 'content/pt/contact-numbers.html' },
					{ text: 'Assistência à Família', url: 'content/pt/assistance-to-family.html' },
					{ text: 'Corporativo', url: 'content/pt/corporate.html' }
				]
			}
		},
		menu_bottom: {
			en: {
				col1:{
					title: 'Flight Information',
					items: [
						{ text: 'Baggage', url: 'http://www.copaair.com/sites/CC/en/informacion-de-viaje/Pages/condiciones-generales-de-equipaje.aspx'  },
						{ text: 'Travelling with pets', url: 'http://www.copaair.com/sites/CC/en/informacion-de-viaje/Pages/Mascotas.aspx' },
						{ text: 'Baggage and service fees', url: 'http://www.copaair.com/sites/CC/en/informacion-de-viaje/Pages/tarifas-equipaje-y-de-servicios-opcionales.aspx' },
						{ text: 'Where we fly', url: 'http://www.copaair.com/sites/CC/en/flight-information/Pages/routemap.aspx' },
						{ text: 'Inmigration requirements', url: 'http://www.copaair.com/sites/cc/en/Pages/timatic.aspx' },
						{ text: 'Special Assistance', url: 'http://www.copaair.com/sites/CC/en/informacion-de-viaje/Pages/Servicios-Especiales-para-Pasajeros.aspx' },
						{ text: 'Flight status', url: 'http://www.copaair.com/sites/CC/en/flight-information/Pages/flightstatus.aspx' }

					]
				}	
			}
		}

	};
	var app = angular.module('darkSite', []);

	app.controller('MenuController', function(){
			//El idioma por defecto sera el inglés
			this.currentLang 	= { value:'en', label: 'English' };

			this.navClass 		= 'nav-en';

			this.select 		= data.select.en;
			this.menuTop 		= data.menu_top.en;
			this.menuLeft 		= data.menu_left.en;

			/**
			* Selecciona el idioma deseado
			**/
			this.setLang = function(){
				switch(this.currentLang.value){
					case 'en':
						this.select		= data.select.en;
						this.menuTop 	= data.menu_top.en;
						this.menuLeft 	= data.menu_left.en;
						this.navClass 	= 'nav-en';
						break;
					case 'es':
						this.select		= data.select.es;		
						this.menuTop 	= data.menu_top.es;
						this.menuLeft 	= data.menu_left.es;
						this.navClass 	= 'nav-es';
						break;
					case 'pt':
						this.select		= data.select.pt;
						this.menuTop 	= data.menu_top.pt;
						this.menuLeft 	= data.menu_left.pt;
						this.navClass 	= 'nav-pt';
						break;
				}
			};

	});

})();
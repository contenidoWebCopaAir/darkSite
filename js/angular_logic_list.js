(function(){
	var data = {
		width: window.innerWidth,
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
					{ text: 'Corporate', url: 'content/en/corporate-tabs.html' },
					{ text: 'Press Releases', url: 'content/en/press-releases.html' },
					{ text: 'Latest News', url: 'content/en/latest-news-en.html' },
					{ text: 'Assistance to Family', url: 'content/en/assistance-to-family.html' }
				]
			},
			es: {
				title: 'Información Adicional',
				items: [
					{ text: 'Corporativo', url: 'content/es/corporate.html' },
					{ text: 'Comunicados de Prensa', url: 'content/es/press-releases.html' },
					{ text: 'Ultimas Noticias', url: 'content/es/latestNews.html' },
					{ text: 'Asistencia Familiar', url: 'content/es/assistance-to-family.html' }
				]
			},
			pt: {
				title: 'Informação Adicional',
				items: [
					{ text: 'Corporativo', url: 'content/pt/corporate.html' },
					{ text: 'Comunicados da imprensa', url: 'content/pt/press-releases.html' },
					{ text: 'Últimas Notícias', url: 'content/pt/latest-news.html' },
					{ text: 'Assistência à Família', url: 'content/pt/assistance-to-family.html' }
				]
			}
		}, 
		min_footer: {
			en: {
				lists:[
						{
						id: 1,							
						title: 'Fligth Information',
						items: [
							{ label: 'Baggage', url: 'http://www.copaair.com/sites/CC/en/informacion-de-viaje/Pages/condiciones-generales-de-equipaje.aspx' },
							{ label: 'Travelling with pets', url: 'http://www.copaair.com/sites/CC/en/informacion-de-viaje/Pages/Mascotas.aspx' },
							{ label: 'Baggage and service fees', url: 'http://www.copaair.com/sites/CC/en/informacion-de-viaje/Pages/tarifas-equipaje-y-de-servicios-opcionales.aspx' },
							{ label: 'Where we fly', url: 'http://www.copaair.com/sites/CC/en/flight-information/Pages/routemap.aspx' },
							{ label: 'Inmigrations Requirements', url: 'http://www.copaair.com/sites/cc/en/Pages/timatic.aspx' },
							{ label: 'Special Assistance', url: 'http://www.copaair.com/sites/CC/en/informacion-de-viaje/Pages/Servicios-Especiales-para-Pasajeros.aspx' },
							{ label: 'Flight Status', url: 'http://www.copaair.com/sites/CC/en/flight-information/Pages/flightstatus.aspx' },
							{ label: 'Timetables', url: 'http://www.copaair.com/sites/CC/en/flight-information/Pages/timetables.aspx' },
							{ label: 'Flight Notifications', url: 'http://www.copaair.com/sites/cc/en/Pages/FlightNotifications.aspx' },
							{ label: 'Onboard', url: 'http://www.copaair.com/sites/CC/en/informacion-de-viaje/Pages/Durante-el-Vuelo.aspx' }
						] 
					},
					{
						id: 2,
						title: 'Passenger Service',
						items: [
							{ label: 'Contact us', url: 'http://www.copaair.com/sites/CC/en/Nuestros-Productos/Pages/seguro-de-viaje.aspx' },
							{ label: 'Request a refund', url: 'http://www.copaair.com/sites/CC/en/informacion-de-viaje/Pages/Reembolsos.aspx' },
							{ label: 'Baggage Claim', url: 'http://www.copaair.com/sites/CC/en/Acerca-de-Copa-Airlines/Pages/formulario-reclamo-equipaje.aspx' },
							{ label: 'Report your forgotten item', url: 'http://www.copaair.com/sites/CC/en/Acerca-de-Copa-Airlines/Pages/formulario-articulos-olvidados.aspx' },
							{ label: 'Comments / Complains', url: 'http://www.copaair.com/sites/CC/en/informacion-de-viaje/Pages/atencion-pasajero.aspx' },
							{ label: 'Electronic declaration of Goods (Brazil)', url: 'http://www.copaair.com/sites/CC/en/impuestos/Pages/declaracion-porte-valores-br.aspx' },
							{ label: 'Affidavit for Travel to Cuba', url: 'http://www.copaair.com/sites/CC/en/informacion-de-viaje/Pages/declaracion-jurada-de-viajes-a-cuba.aspx' },
							{ label: 'Law No. 20.831 of Chile', url: 'http://www.copaair.com/sites/cc/en/informacion-de-viaje/pages/ley-num-20-831-de-chile.aspx' },
							{ label: 'Our Customer Commitment', url: 'http://www.copaair.com/sites/cc/en/acerca-de-copa-airlines/pages/compromiso-con-el-pasajero.aspx' },
							{ label: 'Digital receipt for tax purposes (Mexico)', url: 'http://www.copaair.com/sites/CC/en/informacion-de-viaje/Pages/comprobante-fiscal-digital-mexico.aspx' }
						]
					}
				]
				
			},
			es: {
				lists: [
					{
						id: 1,
						title: 'Información de Vuelos',
						items: [
							{ label: 'Equipaje', url: 'http://www.copaair.com/sites/CC/es/informacion-de-viaje/Pages/condiciones-generales-de-equipaje.aspx'  },
							{ label: 'Viajando con mascotas', url: 'http://www.copaair.com/sites/CC/es/informacion-de-viaje/Pages/Mascotas.aspx' },
							{ label: 'Cargos de equipaje y servicios', url: 'http://www.copaair.com/sites/CC/es/informacion-de-viaje/Pages/tarifas-equipaje-y-de-servicios-opcionales.aspx' },
							{ label: 'A dónde volamos', url: 'http://www.copaair.com/sites/CC/es/flight-information/Pages/routemap.aspx' },
							{ label: 'Requisitos migratorios', url: 'http://www.copaair.com/sites/cc/ES/Pages/timatic.aspx' },
							{ label: 'Asistencia especial', url: 'http://www.copaair.com/sites/CC/es/informacion-de-viaje/Pages/Servicios-Especiales-para-Pasajeros.aspx' },
							{ label: 'Estado de vuelos', url: 'http://www.copaair.com/sites/CC/es/flight-information/Pages/flightstatus.aspx' },
							{ label: 'Itinerarios', url: 'http://www.copaair.com/sites/CC/es/flight-information/Pages/timetables.aspx' },
							{ label: 'Notificaciones de vuelo', url: 'http://www.copaair.com/sites/cc/ES/Pages/FlightNotifications.aspx' },
							{ label: 'A bordo', url: 'http://www.copaair.com/sites/CC/es/informacion-de-viaje/Pages/Durante-el-Vuelo.aspx' },
							{ label: 'Opciones de registro', url: 'http://www.copaair.com/sites/CC/es/servicios/Pages/opciones-registro.aspx' }
						]
					},
					{
						id: 2,
						title: 'Atención al pasajero',
						items: [
							{ label: 'Contáctenos', url: 'http://www.copaair.com/sites/CC/es/Acerca-de-Copa-Airlines/Pages/Contactenos.aspx' },
							{ label: 'Solicite un reembolso', url: 'http://www.copaair.com/sites/CC/es/informacion-de-viaje/Pages/Reembolsos.aspx' },
							{ label: 'Reclamo de equipaje', url: 'http://www.copaair.com/sites/CC/es/informacion-de-viaje/Pages/atencion-pasajero.aspx' },
							{ label: 'Reporte su artículo olvidado', url: 'http://www.copaair.com/sites/CC/es/Acerca-de-Copa-Airlines/Pages/formulario-articulos-olvidados.aspx' },
							{ label: 'Sugerencias y reclamos', url: 'http://www.copaair.com/sites/CC/es/informacion-de-viaje/Pages/atencion-pasajero.aspx' },
							{ label: 'Declaración electrónica de bienes (Brasil)', url: 'http://www.copaair.com/sites/CC/es/impuestos/Pages/declaracion-porte-valores-br.aspx' },
							{ label: 'Ley No. 20.831 de Chile', url: 'http://www.copaair.com/sites/CC/es/informacion-de-viaje/Pages/ley-num-20-831-de-chile.aspx' },
							{ label: 'Declaración jurada de viajes a Cuba', url: 'http://www.copaair.com/sites/CC/es/informacion-de-viaje/Pages/declaracion-jurada-de-viajes-a-cuba.aspx' },
							{ label: 'Desistimiento y retracto', url: 'http://www.copaair.com/sites/CC/es/Acerca-de-Copa-Airlines/Pages/desistimiento-y-retracto-co.aspx' },
							{ label: 'Nuestro Compromiso con el cliente', url: 'http://www.copaair.com/sites/cc/es/acerca-de-copa-airlines/pages/compromiso-con-el-pasajero.aspx' },
							{ label: 'Comprobante fiscal digital (México)', url: 'http://www.copaair.com/sites/CC/es/informacion-de-viaje/Pages/comprobante-fiscal-digital-mexico.aspx' }
						]
					}

				] 
			},
			pt: {
				lists: [
					{
						id: 1,
						title: 'Informações de voos',
						items: [
							{ label: 'Bagagem', url: 'http://www.copaair.com/sites/CC/pt/informacion-de-viaje/Pages/condiciones-generales-de-equipaje.aspx' },
							{ label: 'Viajar com animais de estimação', url: 'http://www.copaair.com/sites/CC/pt/informacion-de-viaje/Pages/Mascotas.aspx' },
							{ label: 'Taxas de bagagem e serviços', url: 'http://www.copaair.com/sites/CC/pt/informacion-de-viaje/Pages/tarifas-equipaje-y-de-servicios-opcionales.aspx' },
							{ label: 'Para onde voamos', url: 'http://www.copaair.com/sites/CC/pt/flight-information/Pages/routemap.aspx' },
							{ label: 'Requistos de imigração', url: 'http://www.copaair.com/sites/cc/pt/Pages/timatic.aspx' },
							{ label: 'Assistência especial', url: 'http://www.copaair.com/sites/CC/pt/informacion-de-viaje/Pages/Servicios-Especiales-para-Pasajeros.aspx' },
							{ label: 'Status do voo', url: 'http://www.copaair.com/sites/CC/pt/flight-information/Pages/flightstatus.aspx' },
							{ label: 'Horários', url: 'http://www.copaair.com/sites/CC/pt/flight-information/Pages/timetables.aspx' },
							{ label: 'Notificação de voo', url: 'http://www.copaair.com/sites/cc/pt/Pages/FlightNotifications.aspx' },
							{ label: 'A bordo', url: 'http://www.copaair.com/sites/CC/pt/informacion-de-viaje/Pages/Durante-el-Vuelo.aspx' },
							{ label: 'Opções de registro para seu voo', url: 'http://www.copaair.com/sites/CC/pt/servicios/Pages/opciones-registro.aspx' }
						]
					},
					{ 
						id: 2,
						title: 'Atendimento ao cliente',
						items: [
							{ label: 'Fale conosco', url: 'http://www.copaair.com/sites/CC/pt/Acerca-de-Copa-Airlines/Pages/Contactenos.aspx' },
							{ label: 'Solicitar um reembolso', url: 'http://www.copaair.com/sites/CC/pt/informacion-de-viaje/Pages/reembolsos.aspx' },
							{ label: 'Retirada de Bagagem', url: 'http://www.copaair.com/sites/CC/pt/informacion-de-viaje/Pages/atencion-pasajero.aspx' },
							{ label: 'Informe seu item esquecido', url: 'http://www.copaair.com/sites/CC/pt/Acerca-de-Copa-Airlines/Pages/formulario-articulos-olvidados.aspx' },
							{ label: 'Sugestões e reclamações', url:'http://www.copaair.com/sites/CC/pt/informacion-de-viaje/Pages/atencion-pasajero.aspx' },
							{ label: 'Declaração Eletrônica de Bens (Brasil)', url: 'http://www.copaair.com/sites/CC/pt/impuestos/Pages/declaracion-porte-valores-br.aspx' },
							{ label: 'Desistência e arrependimento', url: 'http://www.copaair.com/sites/CC/pt/Acerca-de-Copa-Airlines/Pages/desistimiento-y-retracto-co.aspx' },
							{ label: 'Nosso compromisso com o cliente', url: 'http://www.copaair.com/sites/cc/pt/acerca-de-copa-airlines/pages/compromiso-con-el-pasajero.aspx' },
							{ label: 'Comprovante fiscal digital (México)', url: 'http://www.copaair.com/sites/CC/pt/informacion-de-viaje/Pages/comprobante-fiscal-digital-mexico.aspx' }
						]
					}
				]
			} 
			
		},
		full_footer: {
			en: {
				lists: [
					{
						title: 'Reservations',
						items: [
							{ label: 'Book you flight', url: 'https://bookings.copaair.com/CMGS/AirSearchExternalForward.do?tripType=RT&pos=CMGS&lang=en' },
							{ label: 'Book your hotel', url: 'http://www.travelnow.com/templates/354655?lang=en' },
							{ label: 'Book your Car', url: 'http://cars.cartrawler.com/copaair/en/?' },
							{ label: 'Request and Upgrade', url: 'http://www.copaair.com/sites/CC/en/Nuestros-Productos/Pages/plusgrade-info.aspx' },
							{ label: 'Travel Insurance', url: 'http://www.copaair.com/sites/CC/en/Nuestros-Productos/Pages/seguro-de-viaje-ace.aspx' },
							{ label: 'Book your Insurance', url: 'https://copa.acetravelinsurance.com/PA/?sessionLocale=en' },
							{ label: 'Destination Guides', url: 'http://destinationsguide.copaair.com/en/' },
							{ label: 'Manage your booking', url: 'https://bookings.copaair.com/CMGS/ReservationSearch.do?lang=en' },
							{ label: 'Web Check-In', url: 'http://checkin.copaair.com/web/' },
							{ label: 'm.copaair.com', url: 'http://www.copaair.com/sites/CC/en/beneficios-portal/Pages/copa-mobile.aspx' }	
						]
					}
				]
			}
		},
		latestNews: {
			en: {
				title: 'Latest News',
				text: '<p>PANAMA (Nov. 26, 2014) – Copa Airlines regrets to inform that flight CM9972, aircraft model EMB190 (HP-1540), involved in a hijack incident, suffered an explosion upon landing at Tocumen International Airport in Panama City.</p>   <p>Preliminarily information shows that out of the 58 passengers and 5 crew members on board, there are 8 severely injured passengers, 10 minor injuries, and 39 uninjured passengers among which are 3 suspected kidnappers and all crew members. We also regret to confirm that as of now there are 5 fatalities and one missing passenger.</p> <p>Copa Airlines has made the following toll-free telephone numbers available to the families of the passengers and crew of flight CM9972:</p> <ul><li><strong><p>From Panama 8000197</p></strong></li><li><strong><p>From Colombia 018007102179</p></strong></li><li><strong><p>From United States 8887057560</p></strong></li><li><strong><p>From Venezuela 08001009107</p></strong></li><li><strong><p>From Salvador 8006814</p></strong></li><li><strong><p>From Spain 900808890</p></strong></li><li><strong><p>From Cuba 14073620632 (call collect)</p></strong></li></ul><p>These numbers will be available for exclusive use by family members of passengers and crew 24 hours/day. They are not intended for use by media.</p><p>Media may call the Copa Airlines Crisis Communications Call Center: (+507) 304-2077. Copa Airlines will conduct a news conference at 4 p.m., local Panama time in the Auditorium of its Headquarters located in Urbanización Costa del Este in Panama.</p>'
			},
			es: {
				title: 'Notas de Prensa',
				text: '<h3>INFORMACIÓN IMPORTANTE DEL ESTADO DEL VUELO CM 9972</h3>' +
                '<p>PANAMÁ, (26 de Noviembre de 2014) – Copa Airlines lamenta informar que el vuelo CM 9972,' + 
                'modelo EMB190 con matrícula HP-1540, objeto de un secuestro aéreo, sufrió una explosión en el momento de su' + 
                'aterrizaje en el Aeropuerto Internacional de Tocumen en la Ciudad de Panamá.</p>' +
				'<p>De manera preliminar, se conoce que de los 58 pasajeros y 5 tripulantes a bordo, hay 8' + 
				'heridos de gravedad, 10 heridos leves y 39 ilesos entre los cuales se encuentran los 3 presuntos secuestradores' + 
				'y todos los tripulantes. Por otro lado, lamentamos confirmar que hasta el momento se cuentan 5 fallecidos y un' + 
				'pasajero desaparecido.</p><p>Copa Airlines ha puesto a la disposición de los familiares de los pasajeros y tripulación' +
				'del vuelo CM 9972 los siguientes números de teléfono sin costo:</p>' +
				'<p><strong>Desde Panamá 8000197<br/>' +
				'Desde Colombia  018007102179<br/>' +
				'Desde Estados Unidos 8887057560<br/>' +
				'Desde Venezuela 08001009107<br/>' +
				'Desde Salvador 8006814<br/>' +
				'Desde España 900808890<br/>' +
				'Desde Cuba 14073620632 (call collect)</strong>' +
				'</p><p>Estos números están disponibles 24 horas al día. Agradecemos a los medios de comunicación' + 
				'reservar estos números para los familiares de los pasajeros y tripulantes del vuelo CM 9972.</p>' +
				'<p>Para la atención especial a los medios de comunicación, Copa Airlines pone a disposición' + 
				'el Call center del Centro de Comunicaciones en Crisis: (+507) 304-2077. </p>' +
				'<p>Por su parte, Copa Airlines llevará a cabo una rueda de prensa a las 4:00pm hora local,' + 
				'en el auditorio de las oficinas generales de Copa Airlines, en la urbanización Costa del Este de la Ciudad de' + 
				'Panamá para informar sobre las acciones que está tomando en relación a esta situación.</p>' +
                '<h3>COPA AIRLINES CONFIRMA SECUESTRO DE LA AERONAVE DEL VUELO CM 9972 CON RUTA BOGOTA – PANAMA EL DIA DE HOY</h3>' +
                '<p>PANAMÁ, (26 de Noviembre de 2014) – Copa Airlines informa que su vuelo número CM9972 que operaba la ruta' + 
                'Bogotá – Panamá y que tiene código compartido con KLM, número KL900 aparentemente ha sido objeto de un secuestro' + 
                'aéreo desde las  12:51 p.m. del día de hoy mientras estaba en vuelo. El avión, modelo EMB190 con matrícula HP-1540,' + 
                'partió a las 10:45am hora local de Panamá, con hora estimada de aterrizaje a las 12:55pm hora local y transporta 58' +
                'pasajeros y 5 tripulantes.</p> <p>Nos encontramos trabajando junto a las autoridades en el proceso de obtención de mayor información relacionada a los pasajeros y tripulantes a bordo del vuelo CM 9972. Nuestra principal prioridad es determinar su estado real y ofrecer información a la brevedad posible. Asimismo, estamos atendiendo a los familiares de los pasajeros, quienes están recibiendo todo nuestro apoyo y asistencia, dijo Pedro Heilbron, Presidente Ejecutivo de Copa Airlines.</p><p>Próximamente Copa Airlines publicará los números de teléfono de atención a los familiares de los pasajeros y tripulación del vuelo CM 9972. </p><p>En cuanto a la información relacionada a la investigación y al incidente en sí, la misma será provista y comunicada estrictamente por la Autoridad competente a medida que se confirme. Por su parte, Copa Airlines llevará a cabo una rueda de prensa a las 4:00pm hora local de Panama, en el Auditorio de sus Oficinas Generales en la urbanización Costa del Este, de la Ciudad de Panamá para informar sobre las acciones que está tomando en relación a esta situación.</p><div class="articleNews"></div><h3>COPA AIRLINES INFORMA SOBRE EL ESTADO DEL VUELO CM 9972 DEL DIA DE HOY</h3><p></p><p>PANAMÁ, (26 de noviembre de 2014) – El vuelo número CM9972 de Copa Airlines ha estado involucrado en un secuestro aéreo desde las  12:51 p.m. del día de hoy.  El avión, modelo EMB190, con matrícula HP-1540 operaba la ruta entre Bogotá y Panamá , despegó a las 10:40AM hora local de Panamá, transportaba 58 de pasajeros y 5 tripulantes.</p><p>En estos momentos la aerolínea se encuentra trabajando con las autoridades correspondientes y está en proceso de recopilar toda la información pertinente. La autoridad competente en Panamá divulgará más información al público a medida que se avance con las investigaciones.</p>'
            },
			pt: {
				title: 'Press Releases',
				text: ' <h3>INFORMAÇÃO IMPORTANTE SOBRE O ESTADO DO VOO CM 9972</h3> <p>PANAMÁ, (26 de novembro de 2014) – A Copa Airlines lamenta informar que o voo CM 9972, modelo Embraer 190 com matricula HP-1540, objeto de um sequestro aéreo, sofreu uma explosão no momento de sua aterrissagem no Aeroporto Internacional de Tocumen, na Cidade do Panamá. </p><p>Preliminarmente, sabe-se que dos 58 passageiros e cinco tripulantes a bordo, existem oito feridos gravemente, dez que sofreram ferimentos leves e 39 ilesos, entre os quais se encontram os três sequestradores suspeitos e os demais tripulantes. Além disso, lamentamos confirmar que até este momento contam-se cinco mortes e um passageiro desaparecido.</p><p>Copa Airlines coloca a disposição dos familiares dos passageiros e tripulação do voo CM 9972, os seguintes números de telefone gratuito:</p><p><strong>Desde Panamá 8000197<br/>Desde Colombia  018007102179<br/>Desde Estados Unidos 8887057560<br/>Desde Venezuela 08001009107<br/>Desde Salvador 8006814<br/>Desde España 900808890<br/>Desde Cuba 14073620632 (call collect)</strong></p><p>Estes números estão disponíveis 24 horas por dia. Agradecemos aos meios de Comunicação que reservem estes números para os familiares dos passageiros e tripulantes do voo CM 9972. </p><p>Para atendimento especial aos meios de comunicação, a Copa Airlines coloca à disposição o call center da Central de Comunicações de Crises: (+507) 304-2077. </p><p>Da sua parte, a Copa Airlines promoverá uma coletiva de imprensa às 16h (hora local), no auditorio do escritorio central da Copa Airlines, na via Costa del Este na Cidade do Panamá, para informar sobre as ações que está tomando frente a esta situação.</p><h3>COPA AIRLINES CONFIRMA SEQUESTRO DA AERONAVE DE NÚMERI CM 9972 COM ROTA BOGOTÁ-PANAMÁ NO DIA DE HOJE</h3><p></p> <p>PANAMÁ, (26 de novembro de 2014) – A Copa Airlines informa que seu voo, de número CM 9972, que operava a rota Bogotá-Panamá e apresenta codeshare com a KLM, número KL 900, aparentemente foi objeto de um sequestro aéreo desde 12h51 do dia de hoje, durante o voo. A aeronave, modelo Embraer 190, com matrícula HP-1540, partiu às 10h45, hora local do Panamá, com aterrissagem estimada para 12h55, hora local, transportava 58 passageiros e cinco tripulantes. </p><p>"Estamos trabalhando em conjunto com as autoridades no processo de obtenção de mais informações relacionadas aos passageiros e tripulantes a bordo do voo CM 9972. Nossa principal prioridade é determinar a situação atual e oferecer informações o mais rápido possível. Também estamos atendendo os familiares dos passageiros, que estão recebendo todo nosso apoio e assistência", informa Pedro Heilbron, presidente executivo da Copa Airlines.  </p><p>Em breve, a Copa Airlines divulgará os números de telefone para atendimento aos familiares dos passageiros e da tripulação do voo CM 9972. </p><p>Quanto a informações relacionadas à investigação do incidente, as mesmas serão coletadas e comunicadas estritamente pela autoridade competente, à medida que forem confirmadas. Da sua parte, a Copa Airlines promoverá uma coletiva de imprensa às 16h (horário local do Panamá), no auditório de seu escritório central na via Costa del Este, na Cidade do Panamá, para relatar as ações que está tomando frente a esta situação.</p>'
			}
		},
		history: {
			en: {
				title: 'Our History',
				text: 'Copa Airlines was founded in 1947 as the national airline of Panama. It began operations with domestic flights to three cities in Panama on Douglas DC-3/C47 planes. By 1966, the airline boasted three weekly flights to San Jose, Costa Rica, which was its first international destination. In 1969, the first AVRO 748 was introduced for flights to Kingston in Jamaica, Managua in Nicaragua and Barranquilla in Colombia. In the 1970s, Medellin, Cartagena, San Salvador and Guatemala became part of the expanding network of destination cities.',
				years: [
					{
						title: '1980',
						img: 'img/1980.jpg',
						text: 'In 1980, the airline withdrew from the domestic market to focus on its international reach. This year a Boeing 737-100 was added to the fleet. During this decade  , the airline expanded its network of destinations to include Port-au-Prince, Haiti, Santo Domingo in the Dominican Republic, San Juan in Puerto Rico and Miami in the U.S.'
					},
					{
						title: '1992',
						img: 'img/1992.jpg',
						text: 'In 1992, it began operating from the first Panamanian headquarters for flights connecting within Latin America, creating the Hub of the Americas in the Tocumen International Airport. Flights were added to Caracas in Venezuela, Mexico City, Santiago in Chile, Cali and Bogota in Colombia, Quito and Guayaquil in Ecuador, Lima in Peru, Buenos Aires in Argentina and Havana in Cuba.'
					},
					{
						title: '1998',
						img: 'img/1998.jpg',
						text: 'In 1998, a strategic alliance was formed with Continental Airlines and in 1999, the airline launched its new brand as Copa Airlines and adopted the OnePass® frequent flyer program. At the same time, it began to upgrade its fleet with Boeing 737 Next Generation planes.' 
					},
					{
						title: '2000',
						img: 'img/2000.jpg',
						text: 'The strategy  from  2000 onward was to focus on expansion within the region. For the year 2005, the airline incorporated flights to Cancun in Mexico, Sao Paulo in Brazil, San Andres in Colombia, Tegucigalpa in Honduras, and Orlando, Los Angeles and New York in the United States.'
					},
					{
						title: '2005',
						img: 'img/2005.jpg',
						text: 'In 2005, Copa Airlines, a subsidiary of Copa Holdings S.A., began trading on the New York Stock Exchange, becoming the third Latin American airline to be listed on this important exchange.'
					},
					{
						title: '2006',
						img: 'img/2006.jpg',
						text: 'In 2006, it added the destinations: Cordoba in Argentina, Guadalajara in Mexico, Washington, D.C., in the United States, and Punta Cana in the Dominican Republic. It simultaneously increased the frequency of its flights to seven destinations'
					},
					{
						title: '2008',
						img: 'img/2008.jpg',
						text: 'In 2008, it began operating flights to Port of Spain in Trinidad and Tobago, and Belo Horizonte in Brazil, while announcing new destinations such as Santa Cruz in Bolivia, Valencia in Venezuela and Aruba. Copa Airlines continues adding destinations and upgrading its modern fleet with Boeing 737-700 and 737-800 planes, and Embraer 190 planes.'
					},
					{
						title: '2009',
						img: 'img/2009.jpg',
						text: 'Announces order for 15 airplanes to be delivered between 2010 and 2015 as well as eight purchase options to be delivered between 2015 and 2017. The new aircraft will be fitted with the distinctive Boeing Sky Interior design.'
					},
					{
						title: '2010',
						img: 'img/2010.jpg',
						text: 'Copa Airlines starts flying to the island of St. Maarten and announces that Aero República will operate under the Copa Airlines Colombia brand name. In addition, Copa Airlines communicates that it is in the process of joining the Star Alliance. Copa Airlines and Boeing announce the acquisition of 32 Next Generation 737-800 aircraft, including 10 purchase options, for a total of approximately US $2.6 billion dollars; the largest request for new aircraft in the history of Copa Airlines.'
					},
					{
						title: '2011',
						img: 'img/2011.jpg',
						text: 'Expands its Hub of the Americas in Panama from 4 to 6 flight banks and grows its network with 7 new destinations, solidifying the Hub of the Americas’ leadership position in the region. Copa Holdings, S.A. (NYSE-Listed CPA) celebrates five years of trading.'
					},
					{
						title: '2012',
						img: 'img/2012.jpg',
						text: 'Announces the new MileagePlus Frequent Flyer Program along with United Airlines and in June, formally joining the airlines global network, Star Alliance. Starts its flight operations to Las Vegas, Recife, Curazao, Guanacaste, and Iquitos.'
					},
					{
						title: '2013',
						img: 'img/2013.jpg',
						text: 'Begins service to Boston and Tampa; receives the SkyTrax awards for the Best Airline in Central America and the Caribbean and the Airline with the Best Cabin Crew and Airport Staff in Central America and the Caribbean; and ends the year with a fleet of 90 airplanes.'
					},
					{
						title: '2014',
						img: 'img/2014.jpg',
						text: 'Begins serving 5 new cities: Georgetown, Guyana; Fort Lauderdale, United States; Montreal, Canada; Santa Clara, Cuba; and Campinas, Brazil; and ends the year with 98 airplanes. Also recognized as “Mexico & Central America’s Leading Airline” by World Travel Awards.'
					}

				] 
			},
			es: {
				title: 'Nuestra Historia',
				text: 'Copa Airlines fue fundada en 1947 como la Compañía Panameña de aviación. Inició vuelos a tres ciudades de Panamá utilizando aviones Douglas DC-3/C47. En 1966 ya tenía tres frecuencias semanales a San José, Costa Rica que fue el primer destino internacional. En 1969 incorporó un avión AVRO 748 para volar a la ciudad de Kingston en Jamaica, Managua en Nicaragua y Barranquilla en Colombia. En la década de 1970 incorpora las ciudades de Medellín, Cartagena, San Salvador y Guatemala a su creciente red de rutas. ',
				years: [
					{
						title: '1980',
						img: 'img/1980.jpg',
						text: 'Se retira del mercado doméstico para enfocarse en su alcance internacional. Ese año incorpora un avión Boeing 737-100. Durante esa década  la aerolínea amplía sus destinos a las ciudades de Puerto Príncipe en Haití, Santo Domingo en República Dominicana, San Juan en Puerto Rico y Miami en Estados Unidos.'
					},
					{
						title: '1992',
						img: 'img/1992.jpg',
						text: 'Inicia operaciones el primer centro de conexiones de vuelos dentro de Latinoamérica con sede en Panamá creando el “Hub de las Américas” en el Aeropuerto Internacional de Tocumen. Se añaden los destinos de Caracas en Venezuela, Ciudad de México, Santiago de Chile, Cali y Bogotá en Colombia, Quito y Guayaquil en Ecuador, Lima en Perú, Buenos Aires en Argentina y La Habana en Cuba.'
					},
					{
						title: '1998',
						img: 'img/1998.jpg',
						text: 'Se crea una alianza estratégica con Continental Airlines y en 1999 lanza su nueva imagen como Copa Airlines y adopta el programa de viajero frecuente OnePass®. Al mismo tiempo inicia la renovación de su flota con aviones Boeing 737 Next Generation.'
					},
					{
						title: '2000',
						img: 'img/2000.jpg',
						text: 'La estrategia se enfoca en expandirse en la región. Para el 2005 ha incorporado los destinos de Cancún en México, Sao Paulo en Brasil, San Andrés en Colombia, Tegucigalpa en Honduras y Orlando, Los Ángeles y Nueva York en Estados Unidos.'
					},
					{
						title: '2005',
						img: 'img/2005.jpg',
						text: 'A través de Copa Holdings, S. A. la aerolínea entra a cotizarse en la Bolsa de Valores de Nueva York convirtiéndose en la tercera línea aérea latinoamericana en cotizar en este importante mercado.'
					},
					{
						title: '2006',
						img: 'img/2006.jpg',
						text: 'Añade los destinos de Córdoba en Argentina, Guadalajara en México y Washington D.C. en Estados Unidos y Punta Cana en República Dominicana y aumenta frecuencias de vuelo a siete de sus destinos. '
					},
					{
						title: '2008',
						img: 'img/2008.jpg',
						text: 'Inicia operaciones a Puerto España y Belo Horizonte y anuncia destinos nuevos como Santa Cruz en Bolivia, Valencia en Venezuela y Aruba. Copa Airlines sigue añadiendo destinos y continúa renovando su moderna flota con aviones Boeing 737-700 y 737-800 y Embraer 190.'
					},
					{
						title: '2009',
						img: 'img/2009.jpg',
						text: 'Anuncia pedido para 15 aeronaves con entrega entre 2010 y 2015 y ocho opciones para entrega entre el 2015 y 2017. Las nuevas aeronaves estarán equipadas con el diseño distintivo de Boeing Sky Interior.'
					},
					{
						title: '2010',
						img: 'img/2010.jpg',
						text: 'Inicia operaciones a la isla de St. Maarten y anuncia que Aero República operará bajo la marca Copa Airlines Colombia. Se comunica el proceso de integración a Star Alliance. Copa Airlines y Boeing anuncian la adquisición de 32 aeronaves Next Generation 737-800, incluyendo 10 opciones de compra, un valor aproximado de US$2,600 millones de dólares, el mayor pedido de nuevas aeronaves en la historia de Copa Airlines.'
					},
					{
						title: '2011',
						img: 'img/2011.jpg',
						text: 'Expande su Hub de las Américas en Panamá de 4 a 6 bancos de vuelo y crece su red de rutas con 7 nuevos destinos, solidificando así el liderazgo del Hub de las Américas en la región. Copa Holdings, S.A. (CPA listado en NYSE) celebra cinco años de estar cotizando.'
					},
					{
						title: '2012',
						img: 'img/2012.jpg',
						text: 'Anuncia el nuevo programa de viajero frecuente MileagePlus en conjunto con United y en junio la entrada formal a la red global de aerolíneas Star Alliance. Inicia operaciones a Las Vegas, Recife, Curazao, Guanacaste e Iquitos.'
					},
					{
						title: '2013',
						img: 'img/2013.jpg',
						text: 'Inicia operaciones a Boston y Tampa; recibe los premios Mejor Aerolínea de Centroamérica y El Caribe y La Aerolínea con el Mejor Personal de Cabina y de Aeropuertos de Centroamérica y el Caribe otorgados por SkyTrax; y culmina el año con una flota de 90 aviones.'
					},
					{
						title: '2014',
						img: 'img/2014.jpg',
						text: 'Inicia operaciones a 5 nuevas ciudades: Georgetown, Guyana; Fort Lauderdale, Estados Unidos; Montreal, Canadá; Santa Clara, Cuba y Campinas; Brasil y finaliza el año con 98 aeronaves. También es galardonada como “Aerolínea Líder de México y Centroamérica” por el World Travel Awards.'
					}

				] 
			},
			pt: {
				title: 'História',
				text: 'A Copa Airlines foi fundada em 1947 como a Companhia Panamenha de aviação. Começou com voos para três cidades do Panamá utilizando aviões Douglas DC-3/C47. Em 1966 já possuía três freqüências semanais para San José, Costa Rica seu primeiro destino internacional. Em 1969 incorporou um avião AVRO 748 para voar até Kingston, na Jamaica, Manágua, na Nicarágua, e Barranquilla, na Colômbia. Na década de 70 incorporou a seus destinos as cidades de Medelín, Cartagena, San Salvador e Guatemala. ',
				years: [
					{
						title: '1980',
						img: 'img/1980.jpg',
						text: 'Se retira del mercado doméstico para enfocarse en su alcance internacional. Ese año incorpora un avión Boeing 737-100. Durante esa década  la aerolínea amplía sus destinos a las ciudades de Puerto Príncipe en Haití, Santo Domingo en República Dominicana, San Juan en Puerto Rico y Miami en Estados Unidos.'
					},
					{
						title: '1992',
						img: 'img/1992.jpg',
						text: 'Em 1992, iniciou as operações do primeiro centro de conexões de voos dentro da América Latina, com sede no Panamá, criando desta forma o “Hub das Américas” no Aeroporto Internacional de Tocumen. Foram incorporados novos destinos: Caracas, Venezuela, Cidade do México, Santiago do Chile, Cali e Bogotá, Colômbia, Quito e Guayaquil, Equador, Lima, Peru, Buenos Aires, Argentina, e Havana, Cuba.'
					},
					{
						title: '1998',
						img: 'img/1998.jpg',
						text: 'Em 1998 foi firmada uma aliança estratégica com a Continental Airlines e em 1999 foi lançada sua nova imagem como Copa Airlines e adotado o Programa de passageiro freqüente OnePass®. Ao mesmo tempo teve início a renovação de sua frota com aviões Boeing 737 Next Generation.'
					},
					{
						title: '2000',
						img: 'img/2000.jpg',
						text: 'A partir de 2000 a estratégia passou a ser a expansão na região. Em 2005 incorporou como destinos Cancun no México, São Paulo, Brasil, San Andrés na Colômbia, Tegucigalpa em Honduras e Orlando, Los Angeles e Nova York nos Estados Unidos.'
					},
					{
						title: '2005',
						img: 'img/2005.jpg',
						text: 'Em 2005 também, por meio da Copa Holdings, S. A. a companhia aérea passou a ser negociada na Bolsa de Valores de Nova York, tornando-se a terceira companhia aérea latino-americana negociada neste importante mercado.'
					},
					{
						title: '2006',
						img: 'img/2006.jpg',
						text: 'Em 2006, acrescentou novos destinos: Córdoba na Argentina, Guadalajara no México, Washington D.C. nos Estados Unidos e Punta Cana na República Dominicana, aumentando a freqüência de voos para sete de seus destinos.'
					},
					{
						title: '2008',
						img: 'img/2008.jpg',
						text: 'Em 2008 iniciou operações para Porto Espanha em Trinidad e Tobago e Belo Horizonte no Brasil e anunciou novos destinos como Santa Cruz na Bolívia, Valência na Venezuela e Aruba. A Copa Airlines continua aumentando o número de destinos e renovando sua moderna frota com aviões Boeing 737-700 e 737-800 e Embraer 190.'
					},
					{
						title: '2009',
						img: 'img/2009.jpg',
						text: 'Anuncia pedido de 15 aeronaves com entrega entre 2010 e 2015 e oito opções para entrega entre 2015 e 2017. As novas aeronaves estarão equipadas com o desenho distintivo da Boeing Sky Interior.'
					},
					{
						title: '2010',
						img: 'img/2010.jpg',
						text: 'A Copa Airlines inicia as operações na ilha de São Martinho e anuncia que a Aero República funcionará sob a marca Copa Airlines Colômbia. Também é comunicado o processo de integração com a Star Alliance. Copa Airlines e Boeing anunciam a aquisição de 32 novas aeronaves Next Generation 737-800, incluindo 10 opções de compra, um valor aproximado de US$ 2,6 bilhões, o maior pedido de novas aeronaves na história da Copa Airlines.'
					},
					{
						title: '2011',
						img: 'img/2011.jpg',
						text: 'Expande seu Hub das Américas no Panamá de 4 bancos de voo para 6 e aumenta sua rede com mais 7 destinos, consolidando a posição de liderança do Hub das Américas na região. Copa Holdings, S.A. (listada como CPA na NYSE) celebra cinco anos de negócios. '
					},
					{
						title: '2012',
						img: 'img/2012.jpg',
						text: 'Anuncia o novo programa de viajante frequente MileagePlus em conjunto com a United e, em junto, a entrada formal à rede mundial de companhias aéreas Star Alliance. Inicia operações a Las Vegas, Recife, Curazao, Guanacaste e Iquitos.'
					},
					{
						title: '2013',
						img: 'img/2013.jpg',
						text: 'Inicia operações a Boston e Tampa; recebe os prêmios Melhor Linha Aérea da América Central e Caribe e A Linha Aérea com a Melhor Equipe de Bordo e de Aeroportos da América Central e Caribe outorgados pela SkyTrax; e culmina o ano com uma frota de 90 aviões.'
					},
					{
						title: '2014',
						img: 'img/2014.jpg',
						text: 'Begins serving 5 new cities: Georgetown, Guyana; Fort Lauderdale, United States; Montreal, Canada; Santa Clara, Cuba; and Campinas, Brazil; and ends the year with 98 airplanes. Also recognized as “Mexico & Central America’s Leading Airline” by World Travel Awards.'
					}
				]
			}
		},
		single_fleet: {
			es: {
					title: 'Boeing 737-700',
					caCount: 'Copa Airlines cuenta con 14 aeronaves.',
					cacCount: 'Copa Airlines Colombia cuenta con 4 aeronaves.',
					img: 'img/boeing700.jpg',
					business: '12 asientos en Clase Ejecutiva',
					general: '112 asientos en Cabina Principal',
					details: { label: 'Detalles técnicos', url: 'http://www.copaair.com/sites/cc/es/nuestros-productos/pages/detalles-tecnicos-boeing-737-700.aspx' },
					music: { label: 'Entretenimiento a bordo', url: 'http://www.copaair.com/sites/cc/es/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
			},
			en:{
					title: 'Boeing 737-700',
					caCount: 'Copa Airlines has 14 aircrafts.',
					cacCount: 'Copa Airlines Colombia has 4 aircrafts.',
					img: 'img/boeing700.jpg',
					business: '12 seats in Business Class',
					general: '112 seats in Main Cabin',
					details: { label: 'Technical details', url: 'http://www.copaair.com/sites/cc/en/nuestros-productos/pages/detalles-tecnicos-boeing-737-700.aspx' },
					music: { label: 'Entertainment on board', url: 'http://www.copaair.com/sites/cc/en/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
			},
			pt: {
				title: 'Boeing 737-700',
				caCount: 'A Copa Airlines conta com 14 aviões.',
				cacCount: 'A Copa Airlines Colombia conta com 4 aviões.',
				img: 'img/boeing700.jpg',
				business: '12 assentos na Classe Executiva',
				general: '112 assentos na Cabine Principal',
				details: { label: 'Detalhes técnicos', url: 'http://www.copaair.com/sites/cc/pt/nuestros-productos/pages/detalles-tecnicos-boeing-737-700.aspx' },
				music: { label: 'Entretenimento a bordo', url: 'http://www.copaair.com/sites/cc/pt/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
			}
		},
		fleet: {
			es:{
				title: 'Flota',
				fleets: [
					{
						title: 'Boeing 737-800',
						img: 'img/boeing800.jpg',
						model: [
							{
								title: 'Modelo 737-800A',
								caCount: 'Copa Airlines cuenta con 25 aeronaves.',
								business: '16 asientos en Clase Ejecutiva',
								general: '144 asientos en Cabina Principal',
								details: { label: 'Detalles técnicos', url: 'http://www.copaair.com/sites/cc/es/nuestros-productos/pages/detalles-tecnicos-boeing-737-800a.aspx' },
								music: { label: 'Entretenimiento a bordo', url: 'http://www.copaair.com/sites/cc/es/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
							},
							{
								title: 'Modelo 737-800B *',
								caCount: 'Copa Airlines cuenta con 29 aeronaves.',
								business: '16 asientos en Clase Ejecutiva',
								general: '138 asientos en Cabina Principal',
								details: { label: 'Detalles técnicos', url: 'http://www.copaair.com/sites/cc/es/nuestros-productos/pages/detalles-tecnicos-boeing-737-800b.aspx' },
								music: { label: 'Entretenimiento a bordo', url: 'http://www.copaair.com/sites/cc/es/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
							}

						]
						
					},
					{
						title: 'Embraer 190AR',
						img: 'img/embraerAR.jpg',
						model: [
							{
								title: 'Modelo Embraer 190AR A',
								caCount: 'Copa Airlines cuenta con 12 aeronaves.',
								cacCount: 'Copa Airlines Colombia cuenta con 3 aeronaves.',
								business: '10 asientos en Clase Ejecutiva',
								general: '84 asientos en Cabina Principal',
								details: { label: 'Detalles técnicos', url: 'http://www.copaair.com/sites/cc/es/nuestros-productos/pages/detalles-tecnicos-embraer-190ar.aspx' },
								music: { label: 'Entretenimiento a bordo', url: 'http://www.copaair.com/sites/cc/es/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
							},
							{
								title: 'Modelo Embraer 190AR B',
								caCount: 'Copa Airlines cuenta con 11 aeronaves.',
								general: '106 asientos en Cabina Principal',
								details: { label: 'Detalles técnicos', url: 'http://www.copaair.com/sites/cc/es/nuestros-productos/pages/detalles-tecnicos-embraer-190ar-b.aspx' },
								music: { label: 'Entretenimiento a bordo', url: 'http://www.copaair.com/sites/cc/es/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
							}

						]
					}
				] //fleets
			}, // es
			en: {
				title: 'Fleet',
				fleets: [
					{
						id: 2,
						title: 'Boeing 737-800',
						img: 'img/boeing800.jpg',
						model: [
							{
								title: 'Model 737-800A',
								caCount: 'Copa Airlines has 25 aircrafts.',
								business: '16 seats in Business Class',
								general: '144 seats in Main Cabin',
								details: { label: 'Technical details', url: 'http://www.copaair.com/sites/cc/en/nuestros-productos/pages/detalles-tecnicos-boeing-737-800a.aspx' },
								music: { label: 'Entertainment on board', url: 'http://www.copaair.com/sites/cc/en/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
							},
							{
								title: 'Model 737-800B *',
								caCount: 'Copa Airlines has 29 aircrafts.',
								business: '16 seats in Business Class',
								general: '138 seats in Main Cabin',
								details: { label: 'Technical details', url: 'http://www.copaair.com/sites/cc/en/nuestros-productos/pages/detalles-tecnicos-boeing-737-800b.aspx' },
								music: { label: 'Entertainment on board', url: 'http://www.copaair.com/sites/cc/en/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
							}
						]
					},
					{
						id: 3,
						title: 'Embraer 190AR',
						img: 'img/embraerAR.jpg',
						model: [
							{
								title: 'Model Embraer 190AR A',
								caCount: 'Copa Airlines has 12 aircrafts.',
								cacCount: 'Copa Airlines Colombia has 3 aircrafts.',
								business: '10 seats in business class',
								general: '84 seats in Main cabin',
								details: { label: 'Technical details', url: 'http://www.copaair.com/sites/cc/en/nuestros-productos/pages/detalles-tecnicos-embraer-190ar.aspx' },
								music: { label: 'In-Flight information', url: 'http://www.copaair.com/sites/cc/en/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
							},
							{
								title: 'Model Embraer 190AR B',
								caCount: 'Copa Airlines has 11 aircrafts.',
								general: '106 seats in Main cabin',
								details: { label: 'Technical details', url: 'http://www.copaair.com/sites/cc/en/nuestros-productos/pages/detalles-tecnicos-embraer-190ar-b.aspx' },
								music: { label: 'In-Flight information', url: 'http://www.copaair.com/sites/cc/en/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
							}

						]
					}
				]
			},
			pt: {
				title: 'Frota',
				fleets: [
					{
						title: 'Boeing 737-800',
						img: 'img/boeing800.jpg',
						model: [
							{
								title: 'Model 737-800A',
								caCount: 'A Copa Airlines conta com 25 aviões.',
								business: '16 assentos na Classe Executiva',
								general: '144 assentos na Cabine Principal',
								details: { label: 'Detalhes técnicos', url: 'http://www.copaair.com/sites/cc/pt/nuestros-productos/pages/detalles-tecnicos-boeing-737-800a.aspx' },
								music: { label: 'Entretenimento a bordo', url: 'http://www.copaair.com/sites/cc/pt/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
							},
							{
								title: 'Model 737-800B *',
								caCount: 'A Copa Airlines conta com 29 aviões.',
								business: '16 assentos na Classe Executiva',
								general: '138 assentos na Cabine Principal',
								details: { label: 'Detalhes técnicos', url: 'http://www.copaair.com/sites/cc/pt/nuestros-productos/pages/detalles-tecnicos-boeing-737-800b.aspx' },
								music: { label: 'Entretenimento a bordo', url: 'http://www.copaair.com/sites/cc/pt/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
							}
						]
					},
					{
						title: 'Embraer 190AR',
						img: 'img/embraerAR.jpg',
						model: [
							{
								title: 'Model Embraer 190AR A',
								caCount: 'A Copa Airlines conta com 12 aviões.',
								cacCount: 'A Copa Airlines Colombia conta com 3 aviões.',
								business: '10 assentos na Classe Executiva',
								general: '84 assentos na Cabine Principal',
								details: { label: 'Detalhes técnicos', url: 'http://www.copaair.com/sites/cc/pt/nuestros-productos/pages/detalles-tecnicos-embraer-190ar.aspx' },
								music: { label: 'Informações a bordo', url: 'http://www.copaair.com/sites/cc/pt/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
							},
							{
								title: 'Model Embraer 190AR B',
								caCount: 'A Copa Airlines conta com 11 aviões.',
								general: '106 assentos na Cabine Principal',
								details: { label: 'Detalhes técnicos', url: 'http://www.copaair.com/sites/cc/pt/nuestros-productos/pages/detalles-tecnicos-embraer-190ar-b.aspx' },
								music: { label: 'Informações a bordo', url: 'http://www.copaair.com/sites/cc/pt/informacion-de-viaje/pages/durante-el-vuelo.aspx' }
							}

						]
					}
				]
			}
			
		},
		security: {
			en: {
				title: 'Security History'
			},
			es: {
				title: 'Historial de Seguridad'
			},
			pt: {
				title: 'Histórico de segurança'
			}
		},
		hub: {
			en: {
				title: 'Hub of the Americas'
			},
			es: {
				title: 'Hub de las Americas'
			},
			pt: {
				title: 'Centro de Conexões das Américas'
			}
		} 
	};
	var app = angular.module('darkSite', []);

	app.controller('ContentController', function(){

			//Carga los valores por defecto
			this.currentLang 	= { value:'es', label: 'Español' };
			this.navClass 		= 'nav-es';
			this.select 		= data.select.es;
			this.menuTop 		= data.menu_top.es;
			this.menuLeft 		= data.menu_left.es;
			this.menuBottom		= data.min_footer.es;
			this.width 			= data.width;		//Ancho de la ventana
			this.history 		= data.history.es;
			this.security 		= data.security.es;
			this.fleet 			= data.fleet.es;
			this.singleFleet 	= data.single_fleet.es;
			this.hub 			= data.hub.es;

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
						this.history 	= data.history.en;
						this.security 	= data.security.en;
						this.fleet 		= data.fleet.en;
						this.singleFleet 	= data.single_fleet.en;
						this.hub 		= data.hub.en;

						break;
					case 'es':
						this.select		= data.select.es;		
						this.menuTop 	= data.menu_top.es;
						this.menuLeft 	= data.menu_left.es;
						this.navClass 	= 'nav-es';
						this.history 	= data.history.es;
						this.security 	= data.security.es;
						this.fleet 		= data.fleet.es;
						this.singleFleet 	= data.single_fleet.es;
						this.hub 		= data.hub.es;
						break;
					case 'pt':
						this.select		= data.select.pt;
						this.menuTop 	= data.menu_top.pt;
						this.menuLeft 	= data.menu_left.pt;
						this.navClass 	= 'nav-pt';
						this.history 	= data.history.pt;
						this.fleet 		= data.fleet.pt;
						this.security 	= data.security.pt;
						this.fleet 		= data.fleet.pt;
						this.singleFleet 	= data.single_fleet.pt;
						this.hub 		= data.hub.pt;
						break;
				}
			};

	});

	// Menu left
	app.controller('TabController', function(){
	  	this.tab = 3;
	    this.setTab = function( tab ){
	    	this.tab = tab;
	    };
	    
	    this.isSet = function( value ){	
	    	return this.tab === value;
	    };
  	});

	// Corporate
  	app.controller('Tab2Controller', function(){
	  	this.tab2 = 1;
	    this.setTab = function( tab2 ){
	    	this.tab2 = tab2;
	    };
	    
	    this.isSet = function( value ){	
	    	return this.tab2 === value;
	    };
  	});

  	// Desactiva los links
  	app.directive('a', function() {
	    return {
	        restrict: 'E',
	        link: function(scope, elem, attrs) {
	            if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
	                elem.on('click', function(e){
	                    e.preventDefault();
	                });
	            }
	        }
	   };
	});



})();
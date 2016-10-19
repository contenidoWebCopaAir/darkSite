'use strict';

angular.
	module('darkSite').
		component('languageSelector', {
			templateUrl: 'language-selector/language-selector.view.html',
			controller: function LanguageSelectorController() {
				this.currentLang = { value:'es', label: 'Español' };
				this.languages = {
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
				}
			}
		});
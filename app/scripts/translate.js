/*global _APP_ */
'use strict';

angular.module(_APP_).config(function ($translateProvider) {
	$translateProvider.translations('en', {
		'main.title': 'Available Metal Finders'
	});

	$translateProvider.preferredLanguage('en');
});
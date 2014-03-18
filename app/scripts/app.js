'use strict';


var _APP_ = 'metalFinder',
	_CONTROLLERS_ = _APP_ + '.controllers',
	_DIRECTIVES_ = _APP_ + '.directives',
	_FILTERS_ = _APP_ + '.filters',
	_MODULES_ = _APP_ + '.modules',
	_SERVICES_ = _APP_ + '.services';

angular.module(_CONTROLLERS_, []);
angular.module(_DIRECTIVES_, []);
angular.module(_FILTERS_, []);
angular.module(_MODULES_, []);
angular.module(_SERVICES_, []);

angular.module(_APP_, [
	// Your application's namespaced modules
	// so they won't conflict with other
	// modules. You shouldn't have to touch
	// these unless you want to.             
	_CONTROLLERS_,
	_DIRECTIVES_,
	_FILTERS_,
	_MODULES_,
	_SERVICES_,


	// add additional modules here, such as ngAnimate
	// ngTouch, ngResource, or your own custom modules.
	// ngTouch and ngRoute are included here by default
	// installed via Bower. Don't forget to add the module
	// to your Gruntfile's bower components if you want
	// to use it!
	// 'ngTouch',
	'ngCookies',
	'ngResource',
	'ngRoute',
	'ngAnimate',
	'ui.router',
	'ionic',
	'pascalprecht.translate',
	'angularCharts'
	// 'angularSlideables'


])
	.config(['$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.when('', '/');
			$stateProvider
				.state('main', {
					url: '/',
					templateUrl: 'views/main.html',
					controller: 'ListCtrl'
					// views: {
					// 	'devices': {

					// 	}
					// }
				})
				.state('scan', {
					url: '/scan',
					templateUrl: 'views/scan.html',
					controller: 'ScanCtrl'
					// views: {
					// 	'devices': {
					// 		templateUrl: 'views/scan.html',
					// 		controller: 'ScanCtrl'
					// 	}
					// }

				});
		}
	])

.run(['$rootScope', '$location', '$ionicPlatform', 'BTService',

	function ($rootScope, $location, $ionicPlatform, BTService) {

		$ionicPlatform.ready(function () {
			/*global navigator*/
			if (navigator && navigator.splashscreen) {
				navigator.splashscreen.hide();
			}
		});

		// register listener to watch route changes
		// $rootScope.$on('$locationChangeStart', function (event, next, current) {
		// 	if (!BTService.selectedDevice) {
		// 		// event.preventDefault();
		// 		// no logged user, we should be going to #login
		// 		$location.path('/');
		// 	}
		// });

	}
]);


/* Using $rootScope as eventBus.
for more details: http://stackoverflow.com/questions/11252780/whats-the-correct-way-to-communicate-between-controllers-in-angularjs */
angular.module(_APP_).config(['$provide',
	function ($provide) {
		$provide.decorator('$rootScope', ['$delegate',
			function ($delegate) {

				Object.defineProperty($delegate.constructor.prototype, '$onRootScope', {
					value: function (name, listener) {
						var unsubscribe = $delegate.$on(name, listener);
						this.$on('$destroy', unsubscribe);
					},
					enumerable: false
				});


				return $delegate;
			}
		]);
	}
]);
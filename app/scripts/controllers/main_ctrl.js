/*global _CONTROLLERS_ */
'use strict';

angular.module(_CONTROLLERS_).controller('MainCtrl', ['$scope', '$rootScope',

	function ($scope, $rootScope) {
		$scope.title = 'main.title';
		$scope.showBack = false;

		$scope.$onRootScope('list.deviceSelected', function (event, device) {
			$scope.showBack = true;
		});

		$scope.onBack = function () {
			$scope.showBack = false;
			//TODO: BTService.stop();
		};

		$scope.onFullScreenClick = function () {
			$rootScope.$emit('windowedViewToggled');
			//TODO: BTService.stop();
		};
	}



]);
/*global _CONTROLLERS_ */
'use strict';

angular.module(_CONTROLLERS_).controller('MenuCtrl', ['$scope',
	function ($scope) {
		$scope.openLeft = function () {
			$scope.sideMenuController.toggleLeft();
		};
	}
]);
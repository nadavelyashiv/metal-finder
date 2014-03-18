/*global _CONTROLLERS_ */
'use strict';

angular.module(_CONTROLLERS_).controller('MainCtrl', ['$scope',
	function ($scope) {
		$scope.title = 'main.title';

		$scope.$onRootScope('list.deviceSelected', function (event, device) {
			$scope.title = device.name;
		});
	}
]);
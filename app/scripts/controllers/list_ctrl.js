/*global _CONTROLLERS_ */
'use strict';

angular.module(_CONTROLLERS_)
	.controller('ListCtrl', ['$rootScope', '$scope', 'BTService',
		function ($rootScope, $scope, BTService) {
			$scope.title = 'main.title';

			$scope.devices = null;

			$scope.selectDevice = function (device) {
				BTService.selectedDevice = device;

				$rootScope.$emit('list.deviceSelected', device);
			};

			$scope.onRefresh = function () {
				BTService.list().then(function (devices) {
					$scope.devices = devices;
					$scope.$broadcast('scroll.refreshComplete');
				});
			};


		}
	]);
/*global _CONTROLLERS_ */
'use strict';

angular.module(_CONTROLLERS_).controller('ScanCtrl', ['$rootScope', '$scope', 'BTService',

	function ($rootScope, $scope, BTService) {
		$scope.showChart = true;

		$scope.title = BTService.selectedDevice.name;


		BTService.subscribe(function (data) {
			$scope.data = data;

			$scope.chartData[0].values.push({
				'x': data.y,
				'y': Math.max.apply(null, data.pointsData)
			});
		});


		$scope.$onRootScope('windowedViewToggled', function (event) {
			$scope.showChart = !$scope.showChart;
		});


		$scope.data = BTService.getData();
		BTService.getData();

		// $scope.chartType = 'area';
		// $scope.config = {
		// 	// title: 'Signal',
		// 	tooltips: false,
		// 	labels: true,
		// 	legend: {
		// 		display: false,
		// 		//could be 'left, right'
		// 		position: 'left'
		// 	}
		// };

		// $scope.chartData = {
		// 	'series': [
		// 		'Signal'
		// 	],
		// 	'data': []
		// };
		$scope.chartData = [{
			key: 'Signal',
			color: 'orange',
			area: true,
			values: []
		}];

		// $scope.$onRootScope('list.deviceSelected', function (event, device) {
		// 	$scope.title = device.name;
		// });
	}
]);
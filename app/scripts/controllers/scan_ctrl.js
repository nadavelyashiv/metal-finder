/*global _CONTROLLERS_ */
'use strict';

angular.module(_CONTROLLERS_).controller('ScanCtrl', ['$scope', 'BTService',

	function ($scope, BTService) {
		$scope.showChart = true;

		BTService.subscribe(function (data) {
			$scope.data = data;

			$scope.chartData[0].values.push({
				'x': data.y,
				'y': Math.max.apply(null, data.pointsData)
			});



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


	}
]);
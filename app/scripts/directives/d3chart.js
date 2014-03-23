/*global _DIRECTIVES_ */

'use strict';

angular.module(_DIRECTIVES_)
	.directive('d3chart', function () {
		var chart = nv.models.lineChart();

		chart
			.x(function (d, i) {
				return d.x;
			});

		chart.xAxis // chart sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart, so need to chain separately
		.tickFormat(d3.format(',.1f'))
			.axisLabel('Y');

		chart.yAxis
		// .axisLabel('Signal')
		.tickFormat(d3.format(',.0f'));

		chart.showXAxis(true).showYAxis(true).rightAlignYAxis(false).margin({
			right: 90
		});

		function udpateChart(data) {
			chart.update();
		}

		function link(scope, element, attrs) {
			var chartElement = element.find('svg');



			d3.select('#chart svg')
				.datum(scope.chartData)
			// .transition().duration(500)
			.call(chart);

			// nv.utils.windowResize(chart.update);


			scope.$watch('data', function (newValue, oldValue) {
				// console.log(newValue);
				if (scope.showChart) {
					udpateChart(newValue);
				}

			});
		}

		return {
			link: link
			// transclude: 'true',
		};
	});
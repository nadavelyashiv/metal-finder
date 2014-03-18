/*global _DIRECTIVES_ */
/*global GRAYSCALE_SHADES */

'use strict';

angular.module(_DIRECTIVES_)
	.directive('scannable', function () {
		// var bt = BTService.dataArray;

		function getColor(strength) {
			//optional strength values, i.e. if colorStrengthLevels = 16, sensor can give values of 0-15.
			//defined by hardware.
			var colorStrengthLevels = 16;

			var numShades = GRAYSCALE_SHADES.length,
				colorsInGroup = numShades / colorStrengthLevels,
				index = colorsInGroup * strength + (colorsInGroup / 2);

			return GRAYSCALE_SHADES[index];
		}

		function link(scope, element, attrs) {
			var canvas = element[0],
				context = canvas.getContext('2d');

			function drawData(data) {
				if (data) {
					var i, points = data.pointsData;

					for (i = 0; i < points.length; i++) {
						context.fillStyle = getColor(points[i]);
						context.fillRect(i, data.y, 10, 10);
					}
				}
			}

			scope.$watch('data', function (newValue, oldValue) {
				// console.log(newValue);
				drawData(newValue);
			});
		}

		return {
			link: link

		};
	});
/*global _SERVICES_ */
'use strict';

angular.module(_SERVICES_).factory('BTService', function ($interval, $q) {

	var selectedDevice = null,

		listeners = [],

		list = [{
			'class': 268,
			'address': 'A8:BB:CF:06:1F:3D',
			'name': 'Metal Finder 1'
		}, {
			'class': 269,
			'address': 'A8:BB:CF:06:1F:32',
			'name': 'Metal Finder 2'
		}],

		data = [],
		inc = 0;

	function getData() {
		$interval(function () {
			var dataFromMachine = {
				y: inc++,
				pointsData: [2, 2, 2, 2, 2, 5, 7, 10, 14, 10, 7, 5, 2, 2, 2, 2]
			};

			data.push(dataFromMachine);
			for (var i = 0; i < listeners.length; i++) {
				listeners[i].call(this, dataFromMachine);
			}
		}, 1000);
	}


	var btService = {

		getData: getData,

		list: function () {
			var deferred = $q.defer();
			setTimeout(function () {
				deferred.resolve(list);
			}, 2000);
			return deferred.promise;
		},

		subscribe: function (callback) {
			//TODO check if listener already exists in the list
			listeners.push(callback);
		},

		selectedDevice: selectedDevice,

		dataArray: data
	};
	return btService;
});
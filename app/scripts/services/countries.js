/*global _SERVICES_ */
'use strict';

angular.module(_SERVICES_)
	.service('Countries', ['backend',
		function (backend) {
			return {
				load: function () {
					return backend.getCountries();
				}
			};
		}
	]);
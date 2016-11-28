(function(){
	'use strict'

	angular.module('ro-app')
		.service('roService', roService);

	roService.$inject = ['$sessionstorage'];

	function roService($sessionstorage){
		var service = this;

		service = {
			logout: logout;
		}

		return service;

		function logout(){
			$sessionstorage.clear();
		}
	}
})();

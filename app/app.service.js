(function(){
	'use strict'

	angular.module('ro-app')
		.service('roService', roService);

	roService.$inject = ['$window'];

	function roService($window){
		var service = this;

		service = {
			logout: logout
		}
		$window.sessionStorage.setItem("userId", "12");
		return service;


		function logout(){
			$window.sessionstorage.clear();
		}
	}
})();

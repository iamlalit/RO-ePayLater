(function(){
	'use strict'
	angular.module('ro-app')
		.config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', 'enumApp'];

	function appConfig($stateProvider, $urlRouterProvider, $httpProvider, enumApp){
		//States
		$stateProvider
			.state('Funnel', {
				url : "/funnel",
				templateUrl : "app/",
				controller: 'roCntl',
    		controllerAs: 'ro'
			})

		$urlRouterProvider.otherwise("/funnel");

	}
})();

(function(){
	'use strict'
	angular.module('olympia-app')
		.config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', 'enumApp'];

	function appConfig($stateProvider, $urlRouterProvider, $httpProvider, enumApp){
		//States
		$stateProvider
			.state('Funnel', {
				url : "/funnel",
				templateUrl : "app/components/opvolging/opvolging.html",
				controller: 'opvolgingCntl',
        		controllerAs: 'olympia'
			})
			.state('Activiteiten', {
				url : "/activiteiten",
				templateUrl : "app/components/activiteiten/activiteiten.html",
				controller: 'activiteitenCntl',
        		controllerAs: 'olympia'
			})
			.state('Kengetallen', {
				url : "/kengetallen",
				templateUrl : "app/components/kengetallen/kengetallen.html",
				controller: 'kengetallenCntl',
        		controllerAs: 'olympia'
			});

		$urlRouterProvider.otherwise("/funnel");

		$httpProvider.defaults.headers.common['Authorization'] = enumApp.authorizationBearer;
	}
})();

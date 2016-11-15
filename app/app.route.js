(function(){
	'use strict'
	angular.module('ro-app')
		.config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

	function appConfig($stateProvider, $urlRouterProvider, $httpProvider){
		$stateProvider.
			state('mdnid', {
				url: '/',
				templateUrl: 'mdnid/mdnid.html',
    		controller: 'mdnidCntl',
    		controllerAs: 'ro'
			}).
			state('otp', {
				url: '/otp',
				templateUrl: 'otp/otp.html',
    		controller: 'otpCntl',
    		controllerAs: 'ro'
			})

			$urlRouterProvider.otherwise('/');
	}
})();

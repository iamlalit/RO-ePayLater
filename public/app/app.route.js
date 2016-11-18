(function(){
	'use strict'
	angular.module('ro-app')
		.config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider'];

	function appConfig($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider){
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
			}).
			state('roorrmu', {
				url: '/roorrmu',
				templateUrl: 'roorrmu/roorrmu.html',
    		controller: 'roorrmuCntl',
    		controllerAs: 'ro'
			}).
			state('userbasicdetails', {
				url: '/userbasicdetails',
				templateUrl: 'userbasicdetails/userbasicdetails.html',
    		controller: 'userbasicdetailsCntl',
    		controllerAs: 'ro'
			}).
			state('useraddressdetails', {
				url: '/useraddressdetails',
				templateUrl: 'useraddressdetails/useraddressdetails.html',
    		controller: 'useraddressdetailsCntl',
    		controllerAs: 'ro'
			}).
			state('userloandetails', {
				url: '/userloandetails',
				templateUrl: 'userloandetails/userloandetails.html',
    		controller: 'userloandetailsCntl',
    		controllerAs: 'ro'
			}).
			state('userdownloadform', {
				url: '/userdownloadform',
				templateUrl: 'userdownloadform/userdownloadform.html',
    		controller: 'userdownloadformCntl',
    		controllerAs: 'ro'
			}).
			state('signedform', {
				url: '/signedform',
				templateUrl: 'uploadsignedform/uploadsignedform.html',
    		controller: 'signedFormCntl',
    		controllerAs: 'ro'
			}).
			state('thankyou', {
				url: '/thankyou',
				templateUrl: 'thankyou/thankyou.html',
    		controller: 'thankyouCntl',
    		controllerAs: 'ro'
			})

			$urlRouterProvider.otherwise('/');
	}
})();

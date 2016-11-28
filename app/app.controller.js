(function(){
	'use strict'

	angular.module('ro-app')
		.controller('roCntl', roCntl);

	roCntl.$inject = ['roService', 'notificationService', '$rootScope', '$scope'];

	function roCntl(roService, notificationService, $rootScope, $scope){
		var vm = this;

		activate();

		$scope.$on('showNotification', showNotification);
		/////////////////////////////

		function activate(){

		}

		function showNotification(){
			vm.notification = notificationService.getNotification();
			debugger;
		}
	}
})();

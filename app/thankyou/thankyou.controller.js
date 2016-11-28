(function(){
	'use strict';
	angular.module('thankyou.module')
		.controller('thankyouCntl', thankyouCntl);

	thankyouCntl.$inject = ['thankyouService', 'notificationService', '$rootScope', '$state'];

	function thankyouCntl(thankyouService, notificationService, $rootScope, $state){
		var vm = this;

		vm.returnPartial = returnPartial;
		vm.logout = logout;
		activate();

		///////////////////////////

		function activate(){

		}

		function logout(){
			debugger;
			var data = {
				'message' : 'Successfully logout.',
				'error' : false
			};
			notificationService.setNotification(data);
			//Show notification
			$rootScope.$broadcast('showNotification');
			$state.go('mdnid');

		}

		function returnPartial(view){
			return './shared/partial/_' + view + '.html';
		}

	}
})();

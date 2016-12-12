(function(){
	'use strict';
	angular.module('thankyou.module')
		.controller('thankyouCntl', thankyouCntl);

	thankyouCntl.$inject = ['thankyouService','roService','$state'];

	function thankyouCntl(thankyouService,roService,$state){
		var vm = this;

		vm.returnPartial = returnPartial;
		vm.logout = logout;

		activate();

		///////////////////////////

		function activate(){
                         roService.checkUserIsLoggedIn($state.params.userId);
                		}
          function logout(){
                roService.logout();
              		}
		function returnPartial(view){
			return './shared/partial/_' + view + '.html';
		}

	}
})();

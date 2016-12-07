(function(){
	'use strict';
	angular.module('thankyou.module')
		.controller('thankyouCntl', thankyouCntl);

	thankyouCntl.$inject = ['thankyouService','roService'];

	function thankyouCntl(thankyouService,roService){
		var vm = this;

		vm.returnPartial = returnPartial;
		vm.logout = logout;

		activate();

		///////////////////////////

		function activate(){

		}
          function logout(){
                roService.logout();
              		}
		function returnPartial(view){
			return './shared/partial/_' + view + '.html';
		}

	}
})();

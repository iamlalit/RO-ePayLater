(function(){
	'use strict';
	angular.module('userdownloadform.module')
		.controller('userdownloadformCntl', userdownloadformCntl);

	userdownloadformCntl.$inject = ['userdownloadformService','roService'];

	function userdownloadformCntl(userdownloadformService,roService){
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

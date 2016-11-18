(function(){
	'use strict';
	angular.module('user.module')
		.controller('userCntl', userCntl);

	userCntl.$inject = ['userService'];

	function userCntl(userService){
		var vm = this;

		vm.returnPartial = returnPartial;
		activate();

		///////////////////////////

		function activate(){

		}

		function returnPartial(view){
			return './shared/partial/_' + view + '.html';
		}

	}
})();

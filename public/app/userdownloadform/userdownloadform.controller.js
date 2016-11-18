(function(){
	'use strict';
	angular.module('userdownloadform.module')
		.controller('userdownloadformCntl', userdownloadformCntl);

	userdownloadformCntl.$inject = ['userdownloadformService'];

	function userdownloadformCntl(userdownloadformService){
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

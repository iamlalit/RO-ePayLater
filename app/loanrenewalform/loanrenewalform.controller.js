(function(){
	'use strict';
	angular.module('loanrenewalform.module')
		.controller('loanrenewalformCntl', loanrenewalformCntl);

	loanrenewalformCntl.$inject = ['loanrenewalformService'];

	function loanrenewalformCntl(loanrenewalformService){
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

(function(){
	'use strict';
	angular.module('signedForm.module')
		.controller('signedFormCntl', signedFormCntl);

	signedFormCntl.$inject = ['signedFormService'];

	function signedFormCntl(signedFormService){
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

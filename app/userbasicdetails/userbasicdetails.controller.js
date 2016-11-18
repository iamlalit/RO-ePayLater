(function(){
	'use strict';
	angular.module('userbasicdetails.module')
		.controller('userbasicdetailsCntl', userbasicdetailsCntl);

	userbasicdetailsCntl.$inject = ['userbasicdetailsService'];

	function userbasicdetailsCntl(userbasicdetailsService){
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

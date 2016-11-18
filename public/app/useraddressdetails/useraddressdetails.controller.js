(function(){
	'use strict';
	angular.module('useraddressdetails.module')
		.controller('useraddressdetailsCntl', useraddressdetailsCntl);

	useraddressdetailsCntl.$inject = ['useraddressdetailsService'];

	function useraddressdetailsCntl(useraddressdetailsService){
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

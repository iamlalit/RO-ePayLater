(function(){
	'use strict';
	angular.module('userloandetails.module')
		.controller('userloandetailsCntl', userloandetailsCntl);

	userloandetailsCntl.$inject = ['userloandetailsService'];

	function userloandetailsCntl(userloandetailsService){
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

(function(){
	'use strict';
	angular.module('thankyou.module')
		.controller('thankyouCntl', thankyouCntl);

	thankyouCntl.$inject = ['thankyouService'];

	function thankyouCntl(thankyouService){
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

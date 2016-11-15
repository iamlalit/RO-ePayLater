(function(){
	'use strict';
	angular.module('otp.module')
		.controller('otpCntl', otpCntl);

	otpCntl.$inject = ['otpService'];

	function otpCntl(otpService){
		var vm = this;

		activate();

		///////////////////////////

		function activate(){

		}
	}
})();

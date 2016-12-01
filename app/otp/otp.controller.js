(function(){
	'use strict';
	angular.module('otp.module')
		.controller('otpCntl', otpCntl);

	otpCntl.$inject = ['otpService','$state'];

	function otpCntl(otpService,$state){
		var vm = this;
		vm.submitOtpForm = submitOtpForm;

		activate();

		///////////////////////////

		function activate(){

		}

		function submitOtpForm(isValid){
			debugger;
			if(isValid){
				//this API will call when user passed out of form validations
				//this API function(getAuthenticatedUser) is written inside the services
				//this will either return success(resolveAuthenticatedUser) or error message(errorAuthenticatedUser)
				otpService.getAuthenticatedUser(vm.otp,$state.params.requestId,$state.params.phone,$state.params.mdnid).then(resolveAuthenticatedUser, errorAuthenticatedUser);
			}
		}
		//this is the function called when success is return from api call
		function resolveAuthenticatedUser(data){
			if(data.status == true){
			if(data.applicationStatus == "none")
				$state.go('roorrmu',{userId: $state.params.userId});
				else if(data.applicationStatus == "applicableForRenewal")
				$state.go('loanrenewal',{userId: $state.params.userId});
				else
				$state.go('statusmessage',{statusmessage: data.applicationStatus});
				//workflow on new user or existing user need to be added here
				//api need to return is the user is new or old
			}else{
				//wrong otp
				//otp authentication failed
			}
		}
		//this is the function called when error is return from api call
		function errorAuthenticatedUser(error){
			console.log(error);
		}
	}
})();

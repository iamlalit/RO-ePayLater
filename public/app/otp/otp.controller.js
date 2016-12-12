(function(){
	'use strict';
	angular.module('otp.module')
		.controller('otpCntl', otpCntl);

	otpCntl.$inject = ['otpService','$state','roService','$scope'];

	function otpCntl(otpService,$state,roService,$scope){
		var vm = this;
		vm.submitOtpForm = submitOtpForm;
		vm.errorMessage ="";

		activate();

		///////////////////////////

		function activate(){
         roService.checkUserIsLoggedIn($state.params.userId);
		}

		function submitOtpForm(isValid){
			if(isValid){
				//this API will call when user passed out of form validations
				//this API function(getAuthenticatedUser) is written inside the services
				//this will either return success(resolveAuthenticatedUser) or error message(errorAuthenticatedUser)
				otpService.getAuthenticatedUser(vm.otp,$state.params.phone,$state.params.mdnid).then(resolveAuthenticatedUser, errorAuthenticatedUser);
			}
		}
		//this is the function called when success is return from api call
		function resolveAuthenticatedUser(data){
			if(data.status == true){
			if(data.applicationStatus == "none")
				$state.go('roorrmu',{userId: $state.params.userId});
				else if(data.applicationStatus == "applicableForRenewal")
				$state.go('loanrenewal',{mdnid: $state.params.mdnid , phone: $state.params.phone,userId: $state.params.userId});
				else
				$state.go('statusmessage',{statusmessage: data.applicationStatus});
				//workflow on new user or existing user need to be added here
				//api need to return is the user is new or old
			}else{
				//wrong otp
				//otp authentication failed
				vm.errorMessage = data.errorText;

			}
		}
		//this is the function called when error is return from api call
		function errorAuthenticatedUser(error){
			console.log(error);
		}
	}
})();

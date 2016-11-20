(function(){
	'use strict';
	angular.module('mdnid.module')
		.controller('mdnidCntl', mdnidCntl);

	mdnidCntl.$inject = ['mdnidService', '$state'];

	function mdnidCntl(mdnidService, $state){
		var vm = this;
		vm.phoneNumberRegex = '\\d{10}';
		vm.mdnidregex = '\\d{7}';
		vm.submitMdnidForm = submitMdnidForm;
		activate();

		///////////////////////////

		function activate(){

		}

		function submitMdnidForm(isValid){
			if(isValid){
				//this API will call when user passed out of form validations
				//this API function(getAuthenticatedUser) is written inside the services
				//this will either return success(resolveAuthenticatedUser) or error message(errorAuthenticatedUser)
				mdnidService.getAuthenticatedUser(vm.mdnid, vm.phoneNumber).then(resolveAuthenticatedUser, errorAuthenticatedUser);
			}
		}
		//this is the function called when success is return from api call
		function resolveAuthenticatedUser(data){
			if(data == true){
				$state.go('otp');
			}
		}
		//this is the function called when error is return from api call
		function errorAuthenticatedUser(error){
			console.log(error);
		}

	}
})();

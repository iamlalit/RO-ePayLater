(function(){
	'use strict';
	angular.module('mdnid.module')
		.controller('mdnidCntl', mdnidCntl);

	mdnidCntl.$inject = ['mdnidService', '$state', 'loaderService','roService'];

	function mdnidCntl(mdnidService, $state, loaderService,roService){
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
				//this will call the loading module
				//whenever need to make any api call call this loaderservice to show loading icon with full-overlay
				loaderService.toggle(true);
				//this API will call when user passed out of form validations
				//this API function(getAuthenticatedUser) is written inside the services
				//this will either return success(resolveAuthenticatedUser) or error message(errorAuthenticatedUser)
				mdnidService.getAuthenticatedUser(vm.mdnid, vm.phoneNumber).then(resolveAuthenticatedUser, errorAuthenticatedUser);
			}
		}
		//this is the function called when success is return from api call
		function resolveAuthenticatedUser(data){
			if(data.status == true){
				loaderService.toggle(false);
				roService.login(data.userId);
				$state.go('otp',{userId : data.userId,requestId : data.requestId,phone : data.phone,mdnid : data.mdnid });
			}
		}
		//this is the function called when error is return from api call
		function errorAuthenticatedUser(error){
			loaderService.toggle(false);
			console.log(error);
		}

	}
})();

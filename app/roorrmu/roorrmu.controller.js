(function(){
	'use strict';
	angular.module('roorrmu.module')
		.controller('roorrmuCntl', roorrmuCntl);

	roorrmuCntl.$inject = ['roorrmuService', '$state','roService'];

	function roorrmuCntl(roorrmuService, $state,roService){
		var vm = this;
		vm.submitRoOrRmuForm = submitRoOrRmuForm;
		vm.logout = logout;

		activate();

		///////////////////////////

		function activate(){

		}

		function submitRoOrRmuForm(isValid){
			if(isValid){
				//this API will call when user passed out of form validations
				//this API function(getUserType) is written inside the services
				//this will either return success(resolveUserType) or error message(errorUserType)
				roorrmuService.postUserType(vm.userType,$state.params.userId).then(resolveUserType, errorUserType);
			}
		}
		//this is the function called when success is return from api call
		function resolveUserType(data){
			if(data.status == true){
                 $state.go('userbasicdetails',{userId : data.userId});
                 			}
		}
		//this is the function called when error is return from api call
		function errorUserType(error){
			console.log(error);
		}
			function logout(){
        			roService.logout();
        		}
	}
})();

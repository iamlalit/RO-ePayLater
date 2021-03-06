(function(){
	'use strict';
	angular.module('useraddressdetails.module')
		.controller('useraddressdetailsCntl', useraddressdetailsCntl);

	useraddressdetailsCntl.$inject = ['useraddressdetailsService'];

	function useraddressdetailsCntl(useraddressdetailsService){
		var vm = this;

		vm.returnPartial = returnPartial;
		vm.submitUserAddressDetails = submitUserAddressDetails;
		vm.userAddressDetailsObject = useraddressdetailsService.userAddressDetailsObject;
		activate();

		///////////////////////////

		function activate(){

		}

		function returnPartial(view){
			return './shared/partial/_' + view + '.html';
		}

		function submitUserAddressDetails(isValid){
			if(isValid){
				//this API will call when user passed out of form validations
				//this API function(saveUserBasicDetails) is written inside the services
				//this will either return success(resolveUserDetails) or error message(errorUserDetails)
				useraddressdetailsService.saveUserAddressDetails(vm.userAddressDetails).then(resolveUserDetails, errorUserDetails);
			}
		}
		//this is the function called when success is return from api call
		function resolveUserDetails(data){
			if(data == true){
				//$state.go('userloandetails');
				//data is posted successfully
			}
		}
		//this is the function called when error is return from api call
		function errorUserDetails(error){
			console.log(error);
		}
	}
})();

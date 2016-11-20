(function(){
	'use strict';
	angular.module('userbasicdetails.module')
		.controller('userbasicdetailsCntl', userbasicdetailsCntl);

	userbasicdetailsCntl.$inject = ['userbasicdetailsService'];

	function userbasicdetailsCntl(userbasicdetailsService){
		var vm = this;

		vm.returnPartial = returnPartial;
		vm.submitUserBasicDetailsForm = submitUserBasicDetailsForm;
		vm.emailregex = new RegExp('.+@.+\\..+');
		vm.panNumberRegex = new RegExp('[A-Z]{5}[0-9]{4}[A-Z]{1}');
		vm.aadharRegex = new RegExp('[0-9]{4} [0-9]{4} [0-9]{4}');
		vm.userBasicDetails = [];
		activate();

		///////////////////////////

		function activate(){

		}

		function returnPartial(view){
			return './shared/partial/_' + view + '.html';
		}

		function submitUserBasicDetailsForm(isValid){
			if(isValid){
				//this API will call when user passed out of form validations
				//this API function(saveUserBasicDetails) is written inside the services
				//this will either return success(resolveUserDetails) or error message(errorUserDetails)
				userbasicdetailsService.saveUserBasicDetails(vm.userBasicDetails).then(resolveUserDetails, errorUserDetails);
			}
		}
		//this is the function called when success is return from api call
		function resolveUserDetails(data){
			if(data == true){
				//$state.go('useraddressdetails');
				//data is posted successfully
			}
		}
		//this is the function called when error is return from api call
		function errorUserDetails(error){
			console.log(error);
		}

	}
})();

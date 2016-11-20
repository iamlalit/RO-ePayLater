(function(){
	'use strict';
	angular.module('userloandetails.module')
		.controller('userloandetailsCntl', userloandetailsCntl);

	userloandetailsCntl.$inject = ['userloandetailsService'];

	function userloandetailsCntl(userloandetailsService){
		var vm = this;

		vm.returnPartial = returnPartial;
		vm.submitUserLoanDetailsForm = submitUserLoanDetailsForm;
		activate();

		///////////////////////////

		function activate(){

		}

		function returnPartial(view){
			return './shared/partial/_' + view + '.html';
		}

		function submitUserLoanDetailsForm(isValid){
			if(isValid){
				//this API will call when user passed out of form validations
				//this API function(saveUserBasicDetails) is written inside the services
				//this will either return success(resolveUserDetails) or error message(errorUserDetails)
				userloandetailsService.saveUserLoanDetails(vm.userLoanDetails).then(resolveUserDetails, errorUserDetails);
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

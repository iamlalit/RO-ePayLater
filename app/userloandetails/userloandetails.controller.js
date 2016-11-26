(function(){
	'use strict';
	angular.module('userloandetails.module')
		.controller('userloandetailsCntl', userloandetailsCntl);

	userloandetailsCntl.$inject = ['userloandetailsService', '$scope','$state'];

	function userloandetailsCntl(userloandetailsService, $scope,$state){
		var vm = this;
		vm.userloandetails = [];
		vm.returnPartial = returnPartial;
		vm.submitUserLoanDetailsForm = submitUserLoanDetailsForm;
		vm.addMoreItems = addMoreItems;
		vm.userloandetails.idProofs = userloandetailsService.idProofs;
		vm.userloandetails.addressProofs = userloandetailsService.addressProofs;
		vm.uploadCopy = uploadCopy;
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
				userloandetailsService.saveUserLoanDetails(vm.userLoanDetails,$state.params.userId).then(resolveUserDetails, errorUserDetails);
			}
		}
		//this is the function called when success is return from api call
		function resolveUserDetails(data){
			if(data.status == true){
				$state.go('userdownloadform');
				//data is posted successfully
			}
		}
		//this is the function called when error is return from api call
		function errorUserDetails(error){
			console.log(error);
		}

		function addMoreItems(obj, textString){
			userloandetailsService.addMoreItems(obj, textString);
		}

		function uploadCopy(id){
			document.getElementById(id).click();
		}

		$scope.fileNameChangedIdProof = function(event){
			var value = event.target.value;
	    if(typeof value !== "undefined"){
	      var fakeValue = value.replace('C:\\fakepath\\', '');
	      $scope.$apply(function() {
	          vm.userloandetails.idProofs[vm.userloandetails.idProofs.length-1].fakeValue = fakeValue;
						vm.userloandetails.idProofs[vm.userloandetails.idProofs.length-1].value = value;
	      });
	    }
		}

		$scope.fileNameChangedAddressProof = function(event){
			var value = event.target.value;
	    if(typeof value !== "undefined"){
	      var fakeValue = value.replace('C:\\fakepath\\', '');
	      $scope.$apply(function() {
						vm.userloandetails.addressProofs[vm.userloandetails.addressProofs.length-1].fakeValue = fakeValue;
						vm.userloandetails.addressProofs[vm.userloandetails.addressProofs.length-1].value = value;
	      });
	    }
		}

	}
})();

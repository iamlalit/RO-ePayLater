(function(){
	'use strict';
	angular.module('loanrenewalform.module')
		.controller('loanrenewalformCntl', loanrenewalformCntl);

	loanrenewalformCntl.$inject = ['loanrenewalformService'];

	function loanrenewalformCntl(loanrenewalformService){
		var vm = this;

		vm.returnPartial = returnPartial;
		vm.updateLoanRenewal = updateLoanRenewal;
		activate();

		///////////////////////////

		function activate(){

		}

		function updateLoanRenewal(isValid){
        			if(isValid){
        				//this API will call when user passed out of form validations
        				//this API function(getAuthenticatedUser) is written inside the services
        				//this will either return success(resolveAuthenticatedUser) or error message(errorAuthenticatedUser)
        				loanrenewalformService.updateLoanAmount(vm.userLoanDetails.loanAmt).then(resolveAuthenticatedUser, errorAuthenticatedUser);
        			}
     		}

     		function resolveAuthenticatedUser(data){
             			if(data == true){
             			//not decided

             			}else{
             			}
             		}
             		//this is the function called when error is return from api call
             		function errorAuthenticatedUser(error){
             			console.log(error);
             		}

		function returnPartial(view){
			return './shared/partial/_' + view + '.html';
		}
	}
})();

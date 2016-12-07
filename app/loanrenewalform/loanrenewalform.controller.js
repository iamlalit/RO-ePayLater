(function(){
	'use strict';
	angular.module('loanrenewalform.module')
		.controller('loanrenewalformCntl', loanrenewalformCntl);

	loanrenewalformCntl.$inject = ['loanrenewalformService','$state'];

	function loanrenewalformCntl(loanrenewalformService,$state){
		var vm = this;
        vm.submitLoanRenewalForm = submitLoanRenewalForm;
		vm.returnPartial = returnPartial;
		vm.resolveAuthenticatedUser = resolveAuthenticatedUser;
		vm.errorAuthenticatedUser = errorAuthenticatedUser;
		activate();

		///////////////////////////
        function submitLoanRenewalForm(isValid)
        {
            if(isValid){
				//this API will call when user passed out of form validations
				//this API function(getAuthenticatedUser) is written inside the services
				//this will either return success(resolveAuthenticatedUser) or error message(errorAuthenticatedUser)
				loanrenewalformService.saveRenewalData(vm.userLoanDetails,$state.params.mdnid,$state.params.phone).then(resolveAuthenticatedUser, errorAuthenticatedUser);
			}
        }
        	function resolveAuthenticatedUser(data){
        	   var element = angular.element('#loanCheckModal');
        			if(data.loanValid == true){

        			}
        			else if(data.loanValid == false){
                      element.modal('show');
        			}
        		}
        		//this is the function called when error is return from api call
        		function errorAuthenticatedUser(error){
        			console.log(error);
        		}
		function activate(){

		}

		function returnPartial(view){
			return './shared/partial/_' + view + '.html';
		}
	}
})();

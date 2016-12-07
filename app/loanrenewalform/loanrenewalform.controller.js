(function(){
	'use strict';
	angular.module('loanrenewalform.module')
		.controller('loanrenewalformCntl', loanrenewalformCntl);

	loanrenewalformCntl.$inject = ['loanrenewalformService','$state','roService'];

	function loanrenewalformCntl(loanrenewalformService,$state,roService){
		var vm = this;
        vm.submitLoanRenewalForm = submitLoanRenewalForm;
		vm.returnPartial = returnPartial;
		vm.resolveAuthenticatedUser = resolveAuthenticatedUser;
		vm.errorAuthenticatedUser = errorAuthenticatedUser;
		vm.logout = logout;
		vm.gotorormu = gotorormu;
		vm.loanAmount;
		activate();

		///////////////////////////
        function submitLoanRenewalForm(isValid)
        {
            if(isValid){
				//this API will call when user passed out of form validations
				//this API function(getAuthenticatedUser) is written inside the services
				//this will either return success(resolveAuthenticatedUser) or error message(errorAuthenticatedUser)
				loanrenewalformService.saveRenewalData(vm.userLoanDetails,$state.params.mdnid,$state.params.phone,$state.params.userId).then(resolveAuthenticatedUser, errorAuthenticatedUser);
			}
        }
        function logout(){
                    roService.logout();
                   		}
                  function gotorormu(){
                  $state.go('roorrmu',{userId: $state.params.userId});
                                    }

        	function resolveAuthenticatedUser(data){
        	   var element = angular.element('#loanCheckModal');
        			if(data.loanValid == true){
                     $state.go('thankyou');
        			}
        			else if(data.loanValid == false){
        			  vm.loanAmount = data.amount;
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

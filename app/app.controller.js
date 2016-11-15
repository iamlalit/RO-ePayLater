(function(){
	'use strict'

	angular.module('olympia-app')
		.controller('olympiaCntl', olympiaCntl);

	olympiaCntl.$inject = ['$window', '$rootScope', 'olympiaService'];

	function olympiaCntl($window, $rootScope, olympiaService){
		var vm = this;

		activate();

		/////////////////////////////

		function activate(){
			var token = olympiaService.getCookies();
			//validate this token
			olympiaService.verifyTokenAuthentication(token).then(successVerify);

			function successVerify(data){
				console.log(data);
				if(data.result === "Invalid"){
					$window.location.href = "http://olympia-wervingscockpit.ignite.online/wp-login.php?redirect_to=/occdashboard/";
					return false;
				}

				$rootScope.$broadcast('authenticated');
			}
		}
	}
})();

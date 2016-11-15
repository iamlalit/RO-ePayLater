(function(){
	'use strict'

	angular.element(function() {
    angular.bootstrap(document, ['ro-app']);
  });

	angular.module('ro-app', [
		//Third party dependencies
		'ui.router',

		'mdnid.module',
		'otp.module',
		'user.module'
	]);
})();

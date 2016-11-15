(function(){
	'use strict'

	angular.element(function() {
    angular.bootstrap(document, ['ro-app']);
  });

	angular.module('ro-app', [
		//Third party dependencies
		'ui.router',
		//Application specific
		'mdnid.module',
		'otp.module',
		'user.module',
		'signedForm.module'
	]);
})();

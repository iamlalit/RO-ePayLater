(function(){
	'use strict'

	// angular.bootstrap(document.body, ['ro-app']);
	angular.element(function() {
      angular.bootstrap(document, ['ro-app']);
    });

	angular.module('ro-app', [
		//Third party dependencies
		'ui.router'
	]);
})();

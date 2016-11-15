(function(){
	'use strict'

	angular.module('ro-app')
		.controller('roCntl', olympiaCntl);

	roCntl.$inject = ['$window', '$rootScope', 'roService'];

	function roCntl($window, $rootScope, roService){
		var vm = this;

		activate();

		/////////////////////////////

		function activate(){

		}
	}
})();

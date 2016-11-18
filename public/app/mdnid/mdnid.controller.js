(function(){
	'use strict';
	angular.module('mdnid.module')
		.controller('mdnidCntl', mdnidCntl);

	mdnidCntl.$inject = ['mdnidService'];

	function mdnidCntl(mdnidService){
		var vm = this;

		activate();

		///////////////////////////

		function activate(){

		}
	}
})();

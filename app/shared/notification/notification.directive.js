(function(){
	'use strict';
	angular.module('notification.module')
		.directive('notification', notification);

	notification.$inject = ['$timeout'];

	function notification($timeout){
		var directive;

		directive = {
			restrict : 'E',
			templateUrl : './shared/notification/notification.html',
			scope: {
				'alert' : '='
			},
			replace: true,
			link : function(scope, element, attrs){
				var _this = scope,
					alert = _this.alert,
					element = angular.element(element);

				scope.$watch('alert', function(newVal, oldVal){
					if(typeof newVal !== 'undefined'){
						if(newVal.isShow){
							element.addClass('show');
							scope.alert.isShow = false;
							$timeout(function(){
								element.removeClass('show');
							}, 5000)
						}
					}
				}, true);
			}
		};

		return directive;
	}
})();

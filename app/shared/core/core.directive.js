(function(){
	'use strict';
	angular.module('core.module')
		.directive('popoverTrig', popoverTrig)

		popoverTrig.$inject = [];

		function popoverTrig(){
			var directive;

			directive = {
				restrict : 'A',
				scope : {},
				link : linkFunction
			}

			return directive;

			///////////////////////////////////////

			function linkFunction(scope, element, attrs){
				var _element = element,
            input = _element.closest('.input-group').find('input');

				_element.on('click', popoverHandler);

				function popoverHandler(event){
          input.popover('show');
				}

        input.on('keydown', hidePopover);

        function hidePopover(event){
          if(input.hasClass('validation-error')){
            input.popover('hide');
          }
        }
			}
		}
})();

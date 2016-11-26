(function(ro){
	'use strict';
	angular.module('userloandetails.module')
	.service('userloandetailsService', userloandetailsService);

	userloandetailsService.$inject = ['$http', '$q'];

	function userloandetailsService($http, $q){
		var service,
				idProofs = [{id: 'idProof1', 'value': '', 'fakeValue': ''}],
				addressProofs = [{id: 'addressProof1', 'value': '', 'fakeValue': ''}];

		service = {
			saveUserLoanDetails: saveUserLoanDetails,
			addMoreItems: addMoreItems,
			idProofs: idProofs,
			addressProofs: addressProofs
		};

		return service;

		function saveUserLoanDetails(user,id) {
				var deferred = $q.defer();

				//in url please enter url of the api
				//mehtod could be get,post, delete and others standard http requet method
				//params will consist of the list of parameter(comma separated) that need to be passed in API call
			//	saveUserLoanDetails
				$http({
						url : 'https://dev.epaylater.in/epayLaterView/saveUserLoanDetails',
						method: "GET",
						params: {
							user: user,
							userId : id
						}
				})
				.success(function (data) {
						deferred.resolve(data);
				})
				.error(function () {
						deferred.reject("Failed to post data");
				});

				return deferred.promise;
		}

		function addMoreItems(obj, textString){
			var newItemNo = obj.length+1;
			obj.push({'id':textString+newItemNo, 'value': ''});
		}
	}

})(window);

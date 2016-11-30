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

		function saveUserLoanDetails(users, user) {
				var deferred = $q.defer();
				var formData = new FormData();
        formData.append("user", users);
				
        var opts = {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        };
				debugger;
				if (user.idProofs.value) {
	        for (var fileIndex = 0; fileIndex < user.idProofs.value.length; fileIndex++) {
	            formData.append("file" + fileIndex, user.idProofs.value[fileIndex]);
	        }
				}
				//in url please enter url of the api
				//mehtod could be get,post, delete and others standard http requet method
				//params will consist of the list of parameter(comma separated) that need to be passed in API call
				$http({
						url : 'url',
						method: "POST",
						params: {
							formData: formData,
							userId: userId
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

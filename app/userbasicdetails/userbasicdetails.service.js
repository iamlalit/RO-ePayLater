(function(ro){
	'use strict';
	angular.module('userbasicdetails.module')
	.service('userbasicdetailsService', userbasicdetailsService);

	userbasicdetailsService.$inject = ['$http', '$q'];

	function userbasicdetailsService($http, $q){
		var service,
			userBasicDetailsObject = {
				"firstname": "",
				"middle": "",
				"last": "",
				"email": "",
				"gender": "0",
				"education": "0",
				"dobDay": "0",
				"dobMonth": "0",
				"dobYear": "0",
				"noPanCard": true,
				"panNo": "",
				"govtID": 0,
				"aadharCard": "",
				"driverLicense": "",
				"dlDay": "0",
				"dlMonth": "0",
				"dlYear": "0",
				"passport": "",
				"passsportMonth": "0",
				"passportYear": "0",
				"passsportDay": "0",
				"voterId": ""
			};

		service = {
      saveUserBasicDetails: saveUserBasicDetails,
			userBasicDetailsObject: userBasicDetailsObject
    };

		return service;

		function saveUserBasicDetails(user) {
        var deferred = $q.defer();

				//in url please enter url of the api
				//mehtod could be get,post, delete and others standard http requet method
				//params will consist of the list of parameter(comma separated) that need to be passed in API call
        $http({
            url : 'url',
            method: "POST",
            params: {
							user: user
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
	}

})(window);

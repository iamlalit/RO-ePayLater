(function(){
	'use strict';
	angular.module('notification.module')
		.service('notificationService', notificationService);

	notificationService.$inject = ['$http', '$q'];

	function notificationService($http, $q){
		var service,
			notification = {
				'message' : 'invalid',
				'error' : false,
				'isShow' : false
			};

		service = {
			isNotification : false,
			notification : notification,
			setNotification : setNotification,
			getNotification: getNotification
		}

		return service;

		///////////////////////////////

		function setNotification(data){
			notification.message = data.message;
			notification.error = data.error;
		}

		function getNotification(){
			notification.isShow = true;
			return notification;
		}
	}
})();

(function(){
	'use strict'

	angular.module('opvolging.module')
		.controller('opvolgingCntl', opvolgingCntl);

	opvolgingCntl.$inject = ['opvolgingService', 'commonService', '$scope', 'loaderService', '$timeout'];

	function opvolgingCntl(opvolgingService, commonService, $scope, loaderService, $timeout){
		var vm = this;

		vm.isKandidaten = false;
		vm.dashboard = [];

		vm.printPage = commonService.printPage;

		activate();

		$scope.$on("dateRangePickerChanged", dateRangePickerChanged);
		$scope.$on("authenticated", activate);

		///////////////////

		function activate(){
			loaderService.toggle(true);

			commonService.init('.multiSelectOption');
			commonService.initializeSelect2('.multiSelectOption');
			commonService.initializeDateRange('.calenderRange');

			commonService.getDashboardOffice()
				.then(dashboardOfficeSuccess, dashboardOfficeError);

			dateRangePickerChanged();
		}

		function dashboardOfficeSuccess(data){
			vm.officesData = data;
		}

		function dashboardOfficeError(error){
			console.log(error);
		}

		function dateRangePickerChanged(){
			commonService.getDashboardData()
				.then(dashboardDataSuccess, dashboardDataError);
		}

		function dashboardDataSuccess(data){
			vm.isKandidaten = opvolgingService.isKandidatenShow();

			commonService.dashboardData = data;

			vm.dashboard = commonService.dashboardData;
			commonService.chartCallBack(opvolgingService.drawPieChart(vm.dashboard.gecontacteerdNumber, vm.dashboard.nietGecontacteeredNumber));
			commonService.chartCallBack(opvolgingService.drawPieChart1(vm.dashboard.eenWerkdagNumber, vm.dashboard.tweeWerkdagNumber, vm.dashboard.langerWerkdagNumber));
			commonService.chartCallBack(opvolgingService.drawPieChart2(vm.dashboard.intakegesprekPlaatsgevondenNumber, vm.dashboard.verdereOpvolgingNumber));
			commonService.chartCallBack(opvolgingService.stackedBarChart(vm.dashboard.uitzendplaatsingenMetUrenbriefjeNumber, vm.dashboard.wsPlaatsingenAangemaaktNumber));

			if(vm.isKandidaten){
				$timeout(function(){
					commonService.chartCallBack(opvolgingService.drawPieChart3(vm.dashboard.kandidatenGeplaatstNumber, vm.dashboard.intakegesprekPlaatsgevondenNumber - vm.dashboard.kandidatenGeplaatstNumber, 'enable'));
					commonService.chartCallBack(opvolgingService.drawPieChart7(vm.dashboard.kandidatenGeplaatstNumber, vm.dashboard.kandidatenVoorgesteldklantNumber - vm.dashboard.kandidatenGeplaatstNumber, 'enable'));
				});
			}else{
				$timeout(function(){
					commonService.chartCallBack(opvolgingService.drawPieChart3(vm.dashboard.kandidatenGeplaatstNumber, vm.dashboard.intakegesprekPlaatsgevondenNumber - vm.dashboard.kandidatenGeplaatstNumber, 'disable'));
					commonService.chartCallBack(opvolgingService.drawPieChart7(vm.dashboard.kandidatenGeplaatstNumber, vm.dashboard.kandidatenVoorgesteldklantNumber - vm.dashboard.kandidatenGeplaatstNumber, 'disable'));
				});
			}
			loaderService.toggle(false);
		}

		function dashboardDataError(error){
			console.log(error);

			loaderService.toggle(false);
		}
	}
})();

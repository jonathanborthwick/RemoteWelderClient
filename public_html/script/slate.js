worxlog.review.app = worxlog.review.app || angular.module('worxlogReview', []);
worxlog.review.app.controller('reviewController',
        [
            '$scope',
            function ($scope) {
                $scope.dateRange = {dateFrom: '', dateTo: ''}
                $scope.employeeHeader = {
                    employeeName: '', employeeID: '', aprovalStatus: '', workGroup: ''
                };
                $scope.general = {noOfEmployees: ''};
                $scope.workOrders = [];//for handling nested equipment todo 12th Oct 2015
                $scope.labour = [];//these labour rows are for a single work order mode only
                //$scope.workOrdersJustLabour = [];
                $scope.workOrdersJustLabour = [];//array of arrays for grouping labourt by workgroup
                $scope.workOrdersJustEquipment = [];//array of arrays for grouping equipment by workgroup
                $scope.justEquipment = [];//for single work order mode only

                var blankLabourRow = function () {
                    return {employeeName: '', employeeID: '', occupationCode: '', payCode: '', startDate: '', startTime: '', endDate: '',
                        endTime: '', totalTime: '0', taskId: '',taskName:'', description: '', smileyHappy: true, showGarbage: true, isSelected: false, json_wlid: '', wlid: '',
                        equipmentRows: []};
                };

                var blankEquipmentRow = function () {
                    return {equipmentID: '', description: '', startDate: '', startTime: '', endDate: '', endTime: '', taskID: '',
                        taskDescription: '', isSelected: false, smileyHappy: true, totalTime: '', json_wlid: '', wlid: ''};
                };

                $scope.getNewLabourRow = function () {
                    var newRow = new blankLabourRow();
                    return newRow;
                };
                $scope.getNewEquipmentRow = function () {
                    var newRow = new blankEquipmentRow();
                    return newRow;
                }

                $scope.reviewByName = function () {
                    worxlog.review.data.processDateRange($scope, "name");
                };
                $scope.reviewByWorkGroup = function () {
                    worxlog.review.data.processDateRange($scope, "work");
                };

                $scope.deleteJustEquipmentRow = function (index) {
                    //console.log("delete just equipment row from index " + index);
                    $scope.justEquipment.remove(index);
                };
                $scope.deleteJustLabourRow = function (index) {
                    //console.log("Delete just labour row from index " + index);
                    $scope.labour.remove(index);//use prototype defined in worxlogUtils
                };
                $scope.deleteWorkOrderLabourRow = function (tabIndex, rowIndex) {
                    //console.log("Delete labour row from tab index " + tabIndex + ", row " + rowIndex);
                    //var workOrderJustLabour = $scope.workOrdersJustLabour;
                    //console.log("workOrderJustLabour",workOrderJustLabour);
                    $scope.workOrdersJustLabour[tabIndex].labourData.remove(rowIndex);
                };
                $scope.deleteWorkorderEquipmentRow = function (tabIndex, rowIndex) {
                    //console.log("Delete equipment row from tab index " + tabIndex + ", row " + rowIndex);
                    $scope.workOrdersJustEquipment[tabIndex].equipmentData.remove(rowIndex);
                };
                
                $scope.sign = function(type,$scope){
                     worxlog.review.io.submission.sign(type,$scope);
                };
                $scope.submit = function(){
                    worxlog.review.io.submission.submit($scope);
                };

            }
        ]
        );

worxlog.review.getAngularScope = function (element) {
    var body = $(element)[0];
    var angularScope = angular.element(
            body).
            scope();
    worxlog.review.scope = angularScope;
    return angularScope;
};


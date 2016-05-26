'use strict';

rateContent.controller("rateContentController", function ($scope) {

    /**
     * intial value and options for rating directive
     **/
    $scope.rating = 1;
    $scope.options = {
        values: [1, 2, 3, 4, 5]
    };
    $scope.rateData = $scope.data;

});
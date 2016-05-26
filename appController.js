'use strict';

skyTest.controller("appController", function ($scope, $state, $rootScope) {

    $scope.data = {};
    $scope.results = [];
    $scope.boxes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    $scope.resultsPresent = false;


    /**
     * @param {string} x
     * @returns {number}
     * parses integer value from string
     */
    $scope.getIntValue = function (x) {
        return parseInt(x);
    };

    /**
     * toggles active states when leaderboard button is clicked
     **/
    $scope.toggleLeaderActive = function () {
        $("#rateContent").removeClass("active");
        $("#leaderBoard").addClass("active");
    };

    /**
     * toggles active states when rate content button is clicked
     **/
    $scope.toggleActive = function () {
        $("#rateContent").addClass("active");
        $("#leaderBoard").removeClass("active");
    };

    /**
     * brings up file selection modal
     **/
    $scope.loadPrompt = function () {
        $('#fileInput').click();
        $state.go("rateContent");
        $scope.toggleActive();
    }

    $("document").ready(function () {
        $("#fileInput").change(function () {
            processXml();
            $state.go("rateContent");
        });

    });

    /**
     * reads in and loads xml from file
     **/
    var processXml = function () {
        var fileInput = document.getElementById('fileInput');
        var file = fileInput.files[0];
        if (file.type.match("text/xml")) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $scope.$apply(function () {
                    $scope.data = $scope.convertToJson(reader.result);
                    $scope.loadData($scope.data);
                    $scope.resultsPresent = true;
                });
            }
            reader.readAsText(file);
        } else {
            alert("File not supported!");
        }
    }


    /**
     * @param {Object{}} data
     * loads data into results array
     **/
    $scope.loadData = function (data) {
        if (undefined != data.programmeData) {
            angular.forEach(data.programmeData.programme,
                function (programme, index) {
                    programme.rating = $scope.getIntValue(programme.rating);
                    $scope.results.push(programme);
                });
        }
    }

    /**
     * @param {String} input
     * converts xml to json
     **/
    $scope.convertToJson = function (input) {
        var x2js = new X2JS();
        var xmlText = input;
        return x2js.xml_str2json(xmlText);
    }

});

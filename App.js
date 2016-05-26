    'use strict';
    var skyTest = angular.module("skyTest", ['ui.router', 'awesome-rating', 'rateContent', 'contentLeaderBoard']);

    skyTest.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/rateOurContent");

        $stateProvider
            .state('rateContent', {
                url: "/rateOurContent",
                templateUrl: "Features/rateContent/rateOurContent.html",
                controller: "rateContentController",
                reload: true
            })
            .state('upload', {
                url: '/upload',
                templateUrl: 'Features/upload/upload.html'
            })
            .state('leaderBoard', {
                url: '/leaderBoard',
                templateUrl: 'Features/contentLeaderBoard/contentLeaderBoard.html',
                controller: 'contentLeaderBoardController'
            });

    });
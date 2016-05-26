'use strict';

contentLeaderBoard.controller("contentLeaderBoardController", function ($scope) {

    /**
     * @param {Object {}} a
     * @param {Object {}} b
     * @returns {number}
     * comparison function to be passed into sort 
     * ratings take priority
     * if ratings are the same 'id' will be the distinguishing attribute
     * both are sorted in descending order 
     **/
    function mysortfunction(programme1, programme2) {

        if (programme1.rating === programme2.rating) {
            var x = parseInt(programme1._id),
                y = parseInt(programme2._id);

            return x < y ? -1 : x > y ? 1 : 0;
        }
        return programme2.rating - programme1.rating;
    }


     /**
     * sorts programmes by rating and then id 
     **/
    if (undefined !== $scope.data.programmeData) {
        $scope.data.programmeData.programme.sort(mysortfunction);
        $scope.myData = $scope.data.programmeData.programme;
    } else {
        $scope.message = "YOU WILL NEED TO LOAD CONTENT TO SEE THE LEADERBOARD";
    }

    /**
     * initial value and options for rating directive
     **/
    $scope.rating = 1;
    $scope.options = {
        values: [1, 2, 3, 4, 5],
        readonly: true
    };
});
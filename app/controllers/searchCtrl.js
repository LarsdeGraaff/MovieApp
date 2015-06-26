/**
 * Created by jeansmits on 26/06/15.
 */


function searchCtrl($scope){
    $scope.message="Search form"
}

angular.module('movieApp.controllers')
    .controller('searchCtrl', searchCtrl);
/**
 * Created by jeansmits on 26/06/15.
 */
function collectionCtrl($scope,$http, apiUrl){
    var url=apiUrl + 'Movies';
    $http.get(url).success(function(data){
        $scope.movies=data;
    });
}


angular.module('movieApp.controllers')
    .controller('collectionCtrl', collectionCtrl)
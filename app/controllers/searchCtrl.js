/**
 * Created by jeansmits on 26/06/15.
 */


function searchCtrl($scope,$http,apiUrl,$log){
    $scope.message="Search form"

    $scope.searchMovie=function(title){
        $log.debug(title);

        var url=apiUrl + 'movies/search?title=' + title;
        $http.get(url).success(function(data) {
            $scope.results=data;
        });

        $scope.selectMovie=function(id){
            $scope.selectedId=id;
        }

        $log.debug('run');

    }
}

angular.module('movieApp.controllers')
    .controller('searchCtrl', searchCtrl);